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
//togloomin bvh gazart use hiigdh global huvisagchdiig end zarla naachi
var activePlayer = 0;

// tsugluulsn onoog saveleh 
var score= [0,0];

//toglogchiin eeljinde togolj bga onoog saveleh huvisagch 
var roundScore = 0;

var diceNumber = Math.floor(Math.random() * 6) + 1 ;
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent ='0';
document.getAnimations('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

var diceDom =document.querySelector('.dice');
diceDom.style.display='none';

 document.querySelector('.btn-roll').addEventListener('click' ,  function (){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
   document.querySelector('.dice').style.display= 'block';
   document.querySelector('.dice').src ='dice-' + diceNumber + '.png' ;
   if(diceNumber !== 1){
roundScore= roundScore + diceNumber;
document.getElementById('current-' + activePlayer).textContent= roundScore;
   }else {

      roundScore=0;
      document.getElementById('current-' + activePlayer).textContent = 0;
activePlayer === 0 ? (activePlayer =1) : (activePlayer=0) ;

document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

diceDom.style.display='none';



   }
 })

 

 

