import test from 'ava';
import colortext from '.';

test('title', t => {
	t.throws(() => {
		colortext(123);
	}, {
		instanceOf: TypeError, message: 'Expected a string, got number'
	});
	t.is(colortext('some text'), 'blue');
});
