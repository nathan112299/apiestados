
function carregarSelect(url, selectId, valorKey, textoKey) {
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            const select = document.getElementById(selectId);
            select.innerHTML = '';

            dados.forEach(item => {
                const option = document.createElement('option');
                option.value = item[valorKey];
                option.textContent = item[textoKey];
                select.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar dados:', error));
}

document.getElementById('estados').addEventListener('change', function() {
    const estadoId = this.value;
    carregarSelect(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`, 'cidades', 'id', 'nome');
});

carregarSelect('https://servicodados.ibge.gov.br/api/v1/localidades/estados', 'estados', 'id', 'nome');