const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.static('public'));  // Serve static files from the 'public' directory

app.post('/api/search', async (req, res) => {
    const { type, query } = req.body;
    
    let apiUrl = "";
    if (type === "trademarkSearch") {
        apiUrl = `https://uspto-trademark.p.rapidapi.com/v1/trademarkSearch/${query}/active`;
    } else if (type === "trademarkAvailable") {
        apiUrl = `https://uspto-trademark.p.rapidapi.com/v1/trademarkAvailable/${query}`;
    } else {
        return res.status(400).send("Invalid type provided");
    }
    
    const options = {
        method: 'GET',
        url: apiUrl,
        headers: {
            'X-RapidAPI-Key': '5a0571cc69msh52203cba184461ap110cefjsn8eb737bf37ee',
            'X-RapidAPI-Host': 'uspto-trademark.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
