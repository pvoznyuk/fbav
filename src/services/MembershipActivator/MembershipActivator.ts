import Customer from '../../models/Customer/Customer'

export default abstract class MembershipActivator {
	customer: Customer

	constructor(customer: Customer) {
		this.customer = customer
	}

	abstract activate(): void
}
