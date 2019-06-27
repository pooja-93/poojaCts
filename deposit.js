import React from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; 

import { BrowserRouter as Router,Switch, Link,Route} from 'react-router-dom';

class DepositComp extends React.Component
{
constructor() {
    super();
    this.state = {
      selectedOption: '',
      prince :0,
      dur :0,
      ro : 0,
      mature: 0
    };
  this.radioChange = this.radioChange.bind(this);
  this.handlePrinciple = this.handlePrinciple.bind(this);
  this.handleDuration = this.handleDuration.bind(this);
  this.handleROI = this.handleROI.bind(this);
  this.calculate = this.calculate.bind(this);
   this.clear = this.clear.bind(this);
}

handlePrinciple(e)
{
    this.setState({
        prince : e.target.value,
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
        ro : e.target.value,
    });
}


  radioChange(e) 
  {
    console.log("RADIO button VALUE..."+e.currentTarget.value);
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }

calculate=(e)=>
  {
  console.log("Coming inside CALCULATOR..."+ this.state.prince);
  
//  this.setState({
//     prince: ReactDOM.findDOMNode(this.refs.principle).value,
//     dur: ReactDOM.findDOMNode(this.refs.duration).value,
//       ro: ReactDOM.findDOMNode(this.refs.roi).value,
//     } 
// );
console.log()
this.setState(
{
  mature : parseInt(this.state.prince)*(1+(parseInt(this.state.ro)/25))^(4*parseInt(this.state.dur)) 
}

);
//console.log(mature1);
  }


  clear(e)
  {
this.setState({
 prince : '',
 dur:'',
 ro:'',
 mature:''
}
);
ReactDOM.findDOMNode(this.refs.principle).focus();
  }
render()
{
console.log("Came inside Deposit...")
const select= this.state.selectedOption;
if(select==='FD')
{
  return(
 <div>
 <h4>Please fill below details</h4>
<h3>Principle <input type="text" value={ this.state.prince} ref='principle' onChange={this.handlePrinciple} /></h3>
 <h3>Duration < select id = "dropdown" ref='duration' value={ this.state.dur} onChange={this.handleDuration}>
                <option value="select Duration">Select Duration</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>   </h3>
 <h3>Rate Of Interest<input type="text" ref='roi' value={ this.state.ro} onChange={this.handleROI} /></h3>
 <h2>Maturity  ! {this.state.mature} </h2>

<button onClick={this.calculate}>CALCULATE</button>
<button onClick={this.clear}>CLEAR</button>

 </div>
  );

}
else{

}
return(

 <div>
       <h3>Welcome to HDFC bank</h3> 
        <input type="radio"
               value="FD"
               checked={this.state.selectedOption === "FD"}
               onChange={this.radioChange} />FD

        <input type="radio"
               value="RD"
               checked={this.state.selectedOption === "RD"}
               onChange={this.radioChange}/>RD
        
  


      </div> 
      
 
);

}

}
export default DepositComp;