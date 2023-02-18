let count=0;
function attack(){
    count=0;
    currentLengthm = document.getElementById("mhealth").value;
    currentLengthy = document.getElementById("yhealth").value;
    currentBattleLog= document.getElementById("battlog").innerHTML;
    if (currentLengthm > 0 && currentLengthy > 0) {
        randomm=Math.round(Math.random()*10);
        randomy = Math.round(Math.random()*10);
        document.getElementById("mhealth").value = currentLengthm-randomm;
        document.getElementById("yhealth").value = currentLengthy-randomy;
        document.getElementById("battlog").innerHTML=(currentBattleLog+"<br>Monster attacks and deal"+(randomm)+"<br>You attack and deal"+(randomy)+"<br>");
    }

    else if(currentLengthm==0 && currentLengthy!=0)  {

       document.getElementById("result").innerHTML=("<br>Game Over! <br>You won!<br>");

    }
    else if(currentLengthy==0 && currentLengthm!=0){
        document.getElementById("result").innerHTML=("<br>Game Over! <br>Monster won!<br>");
    }
    else if(currentLengthy==0 && currentLengthm==0){
        document.getElementById("result").innerHTML=("<br>Game Over! <br>Draw!<br>");
    }
}
function spattack(){
     currentLengthm = document.getElementById("mhealth").value;
    currentLengthy = document.getElementById("yhealth").value;
    currentBattleLog= document.getElementById("battlog").innerHTML;
    /*if(currentLengthy < currentLengthm*0.8){*/
        if (currentLengthm > 0 && currentLengthy > 0) {
            if(currentLengthy < currentLengthm*0.8){
        count=0;
       let random= Math.round(Math.random()*10);
        document.getElementById("mhealth").value = currentLengthm-(Math.round(1.3*random));
        document.getElementById("yhealth").value = currentLengthy-random;
       document.getElementById("battlog").innerHTML=(currentBattleLog+"<br>Monster attacks and deal "+(random)+"<br>You attack and deal "+(Math.round(1.3*random))+"<br>");
      }
    }
    else if(currentLengthm==0 && currentLengthy!=0)  {

        document.getElementById("result").innerHTML=("<br>Game Over! <br>You won!<br>");
 
     }
     else if(currentLengthy==0 && currentLengthm!=0){
         document.getElementById("result").innerHTML=("<br>Game Over! <br>Monster won!<br>");
     }
     else if(currentLengthy==0 && currentLengthm==0){
         document.getElementById("result").innerHTML=("<br>Game Over! <br>Draw!<br>");
     }
   // }
    else{
        alert("You health is not less than the monster's health by 20%");
    }
}
function heal(){
    currentLengthm = document.getElementById("mhealth").value;
    currentLengthy = document.getElementById("yhealth").value;
    currentBattleLog= document.getElementById("battlog").innerHTML;
   if(count<3){
    if (currentLengthm > 0 && currentLengthy !=100) {
        let random= Math.round(Math.random()*10);
         document.getElementById("mhealth").value = currentLengthm+random;
         document.getElementById("yhealth").value = currentLengthy+(random*1.3);
        document.getElementById("battlog").innerHTML=(currentBattleLog+"<br>Monster heals and deal "+(random)+"<br>You heal and deal "+(Math.round(random*1.2))+"<br>");
     }
    }
    else{
        alert("You can't use the heal button 3 times sequentialy!");
    }
    count++;
}
function giveup(){
    document.getElementById("result").innerHTML=("<br>You gave up! <br>Monster win!<br>")
}