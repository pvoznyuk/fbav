import Video from '../Video'
import { ProductType } from '../Product'
import DigitalProduct from '../DigitalProduct'

describe('Video', () => {
	let video: Video

	beforeEach(() => {
		video = new Video('1', 'The Hobbit', 10.0)
	})

	it('should have a title', () => {
		expect(video.name).toBe('The Hobbit')
	})

	it('should not be an instance of DigitalProduct', () => {
		expect(video).toBeInstanceOf(DigitalProduct)
	})

	it('should not be a physical product', () => {
		expect(video.isPhysical).toBeFalsy()
	})

	it('should have a video product type', () => {
		expect(video.productType).toBe(ProductType.VIDEO)
	})
})