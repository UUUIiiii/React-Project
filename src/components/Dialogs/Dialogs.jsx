import React from "react";
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/Dialogs";
import Message from "./Message/Dialogs";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsController/FormControls";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id} />);
    let messageElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let newMessage = (values) => {
    props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div >
               <AddMessageReduxForm onSubmit={newMessage}/>
        </div >
    );
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return ( 
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} 
            validate={[requiredField, maxLength50]}
            name= "newMessageBody" 
            placeholder="Enter your message" />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    )
}
const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs