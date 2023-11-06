import "./App.css";

import { TaskProvider } from "./state-management/tasks";

import Counter from "./state-management/counter/Counter";
import NavBar from "./state-management/NavBar";

function App() {
    return (
        <TaskProvider>
            <Counter />
            <NavBar />
        </TaskProvider>
    );
}

export default App;
