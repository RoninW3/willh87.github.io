   // changes colors of the background dynamically

   const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
   // array for hex color generator
   
   const btn = document.getElementById('btn');
   
   // btn functions, loops over hex array
   btn.addEventListener('click', function(){
   let hexColor = '#';
   for(let i = 0; i < 6; i++){
       hexColor += hex[getRandomNum()];
   }
   document.body.style.backgroundColor = hexColor;
   })
   
   // callback func for random combination
   function getRandomNum(){
   return Math.floor(Math.random() * hex.length);
   }