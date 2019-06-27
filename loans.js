import React from 'react'
import ReactDOM from 'react-dom'
class LoansComp extends React.Component
{

constructor()
{
 super();
        this.state={
           selectedOption: '',
           loanAmount : 0,
           dur :0,
           ri : 0,
           emi : 0
        };
         this.radioChange = this.radioChange.bind(this);
         this.handleLoanamount = this.handleLoanamount.bind(this);
         this.handleDuration = this.handleDuration.bind(this);
         this.handleROI = this.handleROI.bind(this);
         this.calculate = this.calculate.bind(this);
          this.clear = this.clear.bind(this);

}

 radioChange(e) 
  {
    console.log("RADIO button VALUE..."+e.currentTarget.value);
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }

  handleLoanamount(e)
{
    this.setState({
        loanAmount : e.target.value,
    });
    
}

handleDuration(e)
{
  this.setState({
        dur : e.target.value,
    });
}

handleROI(e)
{
  this.setState({
        ri : e.target.value,
    });
}

calculate(e)
  {
  console.log("Coming inside CALCULATOR..."+ this.state.loanAmount);
console.log()
this.setState({
emi : parseInt(this.state.loanAmount)*(1+(parseInt(this.state.ri)/100))^(1*parseInt(this.state.dur)) 

 //  emi: parseInt(this.state.loanAmount)*parseInt(this.state.ro)*parseInt(Math.pow(1+this.state.ro,this.state.dur))/parseInt(Math.pow(1+this.state.ro,this.state.dur)-1) 

});
  
  }


   clear(e)
  {
this.setState({
 loanAmount : '',
 dur:'',
 ri:'',
 emi:''

})
ReactDOM.findDOMNode(this.refs.loanAmount).focus();
  }


render()
{

console.log("Came inside Deposit...")
const select= this.state.selectedOption;
if(select==='HL')
{
  return(
 <div>
 <h3>Welcome to EMI CALCULATOR</h3>
<h3>Loan Amount <input type="text" value={ this.state.loanAmount} ref='principle' onChange={this.handleLoanamount} /></h3>
 <h3>Duration < select id = "dropdown" ref='duration' value={ this.state.dur} onChange={this.handleDuration}>
                <option value="select Duration">Select Duration</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>   </h3>
 <h3>Rate Of Interest<input type="text" ref='roi' value={ this.state.ri} onChange={this.handleROI} /></h3>
 <h2>EMI  ! {this.state.emi} </h2>

<button onClick={this.calculate}>CALCULATE</button>
<button onClick={this.clear}>CLEAR</button>

 </div>
  );

}

    return(

<div>
<h3>
Welcome to All kinds of Loan
</h3>

        <input type="radio"
               value="HL"
               checked={this.state.selectedOption === "HL"}
               onChange={this.radioChange} />Home Loan

        <input type="radio"
               value="CL"
               checked={this.state.selectedOption === "CL"}
               onChange={this.radioChange}/>Car Loan
        
          <input type="radio"
               value="PL"
               checked={this.state.selectedOption === "PL"}
               onChange={this.radioChange}/>Person Loan
                 
</div>



    );
}

}

export default LoansComp;