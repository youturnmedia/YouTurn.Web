import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLink,Link } from 'react-router';

export default class Menu extends Component{
    render(){
        const navbarInstance = (
            <Navbar  collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#brand">React-Bootstrap</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={1} >
                    <IndexLink to='/' >Home</IndexLink>
				</NavItem>
				<NavItem eventKey={2} href="/article/test">
                    <Link to='/article/test' >article</Link>
				</NavItem>
				<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
			</Nav>
			<Nav pullRight>
				<NavItem eventKey={1} href="#">
					Link Right
				</NavItem>
				<NavItem eventKey={2} href="#">
					Link Right
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
        );
        return(
            <div>
                <h1>You Turn Logo</h1>
                {navbarInstance}
            </div>
        )
    }
}