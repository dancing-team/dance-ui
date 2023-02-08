import React from 'react'
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents'
import DemoBlock from '@site/src/components/DemoBlock'
import CodeBlock from '@theme/CodeBlock'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  DemoBlock: DemoBlock,
  CodeBlock: CodeBlock,
}
