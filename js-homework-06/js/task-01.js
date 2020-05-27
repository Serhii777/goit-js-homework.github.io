// import users from './users';

const users = [
   {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
   },
   {
      id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
   },
   {
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
   },
   {
      id: '249b6175-5c30-44c6-b154-f120923736f5',
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
   },
   {
      id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
   },
   {
      id: '150b00fb-dd82-427d-9faf-2879ea87c695',
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
   },
   {
      id: 'e1bf46ab-7168-491e-925e-f01e21394812',
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
   },
];

//! Задание 1
const getUserNames = users => {
   return users.map(user => user.name);
};

console.log(getUserNames(users));
//* [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUserNamesAF = users.map(user => user.name);
console.log(getUserNamesAF);

//! Задание 2
const getUsersWithEyeColor = (users, color) => {
   return users.filter(user => user.eyeColor === color);
};

// console.log(getUsersWithEyeColor(users, 'blue')); //* [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//! Задание 3
const getUsersWithGender = (users, gender) => {
   return users.filter(user => user.gender === gender);
};

// console.log(getUsersWithGender(users, 'male')); //* [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//! Задание 4
const getInactiveUsers = users => {
   return users.filter(user => !user.isActive);
};

// console.log(getInactiveUsers(users)); //* [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//! Задание 5
const getUserWithEmail = (users, email) => {
   return users.find(user => user.email === email);
};

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); //* {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); //* {объект пользователя Elma Head}

//! Задание 6
const getUsersWithAge = (users, min, max) => {
   return users.filter(user => user.age > min && user.age < max);
};

// console.log(getUsersWithAge(users, 20, 30)); //* [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
//* [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//! Задание 7 ====================================================================
let total = 0;
const calculateTotalBalance = users => {
   return users.reduce((total, user) => total + user.balance, 0);
};

// console.log(calculateTotalBalance(users)); //* 20916

const totalBalance = users.reduce(function (total, user) {
   return total + user.balance;
}, 0);
// console.log(totalBalance); //* 20916

const totalSumm = users.reduce((total, user) => total + user.balance, 0);
// console.log(totalSumm); //* 20916

//! Задание 8 =====================================================================
const getUsersWithFriend = (users, friendName) => {
   return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
};

// console.log(getUsersWithFriend(users, 'Briana Decker')); //* [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); //* [ 'Elma Head', 'Sheree Anthony' ]

//! Задание 9 ====================================================================
const getNamesSortedByFriendsCount = users => {
   const sortByFriends = [...users].sort(function (prevFriends, nextFriends) {
      return prevFriends.friends.length - nextFriends.friends.length;
   });

   sortByFriends.reduce((sortByName, user) => {
      sortByFriends.push(user.name);
      return console.log(`${user.name}`);
   }, []);

   return sortByFriends;
};

// console.log(getNamesSortedByFriendsCount(users));
//* [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//! Задание 10
const getSortedUniqueSkills = users => {
   const tagsSkills = users.reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      let sortSkills = allSkills.sort().filter((item, pos) => allSkills.indexOf(item) === pos);
      return sortSkills;
   }, []);
   return tagsSkills;
};

// console.log(getSortedUniqueSkills(users));
//* [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
