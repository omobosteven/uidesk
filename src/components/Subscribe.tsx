import React from "react";
import styled from "@emotion/styled";
import { pxToRem } from "src/utilities/pxToRem";
import { Button } from "src/common/Button";

const Container = styled("section")({});

const Header = styled("header")({
	marginBottom: 60,
	textAlign: "center",

	"& .title": {
		fontSize: pxToRem(32),
		fontWeight: 500,
		marginBottom: 15,
		marginTop: 120
	},

	"& .subtitle": {
		fontSize: pxToRem(20),
		fontWeight: 300
	},

	"@media screen and (min-width: 1024px)": {
		"& .title": {
			fontSize: pxToRem(36)
		},

		"& .subtitle": {
			fontSize: pxToRem(24)
		}
	}
});

const InputWrapper = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	rowGap: 15,
	columnGap: 15,

	"& .input": {
		borderRadius: 50,
		border: "1.5px solid #F5F5F5",
		padding: "0.875em 1.875em",
		maxWidth: 330,
		width: "100%"
	},

	"& .btn": {
		padding: "0.775em 1.875em",
		width: "100%",
		maxWidth: 330
	},

	"@media screen and (min-width: 1024px)": {
		flexDirection: "row",
		justifyContent: "center",

		"& .input, & .btn": {
			width: "unset",
			maxWidth: "unset"
		}
	}
});

export const Subscribe = () => {
	return (
		<Container>
			<Header>
				<h2 className="title">Subscribe to the Newsletter</h2>
				<h3 className="subtitle">
					Enter your email below to get our daily offers and news
				</h3>
			</Header>
			<InputWrapper>
				<input type="text" placeholder="Enter your email." className="input" />
				<Button color="primary" className="btn">
					Get Started
				</Button>
			</InputWrapper>
		</Container>
	);
};
