import Customer from '../../models/Customer/Customer'
import { MembershipType } from '../../models/Product/Membership'
import BookClubMembershipActivator from './BookClubMembershipActivator'
import MembershipActivator from './MembershipActivator'
import PremiumMembershipActivator from './PremiumMembershipActivator'
import VideoClubMembershipActivator from './VideoClubMembershipActivator'

export default class MembershipActivatorFactory {
	activator: MembershipActivator

	createActivator(customer: Customer, membershipType: MembershipType) {
		switch (membershipType) {
			case MembershipType.BOOKS:
				this.activator = new BookClubMembershipActivator(customer)
				break
			case MembershipType.VIDEOS:
				this.activator = new VideoClubMembershipActivator(customer)
				break
			case MembershipType.PREMIUM:
				this.activator = new PremiumMembershipActivator(customer)
				break
			default:
				throw new Error('Unknown membership type')
		}
		return this.activator
	}
}
