
function Bat() {
    let comChoice= Math.random()*3;
    let ComputerChoice = '';
    if(comChoice>'0' && comChoice <='1'){
    ComputerChoice = 'Bat' ;
}else if (comChoice>'1' && comChoice <='2'){
   ComputerChoice = 'Ball';
}else{ComputerChoice =  'Stump' }

result = '';
if(ComputerChoice === 'Bat'){
    result ='Match Dra';
}else if (ComputerChoice === 'Ball'){
    result ='You Won';
}else{
    result ='Computer Won';
}
console.log(document.getElementById('Display').innerHTML
=`Your Choice Bat and Computer Choice ${ComputerChoice}= ${result}`);
    
}


function Ball() {
    let comChoice= Math.random()*3;
    let ComputerChoice = '';
    if(comChoice>'0' && comChoice <='1'){
    ComputerChoice = 'Bat' ;
}else if (comChoice>'1' && comChoice <='2'){
   ComputerChoice = 'Ball';
}else{ComputerChoice =  'Stump' }

result = '';
if(ComputerChoice === 'Ball'){
    result ='Match Dra';
}else if (ComputerChoice === 'Bat'){
    result ='Computer Won';
}else{
    result ='You Won';
}
 console.log(document.getElementById('Display').innerHTML
 =`Your Choice Ball and Computer Choice ${ComputerChoice} = ${result}`);
    
}

function Stump() {
    let comChoice= Math.random()*3;
    let ComputerChoice = '';
    if(comChoice>'0' && comChoice <='1'){
    ComputerChoice = 'Bat' ;
}else if (comChoice>'1' && comChoice <='2'){
   ComputerChoice = 'Ball';
}else{ComputerChoice =  'Stump' }

result = '';
if(ComputerChoice === 'Stump'){
    result ='Match Dra';
}else if (ComputerChoice === 'Bat'){
    result ='Computer Won';
}else{
    result ='Computer Won';
}
 
 console.log(document.getElementById('Display').innerHTML
 =`Your Choice Stump and Computer Choice ${ComputerChoice}= ${result}`); 
}

