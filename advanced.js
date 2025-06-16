// Find books in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})

// Projection: only title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
)

// Sorting by price ascending
db.books.find().sort({ price: 1 })

// Sorting by price descending
db.books.find().sort({ price: -1 })

// Pagination: 5 books per page
db.books.find().skip(0).limit(5) // Page 1
db.books.find().skip(5).limit(5) // Page 2
