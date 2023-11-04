import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import tasksContext from "./state-management/contexts/tasksContext";
import userContext from "./state-management/contexts/userContext";
import loginStatusReducer from "./state-management/reducers/loginStatusReducer";
import taskReducer from "./state-management/reducers/taskReducer";
import UserProvider from "./state-management/providers/UserProvider";
import TaskProvider from "./state-management/providers/TaskProvider";

function App() {
    const [tasks, taskDispatch] = useReducer(taskReducer, []);

    return (
        <UserProvider>
            <TaskProvider>
                <NavBar />
                <HomePage />
            </TaskProvider>
        </UserProvider>
    );
}

export default App;
