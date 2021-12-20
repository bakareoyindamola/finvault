import React, { useState } from 'react';
import {
	Wrapper,
	InnerWrapper,
	LogoLink,
	Line,
	HomeSection,
	HeaderWrapper,
	HeaderText,
	HeaderInnerWrapper,
	SubContentWrapper,
	SubContentInnerWrapper,
	SidebarLink,
	FooterWrapper
} from "./sidebar";
import {ArrowSVG, HomeSVG, LogoSVG} from "../../assets";
import {GetStartedButton} from "../buttons";
import GetStartedPopup from "../popup/getStarted";

function Sidebar() {
	const [openContent, setOpenContent] = useState(true);

	return (
		<Wrapper>
			<InnerWrapper>
				<LogoLink to="/">
					<LogoSVG />
				</LogoLink>
				<Line />
				<HomeSection>
					<HeaderWrapper
						onClick={() => setOpenContent((value) => !value)}
					>
						<HomeSVG />
						<HeaderInnerWrapper className={openContent ? 'active' : 'inactive'}>
							<HeaderText>Home</HeaderText>
							<ArrowSVG  fill={"#07172F"}/>
						</HeaderInnerWrapper>
					</HeaderWrapper>
					<SubContentWrapper className={openContent ? 'active' : 'inactive'}>
						<SubContentInnerWrapper>
							<SidebarLink to="/">Transactions</SidebarLink>
							<SidebarLink to="/deposit">Deposit into Finvault</SidebarLink>
							<SidebarLink to="/withdraw">Withdraw Funds</SidebarLink>
						</SubContentInnerWrapper>
					</SubContentWrapper>
				</HomeSection>
			</InnerWrapper>
			<FooterWrapper>
				<GetStartedPopup />
				<GetStartedButton />
			</FooterWrapper>
		</Wrapper>
	)
}

export default Sidebar;
