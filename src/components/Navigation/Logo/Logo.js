import React from 'react';
import SiteLog from 'src/assets/img/Site_logo.png';
import classes from './Logo.module.css';
import { UncontrolledTooltip } from 'reactstrap';

const logo = (props) => {

    return (
        <div className={classes.Logo}>
            <img src={SiteLog} alt="Medical Navigator" id="Logo-tooltip"></img>
            <UncontrolledTooltip target="#Logo-tooltip">
                Medical Navigator application
                </UncontrolledTooltip>
        </div>
    );

}

export default logo;