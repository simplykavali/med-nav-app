import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink, DropdownItem } from 'reactstrap'; 

const navigationItem = (props) =>{
    
    let navItem = <></>;
    let Class_Arr = ["nav-link"];
    let ClassName = "";
    if(!props.header)
    {
        Class_Arr.push("med-normal-nav");
    }
    else{
        Class_Arr.push("med-header-nav");
        
    }

    // Reference data for props { Title: "Resources 1", LinkURL: "/resource/1", col: 2, isExternal: true, header: true }
    if(props.isExternal)
    {
        Class_Arr.push("nav-external");
        ClassName = Class_Arr.join(" ");

        navItem = (
            <DropdownItem>
                <NavLink 
                href={props.LinkURL}
                target="_blank"
                className={ClassName}
                >
                    {props.Title}
                </NavLink>
            </DropdownItem>
        )
    }
    else {
        Class_Arr.push("nav-internal");
        ClassName = Class_Arr.join(" ");
        navItem = (
            <DropdownItem>
                <RRNavLink 
                to={props.LinkURL}
                 className={ClassName}
                >
                    {props.Title}
                </RRNavLink>
            </DropdownItem>
        )
    }

    return(
        navItem
    );
}

export default navigationItem;