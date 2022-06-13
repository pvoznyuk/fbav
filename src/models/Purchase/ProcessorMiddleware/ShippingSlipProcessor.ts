import Customer from '../../Customer/Customer'
import PhysicalProduct from '../../Product/PhysicalProduct'
import PurchaseOrder from '../PurchaseOrder'
import ShippingSlipGenerator from '../../../services/ShippingSlipGenerator/ShippingSlipGenerator'
import PurcahseProcessorMiddleware from './PurcahseProcessorMiddleware'

export default class ShippingSlipProcessor extends PurcahseProcessorMiddleware {
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
			const shippingSlip = this.shippingSlipGenerator.generate(
				physicalItems as PhysicalProduct[]
			)
			if (shippingSlip) {
				purchaseOrder.addShippingSlip(shippingSlip)
			}
		}

		return purchaseOrder
	}
}
