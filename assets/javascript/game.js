window.onload = function () {

	var score = 0;
	var wins = 0;
	var losses = 0;
	var crystals = [0,0,0,0];

	function checkScore(){
		if (score == randNum){
			alert("Yay! You won! Let's play again!");
			wins += 1;
			score = 0;
			randomNumbers();
			displayScore();
		}
		if (score > randNum){
			alert("Sorry! You lose. Let's play again!");
			losses += 1;
			score = 0;
			randomNumbers();
			displayScore();
		}
	};

	function displayScore(){
		$("#scoreKeeper").html("Wins: "+wins+"<br>Losses: "+losses);
		$("#totalScore").html(score);
	};

	function randomNumbers(){
		randNum = Math.floor(Math.random()*(120-19)+19)
		$("#crystalNumber").text(randNum);

		for (var i=0;i<crystals.length;i++){
			randCrystal = Math.floor(Math.random()*(12-1)+1);
			crystals[i] = randCrystal;
		}
	};

	randomNumbers();
	displayScore();

	$("#crystalOne").on("click", function(event){
		score += crystals[0];
		displayScore();
		checkScore();
	});
	$("#crystalTwo").on("click", function(event){
		score += crystals[1];
		displayScore();
		checkScore();
	});
	$("#crystalThree").on("click", function(event){
		score += crystals[2];
		displayScore();
		checkScore();
	});
	$("#crystalFour").on("click", function(event){
		score += crystals[3];
		displayScore();
		checkScore();
	});
};