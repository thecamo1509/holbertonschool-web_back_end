export default function appendToEachArrayValue(array, appendString) {
  const newarray = array;
  for (const [index, element] of array.entries()) {
    newarray[index] = appendString + element;
  }
  return newarray;
}
