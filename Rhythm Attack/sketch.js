const ActiveScreen = {
  StartScreen: 0,
  GS1: 1,
  GS2: 2,
  GS3: 3,
  GS4: 4,
  GS5: 5,
  InterScreen: 6,
  WinScreen: 7,
  LoseScreen: 8,
}
 
let AS = ActiveScreen.StartScreen;
let PriorLevel = 1
let CurrentLevel = 0
let retroFont;
let LV1song;
let LV2song;
let LV3song;
let LV4song;
let LV5song;
let score = 0;
let M_score = 0;
let crtimg
let L_ArrowImg
let U_ArrowImg
let D_ArrowImg
let R_ArrowImg
var lY = 0;
var uY = 0;
var dY = 0;
var rY = 0;
  
function preload(){    
  crtimg = loadImage("Image Files/CRT effect.png")
  L_ArrowImg = loadImage("Image Files/LeftArrow.png")
  U_ArrowImg = loadImage("Image Files/UpArrow.png")
  D_ArrowImg = loadImage("Image Files/DownArrow.png")
  R_ArrowImg = loadImage("Image Files/RightArrow.png")
  retroFont = loadFont("Fonts/Minecraft.ttf")
  LV1song = loadSound("Audio files/Level 1.wav")
  LV2song = loadSound("Audio files/Level 2.wav")
  LV3song = loadSound("Audio files/Level 3.wav")
  LV4song = loadSound("Audio files/Level 4.wav")
  LV5song = loadSound("Audio files/Level 5.wav")
}
  
function setup(){
  createCanvas(600, 1130);
  rectMode(CENTER);
  textSize(32)
} 

function cleanslate() {
  AS = ActiveScreen.InterScreen
  LV1song.stop()
  LV2song.stop()
  LV3song.stop()
  LV4song.stop()
  LV5song.stop()
  score = 0
  M_score = 0
  CurrentLevel = CurrentLevel + 1
}

function keyPressed() {
  // Handles characters inputs
  if (keyCode === LEFT_ARROW && lY > 950 || key == 'd' && lY > 950) {
    score = score + 25;
    if (score > 99*CurrentLevel) {
      cleanslate();
    }
  } else if (keyCode === LEFT_ARROW && lY < 950 || key == 'd' && lY < 950) {
    M_score = M_score + 1
    if (M_score > 9) {
      AS = ActiveScreen.LoseScreen
    }
  } else if (key == 'f' && uY > 950) {
    score = score + 25;
    if (score > 99*CurrentLevel) {
      cleanslate();
    }
  } else if (key == 'f' && uY < 950) {
    M_score = M_score + 1
    if (M_score > 9) {
      AS = ActiveScreen.LoseScreen
    }
  } else if (key == 'j' && lY > 950) {
    score = score + 25;
    if (score > 99*CurrentLevel) {
      cleanslate();
    }
  } else if (key == 'j' && lY < 950) {
    M_score = M_score + 1
    if (M_score > 9) {
      AS = ActiveScreen.LoseScreen
    }
  } else if (key == 'k' && uY > 950) {
    score = score + 25;
    if (score > 99*CurrentLevel) {
      cleanslate();
    }
  } else if (key == 'k' && uY < 950) {
    M_score = M_score + 1
    if (M_score > 9) {
      AS = ActiveScreen.LoseScreen
    }

  // Handles Screen changing  
  } if (keyCode === 13) {
    if (AS === ActiveScreen.StartScreen) {
      CurrentLevel = 1
      AS = ActiveScreen.GS1;
      LV1song.loop()
    } else if (AS === ActiveScreen.InterScreen) {
      PriorLevel = PriorLevel + 1
      if (CurrentLevel === 2) {
        LV2song.loop()
        AS = ActiveScreen.GS2
      } else if (CurrentLevel === 3) {
        LV3song.loop()
        AS = ActiveScreen.GS3
      } else if (CurrentLevel === 4) {
        LV4song.loop()
        AS = ActiveScreen.GS4
      } else if (CurrentLevel === 5) {
        LV5song.loop()
        AS = ActiveScreen.GS5
      } else if (CurrentLevel === 6) {
        AS = ActiveScreen.WinScreen
      }
    } else if (AS === ActiveScreen.LoseScreen) {
      LV1song.stop()
      LV2song.stop()
      LV3song.stop()
      LV4song.stop()
      LV5song.stop()
      score = 0
      M_score = 0
      CurrentLevel = 0
      PriorLevel = 1
      AS = ActiveScreen.StartScreen
    }
  }
}

function draw() {
  // Handles different screens
  switch (AS) {
    case ActiveScreen.StartScreen:
      StartDraw();
      break;
    case ActiveScreen.GS1:
      LV1draw();
      break;
    case ActiveScreen.GS2:
      LV2draw();
      break;  
    case ActiveScreen.GS3:
      LV3draw();
      break;
    case ActiveScreen.GS4:
      LV4draw();
      break; 
    case ActiveScreen.GS5:
      LV5draw();
      break; 
    case ActiveScreen.InterScreen:
      InterDraw();
      break;  
    case ActiveScreen.LoseScreen:
      LoseDraw();
      break;
    case ActiveScreen.WinScreen:
      WinDraw();
      break;
  }
} 

