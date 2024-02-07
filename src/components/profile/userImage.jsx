const UserImage = ({ sourcePictureCouverture, sourcePictureProfile }) => {
    return (
        <div className="User__image">
            <div className="picture__couverture">
                <img
                    src={sourcePictureCouverture}
                    alt="picture couverture "
                    className="picture__couverture"
                />
            </div>
            <div>
                <img
                    src={sourcePictureProfile}
                    alt="picture profile"
                    className="picture__profile"
                />
            </div>
        </div>
    );
};

export default UserImage;
