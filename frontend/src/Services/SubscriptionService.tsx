import axios from "axios";
import { SubscriptionGet, SubscriptionPostAndPut } from "../Models/Subscription";
import { handleError } from "../Helper/ErrorHandler";

const api = "http://localhost:5058/api/subscription";


// export const subscriptionPostAPI = async (
//     serviceName: string, 
//     cost: number,
//     billingFrequency: string,
//     nextBillingDate: string,
// ): Promise<SubscriptionPostAndPut | undefined> => {
//   try {
//     const { data } = await axios.post<SubscriptionPostAndPut>(api, {
//         serviceName: serviceName,
//         cost: cost,
//         billingFrequency: billingFrequency, 
//         nextBillingDate: nextBillingDate
//     });
//     return data;
//   } catch (error) {
//     handleError(error);
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