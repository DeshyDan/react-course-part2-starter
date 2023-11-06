import "./App.css";

import { TaskList, TaskProvider } from "./state-management/tasks";
import { UserProvider } from "./state-management/users";

import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";

function App() {
    return (
        <UserProvider>
            <TaskProvider>
                <Counter />
         <NavBar/>
            </TaskProvider>
        </UserProvider>
    );
}

export default App;
