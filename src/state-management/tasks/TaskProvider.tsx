import React, { ReactNode } from "react";
import tasksContext from "./tasksContext";
import { useTask } from "./TaskList";

export interface Task {
    id: number;
    title: string;
}

interface AddTask {
    type: "ADD";
    task: Task;
}
interface DeleteTask {
    type: "DELETE";
    taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case "ADD":
            return [action.task, ...tasks];
        case "DELETE":
            return tasks.filter((t) => t.id !== action.taskId);
    }
};

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
