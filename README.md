<!-- badges -->
![GitHub repo size](https://img.shields.io/github/repo-size/brooklyndippo/silly-strings-js-library)

# sillystring
Silly String is a Javascript library for manipulating strings. 

## capitalize(str)

Takes in a string and returns it with the first letter capitalized. 

Example: hello world -> Hello world

## allCaps(str)

Takes in a string and returns the entire string in uppercase.

Example: hello world -> HELLO WORLD

## capitalizeWords(str)

Takes in a string and returns it with the first letter of each word capitalized. 

Example: hello world -> Hello World

## removeExtraSpaces(str)

Takes in a string and removes all the extra spaces at the beginning, end, and between words and returns it with standard spacing. 

Example: "   Hello    world!   " -> "Hello world!"

## kebabCase(str)

Takes in a string, removes all extra spaces, and replaces the single space between words with a hyphen, returning the string in kebab case. 

Example: " Hello world " -> "hello-world"

## snakeCase(str)

Takes in a string, removes all extra spaces, and replaces the single space between words with an underscore, returning the string in snake case. 

Example: " what the heck " -> "what_the_heck"

## snakeCase(str)

Takes in a string, removes all spacing between words, makes the first word lowercase and capitalizes the first letter of every subsequent word. 

Example: Camel Case -> camelCase

## shift(str, int)

Takes in a string and an integer that sets the number of characters to shift. That number of characters are removed from the beginning of the string and replaced at the end. 

Example:shift('foobar', 3) -> 'barfoo'

## makeHashTag()

Takes in a string and returns an array of each of the words in the string in hashtag style, with a hashtag symbol followed by lowercase word. 

Example:

input: "Amazing bongo drums for sale"
output: ['#amazing', '#bongo', '#drums', '#for', '#sale']

## isEmpty()

Takes in a string and returns true if the string consists only of insignificant characters (spaces, tabs, linebreaks, carriage returns, or null) or returns false if there is a signficant character.. 

Example:

Input: "Abc def"
Output: isEmpty("Abc def") // false






  
  ✓ shift() returns first letter capital
  ✓ makeHashTag() returns first letter capital
  ✓ isEmpty() function returns first letter capital