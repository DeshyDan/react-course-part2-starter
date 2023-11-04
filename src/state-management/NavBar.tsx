import { useContext, useReducer } from "react";
import LoginStatus from "./LoginStatus";
import TasksContext from "./contexts/taskContext";
import loginStatusReducer from "./reducers/loginStatusReducer";

const NavBar = () => {
    const { tasks } = useContext(TasksContext);
    return (
      
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">{tasks.length}</span>
            
            <LoginStatus />
        </nav>
    );
};

export default NavBar;
