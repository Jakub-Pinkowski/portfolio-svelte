import { describe, expect, it } from 'vitest';
import { execSync } from 'child_process';

describe('Build Tests', () => {
	it('should build successfully', () => {
		expect(() => {
			execSync('npm run build', {
				cwd: process.cwd(),
				stdio: 'pipe',
				encoding: 'utf-8'
			});
		}).not.toThrow();
	}, 60000); // 60-second timeout for build

	it('should pass type checking', () => {
		expect(() => {
			execSync('npm run check', {
				cwd: process.cwd(),
				stdio: 'pipe',
				encoding: 'utf-8'
			});
		}).not.toThrow();
	}, 30000); // 30-second timeout for type checking
});
