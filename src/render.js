import React from 'react'
import domReady from '@wordpress/dom-ready'
import { render } from '@wordpress/element'
import Headings from './components/Headings'

domReady(() => {
	let element = document.getElementById('fmb-animated-heading')
	let message = element.getAttribute('data-animated-heading');

	render(<Headings text={message}/>, element)
});
