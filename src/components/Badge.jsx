import badge from "../images/Vector.svg";
import { useContext } from "react";
import { mappedContexte } from "./Tweets/Tweet";

const Badge = () => {
    const { badge } = useContext(mappedContexte);

    return (
        <div>
            <img src={badge} alt="badge" />
        </div>
    );
};

export default Badge;
