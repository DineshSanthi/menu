import React, { useState, useEffect } from "react";

import "./chaat-section.css";

/* Ant Design */
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

/* React Bootstrap */
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* React Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Images */
import VEG from "../../../../assets/img/veg.png";
import NONVEG from "../../../../assets/img/non-veg.png";
import EGG from "../../../../assets/img/egg.png";

const { Meta } = Card;

const ChaatSection = () => {
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

		fetchMenu();

		// const timer = setInterval(
		// 	() => {
		// 		fetchMenu();
		// 	},

		// 	1000
		// );

		// return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<Container fluid>
				<Row>
					<Col lg>
						{menu.map((menu) => {
							if (
								menu.category === "CHAAT SECTION" &&
								menu.type === "VEG" &&
								menu.imageURL != null
							) {
								return (
									<Card
										style={{
											width: "100%",
											marginBottom: 16,
										}}>
										<Meta
											avatar={
												<Avatar shape="square" size={64} src={menu.imageURL} />
											}
											title={menu.name}
											description={
												<h6 style={{ color: "#69af00" }}>
													<img
														src={VEG}
														style={{
															width: 16,
															marginTop: "-2px",
														}}
													/>
													&nbsp;{menu.type}
													<span
														className="price-span"
														style={{ float: "right" }}>
														$ {menu.price}
													</span>
												</h6>
											}
										/>
									</Card>
								);
							} else if (
								menu.category === "CHAAT SECTION" &&
								menu.type === "VEG" &&
								menu.imageURL == null
							) {
								return (
									<Card
										style={{
											width: "100%",
											marginBottom: 16,
										}}>
										<Meta
											avatar={
												<Avatar
													shape="square"
													size={64}
													src="https://firebasestorage.googleapis.com/v0/b/ecommerce-based-food-delivery.appspot.com/o/Admin%2FFoodItems%2Fdefault.png?alt=media&token=9bbb6156-c29f-4964-a20e-db05bf268796"
												/>
											}
											title={menu.name}
											description={
												<h6 style={{ color: "#69af00" }}>
													<img
														src={VEG}
														style={{
															width: 16,
															marginTop: "-2px",
														}}
													/>
													&nbsp;{menu.type}
													<span
														className="price-span"
														style={{ float: "right" }}>
														$ {menu.price}
													</span>
												</h6>
											}
										/>
									</Card>
								);
							} else if (
								menu.category === "CHAAT SECTION" &&
								menu.type === "NON VEG" &&
								menu.imageURL != null
							) {
								return (
									<Card
										style={{
											width: "100%",
											marginBottom: 16,
										}}>
										<Meta
											avatar={
												<Avatar shape="square" size={64} src={menu.imageURL} />
											}
											title={menu.name}
											description={
												<h6 style={{ color: "#7c3600" }}>
													<img
														src={NONVEG}
														style={{
															width: 16,
															marginTop: "-2px",
														}}
													/>
													&nbsp;{menu.type}
													<span
														className="price-span"
														style={{ float: "right" }}>
														$ {menu.price}
													</span>
												</h6>
											}
										/>
									</Card>
								);
							} else if (
								menu.category === "CHAAT SECTION" &&
								menu.type === "NON VEG" &&
								menu.imageURL == null
							) {
								return (
									<Card
										style={{
											width: "100%",
											marginBottom: 16,
										}}>
										<Meta
											avatar={
												<Avatar
													shape="square"
													size={64}
													src="https://firebasestorage.googleapis.com/v0/b/ecommerce-based-food-delivery.appspot.com/o/Admin%2FFoodItems%2Fdefault.png?alt=media&token=9bbb6156-c29f-4964-a20e-db05bf268796"
												/>
											}
											title={menu.name}
											description={
												<h6 style={{ color: "#7c3600" }}>
													<img
														src={NONVEG}
														style={{
															width: 16,
															marginTop: "-2px",
														}}
													/>
													&nbsp;{menu.type}
													<span
														className="price-span"
														style={{ float: "right" }}>
														$ {menu.price}
													</span>
												</h6>
											}
										/>
									</Card>
								);
							} else if (
								menu.category === "CHAAT SECTION" &&
								menu.type === "EGG" &&
								menu.imageURL != null
							) {
								return (
									<Card
										style={{
											width: "100%",
											marginBottom: 16,
										}}>
										<Meta
											avatar={
												<Avatar shape="square" size={64} src={menu.imageURL} />
											}
											title={menu.name}
											description={
												<h6 style={{ color: "#ffc100" }}>
													<img
														src={EGG}
														style={{
															width: 16,
															marginTop: "-2px",
														}}
													/>
													&nbsp;{menu.type}
													<span
														className="price-span"
														style={{ float: "right" }}>
														$ {menu.price}
													</span>
												</h6>
											}
										/>
									</Card>
								);
							} else if (
								menu.category === "CHAAT SECTION" &&
								menu.type === "EGG" &&
								menu.imageURL == null
							) {
								return (
									<Card
										style={{
											width: "100%",
											marginBottom: 16,
										}}>
										<Meta
											avatar={
												<Avatar
													shape="square"
													size={64}
													src="https://firebasestorage.googleapis.com/v0/b/ecommerce-based-food-delivery.appspot.com/o/Admin%2FFoodItems%2Fdefault.png?alt=media&token=9bbb6156-c29f-4964-a20e-db05bf268796"
												/>
											}
											title={menu.name}
											description={
												<h6 style={{ color: "#ffc100" }}>
													<img
														src={EGG}
														style={{
															width: 16,
															marginTop: "-2px",
														}}
													/>
													&nbsp;{menu.type}
													<span
														className="price-span"
														style={{ float: "right" }}>
														$ {menu.price}
													</span>
												</h6>
											}
										/>
									</Card>
								);
							}
						})}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ChaatSection;
