/* eslint-disable no-console */
/* eslint-disable semi */

// Challenge 1 - make the first character of a given string uppercase.

// capitalize first letter with SPLIT
function capitalize(str: string): string {
  const strArray: Array<string> = str.split('')
  strArray[0] = strArray[0].toUpperCase()
  const capitalString = strArray.join('')
  return capitalString
}

// capitalize first letter with BRACKET NOTATION
function capitalizeBracket(str: string): string {
  let capitalString = str[0].toUpperCase()
  capitalString += str.slice(1)
  return capitalString
}

// Challenge 2 - makes all characters uppercase
function allCaps(str: string): string {
  let upperString: Array<string> = []
  const letters = str.split('')
  letters.forEach((letter) => {
    upperString.push(letter.toUpperCase())
  })
  const allCapsString: string = upperString.join('')
  return allCapsString
}

// Challenge 3 -  makes the first character of each word uppercase
function capitalizeWords(str: string): string {
  let capitalizedString: Array<string> = []
  const words = str.split(' ')
  words.forEach((word) => {
    const capitalWord = capitalize(word)
    capitalizedString.push(capitalWord)
  });
  const capitalWord: string = capitalizedString.join(' ')
  return capitalWord
}

// Challenge 4 - removes all spaces from the beginning and end of a String.
// If more than one space appears in the middle of a string it is replaced by a single space.
function extraSpace(value: string) : boolean {
  return value !== ''
}

function removeExtraSpaces(str: string): string {
  const strArray = str.trim().split(' ')
  const noSpacesArray = strArray.filter(extraSpace)
  const singleSpaceStr = noSpacesArray.join(' ')
  return singleSpaceStr
}

// Challenge 5 - removes extra spaces and replaces spaces with the hyphen "-",
// makes all characters lowercase
function kebabCase(str: string): string {
  const singleSpace = removeExtraSpaces(str)
  const lowercase = singleSpace.toLowerCase()
  const kebabString = lowercase.replaceAll(' ', '-')
  console.log(kebabString)
  return kebabString
}

// Challenge 6 - Removes extra space and replaces spaces with an underscore "_"
// and makes all characters lowercase.
function snakeCase(str: string): string {
  const kebabString = kebabCase(str)
  const snakeString = kebabString.replaceAll('-', '_')
  console.log(snakeString)
  return snakeString
}

// Challenge 7  camelCase() Lowercases the first character of the first word.
// Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str: string): string {
  const capitalWords: string = capitalizeWords(str)
  let camelCaseStr = capitalWords[0].toLowerCase()
  camelCaseStr += capitalWords.slice(1)
  camelCaseStr = camelCaseStr.replaceAll(' ', '')
  console.log(camelCaseStr)
  return camelCaseStr
}

// Challenge 8 - this method takes the first character of a string and move to the end of a string
// Advanced: Include an optional second parameter that sets the number of characters to shift.
function shift(str: string, chars: number): string {
  const charsToShift = str.slice(0, chars)
  const shiftedString = str.slice(chars) + charsToShift
  return shiftedString
}

// Challenge 9 makeHashTag(str) - This function should convert the given string to a hash tag.
// A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.
function makeHashTag(str: string): Array<string> {
  const wordsArray = str.toLowerCase().split(' ')
  const hashtag = '#'
  const hashtags = wordsArray.map((word) => hashtag.concat('', word))
  return hashtags
}

// Challenge 10  isEmpty(str) - Returns true if the given string is empty or only whitespace.
// White space includes: spaces, line returns, and tabs. These characters can be represented with:
// \n (new line) \r (carrige return), \t (tab).
function checkBlankChars(value: string) {
  const blankChars = ['', ' ', '\n', '\r', '\t']
  if (blankChars.includes(value)) {
    return null
  }
  return value
}

function isEmpty(str: string): boolean {
  const strArray = str.split('')
  const strArrayNoSpaces = strArray.filter(checkBlankChars)
  return strArrayNoSpaces.length === 0
}

module.exports.capitalize = capitalize
module.exports.capitalizeBracket = capitalizeBracket
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kebabCase = kebabCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
module.exports.makeHashTag = makeHashTag
module.exports.isEmpty = isEmpty
