/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [false, 'Danilo', 5, null, '-0'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction([1, 'Danilo', 3])[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2( arr, numero ) {
	return arr [ numero ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [ 'Danilo', 13, '[]', true, 0];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2( myArray, 0 );
myFunction2( myArray, 1 );
myFunction2( myArray, 2 );
myFunction2( myArray, 3 );
myFunction2( myArray, 4 );
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName) {

	var allBooks = {
		'A cabana': {
			quantidadePaginas: 230, autor: 'desconhecido', editora: 'desconhecido'
		},
		'A batalha do Apocalipse': {
			quantidadePaginas: 360, autor: 'desconhecido', editora: 'desconhecido'
		},
		'Biblia': {
			quantidadePaginas: 1000, autor: 'Deus', editora: 'Deus'
		}
	}	
		if( !bookName ) {
			
			return allBooks;
		}

		return allBooks [bookName];

} 

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'A batalha do Apocalipse';
console.log( 'O livro '+ bookName + ' tem ' + book('A batalha do Apocalipse').quantidadePaginas + ' paginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName + ' é ' book ( bookName ).autor + '.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book( bookName ).editora + '.');