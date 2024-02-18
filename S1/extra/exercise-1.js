const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];


   

     for (let i = 0; i < users.length; i++) {

        let users2 = users[i];
        let usersAge = users2.years;
        let usersName = users2.name;
         if (usersAge < 18) {

            console.log((usersName) + " " + "es menor de edad");
            
         }else{
            console.log((usersName) + " " + "es mayor de edad");
         }

         }
        
        
