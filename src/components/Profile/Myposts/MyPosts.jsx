import React from "react";
import s from "./Myposts.module.css"
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsController/FormControls";


const MyPosts = React.memo (props => {
    
// shouldComponentUpdate(nextProps, nextState) {
//         return nextProps != this.props || nextState != this.state
//     }
// componentDidMount(){
//     setTimeout(() => {
//         this.setState({a:12});
//     },3000)

console.log("check")
let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
        
        let newPostElement = React.createRef();
        
        let onAddPost = (values) => {
            props.addPost(values.newPostText)
        }
        
        
        return (
            <div className={s.postsBlock}>
            <div>
                <h3>
                    My posts
                </h3>
            </div>
            <MypostsReduxForm onSubmit={onAddPost}/>
            < div className={s.posts}>
                {postsElements}
            </div >
        </div>);
        })
    


const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
       <div>
        <Field component= {Textarea}  name="newPostText" placeholder="Enter your post text" validate={[requiredField, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
    )
}

const MypostsReduxForm = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;