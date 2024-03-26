const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(cors({origin:true}));

app.post('/authenticate', async (req, res)=>{
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {
                "username": username,
                "secret": username,
                "first_name": username,
            },
            {
                headers: {
                    "private-key":"0e5a9586-7fe8-47e9-8b6b-0bc2b3c76d0f",
                }
            }
        );
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.listen(3001);