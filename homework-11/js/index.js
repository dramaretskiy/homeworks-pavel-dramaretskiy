const addUsersBtn = document.getElementById("button__add-user");
const UsersList = new UserList(".users__list");
addUsersBtn.addEventListener("click", () => {
 UsersList.getUsers()
});


// addUsersBtn.addEventListener("click", () => {
//     usersModule
//         .setContainer("#users-list")
//         .setClassName('one')
//         .setUsers(USERS)
// });