import express from 'express';
import bodyParser from 'body-parser';

import { handleBubbleSort } from './controllers/bubble';
import { handleMergeSort } from './controllers/merge';

const app = express();

app.use(bodyParser.json());

app.post('/bubbleSort', handleBubbleSort);
app.post('/mergeSort', handleMergeSort);

app.listen(3000);

console.log('\x1b[34m%s\x1b[0m', 'Server listening on port 3000');