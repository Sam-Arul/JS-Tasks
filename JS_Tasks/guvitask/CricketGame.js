class player{
    constructor(){
        this.individualScore =0;
        this.individualBallCount=0;
    }
}

function display(runsA, playerScoreA, teamScoreA, wicketsA, ballsA, battid, playerScoreid, teamScoreid, wicketsid, ballsid){
    document.getElementById(battid).value = runsA;
    document.getElementById(playerScoreid).value = playerScoreA;
    document.getElementById(teamScoreid).value = teamScoreA;
    document.getElementById(wicketsid).value = wicketsA;
    document.getElementById(ballsid).value = ballsA;
} 
let flag = 0; 
let resulFlag = 0;       

class team{
    constructor(){
        this.players = new player();
        this.ballCount = 0;
        this.teamScore = 0;
        this.playerCount = 0;
        this.hasPlayerFinished = false;
    }
   
    battingTeam = function(battid, playerScoreid, teamScoreid, wicketsid, ballsid){
        if(this.playerCount <= 11 && this.ballCount < 30 && this.players.individualBallCount < 6){
            var bat = Math.floor(Math.random()*7);
            if(bat == 0){
                this.playerCount++;
                this.ballCount++;
                this.players.individualBallCount = 0;
                this.players.individualScore = 0;
                display(bat, this.players.individualScore, this.teamScore, this.playerCount, 30-this.ballCount,battid, playerScoreid, teamScoreid, wicketsid, ballsid);
            }
            else{
                this.ballCount++;
                this.players.individualScore += bat;
                this.players.individualBallCount ++;
                this.teamScore += bat;
                display(bat, this.players.individualScore, this.teamScore, this.playerCount, 30-this.ballCount,battid, playerScoreid, teamScoreid, wicketsid, ballsid);
                if(this.players.individualBallCount == 6){
                    this.players.individualBallCount = 0;
                    this.players.individualScore = 0;
                    this.playerCount++;
                    alert("Ball limit over");
                    display(bat, this.players.individualScore, this.teamScore, this.playerCount, 30-this.ballCount,battid, playerScoreid, teamScoreid, wicketsid, ballsid);
                }
                
            }
        }
        else{
            flag +=1;
            display(bat, this.players.individualScore, this.teamScore, this.playerCount, 30-this.ballCount,battid, playerScoreid, teamScoreid, wicketsid, ballsid);
            this.hasPlayerFinished = true;
            
        }
        
    
    }



}

let a = new team();
let b = new team();


function clickTeamA(bat, playerScore, teamScore, wickets, balls){
    a.battingTeam(bat, playerScore, teamScore, wickets, balls);
}

function clickTeamB(bat, playerScore, teamScore, wickets, balls){
    if(flag >= 1){
        b.battingTeam(bat, playerScore, teamScore, wickets, balls);
    }
    else{
        alert("Team A has not finished batting");
    }
    if(b.hasPlayerFinished == true){
        if(b.teamScore > a.teamScore){
            let result = localStorage.setItem("team","Team B Won by");
            let score = localStorage.setItem("score", b.teamScore-a.teamScore);
        }
        else{
            let result = localStorage.setItem("team","Team A Won by");
            let score = localStorage.setItem("score", a.teamScore-b.teamScore);
        }
        window.open("winner.html");
    }
}