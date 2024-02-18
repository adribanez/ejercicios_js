const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersList = users.map(names => {
    if(names.name.startsWith("A")){
        return "Anacleto";
    }else{
        return names.name;
    }
});

console.log(usersList);