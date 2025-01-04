using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOs.Subscription;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace api.Repository
{
    public class SubscriptionRepository : ISubscriptionRepository
    {
        private readonly ApplicationDBContext _context;
        public SubscriptionRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        
        public async Task<Subscription?> CreateAsync(Subscription subscriptionModel)
        {
            // //check if the subscription is alrady exited 
            // var check = await _context.subscriptions.FirstOrDefaultAsync(s => 
            //     s.ServiceName.ToLower() == subscriptionModel.ServiceName.ToLower()
            //     && s.AppUserId == subscriptionModel.AppUserId);

            // if(check != null)
            //     return null;

            await _context.subscriptions.AddAsync(subscriptionModel);
            await _context.SaveChangesAsync();
            return subscriptionModel;
        }

        public async Task<Subscription?> DeleteAsync(int subscriptionid, string userId)
        {
            var subscription = await _context.subscriptions
            .Include(s => s.AppUser) 
            .FirstOrDefaultAsync(s => s.Id == subscriptionid && s.AppUser.Id == userId);
            
            if(subscription == null)
                return null; 
            
            _context.subscriptions.Remove(subscription);
            await _context.SaveChangesAsync();
            return subscription;
        }

        public async Task<List<Subscription>> GetAllUserSubAsync(string userId)
        {
            var subscriptions = _context.subscriptions.Where(s => s.AppUser.Id == userId);
            return await subscriptions.ToListAsync();
        }

        public async Task<Subscription?> GetByIdAsync(int id)
        {
            return await _context.subscriptions.Include(a => a.AppUser).FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Subscription?> UpdateAsync(string userId, UpdateSubscriptionDto subscriptionDto)
        {
            var subscription = await _context.subscriptions
            .Include(s => s.AppUser) 
            .FirstOrDefaultAsync(s => s.Id == subscriptionDto.Id && s.AppUser.Id == userId);

            if (subscription == null)
                return null; 
            
            subscription.ServiceName =subscriptionDto.ServiceName;
            subscription.Cost = subscriptionDto.Cost;
            subscription.BillingFrequency = subscriptionDto.BillingFrequency;
            subscription.NextBillingDate = subscriptionDto.NextBillingDate;

            _context.subscriptions.Update(subscription);
            await _context.SaveChangesAsync();

            return subscription;
        }

    }
}