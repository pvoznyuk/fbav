import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	verbose: true,
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	collectCoverage: true,
	collectCoverageFrom: ['./src/**'],
	coverageThreshold: {
		global: {
			lines: 90,
		},
	},
}
export default config
