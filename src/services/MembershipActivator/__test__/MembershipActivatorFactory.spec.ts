import Customer from '../../../models/Customer/Customer'
import { MembershipType } from '../../../models/Product/Membership'
import BookClubMembershipActivator from '../BookClubMembershipActivator'
import MembershipActivatorFactory from '../MembershipActivatorFactory'
import PremiumMembershipActivator from '../PremiumMembershipActivator'
import VideoClubMembershipActivator from '../VideoClubMembershipActivator'

describe('MembershipActivatorFactory', () => {
	let membershipActivatorFactory: MembershipActivatorFactory
	let customer: Customer

	beforeEach(() => {
		membershipActivatorFactory = new MembershipActivatorFactory()
		customer = new Customer('uid', 'Jorge Luis Borges')
	})

	it('should create BookClubMembershipActivator', () => {
		const membershipActivator = membershipActivatorFactory.createActivator(
			customer,
			MembershipType.BOOKS
		)
		expect(membershipActivator).toBeInstanceOf(BookClubMembershipActivator)
	})

	it('should create VideoClubMembershipActivator', () => {
		const membershipActivator = membershipActivatorFactory.createActivator(
			customer,
			MembershipType.VIDEOS
		)
		expect(membershipActivator).toBeInstanceOf(VideoClubMembershipActivator)
	})

	it('should create PremiumMembershipActivator', () => {
		const membershipActivator = membershipActivatorFactory.createActivator(
			customer,
			MembershipType.PREMIUM
		)
		expect(membershipActivator).toBeInstanceOf(PremiumMembershipActivator)
	})

	it('should throw error when membership type is not supported', () => {
		expect(() => {
			membershipActivatorFactory.createActivator(
				customer,
				'invalid' as MembershipType
			)
		}).toThrowError('Unknown membership type')
	})
})
