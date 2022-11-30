import React from "react";
import styled from "@emotion/styled";
import { pxToRem } from "../utilities/pxToRem";

const Container = styled("section")({
	marginTop: 150,
	background: "#FCFCFC",
	paddingTop: 80
});

const FooterContent = styled("div")({
	"@media screen and (min-width: 1024px)": {
		display: "flex",
		columnGap: 150,

		"& .sectionGroup": {
			marginTop: "unset",
			flexGrow: 1
		}
	}
});

const SectionGroup = styled("div")({
	marginTop: 47,
	display: "flex",
	flexWrap: "wrap",
	rowGap: 27,

	"& .linkGroup": {
		flex: "1 0 50%"
	},

	"@media screen and (min-width: 768px)": {
		justifyContent: "space-between",

		"& .linkGroup": {
			flex: "unset"
		}
	}
});

const Section = styled("div")({
	"& .title": {
		fontSize: pxToRem(26),
		fontWeight: 400,
		marginBottom: 20
	},

	"&.heading": {
		maxWidth: 262,
		flexGrow: 1,

		"& .title": {
			marginBottom: 34
		}
	},

	"& .list": {
		listStyle: "none",
		padding: 0,

		"&-item": {
			marginBottom: 12
		}
	},

	"& .text": {
		fontSize: pxToRem(16)
	}
});

const FooterBar = styled("div")({
	background: "linear-gradient(180deg, #64BB47 0%, #2C9553 100%)",
	marginTop: 50,
	paddingTop: 20,
	paddingBottom: 20,
	textAlign: "center",
	color: "#FFFFFF",
	fontSize: pxToRem(16),
	fontWeight: 300,
	flex: "1 0 100%"
});

export const Footer = () => {
	return (
		<Container>
			<FooterContent>
				<Section className="heading">
					<h3 className="title">UI.desk</h3>
					<p className="text">
						On formed merits hunted unable merely by mr whence or.{" "}
					</p>
				</Section>
				<SectionGroup className="sectionGroup">
					<Section className="linkGroup">
						<h3 className="title">Home</h3>
						<ul className="list">
							<li className="text list-item">Company</li>
							<li className="text list-item">News</li>
							<li className="text list-item">Team</li>
						</ul>
					</Section>
					<Section className="linkGroup">
						<h3 className="title">About</h3>
						<ul className="list">
							<li className="text list-item">History</li>
							<li className="text list-item">Service</li>
							<li className="text list-item">Pricing</li>
						</ul>
					</Section>
					<Section className="linkGroup">
						<h3 className="title">Partner</h3>
						<ul className="list">
							<li className="text list-item">Business</li>
							<li className="text list-item">Plan</li>
							<li className="text list-item">Marketing</li>
						</ul>
					</Section>
					<Section className="linkGroup">
						<h3 className="title">Contact</h3>
						<ul className="list">
							<li className="text list-item">UI.desk</li>
							<li className="text list-item">(465)954-8487</li>
							<li className="text list-item">Lahore, Pakistan</li>
						</ul>
					</Section>
				</SectionGroup>
			</FooterContent>
			<FooterBar>
				&copy; Copyright 2020 by ui.desk. All right reserved.
			</FooterBar>
		</Container>
	);
};
