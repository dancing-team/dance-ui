import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      //指定使用的tsconfig.json
      tsConfigFilePath: './tsconfig.json',
    }),
    //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
    // dts({
    //   outputDir: 'lib',
    //   tsConfigFilePath: './tsconfig.json',
    // }),
  ],
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'dist',
    //压缩
    minify: false,
    // 内联 css
    // cssCodeSplit: true,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      name: 'dance-ui',
      fileName: 'dance-ui',
    },
  },
})
