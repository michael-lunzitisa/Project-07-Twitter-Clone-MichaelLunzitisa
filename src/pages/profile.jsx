import PageTitle from "../components/profile/profileTitle";
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
    const { data, loading } = useContext(dataContexte);
    const { author } = useParams();

    // const userFind = currentUser.name === author;
    // const datas = tweets.filter((user) => user.author === author);
    return (
        <div className="timeline">
            {/* <div>
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
            </div> */}
            <div>
                {loading &&
                    data.slice(0, 1).map((tweet) => (
                        <div key={tweet.id}>
                            <PageTitle name={tweet.author} post={tweet.post} />
                            <UserImage
                                profileBackground={tweet.profileBackground}
                                profilePicture={tweet.profilePicture}
                            />
                            <UserAbout
                                name={tweet.author}
                                handle={tweet.handle}
                                createdAt={tweet.joinedDate}
                                bio={tweet.bio}
                                followersCount={tweet.followersCount}
                                followingCount={tweet.followingCount}
                            />{" "}
                        </div>
                    ))}
            </div>

            <ProfileNav />
            <div>
                {loading &&
                    data.map((tweet) => (
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
