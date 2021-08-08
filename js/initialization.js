

paper.install(window);
// Keep global references to both tools, so the HTML
// links below can access them.
//paperScope.install(scope);

window.onload = function () {
    //00 所有预先设置部分
    //paperScope.install(scope);
    setUp();
    //00 所有预先设置部分
    myDrawingSetup();
    //00 所有预先设置部分
    function setUp(event) {
        //01 创建画布
        paper.setup('myCanvas');//01 
        //02 创建我的鼠标事件,myMouseEvent 必须是全局变量
        myMouseEvent = new Tool();//02 
       
        globalWidth = 200;
        globalHeight=150;
        //globalHeight=600;
        
        //04 创建显示文字定义模块===================================
        var myCircle = new Path.Circle(new Point(100, 270), 50);
        var rect = new Path.Rectangle(0, 0, globalWidth, globalHeight);
        myCircle.fillColor = 'black';
        rect.fillColor = 'black';

    }
    view.onFrame = draw;

    myMouseEvent.onMouseDown = mouseDown;
    myMouseEvent.onMouseUp = mouseUp;
    myMouseEvent.onMouseDrag = mouseDrag;



    function mouseDrag(event) {
        


    }
    //在这上面写代码=================================================================
}

