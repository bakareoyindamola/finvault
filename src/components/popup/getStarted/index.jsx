import React from 'react';
import {
	Wrapper,
	HeaderWrapper,
	UpperWrapper,
	HeaderSubText,
	ShowcaseWrapper,
	ShowcaseText, ProgressWrapper, Progress, OptionsWrapper, OptionWrapper, OptionTextWrapper, OptionHeaderText, OptionSubText
} from './getStarted';
import {ArrowSVG} from "../../../assets";
import NFTIcon from '../../../assets/NFTIcon.png';
import {popupData} from "../../../data/popupData";

function GetStartedPopup() {
	return (
		<Wrapper className="getStarted_popup_animation">
			<HeaderWrapper>
				<UpperWrapper>
					Your quick start guide
					<ArrowSVG  fill="#2E71FF"/>
				</UpperWrapper>
				<HeaderSubText>
					<span>Level 1</span>
					50% completed
				</HeaderSubText>
				<ShowcaseWrapper>
					<img src={NFTIcon} alt="nft icon" />
					<ShowcaseText>Complete 2 levels and receive your free NFT </ShowcaseText>
				</ShowcaseWrapper>
			</HeaderWrapper>
			<ProgressWrapper>
				<Progress />
			</ProgressWrapper>
			<OptionsWrapper>
					{popupData.map((item) => (
						<OptionWrapper
							key={item.id}
							className={
								item.completed
									? 'inactive getStarted_popup_content_animation'
									: 'active getStarted_popup_content_animation'
							}
						>
							{item.icon}
							<OptionTextWrapper>
								<OptionHeaderText>{item.name}</OptionHeaderText>
								<OptionSubText>{item.paragraph}</OptionSubText>
							</OptionTextWrapper>
						</OptionWrapper>
					))}
			</OptionsWrapper>
		</Wrapper>
	)
}

export default GetStartedPopup;
