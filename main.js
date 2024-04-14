fetch('https://opentdb.com/api.php?amount=4')
.then(res => res.json())
.then(data => { makeCards(data.results); console.log(data.results)})
.catch(error => console.error(error))
const mainDiv = document.getElementsByClassName('center')[0]
console.log(mainDiv);
function makeCards (data) {

    data.forEach(ele => {
        
        const card = document.createElement('div');
        card.setAttribute('class','card');
        const category = document.createElement('h3');
        category.innerText = `${ele.category}`;
        mainDiv.appendChild(card);

        const question = document.createElement('p');
        question.innerText = `${ele.question}`;

        const button = document.createElement('button');
        button.innerText = 'Show Answer';

        const correctAnswer = document.createElement('p');
        correctAnswer.setAttribute('class','hidden');
        correctAnswer.innerText = `${ele.correct_answer}`;

        button.addEventListener('click', ()=> {
            
            correctAnswer.classList.toggle('hidden');


        })


        card.append(category,question, correctAnswer, button);
    })


}