const printstyled = require('.');
const test = require('ava');

test('something', t => {
	console.log(t);
	console.log(printstyled('hello', 'blue'));
	t.pass();
});

test('foo', t => {
	console.log(printstyled('Blue, Bold Text', 'blue', ['bold']));
	t.pass();
});

test('colorized', t => {
	console.log(printstyled('Green Text', 'green'));
	t.pass();
});

test('stylized', t => {
	console.log(
		printstyled('Green, Bold, Italic Text', 'green', ['bold', 'italic']));
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});
