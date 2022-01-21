class Question {
    static #score = 0
    #question
    #answers
    #correct

  constructor(question, answer, correct) {
    this.#question = question
    this.#answers = answer
    this.#correct = correct
  }

  display = function() {
    console.log(this.#question)
    for(let i = 0; i < this.#answers.length; i++) {
      console.log((i + 1) + ') ' + this.#answers[i])
    }
  }

  checkAnswer = function(value) {
    if (this.#answers[value - 1] == this.#correct) {
      return true;
    } else {
      return false;
    }
  }

  static addPoint = function() {
    this.#score++
  }

  static showScore = function(total) {
    console.log(`Your score is ${this.#score} of ${total}`)
  }

  static shuffle = function(array) {
    let index = array.length
    let random
    while (index != 0) {
      random = Math.floor(Math.random() * index)
      index--;
      [array[index], array[random]] = [array[random], array[index]]
    }
    return array
  }
}

let questions = [
  new Question('¿En qué año finalizo la Segunda Guerra Mundial?', ['1940','1942','1954','1945','1943'] , '1945'),
  new Question('¿Cuál es mamifero más grande del mundo?', ['Lobo','Ballena','Hormiga','Lechuga','Orca'] , 'Ballena'),
  new Question('¿Cuál es la capital de la República Argentina?', ['Córdoba','Tucuman','La Plata','Buenos Aires','El obelisco'] , 'Buenos Aires'),
  new Question('¿En qué continente se encuentra Antigua y Barbuda?', ['Europa','Asia','América','Oceanía','África'] , 'América'),
  new Question('¿En qué año el hombre pisó la Luna por primera vez?', ['1969','1983','1945','1967','1978'] , '1969')
]

questions = Question.shuffle(questions)

for(var question of questions){
  question.display()
  let userAnswer = prompt('Type your answer...')
  if(question.testAnswer(userAnswer)){
    console.log('Excellent, you choose the right answer!')
    question.addPoint()
  }else{
    console.log('You choose the wrong answer')
  }
}

Question.showScore(array.length)