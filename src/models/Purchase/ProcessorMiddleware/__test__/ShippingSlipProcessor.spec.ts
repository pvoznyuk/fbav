import Product from '../../../Product/Product'
import Customer from '../../../Customer/Customer'
import Book from '../../../Product/Book'
import Video from '../../../Product/Video'
import Membership, { MembershipType } from '../../../Product/Membership'
import ShippingSlipProcessor from '../ShippingSlipProcessor'
import PurchaseOrder from '../../PurchaseOrder'

describe('ShippingSlipProcessor', () => {
	let mockProducts: Product[]
	let customer: Customer
	let shippingSlipProcessor: ShippingSlipProcessor
	let shippingGeneratotSpy: jest.SpyInstance
	let purcaseOrder: PurchaseOrder

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
		purcaseOrder = new PurchaseOrder(
			customer.id,
			customer.basket.totalPrice(),
			[]
		)
		shippingSlipProcessor = new ShippingSlipProcessor(customer)

		shippingGeneratotSpy = jest.spyOn(
			shippingSlipProcessor.shippingSlipGenerator,
			'generate'
		)
	})

	it('should call a shipping slip generate for physical products', () => {
		shippingSlipProcessor.process(purcaseOrder)
		expect(shippingGeneratotSpy).toHaveBeenCalledWith([
			mockProducts[0],
			mockProducts[1],
		])
	})
})
