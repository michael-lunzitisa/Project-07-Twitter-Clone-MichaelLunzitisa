const UserAbout = ({
    name,
    username,
    joinedDate,
    bio,
    followers,
    following,
}) => {
    return (
        <>
            <div className="user__about">
                <button className="button__edit__profile">Edit profile</button>
                <h2>{name}</h2>
                <p>{username}</p>
                <p className="user__content">{joinedDate} </p>
                <span className="trends__text__small">{bio}</span>
                <div className="user__stats">
                    <span className="stat__value">{following} </span> Following
                    <span className="stat__value">{followers} </span> Followers
                </div>
            </div>
        </>
    );
};

export default UserAbout;
