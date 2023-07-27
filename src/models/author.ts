import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../db';

export class Author extends Model {
    public id!: number;
    public name!: string;
}

Author.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'authors',
});

export default Author;
