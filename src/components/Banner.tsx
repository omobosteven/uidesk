import styled from "@emotion/styled";
import React from "react";
import { Button } from "src/common/Button";
import { pxToRem } from "src/utilities/pxToRem";
import heroImg from "src/assets/header-image.png";
import bgElement from "src/assets/bg-elements.png";

const StyledBanner = styled.section({
	marginTop: 24,

	"& .text-wrapper": {
		width: "100%",
		maxWidth: 596,
		paddingBottom: 20,

		"& .title": {
			fontSize: pxToRem(74),
			fontWeight: 500,
			marginTop: 0,
			marginBottom: 30,
			color: "#181D19",

			"& span": {
				color: "#5FB848"
			}
		},

		"& .text": {
			color: "#181D19",
			fontSize: pxToRem(24),
			fontWeight: 300,
			marginBottom: 50
		},

		"@media screen and (min-width: 1024px)": {
			paddingTop: "10%"
		}
	},

	"& .img-wrapper": {
		backgroundImage: `url(${bgElement})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		backgroundSize: "95%",
		maxWidth: 486,
		margin: "auto",

		"& .img": {
			width: "100%",
			height: "auto"
		},

		"@media screen and (min-width: 1024px)": {
			maxWidth: 786
		}
	},

	"@media screen and (min-width: 1024px)": {
		display: "flex"
	}
});

export const Banner = () => {
	return (
		<StyledBanner>
			<div className="text-wrapper">
				<h1 className="title">
					Just <span>Eat healthy</span> food to live a healthier life
				</h1>
				<p className="text">
					Enjoy a healthy life by eating healthy foods that have extraordinary
					flavors that make your life healthier for today and in the future
				</p>
				<Button className="btn" color="primary">
					Order Now
				</Button>
			</div>
			<div className="img-wrapper">
				<img className="img" src={heroImg} alt="hero" />
			</div>
		</StyledBanner>
	);
};
