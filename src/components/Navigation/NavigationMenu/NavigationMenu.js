import React, { useState, useEffect, useRef, Children } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Row,
  Col,
  Container,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
//import classes from './NavigationMenu.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';


const NavigationMenu = (props) => {
  const [isOpen, updateIsOpen] = useState(false);
  const [GroupedChildren, setGroupedChildren] = useState([{}]);

  let NavigationEle = (<NavItem >
    <NavLink className='top-anchor-nav' to={props.navurl}>{props.title}</NavLink>
  </NavItem>);

  useEffect(() => {
    if (props.childs.length > 0) {
      const grouped_children = props.childs.reduce(function (h, obj) {
        h[obj.col] = (h[obj.col] || []).concat(obj);
        return h;
      }, {});

      console.log(grouped_children);
      setGroupedChildren(grouped_children);
      
    }
  }, [props]);

  if (props.childs.length > 0) {
    let dropdown_menu = [];
    for (let i in GroupedChildren) {
      let col_menu = [];
      for (let j in GroupedChildren[i]) {
        col_menu.push(
          <NavigationItem
            Title={GroupedChildren[i][j].Title}
            LinkURL={GroupedChildren[i][j].LinkURL}
            isExternal={GroupedChildren[i][j].isExternal}
            header={GroupedChildren[i][j].header}
            key={i+j}
          ></NavigationItem>
        );
      }
      dropdown_menu.push(
        <Col key={"Col"+props.id+i}>
          {col_menu}
        </Col>
      )
    }



    NavigationEle = (
      <UncontrolledDropdown nav inNavbar
        onMouseOver={() => updateIsOpen(true)}
        onFocus={() => updateIsOpen(true)}
        onMouseLeave={() => updateIsOpen(false)}
        toggle={() => updateIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <DropdownToggle nav>
         
            <NavLink className='top-anchor-nav' to={props.navurl} activeClassName='top-nav-active' >{props.title}</NavLink>
         
        </DropdownToggle>
        <DropdownMenu>
          <Container fluid>
            <Row className="nav-row" >
              {dropdown_menu}
            </Row>
          </Container>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }



  return (NavigationEle);
}

export default NavigationMenu;