function StartDraw() {
  textFont(retroFont)
  fill(117,155,17);
  background(67,97,17);
  fill(255);
  textSize(50)
  text("RHYTHM ATTACK", 90, 470);
  text("PRESS ENTER", 110, 570);
  text("Controls", 20, 770);
  textSize(30)
  text("When you see and arrow land in the", 20, 800);
  text("light green area, press the", 20, 835);
  text("Corresponding keyboard keys:", 20, 870);
  text("< = left arrow or D", 20, 900);
  text("^ = down arrow or F", 20, 930);
  text("> = up arrow or J", 20, 960);
  text("V = right arrow or K", 20, 990);
  image(crtimg,0,0)
}

function InterDraw() {
  textFont(retroFont)
  fill(117,155,17);
  background(67,97,17);
  fill(255);
  textSize(50)
  text(`Level ${PriorLevel} COMPLETE`, 70, 470);
  text("PRESS ENTER", 110, 570);
  text("TO CONTINUE", 110, 620);
  image(crtimg,0,0)
}

function LV1draw() {
  textSize(30)
  textFont(retroFont)
  fill(117,155,17);
  background(67,97,17);
  rect(300,1050,600,160)
  fill(255);
  image(L_ArrowImg,100, lY);
  image(U_ArrowImg,200, -1000);
  image(D_ArrowImg,300, -1000);
  image(R_ArrowImg,400, -1000);
  lY = lY + 11;
  uY = uY + 0;
  dY = dY + 0;
  rY = rY + 0;
  
  if (lY > 1140) {
    lY = 0;
  } 
  text(`Score: ${score}`, 25, 50);
  text(`Misses: ${M_score}`, 25, 100);
  image(crtimg,0,0)
}

function LV2draw() {
  textSize(30)
  textFont(retroFont)
  fill(117,155,17);
  background(67,97,17);
  rect(300,1050,600,160)
  fill(255);
  image(L_ArrowImg,100, lY);
  image(U_ArrowImg,200, uY);
  image(D_ArrowImg,300, -1000);
  image(R_ArrowImg,400, -1000);
  lY = lY + 25;
  uY = uY + 27;
  dY = dY + 0;
  rY = rY + 0;
  
  if (lY > 1140) {
    lY = 0;
  } if (uY > 1140) {
    uY = 0;
  }
  
  text(`Score: ${score}`, 25, 50);
  text(`Misses: ${M_score}`, 25, 100);
  image(crtimg,0,0)
}

function LV3draw() {
  textSize(30)
  textFont(retroFont)
  fill(117,155,17);
  background(67,97,17);
  rect(300,1050,600,160)
  fill(255);
  image(L_ArrowImg,100, lY);
  image(U_ArrowImg,200, uY);
  image(D_ArrowImg,300, dY);
  image(R_ArrowImg,400, -1000);
  lY = lY + 35;
  uY = uY + 100;
  dY = dY + 30;
  rY = rY + 0;
  
  if (lY > 1140) {
    lY = 0;
  } if (uY > 1140) {
    uY = 0;
  } if (dY > 1140) {
    dY = 0;
  } if (rY > 1140) {
    rY = 0;
  }

  text(`Score: ${score}`, 25, 50);
  text(`Misses: ${M_score}`, 25, 100);
  image(crtimg,0,0)
}

function LV4draw() {
  textSize(30)
  textFont(retroFont)
  fill(117,155,17);
  background(67,97,17);
  rect(300,1050,600,160)
  fill(255);
  image(L_ArrowImg,100, lY);
  image(U_ArrowImg,200, uY);
  image(D_ArrowImg,300, dY);
  image(R_ArrowImg,400, rY);
  lY = lY + 40;
  uY = uY + 45;
  dY = dY + 50;
  rY = rY + 55;
  
  if (lY > 1140) {
    lY = 0;
  } if (uY > 1140) {
    uY = 0;
  } if (dY > 1140) {
    dY = 0;
  } if (rY > 1140) {
    rY = 0;
  }

  text(`Score: ${score}`, 25, 50);
  text(`Misses: ${M_score}`, 25, 100);
  image(crtimg,0,0)
}

function LV5draw() {
  textSize(30)
  textFont(retroFont)
  fill(117,155,17);
  background(67,97,17);
  rect(300,1050,600,160)
  fill(255);
  image(L_ArrowImg,100, lY);
  image(U_ArrowImg,200, uY);
  image(D_ArrowImg,300, dY);
  image(R_ArrowImg,400, rY);
  lY = lY + 90;
  uY = uY + 180;
  dY = dY + 240;
  rY = rY + 320;
  
  if (lY > 1140) {
    lY = 0;
  } if (uY > 1140) {
    uY = 0;
  } if (dY > 1140) {
    dY = 0;
  } if (rY > 1140) {
    rY = 0;
  }

  text(`Score: ${score}`, 25, 50);
  text(`Misses: ${M_score}`, 25, 100);
  image(crtimg,0,0)
}

function LoseDraw() {
  textFont(retroFont)
  fill(255,15,17);
  background(255,27,17);
  fill(255);
  textSize(50)
  text("YOU LOSE", 90, 470);
  text("PRESS ENTER", 110, 570);
  image(crtimg,0,0)
}

function WinDraw() {
  textFont(retroFont)
  fill(117,155,17);
  background(67,97,17);
  fill(255);
  textSize(50)
  text("You WIN", 90, 470);
  text("EPIC HAXOR", 110, 570);
  image(crtimg,0,0)
}