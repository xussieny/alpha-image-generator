let ears = document.getElementById("ears");
let hair = document.getElementById("hair");
let neck = document.getElementById("neck");
let eyes = document.getElementById("eyes");
let mouth = document.getElementById("mouth");
let leg = document.getElementById("leg");
let acce = document.getElementById("acce");
let background = document.getElementById("background");
let parts = document.getElementById("parts");
let types = document.getElementById("types");

letTempHair = "default";

let partsBtn = [
  { class: "btn", value: "hair", content: "Hair" },
  { class: "btn", value: "ears", content: "Ears" },
  { class: "btn", value: "eyes", content: "Eyes" },
  { class: "btn", value: "mouth", content: "Mouth" },
  { class: "btn", value: "neck", content: "Neck" },
  { class: "btn", value: "leg", content: "Leg" },
  { class: "btn", value: "acce", content: "Accessories" },
  { class: "btn", value: "background", content: "Background" },
];

let earBtn =[
    { class: "btn", value: "default", content: "Default" },
  { class: "btn", value: "tilt-backward", content: "Backward" },
  { class: "btn", value: "tilt-forward", content: "Forward" }
]

let hairBtn = [
  { class: "btn", value: "bang", content: "Bang" },
  { class: "btn", value: "curls", content: "Curls" },
  { class: "btn", value: "default", content: "Default" },
  { class: "btn", value: "elegant", content: "Elegant" },
  { class: "btn", value: "fancy", content: "Fancy" },
  { class: "btn", value: "quiff", content: "Quiff" },
  { class: "btn", value: "short", content: "Short" },
];

let acceBtn = [
  { class: "btn", value: "earings", content: "Earings" },
  { class: "btn", value: "flower", content: "Flower" },
  { class: "btn", value: "glasses", content: "Glasses" },
  { class: "btn", value: "headphone", content: "Headphone" },
];

let eyesBtn = [
    { class: "btn", value: "angry", content: "Angry" },
    { class: "btn", value: "default", content: "Default" },
    { class: "btn", value: "naughty", content: "Naughty" },
    { class: "btn", value: "panda", content: "Panda" },
    { class: "btn", value: "smart", content: "Smart" },
    { class: "btn", value: "star", content: "Star" }

];

let backgroundBtn = [
  { class: "btn", value: "blue50", content: "Blue 50" },
  { class: "btn", value: "blue60", content: "Blue 60" },
  { class: "btn", value: "blue70", content: "Blue 70" },
  { class: "btn", value: "darkblue30", content: "Dark Blue 30" },
  { class: "btn", value: "darkblue50", content: "Dark Blue 50" },
  { class: "btn", value: "darkblue70", content: "Dark Blue 70" },
  { class: "btn", value: "green50", content: "Green 50" },
  { class: "btn", value: "green60", content: "Green 60" },
  { class: "btn", value: "green70", content: "Green 70" },
  { class: "btn", value: "grey40", content: "Grey 40" },
  { class: "btn", value: "grey70", content: "Grey 70" },
  { class: "btn", value: "grey80", content: "Grey 80" },
  { class: "btn", value: "red50", content: "Red 50" },
  { class: "btn", value: "red60", content: "Red 60" },
  { class: "btn", value: "red70", content: "Red 70" },
  { class: "btn", value: "yellow50", content: "Yellow 50" },
  { class: "btn", value: "yellow60", content: "Yellow 60" },
  { class: "btn", value: "yellow70", content: "Yellow 70" },
];

let legBtn = [
    { class: "btn", value: "bubble-tea", content: "Bubble Tea" },
    { class: "btn", value: "default", content: "Default" },
    { class: "btn", value: "game-console", content: "Game Console" },
    { class: "btn", value: "tilt-backward", content: "Backward" },
    { class: "btn", value: "tilt-forward", content: "Forward" }

];

let neckBtn = [

    { class: "btn", value: "bend-backward", content: "Backward" },
    { class: "btn", value: "default", content: "Default" },
    { class: "btn", value: "thick", content: "Thick" },
    { class: "btn", value: "bend-forward", content: "Forward" }
   

]

let mouthBtn = [

    { class: "btn", value: "astonished", content: "Astonished" },
    { class: "btn", value: "default", content: "Default" },
    { class: "btn", value: "eating", content: "Eating" },
    { class: "btn", value: "laugh", content: "Laugh" },
    { class: "btn", value: "tongue", content: "Tongue" }
    
   

]

const bgCheck = [
  "blue50",
  "blue60",
  "blue70",
  "darkblue30",
  "darkblue50",
  "darkblue70",
  "green50",
  "green60",
  "green70",
  "grey40",
  "grey70",
  "grey80",
  "red50",
  "red60",
  "red70",
  "yellow50",
  "yellow60",
  "yellow70",
];

