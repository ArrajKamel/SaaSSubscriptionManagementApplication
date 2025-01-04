using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Subscription;
using api.Extensions;
using api.Interfaces;
using api.Mapper;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace api.Controllers
{
    [Route("api/subscription")]
    [ApiController]
    public class SubscriptionController: ControllerBase
    {
        private readonly ISubscriptionRepository _subRepo;
        private readonly UserManager<AppUser> _userManager; 
        public SubscriptionController(
            ISubscriptionRepository subscriptionRepository,
            UserManager<AppUser> userManager
        )
        {
            _subRepo = subscriptionRepository; 
            _userManager = userManager; 
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllUserSub()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            if (appUser == null)
                return Unauthorized("User not found or unauthorized.");
            
            var subscriptions = await _subRepo.GetAllUserSubAsync(appUser.Id);
            var subscriptionDto = subscriptions.Select(s => s.ToSubscriptionDto());
            return Ok(subscriptionDto);
        }

        [HttpGet("{id}:int")]
        public async Task<IActionResult> GetById(int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var subscription = await _subRepo.GetByIdAsync(id);
            if (subscription == null)
            {
                return NotFound();
            }
            return Ok(subscription.ToSubscriptionDto());
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create([FromBody] CreateSubscriptionDto subscriptionDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            if (appUser == null)
                return Unauthorized("User not found or unauthorized.");
        
            var subscriptionModle = subscriptionDto.SubscriptionCreateDtoToSubscription();
            subscriptionModle.AppUserId = appUser.Id; 
            var creationStatus = await _subRepo.CreateAsync(subscriptionModle);
            // if(creationStatus == null)
            //     return StatusCode(409, subscriptionDto.ServiceName +" already existed!");
            return CreatedAtAction(nameof(GetById), new { id = subscriptionModle }, subscriptionModle.ToSubscriptionDto());
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> Update([FromBody] UpdateSubscriptionDto subscriptionDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            if (appUser == null)
                return Unauthorized("User not found or unauthorized.");
    
            var subscription = await _subRepo.UpdateAsync(appUser.Id, subscriptionDto);
            if(subscription == null)
                return NotFound();
            return Ok(subscription.ToSubscriptionDto());
        }

        [HttpDelete]
        [Authorize]
        public async Task<IActionResult> Delete(int subscriptionId)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            if (subscriptionId <= 0)
                return BadRequest("Invalid subscription ID.");
            
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);

            if (appUser == null)
                return Unauthorized("User not found or unauthorized.");
            
            var subscriptionToDelete = await _subRepo.DeleteAsync(subscriptionId, appUser.Id);
            if(subscriptionToDelete == null)
                return NotFound();
            
            return NoContent();
        }
    }
}