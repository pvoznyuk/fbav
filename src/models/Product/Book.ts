import PhysicalProduct from './PhysicalProduct'

export default class Book extends PhysicalProduct {
	get productType(): string {
		return 'Book'
	}
}
