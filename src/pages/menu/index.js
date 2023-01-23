import React, { useState, useEffect } from "react";

/* index.css */
import "./index.css";

/* React Helmet */
import { Helmet } from 'react-helmet';

/* React Bootstrap */
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* React Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.min.css";

/* Google Fonts */
import GoogleFontLoader from "react-google-font";

/* Importing Logo */
import Logo from "../../assets/img/logo-new.svg";

/* Importing Images */
import VEG from "../../assets/img/veg.png";
import NONVEG from "../../assets/img/non-veg.png";
import EGG from "../../assets/img/egg.png";

const Menu = () => {
    /* Fetch Menu */
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const fetchMenu = async () => {
            await fetch("https://plain-elk-moccasins.cyclic.app/menu-items")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.log("menu");
                    setMenu(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        };

        const timer = setInterval(() => {
            fetchMenu();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            <GoogleFontLoader
                fonts={[
                    {
                        font: "Lobster",
                    },
                    {
                        font: "Bree Serif",
                    },
                ]}
            />
            <Helmet>
                <title>DesiChowrastha | Menu</title>
            </Helmet>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand className="nav-logo">
                        <img alt="" src={Logo} className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <a href="https://www.toasttab.com/desi-chowrastha-herndon-new-905-herndon-parkway/v3/?mode=fulfillment" target="_blank">
                        <Button className="order-now-btn" variant="outline-success">
                            Order Now
                        </Button>
                    </a>
                    {" "}
                </Container>
            </Navbar>
            <div style={{ margin: 16 }}>
                <Container fluid>
                    <Row>
                        <Col lg>
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">SnackBox</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "SNACK BOX" &&
                                    menu.type === "VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={VEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "SNACK BOX" &&
                                    menu.type === "NON VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={NONVEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "SNACK BOX" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={EGG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Juices</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "JUICES"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Tandoor</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "TANDOOR" &&
                                    menu.type === "VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={VEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "TANDOOR" &&
                                    menu.type === "NON VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={NONVEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "TANDOOR" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={EGG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Chaat Section</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "CHAAT SECTION" &&
                                    menu.type === "VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={VEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "CHAAT SECTION" &&
                                    menu.type === "NON VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={NONVEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "CHAAT SECTION" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={EGG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Street Style</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "STREET STYLE" &&
                                    menu.type === "VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={VEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "STREET STYLE" &&
                                    menu.type === "NON VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={NONVEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "STREET STYLE" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={EGG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                        </Col>
                        <Col lg>
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Tiffins</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "TIFFINS" &&
                                    menu.type === "VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={VEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "TIFFINS" &&
                                    menu.type === "NON VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={NONVEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "TIFFINS" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={EGG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Sides</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "SIDES"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>¢ {menu.price}0</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Breads</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "BREADS" &&
                                    menu.type === "VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={VEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "BREADS" &&
                                    menu.type === "NON VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={NONVEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "BREADS" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={EGG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Sweet Cravings</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "SWEET CRAVINGS"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                        </Col>
                        <Col lg>
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Veg Gravies</h3>
                            <h5 style={{ fontFamily: "Lobster", color: "#018900", marginTop: "-6px" }} className="cat-subtitle-spm">Includes Pulao Rice & Naan</h5>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "VEG GRAVIES" &&
                                    menu.type === "VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "VEG GRAVIES" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Appetizers Non-Veg</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "APPETIZERS NON VEG" &&
                                    menu.type === "VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "APPETIZERS NON VEG" &&
                                    menu.type === "NON VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "APPETIZERS NON VEG" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Pulao</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "PULAO" &&
                                    menu.type === "VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={VEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "PULAO" &&
                                    menu.type === "NON VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={NONVEG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "PULAO" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                <img src={EGG} width="16" style={{marginTop: "-4px"}} />
                                                &nbsp;&nbsp;{menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Fill U'r Thirst</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "FILL YOUR THIRST" && menu.price === 2
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}.00</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "FILL YOUR THIRST"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                        </Col>
                        <Col lg>
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Non Veg Gravies</h3>
                            <h5 style={{ fontFamily: "Lobster", color: "#018900", marginTop: "-6px" }} className="cat-subtitle-spm">Includes Pulao Rice & Naan</h5>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "NON VEG GRAVIES" &&
                                    menu.type === "NON VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "NON VEG GRAVIES" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Appetizers Veg</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "APPETIZERS VEG" &&
                                    menu.type === "VEG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "APPETIZERS VEG" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                } else if (
                                    menu.category === "APPETIZERS VEG" &&
                                    menu.type === "EGG"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                                <span style={{ float: "right" }}>$ {menu.price}</span>
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Fusion Desserts - $ 4.99</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "FUSION DESSERTS"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Pastries - $ 2.99</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "PASTRIES"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Spl. Pastry Flavors - $ 3.49</h3>
                            {menu.map((menu) => {
                                if (
                                    menu.category === "SPECIAL PASTRY FLAVORS"
                                ) {
                                    return (
                                        <div>
                                            <h5 style={{ fontFamily: "Bree Serif" }}>
                                                {menu.name}
                                            </h5>
                                        </div>
                                    );
                                }
                            })}
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col md={9}>
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Rice Junction</h3>
                            <Row>
                                <Col>
                                    <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Biryani</h3>
                                    {menu.map((menu) => {
                                        if (
                                            menu.category === "RICE JUNCTION" &&
                                            menu.type === "VEG"
                                        ) {
                                            return (
                                                <div>
                                                    <h5 style={{ fontFamily: "Bree Serif" }}>
                                                        <img src={VEG} width="16" style={{marginTop: "-4px"}} />
                                                        &nbsp;&nbsp;{menu.name}
                                                    </h5>
                                                </div>
                                            );
                                        } else if (
                                            menu.category === "RICE JUNCTION" &&
                                            menu.type === "NON VEG"
                                        ) {
                                            return (
                                                <div>
                                                    <h5 style={{ fontFamily: "Bree Serif" }}>
                                                        <img src={NONVEG} width="16" style={{marginTop: "-4px"}} />
                                                        &nbsp;&nbsp;{menu.name}
                                                    </h5>
                                                </div>
                                            );
                                        } else if (
                                            menu.category === "RICE JUNCTION" &&
                                            menu.type === "EGG"
                                        ) {
                                            return (
                                                <div>
                                                    <h5 style={{ fontFamily: "Bree Serif" }}>
                                                        <img src={EGG} width="16" style={{marginTop: "-4px"}} />
                                                        &nbsp;&nbsp;{menu.name}
                                                    </h5>
                                                </div>
                                            );
                                        }
                                    })}
                                </Col>
                                <Col>
                                    <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Single</h3>
                                    {menu.map((menu) => {
                                        if (
                                            menu.category === "RICE JUNCTION" &&
                                            menu.type === "VEG"
                                        ) {
                                            return (
                                                <div>
                                                    <h5 style={{ fontFamily: "Bree Serif" }}>
                                                        $ {menu.price}
                                                    </h5>
                                                </div>
                                            );
                                        } else if (
                                            menu.category === "RICE JUNCTION" &&
                                            menu.type === "NON VEG"
                                        ) {
                                            return (
                                                <div>
                                                    <h5 style={{ fontFamily: "Bree Serif" }}>
                                                        $ {menu.price}
                                                    </h5>
                                                </div>
                                            );
                                        } else if (
                                            menu.category === "RICE JUNCTION" &&
                                            menu.type === "EGG"
                                        ) {
                                            return (
                                                <div>
                                                    <h5 style={{ fontFamily: "Bree Serif" }}>
                                                        $ {menu.price}
                                                    </h5>
                                                </div>
                                            );
                                        }
                                    })}
                                </Col>
                                <Col>
                                    <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Family</h3>
                                    {menu.map((menu) => {
                                        if (
                                            menu.category === "RICE JUNCTION" && menu.familyPrice != null
                                        ) {
                                            return (
                                                <div>
                                                    <h5 style={{ fontFamily: "Bree Serif" }}>
                                                        $ {menu.familyPrice}
                                                    </h5>
                                                </div>
                                            );
                                        }
                                    })}
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Indian Wok $ 12.99</h3>
                            <Row>
                                <Col>
                                    <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Pick Style</h3>
                                </Col>
                                <Col>
                                    <h3 style={{ fontFamily: "Lobster", color: "#fd590d" }} className="cat-title-spm">Pick Protein</h3>
                                </Col>
                            </Row>
                        </Col>
                    </Row> */}
                </Container>
            </div>
        </div>
    );
};

export default Menu;