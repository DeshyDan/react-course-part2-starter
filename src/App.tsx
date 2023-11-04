import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/taskContext";
import userContext from "./state-management/contexts/userContext";
import loginStatusReducer from "./state-management/reducers/loginStatusReducer";
import taskReducer from "./state-management/reducers/taskReducer";

function App() {
    const [tasks, taskDispatch] = useReducer(taskReducer, []);
    const [user, userDispatch] = useReducer(loginStatusReducer, "");

    return (
        <userContext.Provider value={{ user, dispatch: userDispatch }}>
            <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
                <NavBar />
                <HomePage />
            </TasksContext.Provider>
        </userContext.Provider>
    );
}

export default App;
