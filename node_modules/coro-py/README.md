# coro-py
新型冠状病毒 爬虫 丁香医生

## 快速使用

### 引入依赖
```
$ npm i coro-py
```
或者
```
$ yarn add coro-py
```

### 打印所有数据
```js
const coro = require('coro-py');

(async () => {
	console.log(await coro());
})()
```

## 参数说明

```
	var params = {
		reg: {
			inland: /getAreaStat\s=\s([\s\S]*?)}catch\(e\)/, //匹配中国地区的正则
			oversea: /getListByCountryTypeService2\s=\s([\s\S]*?)}catch\(e\)/ //匹配海外的正则
		},
		url: 'https://ncov.dxy.cn/ncovh5/view/pneumonia' //目标网址，默认丁香园
	}
```

## 开源协议

本项目使用MIT协议，允许非署名商业及非商业用途。武汉加油！中国加油！！
