"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://koyalkaraditya123:1qUisGEko2Se@ep-silent-night-a5ynrog5.us-east-2.aws.neon.tech/test?sslmode=require",
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(40) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `);
        console.log(result);
    });
}
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`INSERT INTO users (username,email,password) VALUES ('Tinku','Tinku@gmail.com','aditya123');
        `);
        console.log(result);
    });
}
// async function retriveTable() {
//   await client.connect();
//   const query = "SELECT * FROM users";
//   const result = await client.query(query);
//   console.log(result.rows);
// }
// retriveTable();
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = "SELECT * FROM users WHERE email = $1";
            const values = [email]; //this values will replace the $1 in the query when processing the below code
            const result = yield client.query(query, values);
            if (result.rows.length > 0) {
                console.log("User Found", result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("user not found ");
                return null;
            }
        }
        catch (err) {
            console.error("Error has occurred while fetching the data");
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
function createAddressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
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
        const response = yield client.query(query);
        console.log(response);
    });
}
function insertAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const response = yield client.query(`insert into addresses (user_id,city,country,street,pincode) values(1,'hyd','ind','bsn','500035');`);
        console.log(response);
    });
}
function innerJoin() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;`;
        const responce = yield client.query(query);
        console.log(responce);
    });
}
innerJoin();
