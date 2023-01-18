const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("channel-link");

var randomlinks = [];
randomlinks[0]="https://towergame.app/";
randomlinks[1]="https://playcanv.as/p/2OlkUaxF/";
randomlinks[2]="https://g.co/kgs/iwDTNi";
randomlinks[3]="https://doodlecricket.github.io/#/";
randomlinks[4]="https://bsehovac.github.io/the-cube/";
randomlinks[5]="https://hextris.io/";
randomlinks[6]="https://wits.github.io/regretris/";
randomlinks[7]="https://www.mathsisfun.com/games/ninja/bottle/";
randomlinks[8]="https://bubblepairs.apps.in.rs/";
randomlinks[9]="https://proxx.app/";
randomlinks[10]="https://weslleyaraujo.github.io/react-simon-says/";
randomlinks[11]="https://0x0800.github.io/2048-CUPCAKES/";
randomlinks[12]="https://bongo.cat/";
randomlinks[13]="https://sandspiel.club/";
randomlinks[14]="https://fidgetspin.xyz/";
randomlinks[15]="https://pillarvalley.netlify.app/";
randomlinks[16]="https://crossyroad.netlify.app/";
randomlinks[17]="https://than1089.github.io/adventure-capitalist/";
randomlinks[18]="https://geogee.me/";
randomlinks[19]="https://gradient-match-10334491.firebaseapp.com/?mode=standalone";
randomlinks[20]="https://photo-pieces.vercel.app/index.html";
randomlinks[21]="https://cstimer.net/";
randomlinks[22]="https://towergame.app";
randomlinks[23]="https://kylesureline.com/hangapp/#/";
randomlinks[24]="https://tmaiadev-tictactoe.netlify.app/";
randomlinks[25]="https://littlealchemy2.com/";
randomlinks[26]="https://expensive.toys/mandala/";
randomlinks[27]="https://8ball-poolgame.com/wp-content/uploads/nas/8-ball-pool-mobile/";
randomlinks[28]="https://8ball-poolgame.com/wp-content/uploads/nas/tanuki-sunset";
randomlinks[29]="hexgl.bkcore.com/play/";
randomlinks[30]="https://duckhuntjs.com/";
randomlinks[31]="https://bitlife.o5ange.repl.co";
randomlinks[32]="https://yell0wsuit.page/html5-games/CutTheRope/";
randomlinks[33]="https://myunlockedcontent.com/ss_seoul/index.html";
randomlinks[34]="https://games.dnap.ml/bloonstd/index.html";
randomlinks[35]="https://games.dnap.ml/bloonstd2/index.html";
randomlinks[36]="https://games.dnap.ml/flappy-2048/index.html";
randomlinks[37]="https://games.dnap.ml/jetpack-joyride/index.html";
randomlinks[38]="https://games.dnap.ml/fruitninja/index.html";
randomlinks[39]="https://games.dnap.ml/grindcraft/index.html";
randomlinks[40]="https://games.dnap.ml/rolling-forests/index.html";
randomlinks[41]="https://games.dnap.ml/rolly-vortex/index.html";
randomlinks[42]="https://games.dnap.ml/slime-rush-td/index.html";
randomlinks[43]="https://games.dnap.ml/stack/index.html";
randomlinks[44]="https://games.dnap.ml/swerve/index.html";
randomlinks[45]="https://games.dnap.ml/temple-run-2/index.html";
randomlinks[46]="https://games.dnap.ml/craftmine/index.html";
randomlinks[47]="https://trinculo54.github.io/Boxel-rebound-hope/Older/";


function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}