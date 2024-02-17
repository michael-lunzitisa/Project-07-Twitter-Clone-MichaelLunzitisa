import PageTitle from "../components/Profile/ProfileTitle";
import UserImage from "../components/Profile/UserImage";
import ProfileNav from "../components/profile/profileNav";
import TweetAvatar from "../components/Tweets/TweetAvatar";
import TweetContent from "../components/Tweets/TweetContent";
import UserAbout from "../components/Profile/UserAbout";

import { useParams, Link } from "react-router-dom";
import { mappedContexte } from "../components/Tweets/Tweet";
import { useContext } from "react";
import { dataContexte } from "../context/DataContext";

const Profile = () => {
    const { tweets, currentUser } = useContext(dataContexte);
    const { author } = useParams();

    const userFind = currentUser.name === author;
    const data = tweets.filter((user) => user.author === author);
    return (
        <div className="timeline">
            <div>
                {userFind && (
                    <div>
                        <PageTitle
                            name={currentUser.name}
                            post={currentUser.post}
                        />

                        <UserImage
                            sourcePictureCouverture={
                                currentUser.sourceCoverPhoto
                            }
                            sourcePictureProfile={
                                currentUser.sourceprofilePicture
                            }
                        />
                        <UserAbout
                            name={currentUser.name}
                            username={currentUser.username}
                            joinedDate={currentUser.joinedDate}
                            bio={currentUser.bio}
                            followers={currentUser.followers}
                            following={currentUser.following}
                        />
                    </div>
                )}
            </div>
            <div>
                {data.slice(0, 1).map((tweet) => (
                    <div key={tweet.id}>
                        <PageTitle name={tweet.author} post={tweet.post} />
                        <UserImage
                            sourcePictureCouverture={tweet.coverImage}
                            sourcePictureProfile={tweet.avatar}
                        />
                        <UserAbout
                            name={tweet.author}
                            username={tweet.pseudo}
                            joinedDate={tweet.joinedDate}
                            bio={tweet.bio}
                            followers={tweet.followers}
                            following={tweet.following}
                        />{" "}
                    </div>
                ))}
            </div>

            <ProfileNav />
            <div>
                {data.map((tweet) => (
                    <div className="tweet" key={tweet.id}>
                        <mappedContexte.Provider value={tweet}>
                            <Link to={`/${tweet.author}`}>
                                <TweetAvatar />
                            </Link>
                            <TweetContent />
                        </mappedContexte.Provider>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
