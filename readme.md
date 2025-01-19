# 🌐 SaaS Subscription Management Application

## **📜 Overview**
The **SaaS Subscription Management** application is a modern solution designed to help users efficiently monitor and manage their online subscriptions. With the rise of digital services, keeping track of multiple subscriptions can be challenging. This application simplifies the process by providing:  
- 🎛️ A centralized dashboard.  
- 📊 Actionable insights on expenses.  
- ❌ Easy subscription cancellation options.  

Built with a cutting-edge tech stack and inspired by **Vaporwave/Synthwave** aesthetics, this project ensures both functionality and a visually appealing user experience.

---

## **✨ Features**
- **🔄 Centralized Subscription Management:**
  - Unified dashboard displaying subscription details like renewal dates, costs, and payment methods.
  - Integration with third-party APIs for subscription cancellations.

- **💵 Expense Analysis:**
  - Visualize spending patterns over time with tools like Chart.js.
  - 🔮 Advanced analytics (premium feature) include trend forecasting and exportable reports.

- **⏰ Subscription Renewal Alerts:**
  - Notifications for upcoming renewals with customizable reminder settings.

- **💎 Premium Features:**
  - API-integrated subscription cancellations.
  - Advanced analytics with in-depth financial insights.

---

## **🛠️ Tech Stack**
- **Frontend:**
  - ⚛️ React.js for dynamic and responsive user interfaces.
  - 🎨 Styled with CSS, inspired by Vaporwave/Synthwave themes.

- **Backend:**
  - 🛡️ .NET Core for robust API services.
  - Handles user management, subscription tracking, and notifications.

- **Database:**
  - 🗄️ PostgreSQL for efficient data storage and querying.

- **Cloud Deployment:**
  - ☁️ Deployed on AWS or Azure for scalability and high availability.
  - 🔄 CI/CD pipelines with GitHub Actions or Azure DevOps.

---

## **🏗️ Architecture and Design**
- **Frontend:** Responsive UI built with React, styled for a modern look.  
- **Backend:** Robust API endpoints built with .NET Core.  
- **Database:** PostgreSQL to manage data such as subscriptions, analytics, and notifications.  
- **Cloud:** Deployment on AWS or Azure using Elastic Beanstalk and RDS for reliability and scalability.

---

## **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone https://github.com/ArrajKamel/SubscriptionManager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SubscriptionManager
   ```
3. Set up the backend:
   - Install .NET Core dependencies.
   - Configure PostgreSQL connection string in `appsettings.json`.
   - Run migrations and start the server.
   ```bash
   cd api
   dotnet ef database update
   dotnet run
   ```
4. Set up the frontend:
   - Navigate to the frontend directory and install dependencies.
   ```bash
   cd frontend
   npm install
   npm start
   ```
5. Access the application:
   - Open your browser and navigate to `http://localhost:3000`.

## **Screenshots**
- **Dashboard:**
  ![Dashboard Screenshot](path/to/screenshot1.png)
- **Expense Analysis:**
  ![Expense Analysis Screenshot](path/to/screenshot2.png)

## **🔗 API Endpoints**
- **🔐 Authentication:**
  - `POST /api/account/register`: ✍️ Register a new user.
  - `POST /api/account/login`: 🔑 Authenticate and get a JWT.

- **👤 User Management:**
  - `GET /api/account`: 📄 Get user details.

- **📦 Subscriptions:**
  - `POST /api/subscriptions`: ➕ Add a new subscription.
  - `GET /api/subscriptions`: 📋 Get all subscriptions.

---

## **🤝 Contributing**
1. 🍴 Fork the repository.
2. 🌱 Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. 💾 Commit your changes and push to your branch:
   ```bash
   git push origin feature-name
   ```
4. Create a pull request and describe your changes.


---

Feel free to contribute, raise issues, or suggest enhancements!

