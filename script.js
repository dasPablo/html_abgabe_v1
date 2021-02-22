// select all elements
const start = document.getElementById('start');
const home = document.getElementById('home');
const aleitung = document.getElementById('anleitung');
const wiewirdgespielt = document.getElementById('wiewirdgespielt');
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const qImg = document.getElementById('qImg');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const scoreDiv = document.getElementById('score');
const ergebnis = document.getElementById('ergebnis');
const nochmal = document.getElementById('nochmal');

// create questions
let questions = [{
  question: "Wleche Frucht wird gezeigtA?",
  imgSrc: "img/avocado.jpg",
  choiceA: "Avocado",
  choiceB: "Apfel",
  choiceC: "Limette",
  choiceD: "Kiwi",
  correct: "A"
}, {
  question: "Wleche Frucht wird gezeigtB?",
  imgSrc: "img/Blaubeere.jpg",
  choiceA: "Pflaume",
  choiceB: "Blaubeere",
  choiceC: "Kirsche",
  choiceD: "Brombreere",
  correct: "B"
}, {
  question: "Wleche Frucht wird gezeigtZ?",
  imgSrc: "img/Zitrone.jpg",
  choiceA: "Orange",
  choiceB: "Maracuja",
  choiceC: "Zitrone",
  choiceD: "Mirabelle",
  correct: "C"
}, {
  question: "Wleche Frucht wird gezeigtD?",
  imgSrc: "img/Dattel.jpg",
  choiceA: "Kaki",
  choiceB: "Physalis",
  choiceC: "Papaja",
  choiceD: "Dattel",
  correct: "D"
}];

// Variablen

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;



home.addEventListener('click', startseite);

function startseite() {
  runningQuestion = 0;
  score = 0;
  nochmal.style.display = 'none';
  ergebnis.style.display = 'none';
  start.style.display = 'flex';
  anleitung.style.display = 'flex';
  quiz.style.display = 'none';
  wiewirdgespielt.style.display = 'none';
}

anleitung.addEventListener('click', showAnleitung);

function showAnleitung() {
  anleitung.style.display = 'none';
  wiewirdgespielt.style.display = 'flex';

}

/*mosaic script*/

// function photomosaic(image) {
//       // Dimensions of each tile
//       var tileWidth = TILE_WIDTH;
//       var tileHeight = TILE_HEIGHT;
//
//       //creating the canvas for photomosaic
//       var canvas = document.createElement('canvas');
//       var context = canvas.getContext("2d");
//       canvas.height = image.height;
//       canvas.width = image.width;
//
//       var imageData = context.getImageData(0, 0, image.width, image.height);
//       var pixels = imageData.data;
//
//       // Number of mosaic tiles
//       var numTileRows = image.width / tileWidth;
//       var numTileCols = image.height / tileHeight;
//
//
//       //canvas copy of image
//       var imageCanvas = document.createElement('canvas');
//       var imageCanvasContext = canvas.getContext('2d');
//       imageCanvas.height = image.height;
//       imageCanvas.width = image.width;
//       imageCanvasContext.drawImage(image, 0, 0);
//
//
//       //function for finding the average color
//       function averageColor(row, column) {
//           var blockSize = 1, // we can set how many pixels to skip
//
//               data, width, height,
//               i = -4,
//               length,
//               rgb = {
//                   r: 0,
//                   g: 0,
//                   b: 0
//               },
//               count = 0;
//
//           try {
//               data = imageCanvasContext.getImageData(column * TILE_WIDTH, row * TILE_HEIGHT, TILE_HEIGHT, TILE_WIDTH);
//           } catch (e) {
//               alert('Not happening this time!');
//               return rgb;
//           }
//
//           length = data.data.length;
//
//           while ((i += blockSize * 4) < length) {
//               ++count;
//               rgb.r += data.data[i];
//               rgb.g += data.data[i + 1];
//               rgb.b += data.data[i + 2];
//           }
//
//           // ~~ used to floor values
//           rgb.r = ~~(rgb.r / count);
//           rgb.g = ~~(rgb.g / count);
//           rgb.b = ~~(rgb.b / count);
//
//           return rgb;
//
//       }
//
//       // Loop through each tile
//       for (var r = 0; r < numTileRows; r++) {
//           for (var c = 0; c < numTileCols; c++) {
//               // Set the pixel values for each tile
//               var rgb = averageColor(r, c)
//               var red = rgb.r;
//               var green = rgb.g;
//               var blue = rgb.b;
//
//               // Loop through each tile pixel
//               for (var tr = 0; tr < tileHeight; tr++) {
//                   for (var tc = 0; tc < tileWidth; tc++) {
//
//                       // Calculate the true position of the tile pixel
//                       var trueRow = (r * tileHeight) + tr;
//                       var trueCol = (c * tileWidth) + tc;
//
//                       // Calculate the position of the current pixel in the array
//                       var pos = (trueRow * (imageData.width * 4)) + (trueCol * 4);
//
//                       // Assign the colour to each pixel
//                       pixels[pos + 0] = red;
//                       pixels[pos + 1] = green;
//                       pixels[pos + 2] = blue;
//                       pixels[pos + 3] = 255;
//                   };
//               };
//           };
//       };
//
//       // Draw image data to the canvas
//       context.putImageData(imageData, 0, 0);
//       return canvas;
//   };

  // function create() {
  //     var image = document.getElementById('qImg');
  //     var canvas = photomosaic(image);
  //     document.getElementById("output").appendChild(canvas);
  // };

