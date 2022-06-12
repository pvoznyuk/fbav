import Customer from '../../../models/Customer/Customer'
import VideoClubMembershipActivator from '../VideoClubMembershipActivator'
import { MembershipType } from '../../../models/Product/Membership'

describe('VideoClubMembershipActivator', () => {
	let customer: Customer
	let membershipActivator: VideoClubMembershipActivator

	beforeEach(() => {
		customer = new Customer('uid', 'Jorge Luis Borges')
		membershipActivator = new VideoClubMembershipActivator(customer)
	})

	it('should activate membership', () => {
		expect(customer.memberships.length).toBe(0)
		membershipActivator.activate()
		expect(customer.memberships).toContain(MembershipType.VIDEOS)
	})
})
