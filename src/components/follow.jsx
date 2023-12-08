import  image  from "./../images/image1.svg";
import  tweetprofile  from "./../images/tweet-profile-photo.png";
import  image2  from "./../images/image2.svg";
const Follow = () => {
    return ( 
        <div className="follow__card">
            <h2>Who to follow</h2>
            <div className="follow__items follow__flex">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="">
                    <p>The New York Times</p>
                    <p className="trends__text__small">@nytimes</p>
                </div>
                <div>
                    <button>Follow</button>
                </div>
            </div>
            <div className="follow__items follow__flex">
                <div>
                    <img src={tweetprofile} alt="" />
                </div>
                <div className="">
                    <p>The New York Times</p>
                    <p className="trends__text__small">@CNN</p>
                </div>
                <div>
                    <button>Follow</button>
                </div>
            </div>
            <div className="follow__items follow__flex">
                <div>
                    <img src={image2} alt="" />
                </div>
                <div className="">
                    <p>The New York Times</p>
                    <p className="trends__text__small">@Twitter</p>
                </div>
                <div>
                    <button>Follow</button>
                </div>
            </div>
            <div className="trends__show__more">
                <a href="#">Show more</a>
            </div>
        </div>
     );
}
 
export default Follow;