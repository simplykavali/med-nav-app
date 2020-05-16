import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo/Logo';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import classes from './Navigation.module.css';
import Search from './Search/Search';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';

const Navigation = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (


        <Navbar color="white" light expand="md" className={classes.Nav + ' fixed-top'}>
            <NavbarBrand href="/">
                <Logo />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>

                    <NavigationMenu title='Home' navurl='/home' />
                    <NavigationMenu title='Resources &amp; Policies' hasChildren navurl='/resource' />
                    <NavigationMenu title='About Medical' hasChildren navurl='/medical' />
                    <Search />
                </Nav>

            </Collapse>
        </Navbar>

    );

}

export default Navigation;