let one = "A";
let noun = [" artist"," cat"," athlete"," chef"," doctor"," engineer"," farmer"," leader"," musician"," teacher",];
let verb= [" hurt"," insulted"," betrayed"," deceived"," threatened"," ignored"," manipulated"," criticized"," undermined"," judged"];
let obj = [" my house"," my car"," my phone"," my brother"," my wallet"," my laptop"," my backpack"," my shoes"," my bicycle"," my jewelry"];
let place = [" at the park"," in the library"," on the beach"," in the museum"," at school"," at the restaurant"," at the airport"," in the theater"," at the market"," in the hospital"];
let adj = [" beautiful"," brigth"," clever"," elegant"," fierce"," gentle"," humble"," joyful"," mysterious"," vibrant"];
    
let rdm2 = Math.floor(Math.random() * noun.length);
let rdm3 = Math.floor(Math.random() * verb.length);
let rdm4 = Math.floor(Math.random() * obj.length);
let rdm5 = Math.floor(Math.random() * place.length);
let rdm1 = Math.floor(Math.random() * adj.length);

let excuse = one + adj[rdm1] + noun[rdm2] + verb[rdm3] + obj[rdm4] + place[rdm5];

console.log(excuse); 
