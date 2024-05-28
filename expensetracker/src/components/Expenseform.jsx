const Expenseform=(props)=>{
    return(
    <div className="transaction_container">
        <div className="transaction">
          <h1>Add New Transaction</h1>
          <div className="transaction_content">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={props.title} onChange={props.handleTitleChange} />
          </div>
          <div className="transaction_content">
            <h4>Amount</h4>
            <input type="number" value={props.amount} onChange={props.handleAmountChange} />
          </div>
          <button onClick={props.handleSubmit}>Add Transaction</button>
        </div>
      </div>
    );
}

export default Expenseform;