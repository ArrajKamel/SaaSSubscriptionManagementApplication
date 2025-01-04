export type SubscriptionPost = {
    serviceName: string, 
    cost: number,
    billingFrequency: string,
    nextBillingDate: string,
};
  
export type SubscriptionGet = {
    id: number,
    serviceName: string, 
    cost: number,
    billingFrequency: string,
    nextBillingDate: string,
    createdAt: string,
};