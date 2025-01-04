import axios from "axios";
import { SubscriptionGet, SubscriptionPost } from "../Models/Subscription";
import { handleError } from "../Helper/ErrorHandler";

const api = "http://localhost:5058/api/subscription";


export const subscriptionPostAPI = async (
    serviceName: string,
    cost: number,
    billingFrequency: string,
    nextBillingDate: string,
) => {
  try {
    const data = await axios.post<SubscriptionPost>(api , {
      serviceName: serviceName,
      cost: cost, 
      billingFrequency: billingFrequency, 
      nextBillingDate: nextBillingDate
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

// export const subscriptionPostAPI = async (
//   serviceName: string, 
//   cost: number,
//   billingFrequency: string,
//   nextBillingDate: string,
// ) => {
//   try {
//     const data  = await axios.post<SubscriptionPost>(api, {
//       serviceName,
//       cost,
//       billingFrequency,
//       nextBillingDate,
//     });
//     return data;
//   } catch (error) {
//     handleError(error);
//     throw error; // Propagate error to the caller
//   }
// };

export const subscriptionGetAPI = async (): Promise<SubscriptionGet[] | undefined>  => {
  try {
    const { data } = await axios.get<SubscriptionGet[]>(api);
    return data;
  } catch (error) {
    handleError(error);
  }
};


export const subscriptionDeleteAPI = async (subscriptionId: number) => {
    try {
      var test = api + `?id=${subscriptionId}`;
      console.log(test);
      const data = await axios.delete<SubscriptionPost>(api + `?subscriptionId=${subscriptionId}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  };