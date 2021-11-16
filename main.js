var res = document.querySelector('.result')
var one = document.querySelector('.one')
const operator = document.querySelector('.operator')
var two = document.querySelector('.two')
var answer = document.querySelector('#answer')
var score = []
var quiz = []
var wrongAnswer = []



const question = () => {
    let a = parseInt(Math.random()*100)
    let b = parseInt(Math.random()*100)
    one.innerHTML = a
    two.innerHTML = b
  
}

const reset = () => {
    res.style.border = "none"
    res.innerHTML = " "
    return question()

}
function result() {
    let a = parseInt(one.innerHTML)
    let b = parseFloat(two.innerHTML)
    let c = a+b
    
    if (answer.value == c) {
        score.push(1)
        quiz.push(1)
        res.innerHTML = c +" "+"is Correct Answer😊"
        res.style.border = "2px solid black"
       
        question()
    } else {
       
        wrongAnswer.push(1)
        quiz.push(0)
        res.innerHTML = answer.value +" "+ "is Wrong Answer😐"
        res.style.border = "2px solid red"
        question()
    }
    answer.value = " "
    let ul = document.querySelector("#ul")
    let li = document.createElement('li')
    li.innerHTML = quiz[quiz.length-1]
    
    let scored = parseInt(score.length - wrongAnswer.length)
    let marks = parseInt(scored/quiz.length*100)
   
    ul.append(li)
    
    const totalScore = document.querySelector('.totalScore')
    totalScore.innerHTML = "Result:" +marks + "%"
    totalScore.style.border = "2px solid black"
    totalScore.style.height = "7%"
    totalScore.style.display = "flex"
    totalScore.style.justifyContent = "center"
    totalScore.style.alignItems = "center"
}

/*
var app = () => {
    var tick = 0
    var p = document.createElement('p')
    res.append(p)

    var update = () => {
    p.innerHTML = tick
    if(p.innerHTML == 10){
        p.style.background = "green"
    }else if(p.innerHTML ==20){
        p.style.background = "red"
    }
    
    tick++
    }
    
    setInterval(update,1000)
}
*/
