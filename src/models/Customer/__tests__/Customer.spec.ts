import Customer from '../Customer'
import { MembershipType } from '../../Product/Membership'

describe('Customer', () => {
	let customer: Customer

	beforeEach(() => {
		customer = new Customer('a', 'Jorge Luis Borges')
	})

	it('should add a membership', () => {
		expect(customer.memberships.length).toBe(0)
		customer.addMembership(MembershipType.BOOKS)
		expect(customer.memberships).toContain(MembershipType.BOOKS)

		customer.addMembership(MembershipType.VIDEOS)
		expect(customer.memberships).toContain(MembershipType.VIDEOS)

		customer.addMembership(MembershipType.PREMIUM)
		expect(customer.memberships).toContain(MembershipType.PREMIUM)
	})

	it('should have book club access if customer has Book Club Membership', () => {
		expect(customer.hasBookClubAccess).toBeFalsy()
		customer.addMembership(MembershipType.BOOKS)
		expect(customer.hasBookClubAccess).toBeTruthy()
		expect(customer.hasVideoClubAccess).toBeFalsy()
	})

	it('should have video club access if customer has Video Club Membership', () => {
		expect(customer.hasVideoClubAccess).toBeFalsy()
		customer.addMembership(MembershipType.VIDEOS)
		expect(customer.hasVideoClubAccess).toBeTruthy()
		expect(customer.hasBookClubAccess).toBeFalsy()
	})

	it('should have video club and book club access if customer has Premium Membership', () => {
		expect(customer.hasVideoClubAccess).toBeFalsy()
		expect(customer.hasBookClubAccess).toBeFalsy()
		customer.addMembership(MembershipType.PREMIUM)
		expect(customer.hasVideoClubAccess).toBeTruthy()
		expect(customer.hasBookClubAccess).toBeTruthy()
	})
})
