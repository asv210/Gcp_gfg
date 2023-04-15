## Project Description: Fortune Farm

Fortune Farm is an innovative agriculture project that aims to provide farmers with easy access to agriculture products and weather information for better crop management. The project is designed to help farmers improve their farming practices, increase their productivity, and generate more income by leveraging the power of technology.

## Technologies

Frontend: The frontend of the Fortune Farm project is developed using React JS, a popular JavaScript library for building user interfaces. React JS provides a modern and efficient approach to building web applications and allows for seamless updates and modifications.

Backend: The backend of the Fortune Farm project is developed using Node JS, a server-side JavaScript runtime. Node JS provides a scalable and efficient way to handle server-side logic and database interactions.

Database: The Fortune Farm platform uses MongoDB, a popular NoSQL database, to store and manage data. MongoDB provides a flexible and scalable approach to data storage and allows for efficient querying and indexing.

Deployment: The Fortune Farm project is deployed using Google Cloud and AMD instance, which provides a reliable and scalable infrastructure for hosting web applications. The deployment process is automated using CI/CD pipelines to ensure a seamless and error-free deployment process.

## Roles of team members

Rahul Shinde :- Frontend part ( weather API fetching and UI desgin) and deployment of backend and frontend to Google cloud.
Apar Solanki :- Backend part (creating REST APIs for CRUD operations and integration of backend with frontend) 
Shreya Patel :- Frontend part (UI desgin)
Sanjana Daki :- Frontend part (UI design)


Since this project have both the client application and the server application there is node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json.

This app have been deployed directly to Google Cloud using AMD instance. The backend nodejs server is deployed in Compute engine Virtual instance and the frontend reactjs is deployed in app engine and its build folder in cloud storage. 

## File structure
#### `Frontend` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `images` - This folder holds assets such as images.
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `Backend` - Holds the server application
- #### `db` - This holds our configuration files, like mongoDB uri
- #### `web` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `index.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


### View Project

http://meta-passkey-383508.uc.r.appspot.com/



