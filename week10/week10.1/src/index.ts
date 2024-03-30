import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://koyalkaraditya123:1qUisGEko2Se@ep-silent-night-a5ynrog5.us-east-2.aws.neon.tech/test?sslmode=require",
});
async function createUsersTable() {
  await client.connect();
  const result = await client.query(
    `
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(40) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `
  );
  console.log(result);
}
async function insertData() {
  await client.connect();
  const result = await client.query(
    `INSERT INTO users (username,email,password) VALUES ('Tinku','Tinku@gmail.com','aditya123');
        `
  );
  console.log(result);
}

// async function retriveTable() {
//   await client.connect();
//   const query = "SELECT * FROM users";
//   const result = await client.query(query);
//   console.log(result.rows);
// }
// retriveTable();

async function getUser(email: string) {
  try {
    await client.connect();
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email]; //this values will replace the $1 in the query when processing the below code
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User Found", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("user not found ");
      return null;
    }
  } catch (err) {
    console.error("Error has occurred while fetching the data");
    throw err;
  } finally {
    await client.end();
  }
}
async function createAddressTable() {
  await client.connect();
  const query = `
    CREATE TABLE addresses(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
    `;
  const response = await client.query(query);
  console.log(response);
}
async function insertAddress() {
  await client.connect();
  const response = await client.query(
    `insert into addresses (user_id,city,country,street,pincode) values(1,'hyd','ind','bsn','500035');`
  );
  console.log(response);
}

async function innerJoin() {
  await client.connect();
  const query = `SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;`;
  const responce = await client.query(query);
  console.log(responce);
}
innerJoin();
