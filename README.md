# Todo List - mobile app

<p align="left"><img width="300" alt="index" src="https://user-images.githubusercontent.com/104759740/215363144-4a011107-c6e8-47be-98cf-335c7919ae6e.PNG">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="300" alt="index" src="https://user-images.githubusercontent.com/104759740/215363186-d44ec38b-5e0d-4d0f-a759-31810d54fc0f.PNG"></p>

## Setup

- Clone this repo
  ```
  git clone https://github.com/WHL99/todoList-redux-react-native.git
  ```
- Open the file and start:

  ```
  cd todoList-redux-react-native
  ```
- Install all npm package and run it: 
  ```
  npm install
  npm run web
  ```


## Folder Structure

  ```
    todoList-redux-react-native
    │   README.md
    │   App.js
    |   package.json
    │   ...
    │   
    └───components
        │   Todo.js
        │   TodoList.js
        │   
        redux
        │   reducer.js
        │   store.js
        │   
        ...
  ```

  - ```App.js``` is a React component called “App”. This component will be the root component to all the other components. The ```<Provider>``` component makes the Redux store available to any nested components that need to access the Redux store.
  - ```package.json``` lists all the dependencies and scripts needed to run the React app successfully.
  - ```Todo.js``` displays every single todo item with the title and checkbox.
  - ```TodoList.js``` displays all todo items, and has an input field. 


      

## Framework and Tool
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Redux](https://redux.js.org/) 
