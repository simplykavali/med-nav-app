import React from 'react';
import {
    Col,
    Row,
    Container
} from 'reactstrap'
import classes from './Main.module.css';

const main = (props) => {
    //.pfizer-logo-footer
    return(
        <div className={classes.main}>
            {props.children}
        </div>
    )
}

export default main;