import React, { createContext, useReducer } from 'react';

//import the reducer
import AppReducer from './AppReducer';


//create the initial state
const initialState = {
    transactions: []
}

//Create the Global Context
export const GlobalContext = createContext(initialState);


//create a provider for the Global Context
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);


    //actions for transactions

    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

        //add new transaction action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload:transaction
            })
        }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            { children }
        </GlobalContext.Provider>
    )
} 