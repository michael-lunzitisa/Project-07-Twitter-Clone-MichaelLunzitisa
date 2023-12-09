

const UserAbout = () => {
    return ( 
        <div className="user__about">
            <button className="button__edit__profile">Edit profile</button>
            <h2>Michael Lunzitisa</h2>
            <p>@michaellun88262</p>
            <p className="user__content">Joined November 2023 </p>
            <span className="trends__text__small">#Web Development #Coder</span>
            <div className="user__stats">
                <span className="stat__value">75</span> Following
                <span className="stat__value">525 </span>Followers
            </div>
        </div>
     );
}
 
export default UserAbout;