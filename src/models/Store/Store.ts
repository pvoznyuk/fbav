import Customer from '../Customer/Customer'
import Product from '../Product/Product'
import PurchaseOrder from '../Purchase/PurchaseOrder'
import PurchaseProcessor from '../Purchase/PurchaseProcessor'

export default class Store {
	customer: Customer = null
	products: Product[] = []

	constructor(products: Product[]) {
		this.products = products
	}

	login(customer: Customer) {
		this.customer = customer
	}

	logout() {
		this.customer = null
	}

	purchase(): PurchaseOrder {
		if (!this.customer) {
			throw new Error('No customer logged in')
		}

		const purchaseProcessor = new PurchaseProcessor(this.customer)
		return purchaseProcessor.process()
	}
}
