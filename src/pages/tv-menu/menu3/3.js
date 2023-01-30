import React, { useState, useEffect } from "react";

/* 3.css */
import "./3.css";

/* React Bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* React Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.min.css";

/* Google Fonts */
import GoogleFontLoader from "react-google-font";

/* Importing Images */
import VEG from "../../../assets/img/veg.png";
import NONVEG from "../../../assets/img/non-veg.png";
import EGG from "../../../assets/img/egg.png";

const Page3 = () => {
	/* Fetch Menu */
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		const fetchMenu = async () => {
			await fetch("https://desichowrastha-api.onrender.com/menu-items")
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
			<Container fluid style={{ margin: "4px" }}>
				{/* ROW 1 STARTS */}
				<Row>
					{/* COL 1 STARTS */}
					<Col lg className="col-1">
						<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
							Tiffins Veg
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "TIFFINS" &&
										menu.status === "available" &&
										menu.type === "VEG"
									) {
										return (
											<div>
												<h4 style={{ fontFamily: "Bree Serif" }}>
													<img
														src={VEG}
                                                        alt={menu.name}
														style={{ width: 28, marginTop: "-2px" }}
													/>
													&nbsp;&nbsp;{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														$ {menu.price}
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "TIFFINS" &&
										menu.status === "not available"
									) {
										return (
											<div>
												<h4
													className="sold-out-menu-item-name"
													style={{ fontFamily: "Bree Serif" }}>
													{menu.name}
													<span
														className="sold-out-menu-item-price-txt"
														style={{ float: "right", marginRight: "14px" }}>
														Sold Out
													</span>
												</h4>
											</div>
										);
									}
								})}
							</Col>
						</Row>
					</Col>
					{/* COL 1 ENDS */}

					{/* COL 2 STARTS */}
					<Col lg className="col-2">
						<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
							Tiffins Non Veg
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "TIFFINS" &&
										menu.status === "available" &&
										menu.type === "NON VEG"
									) {
										return (
											<div>
												<h4 style={{ fontFamily: "Bree Serif" }}>
													<img
														src={NONVEG}
                                                        alt={menu.name}
														style={{ width: 28, marginTop: "-2px" }}
													/>
													&nbsp;&nbsp;{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														$ {menu.price}
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "TIFFINS" &&
										menu.status === "available" &&
										menu.type === "EGG"
									) {
										return (
											<div>
												<h4 style={{ fontFamily: "Bree Serif" }}>
													<img
														src={EGG}
                                                        alt={menu.name}
														style={{ width: 28, marginTop: "-2px" }}
													/>
													&nbsp;&nbsp;{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														$ {menu.price}
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "TIFFINS" &&
										menu.type != "VEG" &&
										menu.status === "not available"
									) {
										return (
											<div>
												<h4
													className="sold-out-menu-item-name"
													style={{ fontFamily: "Bree Serif" }}>
													{menu.name}
													<span
														className="sold-out-menu-item-price-txt"
														style={{ float: "right", marginRight: "14px" }}>
														Sold Out
													</span>
												</h4>
											</div>
										);
									}
								})}
							</Col>
						</Row>
						<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
							Sweet Cravings
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "SWEET CRAVINGS" &&
										menu.status === "available"
									) {
										return (
											<div>
												<h4 style={{ fontFamily: "Bree Serif" }}>
													{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														$ {menu.price}
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "SWEET CRAVINGS" &&
										menu.status === "not available"
									) {
										return (
											<div>
												<h4
													className="sold-out-menu-item-name"
													style={{ fontFamily: "Bree Serif" }}>
													{menu.name}
													<span
														className="sold-out-menu-item-price-txt"
														style={{ float: "right", marginRight: "14px" }}>
														Sold Out
													</span>
												</h4>
											</div>
										);
									}
								})}
							</Col>
						</Row>
						<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
							Fusion Desserts - $ 4.99
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "FUSION DESSERTS" &&
										menu.status === "available"
									) {
										return (
											<div>
												<h4 style={{ fontFamily: "Bree Serif" }}>
													{menu.name}
												</h4>
											</div>
										);
									} else if (
										menu.category === "FUSION DESSERTS" &&
										menu.status === "not available"
									) {
										return (
											<div>
												<h4
													className="sold-out-menu-item-name"
													style={{ fontFamily: "Bree Serif" }}>
													{menu.name}
													<span
														className="sold-out-menu-item-price-txt"
														style={{ float: "right", marginRight: "14px" }}>
														Sold Out
													</span>
												</h4>
											</div>
										);
									}
								})}
							</Col>
						</Row>
					</Col>
					{/* COL 2 ENDS */}

					{/* COL 3 STARTS */}
					<Col lg className="col-3">
						<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
							Street Style
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "STREET STYLE" &&
										menu.status === "available" &&
										menu.type === "VEG"
									) {
										return (
											<div>
												<h4 style={{ fontFamily: "Bree Serif" }}>
													<img
														src={VEG}
                                                        alt={menu.name}
														style={{ width: 28, marginTop: "-2px" }}
													/>
													&nbsp;&nbsp;{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														$ {menu.price}
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "STREET STYLE" &&
										menu.status === "available" &&
										menu.type === "NON VEG"
									) {
										return (
											<div>
												<h4 style={{ fontFamily: "Bree Serif" }}>
													<img
														src={NONVEG}
                                                        alt={menu.name}
														style={{ width: 28, marginTop: "-2px" }}
													/>
													&nbsp;&nbsp;{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														$ {menu.price}
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "STREET STYLE" &&
										menu.status === "available" &&
										menu.type === "EGG"
									) {
										return (
											<div>
												<h4 style={{ fontFamily: "Bree Serif" }}>
													<img
														src={EGG}
                                                        alt={menu.name}
														style={{ width: 28, marginTop: "-2px" }}
													/>
													&nbsp;&nbsp;{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														$ {menu.price}
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "STREET STYLE" &&
										menu.status === "not available"
									) {
										return (
											<div>
												<h4
													className="sold-out-menu-item-name"
													style={{ fontFamily: "Bree Serif" }}>
													{menu.name}
													<span
														className="sold-out-menu-item-price-txt"
														style={{ float: "right", marginRight: "14px" }}>
														Sold Out
													</span>
												</h4>
											</div>
										);
									}
								})}
							</Col>
						</Row>
						<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
							Indian Wok - $ 12.99
						</h2>
						<Row>
							<Col md={7}>
								<h2
									className="cat-title"
									style={{ fontFamily: "Lobster", marginBottom: "40px" }}>
									Pick Style
								</h2>
								<br></br>
								<h4 style={{ fontFamily: "Bree Serif", fontSize: "34px" }}>
									Fried Rice
								</h4>
								<h4 style={{ fontFamily: "Bree Serif" }}>
									Schezwan Fried Rice
								</h4>
							</Col>
							<Col md={5}>
								<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
									Pick Protein
								</h2>
								<h5 style={{ fontFamily: "Bree Serif" }}>
                                    <img src={VEG} alt={menu.name} style={{ width: 20, marginTop: "-2px" }} />
									&nbsp;&nbsp;Veg Burnt Garlic
								</h5>
								<h5 style={{ fontFamily: "Bree Serif" }}>
                                    <img src={EGG} alt={menu.name} style={{ width: 20, marginTop: "-2px" }} />
									&nbsp;&nbsp;Egg + $ 1
								</h5>
								<h5 style={{ fontFamily: "Bree Serif" }}>
                                    <img src={NONVEG} alt={menu.name} style={{ width: 20, marginTop: "-2px" }} />
									&nbsp;&nbsp;Chicken + $ 2
								</h5>
								<h5 style={{ fontFamily: "Bree Serif" }}>
                                    <img src={NONVEG} alt={menu.name} style={{ width: 20, marginTop: "-2px" }} />
									&nbsp;&nbsp;Kheema + $ 3
								</h5>
								<h5 style={{ fontFamily: "Bree Serif" }}>
                                    <img src={NONVEG} alt={menu.name} style={{ width: 20, marginTop: "-2px" }} />
									&nbsp;&nbsp;Shrimp + $ 3
								</h5>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col md={7} style={{ marginTop: "14px" }}>
								<h4 style={{ fontFamily: "Bree Serif" }}>Hakka Noodles</h4>
								<h4 style={{ fontFamily: "Bree Serif" }}>Schezwan Noodles</h4>
							</Col>
							<Col md={5}>
								<h5 style={{ fontFamily: "Bree Serif" }}>
                                    <img src={VEG} alt={menu.name} style={{ width: 20, marginTop: "-2px" }} />
									&nbsp;&nbsp;Veg Burnt Garlic
								</h5>
								<h5 style={{ fontFamily: "Bree Serif" }}>
                                    <img src={EGG} alt={menu.name} style={{ width: 20, marginTop: "-2px" }} />
									&nbsp;&nbsp;Egg + $ 1
								</h5>
								<h5 style={{ fontFamily: "Bree Serif" }}>
                                    <img src={NONVEG} alt={menu.name} style={{ width: 20, marginTop: "-2px" }} />
									&nbsp;&nbsp;Chicken + $ 2
								</h5>
							</Col>
						</Row>
					</Col>
					{/* COL 3 ENDS */}
				</Row>
				{/* ROW 1 ENDS */}
			</Container>
		</div>
	);
};

export default Page3;
