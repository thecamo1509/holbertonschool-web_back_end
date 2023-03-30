export default function cleanSet(set, startString = '') {
  let fullString = '';
  set.forEach((element) => {
    if (startString.length > 0) {
      if (element.startsWith(startString, 0)) {
        const word = element.replace(startString, '');
        if (fullString.length === 0) {
          fullString += word;
        } else {
          fullString += `-${word}`;
        }
      }
    }
  });
  return fullString;
}
