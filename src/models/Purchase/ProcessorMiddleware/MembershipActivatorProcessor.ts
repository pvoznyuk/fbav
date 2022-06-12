import Customer from '../../Customer/Customer'
import Membership from '../../Product/Membership'
import PurchaseOrder from '../PurchaseOrder'
import MembershipActivatorFactory from '../../../services/MembershipActivator/MembershipActivatorFactory'
import AbstractPurcahseProcessorMiddleware from './AbstractPurcahseProcessorMiddleware'

export default class MembershipActivatorProcessor extends AbstractPurcahseProcessorMiddleware {
	customer: Customer
	membershipActivatorFactory: MembershipActivatorFactory

	constructor(customer: Customer) {
		super(customer)
		this.membershipActivatorFactory = new MembershipActivatorFactory()
	}

	process(purchaseOrder: PurchaseOrder): PurchaseOrder {
		this.customer.basket.products
			.filter((item) => item instanceof Membership)
			.forEach((item) => {
				this.membershipActivatorFactory
					.createActivator(
						this.customer,
						(item as Membership).membershipType
					)
					.activate()
			})

		return purchaseOrder
	}
}
