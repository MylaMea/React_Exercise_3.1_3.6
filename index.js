const express = require('express')
const app = express()

let persons = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.use(express.json())

/*app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})*/

app.get('/', (request, response) => {
  response.json(persons)
})

/*app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const persons = persons.find((persons) => persons.id === id)

  if (persons) {
    response.json(persons)
  }else{
    response.status(404).end()
  }
})

const generateID = () => {
  const maxID = 
    notes.length > 0 ? Math.max(...persons.map((n) => Number(n.id))) : 0
  return String(maxID + 1)
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.content){
    return response.status(400).json({
      error: 'content missing',
    })
  }

  const note = {
    content: body.content,
    id: generateID(),
  }
  persons = persons.concat(note)
  response.json(note)

})

app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.idpersons = persons.filter((persons) => persons.id !== id)
  response.status(204).end()
})*/

const PORT = 3001
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}')
})