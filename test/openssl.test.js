'use strict';
const fs = require('fs');
const {exec} = require('child_process');

function openssl(opts) {
  opts = opts || arguments[0];
  var {verb, flags, tail} = opts;
  console.log(`> openssl`);
  console.log(`Found ${Object.keys(opts).length} properties.`);
  return new Promise(function execPromiseHandler(resolve, reject) {
    if (typeof flags !== 'string' || Array.isArray(flags)) {
      reject(
        new Error(
          `'flags' option must be an array or string of openssl ${verb} command flags.`,
        ),
      );
    }

    if (Array.isArray(flags)) {
      flags = flags.join(' ');
    }

    if (
      typeof tail !== 'undefined' &&
      typeof tail !== 'string' &&
      typeof tail !== 'number'
    ) {
      reject(new Error(`'tail' option must be a string or number argument.`));
      if (typeof tail === 'number') {
        tail = tail.toString();
      }
    }

    var stdout = '';
    var stderr = '';
    const command = `openssl ${verb} ${flags} ${tail}`;
    console.log(`Executing: ${command}`);
    const cp = exec(command);
    cp.stdout.on('data', (data) => {
      stdout += data;
    });

    cp.stderr.on('data', (data) => {
      stderr += data;
    });

    cp.on('close', (code) => {
      console.log(`< openssl`);
      resolve({cwd: process.cwd(), stdout, stderr});
    });
    cp.on('error', (err) => {
      reject(err);
    });
  });
}

// openssl({verb: 'list', flags: '-commands', tail: ''}).then(r => console.log(r))

// var options;
// if (!options || !options.encoding) {
//   options = !options ? Object.create(null) : options;
//   const opt = {encoding: 'hex'};
//   Object.assign(options, opt);
//   console.log(options)
// }

class A {
  constructor() {
    this.name = 'a';
    this.size = 1024;
  }

  getName() {
    return this.name;
  }
}

class B {
  constructor() {
    this.name = 'a';
    this.size = 1024;
  }

  getName() {
    return this.name;
  }
}

const {Hashes} = require('../utils/hashes');
const hashCode = Hashes.hashCode('asdasfas354r32rdsdwafasqewrfhsadiouyf80293 u4r jifodjwsfw89ausd0fijko2q3j4rufdsw0a9jfcokj320 ruf09dsajio fjsdk');
const hashCode2 = Hashes.hashCode('asdasfas354r32rdsdwafasqewrfhsadiouyf80293 u4r jifodjwsfw89ausd0fijko2q3j4rufdsw0a9jfcokj320 ruf09dsajio fjsdk');
const hashCode1 = Hashes.hashCode(new A());
const hashCode3 = Hashes.hashCode(new B());
const hashCode4 = Hashes.hashCode([{name: 'zzz'}, {size: 1111}, 'asfasfa']);
console.log(hashCode1 === hashCode3)
console.log(hashCode1)
console.log(hashCode4)

function test(...o) {
  console.log(o)
}

test('2', 0, {name: '1'})
