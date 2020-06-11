function makeBuffer() {
	let strings = '';

	return {
		add : function(value) {
			strings = strings + value + ' '
		},
		print : function() {
			return strings;
		}
	}
}

let buffer = makeBuffer();

buffer.add('JavaScript');
buffer.add('Вчити');
buffer.add('Потрібно!');

console.log(buffer.print());

let buffer1 = makeBuffer();

buffer1.add(0);
buffer1.add(1);
buffer1.add(0);

console.log(buffer1.print());
