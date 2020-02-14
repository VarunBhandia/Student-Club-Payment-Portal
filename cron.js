dbo.collection("TableStatus").deleteMany({});
dbo.collection("OrderTableStatus").deleteMany({});
console.log("Database values cleared");
clearDatabase();