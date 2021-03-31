import React, { useContext, useState } from 'react';

//import the Global State
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);

    const { AddTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        AddTransaction(newTransaction);
    }


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" id="description" placeholder="Detail of transaction" value={description} onChange={(e) => setDescription(e.target.value) } placeholder="Detail of transaction"/>
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" id="transactionamount" placeholder="Enter transaction amount" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value) }/>
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
