import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from './Redux/state'


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state = {store.getState()}
                 addPost = {store.addPost.bind(store)}
                 updateNewPostText = {store.updateNewPostText.bind(store)}
            />
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())
store._callSubscriber(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
