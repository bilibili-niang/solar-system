import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	/*output: {
		// 设置打包后的文件目录
		dir: 'dist/',
		// 外部化 Vue，这样它就不会被打包到最终的 JavaScript 文件中
		external: ['vue']
	},*/
	build: {
		outDir: 'docs', // 指定构建输出目录
		minify: true, // 启用代码压缩
		rollupOptions: {}
	}
})
