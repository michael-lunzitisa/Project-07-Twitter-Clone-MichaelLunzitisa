import datat from "../../datas/user";

import { useParams } from "react-router-dom";
const UserAbout = () => {
    const { author } = useParams();
    const user = datat.find((user) => user.name === author);

    return (
        <>
            <div className="user__about">
                <button className="button__edit__profile">Edit profile</button>
                <h2>{user.name}</h2>
                <p>{user.username}</p>
                <p className="user__content">{user.joinedDate} </p>
                <span className="trends__text__small">{user.bio}</span>
                <div className="user__stats">
                    <span className="stat__value">{user.following}</span>{" "}
                    Following
                    <span className="stat__value">{user.followers}</span>{" "}
                    Followers
                </div>
            </div>
        </>
    );
};

export default UserAbout;
