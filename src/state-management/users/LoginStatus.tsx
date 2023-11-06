import useUserStore from "./store";

const LoginStatus = () => {
    const { user: name, login, logout } = useUserStore();
    if (name)
        return (
            <>
                <div>
                    <span className="mx-2">{name}</span>
                    <a onClick={() => logout()} href="#">
                        Logout
                    </a>
                </div>
            </>
        );
    return (
        <div>
            <a onClick={() => login("Deshy")} href="#">
                Login
            </a>
        </div>
    );
};

export default LoginStatus;
