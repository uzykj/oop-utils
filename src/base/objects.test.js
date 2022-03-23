const {Objects} = require('./objects');

function A() {
  // this.xx = 1;
}

function B() {
  // this.xx = 1;
}

class C {
  constructor() {
    this.name = 'c';
    this.size = 1024;
    this.type = new E();
  }

  equals(b) {
    if (b === this) return true;
    return Objects.equals(this.name, b.name) &&
      Objects.equals(this.size, b.size) &&
      Objects.equals(this.type, b.type);
  }
}

class D {
  constructor() {
    this.name = 'c';
    this.size = 1024;
    this.type = new E();
  }

  equals(b) {
    if (b === this) return true;
    return Objects.equals(this.name, b.name) &&
      Objects.equals(this.size, b.size) &&
      Objects.equals(this.type, b.type);
  }
}

class E {
  constructor() {
    this.name = 'e';
    this.size = 1024;
    this.type = 'class';
  }

  equals(b) {
    if (b === this) return true;
    return Objects.equals(this.name, b.name) &&
      Objects.equals(this.size, b.size) &&
      Objects.equals(this.type, b.type);
  }
}

function Message() {//from www.w3cschool.cn
  var message = "hello";

  function setMessage(newMessage) {
    if (!newMessage)
      throw new Error("cannot set empty message");
    message = newMessage;
  }

  function getMessage() {
    return message;
  }

  function printMessage() {
    console.log(message);
  }

  return {
    setMessage: setMessage,
    getMessage: getMessage,
    printMessage: printMessage
  };
}

function Message1() {//from www.w3cschool.cn
  var message = "hello";

  function setMessage(newMessage) {
    if (!newMessage)
      throw new Error("cannot set empty message");
    message = newMessage;
  }

  function getMessage() {
    return message;
  }

  function printMessage() {
    console.log(message);
  }

  return {
    setMessage1: setMessage,
    getMessage: getMessage,
    printMessage: printMessage
  };
}

const arr1 = [{name: 'xx'}, 2, 3], arr2 = [{name: 'bbb'}, 2, 3];
console.log(new Message())
console.log(Objects.equals(new Message(), new Message1()))
console.log(Objects.equals(new C(), new D()))
console.log(JSON.stringify(new C()))
