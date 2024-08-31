import { Knex } from "knex";
const { v4: uuidv4 } = require('uuid');
export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("Usuario").del();

    // Inserts seed entries
    await knex("Usuario").insert([
        {id: uuidv4(),
		nombre: "Usuario1",
		email: "Usuario1@gmail.com"},
		{id: uuidv4(),
		nombre: "Usuario2",
		email: "Usuario2@gmail.com"}
        
    ]);
};
