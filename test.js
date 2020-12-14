import colortext from '.'
const test = require('ava')

test('foo', t => {
  console.log(colortext('Blue, Bold Text', 'blue', ['bold']))
  t.pass()
})

test('colorized', t => {
  console.log(colortext('Green Text', 'green'))
  t.pass()
})

test('stylized', t => {
  console.log(colortext('Green, Bold, Italic Text', 'green', ['bold', 'italic']))
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})
