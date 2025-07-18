const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 기본 라우트
app.get('/', (req, res) => {
    res.json({ message: 'Express API is running' });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 