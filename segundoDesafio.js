// # 2️⃣ Calculadora de partidas Rankeadas 
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem, exemplo:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

calculateLevel(478, 26)

function calculateLevel(Wins, Lost){  // Parâmetros definidos para a function que mostra os resultados da partida.
    let points = (Wins - Lost)  // Variável que retorna o resultado do cálculo (vitórias - derrotas)
    let elo;
    if (points <= 10) {  // Se vitórias for menor do que 10 = Ferro
        elo =  "Ferro"
    }  else if (points >= 11 &&  points <= 20){  // Se vitórias for entre 11 e 20 = Bronze 
        elo = "Bronze"
    }  else if (points >= 21 &&  points <= 50){  // Se vitórias for entre 21 e 50 = Prata
        elo = "Prata" 
    }  else if (points >= 51 &&  points <= 80){  // Se vitórias for entre 51 e 80 = Ouro
        elo = "Ouro"   
    }  else if (points >= 81 &&  points <= 90){  // Se vitórias for entre 81 e 90 = Diamante
        elo = "Diamante" 
    }  else if (points >= 91 &&  points <= 100){ // Se vitórias for entre 91 e 100= Lendário
        elo = "Lendário"
    }  else { // Se vitórias for maior ou igual a 101 = Imortal
        elo = "Imortal"
    }    
    let retornar = (`Você está no elo ${elo}! Você possui ${Wins} vitórias e ${Lost} derrotas, totalizando ${points} pontos! `)  
    
        return console.log(retornar) // retorno para exibir uma mensagem referente ao resultado. 
}

