import './sass/style.scss'; // Import the SCSS to compile

import "./blocks/hero/style.scss";
import Edit from "./blocks/hero/edit";
import save from "./blocks/hero/save";
import metadata from "./blocks/hero/block.json";

wp.blocks.registerBlockType(metadata.name, {
  ...metadata,
  Edit,
  save,
});

