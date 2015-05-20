如何运行？
========================

1. 全局安装 fis3

    ```
    npm install -g fis3
    ```
2. 安装本项目需要插件

    ```
    npm install
    ```
3. 发布到 output 并预览

    ```
    fis3 release -d ./output
    fis3 server start --root ./output
    ```
4. 发布产品代码

    ```
    fis3 release production -d ./output
    ```
