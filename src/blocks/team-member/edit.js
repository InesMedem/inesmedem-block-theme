import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import './editor.scss';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { useSelect } from '@wordpress/data';
import {
	Spinner,
	ToolbarButton,
	withNotices,
	PanelBody,
	TextareaControl,
	SelectControl,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

export function Edit({
	attributes,
	setAttributes,
	noticeOperations,
	noticeUI,
}) {
	const { name, bio, url, alt } = attributes;
	const [blobURL, setBlobURL] = useState();

	const imageObject = useSelect(
		(select) => {
			const { getMedia } = select('core');
			return id ? getMedia(id) : null;
		},
		[id]
	);

	const imageSizes = useSelect((select) => {
		return select(blockEditorStore).getSettings().imageSizes;
	}, []);

	const getImageSizeOptions = () => {
		if (!imageObject) return [];
		const options = [];
		const sizes = imageObject.media_details.sizes;
		for (const key in size) {
			const size = sizes[key];
			const imageSize = imageSizes.find((s) => s.slug === key);
			if (imageSize) {
				options.push({
					label: imageSize.name,
					value: size.source_url,
				});
			}
		}
		return options;
	};

	const onChangeImageSize = (newURL) => {
		setAttributes({ url: newUrl})
	}

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
			{url && !isBlobURL(url) && (
				<InspectorControls>
					<PanelBody title={__('Image Settings', 'ines')}>
						{id && (
							<SelectControl
								label={__('Image Size', 'ines')}
								options={ getImageSizeOptions() }
								value={url}
								onChange={ onChangeImageSize }
							/>
						)}
						<TextareaControl
							label={__('alt text', 'ines')}
							value={alt}
							onChange={onChangeAlt}
							help={__(
								'this is alt text for accesibility pruposes',
								'ines'
							)}
						></TextareaControl>
					</PanelBody>
				</InspectorControls>
			)}

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
