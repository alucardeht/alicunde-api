import Book from './book';
import Author from './author';

Book.belongsTo(Author, { as: 'author', foreignKey: 'authorId' });
Author.hasMany(Book, { as: 'books', foreignKey: 'authorId' });

export { Book, Author };
