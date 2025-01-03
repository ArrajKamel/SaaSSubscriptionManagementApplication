using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Subscription;
using api.Models;

namespace api.Interfaces
{
    public interface ISubscriptionRepository
    {
        Task<List<Subscription>> GetAllUserSubAsync(string userId);
        Task<Subscription?> GetByIdAsync(int id);
        Task<Subscription> CreateAsync(Subscription subscriptionModel);
        Task<Subscription?> UpdateAsync(string userId, UpdateSubscriptionDto subscriptionDto);
        Task<Subscription?> DeleteAsync(int subscriptionId, string userId);
    }
}