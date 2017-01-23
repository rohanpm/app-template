import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {store} from "./store";
import {Application} from "./components/application";

import "./css/application";

ReactDOM.render(
    <Provider store={store()}>
        <Application/>
    </Provider>,
    document.getElementById("app-container")
);
