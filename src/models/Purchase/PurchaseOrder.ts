import Customer from '../Customer/Customer'

export default class PurchaseOrder {
	id: string
	customerId: Customer['id']
	totalPrice: number
	itemLines: string[]
	shippingSlip?: string

	constructor(
		customerId: string,
		totalPrice: number,
		itemLines: string[],
		shippingSlip?: string
	) {
		this.id = Math.floor(Math.random() * 10000).toString() // TODO: generate id from uuid
		this.customerId = customerId
		this.totalPrice = totalPrice
		this.itemLines = itemLines
		if (shippingSlip) {
			this.shippingSlip = shippingSlip
		}
	}
}
