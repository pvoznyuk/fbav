import Customer from '../../../models/Customer/Customer'
import PremiumMembershipActivator from '../PremiumMembershipActivator'
import { MembershipType } from '../../../models/Product/Membership'

describe('PremiumMembershipActivator', () => {
	let customer: Customer
	let membershipActivator: PremiumMembershipActivator

	beforeEach(() => {
		customer = new Customer('uid', 'Jorge Luis Borges')
		membershipActivator = new PremiumMembershipActivator(customer)
	})

	it('should activate membership', () => {
		expect(customer.memberships.length).toBe(0)
		membershipActivator.activate()
		expect(customer.memberships).toContain(MembershipType.PREMIUM)
	})
})
