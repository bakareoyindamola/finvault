import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #DEEBFE;
  box-shadow: 0 4px 26px rgba(20, 60, 95, 0.04);
  border-radius: 20px;
	padding: 32px;
`;

export const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
  margin-bottom: 24px;
`;

export const SmallBox = styled.div`
	width: 56px;
	height: 56px;
  background: rgba(27, 243, 164, 0.2);
  border-radius: 10px;
	margin-right: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TextWrapper = styled.div``;

export const SubText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #718CAF;
	margin-bottom: 6px;
`;

export const HeaderText = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #07172F;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	gap: 10px;
`;
