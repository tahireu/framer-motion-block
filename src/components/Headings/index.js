import React from 'react'
import { motion } from 'framer-motion';

// Framer Motion Variants.
const banner = {
	animate: {
		transition: {
			delayChildren: .4,
			staggerChildren: .1
		},
	},
}

const letterAnimation = {
	initial: {
		y: 400
	},
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95 ],
			duration: 1,
		}
	}
}

const Headings = ( props ) => {
	return (
		<motion.div className='banner' variants={banner}>
			<HeroHeading title={props.text}/>
		</motion.div>
	)
}

const AnimatedLetters = ({ title }) => (
	<motion.span
		className='row-title'
		variants={banner}
		initial='initial'
		animate='animate'
	>
		{[...title].map((letter) => (
		<motion.span
			className='row-letter'
			variants={letterAnimation}
		>
			{letter}
		</motion.span>
		))}
	</motion.span>
);

const HeroHeading = ({ title }) => {
	return (
		<div className={"banner-row"}>
			<AnimatedLetters title={title} />
		</div>
	);
};

export default Headings
