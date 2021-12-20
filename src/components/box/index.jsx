import React from 'react';
import { Wrapper, InnerWrapper, SmallBox, TextWrapper, HeaderText, SubText, ButtonWrapper } from "./box";
import { DashboardButton } from "../buttons";
import PropTypes from 'prop-types';

function Box({ icon, header, price }) {
	return (
		<Wrapper>
			<InnerWrapper>
				<SmallBox>
					{icon}
				</SmallBox>
				<TextWrapper>
					<SubText>{header}</SubText>
					<HeaderText>{price}</HeaderText>
				</TextWrapper>
			</InnerWrapper>
			<ButtonWrapper>
				<DashboardButton  type='primary'  name='Send'/>
				<DashboardButton  type='secondary' name='Convert' />
			</ButtonWrapper>
		</Wrapper>
	)
}

export default Box;

Box.propTypes = {
	icon: PropTypes.node.isRequired,
	header: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
}

