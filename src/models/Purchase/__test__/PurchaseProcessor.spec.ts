import Product from '../../Product/Product'
import Customer from '../../Customer/Customer'
import Book from '../../Product/Book'
import Video from '../../Product/Video'
import Membership, { MembershipType } from '../../Product/Membership'
import PurchaseProcessor from '../PurchaseProcessor'
import PurchaseOrder from '../PurchaseOrder'

describe('PurchaseProcessor', () => {
	let mockProducts: Product[]
	let customer: Customer
	let purchaseProcessor: PurchaseProcessor
	let purcaseOrder: PurchaseOrder
	let membershipProcessorSpy: jest.SpyInstance
	let shippingProcessorSpy: jest.SpyInstance

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
		purchaseProcessor = new PurchaseProcessor(customer)
		purcaseOrder = new PurchaseOrder(
			customer.id,
			customer.basket.totalPrice(),
			[
				'Book "Alice in Wonderland"',
				'Book "The Hobbit"',
				'Video "Full Metal Jacket"',
				'Membership "Book Club Membership"',
			]
		)

		membershipProcessorSpy = jest.spyOn(
			purchaseProcessor.processorsMiddlewares[0],
			'process'
		)

		shippingProcessorSpy = jest.spyOn(
			purchaseProcessor.processorsMiddlewares[1],
			'process'
		)
	})

	it('should create a purchase order', () => {
		const nextPurcahseOrdrer = purchaseProcessor.process()
		expect(nextPurcahseOrdrer).toBeInstanceOf(PurchaseOrder)
		expect(nextPurcahseOrdrer.customerId).toBe(customer.id)
		expect(nextPurcahseOrdrer.totalPrice).toBe(23.5)
		expect(nextPurcahseOrdrer.itemLines).toEqual([
			'Book "Alice in Wonderland"',
			'Book "The Hobbit"',
			'Video "Full Metal Jacket"',
			'Membership "Book Club Membership"',
		])
	})

	it('should call membership activator processor', () => {
		purchaseProcessor.process()
		expect(membershipProcessorSpy).toHaveBeenCalled()
	})

	it('should generate shipping slip for physical products', () => {
		const nextPurcaseOrder = purchaseProcessor.process()
		expect(shippingProcessorSpy).toHaveBeenCalled()
		expect(nextPurcaseOrder.shippingSlip).toBeTruthy()
	})

	it("should clear the customer's basket after processing the purchase", () => {
		purchaseProcessor.process()
		expect(customer.basket.products).toEqual([])
	})

	it('should throw error when trying to purchase an empty basket', () => {
		purchaseProcessor.customer.basket.products = []
		expect(() => {
			purchaseProcessor.process()
		}).toThrowError('No items in the basket')
	})
})
