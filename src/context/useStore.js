import {storeContext} from "./providerContext";
import {useContext} from "react";

export const useCustomStore = () => {
    return useContext(storeContext);
}