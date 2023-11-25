import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	moduleDirectories: ['node_modules', './src'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	rootDir: './src',
	verbose: true,
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
};
export default config;
