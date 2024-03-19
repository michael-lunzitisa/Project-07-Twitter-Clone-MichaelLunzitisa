import { createContext, useState } from "react";
// import datas from "../datas/initial-data.json";
import { useEffect } from "react";

import axios from "axios";

export const dataContexte = createContext();

export const Provider = ({ children }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
        axios
            .get(
                "https://twitter-clone-api-c1-michael-lunzitisa.onrender.com/tweets"
            )

            .then((res) => {
                setData(res.data);
                setLoading(true);
            })
            .catch((error) => console.log(error.message));
    }, []);
    const value = { loading, data };
    return (
        <>
            <dataContexte.Provider value={value}>
                {children}
            </dataContexte.Provider>
        </>
    );
};
