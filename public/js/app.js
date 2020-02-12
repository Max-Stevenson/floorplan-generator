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
  let startX = 10;
  let startY = 10;
  let width = getRandomInt(100, 200);
  let height = getRandomInt(100, 200);
  drawRoomOutline(startX, startY, width, height);
  const roomDetails = {
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
  drawDoor(roomDetails);
};

const drawRoomOutline = (startLeft, startTop, width, height) => {
  ctx.strokeRect(startLeft, startTop, width, height);
};

const drawOpening = (opening, room) => {
  ctx.beginPath();
  ctx.moveTo(door.x, door.y);
  ctx.lineTo(door.x + doorLength, door.y);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
};

const randomisePlacement = (openingName, openingSize, room) => {
  index = 0; //randomise
  switch (index) {
    case 0:
      return (opening = {
        name: openingName,
        x: getRandomInt(
          room.dimensions.topLeft.x,
          room.dimensions.topRight.x - openingSize
        ),
        y: room.dimensions.topLeft.y
      });
    case 1:
      return (opening = {
        name: openingName,
        x: room.dimensions.topRight.x,
        y: getRandomInt(
          room.dimensions.topRight.y,
          room.dimensions.topRight.y - openingSize
        )
      });
    default:
      return;
  }
};

const recordRoom = roomDetails => {};

clearButton.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#000000";
};
