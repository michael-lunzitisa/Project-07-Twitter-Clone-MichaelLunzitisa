import userImage from "./../images/tweet-profile-photo.png";
const UserImage = () => {
    return ( 
        <div className="User__image">
            <div>
                <img src={userImage} alt="user image" />
            </div>

        </div>
     );
}
 
export default UserImage;