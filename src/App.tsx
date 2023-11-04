import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import UserProvider from "./state-management/providers/UserProvider";
import { TaskProvider } from "./state-management/tasks";

function App() {
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
