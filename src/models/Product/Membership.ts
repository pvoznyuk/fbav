import DigitalProduct from './DigitalProduct'
import { ProductType } from './Product'

export enum MembershipType {
	BOOKS = 'Book Club',
	VIDEOS = 'Video Club',
	PREMIUM = 'Premium',
}

export default class Membership extends DigitalProduct {
	productType = ProductType.MEMBERSHIP
	membershipType: MembershipType

	constructor(
		id: string,
		name: string,
		price: number,
		membershipType: MembershipType
	) {
		super(id, name, price)
		this.membershipType = membershipType
	}
}
