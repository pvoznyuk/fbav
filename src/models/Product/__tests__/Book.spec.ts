import Book from '../Book'
import PhysicalProduct from '../PhysicalProduct'

describe('Book', () => {
	let book: Book

	beforeEach(() => {
		book = new Book('1', 'The Hobbit', 10.0)
	})

	it('should have a title', () => {
		expect(book.name).toBe('The Hobbit')
	})

	it('should be an instance of PhysicalProduct', () => {
		expect(book).toBeInstanceOf(PhysicalProduct)
	})

	it('should have a book product type', () => {
		expect(book.productType).toBe('Book')
	})
})
