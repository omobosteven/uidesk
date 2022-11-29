import React from "react";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { ButtonBase, ButtonBaseProps } from "src/common/ButtonBase";
import { pxToRem } from "src/utilities/pxToRem";

interface StyledButtonProps {
	color?: "primary" | "secondary";
}
interface ButtonProps extends ButtonBaseProps, StyledButtonProps {}

const StyledButton = styled(ButtonBase, {
	shouldForwardProp: (propName) => isPropValid(propName) && propName !== "color"
})<StyledButtonProps>((props) => ({
	borderRadius: 50,
	background: "#494949",
	color: "#FFFFFF",
	fontSize: pxToRem(16),
	padding: "0.625em 1.635em",
	fontWeight: 300,

	...(props.color === "primary" && {
		background: "linear-gradient(180deg, #64BB47 0%, #2C9553 100%)",
		padding: "0.845em 1.855em",
		fontSize: pxToRem(18)
	}),

	"@media screen and (min-width: 1024px)": {
		padding: "0.875em 1.875em",
		...(props.color === "primary" && {
			fontSize: pxToRem(20)
		})
	}
}));

export const Button = ({
	children,
	className,
	color = "secondary"
}: ButtonProps) => {
	return (
		<StyledButton className={className} color={color}>
			{children}
		</StyledButton>
	);
};
