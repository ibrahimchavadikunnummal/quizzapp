const quizData = [
{
    question: " Where was the ProphetMuhammad صلى الله عليه وسلم born?",
    a: "makkah",
    b: "madeena",
    c: "siriya",
    d: "Abudhabi",
    correct: "a",
},
{
    question: "  what was the Prophet Muhammad’s صلى الله عليه وسلم mother named him ? ",
    a:"muhammed",
    b:"Abdullah",
    c:"abdul muthalib",
    d:" ahmad",
    correct: "d",
},
{
    question: "Which clan was the Prophetصلى الله عليه وسلم from? ",
    a: "kinanah",
    b: "banu Aws",
    c: "banu ka'b",
    d: "Banu hashim",
    correct: "d",
},
{
    question: " How old was the Prophet صلى الله عليه وسلم when he passed away?",
    a:"50",
    b:"53",
    c:"63",
    d:"60",
    correct: "c",
},
];

const answerEIs = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEI = document.getElementById
("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEI.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
function getselected(){
    const answerEIs = document.querySelectorAll(".answer");

    answerEIs.forEach((answerEI) => {
        if(answerEI.checked){
            answer = answerEI.id;
        }
    });
    return answer;
}
function deselectAnswers(){
   answerEIs.forEach((answerEI) => {
    answerEI.checked = false;
   });
}
submitbtn.addEventListener("click", () => {
    const answer = getselected();

    if(answer){
        if(answer === quizData[currentQuiz].correct) {
          score++;
          
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2> you answerd correctly at ${score}/${quizData.length}questions.</h2> <button onclick ="location.reload()">Reload</button>`;
        }
    }
});



const listenBtn =document.getElementById('quizData');
listenBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    const msg =new SpeechSynthesisUtterance("quizData");
    window.speechSynthesis.speak(quizData);
});