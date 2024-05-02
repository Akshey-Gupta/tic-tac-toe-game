console.log("Welcome to Tic-tac-toe")
let bgmusic=new Audio("music.mp3")
let turnmusic=new Audio('ting.mp3')
let gameovermusic=new Audio('gameover.mp3')
var cross = document.createElement('img');
cross.src = 'svgs/circle.svg';
let turn="X"
let gameover=false

const changeTurn=()=>{
    return turn==="X"?"0":"X"
}

const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext')
    let wins=[ [0,1,2,0,4.5,0], [3,4,5,0,15,0], [6,7,8,0,25,0],
                [0,3,6,-10,15,90],[1,4,7,0,15,90],[2,5,8,10,15,90],
                [0,4,8,0,15,45],[2,4,6,0,15,-45] ]
                wins.forEach(e=>{
                   if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText===boxtexts[e[2]].innerText) &&(boxtexts[e[0]].innerText!=='') &&(boxtexts[e[1]].innerText!=='') &&(boxtexts[e[2]].innerText!=='')){
                   document.querySelector('.info').innerText=boxtexts[e[0]].innerText+"  Won"
                    gameover=true;
                    
                    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
                    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.opacity = "1";
                    document.querySelector(".line").style.transform=` translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                    document.querySelector('.line').style.width="30vw"
                    document.querySelector('.line').style.height="2px"
                }
                })
}

//Main Logic
bgmusic.volume = 1.0; // Set initial volume to 100%

document.addEventListener('DOMContentLoaded', () => {
    let bgmusic = document.getElementById('bgmusic');
    let volumeControl = document.getElementById('volumeControl');

    // Set initial volume based on the input value
    bgmusic.volume = volumeControl.value;

    // Update volume when the user adjusts the slider
    volumeControl.addEventListener('input', () => {
        bgmusic.volume = volumeControl.value;
        updateVolumeDisplay(volumeControl.value);
    });

    // Play the audio
    bgmusic.play();
});

function updateVolumeDisplay(volume) {
    let musicVolumeDiv = document.getElementById('musicVolume');
    musicVolumeDiv.innerText = `Volume: ${Math.round(volume * 100)}%`;
}
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn
            turn=changeTurn()
            turnmusic.play()
            checkWin()
            if(gameover===false){
            document.getElementsByClassName('info')[0].innerText='Turn for   '+turn;}
        }
    })
})

reset=document.getElementById('reset')
reset.addEventListener('click',()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=''
    })
    turn='X'
    gameover=false
    if(gameover===false){
        document.getElementsByClassName('info')[0].innerText='Turn for   '+turn;}
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.opacity = "0";
        document.querySelector('.line').style.width="0vw"
        document.querySelector('.line').style.width="0px"
})