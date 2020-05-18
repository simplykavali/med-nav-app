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

    const [FooterMenu, setFooterMenu] = useState([]);
    let Footer_Menu = [];


    useEffect(() => {
        let Footer_Menu = [
            { Title: "Home", LinkURL: "/home", col: 1, isExternal: false, header: true },
            { Title: "Patient Interation Portal", LinkURL: "/patient", col: 1, isExternal: false, header: true },
            { Title: "Profile", LinkURL: "/profile", col: 1, isExternal: false, header: true },
            { Title: "Resources & Policies", LinkURL: "/resources", col: 2, isExternal: false, header: true },
            { Title: "Resources", LinkURL: "/resources/1", col: 2, isExternal: false, header: false },
            { Title: "Policies", LinkURL: "/resource/policies", col: 2, isExternal: false, header: false },
            { Title: "Success Stories", LinkURL: "/resource/stories", col: 2, isExternal: false, header: false },
            { Title: "About Medical", LinkURL: "/medical", col: 3, isExternal: false, header: true },
            { Title: "Evidence Generation", LinkURL: "/medical", col: 3, isExternal: false, header: false },
            { Title: "Scientific Advancement", LinkURL: "/medical", col: 3, isExternal: false, header: false },
            { Title: "Talent", LinkURL: "/medical", col: 3, isExternal: false, header: false },
            { Title: "Data Interpretation", LinkURL: "/medical", col: 3, isExternal: false, header: false },
            { Title: "Quality and Integrity", LinkURL: "/medical", col: 3, isExternal: false, header: false },

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

                <FooterItem
                    Title={FooterMenu[i][j].Title}
                    LinkURL={FooterMenu[i][j].LinkURL}
                    isExternal={FooterMenu[i][j].isExternal}
                    header={FooterMenu[i][j].header}
                    key={i + j}
                ></FooterItem>
            );
        }
        footer_grouped_menu.push(
            <Col md='3' xs='12' key={"Col_Footer_" + i}>
                {col_menu}
            </Col>
        )
    }
    //.pfizer-logo-footer
    return (
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