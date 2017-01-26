import { createStore } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import * as localforage from "localforage";

import { appReducer } from "./reducers/application";

// Making a custom storage engine to deal with getAllKeys vs keys
const MyStorage = {
    getAllKeys: localforage.keys,
    setItem: localforage.setItem,
    getItem: localforage.getItem,
    removeItem: localforage.removeItem,
};

export function store() {
    console.log("Creating store.");
    const ext = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
    const out = createStore(appReducer,
        ext && ext(),
        autoRehydrate());
    persistStore(out, { storage: MyStorage });
    return out;
}