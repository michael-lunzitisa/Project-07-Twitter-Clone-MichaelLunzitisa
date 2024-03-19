const UserImage = ({ profileBackground, profilePicture }) => {
    return (
        <div className="User__image">
            <div className="picture__couverture">
                <img
                    src={profileBackground}
                    alt="picture couverture "
                    className="picture__couverture"
                />
            </div>
            <div>
                <img
                    src={profilePicture}
                    alt="picture profile"
                    className="picture__profile"
                />
            </div>
        </div>
    );
};

export default UserImage;
