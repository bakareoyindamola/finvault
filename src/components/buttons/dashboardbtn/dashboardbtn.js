import styled from 'styled-components/macro';

export const Button = styled.button`
  width: 81px;
  height: 32px;
  background: ${({ type }) => type === "primary" ? "#2E71FF" : "#D3E7FF"};;
  box-shadow: 0 2px 10px rgba(46, 113, 255, 0.14);
  border-radius: 8px;
  color: ${({ type }) => type === "primary" ? "#FFFFFF" : "#2E71FF"};
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
	text-align: center;
`;
