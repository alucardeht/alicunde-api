import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../db';
import { Author } from './author';

export class Book extends Model {
    public id!: number;
    public title!: string;
    public chapters!: number;
    public pages!: number;
    public authorId!: number;
}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    chapters: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'books',
});

export default Book;
