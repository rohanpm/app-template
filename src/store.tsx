import {createStore} from "redux";

import {appReducer} from "./reducers/application";

export function store() {
    console.log("Creating store.");
    return createStore(appReducer);
}