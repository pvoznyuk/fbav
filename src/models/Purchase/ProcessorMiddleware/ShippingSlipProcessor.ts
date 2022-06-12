import Customer from '../../Customer/Customer'
import PhysicalProduct from '../../Product/PhysicalProduct'
import PurchaseOrder from '../PurchaseOrder'
import ShippingSlipGenerator from '../../../services/ShippingSlipGenerator'
import AbstractPurcahseProcessorMiddleware from './AbstractPurcahseProcessorMiddleware'

export default class MShippingSlipProcessor extends AbstractPurcahseProcessorMiddleware {
	customer: Customer
	shippingSlipGenerator: ShippingSlipGenerator

	constructor(customer: Customer) {
		super(customer)
		this.shippingSlipGenerator = new ShippingSlipGenerator(this.customer)
	}

	process(purchaseOrder: PurchaseOrder): PurchaseOrder {
		const physicalItems = this.customer.basket.products.filter(
			(item) => item instanceof PhysicalProduct
		)

		if (physicalItems.length) {
			purchaseOrder.shippingSlip = this.shippingSlipGenerator.generate(
				physicalItems as PhysicalProduct[]
			)
		}

		return purchaseOrder
	}
}
