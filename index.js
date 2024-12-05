const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.



// Destructuring after splitting the string into an array
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

console.log(moo);    // Output: "cow"
console.log(neigh);  // Output: "horse"
console.log(baa);    // Output: "sheep"
console.log(oink);   // Output: "pig"
console.log(cluck);  // Output: "chicken"

//bolt the horse is to exclude the horse
const animals = "cow sheep pig chicken";


const [bessie, dolly, babe, little]= animals.split(` `);
console.log(bessie);
console.log(dolly);
console.log(babe);
console.log(little);

//the chicken left so we are remaining with 3

const animals2 = "cow sheep pig";

const [blackAndWhite, black, pink]=animals2.split(` `);
console.log(blackAndWhite);
console.log(black);
console.log(pink);








// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 


const [red, orange, yellow, green, blue, indigo, violet]= colors;
console.log(red);
console.log(orange);
console.log(yellow);
console.log(green);
console.log(blue);
console.log(indigo);
console.log(violet);

const colors2 = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

const [r, o, y, g, b, v]=colors2

console.log(r);
console.log(o);
console.log(y);
console.log(g);
console.log(b);
console.log(v);


const colors3 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [, , , , ,indg]=colors3;


console.log(indg);



// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner


const {muppetName, color, song, job, partner}=muppet;

const {nestedName, nestedColor, nestedJob, nestedPartner}=nestedMuppet;
const {song1, song2, song3, song4,}= nestedMuppet.album.theMuppetMovie;

console.log(muppetName);

console.log(nestedName);
console.log(song1);