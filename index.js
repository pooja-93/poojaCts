import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import AbcComp from './Abc';
import XyzComp from './Xyz';
import Person from './Person';
import EventComp from './EventDemo';
import Counter from './Statefull';
import FormsComp from './Forms';
import OperationsComp from './Operations';
import RoutingDemo from './RoutingDemo';
import ServicesComp from './routing/services';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Demo />, document.getElementById('d1'));
// ReactDOM.render(<div><AbcComp /><AbcComp /> <AbcComp /></div>, document.getElementById('d2'));
// ReactDOM.render(<div>
//     <XyzComp>Suresh</XyzComp>
//      <XyzComp>Mahesh</XyzComp>
//       <XyzComp>Pooja</XyzComp>
//        <XyzComp>Kundan</XyzComp>
//           </div>,
//  document.getElementById('d3'))

// ReactDOM.render(<Person name="Pooja" /> , document.getElementById('p1')); 
// ReactDOM.render(<EventComp /> , document.getElementById('e1')); 
// ReactDOM.render(<div><Counter/><Counter/></div> , document.getElementById('c1')); 

// ReactDOM.render(<FormsComp /> , document.getElementById('f1'));
// ReactDOM.render(<OperationsComp /> , document.getElementById('o1'));
 
    ReactDOM.render(<RoutingDemo />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
