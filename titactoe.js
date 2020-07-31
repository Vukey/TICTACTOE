const board = new Board() //creates the tictactoe board as JS object

startTheGame(board)
/*btn = document.getElementById('reset')
btn.addEventListener('click', endTheGame.bind(event,board))*/

function startTheGame(board){
	board.boxes
	.forEach(elm => elm.addEventListener("click", insertSymbol.bind(event,board), {once: true}));
}

function Board(){
	this.boxes = document.querySelectorAll('.playboard div') // each box in board
	this.turn = 0 // to determine 'O' or 'X'
	this.checkResult = function(){
	this.win = false
		var winningSequence = [
								[0,1,2],
								[0,3,6],
								[1,4,7],
								[2,5,8],
								[3,4,5],
								[6,7,8],
								[0,4,8],
								[2,4,6]
							]
		const boxarray = this.boxes
		winningSequence.forEach(bingo => {
			const testposition1 = boxarray[bingo[0]].innerText
			const testposition2 = boxarray[bingo[1]].innerText
			const testposition3 = boxarray[bingo[2]].innerText
			const winnerDicided = testposition1 != '' && testposition1 === testposition2 && 
				testposition2 === testposition3

			if (winnerDicided){
				bingo.forEach((elm) => {
				boxarray[elm].className = 'winners';
				console.log(boxarray[elm]);
				})

				this.win = true
			}
		});

		return this.win;
	}

}

function insertSymbol(boardObj){

if (event.target.innerText === '' && !boardObj.win){

	if( ++boardObj.turn % 2 === 0 ){
		event.target.innerText = 'X'
		console.log('x printed', boardObj.turn)
	}
	else{
	event.target.innerText = 'O'
	console.log('o printed', boardObj.turn)
	}
	boardObj.checkResult();
	return
}
	console.log('ended bitch', boardObj.turn)
}