import { Response } from 'express';
import express = require('express');
import { dbQueries } from './dbQuery';

interface Query {
    sql: string;
    values?: any[];
  }

  const selectQuery: Query = {
    sql: 'SELECT * FROM people',
  };

  const insertQuery: Query = {
      sql: 'INSERT INTO people (name) VALUES (?)',
  };
  async function insertNames(names: string[]) {
    for (const name of names) {
      insertQuery.values = [name]
      await dbQueries(insertQuery);
    }
  }

const names = ['John', 'Mary', 'Bob', 'João'];

insertNames(names);

const app = express();
const port = 3000

app.get('/', async (_, res: Response) => {
  try {
      const selectResult = await dbQueries(selectQuery);
      
      const namePromises = selectResult.map(async (value: any) => `<li>${await value.name}</li>`);
      const namesList = `<ul>${(await Promise.all(namePromises)).join('')}</ul>`;

      res.send(`<h1>Full Cycle Rocks!</h1> \n ${namesList}`);
  } catch (error) {
      console.error('Erro:', error);
      res.status(500).send('Erro interno do servidor');
  }
});


app.listen(port, () => {
    console.log('listening on port' + port + '...');
})

