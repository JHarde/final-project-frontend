# Climat game - Final project at Technigo Bootcamp
A game built in React aimed towards children to create awarness of and interest in the climate change. 

1. Create an account/login or choose to play as guest. 
2. Choose one of three games to play
3. The games are either to answer a question or to drag and drop objects.
4. Choose to finish the game or continue by playing one of the other games
5. When statified choose to end the game and send your result to the highscore list

## Process
We set the basic structure and sketch of MVP in Figma before starting to code. This helped us to know where to start and made it easier to divide the tasks.
We worked in branches and merged when needed without any major issues. This also helped in making the process smooth and made it possible to work on different tasks at the same time. We used React and Redux as a base for the frontend and Node.js and express for the backend. 

### Frontend
Our MVP was to have three questions a user could play and then send their score to the highscore, without Login. 
We fetched the questions from our backend and used useState and conditional rendering to handle the response to show different pages depending on the answer.
We use dispatch to update the score in redux if the answer was correct.
After testing in CodePen we used two different libraries for the drag and drop functions. ......
The user can choose to end the game and then will be shown a oppurtunity to send their score to the highscore list together with a chosen user name. 

When this was in place we made a more final design of the UI in Figma and styled accordingly with styled components and imported cutom made illustrations. 

We then proceeded to our strech goal of having a user signup and login. Using an Accesstoken from the backend to see if the user is logged in or not, we use conditional rendering to adjust the UI if the user is logged in or not. For example to show a logout button, hide the input of user name when sending score to highscore (and instead sending the user's name from taken from the database). When logged in the score is stored and updated directly in the user database using POST and then sent to Redux using dispatch.

### Backend
We have three different collections made with MongoDB and mongoose: the questions, highscore and user information. 
We have both GET and POST endpoints for highscore, and use filter to only send the top 10 in the response. 
We have a GET endpoit for the questions that lists all of them together with the answers and description. 
We have POST endpoints for login, signup and logout. Signup (/users) creates a user using the User model created with mongoose and encrypts the password using bcrypt and pre schema. The Login (/sessions) verifies username and password sent from frontend and generates a new accesstoken. Logout finds the user by ID and resets the accesstoken to null. The last endpoint is a POST for user score that finds the user by ID and updated it's score and send the updated value in the reponse. 

## Tech
- React & React Hooks
- Redux
- React Router
- JavaScript
- CSS
- HTML

- Node.js
- Express
- MongoDB
- Mongoose

### Libraries
- React dnd-html-backend (Drag and Drop)
- React dnd-touch-backend (Drag and Drop)
- React Sortable Hoc (Drag and drop)
- React Responsive

## Accessibility

## View it live
https://klimatspelet.netlify.app/

## Backend 
Github: https://github.com/JHarde/final-project-backend
Heroku: https://environmental-kids-game.herokuapp.com/

## Made by
[Lillemor Eriksson](https://github.com/LillanEriksson), [Joel Harde](https://github.com/JHarde), [Cornelia Ryås](https://github.com/Corneliaryas)
