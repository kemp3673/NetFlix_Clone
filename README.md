<div align="center">
  <img src="https://user-images.githubusercontent.com/102747919/225429659-285576fc-ff1d-4a11-a95f-fcf9f4a8de88.png" alt="Logo"/>
 </div>
 
# NotFlix: A Netflix Clone to practice user authentication and UI creation

<div align="center">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React.js"/>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"/>
<img alt="axios" src="https://img.shields.io/badge/-axios-000000?style=for-the-badge&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Styled%20Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components" />
<img alt="Google Analytics" src="https://img.shields.io/badge/-Google%20Analytics-E37400?style=for-the-badge&logo=google-analytics&logoColor=white"/>
</div>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Application Overview

When user first visits site, they are presented with a sign-up page. If they already have an account they can click "Log In" to be redirected to the login page. Additionally, if they are already logged in, they will be redirected to the main component instead of the sign-up page. Account creation and login are handled with Firebase authentication.

![SignUp](https://user-images.githubusercontent.com/102747919/225429411-2644f163-2e19-4675-a8be-f61356544a28.png)

The login page has a link to return to the sign-up page if user does not have an account. Additionally, the page has a link to redirect the user to a password reset component if they have forgotten their password. This utilizes Firebase's password reset function.

![Login](https://user-images.githubusercontent.com/102747919/225429462-d20d4976-d14d-4e8f-9366-411afa7891dc.png)

The password reset component has a link to return to the login page in the event the user remembers their password. Otherwise, the user should enter their email to receive a password reset email from Firebase.

![PasswordReset](https://user-images.githubusercontent.com/102747919/225429489-c893234b-6ae4-4757-a471-5763c0f28ebf.png)

Once a user is authenticated and logged in, the application stores a localstorage token to keep the user logged in. In order to log out, the user can click the log out icon in the top right corner. This removes the token from local storage and redirects the user to the sign-up page.

The main component utilizes TMDb API to retrieve a list of movies for each category. When the user hovers over a row, left and right navigation arrows will appear which will allow the user to scroll through the list at a rate of the width of the screen. Hovering over an image will display a background overlay that includes the movie title and summary of the movie. Clicking on the image will redirect the user to the movie player component. The main component also includes a list of free to watch movies selected from Youtube and stored in a static file.

![Main](https://user-images.githubusercontent.com/102747919/225429512-0248558c-d42a-440b-b124-e9594d437328.png)

The player component utilizes the Youtube API to play the selected movie trailer. In order to return to the main component, the user simply clicks the back arrow located in the top left corner.

![VidePlayer](https://user-images.githubusercontent.com/102747919/225429593-752a9066-4785-4678-9f66-265436907aa4.png)
