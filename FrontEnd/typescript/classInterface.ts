class Animal {
  eat() {}
  sleep() {}
  proCreate() {}
}

class Human extends Animal {}

interface Engineer {
  passBEExam(): void;
}

interface Musician {
  playMusic(): void;
}

interface Developer {
  writeCode(): void;
}

class Sanjay extends Human implements Musician, Developer {
  playMusic(): void {
    console.log("plays music");
  }
  writeCode(): void {
    console.log("write code");
  }
}

class Rohan extends Human implements Engineer, Developer {
  passBEExam(): void {
    console.log("graduated in mech");
  }
  writeCode(): void {
    console.log("writes code");
  }
}

const musicians: Musician[] = [new Sanjay()];
const developers: Developer[] = [new Sanjay(), new Rohan()];

developers.forEach((dev) => dev.writeCode());
musicians.forEach((musician) => musician.playMusic());
