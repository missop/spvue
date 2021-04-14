const Generator = require("yeoman-generator");

module.exports = class extends (
  Generator
) {
  // 用户交互方法
  prompting() {
    return this.prompt({
      type: "input",
      name: "name",
      message: "your project name",
      default: this.appname,
    }).then((answers) => {
      this.answers = answers;
    });
  }
  //   写入文件
  writing() {
    //不在像之前只是写入单个文件, 需要批量把准备好的结构批量生成
    //把每一文件都通过模板转换到目标路径: 利用数组,循环的方式批量的生成每一个文件
    const templates = [
      ".env.development",
      ".env.production",
      // '.eslintrc.js',
      // ".gitignore",
      "package.json",
      //   'babel.config.js',
      // 'postcss.config.js',
      //  'README.md', 
      "index.html",
      "jsconfig.json",
      "vite.config.js",
      "public/favicon.ico",
      "src/App.vue",
      "src/main.js",
      "src/index.css",
      "src/components/HelloWorld.vue",
      "src/assets/logo.png",
      "src/routers/index.js",
      "src/constants/index.js",
      "src/utils/index.js",
      "src/store/index.js",
      "src/store/actions/index.js",
      "src/store/mutations/index.js",
      "src/store/getters/index.js",
      "src/views/home/index.vue",
    ];

    templates.forEach((item) => {
      // console.log(
      //   "this.templatePath(item)",
      //   this.templatePath(item),
      //   " this.destinationPath(item)",
      //   this.destinationPath(item),
      //   this.answers
      // );
      // 为每一个模板在目标路径下生成相对应文件
      console.log("templatePath",this.templatePath(item))
      console.log("destinationPath",this.destinationPath(item))
      // setTimeout(()=>{
        this.fs.copyTpl(
          this.templatePath(item),
          this.destinationPath(item),
          this.answers
        );
      // },10000)
    });
  }
};
