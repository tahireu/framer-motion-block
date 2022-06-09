import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( props ) {
	const blockProps = useBlockProps();

	const onChangeHeading = ( newHeadingValue ) => {
		props.setAttributes( { message : newHeadingValue } );
	};

	return (
		<div { ...blockProps }>
			<TextControl
				value={ props.attributes.message }
				onChange={ onChangeHeading }
			/>
		</div>
	);
}
