// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     companinion: {
//       name: "frank",
//       type: "flea",
//       belongings: ["small hat", "sun glasses"],
//     },
//   },
//   roll(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`);
//   },
// };

// adventurer.roll();

class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

class Adventurer extends Character {
  static ROLES = ["fighter", "wizard", "healer"];
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

tetra = new Adventurer("ready", "hefty");
tetra.health = 75;
blocks = new Adventurer("ready", "macho");
blocks.health = 50;
function duel(adventurer1, adventurer2) {
  console.log(`${adventurer1.name} VS ${adventurer2.name}`);
  let round = 1;
  while (adventurer1.health >= 50 && adventurer2.health >= 50) {
    const dice1 = adventurer1.roll();
    const dice2 = adventurer2.roll();
    if (dice1 > dice2) {
      adventurer2.health -= 1;
      console.log(`Round:${round} winner is ${adventurer1.name} `);
    } else {
      adventurer1.health -= 1;
      console.log(`Round:${round} winner is ${adventurer2.name}`);
    }
    console.log(
      `Current standings are ${adventurer1.name} health is:${adventurer1.health}
        ${adventurer2.name} health is:${adventurer2.health} `
    );
  }
  console.log("---------------------------------------------------");
  round++;

  if (adventurer1.health > 50) {
    console.log(
      `The winner of this duel is ${adventurer1.name} who an amazing fight`
    );
  } else {
    console.log(
      `Sigh, I guess ${adventurer2.name}is the winner... what a cheater!`
    );
  }
}

duel(tetra, blocks);

//======================================================================
