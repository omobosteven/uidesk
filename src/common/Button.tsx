import React from "react";
import styled from "@emotion/styled";
import { ButtonBase, ButtonBaseProps } from "src/common/ButtonBase";
import { pxToRem } from "src/utilities/pxToRem";

interface ButtonProps extends ButtonBaseProps {}

const StyledButton = styled(ButtonBase)({
	borderRadius: 50,
	background: "#494949",
	color: "#FFFFFF",
	fontSize: pxToRem(16),
	padding: "0.625em 1.635em",

	"@media screen and (min-width: 1024px)": {
		padding: "0.875em 1.875em"
	}
});

export function Button({ children, className }: ButtonProps) {
	return <StyledButton className={className}>{children}</StyledButton>;
}
