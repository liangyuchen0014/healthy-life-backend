1. 启动mysql服务,参见https://blog.csdn.net/weixin_36586564/article/details/79563875
    mysql密码 root123
     使用`/etc/init.d/mysql restart`命令启动mysql
2. npm run start
    + 如果遇到错误，考虑切换node版本（命令：`nvm use 16.15.1`）
3. 向对应接口发送请求，参见RESTClient中的request

TODO：修改demo代码，使其可以正确使用接口

nohup.out是程序在后台运行的重定向输出文件

遇到nvm command not found的解决办法：https://blog.csdn.net/zyx_ly/article/details/88989618