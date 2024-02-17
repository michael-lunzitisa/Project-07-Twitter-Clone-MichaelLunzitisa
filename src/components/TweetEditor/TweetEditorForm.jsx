import TweetEditorButtons from "./TweetEditorButtons";
import { useForm } from "react-hook-form";
import { tweets, currentUser } from "../../datas/initial-data.json";
import axios from "axios";

const TweetEditorForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmitForm = async (data) => {
        const newTweet = {
            id: tweets.length + 1,
            text: data.tweetText,
            date: "1m",
            author: currentUser.name,
            pseudo: currentUser.username,
            badge: "src/images/Vector.svg",
            avatar: currentUser.sourceprofilePicture,
            coverImage: "src/images/tweet-image.png",
            tweetImage: "",
            likes: {
                liked: false,
                nb: "15",
            },
            comments: 0,
            retweet: 0,
            share: "",
            post: 0,
            bio: "I'm a software engineer from Kinshasa, Congo.",
            location: "Kinshasa, Congo",
            websiteLink: "www.newyork.com",
            joinedDate: "Joined November 2023",
            followers: 100,
            following: 500,
        };

        if (data.tweetText) {
            axios
                .post("http://localhost:8000/tweets", newTweet)
                .then((res) => console.log(res))
                .catch((error) => console.log(error.message));
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="tweet-editor-form"
        >
            <input
                type="text"
                placeholder="What's happening ?"
                className="tweet-editor-input"
                {...register("tweetText", {
                    required: "c'est champ est obligatoire",
                })}
            />
            <p>{errors.tweetText?.message}</p>
            <TweetEditorButtons />
        </form>
    );
};

export default TweetEditorForm;
