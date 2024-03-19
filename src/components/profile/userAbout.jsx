const UserAbout = ({
    name,
    handle,
    createdAt,
    bio,
    followersCount,
    followingCount,
}) => {
    return (
        <>
            <div className="user__about">
                <button className="button__edit__profile">Edit profile</button>
                <h2>{name}</h2>
                <p>{handle}</p>
                <p className="user__content">{createdAt} </p>
                <span className="trends__text__small">{bio}</span>
                <div className="user__stats">
                    <span className="stat__value">{followingCount} </span>{" "}
                    Following
                    <span className="stat__value">{followersCount} </span>{" "}
                    Followers
                </div>
            </div>
        </>
    );
};

export default UserAbout;
