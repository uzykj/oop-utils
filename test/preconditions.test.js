'use strict';
const {Preconditions} = require('../dist/base/preconditions.js');

function main() {
  // Preconditions.checkArgument(false);

  // Preconditions.checkArgument(true, 'Error', true);

  // Preconditions.checkArgument(false, 'Object Error', [{name: 'A'}, 'A'], [1, 2, 'adfa'], {size: 10234});

  // Preconditions.checkElementIndex(1, 10);

  // Preconditions.checkNotNull(null, 'Error', true);

  // Preconditions.checkPositionIndex(1, 0);

  // Preconditions.checkPositionIndexes(1, 10, 1);

  Preconditions.checkState(false, 'Error', true);
}
main()
