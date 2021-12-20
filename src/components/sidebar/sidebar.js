import styled from 'styled-components/macro';
import { Link, NavLink } from 'react-router-dom';

export const Wrapper = styled.aside`
	position: fixed;
  border-right: 1px solid #DEEBFE;
  box-shadow: 0 4px 30px rgba(46, 113, 255, 0.06);
	max-width: 289px;
	width: 100%;
  background: #FFFFFF;
	height: 100vh;
	padding: 33px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
	
	@media screen and (max-width: 965px) {
		display: none;
	}
`;

export const InnerWrapper = styled.section`
	width: 100%;
`;

export const LogoLink = styled(Link)`
	display: inline-block;
	padding: 12px 0;
`;

export const Line = styled.div`
  border: 1px solid #D3E7FF;
	margin: 20px 0;
`;

export const HomeSection = styled.section`
  overflow: hidden;
`;

export const HeaderWrapper = styled.button`
	display: flex;
	align-items: center;
	padding: 12px 0;
	width: 100%;
	background-color: #FFF;
  z-index: 1;
  position: relative;
`;

export const HeaderInnerWrapper = styled.div`
  display: flex;
  align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-left: 24px;
	
	&.active {
		svg {
      transition: all 0.5s ease-in-out;
			transform: rotate(180deg);
		}
	}

  &.inactive {
    svg {
      transition: all 0.5s ease-in-out;
      transform: rotate(0deg);
    }
  }
`;

export const HeaderText = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #07172F;
`;

export const SubContentWrapper = styled.div`
	padding-left: 8px;
	margin-top: 13px;
  transition: all 0.5s ease-in-out;
	
	&.active {
		transform: translateY(0);
		opacity: 1;
    pointer-events: all;
	}
	
	&.inactive {
    transform: translateY(-200px);
		opacity: 0;
		pointer-events: none;
	}
`;

export const SubContentInnerWrapper = styled.div`
  border-left: 1px solid #DEEBFE;
  padding-left: 17px;
`;

export const SidebarLink = styled(NavLink)`
	display: block;
	margin-bottom: 13px;
	padding: 12px 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  border-radius: 10px;
  color: #718CAF;
	transition: all 0.3s ease-in-out;
	
	&.active, 
	&:hover {
    color: rgba(46, 113, 255, 0.99);
    background: #F0F5FF;
	}
	
	&:last-child {
    margin-bottom: 0;
	}
`;

export const FooterWrapper = styled.footer`
	position: relative;
`;
