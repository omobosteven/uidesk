import React from "react";
import styled from "@emotion/styled";
import greenSaladImg from "src/assets/greenSalad.png";
import beefSaladImg from "src/assets/beefSalad.png";
import nutSaladImg from "src/assets/nutSalad.png";
import { Button } from "src/common/Button";
import { pxToRem } from "../utilities/pxToRem";

const Container = styled("section")({
	marginBottom: 120,
	textAlign: "center",
	"& .cta-btn": {
		padding: "0.645em 2.5em"
	}
});

const Header = styled("header")({
	marginBottom: 62,

	"& .title": {
		fontSize: pxToRem(44),
		fontWeight: 500,
		marginBottom: 15
	},

	"& .subtitle": {
		fontSize: pxToRem(18),
		fontWeight: 300
	},

	"@media screen and (min-width: 1024px)": {
		"& .title": {
			fontSize: pxToRem(54)
		},

		"& .subtitle": {
			fontSize: pxToRem(24)
		}
	}
});

const Cards = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginBottom: 60,
	rowGap: 50,
	columnGap: 50,

	"@media screen and (min-width: 1024px)": {
		flexDirection: "row",
		alignItems: "stretch",
		justifyContent: "space-between"
	}
});

const Card = styled("div")({
	display: "flex",
	flexDirection: "column",
	rowGap: 27,
	alignItems: "center",
	maxWidth: 356,
	padding: "50px 27px",
	borderRadius: 20,

	"&.outline": {
		border: "1px solid #EBEBEB"
	},

	"&.shadow": {
		boxShadow: "-15px -50px 81px #FFFFFF, 10px 20px 70px rgba(71, 68, 68, 0.08)"
	},

	"& .content": {
		textAlign: "center",

		"& .title": {
			fontSize: pxToRem(30),
			fontWeight: 400,
			marginBottom: 20
		},

		"& .desc": {
			fontSize: pxToRem(18),
			fontWeight: 300
		}
	}
});
export const Dishes = () => {
	return (
		<Container>
			<Header>
				<h2 className="title">Special Dishes for you</h2>
				<h3 className="subtitle">
					Made with premium & 100% Organic ingredients
				</h3>
			</Header>
			<Cards>
				<Card className="outline">
					<div className="image">
						<img src={greenSaladImg} alt="green salad" className="img" />
					</div>

					<div className="content">
						<h3 className="title">Green Salad</h3>
						<p className="desc">
							A salad combined with a delicious cut of bacon and mixed with
							tasty and fresh sesome oil.
						</p>
					</div>
				</Card>

				<Card className="shadow">
					<div className="image">
						<img src={beefSaladImg} alt="beef salad" className="img" />
					</div>

					<div className="content">
						<h3 className="title">Beef Salad</h3>
						<p className="desc">
							A salad combined with a delicious cut of bacon and mixed with
							tasty and fresh sesome oil.
						</p>
					</div>
				</Card>

				<Card className="outline">
					<div className="image">
						<img src={nutSaladImg} alt="nut salad" className="img" />
					</div>

					<div className="content">
						<h3 className="title">Nut Salad</h3>
						<p className="desc">
							A salad combined with a delicious cut of bacon and mixed with
							tasty and fresh sesome oil.
						</p>
					</div>
				</Card>
			</Cards>

			<Button color="primary" className="cta-btn">
				View All
			</Button>
		</Container>
	);
};
