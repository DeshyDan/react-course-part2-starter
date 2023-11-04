import { useContext } from "react";
import userContext from "./userContext";

const useUser = () => useContext(userContext);
export default useUser;