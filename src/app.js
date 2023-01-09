import express from "express";
import cors from "cors"

const app = express()

app.use(cors())

const usuarios = [
{
	username: 'bobesponja', 
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
}
]
const tweet  = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub"
  }
  ]

 

  app.get("/usuarios", (request, response) => {
    response.send(usuarios)
  })
  app.get("/tweet", (request, response) => {
    response.send(tweet)
  })

  const signUp = [];

  app.post('/sign-up', (req, res) => {
    const newSignUp = req.body
    signUp.push(newSignUp)
    res.send("OK")
  })

app.listen(5000, () => {
  console.log('funcionou')
})
