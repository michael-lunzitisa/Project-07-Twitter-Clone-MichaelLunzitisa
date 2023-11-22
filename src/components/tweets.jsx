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
            message: "57",
            date: "2023-11-23",
            image: "src/images/Gif.svg",
            auteur: "John",
            favorite: "180",
            reply: "144",
            upload: "",
        },
        {
            id: 3,
            texte: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
            image: "src/images/Gif.svg",
            date: "2023-11-23",
            auteur: "John",
            favorite: "1",
            message: "2",
            upload: "",
        },
        {
            id: 4,
            texte: " would serve to both strengthen the US ste",
            date: "2023-11-23",
            auteur: "John",
            title: "CNN",
            titleSecond: "@CNN",
            badge: "src/images/Vector.svg",
            image: "src/images/Gif.svg",
            favorite: "180",
            message: "57",
            upload: "",
        },
    ];

    return (
        <>
            {tweets.map((tweet) => (
                <div className="tweets" key={tweet.id}>
                    <div className="tweet">
                        <div className="tweet-content">
                            <div className="tweet-body">
                                <div className="tweet-title">
                                    {tweet.title}
                                    {tweet.badge}
                                    {tweet.title}
                                    {tweet.message}
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
                </div>
            ))}
        </>
    );
};

export default Tweets;
