import { useContext } from "react";
import { mappedContexte } from "./Tweet";
const TweetText = () => {
    const { text } = useContext(mappedContexte);
    return <span className="text-[#D9D9D9] font-normal">{text}</span>;
};

export default TweetText;
