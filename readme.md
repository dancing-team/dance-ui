# dance-ui

[![npm version](https://img.shields.io/npm/v/@dance-ui/ui/latest.svg)](https://www.npmjs.com/package/@dance-ui/ui)
[![Actions Status](https://github.com/dancing-team/dance-ui/actions/workflows/release.yml/badge.svg)](https://github.com/dancing-team/dance-ui)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

🌸 A simple and elegant component library.

# 🍨 Quick Start

```bash
pnpm i @dance-ui/ui
```

# 🕵 Develop

```bash
# install decencies
pnpm i
# build ui & start docs
pnpm start
```

## script 说明

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
