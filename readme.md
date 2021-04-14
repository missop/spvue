第一步：创建文件夹,npm init -y
不能使用驼峰式命名法，会报错的！！！

第二部：安装依赖：yarn add yeoman-generator

第三步：创建generators/app/index.js

第四步：在templates中创建我们项目的实际内容,文件夹名称一定为：templates
yarn create vite-app templates

第五步：在generator-spvue目录下链接全局
yarn link

第六步：yoe run spvue
报错！！！ 是由于没有在`generator-spvue`目录下安装yeoman-generator！！

### 使用时
`yarn add -D generator-spvue yeoman-generator`

注意！
templatePath 对应的是node_modules中文件的路径,也就是说在node_modules中有一份项目文件

destinationPath 当前执行`yoe run spvue`的文件，必须是执行当前目录的node_modules中的yeoman-generator才行

发布时npm publish会报错，使用下面这个可以：
`yarn publish --registry=https://registry.yarnpkg.com`