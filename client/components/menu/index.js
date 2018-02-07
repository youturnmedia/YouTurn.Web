import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Image } from 'react-bootstrap';
import { IndexLink,Link } from 'react-router';
import {navbardefault} from './styles';

export default class Menu extends Component{
    render(){
       
		
        return(
            <div id="menu">
                {/* <h1>You Turn</h1> */}
				<Navbar fixedTop={true}  >
		<Navbar.Header>
			<Navbar.Brand>				
				
				<Link id="youturnbrand" to='/' >	You Turn</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem href='/செய்திகள்'>
					செய்திகள்
				</NavItem>
				<NavItem href='/மீம்ஸ்'>
					மீம்ஸ்
				</NavItem>
				<NavItem href='/கட்டுரைகள்'>
					கட்டுரைகள்
				</NavItem>
				<NavItem href='/எங்களைபற்றி'>
					எங்களை பற்றி
				</NavItem>	
				<NavItem href='/விமர்சனங்கள்'>
					விமர்சனங்கள்
				</NavItem>						
			</Nav>
			<Nav pullRight>
				<NavItem eventKey={1} href="#">
					சந்தேகங்களை கேட்க?
				</NavItem>
				
			</Nav>
		</Navbar.Collapse>
	</Navbar>
            </div>
        )
    }
}