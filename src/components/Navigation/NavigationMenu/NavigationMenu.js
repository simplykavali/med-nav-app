import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Row,
  Col,
  Container,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import classes from './NavigationMenu.module.css';

const NavigationMenu = (props) => {
  const [isOpen, updateIsOpen] = React.useState(false);
  let NavigationEle = (<NavItem >
    <NavLink className='top-anchor-nav' to={props.navurl}>{props.title}</NavLink>
  </NavItem>);

  let randvalue = Math.random() / 100;

  if (props.hasChildren) {
    NavigationEle = (
      <UncontrolledDropdown nav inNavbar
        onMouseOver={() => updateIsOpen(true)}
        onFocus={() => updateIsOpen(true)}
        onMouseLeave={() => updateIsOpen(false)}
        toggle={() => updateIsOpen(!isOpen)}
        isOpen={isOpen}

      >
        <DropdownToggle nav>

          <NavItem >
            <NavLink className='top-anchor-nav' to={props.navurl} >{props.title}</NavLink>
          </NavItem>
        </DropdownToggle>
        <DropdownMenu>
          <Container>
            <Row>
              <Col>
                <DropdownItem>
                  Option 1 {randvalue}
                </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </Col>
              <Col>
                <DropdownItem>
                  Option 1 {randvalue}
                </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </Col>
            </Row>

          </Container>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  return (

    NavigationEle

  );
}

export default NavigationMenu;