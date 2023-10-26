const express = require('express');
const app = express();
const port = 3000

app.get('/', (res: any) => {
    res.send('<h1>Full Cycle</h1>');
});

app.listen(port, () => {
    console.log('listening on port' + port);
})

// "dev": "ts-node ./index.ts"