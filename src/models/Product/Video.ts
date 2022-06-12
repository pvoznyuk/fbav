import DigitalProduct from './DigitalProduct'

export default class Video extends DigitalProduct {
	get productType(): string {
		return 'Video'
	}
}
