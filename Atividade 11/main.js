//Samuel Boaz de Morais Gonçalves

const corSemafaro = ["verde", "vermelho", "amarelo"];
const qualCor = prompt("Digite qual a cor do semáforo");

switch(qualCor) {
    case "verde":
        alert("Siga!");
        break;
    case "vermelho":
        alert("Pare!");
        break;
    case "amarelo":
        alert("Atenção!");
        break;
    default:
        alert("Cor inválida!");
}