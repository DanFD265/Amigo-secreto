let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
        if (amigos.includes(amigo)) {
            alert('Nome já está sendo usado');
            document.getElementById('nome-amigo').value = '';
            return;
        } else if (amigo == '') {
            alert('Digite um nome primeiro');
            return;
        }
    amigos.push(amigo);
    console.log(amigos);

    if (lista.textContent == '') {
        lista.textContent = amigo;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    document.getElementById('lista-sorteio').textContent = '';
    embaralhar(amigos);
        if (amigos.length == 1) {
            alert('Insira mais nomes para realizar o sorteio');
            return;
        }
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i== amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[i + 1] + '<br>';
        }      
    }
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').textContent = '';
    amigos = [];
    document.getElementById('lista-sorteio').textContent = '';
}