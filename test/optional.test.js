'use strict';
const {Optional} = require('../dist/base/optional');

console.log(Optional.absent());
console.log(Optional.fromNullable('A').orNull());
console.log(Optional.fromUndefinedable(null).isPresent());
console.log(Optional.of(Object).get());
