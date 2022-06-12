import Product from '../../Product/Product'
import Customer from '../../Customer/Customer'
import Book from '../../Product/Book'
import Video from '../../Product/Video'
import Membership, { MembershipType } from '../../Product/Membership'
import PurchaseOrder from '../PurchaseOrder'

describe('PurchaseOrder', () => {
	let mockProducts: Product[]
	let customer: Customer
	let purchaseOrder: PurchaseOrder

	beforeEach(() => {
		mockProducts = [
			new Book('1', 'Alice in Wonderland', 10),
			new Book('2', 'The Hobbit', 10),
			new Video('3', 'Full Metal Jacket', 3.5),
			new Membership(
				'4',
				'Book Club Membership',
				0.0,
				MembershipType.BOOKS
			),
		]
		customer = new Customer('uid', 'Jorge Luis Borges', [], mockProducts)
		purchaseOrder = new PurchaseOrder(
			customer.id,
			customer.basket.totalPrice(),
			[
				'Book "Alice in Wonderland"',
				'Book "The Hobbit"',
				'Video "Full Metal Jacket"',
				'Membership "Book Club Membership"',
			]
		)
	})

	it('should does not have a shipping slip by default', () => {
		expect(purchaseOrder.shippingSlip).toBeFalsy()
	})

	it('should have id to be generatedt', () => {
		expect(purchaseOrder.id).toBeTruthy()
	})

	it('should have a total price', () => {
		expect(purchaseOrder.totalPrice).toBe(customer.basket.totalPrice())
	})

	it('should have a list of items', () => {
		expect(purchaseOrder.itemLines).toEqual([
			'Book "Alice in Wonderland"',
			'Book "The Hobbit"',
			'Video "Full Metal Jacket"',
			'Membership "Book Club Membership"',
		])
	})

	it('should have a customer id', () => {
		expect(purchaseOrder.customerId).toBe(customer.id)
	})
})
