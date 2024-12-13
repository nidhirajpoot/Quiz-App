const quizData = [
    {
        question: "Which form of Shiva is known as the Lord of animals and beasts?",
        a: "Vrkshanath",
        b: "Bhuteshvar",
        c: "Pashupati",
        d: "Mahakal",
        correct: "c",
    },
    {
        question: "Shiva drank the poison that appeared during the Samundra Manthan and he came to be known as?",
        a: "Trilochan",
        b: "Kapardin",
        c: "Neelakantha",
        d: "Bhava",
        correct: "c",
    },
    {
        question: "Sati the wife of Shiva was the daughter of?",
        a: "Himavan",
        b: "Daksha Prajapati",
        c: "Indra",
        d: "Sage Vishwamitra",
        correct: "b",
    },
    {
        question: "In which form does Parvati serve food to Shiva at Kashi?",
        a: "Annapurna",
        b: "Durga",
        c: "Kali",
        d: "Gauri",
        correct: "a",
    },
    {
        question: "The sacred mark that Shiva devotees wear on forehead is known as?",
        a: "Damru",
        b: "Tripundra",
        c: "Chilum",
        d: "Bilva",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// Load quiz function
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Deselect all selected answers
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Get the selected answer
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// Load the first question
loadQuiz();

// Event listener for submit button
submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert("Please select an answer before submitting!");
    }
});
