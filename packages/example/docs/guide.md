---
sidebar_position: 1
---

# Guide

[![npm version](https://img.shields.io/npm/v/@dance-ui/ui/latest.svg)](https://www.npmjs.com/package/@dance-ui/ui) [![Actions Status](https://github.com/dancing-team/dance-ui/actions/workflows/release.yml/badge.svg)](https://github.com/dancing-team/dance-ui) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![CHANGE_LOG](https://img.shields.io/badge/CHANGE-LOG-ff69b4.svg?style=flat-square)](https://github.com/dancing-team/dance-ui/blob/main/packages/components/CHANGELOG.md)

使用 pnpm+vite+ts+tailwind 开发的 React 组件库， 采用 monorepo 组织，文档站使用 [Docusaurus](https://docusaurus.io/docs) 构建

Github 地址：https://github.com/dancing-team/dance-ui

NPM 包：https://www.npmjs.com/package/@dance-ui/ui

更新日志：[CHANGE_LOG](https://github.com/dancing-team/dance-ui/blob/main/packages/components/CHANGELOG.md)

## 🍨 快速开始

```bash
pnpm i @dance-ui/ui
```

引入组件：[组件全览](https://dance.cosine.ren/docs/category/%E7%BB%84%E4%BB%B6%E5%85%A8%E8%A7%88)

```tsx
import { Button } from '@dance-ui/ui'

export default () => {
  return <Button type="primary">Primary</Button>
}
```

## 🕵 Dev Guide

```bash
# install decencies
pnpm i
# build ui & start docs
pnpm start
```

### script 说明

- `start` 依次执行 `build:ui` 打包组件库、 `start:docs` 启动文档站
- `start:docs` 不打包组件库直接启动文档站，适用于已经打包过一次的情况
- `start:demo` 打包组件库后启动演示项目
- `build` 打包组件库后打包文档站
- `build:ui` 单独打包组件库
- `build:ui-watch` 单独打包组件库，并监视更改实时更新打包，与 start:demo 配合可以实时监控组件修改效果
- `serve:docs` 预览文档站
- `change` 执行使用 changeset add 记录版本修改
- `new` 新建组件的脚本
- `lint` 对组件库进行 eslint 代码检查

### 新组件开发

- fork 本仓库
- cd 根目录，`pnpm new` 来创建一个新组件，输入组件中文名称与英文名称
- 创建完，进入 `packages/components/src` 目录找到自己创建的组件进行开发即可，对应文档位于 `packages\example\docs\components`
- 组件开发完成后，`pnpm change` 可进行更新日志的记录，此步也可不做（合并 pr 后再做调整）
