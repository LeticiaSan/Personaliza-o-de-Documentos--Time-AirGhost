import database from '../database';
import { INTEGER, STRING } from 'sequelize';
 
const Codelist = database.define('Codelist', {
    id_codelist: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_tag : {
        type: STRING,
        allowNull: false
    },
    id_manual : {
        type: INTEGER,
        allowNull: false
    },
    number_section : {
        type: STRING,
        allowNull: false
    },
    number_subsection : {
        type: STRING,
        allowNull: false
    },
    number_block :{
        type: STRING,
        allowNull: false,
    },
    name_block :{
        type: STRING,
        allowNull: false,
    },
    code :{
        type: STRING,
        allowNull: false,
    },
})

Codelist.sync()

export default Codelist;