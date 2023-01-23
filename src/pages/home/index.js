import { Link } from "react-router-dom";

/* CSS */
import "./index.css";

/* React Helmet */
import { Helmet } from 'react-helmet';

/* Ant Design */
import { Card } from "antd";

/* React Bootstrap */
import Button from "react-bootstrap/Button";

/* Importing Logo */
import Logo from "../../assets/img/logo-new.svg";

const { Meta } = Card;
const Home = () => (
	<div className="home-page">
        <Helmet>
            <title>DesiChowrastha | Menu Home</title>
        </Helmet>
		<div>
			<Card
                style={{
					width: 500,
				}}
				actions={[
					<Link to="/menu">
						<Button variant="outline-success">Menu</Button>
					</Link>,
					<Link to="/category-menu">
						<Button variant="outline-success">Category Menu</Button>
					</Link>,
					<Link to="/tv-menu">
						<Button variant="outline-success">TV Menu</Button>
					</Link>
				]}>
				<Meta
					className="logo"
					title={<img src={Logo} alt="logo" />}
                    description="Bring back the culture of “Chowrastha” and Indianness through Food, Fresh Groceries, Halal Meat and Vibrant Environment."
				/>
			</Card>
		</div>
	</div>
);
export default Home;
