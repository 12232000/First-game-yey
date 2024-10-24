//Dom 무엇인가요? web huudas achaallahad browser dotor vvsdeg .
//html tag bolgond haryalagdh objectiig Dom dotr vvsgene.
//     <div class="player-score" id="score-0">43</div>
//document.querySelector('#score-0').textContent = dice;
//window dotr doc elmnt bga. doc dotr domin elmtig search hiideg function bdg .
// ter ni queryselecter .haih gej bga zvilee id gar ni haij  olj boln
//textContent = dotrh ni utguudad ni handahin tuld ashigln.
//document.querySelector('#score-1').innerHTML= '<em>hi<em>';
//Event 무엇인가요? ene ni mini oilgosnoor web page der ymr neg vildel hiigdsle gj browseros js code nd medegddg process.
//click hiigdle scroll etc. Event listenr buyu evenet bolowsruulagch ter evetee hvleej avd hariu vildel hideg js derh mini bichsn function yum 
// Callback function : A functioni argumentru B functiong damjuuly. A ni dotroo B functiong duudj ajiluuln , ene tohioldod B function g Callback Function gene .
//ooroor helvel dara duudagdhaar damjuulagdsn function yum.
//Anonymous function : function ii argumentru ni Nergv func shuud biched damjuulj boldg . iim nergvi functiong Anonymous gej nerlene

//document.getElementById : elemt id gaar ni haij olno 
// js oor paralelar ajillhd tohiromjgv cause single threaded 
//togloomin bvh gazrat use hiigdh global huvisagchdiig end zarlay
var ActivePlayer;
var Score;//2 toglochiin tsugluulsn ono
var roundScore;//online toglogchiin tsugliilj bga eeljin onoo 
//togloom duussn esehiig shalgah toloviin huvisagch


var diceDom = document.querySelector('.dice');
diceDom.style.display='none';

//shoo shideh eventlistenr
document.querySelector('.btn-roll').addEventListener('click', function (){
    
    
    //1-6 dotrh toog sanamsrgv gargj irn
    var diceNumber = Math.floor(Math.random()*6)+1;
    //dice pic gargj irn 
    diceDom.style.display='block';
    //buusn shooni toog gargj irn 
diceDom.src= 'dice-' + diceNumber + '.png';

// eeljiin  onoog change hih 
if(diceNumber !== 1 )
{
    roundScore= roundScore + diceNumber;
    document.getElementById('current-' + ActivePlayer).textContent= roundScore;
    //1 es ylgatai bhin bol buusn toog toglogchid nemj ogy

    
}else{
    //1 buusn tul toglogchiin eeljig solin
    // herve online toglolgch ni  0 bvl idevhte toglogchiig 1 bolgoroi. no bol online toglogchig 0 bolgoroi

ActivePlayer === 0 ? (ActivePlayer =1 ) : (ActivePlayer=0);

document.getElementById('current-'+ ActivePlayer).textContent= 0;
//red tsegig shiljvvlya
document.querySelector('.player-0-panel').classList.toggle('active');//toggle ni bvl hasn bhgv bol nemdg
document.querySelector('.player-1-panel').classList.toggle('active');
//shoog tvr alga bolgono
diceDom.style.display='none';
}

//hold buttoni eventlistner 
document
.querySelector('.btn-hold').addEventListener('click', function(){
    //tovch darsn toglolgchiin eeljiin onog global onoon  der ni nemj ogn 
    Score[ActivePlayer]= Score[ActivePlayer]+ roundScore;
    // delgets der onoog ni oorhiln 
    document.getElementById('score-'+ ActivePlayer).textContent=Score[ActivePlayer];
    roundScore=0;
    document.getElementById('current-'+ActivePlayer).textContent=0;
    switchToNextPlayer();
    //toglogch hojson esehiig shalgah
    if(Score[ActivePlayer] >=10){
        //nerni orond wiiner 
        document.getElementById('name-'+ ActivePlayer).textContent='Winner';
        document.querySelector('.player-'+ ActivePlayer+'-panel').classList.add('Winner');
    }else{
        // switchToNextPlayer();
    }
    
})
//togloh eeljiig draagin hvnlv chiglvvln 

// switchToNextPlayer();
function switchToNextPlayer(){
    roundScore= 0;
    document.getElementById('current-'+ActivePlayer).textContent=0;
    ActivePlayer ===0 ? (ActivePlayer=1) : (ActivePlayer=0);
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
diceDom.style.display='none';

}
} );
//new game ehlvvlh 
document.querySelector('.btn-new').addEventListener('click' , function(){
   Score=[0,0];
   roundScore=0;
   ActivePlayer=0;

})
function initGame(){

isGameOver=false;

     ActivePlayer = 0;
 Score =[0, 0];
 roundScore= 0;
var diceNumber =  Math.floor(Math.random() * 6 + 1);

//ehlehed beldya
document.getElementById("score-0").textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
}