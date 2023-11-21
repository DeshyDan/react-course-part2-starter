import { useParams } from "react-router-dom";

const UserDetail = () => {
    const params = useParams();

    return <p>Users {params.id}</p>;
};

export default UserDetail;
