import React from 'react'

import DepositComp from './deposit/deposit'
import LoansComp from './loan/loans'
import { BrowserRouter as Router,Switch, Link,Route} from 'react-router-dom';

class ServicesComp extends React.Component
{
render()
{

return(
// <div>
//  <h1>This is from Service Page</h1>
// <h4>Different Types of eCommerce Websites; Importance of e-Commerce ... steps when promoting your e-commerce website is having flawless site performance and ...
// </h4><h4>Different Types of eCommerce Websites; Importance of e-Commerce ... steps when promoting your e-commerce website is having flawless site performance and ...
// </h4>
// </div>
<Router>
<div>
<table>
<tbody>
<tr>
<td><Link to ={'/deposit'}>Deposit </Link></td></tr> 
<tr><td><Link to ={'/loan'}>Loans </Link></td></tr> 
</tbody>

</table>

<Switch>

<Route exact path='/deposit' component ={DepositComp}  />
<Route exact path='/loan' component ={LoansComp}  />


</Switch>
</div>
</Router>
);

}


}
export default ServicesComp;