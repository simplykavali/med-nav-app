import React, { useState, useEffect } from 'react';
import classes from './FooterItem.module.css';

const footerItem = (props) => {

 
    //.pfizer-logo-footer
    return(
        <div className={classes.footerItem}>
            {props.Title}
        </div>
    )
}

export default footerItem;