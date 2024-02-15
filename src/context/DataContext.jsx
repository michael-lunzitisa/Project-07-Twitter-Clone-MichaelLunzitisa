import { createContext, useState } from "react";
import datas from "../datas/initial-data.json";

export const dataContexte = createContext();

export const Provider = ({ children }) => {
    const [data, setData] = useState(datas);
    return (
        <>
            <dataContexte.Provider value={data}>
                {children}
            </dataContexte.Provider>
        </>
    );
};
