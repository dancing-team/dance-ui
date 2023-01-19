import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libCss(),
    dts({
      //指定使用的tsconfig.json
      tsConfigFilePath: './tsconfig.json',
      /**
      * 是否生成类型声明入口
      * 当为 true 时会基于 package.json 的 types 字段生成，或者 `${outputDir}/index.d.ts`
      * 当开启打包类型文件时强制为 true
      * @default false
      */
      insertTypesEntry: true
    }),
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
      // formatType: es、umd等
      fileName: formatType => `dance-ui.${formatType}.js`
    },
  },
})
