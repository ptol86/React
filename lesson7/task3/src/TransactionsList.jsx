
import React from 'react';
import Transaction from './Transaction';

class TransactionsList extends React.Component {
    
    render() {
        
        const transactionsListCopy = this.props.transactionsList
        
        return (
            <ul className="transactions">
            {transactionsListCopy.map(transaction => 
                <Transaction key={transaction.id} {...transaction}/>)}
            </ul>
        )
    }
        
};

export default TransactionsList;