# white-board-pro2
基于canvas的web画写板控件。

## 功能
- 支持多层级画板叠加
- 支持画笔样式选择及擦除等画板基础绘图功能
- 支持多媒体组件的展示（目前仅限于图片）及基本操作，如拖拽等

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
        "color": "#9100FF",
        "page": 2,
        "size": 2,
        "zIndex": 1,
        "content": [{"path":[{"x":0.2249912359775641,"y":0.16991159539473685,"pressure":1},{"x":0.23796198918269232,"y":0.16298828125,"pressure":1},{"x":0.27434520232371795,"y":0.15562294407894736,"pressure":1},{"x":0.351161858974359,"y":0.15085320723684212,"pressure":1},{"x":0.459804437099359,"y":0.1525596217105263,"pressure":1},{"x":0.5612229567307693,"y":0.16745476973684212,"pressure":1},{"x":0.6260955028044872,"y":0.1900853207236842,"pressure":1},{"x":0.6664225260416666,"y":0.21967002467105262,"pressure":1},{"x":0.6723257211538461,"y":0.24469572368421053,"pressure":1},{"x":0.6531262520032052,"y":0.2801552220394737,"pressure":1},{"x":0.5928735977564102,"y":0.32444490131578946,"pressure":1},{"x":0.5098219651442307,"y":0.35761204769736843,"pressure":1},{"x":0.4218186598557692,"y":0.3739309210526316,"pressure":1},{"x":0.35827323717948717,"y":0.3673314144736842,"pressure":1},{"x":0.31994315905448717,"y":0.34772306743421055,"pressure":1},{"x":0.29740084134615385,"y":0.32144839638157896,"pressure":1},{"x":0.291904547275641,"y":0.29438219572368424,"pressure":1},{"x":0.3640324519230769,"y":0.2548571134868421,"pressure":1},{"x":0.45674954927884615,"y":0.2600226151315789,"pressure":1},{"x":0.5446902544070513,"y":0.2850380345394737,"pressure":1},{"x":0.5914150140224359,"y":0.3171155427631579,"pressure":1},{"x":0.6095189803685898,"y":0.3603515625,"pressure":1},{"x":0.6029334435096154,"y":0.40936472039473687,"pressure":1},{"x":0.5628004807692307,"y":0.4632092927631579,"pressure":1},{"x":0.4938151041666667,"y":0.49710629111842103,"pressure":1},{"x":0.40959910857371795,"y":0.5127415707236842,"pressure":1},{"x":0.3326009114583333,"y":0.5089432565789473,"pressure":1},{"x":0.3106219951923077,"y":0.5017321134868421,"pressure":1},{"x":0.3087752904647436,"y":0.4986996299342105,"pressure":1},{"x":0.31479116586538464,"y":0.4950349506578947,"pressure":1},{"x":0.36597305689102566,"y":0.4961040296052632,"pressure":1},{"x":0.47717598157051283,"y":0.5147203947368421,"pressure":1},{"x":0.5713141025641025,"y":0.54072265625,"pressure":1},{"x":0.6413762019230769,"y":0.5807874177631579,"pressure":1},{"x":0.6688889723557693,"y":0.6219572368421052,"pressure":1},{"x":0.6573893229166666,"y":0.6663291529605263,"pressure":1},{"x":0.6173815604967948,"y":0.6991056743421052,"pressure":1},{"x":0.5450220352564102,"y":0.7240645559210527,"pressure":1},{"x":0.4803936298076923,"y":0.7303453947368421,"pressure":1},{"x":0.4340632512019231,"y":0.7317948190789474,"pressure":1},{"x":0.4136493389423077,"y":0.7333316200657894,"pressure":1}],"canvasSettings":{"strokeStyle":"#9100FF","lineWidth":2,"lineCap":"round","inputType":"fountain-pen"},"rectArea":[0.20896559495192307,0.6883513621794872,0.1376953125,0.7464895148026316]}],
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
    el: 画板容器元素,支持id选择符,类选择符和元素选择符 | String
    maxPage: 画板最大页数 | Number
    pageHeight: 加页高度，可选，默认是一页高度为el高度 ｜ Number
    rubberRange: 橡皮擦精度，可选，默认10 | Number
    addBtn: 是否初始化默认的加页按钮，必填 | Number
    zIndexInfo: 画板初始化层级以及每层画布的初始参数(详情见zIndexInfo说明)，支持多级画布 | Array
    watcher: 画板进行操作后的异步回调 | Object
    writeCallBack： 画板进行操作时同步执行的回调 | Object
    addCallBack： 画板加页后的回调 | Object
```

## zIndexInfo配置属性说明
        
> inputType: 输入类型 | String
- fountain-pen: 钢笔
- fluorescent-pen: 荧光笔
- rubber: 橡皮
- N2: N2笔（暂不支持）
- text: 文本（暂不支持）
- camera： 相机/相册，输出图片

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
            // 轨迹数据
            "path": [],
            // 此轨迹的画笔设置信息
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

#### 当前层画板添加多媒体组件

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

#### 设置当前层画板输入类型及画笔样式

```bash
    myBoard.canvasObj[0].setUp({
        strokeStyle: "#000", // 画笔颜色
        lineWidth: 2, // 画笔粗细
        inputType: "fountain-pen" // 输入类型
    });
```
