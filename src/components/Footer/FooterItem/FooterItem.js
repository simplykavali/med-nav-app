import React, { useState, useEffect } from 'react';
import classes from './FooterItem.module.css';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { NavLink, DropdownItem } from 'reactstrap';

const footerItem = (props) => {

    let FooterItem = <></>;
    let Class_Arr = [];
    let ClassName = "";
    if (!props.header) {
        Class_Arr.push(classes.item);
    }
    else {
        Class_Arr.push(classes.header);

    }

    // Reference data for props { Title: "Resources 1", LinkURL: "/resource/1", col: 2, isExternal: true, header: true }
    if (props.isExternal) {
        Class_Arr.push(classes.navexternal);
        ClassName = Class_Arr.join(" ");
        console.log("External: "+ClassName);
        FooterItem = (
            <div className={classes.footerItem}>
                <div className={ClassName}>
                    <NavLink
                        href={props.LinkURL}
                        target="_blank"

                    >
                        {props.Title}
                    </NavLink>
                </div>
            </div>
        )
    }
    else {
        Class_Arr.push(classes.navinternal);
        ClassName = Class_Arr.join(" ");
        console.log("Internal: "+ClassName);
        FooterItem = (
            <div className={classes.footerItem}>
                <div className={ClassName}>
                    <RRNavLink
                        to={props.LinkURL}

                    >
                        {props.Title}
                    </RRNavLink>
                </div>
            </div>
        )
    }
    //.pfizer-logo-footer
    return (

        <>
            {FooterItem}
        </>

    )
}

export default footerItem;