import {
    WhiteBoard
} from '../src/main';

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

function disposeBoard() {
    window.oCanvas && window.oCanvas.dispose();
    window.oCanvas = null;
};

function initBoard() {
    var t1 = new Date().getTime();

    window.oCanvas = WhiteBoard({
        "el": ".box",
        "maxPage": 5,
        // "pageHeight": 100,
        "rubberRange": 10,
        "addBtn": true,
        "zIndexInfo": [{"color":"#E95E57","page":2,"content":[{"p":[4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096],"x":[57,61,70,86,109,144,198,259,329,390,452,493,519,535,547,559,571,583,593,603,610,614,614,614,614,614,614,614],"y":[65,65,70,81,96,117,144,173,206,238,271,294,308,317,324,330,333,337,339,342,343,344,345,345,345,345,345,345],"canvasSettings":{"strokeStyle":"#E95E57","lineWidth":2,"lineCap":"round","inputType":"fountain-pen"}},{"p":[4096,4096,4096,4096,4096,4096,4096,4096,4096,4096],"x":[164,163,163,173,209,258,327,380,411,418],"y":[383,381,381,399,448,505,569,610,628,629],"canvasSettings":{"strokeStyle":"#E95E57","lineWidth":2,"lineCap":"round","inputType":"fountain-pen"}},{"p":[4096,4096,4096,4096,4096,4096,4096,4096,4096],"x":[332,327,314,289,259,232,212,205,205],"y":[393,398,430,490,551,604,640,653,653],"canvasSettings":{"strokeStyle":"#E95E57","lineWidth":2,"lineCap":"round","inputType":"fountain-pen"}},{"p":[4096,4096,4096,4096,4096,4096,4096,4096,4096],"x":[349,361,389,441,507,554,585,592,591],"y":[371,386,427,497,563,602,623,626,618],"canvasSettings":{"strokeStyle":"#E95E57","lineWidth":2,"lineCap":"round","inputType":"fountain-pen"}},{"p":[4096,4096,4096,4096,4096,4096,4096],"x":[494,486,464,428,386,356,338],"y":[442,448,482,528,575,613,637],"canvasSettings":{"strokeStyle":"#E95E57","lineWidth":2,"lineCap":"round","inputType":"fountain-pen"}},{"p":[4096,4096,4096,4096,4096,4096,4096,4096],"x":[494,494,489,460,391,299,211,154],"y":[87,87,88,106,146,200,252,287],"canvasSettings":{"strokeStyle":"#E95E57","lineWidth":2,"lineCap":"round","inputType":"fountain-pen"}}],"inputType":"fountain-pen","other":{"N2":[],"audio":[],"img":[],"video":[]},"size":2,"zIndex":1,"containerRect":{"width":700,"height":760}}],
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

initBoard();