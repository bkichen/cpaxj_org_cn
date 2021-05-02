/**
 * 页面分割
 */
jicUIPageFG = function (jic) {
    var pageFenGe = "#sub"; //默认绑定的ul
    var pageFenGeNum = 5; //每次分割的条数;
    var pageFenGeLineStyle = false;  //分割的线，true是实线，false是虚线
    var pageFenGeMarginBottom = "35px";  //分割的最后一个数据距离底部的宽度
    var pageFenGeMarginTop = "30px";  //分割的第一个数据距离顶部的宽度

    //判断是否传参
    if (jic.pageFenGeTemp!=null){
        pageFenGe = jic.pageFenGeTemp;
    }
    if (jic.pageFenGeNumTemp != null){
        pageFenGeNum = jic.pageFenGeNumTemp;
    }
    if (jic.pageFenGeLineStyleTemp != null){
        if (jic.pageFenGeLineStyleTemp == "true"){
            pageFenGeLineStyle = true;
        }else {
            pageFenGeLineStyle = false;
        }
    }
    if (jic.pageFenGeMarginBottomTemp != null){
        pageFenGeMarginBottom = jic.pageFenGeMarginBottomTemp;
    }
    if (jic.pageFenGeMarginTopTemp != null){
        pageFenGeMarginTop = jic.pageFenGeMarginTopTemp;
    }

    var liStyleSum = $(pageFenGe).children().length;
    for (var liCut = 0; liCut<liStyleSum;liCut+=pageFenGeNum) {
        $(pageFenGe).children().eq(liCut).css("margin-top",pageFenGeMarginTop);
        $(pageFenGe).children().eq(liCut+pageFenGeNum-1).css("padding-bottom",pageFenGeMarginBottom);
        $(pageFenGe).children().eq(liCut+pageFenGeNum-1).addClass("li-fg"); // 兼容ie7处理
        if (pageFenGeLineStyle == true) {
            $(pageFenGe).children().eq(liCut+pageFenGeNum-1).css("border-bottom","1px solid #e6e6e6");
        }else {
            $(pageFenGe).children().eq(liCut+pageFenGeNum-1).css("border-bottom","1px dashed #e6e6e6");
        }
    }
    if(liStyleSum%pageFenGeNum != 0){
        $(pageFenGe).children().last().css("padding-bottom",pageFenGeMarginBottom);
        $(pageFenGe).children().last().addClass("li-fg"); // 兼容ie7处理
        if (pageFenGeLineStyle == true) {
            $(pageFenGe).children().last().css("border-bottom","1px solid #e6e6e6");
        }else {
            $(pageFenGe).children().last().css("border-bottom","1px dashed #e6e6e6");
        }
    }
}

/**
 *  字体省略控制
 */
$(".j-ellipsis").each(function () {
    var ellipsisOld = $(this).text();
    console.log(ellipsisOld);
    // var detail = $("#j-detail").html();
    var ellipsisNew = ellipsisOld.substring(0,115) + "...... ";
    $(this).html(ellipsisNew);
})