import { useContext, useReducer, useState } from "react";
import loginStatusReducer from "./reducers/loginStatusReducer";
import userContext from "./contexts/userContext";

const LoginStatus = () => {
    const {user , dispatch} = useContext(userContext);
    if (user)
        return (
            <>
                <div>
                    <span className="mx-2">{user}</span>
                    <a
                        onClick={() => dispatch({ type: "LOGOUT", name: "" })}
                        href="#"
                    >
                        Logout
                    </a>
                </div>
            </>
        );
    return (
        <div>
            <a
                onClick={() => dispatch({ type: "LOGIN", name: "Deshy" })}
                href="#"
            >
                Login
            </a>
        </div>
    );
};

export default LoginStatus;
