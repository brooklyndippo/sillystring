/* eslint-disable no-undef, semi  */
const ss = require('../src/index');

test('Sanity check', () => {
  expect(2 + 2).toBe(4)
})

test('capitalize() returns first letter capital', () => {
  expect(ss.capitalize('hello world')).toBe('Hello world')
})

test('allCaps() returns first letter capital', () => {
  expect(ss.allCaps('foo bar')).toBe('FOO BAR')
})

test('capitalizeWords() returns first letter capital', () => {
  expect(ss.capitalizeWords('do all the things')).toBe('Do All The Things')
})

test('removeExtraSpaces() returns first letter capital', () => {
  expect(ss.removeExtraSpaces('   Hello    world!   ')).toBe('Hello world!')
})

test('kebabCase() returns first letter capital', () => {
  expect(ss.kebabCase(' Hello world ')).toBe('hello-world')
})

test('snakeCase() returns first letter capital', () => {
  expect(ss.snakeCase(' what the heck ')).toBe('what_the_heck')
})

test('camelCase() returns first letter capital', () => {
  expect(ss.camelCase('Camel Case')).toBe('camelCase')
})

test('shift() returns first letter capital', () => {
  expect(ss.shift('foobar', 3)).toBe('barfoo')
})

test('makeHashTag() returns first letter capital', () => {
  expect(ss.makeHashTag('Amazing bongo drums for sale')).toEqual(['#amazing', '#bongo', '#drums', '#for', '#sale'])
})

test('isEmpty() function returns first letter capital', () => {
  expect(ss.isEmpty('Abc def')).toBeFalsy()
})
