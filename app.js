// NAVBAR

// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// // show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// // close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

// SMOOTH SCROLL

// DATE - footer

//setup date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());


// PROJECT FLIPPER 

// project flipper data
const projects = [
    {
      id: 1,
      name: "pacmen",
      img:
        "./images/pacman1.jpg",
      text:
        "Interactive browser program where you can make multiple Pacmen. Use the 'Make Pacmen' button to add as many as you want to bounce off the walls. There is also a color randomizer button for the background.",
    },
    {
      id: 2,
      name: "eyes",
      img:
        "./images/eyes1.jpg",
      text:
        "This browser program creates an eye that will track the movement of the mouse on the screen and change the colors of the pupil when hovering. Use the 'Make Eyes' button to create as many as your screen resolution allows.",
    },
    {
      id: 3,
      name: "bus tracker",
      img:
        "./images/bus1.jpg",
      text:
        "Interactive bus tracker that allows you to take a journey through the Streets of Boston while viewing the route of the bus. This is interactive and made with Javascript. ",
    },
  ];
  // select items
  const project = document.getElementById('project');
  const img = document.getElementById('project-img');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  
  window.addEventListener('DOMContentLoaded', function(){
    showProject();
  })
  // show project based on item
  function showProject(){
    const item = projects[currentItem];
    img.src = item.img;
    project.textContent = item.name;
    info.textContent = item.text;
  }
  
  //show next project
  
  nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > projects.length -1){
      currentItem = 0;
    }
    showProject(currentItem)
  })
  // show prev project
  prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
      currentItem = projects.length -1;
    }
    showProject(currentItem);
  })
  