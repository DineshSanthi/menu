import { Link } from "react-router-dom";

/* CSS */
import "./index.css";

/* React Helmet */
import { Helmet } from 'react-helmet';

/* Ant Design */
import { Breadcrumb, Card } from "antd";

/* React Bootstrap */
import Button from "react-bootstrap/Button";

/* Importing Logo */
import Logo from "../../assets/img/logo-new.svg";

const { Meta } = Card;

const TvMenu = () => (
    <div>
        <Helmet>
            <title>DesiChowrastha | TV Menu</title>
        </Helmet>
        <Breadcrumb style={{ margin: 16 }}>
            <Breadcrumb.Item href="/">
                <span>Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <span style={{ color: "#000" }}>TV Menu</span>
            </Breadcrumb.Item>
        </Breadcrumb>
        <div className="tv-home-page">
            <div>
                <Card
                    style={{
                        width: 500,
                    }}
                    actions={[
                        <Link to="/tv-menu/menu1">
                            <Button variant="outline-success">Page 1</Button>
                        </Link>,
                        <Link to="/tv-menu/menu2">
                            <Button variant="outline-success">Page 2</Button>
                        </Link>,
                        <Link to="/tv-menu/menu3">
                            <Button variant="outline-success">Page 3</Button>
                        </Link>,
                        <Link to="/tv-menu/menu4">
                            <Button variant="outline-success">Page 4</Button>
                        </Link>
                    ]}>
                    <Meta
                        className="logo"
                        title={<img src={Logo} alt={"logo"} />}
                        description="Bring back the culture of “Chowrastha” and Indianness through Food, Fresh Groceries, Halal Meat and Vibrant Environment."
                    />
                </Card>
            </div>
        </div>
    </div>
);
export default TvMenu;