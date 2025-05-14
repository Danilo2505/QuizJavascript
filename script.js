const questions = [
  // HTML (10)
  {
    question: "O que significa HTML?",
    answers: [
      "HyperText Markup Language",
      "Hyper Tool Mark Language",
      "HighText Machine Language",
      "None",
    ],
    correct: 0,
  },
  // HTML (5)
{
  question: "Qual elemento é usado para agrupar elementos em bloco?",
  answers: ["<div>", "<span>", "<section>", "<article>"],
  correct: 0,
},
{
  question: "Qual atributo define um texto que aparece ao passar o mouse sobre um elemento?",
  answers: ["title", "tooltip", "alt", "hover"],
  correct: 0,
},
{
  question: "Qual elemento é usado para destacar texto importante?",
  answers: ["<strong>", "<b>", "<em>", "<mark>"],
  correct: 0,
},
{
  question: "Qual tag insere uma quebra de linha?",
  answers: ["<br>", "<hr>", "<break>", "<nl>"],
  correct: 0,
},
{
  question: "Qual tag representa conteúdo autônomo como postagens ou artigos?",
  answers: ["<article>", "<section>", "<aside>", "<main>"],
  correct: 0,
},

// CSS (5)
{
  question: "Qual propriedade define o espaço externo de um elemento?",
  answers: ["margin", "padding", "border", "spacing"],
  correct: 0,
},
{
  question: "Como aplicar uma sombra em texto?",
  answers: ["text-shadow", "font-shadow", "shadow-text", "text-outline"],
  correct: 0,
},
{
  question: "Qual valor da propriedade position fixa um elemento na tela?",
  answers: ["fixed", "absolute", "sticky", "relative"],
  correct: 0,
},
{
  question: "Como aplicar um estilo a vários seletores ao mesmo tempo?",
  answers: ["Separando por vírgula", "Usando &", "Usando |", "Repetindo a regra"],
  correct: 0,
},
{
  question: "Qual pseudo-classe representa o estado de foco em um campo?",
  answers: [":focus", ":hover", ":active", ":checked"],
  correct: 0,
},

  {
    question: "Qual tag é usada para criar um link?",
    answers: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0,
  },
  {
    question: "Qual tag cria uma lista ordenada?",
    answers: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 0,
  },
  {
    question: "Qual atributo define o endereço da imagem em <img>?",
    answers: ["src", "href", "alt", "link"],
    correct: 0,
  },
  {
    question: "Qual tag cria um formulário?",
    answers: ["<form>", "<input>", "<submit>", "<fieldset>"],
    correct: 0,
  },
  {
    question: "Qual elemento é usado para inserir um parágrafo?",
    answers: ["<p>", "<div>", "<text>", "<section>"],
    correct: 0,
  },
  {
    question: "Qual é a função da tag <head>?",
    answers: [
      "Guardar metadados",
      "Exibir o título",
      "Mostrar o corpo",
      "Criar cabeçalhos",
    ],
    correct: 0,
  },
  {
    question: "Qual é a tag correta para o título principal?",
    answers: ["<h1>", "<head>", "<title>", "<heading>"],
    correct: 0,
  },
  {
    question: "Qual atributo especifica um texto alternativo para imagem?",
    answers: ["alt", "title", "src", "description"],
    correct: 0,
  },
  {
    question: "Qual tag agrupa conteúdo de seção?",
    answers: ["<section>", "<div>", "<article>", "<span>"],
    correct: 0,
  },

  // CSS (10)
  {
    question: "Como referenciar um arquivo CSS externo?",
    answers: [
      '<link rel="stylesheet" href="style.css">',
      '<style src="style.css">',
      '<script href="style.css">',
      "<css>style.css</css>",
    ],
    correct: 0,
  },
  {
    question: "Qual seletor seleciona um elemento com ID 'menu'?",
    answers: ["#menu", ".menu", "menu", "*menu"],
    correct: 0,
  },
  {
    question: "Como aplicar cor de fundo em CSS?",
    answers: ["background-color", "color", "bgcolor", "fill-color"],
    correct: 0,
  },
  {
    question: "Qual propriedade altera o tamanho da fonte?",
    answers: ["font-size", "text-size", "size-font", "font"],
    correct: 0,
  },
  {
    question: "Como centralizar um texto?",
    answers: [
      "text-align: center;",
      "align: center;",
      "center: true;",
      "margin: auto;",
    ],
    correct: 0,
  },
  {
    question: "Como selecionar todos os parágrafos?",
    answers: ["p", ".p", "#p", "*p"],
    correct: 0,
  },
  {
    question: "Qual unidade é relativa ao tamanho da fonte atual?",
    answers: ["em", "px", "%", "vh"],
    correct: 0,
  },
  {
    question: "Como deixar o texto em negrito?",
    answers: [
      "font-weight: bold;",
      "text-bold: true;",
      "bold: yes;",
      "style: bold;",
    ],
    correct: 0,
  },
  {
    question: "Como aplicar uma borda sólida?",
    answers: [
      "border: 1px solid black;",
      "border-style: solid black;",
      "borda: sólida;",
      "line: solid;",
    ],
    correct: 0,
  },
  {
    question: "Qual propriedade define o espaço interno de um elemento?",
    answers: ["padding", "margin", "border", "spacing"],
    correct: 0,
  },

  
];

let currentQuestion = 0;
let score = 0;
let userName = "";
let userAnswers = []; // Armazena os índices marcados pelo aluno

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const startContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  const inputName = document.getElementById("name").value.trim();
  if (inputName === "") {
    alert("Digite seu nome para começar.");
    return;
  }
  userName = inputName;
  startContainer.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `(${currentQuestion + 1}/${questions.length}) ${
    q.question
  }`;
  answersEl.innerHTML = ""; // Limpa as respostas anteriores

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-btn");
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });

  nextBtn.classList.add("hidden"); // Esconde o botão "Próxima" até responder
}

function selectAnswer(index) {
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === index) {
      btn.style.backgroundColor = "#28a745"; // Verde
    }
  });

  userAnswers[currentQuestion] = index; // Salva a resposta do usuário

  if (index === questions[currentQuestion].correct) {
    score++;
  }

  nextBtn.classList.remove("hidden");
}

function showResult() {
  questionContainer.classList.add("hidden");
  resultEl.classList.remove("hidden");

  const nota = ((score / questions.length) * 10).toFixed(1);
  resultEl.innerHTML = `<h2>${userName}, sua nota foi: ${nota}/10</h2><hr><h3>Revisão da prova:</h3>`;

  questions.forEach((q, i) => {
    const userAnswer = userAnswers[i];
    const correctAnswer = q.correct;
    const isCorrect = userAnswer === correctAnswer;

    resultEl.innerHTML += `
      <div style="margin-bottom: 15px;">
        <strong>(${i + 1}) ${q.question}</strong><br>
        Sua resposta: <span style="color: ${isCorrect ? 'green' : 'red'}">${q.answers[userAnswer] || "Não respondida"}</span><br>
        ${!isCorrect ? `Correta: <span style="color: green">${q.answers[correctAnswer]}</span><br>` : ""}
      </div>
    `;
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});
