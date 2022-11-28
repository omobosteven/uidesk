import React from "react";
import styled from "@emotion/styled";
import { Button } from "src/common/Button";
import masonryImage from "src/assets/masonryImage.png";
import vegeImg from "src/assets/vegeBowl.png";
import chefImg from "src/assets/chef.png";
import { pxToRem } from "src/utilities/pxToRem";
import { ReactComponent as CheckIcon } from "src/assets/checkIcon.svg";

const Container = styled("section")({
	marginTop: 120
});

const Section = styled("div")({
	display: "flex",
	flexDirection: "column",
	rowGap: 54,
	marginBottom: 120,

	"@media screen and (min-width: 1024px)": {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		columnGap: 95,

		"& .order-1": {
			order: 1
		}
	}
});

const Content = styled("div")({
	"& .title": {
		fontSize: pxToRem(44),
		fontWeight: 500,
		marginBottom: 30
	},

	"& .text": {
		fontSize: pxToRem(18),
		fontWeight: 300,
		marginBottom: 60
	},

	"& .list": {
		listStyle: "none",
		padding: 0,

		"&-item": {
			display: "flex",
			alignItems: "center",
			marginBottom: 20,
			fontWeight: 300,
			fontSize: pxToRem(20)
		},

		"&-icon": {
			marginRight: 17
		}
	},

	"@media screen and (min-width: 1024px)": {
		maxWidth: 500,

		"& .title": {
			fontSize: pxToRem(54)
		},

		"& .text": {
			fontSize: pxToRem(22)
		}
	}
});

const Image = styled("div")({
	alignSelf: "center",

	"& .img": {
		maxWidth: "100%",
		height: "auto"
	}
});

export const About = () => {
	return (
		<Container>
			<Section>
				<Content>
					<h2 className="title">About US</h2>
					<p className="text">
						Organic food is grown without the use of synthetic chemicals, such
						as human-made pesticides and fertilizers, and does not contain
						genetically modified organisms (GMOs). Organic foods include fresh
						produce, meats, and dairy products as well as processed foods such
						as crackers, drinks, and frozen meals.
					</p>
					<Button color="primary" className="btn">
						Learn More
					</Button>
				</Content>
				<Image>
					<img src={masonryImage} alt="masonry dishes" className="img" />
				</Image>
			</Section>
			<Section>
				<Content className="order-1">
					<h2 className="title">Fresh Vegetables Every Day</h2>
					<p className="text">
						Healthy life as informed declared we enjoy the margaret. Joy
						horrible moreover man feelings own shy. Request norland neither
						mistake for yet. Between the for morning assured country believe.
					</p>
					<Button color="primary" className="btn">
						Learn More
					</Button>
				</Content>
				<Image>
					<img src={vegeImg} alt="vegatable bowl" className="img" />
				</Image>
			</Section>
			<Section>
				<Content>
					<h2 className="title">Cooked by the Best Chefs</h2>
					<p className="text">
						Believing neglected so so allowance existence departure in. In
						design active temper be uneasy. Thirty for remove plenty regard you
						summer though. He preference connection astonished on of ye.
					</p>
					<ul className="list">
						<li className="list-item">
							<CheckIcon className="list-icon" /> A guaranteed delicious meal
						</li>
						<li className="list-item">
							<CheckIcon className="list-icon" /> Food is guaranteed hygienic
						</li>
						<li className="list-item">
							<CheckIcon className="list-icon" /> Cooked quickly
						</li>
					</ul>
				</Content>
				<Image>
					<img src={chefImg} alt="chef" className="img" />
				</Image>
			</Section>
		</Container>
	);
};
