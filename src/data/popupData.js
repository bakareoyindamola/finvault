import React from 'react';
import {BankSVG, IdSVG, MobileSVG, SuccessSVG} from "../assets";

export const popupData = [
	{
		id: 1,
		completed: true,
		name: 'Open your account',
		paragraph: 'You have successfully opened your account',
		icon: <SuccessSVG />
	},
	{
		id: 2,
		completed: false,
		name: 'Verify your identity',
		paragraph: 'Unlock features with your passport ',
		icon: <IdSVG />
	},
	{
		id: 3,
		completed: false,
		name: 'Verify your phone number',
		paragraph: 'Secure your account using your phone number',
		icon: <MobileSVG />
	},
	{
		id: 4,
		completed: false,
		name: 'Connect your bank account',
		paragraph: 'Connect any local bank to your Finvault wallet',
		icon: <BankSVG />
	}
]
