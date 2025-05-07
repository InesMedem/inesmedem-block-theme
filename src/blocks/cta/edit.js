
import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	console.log("🚀 ~ Edit ~ attributes:", attributes)
	const { text } = attributes;
	return (
		< RichText
			{ ...useBlockProps()}
			onChange={(text) => setAttributes({ text })}
			value={ text }
			placeholder={__("Your Text", "text-box")}
			tagName="h4"
			allowedFormats={['core/bold']}
		/>
	);
}
