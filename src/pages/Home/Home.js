import styled from 'styled-components/macro';

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
`;

export const InnerWrapper = styled.div`
	padding: 48px 50px 48px 339px;
  width: 100%;

  @media screen and (max-width: 965px) {
    padding: 48px 50px;
  }
`;

export const HeaderWrapper = styled.div`
	padding-bottom: 32px;
	margin-bottom: 32px;
  border-bottom: 1px solid #DEEBFE;
`;

export const SubText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #718CAF;
`;

export const HeaderText = styled.h4`
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  color: #07172F;
`;

