import photoCouverture from "./../images/photo-couverture.svg";
import pictureProfile from "./../images/profile-photo.png";

const UserImage = () => {
    return ( 
        <div className="User__image">
            <div className="picture__couverture">
                {/*<img src={photoCouverture} alt="picture couverture " className="picture__couverture"/>*/}
            </div>
            <div>
                <img src={pictureProfile} alt="picture profile "  className="picture__profile"/>
            </div>

        </div>
        
     );
}
 
export default UserImage;