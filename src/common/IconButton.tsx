import React from "react";
import styled from "@emotion/styled";
import { ButtonBase, ButtonBaseProps } from "src/common/ButtonBase";

interface IconButtonProps extends ButtonBaseProps {}

const StyledIconButton = styled(ButtonBase)({
	background: "transparent"
});

export function IconButton({ children, className }: IconButtonProps) {
	return <StyledIconButton className={className}>{children}</StyledIconButton>;
}
