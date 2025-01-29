const { MongoClient } = require('mongodb');

// URI към локалния MongoDB сървър
const uri = "mongodb://127.0.0.1:27017";

// Създаваме нов MongoClient и се свързваме със сървъра
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect(); // Свързваме се със сървъра
    console.log("Успешно свързване към MongoDB!");

    const db = client.db("test"); // Използваме или създаваме база данни "test"
    const collection = db.collection("sample_collection"); // Използваме или създаваме колекция "sample_collection"

    // Примерно добавяне на документ
    await collection.insertOne({ name: "Test", value: 123 });
    console.log("Документът е добавен!");

  } catch (error) {
    console.error("Грешка при свързване към MongoDB:", error);
  } finally {
    await client.close(); // Затваряме връзката, когато сме готови
  }
}

connectToDatabase();
