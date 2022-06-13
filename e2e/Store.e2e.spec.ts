import Customer from '../src/models/Customer/Customer'
import Membership, { MembershipType } from '../src/models/Product/Membership'
import Book from '../src/models/Product/Book'
import PurchaseProcessor from '../src/models/Purchase/PurchaseProcessor'
import PurchaseOrder from '../src/models/Purchase/PurchaseOrder'
import Store from '../src/models/Store/Store'

describe('Store experience', () => {
	let customer = new Customer('a', 'Jorge Luis Borges')
	let purcahseOrdrer: PurchaseOrder
	let store: Store

	store = new Store([
		new Book('1', 'Alice in Wonderland', 10),
		new Membership('3', 'Book Club Membership', 0.0, MembershipType.BOOKS),
	])

	store.login(customer)

	it('shoud add products to the basket', () => {
		expect(customer.memberships.length).toBe(0)
		expect(customer.basket.products.length).toBe(0)
		customer.basket.addItem(store.products[0])
		expect(customer.basket.products.length).toBe(1)
		expect(customer.basket.products[0].id).toBe('1')
		customer.basket.addItem(store.products[1])
		expect(customer.basket.products.length).toBe(2)
		expect(customer.basket.products[1].id).toBe('3')
	})

	it('should proceed the purchase', () => {
		purcahseOrdrer = store.purchase()
		expect(purcahseOrdrer).toBeInstanceOf(PurchaseOrder)
		expect(purcahseOrdrer.customerId).toBe(customer.id)
		expect(purcahseOrdrer.totalPrice).toBe(10.0)
		expect(purcahseOrdrer.itemLines).toEqual([
			'Book "Alice in Wonderland"',
			'Membership "Book Club Membership"',
		])
	})

	it('should activate a membership for a customer', () => {
		expect(customer.memberships.length).toBe(1)
		expect(customer.memberships[0]).toContain(MembershipType.BOOKS)
	})

	it('should generate a shipping slip for physical products', () => {
		expect(purcahseOrdrer.shippingSlip).toBeTruthy()
	})

	it("should clear the customer's basket", () => {
		expect(customer.basket.products.length).toBe(0)
	})
})
