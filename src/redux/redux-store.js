import {createStore, combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBarFriends: sidebarReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;