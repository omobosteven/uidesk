import React from "react";
import styled from "@emotion/styled";
import { pxToRem } from "src/utilities/pxToRem";
import { ReactComponent as QuoteIcon } from "src/assets/quoteIcon.svg";
import { ReactComponent as LeatArrowIcon } from "src/assets/leftArrow.svg";
import { ReactComponent as RightArrowIcon } from "src/assets/rightArrow.svg";
import Avatar1 from "src/assets/avatar1.png";
import Avatar2 from "src/assets/avatar2.png";

const Container = styled("section")({
	textAlign: "center",
	background: "#FCFCFC",
	paddingTop: 70,
	paddingBottom: 70
});

const Title = styled("h2")({
	fontSize: pxToRem(44),
	fontWeight: 500,
	marginBottom: 47,

	"@media screen and (min-width: 1024px)": {
		fontSize: pxToRem(54)
	}
});

const Cards = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	rowGap: 25,
	columnGap: 25,
	marginBottom: 50,

	"@media screen and (min-width: 1024px)": {
		flexDirection: "row",
		alignItems: "stretch",
		justifyContent: "space-evenly"
	}
});

const Card = styled("div")({
	maxWidth: 514,
	padding: "40px 25px",
	borderRadius: 8,
	border: "2px solid #FFFFFF",
	background: "#FFFFFF",

	"& .header": {
		display: "flex",
		alignItems: "center",
		marginBottom: 32,
		columnGap: 30,

		"& .icon": {
			marginLeft: "auto"
		}
	},

	"& .header .name": {
		"&-title": {
			fontSize: pxToRem(20),
			fontWeight: 400
		},
		"&-subtitle": {
			fontSize: pxToRem(14),
			fontWeight: 400
		}
	},

	"& .text": {
		fontSize: pxToRem(18),
		fontWeight: 300,
		textAlign: "justify"
	},

	"&.shadow": {
		boxShadow: "3px 15px 35px rgba(120, 125, 173, 0.06)"
	}
});

const Arrows = styled("div")({
	display: "flex",
	columnGap: 18,
	justifyContent: "center"
});

export const Clients = () => {
	return (
		<Container>
			<Title>Happy Clients Says</Title>
			<Cards>
				<Card className="shadow">
					<header className="header">
						<img src={Avatar1} alt="avatar 1" className="avatar" />
						<div className="name">
							<h3 className="name-title">KHALIL NAZIR</h3>
							<h4 className="name-subtitle">CEO of UI.Desk</h4>
						</div>
						<QuoteIcon className="icon" />
					</header>
					<p className="text">
						Thirty for remove plenty regard you summer though. He preference
						Partiality on or continuing in particular principles as. Do
						believing oh disposing to supported allowance we.
					</p>
				</Card>

				<Card>
					<header className="header">
						<img src={Avatar2} alt="avatar 2" className="avatar" />
						<div className="name">
							<h3 className="name-title">ZEESHAN ANWER</h3>
							<h4 className="name-subtitle">CEO of UI Box</h4>
						</div>
						<QuoteIcon className="icon" />
					</header>
					<p className="text">
						Really boy law county she unable her sister. Feet you off its like
						like six. Among sex are leave law built now. In built table in an
						rapid blush. Merits behind on afraid or warmly.
					</p>
				</Card>
			</Cards>
			<Arrows>
				<LeatArrowIcon />
				<RightArrowIcon />
			</Arrows>
		</Container>
	);
};
