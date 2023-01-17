module.exports = {
  tabWidth: 2, // Tab = 2空格
  useTabs: false, // 不要用 Tab
  semi: false, // 句尾不要分号
  singleQuote: true, // 在jsx中使用单引号代替双引号
  quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
  jsxSingleQuote: false, // jsx中使用单引号
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  bracketSpacing: true, // 在对象前后添加空格 - eg: { foo: bar }
  jsxBracketSameLine: true, // 在jsx中把 '>' 是否折行
  endOfLine: 'lf', // 行尾序列 Linux LF
  embeddedLanguageFormatting: 'auto',
  printWidth: 128,
  plugins: [require('prettier-plugin-tailwindcss')],
}
