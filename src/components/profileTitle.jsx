import  arrawBack  from "./../images/arrow-back.svg";
const ProfileTitle = () => {
    return ( 
        <div className="profile__title">
            <div className="">
                <img src={arrawBack} alt="icon arraw-back" />
            </div>
            <div>
                <h2>Michael Lunzitisa</h2>
                <p className="trends__text__small">20 posts</p>
            </div>
        </div>
     );
}
 
export default ProfileTitle;