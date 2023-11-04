import useUser from "./hooks/useUser";

const LoginStatus = () => {
    const { user, dispatch } = useUser();
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
