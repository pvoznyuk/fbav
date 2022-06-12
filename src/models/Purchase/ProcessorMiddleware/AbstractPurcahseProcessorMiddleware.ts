import Customer from '../../Customer/Customer'
import PurchaseOrder from '../PurchaseOrder'

export default abstract class AbstractPurcahseProcessorMiddleware {
	customer: Customer

	constructor(customer: Customer) {
		this.customer = customer
	}

	abstract process(purchaseOrder: PurchaseOrder): PurchaseOrder
}
