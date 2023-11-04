import { useContext } from "react";
import tasksContext from "../contexts/tasksContext";

const useTask = () => useContext(tasksContext);

export default useTask;
