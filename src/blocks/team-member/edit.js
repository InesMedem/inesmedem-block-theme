import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls
} from '@wordpress/block-editor';
import './editor.scss';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { Spinner, ToolbarButton, withNotices, PanelBody, TextareaControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

export function Edit({
	attributes,
	setAttributes,
	noticeOperations,
	noticeUI,
}) {
	const { name, bio, url, alt } = attributes;
	const [blobURL, setBlobURL] = useState();

	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};

	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};

	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: '' });
			return;
		}

		setAttributes({
			url: image.url,
			id: image.id,
			alt: image.alt,
		});
	};

	const onUploadError = (message) => {
		noticeOperations.createErrorNotice(message);
	};

	const removeImage = () => {
		setAttributes({
			url: undefined,
			id: undefined,
			alt: '',
		});
	};

	const onChangeAlt = (newAlt) => {
		setAttributes({ alt: newAlt });
	};

	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({
				url: undefined,
				alt: '',
			});
		}
	}, []);

	useEffect(() => {
		if (isBlobURL(url)) {
			setBlobURL(url);
		} else {
			revokeBlobURL(blobURL);
			setBlobURL();
		}
	}, [url]);

	return (
		<>
	{url && !isBlobURL(url) && (<InspectorControls>
		<PanelBody title={__("Image Settings", "ines")}>
		<TextareaControl 
			label={__("alt text", "ines")}
			value={alt}
			onChange={onChangeAlt}
			help={__("this is alt text for accesibility pruposes", "ines")}
			
			>

		</TextareaControl>
			
		</PanelBody>
	</InspectorControls>)}

			{url && (
				<BlockControls group="inline">
					<MediaReplaceFlow
						name={__('Replace Image', 'ines')}
						onSelect={onSelectImage}
						onSelectURL={(val) => console.log(val)}
						onError={(err) => console.log(err)}
						accept="image/*"
						allowedTypes={['image']}
						mediaId={id}
						mediaURL={url}
					/>
					<ToolbarButton onClick={removeImage}>
						{' '}
						{__('Remove Image')}{' '}
					</ToolbarButton>
				</BlockControls>
			)}

			<div {...useBlockProps()}>
				{url && (
					<div
						className={`wp-content-ines-team-member-img${
							isBlobURL(url) ? ' is-loading' : ''
						}`}
					>
						<img src={url} alt={alt} />
						{isBlobURL(url) && <Spinner />}
					</div>
				)}

				<MediaPlaceholder
					icon="admin-users"
					onSelect={onSelectImage}
					onSelectURL={(val) => console.log(val)}
					onError={(err) => console.log(err)}
					accept="image/*"
					allowedTypes={['image']}
					disableMediaButtons={url}
					notices={noticeUI}
				/>
				<RichText
					placeholder={__('Member Name', 'team-member')}
					tagName="h4"
					onChange={onChangeName}
					value={name}
				/>
				<RichText
					placeholder={__('Member Bio', 'team-member')}
					tagName="p"
					onChange={onChangeBio}
					value={bio}
				/>
			</div>
		</>
	);
}

export default withNotices(Edit);
