import Product from '../../Product/Product'
import Customer from '../../Customer/Customer'
import Book from '../../Product/Book'
import Store from '../Store'
import PurchaseOrder from 'src/models/Purchase/PurchaseOrder'

describe('Sore', () => {
	let store: Store
	let mockProducts: Product[]
	let customer: Customer

	mockProducts = [new Book('1', 'Alice in Wonderland', 10)]
	customer = new Customer('uid', 'Jorge Luis Borges', [], mockProducts)
	store = new Store(mockProducts)

	it('should login a customer', () => {
		expect(store.customer).toBeFalsy()
		store.login(customer)
		expect(store.customer).toBe(customer)
	})

	it('should process a purchase for a customer', () => {
		expect((store.purchase() as PurchaseOrder).totalPrice).toBe(10)
	})

	it('should logout a customer', () => {
		store.logout()
		expect(store.customer).toBeFalsy()
	})

	it('should not process a purchase if no customer', () => {
		expect(() => {
			store.purchase()
		}).toThrowError('No customer logged in')
	})
})
