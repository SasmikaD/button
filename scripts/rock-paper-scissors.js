            let score = JSON.parse(localStorage.getItem('score')) || {
                    wins: 0,
                    losses: 0,
                    ties:0
                };
                
            updateScore();
            
            function playGame(playerMove){
                const computerChoice = pickComputerChoice();
 
                let result = '';
            
                if (playerMove === 'scissors') {
                    if (computerChoice === 'rock'){
                        result = 'You lose.';
                        score.losses++;
                    }   else if (computerChoice === 'paper'){
                        result = 'You win.';
                        score.wins++;
                    }   else if (computerChoice === 'scissors'){
                        result = 'Tie.';
                        score.ties++;
                    }
                } else if (playerMove === 'paper') {
                    if (computerChoice === 'rock'){
                        result = 'You win.';
                        score.wins++;
                    }   else if (computerChoice === 'paper'){
                        result = 'Tie.';
                        score.ties++;
                    }   else if (computerChoice === 'scissors'){
                        result = 'You lose.';
                        score.losses++;
                    }
                } else if (playerMove === 'rock') {
                    if (computerChoice === 'rock'){
                        result = 'Tie.';
                        score.ties++;
                    }   else if (computerChoice === 'paper'){
                        result = 'You lose.';
                        score.losses++;
                    }   else if (computerChoice === 'scissors'){
                        result = 'You win.';
                        score.wins++;
                    }
                }
                
                localStorage.setItem('score', JSON.stringify(score));
                
                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-moves').innerHTML = `You
		<img src="images/${playerMove}-emoji.png" class="moves-small-icon">  <img src="images/${computerChoice}-emoji.png" class="moves-small-icon">
		Computer`;
                updateScore();
            }
            
            function updateScore(){
                document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }
            function pickComputerChoice(){
                let computerChoice = '';
                const randomNumber = Math.random();
                if (randomNumber >= 0 && randomNumber < 0.3333333) {
                    computerChoice = 'rock';
                } else if (randomNumber >= 1/3 && randomNumber < 2/3){
                    computerChoice = 'paper';
                } else if (randomNumber >= 2/3 && randomNumber < 1){
                    computerChoice = 'scissors';
                } 
                
                return computerChoice;
            }