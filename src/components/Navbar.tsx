import React from "react";
import { Button } from "src/common/Button";
import { IconButton } from "src/common/IconButton";
import { StyledNav } from "src/components/Navbar.styles";

import { ReactComponent as SearchIcon } from "src/assets/search.svg";
import { ReactComponent as CartIcon } from "src/assets/cart.svg";

export function Navbar() {
	return (
		<StyledNav>
			<div className="wrapper">
				<div className="title">
					<span>UI.desk</span>
				</div>

				<div className="action">
					<div className="action-icon">
						<IconButton>
							<SearchIcon />
						</IconButton>
						<IconButton>
							<CartIcon />
						</IconButton>
					</div>
					<Button className="btn-order">Order Now</Button>
				</div>

				<ul className="links">
					<li className="link">
						<a className="link-item active" href="http://#">
							Home
						</a>
					</li>
					<li className="link">
						<a className="link-item" href="http://#">
							About
						</a>
					</li>
					<li className="link">
						<a className="link-item" href="http://#">
							Contact
						</a>
					</li>
					<li className="link">
						<a className="link-item" href="http://#">
							Testimonials
						</a>
					</li>
				</ul>
			</div>
		</StyledNav>
	);
}
