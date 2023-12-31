import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Navbar() {
	return (
		<div className="navbar-wrapper">
			<div className="nav-logo-link">
				<img
					className="logo-img"
					src="/images/Logo.png"
					alt="/images/Logo.png"
				/>
				<div>
					<Link className="nav-link" to="/find-jobs">
						Find Jobs
					</Link>
					<Link className="nav-link">Browse Companies</Link>
				</div>
			</div>
			<div className="auth">
				<Button className="btn-link" type="link">
					Login
				</Button>
				<Button type="primary">Sign Up</Button>
			</div>
		</div>
	);
}
