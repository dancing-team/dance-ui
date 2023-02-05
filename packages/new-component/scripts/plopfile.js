import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function (plop) {
  plop.setGenerator('component', {
    description: '创建一个新组件',
    prompts: [
      { type: 'input', name: 'name', message: '请输入组件名称（pascalCase命名，多个单词以中横线命名，如Button、DatePicker' },
      { type: 'input', name: 'CN', message: '请输入组件中文名称（如：按钮）' },
      { type: 'input', name: 'description', message: '请输入组件描述' },
    ],
    // https://github.com/plopjs/plop#case-modifiers
    actions: [
      // index
      {
        // ../../components/src/Button/index.tsx
        type: 'add',
        path: path.resolve(__dirname, '../../components/src/{{pascalCase name}}/index.ts'),
        templateFile: path.resolve(__dirname, '../templates/component/index.hbs'),
      },
      {
        // ../../components/src/Button/Button.tsx
        type: 'add',
        path: path.resolve(__dirname, '../../components/src/{{pascalCase name}}/{{pascalCase name}}.tsx'),
        templateFile: path.resolve(__dirname, '../templates/component/comp.hbs'),
      },
      // style
      {
        // ../../components/src/Button/style/index.css
        type: 'add',
        path: path.resolve(__dirname, '../../components/src/{{pascalCase name}}/style/index.css'),
        templateFile: path.resolve(__dirname, '../templates/component/style/style.hbs'),
      },
      {
        // ../../components/src/Button/style/index.ts
        type: 'add',
        path: path.resolve(__dirname, '../../components/src/{{pascalCase name}}/style/index.ts'),
        templateFile: path.resolve(__dirname, '../templates/component/style/index.hbs'),
      },
      // docs
      {
        type: 'add',
        path: path.resolve(__dirname, '../../example/docs/components/{{pascalCase name}}.mdx'),
        templateFile: path.resolve(__dirname, '../templates/docs/docs.hbs'),
      },
      // demo
      {
        // ../../components/src/Button/demo/index.ts
        type: 'add',
        path: path.resolve(__dirname, '../../components/src/{{pascalCase name}}/demo/index.tsx'),
        templateFile: path.resolve(__dirname, '../templates/component/demo/index.hbs'),
      },
      // tests
      {
        type: 'add',
        path: path.resolve(__dirname, '../../components/src/{{pascalCase name}}/__tests__/index.test.tsx'),
        templateFile: path.resolve(__dirname, '../templates/component/__tests__/index.test.hbs'),
      },
      // index
      {
        type: 'append',
        path: path.resolve(__dirname, '../../components/src/index.ts'),
        template: "export { default as {{pascalCase name}} } from './{{pascalCase name}}'\n",
      },
    ],
  })
}
