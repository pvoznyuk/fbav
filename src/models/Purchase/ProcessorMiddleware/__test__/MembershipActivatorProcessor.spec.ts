import Product from '../../../Product/Product'
import Customer from '../../../Customer/Customer'
import Book from '../../../Product/Book'
import Video from '../../../Product/Video'
import Membership, { MembershipType } from '../../../Product/Membership'
import MembershipActivatorProcessor from '../MembershipActivatorProcessor'
import PurchaseOrder from '../../PurchaseOrder'

describe('MembershipActivatorProcessor', () => {
	let mockProducts: Product[]
	let customer: Customer
	let membershipActivatorProcessor: MembershipActivatorProcessor
	let membershipActivatorSpy: jest.SpyInstance
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
			customer.basket.totalPrice,
			[]
		)
		membershipActivatorProcessor = new MembershipActivatorProcessor(
			customer
		)

		membershipActivatorSpy = jest.spyOn(
			membershipActivatorProcessor.membershipActivatorFactory,
			'createActivator'
		)
	})

	it('should activate a purchased membership for the customer', () => {
		expect(customer.memberships).not.toContain(MembershipType.BOOKS)
		membershipActivatorProcessor.process(purcaseOrder)
		expect(customer.memberships).toContain(MembershipType.BOOKS)
		expect(membershipActivatorSpy).toHaveBeenCalledWith(
			customer,
			MembershipType.BOOKS
		)
	})
})
