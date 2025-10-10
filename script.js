// Array de citações
const quotes = [
    {
        quote: "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        author: "- Steve Jobs"
    },
    {
        quote: "A persistência é o caminho do êxito.",
        author: "- Charles Chaplin"
    },
    {
        quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        author: "- Robert Collier"
    },
    {
        quote: "Se você quer viver uma vida feliz, amarre-se a uma meta, não às pessoas ou às coisas.",
        author: "- Albert Einstein"
    },
    {
        quote: "A imaginação é mais importante que o conhecimento.",
        author: "- Albert Einstein"
    },
    {
        quote: "Programe como se a pessoa que irá manter seu código no futuro fosse um psicopata violento que sabe onde você mora.",
        author: "- Martin Golding"
    }
];

// Selecionar os elementos do HTML
const quoteDisplay = document.querySelector('.quote');
const authorDisplay = document.querySelector('.author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Adicionar um "ouvinte de evento" para o clique no botão
newQuoteBtn.addEventListener('click', generateNewQuote);

// Função para gerar e exibir uma nova citação
function generateNewQuote() {
    // Gerar um índice aleatório baseado no tamanho do array
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Selecionar a citação e o autor com o índice aleatório
    const randomQuote = quotes[randomIndex];

    // Atualizar o texto no HTML
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = randomQuote.author;
}