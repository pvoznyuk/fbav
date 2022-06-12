import Product from '../../Product/Product'
import Basket from '../Basket'
import Book from '../../Product/Book'
import Video from '../../Product/Video'
import Membership, { MembershipType } from '../../Product/Membership'

describe('Basket', () => {
	let mockProducts: Product[]
	let basket: Basket

	beforeEach(() => {
		mockProducts = [
			new Book('1', 'Alice in Wonderland', 10),
			new Video('2', 'Koyaniskatsi', 3.99),
			new Membership(
				'3',
				'Book Club Membership',
				0.0,
				MembershipType.BOOKS
			),
		]
		basket = new Basket(mockProducts)
	})

	it('should check if a product in the basket items', () => {
		;['1', '2', '3'].forEach((productId) => {
			expect(basket.hasProduct(productId)).toBeTruthy()
		})
		expect(basket.hasProduct('ABC')).toBeFalsy()
	})

	it('should add a product to the basket', () => {
		basket.addItem(new Book('4', 'The Hobbit', 10))
		expect(basket.hasProduct('4')).toBeTruthy()
	})

	it('should not add a product to the basket if it is already there', () => {
		basket.addItem(new Book('1', 'Alice in Wonderland', 10))
		expect(basket.products.length).toBe(3)
	})

	it('should remove a product from the basket', () => {
		basket.removeItem('1')
		expect(basket.hasProduct('1')).toBeFalsy()
	})

	it('should calculate total price', () => {
		expect(basket.totalPrice).toBe(13.99)
		basket.addItem(new Book('4', 'The Hobbit', 10.01))
		expect(basket.totalPrice).toBe(24.0)
	})
})
