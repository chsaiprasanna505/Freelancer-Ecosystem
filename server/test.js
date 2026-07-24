const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://jobportal_user:YOUR_PASSWORD@cluster0.3iup2ju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function test() {
  try {
    await client.connect();
    console.log("✅ Connected successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

test();