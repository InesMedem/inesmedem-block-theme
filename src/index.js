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

// Team block
import './blocks/team-members/style.scss';
import EditTeamMembers from './blocks/team-members/edit';
import saveTeamMembers from './blocks/team-members/save';
import metadataTeamMembers from './blocks/team-members/block.json';

// Team member block
import './blocks/team-member/style.scss';
import EditTeamMember from './blocks/team-member/edit';
import saveTeamMember from './blocks/team-member/save';
import metadataTeamMember from './blocks/team-member/block.json';

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

wp.blocks.registerBlockType(metadataTeamMembers.name, {
	...metadataTeamMembers,
	edit: EditTeamMembers,
	save: saveTeamMembers,
});

wp.blocks.registerBlockType(metadataTeamMember.name, {
	...metadataTeamMember,
	edit: EditTeamMember,
	save: saveTeamMember,
});