function handelHair() {
  hairBtn.forEach((e) => {
    console.log(e);
    const node = document.createElement("button");
    node.classList.add(e.class);
    node.value = e.value;
    node.innerText = e.content;
    types.appendChild(node);
  });

  let BtnArray = document.getElementsByClassName("btn");

  const imgSrc = document.getElementById("hair");

  Array.from(BtnArray).forEach((e) => {
    e.addEventListener("click", (ele) => {
      if (
        ele.target.value == "bang" ||
        ele.target.value == "curls" ||
        ele.target.value == "default" ||
        ele.target.value == "elegant" ||
        ele.target.value == "fancy" ||
        ele.target.value == "quiff" ||
        ele.target.value == "short"
      )
        imgSrc.src = `/alpaca/hair/${ele.target.value}.png`;
    });
  });
}

function handelAcce() {
    acceBtn.forEach((e) => {
      console.log(e);
      const node = document.createElement("button");
      node.classList.add(e.class);
      node.value = e.value;
      node.innerText = e.content;
      types.appendChild(node);
    });
  
    let BtnArray = document.getElementsByClassName("btn");
  
    const imgSrc = document.getElementById("acce");
  
    Array.from(BtnArray).forEach((e) => {
      e.addEventListener("click", (ele) => {
        if (
          ele.target.value == "earings" ||
          ele.target.value == "flower" ||
          ele.target.value == "glasses" ||
          ele.target.value == "headphone" 
        )
          imgSrc.src = `/alpaca/accessories/${ele.target.value}.png`;
      });
    });
}

function handelBackground() {
  backgroundBtn.forEach((e) => {
    console.log(e);
    const node = document.createElement("button");
    node.classList.add(e.class);
    node.value = e.value;
    node.innerText = e.content;
    types.appendChild(node);
  });

  let BtnArray = document.getElementsByClassName("btn");

  const imgSrc = document.getElementById("background");

  Array.from(BtnArray).forEach((e) => {
    e.addEventListener("click", (ele) => {
      let cnt = 0;
      bgCheck.map((e) => {
        if (e == ele.target.value) {
          cnt++;
        }
      });

      if (cnt >= 1) {
        imgSrc.src = `/alpaca/backgrounds/${ele.target.value}.png`;
      }
    });
  });
}

function handelEars() {
    earBtn.forEach((e) => {
      console.log(e);
      const node = document.createElement("button");
      node.classList.add(e.class);
      node.value = e.value;
      node.innerText = e.content;
      types.appendChild(node);
    });
  
    let BtnArray = document.getElementsByClassName("btn");
  
    const imgSrc = document.getElementById("ears");
  
    Array.from(BtnArray).forEach((e) => {
      e.addEventListener("click", (ele) => {
        let cnt = 0;
        
  
        if (ele.target.value=='default' || ele.target.value=='tilt-backward' || ele.target.value=='tilt-forward') {
          imgSrc.src = `/alpaca/ears/${ele.target.value}.png`;
        }
      });
    });
}

function handelEyes() {
    eyesBtn.forEach((e) => {
      console.log(e);
      const node = document.createElement("button");
      node.classList.add(e.class);
      node.value = e.value;
      node.innerText = e.content;
      types.appendChild(node);
    });
  
    let BtnArray = document.getElementsByClassName("btn");
  
    const imgSrc = document.getElementById("eyes");
  
    Array.from(BtnArray).forEach((e) => {
      e.addEventListener("click", (ele) => {
        let cnt = 0;
        
  
        if (ele.target.value=='angry' || ele.target.value=='default' || ele.target.value=='naughty' || ele.target.value=='panda' || ele.target.value=='smart' || ele.target.value=='star') {
          imgSrc.src = `/alpaca/eyes/${ele.target.value}.png`;
        }
      });
    });
}

function handelLeg() {
    legBtn.forEach((e) => {
      console.log(e);
      const node = document.createElement("button");
      node.classList.add(e.class);
      node.value = e.value;
      node.innerText = e.content;
      types.appendChild(node);
    });
  
    let BtnArray = document.getElementsByClassName("btn");
  
    const imgSrc = document.getElementById("leg");
  
    Array.from(BtnArray).forEach((e) => {
      e.addEventListener("click", (ele) => {
        let cnt = 0;
        
  
        if (ele.target.value=='bubble-tea' || ele.target.value=='default' || ele.target.value=='game-console' || ele.target.value=='tilt-backward' || ele.target.value=='tilt-forward') {
          imgSrc.src = `/alpaca/leg/${ele.target.value}.png`;
        }
      });
    });
}

