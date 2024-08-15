//Samuel Boaz de Morais Gonçalves

function atualizarPreco() {
    const precoPorProduto = 10;
    const quantidade = document.getElementById("quantidadeProduto").value;
    const precoTotal = precoPorProduto * quantidade;
    
    document.getElementById("totalPreco").innerText = precoTotal;
}