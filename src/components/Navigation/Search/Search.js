import React from 'react';
import SearchIcon from 'src/assets/img/senico-search.png'
import {
    UncontrolledTooltip,
    NavItem,
    NavLink
} from 'reactstrap';

const search = () => {

    return (

        <NavItem>
            <NavLink className="top-anchor-other"
                href="https://google.com"
                target="_blank"
                id="sinequa-search"
            >
                <img src={SearchIcon} alt="sinequa search" ></img>
            </NavLink>
            <UncontrolledTooltip target="#sinequa-search">
                sinequa search
                </UncontrolledTooltip>
        </NavItem>

    );
}

export default search;