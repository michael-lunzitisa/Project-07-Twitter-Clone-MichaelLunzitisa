import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
import data from "../datas/data";
import { NavLink } from "react-router-dom";

const Tweet = () => {
  return (
    <>
      {data.map((tweet) => (
        <div className="tweet" key={tweet.id}>
          <NavLink to={`/profile/${data.id}`}>
            <TweetAvatar sourceAvatar={tweet.avatar} />
          </NavLink>
          <TweetContent tweet={tweet} />
        </div>
      ))}
    </>
  );
};

export default Tweet;
