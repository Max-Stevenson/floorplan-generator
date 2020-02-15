const startButton = document.getElementById("generateButton");
const clearButton = document.getElementById("clearButton");
const canvas = document.getElementById("drawingArea");
const ctx = canvas.getContext("2d");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

startButton.onclick = event => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  let startX = 10;
  let startY = 10;
  let width = getRandomInt(100, 200);
  let height = getRandomInt(100, 200);
  drawRoomOutline(startX, startY, width, height);
  let roomDetails = {
    title: "bedroom",
    dimensions: {
      width: width,
      height: height,
      topLeft: {
        x: startX,
        y: startY
      },
      topRight: {
        x: startX + width,
        y: startY
      },
      bottomLeft: {
        x: startX,
        y: startY + height
      },
      bottomRight: {
        x: startX + width,
        y: startY + height
      }
    }
  };
  console.log(roomDetails);
  let door = randomisePlacement("door", 20, roomDetails);
  drawOpening(door);
  roomDetails = { ...roomDetails, door};
  console.log(roomDetails);
};

const drawRoomOutline = (startLeft, startTop, width, height) => {
  ctx.strokeRect(startLeft, startTop, width, height);
};

const drawOpening = opening => {
  ctx.beginPath();
  ctx.moveTo(opening.start.x, opening.start.y);
  ctx.lineTo(opening.finish.x, opening.finish.y);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
};

const checkForExistingOpening = (room) => {

};

const randomisePlacement = (openingName, openingSize, room) => {
  index = getRandomInt(0, 1);
  switch (index) {
    case 0:
      randomStart = getRandomInt(
        room.dimensions.topLeft.x,
        room.dimensions.topRight.x - openingSize
      );
      return (opening = {
        name: openingName,
        start: {
          x: randomStart,
          y: room.dimensions.topLeft.y
        },
        finish: {
          x: randomStart + openingSize,
          y: room.dimensions.topLeft.y
        }
      });
    case 1:
      randomStart = getRandomInt(
        room.dimensions.topRight.y,
        room.dimensions.bottomRight.y - openingSize
      );
      return (opening = {
        name: openingName,
        start: {
          x: room.dimensions.topRight.x,
          y: randomStart
        },
        finish: {
          x: room.dimensions.topRight.x,
          y: randomStart + openingSize
        }
      });
    default:
      return;
  }
};

const recordRoom = roomDetails => {};

clearButton.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
};
