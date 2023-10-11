import { defineConfig } from 'vite'
import nlf from '../dist/index.mjs'

export default defineConfig({
		plugins: [
			nlf()
		],
		build: {
				emptyOutDir: false,
				rollupOptions: {
						input: './index.mjs'
				}
		}
});
