import LoginStatus from "./users/LoginStatus";
import { useTask } from "./tasks/TaskList";
import useCounterStore from "./counter/store";

const NavBar = () => {
    const { counter: counter } = useCounterStore();
    return (
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">{counter}</span>

            <LoginStatus />
        </nav>
    );
};

export default NavBar;
