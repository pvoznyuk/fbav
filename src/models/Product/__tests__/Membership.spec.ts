import Membership, { MembershipType } from '../Membership'
import DigitalProduct from '../DigitalProduct'

describe('Membership', () => {
	let membership: Membership

	beforeEach(() => {
		membership = new Membership(
			'1',
			'Premium Membership',
			10.0,
			MembershipType.PREMIUM
		)
	})

	it('should have a title', () => {
		expect(membership.name).toBe('Premium Membership')
	})

	it('should not be an instance of DigitalProduct', () => {
		expect(membership).toBeInstanceOf(DigitalProduct)
	})

	it('should not be a physical product', () => {
		expect(membership.isPhysical).toBeFalsy()
	})

	it('should have a membership product type', () => {
		expect(membership.productType).toBe('Membership')
	})
})
