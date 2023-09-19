# MongoDB基本使用

[返回](../mongodb.md)

## MongoDB使用

- 使用数据库：use <数据名> 如果数据库不存在，则创建数据库，否则切换到指定数据库
- 查看数据库：show dbs
- 创建集合：db.createCollection("集合名")
- 删除集合：1、show collections 查看当前数据库所有集合2、db.集合名.drop() 删除集合
- 插入文档数据：db.集合名.insert(文档内容)
- 更新文档：

```bash

db.集合名.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)

#query : update的查询条件，类似sql update查询内where后面的。
#update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
#upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
#multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
#writeConcern :可选，抛出异常的级别。

```

- 删除文档：remove()

```bash

db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)

#query :（可选）删除的文档的条件。
#justOne : （可选）如果设为 true 或 1，则只删除一个文档。
#writeConcern :（可选）抛出异常的级别。

```

- 查询文档：

```bash
# 查询出来的对象不会自动换行，挤在一起
db.collection.find(query, projection)
#query ：可选，使用查询操作符指定查询条件
#projection ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。

#如果你需要以易读的方式来读取数据，可以使用 pretty() 方法--查询的对象属性会自动换行
db.col.find().pretty()

```
