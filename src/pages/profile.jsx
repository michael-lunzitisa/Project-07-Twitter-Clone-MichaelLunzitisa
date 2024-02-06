import PageTitle from "../components/profile/profileTitle";
import UserImage from "../components/profile/userImage";
import UserAbpout from "../components/profile/userAbout";
import ProfileNav from "../components/profile/profileNav";
import UserDetails from "../components/profile/UserDetails";
import TweetAvatar from "./../components/TweetAvatar";
import TweetContent from "./../components/TweetContent";
import datas from "../datas/data";
import { useParams, Link } from "react-router-dom";

const Profile = () => {
    const { author } = useParams();
    const data = datas.filter((user) => user.author === author);
    return (
        <div className="timeline">
            <PageTitle />
            <UserImage />
            <UserDetails />
            <UserAbpout />
            <ProfileNav />
            <div>
                {data.map((tweet) => (
                    <div className="tweet" key={tweet.id}>
                        <Link to={`/${tweet.author}`}>
                            <TweetAvatar
                                tweet={tweet}
                                sourceAvatar={tweet.avatar}
                            />
                        </Link>
                        <TweetContent tweet={tweet} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