/*mosaic script end*/


start.addEventListener('click', startQuiz);

function startQuiz() {

  start.style.display = 'none';
  anleitung.style.display = 'none';
  renderQuestion();
  quiz.style.display = 'flex';
  wiewirdgespielt.style.display = 'none';

}

//rendern der frage
function renderQuestion() {
  let q = questions[runningQuestion];

  // function create() {
  //     var image = q.imgSrc;
  //     var canvas = photomosaic(image);
  //     document.getElementById("qImg").appendChild(canvas);
  //     qImg.innerHTML = "<src=" + canvas + ">";
  //
  // };

  qImg.innerHTML = "<img src=" + q.imgSrc + ">";

  choiceA.innerHTML = "<h1>" + q.choiceA + "</h1>";
  choiceB.innerHTML = "<h1>" + q.choiceB + "</h1>";
  choiceC.innerHTML = "<h1>" + q.choiceC + "</h1>";
  choiceD.innerHTML = "<h1>" + q.choiceD + "</h1>";
}

//antwort prüfen
function checkAnswer(answer) {
  if (answer === questions[runningQuestion].correct) {
    score++;
  }
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    ergebi();
  }
}


//rendern Punktzahl
function scoreRender() {
  scoreDiv.style.display = 'flex';

  // berechnen anzahl der fragen
  const scorePoints = score + 1;

  //ausgabe Punktzahl
}

//ergebnis anzeigen
function ergebi() {
  quiz.style.display = 'none';
  const anzahlQuestions = runningQuestion + 1;
  ergebnis.innerHTML = "<h1>Du hast " + score + " von " + anzahlQuestions + " Punkten</h1>";
  ergebnis.style.display = 'flex';
  nochmal.style.display = 'flex';
}
nochmal.addEventListener('click', neustart);

function neustart() {
  runningQuestion = 0;
  score = 0;
  nochmal.style.display = 'none';
  ergebnis.style.display = 'none';
  startQuiz();
}



// var questions = [
//   {
//     promt: "(a) Avocado\n(b) Rosenkohl\n(c) Grüner Apfel\n(d) Grünkohl",
//     answer: "a"
//   },
//   {
//     promt: "(a) Erdbeere\n(b) Kirsche\n(c) Johannisbeere\n(d) Himbeere",
//     answer: "b"
//   },
//   {
//     promt: "(a) Banane\n(b) Mango\n(c) Mirabelle\n(d) Zitrone",
//     answer: "c"
//   },
//   {
//     promt: "(a) Feige\n(b) Pflaume\n(c) Blaubeere\n(d) Blaukraut",
//     answer: "d"
//   },
// ]
//
// var score = 0;
//
// for(var i=0; i < questions.length; i++){
//   var response = window.prompt(questions[i].promt);
//   if(response == questions[i].answer){
//     score++;
//     alert("Richtig!");
//   } else {
//     alert("Falsch!");
//   }
// }
// alert("Punktzahl" + score + "/" + questions.length);



//  int[] rueckgabe = new int[3];
//  long rot = 0;
//  long gruen = 0;
//  long blau = 0;
//  long anzahlpixel = 0;
//  for (int y = 0; y < bild.getHeight(); y++) {
//  for (int x = 0; x < bild.getWidth(); x++) {
//  int c = bild.getPixel(x, y);
//
//  anzahlpixel++;
//  rot += Color.red(c);
//  gruen += Color.green(c);
//  blau += Color.blue(c);
//
//  }
//  }
//
//  //berechnung des Durschnitts der Farbe Rot und schreiben in die Rückgabe
//  rueckgabe[0] = rot/anzahlpixel;
//
//  //berechnung des Durschnitts der Farbe Grün und schreiben in die Rückgabe
//  rueckgabe[1] = gruen/anzahlpixel;
//
//  //berechnung des Durschnitts der Farbe Blau und schreiben in die Rückgabe
//  rueckgabe[2] = blau/anzahlpixel;
//
//  return rueckgabe;
// }
