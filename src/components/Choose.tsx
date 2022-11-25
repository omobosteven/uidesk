import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as OrderIcon } from "src/assets/orderIcon.svg";
import { ReactComponent as LocationIcon } from "src/assets/locationIcon.svg";
import { ReactComponent as LeafIcon } from "src/assets/leafIcon.svg";
import { pxToRem } from "src/utilities/pxToRem";

const Container = styled("section")({
	textAlign: "center",
	marginTop: 60
});

const Header = styled("header")({
	marginBottom: 62,

	"& .title": {
		fontSize: pxToRem(44),
		fontWeight: 500,
		marginBottom: 15
	},

	"& .subTitle": {
		fontSize: pxToRem(18),
		fontWeight: 300
	},

	"@media screen and (min-width: 1024px)": {
		"& .title": {
			fontSize: pxToRem(54)
		},

		"& .subTitle": {
			fontSize: pxToRem(24)
		}
	}
});

const Group = styled("div")({
	display: "flex",
	flexDirection: "column",
	rowGap: 60,
	marginBottom: 60,

	"&.icon-group": {
		"@media screen and (min-width: 912px)": {
			flexDirection: "row",
			justifyContent: "center",
			columnGap: "10%"
		}
	},

	"&.textItem-group": {
		"@media screen and (min-width: 768px)": {
			flexDirection: "row",
			justifyContent: "center",
			columnGap: 150
		}
	}
});

const IconItem = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-between",

	"& .icon": {
		width: 100,
		height: "auto",
		flexGrow: 1,
		marginBottom: 36
	},

	"& .title": {
		fontSize: pxToRem(24),
		fontWeight: 500,
		marginBottom: 18
	},

	"& .description": {
		fontSize: pxToRem(16),
		fontWeight: 300
	},

	"@media screen and (min-width: 912px)": {
		maxWidth: 270
	},

	"@media screen and (min-width: 1024px)": {
		"& .title": {
			fontSize: pxToRem(28)
		},

		"& .description": {
			fontSize: pxToRem(17)
		}
	}
});

const TextItem = styled("div")({
	"& .title": {
		fontSize: 44,
		marginBottom: 20
	},

	"& .description": {
		fontSize: pxToRem(16),
		fontWeight: 300
	},

	"@media screen and (min-width: 1024px)": {
		"& .description": {
			fontSize: pxToRem(20)
		}
	}
});

export const Choose = () => {
	return (
		<Container>
			<Header>
				<h2 className="title">Why Choose US?</h2>
				<h3 className="subTitle">
					Organic food is grown without the use of synthetic chemicals
				</h3>
			</Header>
			<Group className="icon-group">
				<IconItem>
					<OrderIcon className="icon" />
					<h3 className="title">Easy to order</h3>
					<p className="description">
						foods include fresh produce, meats as well as processed
					</p>
				</IconItem>
				<IconItem>
					<LocationIcon className="icon" />
					<h3 className="title">Live Order</h3>
					<p className="description">
						Place your online Order easily and get the food instantly
					</p>
				</IconItem>
				<IconItem>
					<LeafIcon className="icon" />
					<h3 className="title">100% Organic</h3>
					<p className="description">
						Organic food is grown without the use of synthetic chemicals
					</p>
				</IconItem>
			</Group>
			<Group className="textItem-group">
				<TextItem>
					<h3 className="title">40+</h3>
					<p className="description">Food Partners</p>
				</TextItem>
				<TextItem>
					<h3 className="title">459+</h3>
					<p className="description">Trusted Clients</p>
				</TextItem>
				<TextItem>
					<h3 className="title">12k+</h3>
					<p className="description">Order Online</p>
				</TextItem>
			</Group>
		</Container>
	);
};
