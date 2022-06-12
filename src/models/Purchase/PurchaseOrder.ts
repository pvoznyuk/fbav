import Customer from '../Customer/Customer'

export default class PurchaseOrder {
	id: string
	customerId: Customer['id']
	totalPrice: number
	itemLines: string[]
	shippingSlip?: string

	constructor(customerId: string, totalPrice: number, itemLines: string[]) {
		this.id = Math.floor(Math.random() * 10000).toString() // TODO: generate a unique id
		this.customerId = customerId
		this.totalPrice = totalPrice
		this.itemLines = itemLines
	}

	addShippingSlip(shippingSlip: string) {
		this.shippingSlip = shippingSlip
	}
}
