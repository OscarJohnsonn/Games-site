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
randomlinks[34]="https://games.o5ange.repl.co/bloonstd/index.html";
randomlinks[35]="https://games.o5ange.repl.co/bloonstd2/index.html";
randomlinks[36]="https://games.o5ange.repl.co/flappy-2048/index.html";
randomlinks[37]="https://games.o5ange.repl.co/jetpack-joyride/index.html";
randomlinks[38]="https://games.o5ange.repl.co/fruitninja/index.html";
randomlinks[39]="https://games.o5ange.repl.co/grindcraft/index.html";
randomlinks[40]="https://games.o5ange.repl.co/rolling-forests/index.html";
randomlinks[41]="https://games.o5ange.repl.co/rolly-vortex/index.html";
randomlinks[42]="https://games.o5ange.repl.co/slime-rush-td/index.html";
randomlinks[43]="https://games.o5ange.repl.co/stack/index.html";
randomlinks[44]="https://games.o5ange.repl.co/swerve/index.html";
randomlinks[45]="https://games.o5ange.repl.co/temple-run-2/index.html";
randomlinks[46]="https://games.o5ange.repl.co/craftmine/index.html";


function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}








const KEY = `ceadeae8-c9b4-4c94-ae1c-aff299b4ae22`;
const NAMESPACE = "WORLD-CUP.o5ange.repl.co";
const COUNT_URL = `https://api.countapi.xyz`;

const counter = document.querySelectorAll('span');

const getCount = async () => {
  const response = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`);
  const data = await response.json();
    setValue(data.value);
};

const incrementCount = async () => {
  const response = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`);
  const data = await response.json();
  setValue(data.value);
};

const setValue = (num) => {
  var str = num.toString().padStart(6, "0");
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    counter[index].innerHTML = element;
  }
};

if (localStorage.getItem("hasVisited") == null) {
  incrementCount()
    .then(() => {
      localStorage.setItem("hasVisited", "true");
    })
    .catch((err) => console.log(err));
} else {
  getCount()
    .catch((err) => console.log(err));
}