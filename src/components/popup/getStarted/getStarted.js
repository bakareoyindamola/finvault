import styled from 'styled-components/macro';

export const Wrapper = styled.div`
	position: absolute;
	top: -500px;
  background: #FFFFFF;
  border: 0.5px solid rgba(7, 23, 47, 0.1);
  box-shadow: 0 5px 83px rgba(2, 11, 30, 0.14);
  border-radius: 30px;
	width: 466px;
	overflow: hidden;
  opacity: 0;
	transform: scaleX(0);
	z-index: 99;
`;

export const HeaderWrapper = styled.div`
	padding: 24px 32px;
  background: #07172F;
	color: #FFF;
`;

export const UpperWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
  color: #FFF;
	width: 100%;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
	margin-bottom: 6px;
`;

export const HeaderSubText = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: #E2EAF4;
	
	span {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #2E71FF;
		margin-right: 12px;
	}
`;

export const ShowcaseWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 24px;
  background: rgba(255, 255, 255, 0.09);
  border-radius: 8px;
	padding: 8px 16px;
`;

export const ShowcaseText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
	margin-left: 14px;
`;

export const ProgressWrapper = styled.div`
	height: 6px;
  background: rgba(126, 152, 206, 0.32);
`;

export const Progress = styled.div`
	width: 20%;
	height: 100%;
  background: #1BF3A4;
`;

export const OptionsWrapper = styled.div`
	padding: 11px 20px;
	width: 100%;
`;

export const OptionWrapper = styled.button`
	display: flex;
	padding: 13px 12px;
	width: 100%;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
	
	&.inactive {
		cursor: not-allowed;
		
		h4 {
			color: #1BF3A4;
			text-decoration: line-through;
		}
	}
	
	&.active {
    &:hover {
      background: rgba(46, 113, 255, 0.07);

      h4 {
        transition: color 0.3s ease-in-out;
        color: #2E71FF;
      }

      svg {
        transition: all 0.3s ease-in-out;
        stroke: #2E71FF;

        path,
        ellipse {
          stroke: #2E71FF;
          fill: #2E71FF;
        }
	      
        rect,
        line {
          stroke: #2E71FF;
        }
      }
    }
	}
`;

export const OptionTextWrapper = styled.div`
	text-align: left;
	margin-left: 16px;
`;

export const OptionHeaderText = styled.h4`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #07172F;
	margin-bottom: 8px;
`;

export const OptionSubText = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: #718CAF;
`;
