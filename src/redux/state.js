import React from 'react';
import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, ip: 1, r: '0', name: 'Saints Row', desc: 'Platinum Edition', count: 'Platinum Edition'},
            {id: 2, ip: 2, r: '1_820', name: 'Paladins',  desc: 'Get the Captain Price Operator included with purchase', count: '12'},
            {id: 3, ip: 3, r: '2_888', name: 'Far Cry 6',  desc: 'In-Game Content', count: '22'},
            {id: 4, ip: 4, r: '18_982', name: 'Call of Duty: Warzone',  desc: 'Get the Captain Price Operator included with purchase', count: '20'},
            {id: 5, ip: 3, r: '299', name: 'World of Warcraft: Shadowlands',  desc: 'Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!', count: '20'},
            {id: 6, ip: 4, r: '9_199', name: 'Fortnite',  desc: 'Get the Captain Price Operator included with purchase', count: '12'},
            {id: 7,  ip: 1, r: '9_199', name: 'Horizon: Forbidden West', desc: 'Platinum Edition', count: '22'},
            {id: 8,  ip: 3, r: '2_911', name: 'Need for Speed: Heat', desc: 'Platinum Edition', count: '20'},
            {id: 9,  ip: 3, r: '920', name: 'Spider-Man: Miles Morales', desc: 'Get the Captain Price Operator included with purchase', count: '20'},
            {id: 10,  ip: 5, r: '299_890', name: 'Witcher 3: Wild Hunt', desc: 'Will only be usable in the new Classic Format when it is released', count: '12'},
            {id: 11,  ip: 4, r: '29', name: 'Guardians of the Galaxy', desc: 'In-Game Content', count: '22'},
            {id: 12,  ip: 4, r: '9_199', name: 'Crash Team Racing', desc: 'Get the Captain Price Operator included with purchase', count: '20'},
            {id: 13,  ip: 2, r: '9_199', name: 'Spider-Man', desc: 'Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!', count: '22'},
            {id: 14,  ip: 1, r: '0', name: 'Dragon Age 5', desc: 'Non released', count: '20'},
        ],

    },
    dialogsPage: {
        messages: [
            {id: '1', message: 'hi1'},
            {id: '2', message: 'hi2'},
            {id: '3', message: 'hi3'},
            {id: '4', message: 'hi4'},
            {id: '5', message: 'hi5'},
        ],
        dialogs: [
            {id: '1', name: 'User1'},
            {id: '2', name: 'User2'},
            {id: '3', name: 'User3'},
            {id: '4', name: 'User4'},
            {id: '5', name: 'User5'},
        ]
    },
    sideBar: {
        friends: [
            {id: '1', name: 'F1'},
            {id: '2', name: 'F2'},
            {id: '3', name: 'F3'},
            {id: '4', name: 'F4'},
            {id: '5', name: 'F5'},
        ]

    }

};

export let addMessage = (PostMessage, status, name) => {
    let newPost = {
        id: '1',
        ip: 1,
        status: status,
        name: name,
        desc: PostMessage,
        count: '0',
    };
    state.profilePage.posts.unshift(newPost);
    rerenderEntireTree(state);
}


export default state;