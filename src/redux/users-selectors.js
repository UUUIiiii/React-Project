import { createSelector } from "reselect";

export const responsUsersSelector = (state) => {
    return state.usersPage.users;
}

export const responsUsers = createSelector(responsUsersSelector, (users) => {
    return users;
})
export const responsPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const responsTotaleUsersCount = (state) => {
    return state.usersPage.totelUsersCount;
}
export const responsCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const responsIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const responsFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
// export const responsUsers = (state) => {
//     return state.usersPage.users;
// }
// export const responsPageSize = (state) => {
//     return state.usersPage.pageSize;
// }
// export const responsTotaleUsersCount = (state) => {
//     return state.usersPage.totelUsersCount;
// }
// export const responsCurrentPage = (state) => {
//     return state.usersPage.currentPage;
// }
// export const responsIsFetching = (state) => {
//     return state.usersPage.isFetching;
// }
// export const responsFollowingInProgress = (state) => {
//     return state.usersPage.followingInProgress;
// }