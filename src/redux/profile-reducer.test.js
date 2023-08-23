import profileReducer, { addPostActionCreator,deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'shit', likesCount: 99 },
        { id: 2, message: 'Thet`s creazy', likesCount: 81 },
        { id: 3, message: 'BibA', likesCount: 412 }
    ]
};

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("TEST")
  
    //2.action
    let newState = profileReducer(state, action)


    //3. expectation(
   expect(newState.posts.length).toBe(4)
   

});

test('length of new posts should be corrected', () => {
    //1. test data
    let action = addPostActionCreator("TEST")

    //2.action
    let newState = profileReducer(state, action)

    //3. expectation
   expect(newState.posts[3].message).toBe("TEST")

});
test('after deleting lenth of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1)

    //2.action
    let newState = profileReducer(state, action)

    //3. expectation
   expect(newState.posts.length).toBe(2)

});

test('after deleting lenth shouldn`t be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(1000)

    //2.action
    let newState = profileReducer(state, action)

    //3. expectation
   expect(newState.posts.length).toBe(3)

});