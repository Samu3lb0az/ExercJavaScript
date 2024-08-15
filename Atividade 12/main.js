//Samuel Boaz de Morais Gonçalves

const opcoesMenu = prompt("Digite uma opção de 1 a 3:");

switch(opcoesMenu) {
    case "1":
        alert("Você escolheu pizza! Confira nosso cardápio.");
        break;
    case "2":
        alert("Você escolheu hambúrguer! Delícia!");
        break;
    case "3":
        alert("Você escolheu sushi! Que tal um combinado?");
        break;
    default:
        alert("Opção inválida! Por favor, escolha um número de 1 a 3.");
        break;
}