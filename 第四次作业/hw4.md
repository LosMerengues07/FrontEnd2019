# 基础实验4报告

### 1.实验背景：

​	本次试验使用Express框架在服务器上搭建Web后端服务，并对请求产生预期的正确回应。



### 2.具体内容：

+ 服务器环境配置：

  登录服务器并配置环境框架。我的服务器IP地址为：192.144.253.106 端口为8000

  

+ 搭建静态文件服务，运行示例如下：

  

  ![image-20190712024153955](http://ww1.sinaimg.cn/large/006tNc79ly1g4wh1tsn14j31hd0u0nj5.jpg)



![image-20190712024229693](http://ww1.sinaimg.cn/large/006tNc79ly1g4wh2egtabj31gz0u0azu.jpg)

本部分只需一行代码：

```javascript
app.use(express.static('../page/'))
```



+ API服务器搭建：

  实现了四个API的搭建，注意需要先判断token。这一部分整体上并不复杂，但是需要注意对不同的格式和种类命令使用正确的中间件。例如，在解析参数的部分中，本次试验出现了body和query两个方法，而具体使用哪一种需要根据情况具体分析。

  此外，在提交状态码时，一开始我使用`res.status()`，发现有问题，后来查阅资料后修改为`res.sendStatus()`，可以正常工作。

  

+ Eslint帮助修改代码风格与规范。

  