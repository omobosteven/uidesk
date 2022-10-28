/* eslint-disable prettier/prettier */
import styled from "@emotion/styled";
import { pxToRem } from "src/utilities/pxToRem";

export const StyledNav = styled.nav({
	paddingTop: 10,

	"& .wrapper": {
		display: "flex",
		flexWrap: "wrap",
		rowGap: 12,
		justifyContent: "space-between"
	},

	"& .title": {
		fontSize: pxToRem(22),
		display: "flex",
		alignItems: "center"
	},

	"& .links": {
		listStyle: "none",
		paddingInlineStart: 0,
		margin: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flexBasis: "100%",
		padding: "8px 4px"
	},

	"& .link": {
		"&-item": {
			textDecoration: "none",
			color: "#2C3847",
			fontSize: pxToRem(18)
		},

		"&-item.active": {
			color: "#5FB848",
			fontWeight: 500
		}
	},

	"& .action": {
		display: "flex",
		alignItems: "center",
		columnGap: 16,

		"&-icon": {
			display: "flex",
			alignItems: "center",
			columnGap: 10
		}
	},

	"@media screen and (min-width: 768px)": {
		"& .wrapper": {
			justifyContent: "space-between"
		},

		"& .links": {
			maxWidth: 414,
			order: 1
		},

		"& .action": {
			order: 2
		}
	},

	"@media screen and (min-width: 1024px)": {
		"& .wrapper": {
			justifyContent: "flex-start"
		},

		"& .links": {
			marginLeft: "12%"
		},

		"& .action": {
			marginLeft: "auto"
		}
	}
});
