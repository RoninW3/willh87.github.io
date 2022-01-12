var balls = document.getElementsByClassName("ball");
    
document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 100000; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
    }
    };

const btn = document.querySelector('.eye-btn');
const eyes = document.querySelector('.eyes');
    
btn.addEventListener('click', function(){
    const eye = document.createElement('div');
    eye.classList.add('eye');
    eyes.appendChild(eye);

    const ball = document.createElement('div');
    ball.classList.add('ball');
    eye.appendChild(ball);
    })
    