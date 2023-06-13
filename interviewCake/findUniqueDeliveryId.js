// this has a better solution via bitwise operation. Specifically XOR. Will study that soon.
function findUniqueDeliveryId(deliveryIds) {
  const uniqIds = new Set();

  for (let i = 0; i < deliveryIds.length; i++) {
    uniqIds.has(deliveryIds[i]) ? uniqIds.delete(deliveryIds[i]) : uniqIds.add(deliveryIds[i]);
  }

  // return the one thing left in the set, that is therefor unique!
  return uniqIds.values().next().value;
}







[1, 2, 3, 3, 2, 5, 5]
[10, 15, 3, 3, 15, 200, 200]









// Tests

let desc = 'one drone';
let actual = findUniqueDeliveryId([1]);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'unique ID comes first';
actual = findUniqueDeliveryId([1, 2, 2]);
expected = 1;
assertEquals(actual, expected, desc);

desc = 'unique ID comes last';
actual = findUniqueDeliveryId([3, 3, 2, 2, 1]);
expected = 1;
assertEquals(actual, expected, desc);

desc = 'unique ID in middle';
actual = findUniqueDeliveryId([3, 2, 1, 2, 3]);
expected = 1;
assertEquals(actual, expected, desc);

desc = 'many drones';
actual = findUniqueDeliveryId([2, 5, 4, 8, 6, 3, 1, 4, 2, 3, 6, 5, 1]);
expected = 8;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}