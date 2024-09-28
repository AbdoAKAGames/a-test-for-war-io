import { useEffect } from 'react';
import '../game.css'

export function Gameplay() {

    useEffect(() => {
        const div = document.createElement("div");
        div.className = 'gameplay';
        const cv = document.createElement("canvas");
        cv.id = 'canvas';
        cv.width = 5000;
        cv.height = 5000;
        div.append(cv);
        document.body.append(div);
        var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var player = {
      x: 754,
      y: 432,
      width: 200,
      height: 150,
      color: '#00A',
      speed: 1,
    };
  let notR = true;
  let notL = true;
  let notU = true;
  let notD = true;

  document.addEventListener("keydown", e => {
    if(e.key == 'ArrowRight'){         
        if(notR){             
          notR = false             
          let int = setInterval(() => {   player.x += player.speed;         
          }, 1);         
          document.addEventListener("keyup", (e) => {      if(e.key == 'ArrowRight'){              clearInterval(int);              notR = true;      } 
          })
        }
      }else if(e.key == 'ArrowLeft'){
        if(notL){
          notL = false;
          let int = setInterval(() => { player.x -= player.speed;
          }, 1);
          document.addEventListener("keyup", (e) => { if(e.key == 'ArrowLeft'){     clearInterval(int);     notL = true }
          })
        }
      }
      else if(e.key == 'ArrowUp'){
        if(notU){
          notU = false;
          let int = setInterval(() => { player.y -= player.speed;
          }, 1);
          document.addEventListener("keyup", (e) => { if(e.key == 'ArrowUp'){     clearInterval(int);     notU = true }
        })
      }
    }
    else if(e.key == 'ArrowDown'){
      if(notD){
        notD = false;
        let int = setInterval(() => { player.y += player.speed;
        }, 1);
        document.addEventListener("keyup", (e) => { if(e.key == 'ArrowDown'){     clearInterval(int);     notD = true }
        })
      }
    }
  })

const img = new Image();
img.src = 'src/assets/flowers.png';
function drawPlayer(something, angle) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = "transparent";
    context.arc(something.x, something.y, 0, 30, 2 * Math.PI);
    context.fill();

    // Save the untranslated context
    context.save();

    // Move the rotation point to the center of the player
    context.translate(something.x, something.y);
    context.rotate(angle);

    // Draw the red rectangle (translated coordinates)
    context.fillStyle = "transparent";
    context.drawImage(img, -80, -78, player.width, player.height);
    context.fillRect(0, -10, 20, 20);
    context.arc(something.x, something.y, 0, 30, 2 * Math.PI)
    

    // Restore the context to its untranslated state
    context.restore();

    const tilemap = [
        [1, 0, 0],
        [2, 1, 2],
        [0, 2, 1]
    ];

    const tileStats = [
        [
            {
                x: 20,
                y: 20,
            },
            {
                x: 50,
                y: 50,
            },
            {
                x: 80,
                y: 80,
            },
        ],
        [
            {
                x: 100,
                y: 100,
            },
            {
                x: 120,
                y: 120,
            },
            {
                x: 150,
                y: 150,
            },
        ],
        [
            {
                x: 180,
                y: 180,
            },
            {
                x: 210,
                y: 210,
            },
            {
                x: 450,
                y: 450,
            },
        ],
      ]
    
    // Load your tile images (replace with actual image URLs)
    const tileImages = [
      'download.png',
      'for server.png',
      'fullscreen.png'
    ];
    
    // Tile size (adjust as needed)
    const tileSize = 32;
    
    // Draw the tilemap
    for (let row = 0; row < tilemap.length; row++) {
        for (let col = 0; col < tilemap[row].length; col++) {
          const tileIndex = tilemap[row][col];
          const tileImage = new Image();
          tileImage.src = tileImages[tileIndex];
          context.drawImage(tileImage, tileStats[row][col].x, tileStats[row][col].y, tileSize * 2, tileSize * 2);
        }
    }
}
// Initial drawing
drawPlayer(player, 0);

// Update on mouse movement
canvas.onmousemove = function(e) {
  var angle = Math.atan2(e.pageY - player.y, e.pageX - player.x);
  drawPlayer(player, angle);
}
document.getElementsByClassName('gameplay')[1].remove();
    }, []);

    
    return (
        <>

        </>
    )
}