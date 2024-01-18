import setting from "../../images/Settings.svg";
import more from "../../images/More-2.svg";
const TrendsCard = () => {
    return (
        <div className="trends__card">
            <div className="trends__title trends__flex">
                <h2>Trends for you</h2>
                <div>
                    <img src={setting} alt="icon settings" />
                </div>
            </div>
            <div className="trends__flex">
                <div className="trends__detail">
                    <p className="trends__text__small">Trending in Turkey</p>
                    <p>#SQUID</p>
                    <p className="trends__text__small">2,066 Tweets</p>
                </div>
                <div>
                    <img src={more} alt="icon more" />
                </div>
            </div>
            <div className="trends__flex">
                <div className="trends__detail">
                    <p className="trends__text__small">Trending in Turkey</p>
                    <p>#SQUID</p>
                    <p className="trends__text__small">2,066 Tweets</p>
                </div>
                <div>
                    <img src={more} alt="icon more" />
                </div>
            </div>
            <div className="trends__flex">
                <div className="trends__detail">
                    <p className="trends__text__small">Trending in Turkey</p>
                    <p>#SQUID</p>
                    <p className="trends__text__small">2,066 Tweets</p>
                </div>
                <div>
                    <img src={more} alt="icon more" />
                </div>
            </div>
            <div className="trends__flex">
                <div className="trends__detail">
                    <p className="trends__text__small">Trending in Turkey</p>
                    <p>#SQUID</p>
                    <p className="trends__text__small">2,066 Tweets</p>
                </div>
                <div>
                    <img src={more} alt="icon more" />
                </div>
            </div>
            <div className="trends__show__more">
                <a href="#">Show more</a>
            </div>
        </div>
    );
};

export default TrendsCard;
