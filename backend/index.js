const express = require("express"); //runs http server
const cors = require("cors"); //to call server from any domain
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//post endpoint to authenticate user
app.post("/authenticate", async (req, res) => {
  const { username } = req.body; //getting username from request body
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/', //calling chatengine api (create user if not already created)
    {username: username, secret: username, first_name: username},
    {headers: { "Private-Key": "e8cb4f51-9248-40a1-bad9-29698bc2faec"}} //private key from chatengine(to create and delete users)
    )
    return res.status(r.status).json(r.data) //returning the response from chatengine

  }catch (e) {
    return res.status(e.response.status).json(e.response.data) //if there's an error, return the error
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);//running the app on port 3001