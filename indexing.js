// Create index on title
db.books.createIndex({ title: 1 })

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// Check performance with explain()
db.books.find({ title: "Atomic Habits" }).explain("executionStats")
