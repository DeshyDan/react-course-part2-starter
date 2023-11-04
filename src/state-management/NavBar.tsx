import { useContext, useReducer } from "react";
import LoginStatus from "./LoginStatus";
import tasksContext from "./contexts/tasksContext";
import loginStatusReducer from "./reducers/loginStatusReducer";
import useTask from "./hooks/useTask";

const NavBar = () => {
    const { tasks } = useTask();
    return (
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">{tasks.length}</span>

            <LoginStatus />
        </nav>
    );
};

export default NavBar;
