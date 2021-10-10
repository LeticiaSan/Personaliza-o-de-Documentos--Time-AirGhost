import database from '../database';
import { INTEGER, STRING } from 'sequelize';

const Tag = database.define('Tag', {
  id_tag: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name_tag: {
    type: STRING,
    allowNull: false
  }
})

Tag.sync();

export default Tag;