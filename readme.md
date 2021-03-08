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