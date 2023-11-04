import { PropsWithChildren, ReactNode, useReducer } from "react";
import loginStatusReducer from "./loginStatusReducer";
import userContext from "../contexts/userContext";

interface Props {
    children: ReactNode;
}
const UserProvider = ({ children }: Props) => {
    const [user, userDispatch] = useReducer(loginStatusReducer, "");
    return (
        <userContext.Provider value={{ user, dispatch: userDispatch }}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;
