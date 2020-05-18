import React, { useState } from 'react';

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

    // State for navigation toggle
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // State for top menu items
    const [topMenuItems, SettopMenuItems] = useState(
        [
            { Title: "Home", LinkURL: "/home", childs: [] },
                {
                Title: "Resources & Policies", LinkURL: "/resources", childs: [
                    { Title: "dddd 4", LinkURL: "/resources/1", col: 2, isExternal: true, header: true },
                    { Title: "dddd 4", LinkURL: "/resources/2", col: 3, isExternal: true, header: false },
                    { Title: "Resources 3", LinkURL: "/resources/1", col: 4, isExternal: true, header: false },
                    { Title: "dddd 4", LinkURL: "/resources/1", col: 2, isExternal: false, header: true },
                    { Title: "ddddd 5", LinkURL: "/resources/1", col: 5, isExternal: true, header: false },
                    { Title: "Resources 6", LinkURL: "/resources/1", col: 3, isExternal: true, header: false },
                    { Title: "Resources 7", LinkURL: "/resources/1", col: 2, isExternal: true, header: false },
                ]
            },
            {
                Title: "About Medical", LinkURL: "/medical", childs: [
                    { Title: "Medical 1", LinkURL: "/medical/1", col: 4, isExternal: true, header: false },
                    { Title: "Medical 2", LinkURL: "/medical/2", col: 2, isExternal: false, header: false },
                    { Title: "Medical 3", LinkURL: "/medical/3", col: 3, isExternal: false, header: false },
                    { Title: "Medical 4", LinkURL: "/medical/3", col: 1, isExternal: true, header: false },
                    { Title: "Medical new 4", LinkURL: "/medical/3", col: 5, isExternal: true, header: false },
                    { Title: "Medical new 4", LinkURL: "/medical/3", col: 5, isExternal: true, header: false },
                ]
            }
        ]

    );
    //console.log("here");
    let TopMenu = topMenuItems.map((item, index) => {
        //console.log(item.childs.length);
        return <NavigationMenu id={"TopMenu"+index} key={"TopMenu"+index} title={item.Title} navurl={item.LinkURL} childs={item.childs} />
    })



    return (


        <Navbar color="white" light expand="md" className={classes.Nav + ' fixed-top'}>
            <NavbarBrand href="/">
                <Logo />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>

                    {TopMenu}
                    <Search />
                </Nav>

            </Collapse>
        </Navbar>

    );

}

export default Navigation;