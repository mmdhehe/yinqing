// 初始化的时候必须先获取canvas实例对象，然后才可调用引擎相关接口
var Module = {
  canvas: (function() {
    var canvas = document.getElementById('canvas');
    return canvas;
  })()
};
//页面加载时添加监听事件RealEngineReady，触发RealBIMInitSys初始化
window.onload = function(event){
  console.log('页面加载，显示画布')
  // document.getElementById('canvas').style.display="block";
  // 页面实时反馈窗口宽高给引擎
  g_isRealBIMSysInit = false;   //场景初始化是否完成
  g_isRealBIMMainSceLoad = false;   //模型是否加载完成
  document.addEventListener("RealEngineReady", RealBIMInitSys);//引擎底层初始化完成事件
  document.addEventListener("RealBIMInitSys", RealBIMLoadMainSce);//场景初始化完成事件
  document.addEventListener("RealBIMLoadMainSce", MainSceDown);//引擎主场景 模型加载完成事件
  document.addEventListener("RealEngineRenderReady", showCanvas);//引擎渲染器初始化完成
  //引擎主场景模型加载进度反馈  返回值：e.detail.progress 当前模型加载的百分比 e.detail.info 当前正在加载的模型的log信息
  document.addEventListener("RealBIMLoadProgress", function(e){LoadingProgress(e.detail.progress,e.detail.info);});
  //g_re_em_window_width g_re_em_window_height 引擎图形窗口（canvas）的宽度/高度  全局变量，场景初始化时必须赋值，每次图形窗口尺寸发生变化都需要重新赋值
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
  console.log(" 引擎初始化完成事件");
  console.log(" Listen RealEngineReady!");
  var workerjspath = "javascript/RealBIMWeb_Worker.js";//相对于html页面的RealBIMWeb_Worker.js的路径
  //初始化图形窗口的宽度/高度
  var width = window.innerWidth; var height = window.innerHeight;
  //引擎调用的公共资源的路径（参考引擎资源发布服务的路径）
   var commonurl = "http://localhost:10088//default.aspx?dir=url_res03&path=res_gol001/";
  //引擎资源发布服务配套的用户名/密码
  var username = "admin"; var password = "123456"; 
  //引擎底层初始化完成后，开始执行场景初始化，加载公共资源，以上为需要传递的参数
  REinitSys(workerjspath,width,height,commonurl,username,password);
}
//canvas图形窗口默认黑色背景，页面初始设置为不显示，图形窗口开始渲染模型再显示
function showCanvas(){
  console.log("引擎渲染初始化完成事件，显示canvas ");
  console.log("addEventListener RealEngineRenderReady!");
  document.getElementById('canvas').style.display="block";
  Module.canvas.focus();
}
//场景初始化完成后，开始加载场景，需正确传递相关参数
function RealBIMLoadMainSce(){
  console.log("Listen RealBIMInitSys!");
  g_isRealBIMSysInit=true;//场景初始化已完成
  //主场景资源的发布路径
   var urlRes = "http://localhost:10088//default.aspx?dir=url_res03&path=";
  var projName = "res_3";//资源名称
  var verinfo ="";//主场景资源的版本
  REloadMainSce(urlRes,projName,verinfo);//场景初始化完成后，开始加载主场景资源，资源加载成功返回true,失败则返回false
  REsetMaxResMemMB(5000);//设置渲染时引擎最大允许的内存占用空间，建议设为比实际内存小500MB
  REsetExpectMaxInstMemMB(3500);//设置渲染时引擎建议分配的内存空间
  REsetExpectMaxInstDrawFaceNum(15000000);//设置模型每帧最大渲染面数，值越大，看到的模型雄安高越好，越精细，但是性能会下降
  REsetPageLoadLev(2);//设置页面调度等级，等级越高，模型加载越快，对硬件要求越高。建议pc端为2，手机端为1
}
//场景模型加载完成，此时可浏览完整模型，所有和模型相关的操作只能在场景加载完成后执行
function MainSceDown(){
  console.log("Listen RealBIMLoadMainSce!");
  g_isRealBIMMainSceLoad=true;//模型加载完成
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
  document.getElementById('processpercent').innerText='的好处弗兰克';
  document.getElementById('loadinginfo').innerText=info;
  if(percent==100){
    document.getElementById('loading').style.display="none";
  }
}