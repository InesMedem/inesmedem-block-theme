import './sass/style.scss';

// Hero block
import './blocks/hero/style.scss';
import EditHero from './blocks/hero/edit';
import saveHero from './blocks/hero/save';
import metadataHero from './blocks/hero/block.json';

// CTA block
import './blocks/cta/style.scss';
import EditCTA from './blocks/cta/edit';
import saveCTA from './blocks/cta/save';
import metadataCTA from './blocks/cta/block.json';

// Register blocks
wp.blocks.registerBlockType(metadataHero.name, {
	...metadataHero,
	edit: EditHero,
	save: saveHero,
});

wp.blocks.registerBlockType(metadataCTA.name, {
	...metadataCTA,
	edit: EditCTA,
	save: saveCTA,
});
