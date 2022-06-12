import Product from '../Product/Product'

export default class Basket {
	products: Product[] = []

	constructor(products = []) {
		this.products = products
	}

	hasProduct(productId: Product['id']) {
		return this.products.some((product) => product.id === productId)
	}

	addItem(product: Product) {
		if (!this.hasProduct(product.id)) {
			this.products.push(product)
		}
	}

	removeItem(productId: Product['id']) {
		this.products = this.products.filter(
			(product) => product.id !== productId
		)
	}

	clear() {
		this.products = []
	}

	totalPrice() {
		return this.products.reduce((total, item) => total + item.price, 0)
	}
}
