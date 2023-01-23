import React, { useState, useEffect } from "react";

/* 2.css */
import "./2.css";

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

const Page2 = () => {
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
			<Container fluid style={{ margin: "8px" }}>
				{/* ROW 1 STARTS */}
				<Row>
					{/* COL 1 STARTS */}
					<Col lg className="col-1">
						<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
							Veg Gravies
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "VEG GRAVIES" &&
										menu.status === "available"
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
										menu.category === "VEG GRAVIES" &&
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
							Pulao
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "PULAO" &&
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
										menu.category === "PULAO" &&
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
										menu.category === "PULAO" &&
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
							Non Veg Gravies
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "NON VEG GRAVIES" &&
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
										menu.category === "NON VEG GRAVIES" &&
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
										menu.category === "NON VEG GRAVIES" &&
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
							Chaat Section
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "CHAAT SECTION" &&
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
										menu.category === "CHAAT SECTION" &&
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
										menu.category === "CHAAT SECTION" &&
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
							Fill U'r Thirst
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "FILL YOUR THIRST" &&
										menu.status === "available" &&
										menu.price === 2
									) {
										return (
											<div>
												<h4
													style={{
														fontFamily: "Bree Serif",
														overflow: "hidden",
														whiteSpace: "nowrap",
														textOverflow: "ellipsis",
													}}>
													{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														$ {menu.price}.00
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "FILL YOUR THIRST" &&
										menu.status === "available" &&
										menu.description != null
									) {
										return (
											<div>
												<h4
													style={{
														fontFamily: "Bree Serif",
														overflow: "hidden",
														whiteSpace: "nowrap",
														textOverflow: "ellipsis",
													}}>
													{menu.name}
													<br></br>
													<small style={{ fontSize: "24px" }}>
														{menu.description}
													</small>
													<span style={{ float: "right", marginRight: "14px" }}>
														$ {menu.price}
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "FILL YOUR THIRST" &&
										menu.status === "available" &&
										menu.description == null
									) {
										return (
											<div>
												<h4
													style={{
														fontFamily: "Bree Serif",
														overflow: "hidden",
														whiteSpace: "nowrap",
														textOverflow: "ellipsis",
													}}>
													{menu.name}
													<span style={{ float: "right", marginRight: "14px" }}>
														$ {menu.price}
													</span>
												</h4>
											</div>
										);
									} else if (
										menu.category === "FILL YOUR THIRST" &&
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

export default Page2;
