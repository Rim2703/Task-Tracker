# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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




In this project I am creating 2 components
Task Component
The Task component represents a single task with a title, description, and completion status. It takes in three props: task, onToggle, and onDelete.

The task prop is an object that represents a single task, with properties like id, title, description, and completed.

The onToggle prop is a function that gets called when the checkbox for the task is toggled. It takes in the id of the task as an argument, and updates the completion status of that task.

The onDelete prop is a function that gets called when the delete button for the task is clicked. It takes in the id of the task as an argument, and removes that task from the list of tasks.


TaskList Component
The TaskList component is the main component that displays a list of tasks. It uses the useState hook to manage the state of the component.

The tasks state is an array of objects that represent the tasks. The title and description states are used to manage the input fields for adding a new task. The filter state is used to filter the tasks based on their completion status.

The filter state variable is used to filter the list of tasks based on their completion status. If filter is set to "completed", only the completed tasks are shown, if it is set to "uncompleted", only the uncompleted tasks are shown, and if it is set to "all", all the tasks are shown.

The addTask function is called when the form for adding a new task is submitted. It creates a new task object using the current values of the title and description states, adds it to the tasks state using the setTasks function, and resets the title and description states to empty strings.

The toggleTask function is called when the checkbox for a task is toggled. It takes in the id of the task as an argument, and uses the map function to update the completion status of the task with that id.

The deleteTask function is called when the delete button for a task is clicked. It takes in the id of the task as an argument, and uses the filter function to remove that task from the tasks state.

The filteredTasks variable uses the filter function to return a new array of tasks based on the current value of the filter state.

The TaskList component returns a JSX element that displays the list of tasks. It includes a form for adding new tasks, a set of buttons for filtering tasks, and a map function that iterates over the filteredTasks array and returns a Task component for each task.
