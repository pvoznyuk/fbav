export default abstract class Product {
	id: string
	name: string
	price: number

	constructor(id: string, name: string, price: number) {
		this.id = id
		this.name = name
		this.price = price
	}

	abstract get productType(): string
}
