import "./App.css";

import { UserProvider } from "./state-management/users";
import { TaskProvider } from "./state-management/tasks";
import HomePage from "./routing/HomePage";
import NavBar from "./routing/NavBar";

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
