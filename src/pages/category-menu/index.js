import React from "react";

/* index.css */
import "./index.css";

/* React Helmet */
import { Helmet } from 'react-helmet';

/* Importing Category Pages */
//** Page 1 (Ref. PDF) *//
import SnackBox from "./category-pages/snack-box/snack-box";
import Juices from "./category-pages/juices/juices";
import AppetizersVeg from "./category-pages/appetizers-veg/appetizers-veg";
import AppetizersNonVeg from "./category-pages/appetizers-nonveg/appetizers-nonveg";
import Tandoor from "./category-pages/tandoor/tandoor";
import Sides from "./category-pages/sides/sides";
import Tiffins from "./category-pages/tiffins/tiffins";
import ChaatSection from "./category-pages/chaat-section/chaat-section";
import StreetStyle from "./category-pages/street-style/street-style";

//** Page 2 (Ref. PDF) *//
import VegGravies from "./category-pages/veg-gravies/veg-gravies";
import NonVegGravies from "./category-pages/nonveg-gravies/nonveg-gravies";
import Breads from "./category-pages/breads/breads";
import Pulao from "./category-pages/pulao/pulao";
import RiceJunction from "./category-pages/rice-junction/rice-junction";
import BiryaniSingle from "./category-pages/biryani-single/biryani-single";
import BiryaniFamily from "./category-pages/biryani-family/biryani-family";
import FillYourThirst from "./category-pages/fill-your-thirst/fill-your-thirst";
import SweetCravings from "./category-pages/sweet-cravings/sweet-cravings";
import Pastries from "./category-pages/pastries/pastries";
import SpecialPastryFlavors from "./category-pages/spl-pastry-flavors/spl-pastry-flavors";
import FusionDesserts from "./category-pages/fusion-desserts/fusion-desserts";

/* Importing Logo */
import Logo from "../../assets/img/logo-new.svg";

/* React Bootstrap */
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

/* React Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.min.css";

/* Supabase UI */
import { Tabs } from "@supabase/ui";

const CategoryMenu = () => {
	return (
		<div>
			<Helmet>
            	<title>DesiChowrastha | Category Menu</title>
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
			<div className="home">
				<Tabs className="cat-tabs" size="large" block scrollable>
					<Tabs.Panel id="one" label="Snack Box">
						<SnackBox />
					</Tabs.Panel>
					<Tabs.Panel id="two" label="Juices">
						<Juices />
					</Tabs.Panel>
					<Tabs.Panel id="three" label="Appetizers Veg">
						<AppetizersVeg />
					</Tabs.Panel>
					<Tabs.Panel id="four" label="Appetizers Non Veg">
						<AppetizersNonVeg />
					</Tabs.Panel>
					<Tabs.Panel id="five" label="Tandoor">
						<Tandoor />
					</Tabs.Panel>
					<Tabs.Panel id="six" label="Sides">
						<Sides />
					</Tabs.Panel>
					<Tabs.Panel id="seven" label="Tiffins">
						<Tiffins />
					</Tabs.Panel>
					<Tabs.Panel id="eight" label="Chaat Section">
						<ChaatSection />
					</Tabs.Panel>
					<Tabs.Panel id="nine" label="Street Style">
						<StreetStyle />
					</Tabs.Panel>
					<Tabs.Panel id="ten" label="Veg Gravies">
						<VegGravies />
					</Tabs.Panel>
					<Tabs.Panel id="eleven" label="Non Veg Gravies">
						<NonVegGravies />
					</Tabs.Panel>
					<Tabs.Panel id="twelve" label="Indian Wok">
						Indian Wok
					</Tabs.Panel>
					<Tabs.Panel id="thirteen" label="Breads">
						<Breads />
					</Tabs.Panel>
					<Tabs.Panel id="fourteen" label="Pulao">
						<Pulao />
					</Tabs.Panel>
					<Tabs.Panel id="fifteen" label="Rice Junction">
						<RiceJunction />
					</Tabs.Panel>
					<Tabs.Panel id="sixteen" label="Biryani Single">
						<BiryaniSingle />
					</Tabs.Panel>
					<Tabs.Panel id="seventeen" label="Biryani Family">
						<BiryaniFamily />
					</Tabs.Panel>
					<Tabs.Panel id="eighteen" label="Fill U'r Thirst">
						<FillYourThirst />
					</Tabs.Panel>
					<Tabs.Panel id="nineteen" label="Sweet Cravings">
						<SweetCravings />
					</Tabs.Panel>
					<Tabs.Panel id="twenty" label="Pastries">
						<Pastries />
					</Tabs.Panel>
					<Tabs.Panel id="twentyone" label="Spl. Pastry Flavors">
						<SpecialPastryFlavors />
					</Tabs.Panel>
					<Tabs.Panel id="twentytwo" label="Fusion Desserts">
						<FusionDesserts />
					</Tabs.Panel>
				</Tabs>
			</div>
		</div>
	);
};

export default CategoryMenu;
