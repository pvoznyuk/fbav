import DigitalProduct from './DigitalProduct'

export enum MembershipType {
	BOOKS = 'Book Club',
	VIDEOS = 'Video Club',
	PREMIUM = 'Premium',
}

export default class Membership extends DigitalProduct {
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

	get productType(): string {
		return 'Membership'
	}
}
