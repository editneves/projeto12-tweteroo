import express from "express";
import cors from "cors"

const PORT = 5000
const app = express()
app.use(express.json())
app.use(cors())

const usuarios = [
  {
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
  }
];

const tweets = [];
app.get("/usuarios", (_request, response) => {
  response.send(usuarios)
})

app.post('/sign-up', (req, res) => {
  const newSignUp = req.body
  usuarios.push(newSignUp)
  res.status(201).send('OK');
})

app.post('/tweets', (req, res) => {
  const newTweets = req.body
  const userRegistered = usuarios.find(item => item.username === newTweets.username)
  if (!userRegistered) {
    return res.status(401).send('UNAUTHORIZED');
  } else {
    tweets.push(newTweets)
    res.status(201).send('OK');
  }
})

app.get('/tweets', (_req, res) => {
  const lastTweets = [];
  const tweetsReverse = [...tweets]
  const ultimosTweets = tweetsReverse.reverse().slice(0, 10)
  for (let i = 0; i < ultimosTweets.length; i++) {
    const userIndex = usuarios.findIndex(user => user.username === ultimosTweets[i].username)
    lastTweets.push({ ...ultimosTweets[i], avatar: usuarios[userIndex].avatar })
  }
  res.status(200).send(lastTweets)
})

app.listen(PORT, () => {
  console.log('Servidor rodando na porta:', PORT)
})
