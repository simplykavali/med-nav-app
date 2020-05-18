import React, { useState, useEffect } from 'react';
import PfizerLogo from 'src/assets/img/Pfizer-logo.png';
import FooterItem from './FooterItem/FooterItem';
import {
    Col,
    Row,
    Container
} from 'reactstrap'
import classes from './Footer.module.css';

const Footer = (props) => {

    const [FooterMenu,setFooterMenu]  = useState([]);
    let Footer_Menu = [];
  

    useEffect(() => {
        let Footer_Menu =  [
            { Title: "Resources 1", LinkURL: "/resource/1", col: 1, isExternal: true, header: true },
            { Title: "Resources 2", LinkURL: "/resource/2", col: 2, isExternal: true, header: false },
            { Title: "Resources 3", LinkURL: "/resource/1", col: 3, isExternal: true, header: false },
            { Title: "Resources 4", LinkURL: "/resource/1", col: 1, isExternal: false, header: true },
            { Title: "Resources 5", LinkURL: "/resource/1", col: 2, isExternal: true, header: false },
            { Title: "Resources 6", LinkURL: "/resource/1", col: 3, isExternal: true, header: false },
            { Title: "Resources 7", LinkURL: "/resource/1", col: 1, isExternal: true, header: false }
        ];
        if (Footer_Menu.length > 0) {
          const grouped_children = Footer_Menu.reduce(function (h, obj) {
            h[obj.col] = (h[obj.col] || []).concat(obj);
            return h;
          }, {})
          setFooterMenu(grouped_children);
        }
      }, []);

    console.log(FooterMenu);

  
        let footer_grouped_menu = [];
        for (let i in FooterMenu) {
          let col_menu = [];
          for (let j in FooterMenu[i]) {
            col_menu.push(
             
              <FooterItem Title={FooterMenu[i][j].Title}></FooterItem>
            );
          }
          footer_grouped_menu.push(
            <Col key={"Col"+props.id+i}>
              {col_menu}
            </Col>
          )
        }
    //.pfizer-logo-footer
    return(
        <div className={classes.footer}>
        <Container fluid>
            <Row>
                <Col md='3' xs='12' >
                <img src={PfizerLogo} alt="Pfizer Logo" className={classes.pfizerlogofooter}></img>
                    
                </Col>
                {footer_grouped_menu}
            </Row>
            <Row>
                <Col xs='12' >
                <div className={classes.copyright}>
                © 2019 Pfizer. The information provided in this site is intended only for Pfizermedical colleagues in the United States.
                        The information and recommendations herein may differ in other countries.
                </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Footer;