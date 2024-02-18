const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const legends = streamers.filter(game =>{

   if (game.gameMorePlayed.includes("League")){
    if(game.age > 35){

     gameMorePlayed = game.gameMorePlayed.toUpperCase();
    return true;
   }
   }

   return false;

});

console.log(legends);