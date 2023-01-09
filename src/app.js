import express from "express";
import cors from "cors"

const PORT = 5000
const app = express()
app.use(express.json())
app.use(cors())

const appUsers = []
const usuarios = [];
const tweet  = [];

  app.get("/usuarios", (request, response) => {
    response.send(usuarios)
  })
  app.get("/tweet", (request, response) => {
    response.send(tweet)
  })

  const signUp = [
    {
      username: "bobesponja",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    } 
  ];

  app.post('/sign-up', (req, res) => {
    const newSignUp = req.body
    const user = req.body
    appUsers.push(user)
    signUp.push(newSignUp)
    res.status(201).send('OK');
  })
  app.get('/sign-up', (req, res) => {
    res.send(signUp)
  })

  const tweets = [
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },{
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lulu",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "rbrbt",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "brb",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "frdt",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "lpfov",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "le",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
    {
      username: "l",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "esalve"
    },
  ];
  
  app.post('/tweets', (req, res) => {
    const newTweets = req.body
    tweets.push(newTweets)
    if (tweets.username != appUsers.username) {
      return res.status(401).send('UNAUTHORIZED');
    } 
    res.status(201).send('OK');
  })

  app.get('/tweets', (req, res) => {
    const { limite } = req.query
    //[...tweets].reverse()
   // slice(-10, tweets.length)
    const tweetsReverse = { ...tweets }
    const ultimosTweets = tweetsReverse.reverse().slice(0, parseInt(limite))
    res.send(ultimosTweets)
  })


app.listen(PORT, () => {
  console.log('funcionou')
})
