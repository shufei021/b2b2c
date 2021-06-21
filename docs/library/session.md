# sessionStorage存储相关

## API

| 名称                               | 描述         |
| ---------------------------------- | :----------- |
| <a href="#r-get">get</a>           | 查           |
| <a href="#r-del">set</a>           | 增           |
| <a href="#r-del">del</a>           | 删           |
| <a href="#r-clearall">clearAll</a> | 清空所有内容 |
| <a href="#r-each">each</a>         | 遍历所有数据 |



### R.get

> 获取储存的值，可批量获取

```javascript
R.get(value)
```

**参数：**

​	1. `value` {string|array} 存储的key，多条则传递数组

**返回值：**

​	`any`

​	单条则返回设置对应的值`value`，多条返回一个`object`

 **例子：**

```javascript
// 1.单条获取
get("userName");
// => 张三

// 2.多条获取
get(["userName", "age", "sex"])
// => {userName: "张三", age: 20, sex: "男"}
```





### R.set

> 设置存储内容，支持多条写入

```javascript
R.set(value1, value2)
```

**参数：**

1. `value1` {string|object} 存储的key，如果传入`object`则为多条，请忽略`value2`参数
2.  `value2` {any} 存储的value，如果第一个参数为对象，则该参数不生效

**返回值：**

​	`void`

 **例子：**

```javascript
// 1.单条写入
set("userName", "zhangsan")

// 2.多条写入
set({
  userName: "zhangsan",
  age: 30,
  job: "JAVA开发"
})
```



### R.del

> 删除一条或多条数据

```javascript
R.del(value)
```

**参数：**

​	1. `value` {string|array} 删除数据的key，多条则为数组

**返回值：**

​	无

 **例子：**

```javascript
// 1.单条删除
del("userName")

// 2.多条删除
del(["userName", "age", "job"])
```



### R.clearAll

> 清空所有数据

```javascript
R.clearAll(value)
```

**参数：**

​	无

**返回值：**

​	`void`

 **例子：**

```javascript
// 1.设置数据
set("userName", "张三")

// 2.获取
get("userName")
// => "张三"

// 3.清空所有
clearAll()


// 获取
get("userName")
// => null
```



### R.each

> 遍历所有存储的值

```javascript
R.each(value)
```

**参数：**

1. `value` {function} 回调函数，形参有`key` 、`value`两个参数

**返回值：**

​	`void`

 **例子：**

```javascript
// 循环
each((key, value) => {
  // do sth...
})
```
