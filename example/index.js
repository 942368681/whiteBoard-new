import { WhiteBoard } from '../src/main';

// 创建测试按钮
var init = document.createElement('button');
init.innerText = '创建';
init.setAttribute('id', 'init');
var dispose = document.createElement('button');
dispose.innerText = '销毁';
dispose.setAttribute('id', 'dispose');
document.getElementById('app').appendChild(init);
document.getElementById('app').appendChild(dispose);

// 添加事件
init.addEventListener('click', initBoard);
dispose.addEventListener('click', disposeBoard);

function disposeBoard () {
    window.oCanvas && window.oCanvas.dispose();
    window.oCanvas = null;
};

function initBoard () {
    var t1 = new Date().getTime();

    window.oCanvas = WhiteBoard({
        "el": ".box",
        "maxPage": 5,
        // "pageHeight": 100,
        "rubberRange": 10,
        "addBtn": true,
        "zIndexInfo": [{"update":true,"inputType":"fountain-pen","color":"#9100FF","page":1,"size":3,"zIndex":1,"content":[{"path":[{"x":0.3217704232283465,"y":0.44396073190789476,"pressure":1},{"x":0.3217704232283465,"y":0.44396073190789476,"pressure":1},{"x":0.3217704232283465,"y":0.44396073190789476,"pressure":1},{"x":0.3217704232283465,"y":0.44396073190789476,"pressure":1},{"x":0.3217704232283465,"y":0.4603053042763158,"pressure":1},{"x":0.3217704232283465,"y":0.48821443256578945,"pressure":1},{"x":0.3217704232283465,"y":0.50390625,"pressure":1},{"x":0.3242925688976378,"y":0.5186883223684211,"pressure":1},{"x":0.3402743602362205,"y":0.5237407483552632,"pressure":1},{"x":0.4229638287401575,"y":0.5069541529605263,"pressure":1},{"x":0.48153912401574805,"y":0.46424753289473686,"pressure":1},{"x":0.5441744586614173,"y":0.41582545230263157,"pressure":1},{"x":0.5720595472440945,"y":0.39002364309210524,"pressure":1},{"x":0.5917015255905512,"y":0.3682462993421053,"pressure":1},{"x":0.595109498031496,"y":0.3625359786184211,"pressure":1}],"canvasSettings":{"strokeStyle":"#9100FF","lineWidth":3,"lineCap":"round","inputType":"fountain-pen"},"rectArea":[0.3060223917322835,0.610857529527559,0.349378083881579,0.5368986430921053]}],"other":{"img":[],"audio":[],"video":[],"N2":[]},"containerRect":{"width":635,"height":760}}],
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

    var t2 = new Date().getTime();
    console.log('白板初始化时间：' + (t2 - t1) / 1000 + 's');
};

// initBoard();
