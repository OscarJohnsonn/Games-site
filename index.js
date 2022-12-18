
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
  console.log("hi me")
    .then(() => {
      localStorage.setItem("hasVisited", "true");
    })
    .catch((err) => console.log(err));
} else {
  getCount()
    .catch((err) => console.log(err));
}

function password(){
const username=prompt("Please input your username:");
            if(username=="O5ANGE"){
                        const password=prompt("Please input your password:");
                        if(password=="sym"){
                                    alert("Access Granted");
                                    window.location="https://DEFINITELY-NOT-A-PROXY-server-priv.o5ange.repl.co";
                        }
                        else{
                                    alert("The password you inputed was incorrect");
                                    window.location="/index.html";
                        }
            }
            else{
                        alert("Access Denied!!");
                        window.location="/index.html";
            }
}
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

function changebackground() {
  var element1 = document.body;
  var element2 = document.body.togglebg;
  element1.classList.toggle("dark-mode");;
  element2.classList.toggle("dark-mode");;
}



function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
