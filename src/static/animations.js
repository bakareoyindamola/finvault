import gsap, { Power3 } from "gsap";

const tl = gsap.timeline();

export const openGetStartedPopup = () => {
	tl.to(".getStarted_popup_animation",
			{
				opacity: 1,
				duration: .4,
				scaleX: 1,
				ease: Power3.easeOut,
			})
		.from(".getStarted_popup_content_animation", {
			duration: .6,
			opacity: 0,
			y: 20,
			ease: Power3.easeInOut,
			stagger: {
				amount: .2
			},
		}, "<.1");
};

export const closeGetStartedPopup = () => {
	tl.to(".getStarted_popup_animation", {
			opacity: 0,
			scaleX: 0,
			duration: .4,
		})
};
