const Expense = (props) => {    
    const {deleteItem,handleEdit}=props;
    const handledelete =() =>{
        deleteItem(props.id);
    }
    const editItem=()=>{
      handleEdit(props.id,props.title,props.amount);
    }
    
    return(
    <>
    <div className="history" >
    <div className="history_card">  
    <h4>{props.title}</h4>
    <h4>{props.amount}</h4>
    </div>
    <div className="buttons">
      <button onClick={editItem}>Edit</button>
      <button onClick={handledelete}>Delete</button>
    </div>
    </div>
    </>
    );          
}

export default Expense;