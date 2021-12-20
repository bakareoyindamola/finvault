import styled from 'styled-components/macro';

export const Button = styled.button`
	position: relative;
  background: #2E71FF;
  box-shadow: 0 2px 21px rgba(46, 113, 255, 0.41);
  border-radius: 48px;
	display: flex;
	align-items: center;
	padding: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #FFFFFF;
	
	svg {
		margin-right: 8px;
	}
`;

export const NotificationWrapper = styled.div`
	position: absolute;
	width: 24px;
	height: 24px;
  background: #FF1B44;
	border-radius: 100%;
	top: -5px;
	right: -2px;
`;

export const NotificationText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #FFFFFF;
`;
