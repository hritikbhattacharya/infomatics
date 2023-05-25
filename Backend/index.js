require("dotenv").config();
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const {Configuration,OpenAIApi} = require('openai');

const config = new Configuration({
    apiKey:process.env.key,


})

const openai = new OpenAIApi(config);

// setup server 

const app = express();
app.use(bodyParser.json());
app.use(cors());


// endpoint

app.post("/chat",async(req, res) => {
  const {prompt} = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 1000,
    temperature: 0,
    prompt: prompt,
  })

  res.send(completion.data.choices[0].text);
})


const port = 8080;
app.listen(port,() => {
    console.log("server listening on port " + port);
});