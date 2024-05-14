let quartosDisponiveis = 5;
let resrevaConfirmada = true;

let satusReserva = (resrevaConfirmada && qaurtosDisponiveis > 0) ? "Reserva confirmada"
                 : (quartosDisponiveis > 0) ? "Aguardando confirmação"
                 :"Sem quartos disponíveis";

console.log(statusReserva); //Saída: "Reserva confirmada"                