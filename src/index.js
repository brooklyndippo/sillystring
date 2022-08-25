/* eslint-disable no-console */
/* eslint-disable semi */

// Challenge 1 - make the first character of a given string uppercase.

// capitalize first letter with SPLIT
function capitalize(str) {
  const strArray = str.split('')
  strArray[0] = strArray[0].toUpperCase()
  const capitalString = strArray.join('')
  return capitalString
}

// capitalize first letter with BRACKET NOTATION
function capitalizeBracket(str) {
  let capitalString = str[0].toUpperCase()
  capitalString += str.slice(1)
  return capitalString
}

// Challenge 2 - makes all characters uppercase
function allCaps(str) {
  let upperString = []
  const letters = str.split('')
  letters.forEach((letter) => {
    upperString.push(letter.toUpperCase())
  })
  upperString = upperString.join('')
  return upperString
}

// Challenge 3 -  makes the first character of each word uppercase
function capitalizeWords(str) {
  let capitalizedString = []
  const words = str.split(' ')
  words.forEach((word) => {
    const capitalWord = capitalize(word)
    capitalizedString.push(capitalWord)
  });
  capitalizedString = capitalizedString.join(' ')
  return capitalizedString
}

// Challenge 4 - removes all spaces from the beginning and end of a String.
// If more than one space appears in the middle of a string it is replaced by a single space.
function extraSpace(value) {
  return value !== ''
}

function removeExtraSpaces(str) {
  const strArray = str.trim().split(' ')
  const noSpacesArray = strArray.filter(extraSpace)
  const singleSpaceStr = noSpacesArray.join(' ')
  return singleSpaceStr
}

// Challenge 5 - removes extra spaces and replaces spaces with the hyphen "-",
// makes all characters lowercase
function kebabCase(str) {
  const singleSpace = removeExtraSpaces(str)
  const lowercase = singleSpace.toLowerCase()
  const kebabString = lowercase.replaceAll(' ', '-')
  console.log(kebabString)
  return kebabString
}

// Challenge 6 - Removes extra space and replaces spaces with an underscore "_"
// and makes all characters lowercase.
function snakeCase(str) {
  const kebabString = kebabCase(str)
  const snakeString = kebabString.replaceAll('-', '_')
  console.log(snakeString)
  return snakeString
}

// Challenge 7  camelCase() Lowercases the first character of the first word.
// Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str) {
  let capitalWords = capitalizeWords(str)
  let camelCase = capitalWords[0].toLowerCase()
  camelCase += capitalWords.slice(1)
  camelCase = camelCase.replaceAll(' ', '')
  console.log(camelCase)
  return camelCase
}

// Challenge 8 - this method takes the first character of a string and move to the end of a string
// Advanced: Include an optional second parameter that sets the number of characters to shift.
function shift(str, chars) {
  const charsToShift = str.slice(0, chars)
  const shiftedString = str.slice(chars) + charsToShift
  return shiftedString
}

// Challenge 9 makeHashTag(str) - This function should convert the given string to a hash tag.
// A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.
function makeHashTag(str) {
  const wordsArray = str.toLowerCase().split(' ')
  const hashtag = '#'
  const hashtags = wordsArray.map((word) => hashtag.concat('', word))
  return hashtags
}

makeHashTag("Amazing bongo drums for sale")
