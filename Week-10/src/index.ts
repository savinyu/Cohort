import { Client } from "pg";

const client = new Client({
    connectionString:'postgresql://test_owner:68fFxyGPRHtE@ep-cold-violet-a1v9audo.ap-southeast-1.aws.neon.tech/test?sslmode=require'
});


async function createUsersTable(){
    await client.connect();
    const result = await client.query(
        `CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
        );`
    )
    console.log(result); 
};


// createUsersTable();
async function insertIntoUsers() {
    await client.connect();
    const result = await client.query(
        `INSERT INTO users (username,password)
        VALUES (
            $1,
            $2
        );`
    ,['savinyupant2@gmail.com','12345678']);
}

insertIntoUsers();
