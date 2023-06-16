import React,{useState, useContex, createContext} from 'react';

const stateContext = createContext();
const initialState ={
    chat:false,
    cart:false,
    userProfile: false,
    notification: false,
}