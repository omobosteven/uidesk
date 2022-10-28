import React from "react";
import styled from "@emotion/styled";

export interface ButtonBaseProps {
	children: React.ReactNode;
	className?: string;
}

const StyledButtonBase = styled.button({
	border: "none",
	cursor: "pointer"
});

export function ButtonBase({ children, className }: ButtonBaseProps) {
	return (
		<StyledButtonBase className={className} type="button">
			{children}
		</StyledButtonBase>
	);
}

ButtonBase.defaultProps = {
	className: ""
};
