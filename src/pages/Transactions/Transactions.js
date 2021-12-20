import styled from 'styled-components/macro';

export const Wrapper = styled.div``;

export const HeaderWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 24px;
	margin-bottom: 32px;
	
	@media screen and (max-width: 660px) {
    grid-template-columns: 100%;
	}
`;
