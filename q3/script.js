import quiz from './quest.json' assert {type: 'json'}

(function(){
    const quizq = quiz[0]
    let step = 1;
    console.log
    
    function showQuestion(){
        document.querySelector('.question').innerHTML = quizq[step]['question']
        let answer = ''
        
            answer = `<li class="answer-variant" value="${quizq[step]['answer1']['nextQuestionId']}">${quizq[step]['answer1']['label']}</li><li value="${quizq[step]['answer2']['nextQuestionId']}" class="answer-variant">${quizq[step]['answer2']['label']}</li>`
        
        document.querySelector('.answer').innerHTML = answer
        document.onclick = function(event){
            event.stopPropagation();
            if (event.target.value == 0){
                return alert ('thx for answer')
            }
            if (event.target.classList.contains('answer-variant') && event.target.value !== 0){
                step = event.target.value
                
            }
        
            showQuestion(step)

        }
    }

    showQuestion()

})();
