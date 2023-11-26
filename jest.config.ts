import type { Config } from 'jest';

const config: Config = {
	verbose: true,
	roots: ['src'],
	testMatch: ['**/?(*.)+(spec|test|steps).+(ts|tsx|js)'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testTimeout: 180000,
	// setupFiles: ['dotenv/config'],
	maxWorkers: 4,
	reporters: [
		'default',
		[
			'jest-html-reporters',
			{
				publicPath: './html-report',
				filename: `Test-Report.html`,
				openReport: false,
				inlineSource: true,
				pageTitle: `Test Report`,
				darkTheme: false,
				includeFailureMsg: true,
				includeConsoleLog: true,
			},
		],
	],
};

export default config;
