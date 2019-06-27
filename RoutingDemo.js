import React from 'react';
import { BrowserRouter as Router,Switch, Link,Route} from 'react-router-dom';

import HomeComp from './routing/home'
import ContactusComp from './routing/contactUs'
import ServicesComp from './routing/services'
import AboutusComp from './routing/aboutUs' 

class RoutingDemo extends React.Component
{
 render()
 {
 return(
<Router>
<div>
<h1>Welcome to Cognizant technologies</h1>
<div align="right">
<Link to ={'/'}> Home </Link> 
<Link to ={'/about'}> About Us </Link> 
<Link to ={'/services'}> Services </Link> 
<Link to ={'/contact'}> Contact Us </Link> 
</div>

<Switch>
<Route exact path='/' component ={HomeComp}  />
<Route exact path='/about' component ={AboutusComp}  />
<Route exact path='/services' component ={ServicesComp}  />
<Route exact path='/contact' component ={ContactusComp}  />

</Switch>


</div>


</Router>

 );




 }

}

export default RoutingDemo;






































































































































