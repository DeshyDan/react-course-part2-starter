import React, { ReactNode } from "react";
import tasksContext from "../contexts/tasksContext";
import useTask from "../hooks/useTask";

interface Props {
    children: ReactNode;
}
const TaskProvider = ({ children }: Props) => {
    const { tasks, dispatch } = useTask();

    return (
        <tasksContext.Provider value={{ tasks, dispatch }}>
            {children}
        </tasksContext.Provider>
    );
};

export default TaskProvider;
