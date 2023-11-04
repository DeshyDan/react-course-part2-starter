interface Action {
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

export default loginStatusReducer;
