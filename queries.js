// Find all books in a specific genre
db.books.find({ genre: "Finance" })

// Find books published after 2010
db.books.find({ published_year: { $gt: 2010 } })

// Find books by a specific author
db.books.find({ author: "James Clear" })

// Update the price of a specific book
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { price: 1900 } }
)

// Delete a book by its title
db.books.deleteOne({ title: "Rich Dad Poor Dad" })
