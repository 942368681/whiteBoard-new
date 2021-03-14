import {
    WhiteBoard
} from '../src/main';

function initBoard() {
    window.oCanvas = WhiteBoard({
        "el": ".box",
        "maxPage": 5,
        "rubberRange": 10,
        "addBtn": true,
        "zIndexInfo": [{
            "color": "#000000",
            "page": 1,
            "content": [/* {"p":[4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096,4096],"x":[293,293,293,293,293,293,293,293,293,293,295,321,362,415,475,524,541,588,612,633,650,662,673,680,685,697,710,736,774,819,848,876,899,912,924,939,953,980,1034,1114,1209,1317],"y":[273,273,273,273,273,273,273,273,275,293,343,409,499,599,671,703,709,716,702,668,621,571,524,501,488,483,489,516,558,600,625,642,649,649,634,615,605,605,609,638,659,669],"canvasSettings":{"strokeStyle":"#ce6bd1","lineWidth":26,"lineCap":"round","inputType":"fountain-pen"},"rectArea":[283,1327,263,726]} */],
            "inputType": "fountain-pen",
            "other": {
                "N2": [],
                "audio": [],
                "img": [],
                "video": []
            },
            "size": 4,
            "zIndex": 1
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
};

function initEvent() {
    var typeBar = document.getElementsByClassName('input-type')[0];
    var colorBar = document.getElementsByClassName('color-type')[0];
    var sizeBar = document.getElementsByClassName('size-control')[0];
    typeBar.addEventListener('click', function(ev) {
        var type = ev.target.dataset.type;
        if (type) {
            window.oCanvas.setInputType(type);
        }
    });
    colorBar.addEventListener('click', function(ev) {
        var color = ev.target.dataset.color;
        if (color) {
            window.oCanvas.setInputColor(color);
        }
    });
    sizeBar.addEventListener('change', function(ev) {
        var size = ev.target.value;
        window.oCanvas.setInputSize(size);
    });
}

initBoard();
initEvent();