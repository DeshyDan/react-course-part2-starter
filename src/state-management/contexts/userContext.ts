import React, { Dispatch } from "react";
import { Action } from "../reducers/loginStatusReducer";

interface UserContextType {
    user: string;
    dispatch: Dispatch<Action>;
}

const userContext = React.createContext<UserContextType>({} as UserContextType);

export default userContext;
