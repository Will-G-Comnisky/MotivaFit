"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByName = exports.searchUserIndex = exports.searchUserId = exports.getUsers = void 0;
const users = [
    { id: 1, name: "Will_Gispiela", password: '1642' },
    { id: 2, name: "Will_Comnisky", password: '1212' },
    { id: 3, name: "Will_03", password: '3030' }
];
const getUsers = () => {
    return users;
};
exports.getUsers = getUsers;
const searchUserId = (id) => {
    return users.find(user => user.id == id);
};
exports.searchUserId = searchUserId;
const searchUserIndex = (id) => {
    return users.findIndex(user => user.id == id);
};
exports.searchUserIndex = searchUserIndex;
const getUserByName = (name) => {
    return users.find(user => user.name === name);
};
exports.getUserByName = getUserByName;
