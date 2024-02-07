import PageTitle from "../components/profile/profileTitle";
import UserImage from "../components/profile/userImage";
import ProfileNav from "../components/profile/profileNav";
import TweetAvatar from "./../components/TweetAvatar";
import TweetContent from "./../components/TweetContent";
import UserAbout from "../components/profile/userAbout";
import datas from "../datas/data";
import user from "../datas/user";
import { useParams, Link } from "react-router-dom";

const Profile = () => {
    const { author } = useParams();

    const userFind = user.find((user) => user.name === author);
    const data = datas.filter((user) => user.author === author);
    return (
        <div className="timeline">
            <PageTitle name={userFind.name} post={userFind.post} />
            <UserImage
                sourcePictureCouverture={userFind.sourceCoverPhoto}
                sourcePictureProfile={userFind.sourceprofilePicture}
            />
            <UserAbout
                name={userFind.name}
                username={userFind.username}
                joinedDate={userFind.joinedDate}
                bio={userFind.bio}
                followers={userFind.followers}
                following={userFind.following}
            />
            <ProfileNav />
            <div>
                {data.map((tweet) => (
                    <div className="tweet" key={tweet.id}>
                        <Link to={`/${tweet.author}`}>
                            <TweetAvatar sourceAvatar={tweet.avatar} />
                        </Link>
                        <TweetContent tweet={tweet} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
