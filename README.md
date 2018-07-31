# ASP.NET Core / React SPA Template App 

This app is a template application using ASP.NET Core 2.1 for a REST/JSON API server (as well as mock services) and React for a web client.
The code is based on ASP.Net Core 2.1 React-Redux template and merge more features from "React + Redux - User Registration and Login Tutorial & Example"(https://github.com/cornflourblue/react-redux-registration-login-example).
The following features are included in this version:
  - top toolbar
  - left side nav menu  
  - mock axios 
  - user registration/login 

## Overview of Stack
- Server
  - ASP.NET Core 2.1
  - Web Api
- Client
  - React 16.X
  - react-scripts to build/run app
  - CSS Modules
  - Fetch API for REST requests

## Demo
http://dotnetcore-react-skeleton20180730104349.azurewebsites.net/
## Setup

1. Install the following:
   - [.NET Core 2.1](https://www.microsoft.com/net/core)
   - [Node.js >= v8](https://nodejs.org/en/download/)
2. fetch the code "git clone https://github.com/LeiZheng/CloudAtlas-Skeleton.git"
3. Run "dotnet run"
4. Open URL with http://localhost:56989 fetching from comamnd window

This template was developed and tested on windows but should run on mac/linux as well.  If you experience any issues getting it to run on Windows and work through them, please submit a PR!

## SPA Clients

The SPA Clients is platform indepdent. just go to CleintApp folder and run the script following:

1. ### `npm install`

  When first cloning the repo or adding new dependencies, run this command.  This will:

  - Install Node dependencies from package.json
  - Install .NET Core dependencies from api/api.csproj and api.test/api.test.csproj (using dotnet restore)

2. ### `npm start`

  To start the app for development, run this command.  This will:

3. ### `npm test`

  This will run the xUnit tests in api.test/ and the Mocha/Enzyme tests in client-react.test/.

## Credit

The following resources were helpful in setting up this template:

- [Use the React project template with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-2.1&tabs=visual-studio)
- [A Real-World React.js Setup for ASP.NET Core and MVC5](https://www.simple-talk.com/dotnet/asp-net/a-real-world-react-js-setup-for-asp-net-core-and-mvc)
- My own perseverance because this took a _lot_ of time to get right 😁
