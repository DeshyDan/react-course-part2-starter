import { useContext } from "react";
import userContext from "../contexts/userContext";

const useUser = () => useContext(userContext);

export default useUser;
