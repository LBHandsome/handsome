
    window.onload = function() {
//变量定义
    var oBtnLeft = document.querySelector("#wrap .btn .left"),      //单边切换
        oBtnRight = document.querySelector("#wrap .btn .right"),    //循环切换
        oRight = document.querySelector("#wrap .arrow .right"),     //左箭头按钮
        oLeft = document.querySelector("#wrap .arrow .left"),       //右箭头按钮
        aImg = document.querySelectorAll("#wrap .content .img img"),//图片
        topSpan = document.querySelector("#wrap .content .top span"),//计数
        oBottom = document.querySelector("#wrap .content .bottom"),  //文本
        arrText = ["植物", "大战", "植物大战", "植物大战僵尸", "植物大战僵尸中文版"],//存储图片的描述

        len = aImg.length,  //获取一共有多少张图片
        index = 0,          //用来表示当前显示的第几张图片
        circle = false,     //用来表明现在处于什么状态下
        circleName;         //按钮

//单边按钮点击事件
    oBtnLeft.onclick = function () {
        circle = false;
        circleName = oBtnLeft.className;
        if (circleName.indexOf ( "on" ) == -1) {
            oBtnLeft.className += " on";
            oBtnRight.className = "btnChild right"
        }
    };

//循环切换按钮点击事件
    oBtnRight.onclick = function () {
        circle = true;
        circleName = oBtnRight.className;
        if (circleName.indexOf ( "on" ) == -1) {
            oBtnRight.className += " on";
            oBtnLeft.className = "btnChild left"
        }
    };

    oRight.onclick = function () {   //点击事件
        if (circle) {//单边切换
            aImg[index].className = "";
            index === len - 1 ? index = 0 : index++;//三目运算
            // index %= len;
            aImg[index].className = "on";
            topSpan.innerHTML = index + 1;
            oBottom.innerHTML = arrText[index];
        } else {
            if (index !== len - 1) {            //不能超过序号最大的情况下才能继续往下面执行

                aImg[index].className = "";     //当前的去掉名字 隐藏
                index++;   //序号 +1
                aImg[index].className = "on";   //下一张显示
                topSpan.innerHTML = index + 1;  //顶部p标签计数
                oBottom.innerHTML = arrText[index];//改变图片的描述
            }
        }
    };

    oLeft.onclick = function () {   //点击事件
        if (circle) {//循环切换
            aImg[index].className = "";
            index === 0 ? index = len - 1 : index--;//三目运算
            aImg[index].className = "on";
            topSpan.innerHTML = index + 1;
            oBottom.innerText = arrText[index];
        } else {
            if (index !== 0) {  //不低于最小序号
                aImg[index].className = ""; //当前的去掉名字 隐藏
                index--;   //序号 -1
                aImg[index].className = "on";   //下一张显示
                topSpan.innerHTML = index + 1;    //顶部p标签计数
                oBottom.innerHTML = arrText[index];//改变图片的描述
            }
        }
    };
};