// Samuel Boaz de Morais Gonçalves

let diaDaSemana = prompt("Digite um número de 1 a 7 referente a um dia da semana. Ex.: 4 = Quarta-feira.");

switch(diaDaSemana) {
    case "1":
        alert("Hoje é segunda-feira! Reunião às 10h.");
        break;
    case "2":
        alert("Hoje é terça-feira! Aula de ginástica às 18h.");
        break;
    case "3":
        alert("Hoje é quarta-feira! Cinema com os amigos às 20h.");
        break;
    case "4":
        alert("Hoje é quinta-feira! Apresentação de trabalhos às 15h.");
        break;
    case "5":
        alert("Hoje é sexta-feira! Happy hour com os colegas às 19h.");
        break;
    case "6":
        alert("Hoje é sábado! Dia de descansar!");
        break;
    case "7":
        alert("Hoje é domingo! Brunch com a família às 11h.");
        break;
    default:
        alert("Número inválido! Por favor, digite um número de 1 a 7.");
}