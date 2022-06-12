import Customer from '../../models/Customer/Customer'
import MembershipActivator from './MembershipActivator'
import { MembershipType } from '../../models/Product/Membership'

export default class VideoClubMembershipActivator extends MembershipActivator {
	customer: Customer

	constructor(customer: Customer) {
		super(customer)
	}

	activate() {
		this.customer.addMembership(MembershipType.VIDEOS)
	}
}
