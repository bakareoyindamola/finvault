import React, {useState} from 'react';
import { Button, NotificationWrapper, NotificationText } from './getStarted';
import {FilledSuccessSVG} from "../../../assets";
import {closeGetStartedPopup, openGetStartedPopup} from "../../../static/animations";

function GetStartedButton() {
	const [open, setOpen] = useState(false);
	return (
		<Button
			onClick={() => {
				if(open) {
					closeGetStartedPopup()
					setOpen(false)
				} else {
					openGetStartedPopup()
					setOpen(true)
				}
			}}
		>
			<FilledSuccessSVG />
			Get Started: Level 1
			<NotificationWrapper>
				<NotificationText>3</NotificationText>
			</NotificationWrapper>
		</Button>
	)
}

export default GetStartedButton;
