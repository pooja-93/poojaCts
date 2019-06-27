import React from 'react'
import ReactDOM from 'react-dom'

class OperationsComp extends React.Component
{
    constructor()
    {
        super();
    this.state = {
    a : 0,
    b : 0,
    c :0
}

// this.handleNum1= this.handleNum1.bind(this);
// this.handleNum2= this.handleNum2.bind(this);
this.add = this.add.bind(this);
this.substract = this.substract.bind(this);
this.multiply = this.multiply.bind(this);
this.division = this.division.bind(this);

    }

// handleNum1(e)
// {
//     console.log("Came inside Add Method..");
//     console.log("VALUE of NUM1..."+e.target.value);
//     this.setState({
//         a : e.target.value,
//     });
     
// }
// handleNum2(e)
// {
//       console.log("VALUE of NUM2..."+e.target.value);
//      this.setState({
//         b : e.target.value,
//     });
// }
add(e)
{
    this.setState({
    a: ReactDOM.findDOMNode(this.refs.num1).value,
    b: ReactDOM.findDOMNode(this.refs.num2).value,
    }
    );
   this.setState(

        {
            c : parseInt(this.state.a) + parseInt(this.state.b)
        }
    );
}

substract(e)
{
      this.setState({
    a: ReactDOM.findDOMNode(this.refs.num1).value,
    b: ReactDOM.findDOMNode(this.refs.num2).value,
    }
    );
     this.setState(

        {
            c : parseInt(this.state.a) - parseInt(this.state.b)
        }
    );

}

multiply(e)
{
      this.setState({
    a: ReactDOM.findDOMNode(this.refs.num1).value,
    b: ReactDOM.findDOMNode(this.refs.num2).value,
    }
    );
     this.setState(

        {
     c : parseInt(this.state.a) * parseInt(this.state.b)
        }
    );

}


division(e)
{
      this.setState({
    a: ReactDOM.findDOMNode(this.refs.num1).value,
    b: ReactDOM.findDOMNode(this.refs.num2).value,
    }
    );
     this.setState(

        {
     c : parseInt(this.state.a) / parseInt(this.state.b)
        }
    );

}

render()
{

return(

// <div>
//   <h2>Enter Value to 'A' <input type="text" ref='num1' onChange={this.handleNum1} /></h2>
//   <h2>Enter Value to 'B' <input type="text" ref='num2' onChange={this.handleNum2} /></h2>
<div>
 <h2>Enter Value to 'A' <input type="text" ref='num1'  /></h2>
 <h2>Enter Value to 'B' <input type="text" ref='num2'  /></h2>

<button onClick={this.add}>ADD</button>
<button onClick={this.substract}>Substract</button>
<button onClick={this.multiply}>Multiplication</button>
<button onClick={this.division}>Division</button>
<h2>Result  ! {this.state.c} </h2>
</div>


);



}




}
export default OperationsComp;