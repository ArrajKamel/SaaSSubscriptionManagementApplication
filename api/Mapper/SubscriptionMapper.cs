using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Subscription;
using api.Models;

namespace api.Mapper
{
    public static class SubscriptionMapper
    {
        public static Subscription SubscriptionCreateDtoToSubscription(this CreateSubscriptionDto subscriptionDto)
        {
        return new Subscription()
        {
            ServiceName = subscriptionDto.ServiceName, 
            Cost = subscriptionDto.Cost,
            BillingFrequency = subscriptionDto.BillingFrequency,
            NextBillingDate = subscriptionDto.NextBillingDate
        };
        }

        public static SubscriptionDto ToSubscriptionDto(this Subscription subscription)
        {
            return new SubscriptionDto()
            {
                Id = subscription.Id,
                ServiceName = subscription.ServiceName,
                Cost = subscription.Cost,
                NextBillingDate = subscription.NextBillingDate,
                BillingFrequency = subscription.BillingFrequency
            };
        }
    }
}