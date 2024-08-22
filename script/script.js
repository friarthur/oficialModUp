let chatboxVisible = false;

function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    chatboxVisible = !chatboxVisible;
    chatbox.style.display = chatboxVisible ? 'block' : 'none';
    if (chatboxVisible) {
        startChat();
    }
}

function startChat() {
    const chatboxBody = document.getElementById('chatbox-body');
    chatboxBody.innerHTML = '<div class="chat-message bot-message"><p>...</p></div>';

    setTimeout(() => {
        chatboxBody.innerHTML = '<div class="chat-message bot-message"><p>Olá, qual seu nome?</p></div>';
    }, 2000); // Simula a digitação por 2 segundos
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message === '') return;

    const chatboxBody = document.getElementById('chatbox-body');
    chatboxBody.innerHTML += `<div class="chat-message user-message"><p>${message}</p></div>`;
    userInput.value = '';

    setTimeout(() => {
        chatboxBody.innerHTML += '<div class="chat-message bot-message"><p>...</p></div>';

        setTimeout(() => {
            chatboxBody.innerHTML += `
                <div class="chat-message bot-message">
                    <p>Prazer, ${message}! Como posso te ajudar?</p>
                    <ul class="chat-options">
                        <li><button onclick="showOptions(1)">Entrar em contato</button></li>
                        <li><button onclick="showOptions(2)">Site sob medida</button></li>
                        <li><button onclick="showOptions(3)">Modificar um site existente</button></li>
                        <li><button onclick="showOptions(4)">Trabalhar com a gente</button></li>
                    </ul>
                </div>`;
        }, 2000);
    }, 1000); 
}

function showOptions(option) {
    const chatboxBody = document.getElementById('chatbox-body');
    let response = '';

    switch (option) {
        case 1:
            response = `
                <p>Ótimo! Você pode entrar em contato conosco através dos seguintes links:</p>
                <ul>
                    <li>techinova73@gmail.com</li>
                    <li><a href="https://www.instagram.com/modup_tech/" target="_blank">Instagram</a></li>
                </ul>`;
            break;
        case 2:
            response = `<p>Para sites sob medida, entre em contato pelo WhatsApp: <a href="https://wa.me/+5551983172705" target="_blank">WhatsApp</a></p>`;
            break;
        case 3:
            response = `<p>Precisando de ajustes no seu site? Fale conosco pelo WhatsApp ou Instagram:</p>
                        <ul>
                            <li><a href="https://wa.me/+5551983172705" target="_blank">WhatsApp</a></li>
                            <li><a href="https://www.instagram.com/modup_tech/" target="_blank">Instagram</a></li>
                        </ul>`;
            break;
        case 4:
            response = `<p>Interessado em trabalhar conosco? Mande seu currículo pelo Email ou WhatsApp:</p>
                        <ul>
                            <li><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Email</a></li>
                            <li><a href="https://wa.me/+5551983172705" target="_blank">WhatsApp</a></li>
                        </ul>`;
            break;
    }

    chatboxBody.innerHTML += `<div class="chat-message bot-message">${response}</div>`;
}


function checkCookieConsent() {
    var consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        document.getElementById('cookieBanner').style.display = 'block';
    }
}

// Função para aceitar cookies e ocultar o banner
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    document.getElementById('cookieBanner').style.display = 'none';
}

// Adiciona o evento de clique ao botão de aceitar cookies
document.getElementById('acceptCookies').addEventListener('click', acceptCookies);

// Verifica se o usuário já aceitou os cookies ao carregar a página
window.onload = checkCookieConsent;