
const Header =(props) =>{
return(
<div className="container">
<h1>Expense Tracker</h1>
<div className="card">
<div className="card_content">
  <span><h2>Income</h2></span>
  <span><h2>Expense</h2></span>
</div> 
<div className="card_value">
  <span><p>{props.income}</p></span>
  <span><p>{props.expense}</p></span>
</div>
</div>
</div>
);
}
export default Header;