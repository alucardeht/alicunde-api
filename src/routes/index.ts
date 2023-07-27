import express from 'express';
const router = express.Router();

import { Book, Author } from '../models';;

router.post('/books', async (req, res) => {
  try {
    const author = await Author.findByPk(req.body.authorId);
    if (!author) {
      res.status(404).json({ error: "Author not found" });
      return;
    }
    const book = await Book.create({ ...req.body, authorId: author.id });
    res.json(book);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});


router.get('/books', async (_req, res) => {
  try {
    const books = await Book.findAll({ include: [{ model: Author, as: 'author' }] });
    res.json(books);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});


router.post('/authors', async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/authors', async (_req, res) => {
  try {
    const authors = await Author.findAll({ include: [{
                model: Book,
                as: 'books'
            }] });
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/books/:id/pages_per_chapter', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }
    const pagesPerChapter = (book.pages / book.chapters).toFixed(2);
    res.json({ id: book.id, pagesPerChapter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
