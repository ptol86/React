
import React from 'react';
import Transaction from './Transaction';

class TransactionsList extends React.Component {
    
    render() {
        
        
        return (
            <ul className="transactions">
            {this.props.transactionsList.map(transaction => 
                <Transaction key={transaction.id} {...transaction}/>)}
            </ul>
        )
    }
        
};

export default TransactionsList;