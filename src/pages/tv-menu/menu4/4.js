import React, { useState, useEffect } from "react";

/* 4.css */
import "./4.css";

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

const Page4 = () => {
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
			<Container fluid style={{ margin: "8px" }}>
				{/* ROW 1 STARTS */}
				<Row>
					{/* COL 1 STARTS */}
					<Col lg className="col-1">
						<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
							Rice Junction
						</h2>
						<Row>
							<Col md={6}>
								<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
									Biryani
								</h2>
							</Col>
							<Col md={3}>
								<h2
									className="cat-title"
									style={{
										fontFamily: "Lobster",
										float: "right",
										marginRight: "38px",
									}}>
									Single
								</h2>
							</Col>
							<Col md={3}>
								<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
									Family
								</h2>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "RICE JUNCTION" &&
										menu.status === "available" &&
										menu.type === "VEG" &&
										menu.familyPrice != null
									) {
										return (
											<div>
												<Row>
													<Col md={9}>
														<h4 style={{ fontFamily: "Bree Serif" }}>
															<img
																src={VEG}
                                                                alt={menu.name}
																style={{ width: 28, marginTop: "-2px" }}
															/>
															&nbsp;&nbsp;{menu.name}
															<span
																style={{ float: "right", marginRight: "30px" }}>
																$ {menu.price}
															</span>
														</h4>
													</Col>
													<Col md={3}>
														<h4 style={{ fontFamily: "Bree Serif" }}>
															$ {menu.familyPrice}
														</h4>
													</Col>
												</Row>
											</div>
										);
									} else if (
										menu.category === "RICE JUNCTION" &&
										menu.status === "available" &&
										menu.type === "VEG" &&
										menu.familyPrice == null
									) {
										return (
											<div>
												<Row>
													<Col md={9}>
														<h4 style={{ fontFamily: "Bree Serif" }}>
															<img
																src={VEG}
                                                                alt={menu.name}
																style={{ width: 28, marginTop: "-2px" }}
															/>
															&nbsp;&nbsp;{menu.name}
															<span
																style={{ float: "right", marginRight: "30px" }}>
																$ {menu.price}
															</span>
														</h4>
													</Col>
													<Col md={3}>
														<h4 style={{ fontFamily: "Bree Serif" }}></h4>
													</Col>
												</Row>
											</div>
										);
									} else if (
										menu.category === "RICE JUNCTION" &&
										menu.status === "available" &&
										menu.type === "EGG"
									) {
										return (
											<div>
												<Row>
													<Col md={9}>
														<h4 style={{ fontFamily: "Bree Serif" }}>
															<img
																src={EGG}
                                                                alt={menu.name}
																style={{ width: 28, marginTop: "-2px" }}
															/>
															&nbsp;&nbsp;{menu.name}
															<span
																style={{ float: "right", marginRight: "30px" }}>
																$ {menu.price}
															</span>
														</h4>
													</Col>
													<Col md={3}>
														<h4 style={{ fontFamily: "Bree Serif" }}>
															$ {menu.familyPrice}
														</h4>
													</Col>
												</Row>
											</div>
										);
									} else if (
										menu.category === "RICE JUNCTION" &&
										menu.status === "available" &&
										menu.type === "NON VEG"
									) {
										return (
											<div>
												<Row>
													<Col md={9}>
														<h4 style={{ fontFamily: "Bree Serif" }}>
															<img
																src={NONVEG}
																style={{ width: 28, marginTop: "-2px" }}
															/>
															&nbsp;&nbsp;{menu.name}
															<span
																style={{ float: "right", marginRight: "30px" }}>
																$ {menu.price}
															</span>
														</h4>
													</Col>
													<Col md={3}>
														<h4 style={{ fontFamily: "Bree Serif" }}>
															$ {menu.familyPrice}
														</h4>
													</Col>
												</Row>
											</div>
										);
									} else if (
										menu.category === "RICE JUNCTION" &&
										menu.status === "not available"
									) {
										return (
											<div>
												<Row>
													<Col md={9}>
														<h4
															className="sold-out-menu-item-name"
															style={{ fontFamily: "Bree Serif" }}>
															{menu.name}
															<span
																className="sold-out-menu-item-price-txt"
																style={{ float: "right", marginRight: "30px" }}>
																Sold Out
															</span>
														</h4>
													</Col>
													<Col md={3}>
														<h4
															className="sold-out-menu-item-price-txt"
															style={{
																fontFamily: "Bree Serif",
																marginLeft: "-26px",
															}}>
															Sold Out
														</h4>
													</Col>
												</Row>
											</div>
										);
									}
								})}
							</Col>
						</Row>
						<h2 className="cat-title" style={{ fontFamily: "Lobster" }}>
							Pastries - $ 2.99
						</h2>
						<Row>
							<Col md={12}>
								{menu.map((menu) => {
									if (
										menu.category === "PASTRIES" &&
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
										menu.category === "PASTRIES" &&
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
							Today's Offer
						</h2>
					</Col>
					{/* COL 2 ENDS */}
				</Row>
				{/* ROW 1 ENDS */}
			</Container>
		</div>
	);
};

export default Page4;
