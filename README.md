# Todo List - mobile app
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
