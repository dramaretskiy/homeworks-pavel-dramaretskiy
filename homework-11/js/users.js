class UserList {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.http = new CustomHttp();
    this.handleResponse = this.handleResponse.bind(this);
  }

  setUsers(list) {
    list.forEach(user => {
      const pEl = document.createElement("p");
      pEl.classList.add("item");
      pEl.innerHTML = `<b>Name:</b> ${user.name}`;
      this.element.appendChild(pEl);
      pEl.addEventListener("click", () => {
        const newpEl = document.createElement("p");
        newpEl.classList.add("item-info");
        newpEl.innerHTML = `<b>Info:</b> ${JSON.stringify(user)}`;
        pEl.appendChild(newpEl);
      });
    });
    return this;
  }

  handleResponse(list) {
    this.setUsers(list);
  }
  getUsers() {
    this.element.innerHTML = "";
    this.http.get(
      "https://jsonplaceholder.typicode.com/users",
      this.handleResponse
    );
  }

  // setUsersInfo(list) {

  //     list.forEach(users => {
  //     const divEl = document.createElement("div");
  //     divEl.innerHTML = `<b>Info:</b> ${users}`;
  //     this.element.appendChild(divEl);
  //   })
  //   return this
  // };

  // handleResponses(list) {
  //   this.setUsersInfo(list)
  // }
  // getUsersInfo() {
  //   this.element.innerHTML = ''
  //   this.http.get('https://jsonplaceholder.typicode.com/users', this.handleResponses)
  //   }
}

// class UserInfo {
//   constructor(selector) {
//     this.el = document.querySelector(selector)
//     this.http = new CustomHttp()
//     this.handleResponse = this.handleResponse.bind(this)
//   }

//   setUsersInfo(list) {

//       list.forEach(user => {
//       const newEl = querySelectorall('.new')
//       const divEl = newEl.createElement("div");
//       divEl.innerHTML = `<b>Info:</b> ${user}`;
//       this.el.appendChild(divEl);
//     })
//     return this
//   };

//   handleResponses(list) {
//     this.setUsersInfo(list)
//   }
//  getUsersInfo() {
//     this.el.innerHTML = ''
//     this.http.get('https://jsonplaceholder.typicode.com/users', this.handleResponses)
//     }
// }

// const usersModule = (function () {
//   let element;

//   function getElementBySelector(selector) {
//     element = document.querySelector(selector);
//     return this
//   }

//   function setClassName(className = "selected") {
//     element.classList.add(className);
//     return this
//   }

//   // TODO: remove this method, we receive users with full name
//   function getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   function getUsersFragment(list) {
//     const usersFragment = document.createDocumentFragment();
//     list.forEach(user => {
//       // TODO: add event listener for "p"
//       const pEl = document.createElement("p");
//       // TODO: remove getFullName.call(user). Now we have full user name as user.name
//       pEl.innerHTML = `<b>Name:</b> ${getFullName.call(user)}`;
//       usersFragment.appendChild(pEl);
//     });

//     return usersFragment;
//   }

//   function setUsers(list) {
//     const fragment = getUsersFragment(list)
//     element.append(fragment);
//     return this
//   }

//   return {
//     setContainer: getElementBySelector,
//     setClassName,
//     setUsers
//   }
// })()
