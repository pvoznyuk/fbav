import Customer from '../../models/Customer/Customer'
import PhysicalProduct from '../../models/Product/PhysicalProduct'

export default class ShippingSlipGenerator {
	customer: Customer

	constructor(customer: Customer) {
		this.customer = customer
	}

	generate(products: PhysicalProduct[]) {
		// TODO: To implement
		return `Shipping slip for ${this.customer.username}.\n${products
			.map((product) => `${product.name}`)
			.join(',\n')}`
	}
}
