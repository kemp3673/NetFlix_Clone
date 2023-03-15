# NotFlix: A Netflix Clone to practice user authentication and UI creation



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Application Overview

1. When user first visits site, they are presented with a sign-up page. If they already have an account they can click "Log In" to be redirected to the login page. Additionally, if they are already logged in, they will be redirected to the main component instead of the sign-up page. Account creation and login are handled with Firebase authentication.

1. The login page has a link to return to the sign-up page if user does not have an account. Additionally, the page has a link to redirect the user to a password reset component if they have forgotten their password. This utilizes Firebase's password reset function.

1. The password reset component has a link to return to the login page in the event the user remembers their password. Otherwise, the user should enter their email to receive a password reset email from Firebase.

1. Once a user is authenticated and logged in, the application stores a localstorage token to keep the user logged in. In order to log out, the user can click the log out icon in the top right corner. This removes the token from local storage and redirects the user to the sign-up page.

1. The main component utilizes TMDb API to retrieve a list of movies for each category. When the user hovers over a row, left and right navigation arrows will appear which will allow the user to scroll through the list at a rate of the width of the screen. Hovering over an image will display a background overlay that includes the movie title and summary of the movie. Clicking on the image will redirect the user to the movie player component. The main component also includes a list of free to watch movies selected from Youtube and stored in a static file.

1. The player component utilizes the Youtube API to play the selected movie trailer. In order to return to the main component, the user simply clicks the back arrow located in the top left corner.