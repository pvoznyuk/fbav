import PhysicalProduct from './PhysicalProduct'
import { ProductType } from './Product'

export default class Book extends PhysicalProduct {
	productType = ProductType.BOOK
}
