import Customer from '../Customer/Customer'
import PurchaseOrder from './PurchaseOrder'
import MembershipActivatorProcessor from './ProcessorMiddleware/MembershipActivatorProcessor'
import ShippingSlipProcessor from './ProcessorMiddleware/ShippingSlipProcessor'
import PurcahseProcessorMiddleware from './ProcessorMiddleware/PurcahseProcessorMiddleware'

export default class PurchaseProcessor {
	customer: Customer
	processorsMiddlewares: PurcahseProcessorMiddleware[] = []

	constructor(customer: Customer) {
		this.customer = customer

		// [BR1] If the purchase order contains a membership,
		// it has to be activated in the customer account immediately.

		this.processorsMiddlewares.push(
			new MembershipActivatorProcessor(this.customer)
		)

		// [BR2] If the purchase order contains a physical product
		// a shipping slip has to be generated.

		this.processorsMiddlewares.push(
			new ShippingSlipProcessor(this.customer)
		)
	}

	process(): PurchaseOrder {
		if (this.customer.basket.products.length === 0) {
			throw new Error('No items in the basket')
		}

		const purchaseOrder = new PurchaseOrder(
			this.customer.id,
			this.customer.basket.totalPrice(),
			this.customer.basket.products.map(
				(item) => `${item.productType} "${item.name}"`
			)
		)

		this.processorsMiddlewares.forEach((processor) =>
			processor.process(purchaseOrder)
		)

		this.customer.basket.clear()

		return purchaseOrder
	}
}
