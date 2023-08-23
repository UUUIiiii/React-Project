const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }]
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE, newMessageBody
})


export default dialogsReducer