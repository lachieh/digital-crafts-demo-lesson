// Log
console.log('Console Examples');

// Info
console.info('Player One.');

// Warn
console.warn('Ready!');

// Error
console.error('FIGHT!');

// Console.time()
console.time('example');

setTimeout(function() {
	console.timeEnd('example');
}, 2000);

// Trace
function funcA() {
	function funcB() {
		function funcC() {
			console.trace();
		}
		funcC();
	}
	funcB()
}
funcA();

// Assert Fail
var a = 1;
var b = 2;
console.assert(a === b, 'a does not equal b');

// Assert Pass
var c = 1;
var d = 1;
console.assert(c === d, 'c does not equal d');

// Group
console.group('Example Group');
console.log('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sapiente, atque cupiditate quibusdam harum animi temporibus nihil, ex vitae, perspiciatis, dolorum quod. Facilis quibusdam eius voluptatum. Deserunt dolores vitae iste!')
console.info('Velit quam voluptas corporis laudantium repudiandae dolore, explicabo tenetur placeat repellat, nesciunt veritatis repellendus animi. Maiores modi, provident, sed officiis soluta excepturi? Illo ratione sapiente, nisi ipsum inventore aspernatur rem.');
console.warn('Voluptas blanditiis, minima sit? Accusamus rerum officiis ut dolores beatae alias provident fugiat est sit magnam dolorum voluptatem natus, explicabo facere at eligendi aut quia? Consequuntur odio nesciunt neque, quos.');
console.error('Doloremque assumenda deleniti ipsum consequatur fugit soluta earum. Accusantium ex, culpa doloribus vero, nostrum, mollitia ratione consectetur quidem minima est pariatur libero odit. Unde, reiciendis, officia deleniti impedit nobis velit.');
console.groupEnd();

// groupdCollapsed
console.groupCollapsed('Collapsed Example Group');
console.log('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sapiente, atque cupiditate quibusdam harum animi temporibus nihil, ex vitae, perspiciatis, dolorum quod. Facilis quibusdam eius voluptatum. Deserunt dolores vitae iste!')
console.info('Velit quam voluptas corporis laudantium repudiandae dolore, explicabo tenetur placeat repellat, nesciunt veritatis repellendus animi. Maiores modi, provident, sed officiis soluta excepturi? Illo ratione sapiente, nisi ipsum inventore aspernatur rem.');
console.warn('Voluptas blanditiis, minima sit? Accusamus rerum officiis ut dolores beatae alias provident fugiat est sit magnam dolorum voluptatem natus, explicabo facere at eligendi aut quia? Consequuntur odio nesciunt neque, quos.');
console.error('Doloremque assumenda deleniti ipsum consequatur fugit soluta earum. Accusantium ex, culpa doloribus vero, nostrum, mollitia ratione consectetur quidem minima est pariatur libero odit. Unde, reiciendis, officia deleniti impedit nobis velit.');
console.groupEnd();

// Clear
// console.clear();
