import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'shit', likesCount: 99 },
                { id: 2, message: 'Thet`s creazy', likesCount: 81 },
                { id: 3, message: 'BibA', likesCount: 412 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'DD' },
                { id: 2, name: 'WW' },
                { id: 3, name: 'SS' },
                { id: 4, name: 'KK' },
                { id: 5, name: 'JJ' }
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 4, message: 'hello world' },
                { id: 3, message: 'zaza' }
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscribers() {
        console.log('State changed')
    },


    getState() {
        return this._state;
    },
    subscribe(observe) {
        this._callSubscribers = observe
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscribers(this._state);
    }
}



export default store
Window.state = store