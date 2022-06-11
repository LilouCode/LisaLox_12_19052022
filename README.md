# Sportsee

SportSee is an application that allows each of its users to follow their progress and achieve their goals thanks to its powerful dashboard!

## To run this project you need :

- Git
- NodeJs
- NPM
- Code editor (Vscode)

## Dependencies
- [React](https://fr.reactjs.org/) v.17.0.2
- [React-router-dom]() v.6.3.0
- [Sass](https://sass-lang.com/) v.1.51.0
- [Axios](https://axios-http.com/docs/intro) v.0.27.2
- [Recharts](https://recharts.org/en-US/) v.2.1.10
- [Prop-Types](https://www.npmjs.com/package/prop-types)
- [JS Doc](https://jsdoc.app/) v.3.6.10

We strongly recommend that you go to the JSON file to prevent any updates or new features.

## Installation

### Install Backend

To use the entire application you need to clone the backend.

```bash
git clone https://github.com/LilouCode/P12-back-end-dashboard
```
Then in the terminal use
```bash
npm i
```
And finally launch the application:
```bash
npm run start
```

### Install and start FrontEnd
As the previous stape you need to clone the FrontEnd repository
```bash
git clone https://github.com/LilouCode/LisaLox_12_19052022
```
In the terminal use
```bash
npm i
```
Then launch the application:
```bash
npm run start
```
When the terminal ask , click ```Y``` for yes
```bash
Something is already running on port 3000.

Would you like to run the app on another port instead? » (Y/n)
```
And that's it !
```bash 
You can now view lisalox_12_19052022 in the browser.

  Local:            http://localhost:3001
```

## Switch data
To switch the data to Mock from API you can use the Dev module in the top of the screen and click to button mock/api. it was designed to inform the developer of which data the application is using. 

This is why it was decided to recover a user for each data API.
If you want to change user, you just have to change this parameter in the ```/src/service/service.jsx``` file


## Work files
This work was done following the [Kanban](https://www.notion.so/Tableau-de-bord-SportSee-2b9e0bf527eb4e14908e386556b29a9c) method and respecting the [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1) model.

Before starting this project, I drew this algorithm to better organize my work:
![algorithmAPI](https://github.com/LilouCode/LisaLox_12_19052022/blob/master/src/doc/brainstormingAlgo.png)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
