import React, { useState } from "react";
import "./NewSubscriptionDashboard.css";
import { subscriptionPostAPI } from "../../Services/SubscriptionService";
import { toast } from "react-toastify";

const NewSubscriptionDashboard: React.FC = () => {
  const [serviceName, setServiceName] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [billingFrequency, setBillingFrequency] = useState<string>("Monthly");
  const [nextBillingDate, setNextBillingDate] = useState<string>("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      await subscriptionPostAPI(serviceName, cost, billingFrequency, nextBillingDate)
      .then((res) => {
        if(res){
          toast.success("subscription created successfully!");
        }
      })
      .catch((e) => {
        toast.warning(e);
        console.log(e.message);
      })
  };

  // const registerUser = async (email:string, username:string, password: string) => {
  //         await registerAPI(email, username, password).then((response) => {
  //             if(response) {
  //                 localStorage.setItem("token", response?.data.token);
  //                 const userObj =  {
  //                     userName: response?.data.userName,
  //                     email: response?.data.email
  //                 }
  //                 localStorage.setItem("user", JSON.stringify(userObj));
  //                 setToken(response?.data.token);
  //                 setUser(userObj!);
  //                 setIsPremiumState(false);
  //                 toast.success("login success!");
  //                 navigate("/");
  //             }
  //         })
  //         .catch((e) => toast.warning("server error occoured!"));
  //     };
  

  return (
    <div className="new-subscription-dashboard">
      <h1>Add New Subscription</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Service Name:
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
          />
        </label>
        <label>
          Cost:
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            required
          />
        </label>
        <label>
          Billing Frequency:
          <select
            value={billingFrequency}
            onChange={(e) => setBillingFrequency(e.target.value)}
            required
          >
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </label>
        <label>
          Next Billing Date:
          <input
            type="date"
            value={nextBillingDate}
            onChange={(e) => setNextBillingDate(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit-button">Add Subscription</button>
      </form>
    </div>
  );
};

export default NewSubscriptionDashboard;
