'use strict';
const {Objects} = require('../dist/base/objects');

class ObjOne {
  constructor() {
    this.name = 'c';
    this.size = 1024;
  }

  equals(b) {
    if (b === this) return true;
    return Objects.equals(this.name, b.name) &&
      Objects.equals(this.size, b.size) &&
      Objects.equals(this.type, b.type);
  }
}

class ObjTwo {
  constructor() {
    this.name = 'c';
    this.size = 1024;
  }
}

class ObjThree {
  constructor() {
    this.name = 'e';
    this.size = 1024;
    this.type = 'class';
  }
}

function test() {
  const objOne = new ObjOne(), objTwo = new ObjTwo(), objThree = new ObjThree();
  console.log(Objects.equals(objOne, objTwo))
  console.log(Objects.equals(objOne, objThree))
}

test()
