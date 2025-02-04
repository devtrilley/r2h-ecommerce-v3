React eCommerce v3 Refactor
This repository contains the refactored version of my React-based eCommerce project. While the code in this repository reflects the updated project requirements, the live hosted application is linked to my original repository, as per instructor guidance.

Hosted Application
The application is hosted on AWS Amplify and can be accessed here:
[Live Demo](https://main.d9trcm7eha9pk.amplifyapp.com/)

Original Repository
The original repository containing the hosted version of the application is available here:
[Original GitHub Repository](https://github.com/devtrilley/r2h-ecommerce-site)

Known Issue: Product Loading Delay
Description
The product page fetches product data dynamically using an API call to the backend. However, there is a noticeable delay before products are rendered on the page. This delay is due to the fetch operation, which takes a few moments to retrieve the product data. You can observe this behavior in the Network tab of Google DevTools, where the fetch request takes time to complete.

Why This Happens
The backend API response time is causing the delay.
While the app efficiently updates the UI once the fetch is completed, the waiting period results in a blank or partially loaded page.
Current Solution
To improve the user experience, I plan to:

Implement a Loading Spinner: Display a spinner or placeholder content while the products are being fetched.
Optimize Backend Response Times: Investigate and address any inefficiencies in the backend API.
Repository Details
What’s New in This Repository
This new repository (r2h-ecommerce-v3) was created to submit the refactored project as per the React eCommerce v2 Refactor Challenge guidelines. Key features of this refactor include:

Modular and reusable components:
ProductCard.jsx
InputField.jsx
Button.jsx
Improved use of props and state management.
Enhanced user experience and UI consistency.
Hosting Guidance
As instructed, the live website remains linked to the original repository (r2h-ecommerce-site) to avoid the need to rehost the application on AWS Amplify. This ensures the hosted code remains consistent with the project requirements while allowing refactored code to be submitted for review separately.

How to Run Locally
Clone this repository:

git clone https://github.com/devtrilley/r2h-ecommerce-v3.git
cd r2h-ecommerce-v3

Install dependencies:
npm install

Start the development server:
npm run dev

Open your browser and navigate to:
http://localhost:5173

Contact
If you have any questions or concerns, feel free to contact me via GitHub or at the email address linked to my profile.

