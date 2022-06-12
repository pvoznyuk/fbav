import Membership, { MembershipType } from '../Membership'
import DigitalProduct from '../DigitalProduct'

describe('Membership', () => {
	let bookClumMembership = new Membership(
		'1',
		'Book Club Membership',
		10.0,
		MembershipType.BOOKS
	)
	let videoClumMembership = new Membership(
		'2',
		'Video Club Membership',
		10.0,
		MembershipType.VIDEOS
	)
	let premiumMembership = new Membership(
		'3',
		'Premium Membership',
		10.0,
		MembershipType.PREMIUM
	)

	it('should have a title', () => {
		expect(bookClumMembership.name).toBe('Book Club Membership')
		expect(videoClumMembership.name).toBe('Video Club Membership')
		expect(premiumMembership.name).toBe('Premium Membership')
	})

	it('should not be an instance of DigitalProduct', () => {
		expect(premiumMembership).toBeInstanceOf(DigitalProduct)
	})

	it('should have a membership product type', () => {
		expect(bookClumMembership.productType).toBe('Membership')
		expect(videoClumMembership.productType).toBe('Membership')
		expect(premiumMembership.productType).toBe('Membership')
	})

	it('should return the membership typ', () => {
		expect(bookClumMembership.membershipType).toBe(MembershipType.BOOKS)
		expect(videoClumMembership.membershipType).toBe(MembershipType.VIDEOS)
		expect(premiumMembership.membershipType).toBe(MembershipType.PREMIUM)
	})
})
