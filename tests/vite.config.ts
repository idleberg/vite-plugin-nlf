import { defineConfig } from 'vite';
import nlf from '../index.ts';

export default defineConfig({
	plugins: [nlf()],
	build: {
		emptyOutDir: false,
		rollupOptions: {
			input: './index.ts',
		},
	},
});
