import {  ReactNode, useReducer } from "react";

import userContext from "./userContext";
export interface Action {
    type: "LOGIN" | "LOGOUT";
    name: string;
}

const loginStatusReducer = (state: string, action: Action): string => {
    switch (action.type) {
        case "LOGIN":
            return action.name;

        case "LOGOUT":
            return action.name;
        default:
            return state;
    }
};
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
