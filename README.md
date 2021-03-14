# white-board-pro2
基于canvas的web画写板控件。

## 功能
- 支持多层级画板叠加展示
- 支持画笔样式选择及擦除等画板基础绘图功能
- 支持加页
- 支持压感设备
- 兼容鼠标和touch操作
- 保存原始笔记数据
- 支持多媒体组件的展示及基本操作，如拖拽等（此功能暂不提供）

## 下载

使用npm:

```bash
$ npm install -S white-board-pro2
```

## 引入

```bash
// index.js

import { WhiteBoard } from 'white-board-pro2';
```

## 演示
![img](https://github.com/942368681/whiteBoard-new/blob/master/assets/draw.gif)

## 使用

基本使用:

```bash
var myboard = WhiteBoard({
    "el": ".box",
    "maxPage": 5,
    "pageHeight": 100,
    "rubberRange": 10,
    "addBtn": true,
    "zIndexInfo": [{
        "inputType": "fountain-pen",
        "color": "#000000",
        "page": 2,
        "size": 2,
        "zIndex": 1,
        "content": [{"p":[4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096],"x":[293,293,293,293,293,293,293,293,293,293,295,321,362,415,475,524,541,588,612,633,650,662,673,680,685,697,710,736,774,819,848,876,899,912,924,939,953,980,1034,1114,1209,1317],"y":[273,273,273,273,273,273,273,273,275,293,343,409,499,599,671,703,709,716,702,668,621,571,524,501,488,483,489,516,558,600,625,642,649,649,634,615,605,605,609,638,659,669],"canvasSettings":{"strokeStyle":"#ce6bd1","lineWidth":26,"lineCap":"round","inputType":"fountain-pen"},"rectArea":[283,1327,263,726]}],
        "other": {
            "img": [],
            "audio": [],
            "video": [],
            "N2": []
        }
    }],
    "watcher": {
        wait: 2000,
        cb: () => console.log('异步执行回调')
    },
    "writeCallBack": {
        type: "once",
        cb: () => console.log('同步执行回调')
    },
    "addCallBack": () => console.log('加纸')
});
```

## 初始化控件的配置项说明

```bash
    el: 画板容器元素,支持id选择符,类选择符和元素选择符,必须设置好宽高 | String
    maxPage: 画板最大页数 | Number
    pageHeight: 加页高度，可选，默认是一页高度为el高度 ｜ Number
    rubberRange: 橡皮擦精度，可选，默认10 | Number
    addBtn: 是否初始化默认的加页按钮，必填 | Boolean
    zIndexInfo: 画板初始化层级以及每层画布的初始参数(详情见zIndexInfo说明)，支持多级画布 | Array
    watcher: 画板进行操作后的异步回调 | Object
    writeCallBack： 画板进行操作时同步执行的回调 | Object
    addCallBack： 画板加页后的回调 | Function
```

## zIndexInfo配置属性说明
        
> inputType: 输入类型 | String
- fountain-pen: 钢笔
- fluorescent-pen: 荧光笔
- rubber: 橡皮
- N2: N2笔（暂不支持）
- text: 文本（暂不支持）

> disabled: 该层画板是否可书写 | Boolean
- true（默认）: 可书写
- false: 禁用

> color: 该层画板初始画笔颜色 | String

> page: 该层画板初始页数 | Number

> size: 该层画板初始画笔粗细 | Number

> zIndex: 该层画板在父级容器中的层级 | Number

> content: 该层画板的笔记轨迹数据和每条笔记的画笔设置信息 | Array
```bash
    "content": [
        {
            // 压感值集合
            "p": [],
            // x点坐标集合
            "x": [],
            // y点坐标集合
            "y": [],
            // 此条笔记的画笔设置信息
            "canvasSettings": {
                "strokeStyle": "#FF9500",
                "lineWidth": 2,
                "lineCap": "round",
                "inputType": 'fountain-pen'
            },
            // 此条轨迹的矩形范围
            "rectArea": []
        }
    ]
```

> other: 该层画板的多媒体组件信息 | Object
```bash
    "other": {
        "img": [], // 图片组件
        "audio": [], // 音频组件
        "video": [], // 视频组件
        "N2": [] // N2笔图片组件
    }
```


## API

以创建好的myBoard实例为例:

#### 当前层画板加页

```bash
    myBoard.addPage();
```

#### 当前层画板添加多媒体组件(暂不支持)

```bash
    myBoard.createMediaDom(type, url, initDrag);
    /*
        type: 多媒体组件类型（img/audio/video/N2）
        url: 数据（图片地址，音视频播放地址）
        initDrag： 是否初始化拖拽
    */

    // 以添加图片组件为例
    myBoard.createMediaDom('img', 'https://s.gravatar.com/avatar/7d228fb734bde96e1bae224107cc48cb', true);
```

#### 设置当前层画板输入类型

```bash
    myBoard.setInputType('fountain-pen');
```

#### 设置当前层画板画笔颜色

```bash
    myBoard.setInputColor('#000000');
```

#### 设置当前层画板画笔粗细

```bash
    myBoard.setInputSize(10);
```

#### 保存时获取画板数据

```bash
    myBoard.getBoardData();
```

#### 销毁画板组件

```bash
    myBoard.dispose();
```
