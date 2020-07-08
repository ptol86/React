
import React from 'react';
import Transaction from './Transaction';

class TransactionsList extends React.Component {
    // state = {
    //     sorting: null,
    // }

    // toggleSorting = () => {
    //     const newSorting = this.state.sorting === "asc"
    //     ?"desc"
    //     :"asc";
    //     this.setState({
    //         sorting: newSorting,
    //     })
    // }
    render() {
        console.log(this.props.transactionsList)
        const transactionsListCopy = this.props.transactionsList
        // .slice()
        // if (this.state.sorting) {
        //     usersList = this.props.users
        //     .slice()
        //     .sort((a,b) => 
        //     this.state.sorting === "asc"
        //     ?a.age - b.age
        //     :b.age - a.age
        //     );
        // } else {
        //     usersList = this.props.users;
        // }
        return (
            <ul className="transactions">
            {transactionsListCopy.map(transaction => 
                <Transaction key={transaction.id} {...transaction}/>)}
            </ul>
        )
    }
        
};

export default TransactionsList;