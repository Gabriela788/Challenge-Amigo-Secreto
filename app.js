let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim(); 

    if (nome == "") { 
        alert("Por favor, insira um nome!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    nomeInput.value = ""; 
    nomeInput.focus(); 
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `<li>Sorteado: ${sorteado}</li>`;
}
