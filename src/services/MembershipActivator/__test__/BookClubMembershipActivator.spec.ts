import Customer from '../../../models/Customer/Customer'
import BookClubMembershipActivator from '../BookClubMembershipActivator'
import { MembershipType } from '../../../models/Product/Membership'

describe('BookClubMembershipActivator', () => {
	let customer: Customer
	let membershipActivator: BookClubMembershipActivator

	beforeEach(() => {
		customer = new Customer('uid', 'Jorge Luis Borges')
		membershipActivator = new BookClubMembershipActivator(customer)
	})

	it('should activate membership', () => {
		expect(customer.memberships.length).toBe(0)
		membershipActivator.activate()
		expect(customer.memberships).toContain(MembershipType.BOOKS)
	})
})
