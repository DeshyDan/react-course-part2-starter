import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/taskContext";
import userContext from "./state-management/contexts/userContext";
import loginStatusReducer from "./state-management/reducers/loginStatusReducer";
import taskReducer from "./state-management/reducers/taskReducer";
import UserProvider from "./state-management/reducers/UserProvider";

function App() {
    const [tasks, taskDispatch] = useReducer(taskReducer, []);

    return (
      <UserProvider>
         <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
                <NavBar />
                <HomePage />
            </TasksContext.Provider>
  
      </UserProvider>
    );
}

export default App;
