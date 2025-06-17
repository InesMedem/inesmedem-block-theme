import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import './editor.scss';
import { isBlobURL } from '@wordpress/blob';
import { Spinner, withNotices } from '@wordpress/components';

export function Edit({ attributes, setAttributes, noticeOperations, noticeUI }) {
	const { name, bio, url, alt } = attributes;

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

	return (
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
	);
}

export default withNotices(Edit);