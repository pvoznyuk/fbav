export enum ProductType {
	BOOK = 'Book',
	VIDEO = 'Video',
	MEMBERSHIP = 'Membership',
}

export default abstract class Product {
	id: string
	name: string
	price: number
	productType: ProductType
	isPhysical: boolean

	constructor(id: string, name: string, price: number) {
		this.id = id
		this.name = name
		this.price = price
	}
}
