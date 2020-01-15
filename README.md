# React C\# Practice

## Project Description
This is a personal project to continue learning about web development. This is web app follows [Building React and ASP.NET Core Application](https://www.linkedin.com/learning/building-react-and-asp-dot-net-core-applications) from Linkedin Learning. The web app will feature the following:
* React.js for the frontend
* ASP.NET Core API for the backend
* Redux
* Auth0 for authentication

---

## Learning Journal
### React
* Component -  An individual item that can obtain other items. It serves as a container or logic to get data, other components for specific functionality etc. 
* Props - Similar to an HTML attribute. It allows any data type to be passed as long as JavaScript support it. 
  * Context is used to pass data through many levels
* State - A place where component data is saved. Each component can have a state.
* JSX - Allows XML like code to be written by combining HTML, CSS and JavaScript.
  * Separation of the concerns can be achieved by separating the HTML, CSS and JavaScript code into different files. 
* Lifecycle - Every components goes through certain cycles and all those separate stages can be accesd by using React lifecycle methods.
### Redux
* Reducer - describes how the application's state changes
### Auth0

---

## Getting Started
### Clone Repository
Clone this repository to your local machine.
```bash
$ git clone https://github.com/jeremymaya/react-c-sharp-practice.git
```

To run the program from Visual Studio:
Select File -> Open -> ```ReactCSharpPractice``

Next navigate to the location you cloned the Repository.

Double click on the ReactCSharpPractice directory.

Then select and open ReactCSharpPractice.sln

### Install Libraries
Go to your project's roo folder in Terminal and install the following libraries:
* Axios (sends HTTPS requests to the API endpoints)
    ```bash
    npm install axios --save
* Redux
    ```bash
    npm install redux
    ```
* React Redux (connects redux store to ReactComponents)
    ```bash
    npm install react-redux
    ```
* Redux Thunk (a redux middleware for async actions or promises)
    ```bash
    npm install redux-thunk
    ```
* Auth0
    ```bash
    npm install @auth0/auth0-spa-js
    ```
### Setup Auth0 Account
Go to [Auth0 website](https://auth0.com/) and make an account.

Next follow the [Auth0 Single-Page App for React](https://auth0.com/docs/quickstart/spa/react) guideline to configure Auth0 account.

---

## Visuals
### Home
![home](https://github.com/jeremymaya/react-c-sharp-practice/blob/master/Assets/home.png)
### Home After Logging via Auth0
![home-loggedin](https://github.com/jeremymaya/react-c-sharp-practice/blob/master/Assets/home-loggedin.png)
### View All Trips
![trips](https://github.com/jeremymaya/react-c-sharp-practice/blob/master/Assets/trips.png)
### Update Trip
![update](https://github.com/jeremymaya/react-c-sharp-practice/blob/master/Assets/update.png)
### Delete Trip
![delete](https://github.com/jeremymaya/react-c-sharp-practice/blob/master/Assets/delete.png)
### Create Trip
![create](https://github.com/jeremymaya/react-c-sharp-practice/blob/master/Assets/create.png)

---

## Credit
[Linkedin Learning - Building React and ASP.NET Core Application](https://www.linkedin.com/learning/building-react-and-asp-dot-net-core-applications)  
[Stack Overflow - What are differences between redux, react-redux, redux-thunk?](https://stackoverflow.com/questions/38405571/what-are-differences-between-redux-react-redux-redux-thunk) . 
[Auth0 Docs - Auth0 Single-Page App for React](https://auth0.com/docs/quickstart/spa/react)

---

## Change Log
0.0: Project Started - 06 Jan 2020 9:17 PM
