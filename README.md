# sv

## Creating a project
```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.12.8 create --template minimal --types ts --add prettier eslint --install npm compound-svelte
```

## Developing

installed dependencies with `npm install`  

start a development server:
```sh
npm run dev
```

## Building

To create a production version of your app:

```sh
npm run build
```

## Progress

# Sprint 1-  Session 1
-	Front end – created new folder for Compound-Svelte, installed svelte - npx sv cre.ate compound-svelte and installed packages npm. Npm run dev now runs localhost http://localhost:5173/
-	Added Bulma and sans fonts to app.html + changed route  +pages to hello Compound to test. To start work on routes which will be front end focused to get app up and running.
- Created new repository on Github to upload project
Sprint 4 - 23/03/26
# Session 1
-	Front end – created new folder for Compound-Svelte, installed svelte - npx sv cre.ate compound-svelte and installed packages npm. Npm run dev now runs localhost http://localhost:5173/
-	Added Bulma and sans fonts to app.html + changed route  +pages to hello Compound to test. To start work on routes which will be front end focused to get app up and running. 
-	Created a splashscreen which is the opening page of the app where signup and login buttons are available. Splashscreen is imported to routes +page.svelte. The signup and login buttons are linked to their locations in routes. Added static images same as Hapi Compound.
-	Created components User Credentials and User Details in Lib-ui. For validation on email password, and username. Created login form and added the components to Login +page. Now when login is pressed it will display a login Form to enter username details.

# Session 2
-	Updated the UX, created logged inUser + subtitle In runes.svelte.ts that can be used dynamically anywhere in the app. Logged in user to show the users email in navbar when logged in and subtitle to label the page the user is on.
-	Created a header, menu and navbar components. Navbar is just before logging in. Menu is when user successfully logs in which shows new navbar with logged in user which is added to +layout which only renders if logged in user is successful.
-	Created a logout route, which sets the logged in users email to “” and returns to welcome splashscreen.
-	Added predefined workout cards to dashboard, need to create views for the them next when button is pressed.
-	Currently have it set to allow any email + pass to pass at login to work on the app, will update this later to allow only signed up users to access it.



