// 初始化的时候必须先获取canvas实例对象，然后才可调用引擎相关接口
var Module = {
  canvas: (function() {
    var canvas = document.getElementById('canvas');
    return canvas;
  })()
};
//页面加载时添加监听事件RealEngineReady，触发RealBIMInitSys初始化
window.onload = function(event){
  // 页面实时反馈窗口宽高给引擎
  g_isRealBIMSysInit = false;   //场景初始化是否完成
  g_isRealBIMMainSceLoad = false;   //模型是否加载完成
  document.addEventListener("RealEngineReady", RealBIMInitSys);
  document.addEventListener("RealBIMInitSys", RealBIMLoadMainSce);
  document.addEventListener("RealBIMLoadMainSce", MainSceDown);
  document.addEventListener("RealEngineRenderReady", showCanvas);
  document.addEventListener("RealBIMLoadProgress", function(e){LoadingProgress(e.detail.progress,e.detail.info);});
  if((typeof g_re_em_window_width != 'undefined') && (typeof g_re_em_window_height != 'undefined')){
    console.log("(typeof g_re_em_window_width != 'undefined') && (typeof g_re_em_window_height != 'undefined')");
    RealBIMInitSys();
  }
};
//图形窗口改变时，需实时传递给引擎，否则模型会变形
window.onresize = function(event){
  g_re_em_window_width = window.innerWidth; 
  g_re_em_window_height = window.innerHeight;
};
//场景初始化，需正确传递相关参数
function RealBIMInitSys(){
  console.log("Listen RealEngineReady!");
  var workerjspath = "javascript/RealBIMWeb_Worker.js";
  var width = window.innerWidth; var height = window.innerHeight;
  var commonurl = "https://www.bjblackhole.com:443/default.aspx?dir=url_res03&path=res_gol001/";
  var username = "admin"; var password = "xiyangyang"; 
  REinitSys(workerjspath,width,height,commonurl,username,password);
}
//canvas图形窗口默认黑色背景，页面初始设置为不显示，图形窗口开始渲染模型再显示
function showCanvas(){
  console.log("addEventListener RealEngineRenderReady!");
  document.getElementById('canvas').style.display="block";
  Module.canvas.focus();
}
//初始化完成后，开始加载场景，需正确传递相关参数
function RealBIMLoadMainSce(){
  console.log("Listen RealBIMInitSys!");
  g_isRealBIMSysInit=true;
  var urlRes = "https://www.bjblackhole.com:443/default.aspx?dir=url_res03&path=";
  var projName = "res_chengjian";
  var verinfo ="";
  REloadMainSce(urlRes,projName,verinfo);
  REsetMaxResMemMB(5000);
  REsetExpectMaxInstMemMB(3500);
  REsetExpectMaxInstDrawFaceNum(15000000);
  REsetPageLoadLev(2);
}
//场景模型加载完成，此时可浏览完整模型，所有和模型相关的操作只能在场景加载完成后执行
function MainSceDown(){
  console.log("Listen RealBIMLoadMainSce!");
  g_isRealBIMMainSceLoad=true;
}

// 以下为加载进度条的示例代码，仅供参考
/*旋转进度条@param percent需要转动的百分比*/
function processBarRotate(percent){
    var processBarHalfMove = '.processBarHalfMove';
    var processBarHalfLeft = '.processBarHalfLeft';
    var processBarHalfRight = '.processBarHalfRight';
    //---按角度转动
    function barRotate(angle){
        $(processBarHalfMove).css('transform', 'rotate(' + angle + 'deg)');
    }
    var angle = 3.6 * percent + 90;
    //小于50度，直接转到目标角度
    if ( percent <= 50 ){
        barRotate(angle);
    }
    //大于50度，则先转到一半，等事件结束
    else{
        barRotate(angle); //完成剩余的角度
        $(processBarHalfLeft).addClass('not-display');
        $(processBarHalfRight).removeClass('not-display');
    }
}
function LoadingProgress(percent,info){
  document.getElementById('loading').style.display="block";
  processBarRotate(percent);
  document.getElementById('processpercent').innerText=percent;
  document.getElementById('loadinginfo').innerText=info;
  if(percent==100){
    document.getElementById('loading').style.display="none";
  }
}