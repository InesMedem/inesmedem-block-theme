import { registerBlockType } from '@wordpress/blocks';
import metadata from '../cta/block.json';
import Edit from '../cta/edit';
import save from '../cta/save';

import './style.scss';
import './editor.scss';

registerBlockType(metadata.name, {
	edit: Edit,
	save,
});
