using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using api.DTOs.Account;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace api.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController: ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signinManager; 
        private readonly ITokenService _tokenService; 
        public AccountController(UserManager<AppUser> userManager, ITokenService tokenService, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signinManager = signInManager; 
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try{
                if(!ModelState.IsValid)
                    return BadRequest(ModelState);
            
                var appUser = new AppUser
                {
                    UserName = registerDto.UserName,
                    Email = registerDto.EmailAddress,
                    IsPremium = false
                };
                var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password);

                if(createdUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(appUser, "User");
                    if(roleResult.Succeeded)
                        return Ok(
                            new NewUserDto
                            {
                                UserName = registerDto.UserName, 
                                Email = registerDto.EmailAddress,
                                IsPremium = appUser.IsPremium,
                                Token = _tokenService.CreateToken(appUser)
                            }
                        );
                    else 
                        return StatusCode(500, roleResult.Errors);
                }
                else 
                    return StatusCode(500, createdUser.Errors);
            }
            catch(Exception e)
            {
                return StatusCode(500, e);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName.ToLower() == loginDto.UserName.ToLower());

            if(user == null)
                return Unauthorized("invalid username!!");

            var result = await _signinManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
            
            if(!result.Succeeded)    
                return Unauthorized("user name not found or password is not correct!!");

            return Ok(
                new NewUserDto 
                {
                    UserName = user.UserName,
                    Email = user.Email,
                    IsPremium = user.IsPremium, 
                    Token = _tokenService.CreateToken(user)
                }  
            );
        }

        [HttpPost("process-payment")]
        [Authorize]
        public async Task<IActionResult> ProcessPayment()
        {
            try
            {
                // Extract user from the token
                var userId = User?.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized(new { message = "User ID not found in token." });
                }

    
                // Retrieve user
                var user = await _userManager.Users.FirstOrDefaultAsync(u => u.Id == userId);

                if (user == null)
                {
                    return Unauthorized(new { message = "User not found." });
                }

                // Simulate successful payment
                bool paymentSuccessful = true; // Replace with actual payment integration logic

                if (!paymentSuccessful)
                {
                    return BadRequest(new { message = "Payment failed." });
                }

                // Call SetPremium to update premium status
                return await SetPremium();
            }
            catch (Exception e)
            {
                return StatusCode(500, new { message = "An error occurred while processing payment.", error = e.Message });
            }
        }


        [HttpPatch]
        [Authorize]
        public async Task<IActionResult> SetPremium()
        {
            try
            {
                var user = await _userManager.GetUserAsync(User);

                if (user == null)
                {
                    return NotFound(new { message = "User not found." });
                }

                user.IsPremium = true;

                var result = await _userManager.UpdateAsync(user);

                if (result.Succeeded)
                {
                    return Ok(new { message = "User successfully set to Premium.", user = new { user.UserName, user.IsPremium } });
                }
                else
                {
                    return StatusCode(500, new { errors = result.Errors.Select(e => e.Description).ToList() });
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, new { message = "An error occurred while updating the user.", error = e.Message });
            }
        }

     
    }
}