const Tweets = () => {
    const tweets = [
        {
            id: 1,
            texte: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
            date: "2023-11-22",
            avatar: "",
        },
        {
            id: 2,
            texte: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
            date: "2023-11-23",
            auteur: "John",
            image: "src/images/Gif.svg",
            favorite: true,
            message: "20",
            upload: "",
        },
    ];

    return (
        <>
            {Tweets.map((tweet) => {
                <div className="tweets" key={tweet.id}>
                    <div className="tweet">
                        <div className="tweet-content">
                            <div className="tweet-body">
                                <div className="tweet-title">
                                    tttttt<span></span>
                                    <span>{tweet.message}</span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="tweet-text">
                                    Gardening boomed during the pandemic. Six
                                    Black writers share how it has helped them
                                    re-establish, and reimagine, a connection to
                                    cultivation and the land
                                </div>
                                <div className="tweet-image">
                                    <img src={tweet.image} alt="tweet-image" />
                                </div>
                                <div tweet-actions>
                                    <span className="tweet-action">icon</span>
                                    <span className="tweet-action">icon</span>
                                    <span className="tweet-action">icon</span>
                                    <span className="tweet-action">icon</span>
                                    <span className="tweet-action">icon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
            })}
        </>
    );
};

export default Tweets;
