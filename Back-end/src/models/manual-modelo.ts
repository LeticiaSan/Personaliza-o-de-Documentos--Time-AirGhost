import database from '../database';
import { INTEGER, STRING } from 'sequelize';

const Manual = database.define('Manual', {
  id_manual: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name_manual: {
    type: STRING,
    allowNull: false
  }
})

Manual.sync();

export default Manual;