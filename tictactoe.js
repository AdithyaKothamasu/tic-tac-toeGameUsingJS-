const prompt = require("prompt-sync")();

function checkWinner(game){
  for(let a = 0; a <= 2;a++){
    for(let b = 0; b <= 2;b++){
      if((game[a][b] == 'X' && game[a+1][b] =='X' && game[a+2][b] == 'X') || (game[a][b] == 'X' && game[a][b+1] == 'X' && game[a][b+2] == 'X') || (game[a][b] == 'X' && game[a+1][b+1] == 'X' && game[a+2][b+2] == 'X') || (a==2 && b==0 && ((game[a][b] == 'X' && game[a-1][b+1] == 'X' && game[a-2][b+2] == 'X')))){
        console.log('*** X wins!!! ***');
        return true;
      }
      else if((game[a][b] == 'O' && game[a+1][b] == 'O' && game[a+2][b] == 'O') || (game[a][b] == 'O' && game[a][b+1] == 'O' && game[a][b+2] == 'O') || (game[a][b] == 'O' && game[a+1][b+1] == 'O' && game[a+2][b+2] == 'O') || (a==2 && b==0 && (game[a][b] == 'O' && game[a-1][b+1] == 'O' && game[a-2][b+2] == 'O'))){
        console.log('*** O wins!!! ***');
        val++;
        return true;
      }   
    }
   }
   return false;
}
function printArray(game){
  console.log('  '+1+' '+2+' '+3);
  console.log(1+' '+game[0][0]+' '+game[0][1]+' '+ game[0][2]);
  console.log(2+' '+game[1][0]+' '+game[1][1]+' '+ game[1][2]);
  console.log(3+' '+game[2][0]+' '+game[2][1]+' '+ game[2][2]);
}




let game = [['-','-','-'],['-','-','-'],['-','-','-'],[0,0,0],[0,0,0]];
let val = 0;
console.log('Lets play a game of Tic-Tac-Toe');
let k = 0;
printArray(game);
while(k <= 9){
 let i = prompt('Enter the row of X: ') - 1;
 let j = prompt('Enter the column of X: ') - 1;
 game[i][j] = 'X';

 printArray(game);

 if(checkWinner(game)){
  break;
 }

 let p = prompt('Enter the row of O: ') - 1;
 let q = prompt('Enter the column of O: ') - 1;
 game[p][q] = 'O';

 printArray(game);

 if(checkWinner(game)){
  break;
 }
 k++;
}