function handelNeck() {
   neckBtn.forEach((e) => {
      console.log(e);
      const node = document.createElement("button");
      node.classList.add(e.class);
      node.value = e.value;
      node.innerText = e.content;
      types.appendChild(node);
    });
  
    let BtnArray = document.getElementsByClassName("btn");
  
    const imgSrc = document.getElementById("neck");
  
    Array.from(BtnArray).forEach((e) => {
      e.addEventListener("click", (ele) => {
        let cnt = 0;
        
  
        if (ele.target.value=='bend-forward' || ele.target.value=='default' || ele.target.value=='thick' || ele.target.value=='bend-backward') {
          imgSrc.src = `/alpaca/neck/${ele.target.value}.png`;
        }
      });
    });
}

function handelMouth() {
    mouthBtn.forEach((e) => {
       console.log(e);
       const node = document.createElement("button");
       node.classList.add(e.class);
       node.value = e.value;
       node.innerText = e.content;
       types.appendChild(node);
     });
   
     let BtnArray = document.getElementsByClassName("btn");
   
     const imgSrc = document.getElementById("mouth");
   
     Array.from(BtnArray).forEach((e) => {
       e.addEventListener("click", (ele) => {
         let cnt = 0;
         
   
         if (ele.target.value=='astonished' || ele.target.value=='default' || ele.target.value=='eating' || ele.target.value=='laugh' || ele.target.value=='tongue') {
           imgSrc.src = `/alpaca/mouth/${ele.target.value}.png`;
         }
       });
     });
}

function handelAction(e){

    const actionToTakePlace = e.target.value;

    if(actionToTakePlace=='random')
    {
        const hairNumber= Math.floor(Math.random() * hairBtn.length-1);
        hair.src=`/alpaca/hair/${hairBtn[hairNumber].value}.png`

        const acceNumber= Math.floor(Math.random() * acceBtn.length-1);
        acce.src=`/alpaca/accessories/${acceBtn[acceNumber].value}.png`

        const backgroundNumber= Math.floor(Math.random() * backgroundBtn.length-1);
        background.src=`/alpaca/backgrounds/${backgroundBtn[backgroundNumber].value}.png`

        const earsNumber= Math.floor(Math.random() * earBtn.length-1);
        ears.src=`/alpaca/ears/${earBtn[earsNumber].value}.png`

        const eyesNumber= Math.floor(Math.random() * eyesBtn.length-1);
        eyes.src=`/alpaca/eyes/${eyesBtn[eyesNumber].value}.png`

        const legNumber= Math.floor(Math.random() * legBtn.length-1);
        leg.src=`/alpaca/leg/${legBtn[legNumber].value}.png`

        const mouthNumber= Math.floor(Math.random() * mouthBtn.length-1);
        mouth.src=`/alpaca/mouth/${mouthBtn[mouthNumber].value}.png`

        const neckNumber= Math.floor(Math.random() * neckBtn.length-1);
        neck.src=`/alpaca/neck/${neckBtn[neckNumber].value}.png`


        

    }else if(actionToTakePlace=='download')
    {
        const element = document.getElementById('imageContainer');
            
            
            html2canvas(element).then(canvas => {
                
                const imageURL = canvas.toDataURL('image/png');
                
                
                const link = document.createElement('a');
                link.href = imageURL;
                link.download = 'alpaca-image.png';
                link.click();
            });
    }

}

partsBtn.forEach((e) => {
  console.log(e);
  const node = document.createElement("button");
  node.classList.add(e.class);
  node.value = e.value;
  node.innerText = e.content;
  parts.appendChild(node);
});



const buttons = document.getElementsByClassName("btn");

const actionBtn=document.getElementsByClassName("action-btn");

Array.from(actionBtn).forEach((e)=>{

    e.addEventListener('click' ,handelAction);
})


Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnValue = e.target.value;
    console.log(e.target.value);

    if (btnValue == "hair") {
      types.innerHTML = "";
      handelHair();
    } else if (btnValue == "background") {
      types.innerHTML = "";
      handelBackground();
    } else if(btnValue=="acce")
    {
        types.innerHTML = "";
        handelAcce();

    }else if (btnValue=="ears")
    {
        types.innerHTML = "";
        handelEars();
    }else if(btnValue=="eyes")
    {
        types.innerHTML = "";
        handelEyes();

    }else if(btnValue == 'leg')
    {
        types.innerHTML = "";
        handelLeg();
    }else if(btnValue=="neck")
    {
        types.innerHTML = "";
        handelNeck();
    }else if (btnValue=='mouth')
    {
        types.innerHTML = "";
        handelMouth();
    }

  });
});
