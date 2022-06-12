import Product from '../../models/Product/Product'
import Customer from '../../models/Customer/Customer'
import Book from '../../models/Product/Book'
import ShippingSlipGenerator from '../ShippingSlipGenerator'

describe('ShippingSlipGenerator', () => {
	let mockProducts: Product[]
	let customer: Customer
	let shippingSlipGenerator: ShippingSlipGenerator

	beforeEach(() => {
		mockProducts = [
			new Book('1', 'Alice in Wonderland', 10),
			new Book('2', 'The Hobbit', 10),
		]
		customer = new Customer('uid', 'Jorge Luis Borges', [], mockProducts)
		shippingSlipGenerator = new ShippingSlipGenerator(customer)
	})

	it('should generate a shipping slip', () => {
		expect(shippingSlipGenerator.generate(mockProducts)).toBe(
			`Shipping slip for Jorge Luis Borges.\nAlice in Wonderland,\nThe Hobbit`
		)
	})
})
