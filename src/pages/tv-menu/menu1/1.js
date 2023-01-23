import React, { useState, useEffect } from "react";

/* 1.css */
import "./1.css";

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

const Page1 = () => {
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
			<Container fluid style={{ margin: "6px" }}>
				{/* ROW 1 STARTS */}
				<Row>
					{/* COL 1 STARTS */}
					<Col lg className="col-1">
						<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
							Snack Box
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "SNACK BOX" &&
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
										menu.category === "SNACK BOX" &&
										menu.status === "not available" &&
										menu.type === "VEG"
									) {
										return (
											<div>
												<h4
													className="sold-out-menu-item-name"
													style={{ fontFamily: "Bree Serif" }}>
													<img
														src={VEG}
                                                        alt={menu.name}
														style={{ width: 28, marginTop: "-2px" }}
													/>
													&nbsp;&nbsp;{menu.name}
													<span
														className="sold-out-menu-item-price-txt"
														style={{ float: "right", marginRight: "14px" }}>
														Sold Out
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "SNACK BOX" &&
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
										menu.category === "SNACK BOX" &&
										menu.status === "not available" &&
										menu.type === "NON VEG"
									) {
										return (
											<div>
												<h4
													className="sold-out-menu-item-name"
													style={{ fontFamily: "Bree Serif" }}>
													<img
														src={NONVEG}
                                                        alt={menu.name}
														style={{ width: 28, marginTop: "-2px" }}
													/>
													&nbsp;&nbsp;{menu.name}
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
							Juices
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "JUICES" &&
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
										menu.category === "JUICES" &&
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
							Breads
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "BREADS" &&
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
										menu.category === "BREADS" &&
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
										menu.category === "BREADS" &&
										menu.status === "not available" &&
										menu.type === "VEG"
									) {
										return (
											<div>
												<h4
													className="sold-out-menu-item-name"
													style={{ fontFamily: "Bree Serif" }}>
													<img
														src={VEG}
                                                        alt={menu.name}
														style={{ width: 28, marginTop: "-2px" }}
													/>
													&nbsp;&nbsp;{menu.name}
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
							Special Pastry Flavors - $ 3.49
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "SPECIAL PASTRY FLAVORS" &&
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
										menu.category === "SPECIAL PASTRY FLAVORS" &&
										menu.status === "not available"
									) {
										return (
											<div>
												<h4
													className="sold-out-menu-item-name"
													style={{ fontFamily: "Bree Serif" }}>
													{menu.name}
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
							Appetizers Veg&nbsp;&nbsp;
                            <img src={VEG} alt={menu.name} style={{ width: 32, marginTop: "-2px" }} />
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "APPETIZERS VEG" &&
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
										menu.category === "APPETIZERS VEG" &&
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
							Tandoor
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "TANDOOR" &&
										menu.status === "available" &&
										menu.description == null &&
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
										menu.category === "TANDOOR" &&
										menu.status === "available" &&
										menu.description == null &&
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
										menu.category === "TANDOOR" &&
										menu.status === "available" &&
										menu.description != null &&
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
												{/* <h6>{menu.description}</h6> */}
											</div>
										);
									} else if (
										menu.category === "TANDOOR" &&
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
							Appetizers Non Veg&nbsp;&nbsp;
                            <img src={NONVEG} alt={menu.name} style={{ width: 32, marginTop: "-2px" }} />
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "APPETIZERS NON VEG" &&
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
										menu.category === "APPETIZERS NON VEG" &&
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
							Sides
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "SIDES" &&
										menu.status === "available" &&
										menu.price <= 1
									) {
										return (
											<div>
												<h4 style={{ fontFamily: "Bree Serif" }}>
													{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														¢ {menu.price}0
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "SIDES" &&
										menu.status === "available"
									) {
										return (
											<div>
												<h4 style={{ fontFamily: "Bree Serif" }}>
													{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														¢ {menu.price}
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "SIDES" &&
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
					{/* COL 3 ENDS */}
				</Row>
				{/* ROW 1 ENDS */}
			</Container>
		</div>
	);
};

export default Page1;
