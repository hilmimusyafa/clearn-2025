const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [
    { id: 1, title: "Laskar Pelangi", author: "Andrea Hirata", year: 2005, isAvailable: true }
];

app.get('/books', (req, res) => {
    res.json({ message: "Success", data: books });
});

app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));

    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
    
    res.json({ message: "Success", data: book });
});

app.post('/books', (req, res) => {
    const { title, author, year, isAvailable } = req.body;

    const newBook = {
        id: books.length ? books[books.length - 1].id + 1 : 1,
        title, author, year, isAvailable
    };
    
    books.push(newBook);
    res.status(201).json({ message: "Buku berhasil ditambahkan", data: newBook });
});

app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });

    const { title, author, year, isAvailable } = req.body;
    
    book.title = title || book.title;
    book.author = author || book.author;
    book.year = year || book.year;
    book.isAvailable = isAvailable !== undefined ? isAvailable : book.isAvailable;

    res.json({ message: "Buku berhasil diupdate", data: book });
});

app.delete('/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    
    if (index === -1) return res.status(404).json({ message: "Buku tidak ditemukan" });

    const deletedBook = books.splice(index, 1);
    
    res.json({ message: "Buku berhasil dihapus", data: deletedBook });
});

app.listen(port, () => {
    console.log(`Server jalan di http://localhost:${port}`);
});