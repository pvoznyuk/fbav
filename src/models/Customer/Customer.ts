import { MembershipType } from '../Product/Membership'
import Basket from './Basket'

export default class Customer {
	id: string
	username: string
	memberships: MembershipType[]
	basket: Basket

	constructor(id, username, memberships = [], products = []) {
		this.id = id
		this.username = username
		this.memberships = memberships
		this.basket = new Basket(products)
	}

	get hasBookClubAccess(): boolean {
		return (
			this.memberships.includes(MembershipType.BOOKS) ||
			this.memberships.includes(MembershipType.PREMIUM)
		)
	}

	get hasVideoClubAccess(): boolean {
		return (
			this.memberships.includes(MembershipType.VIDEOS) ||
			this.memberships.includes(MembershipType.PREMIUM)
		)
	}

	addMembership(membershipType: MembershipType) {
		if (!this.memberships.includes(membershipType)) {
			this.memberships.push(membershipType)
		}
	}
}
