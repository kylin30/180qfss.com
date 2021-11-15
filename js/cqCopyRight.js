document.write('<link rel="stylesheet" type="text/css" href="' + CopyRightcss + '">');

var logoPath = 'http://static.sdg-china.com/copyright/';
//var logoPath = '';
var subLogo = logoPath + 'pic/cq/logo.jpg';

if (CopyRightcss.indexOf('black') != -1) {

}

var _sdgCopyrightLink = '#';
var _sdgCopyrightHtml = '';
_sdgCopyrightHtml += ''

   + '<div class="SDGCOPYRIGHT-wrap20130425">'

   //盛大游戏LOGO和合作媒体LOGO
   + '		<div class="SDGCOPYRIGHT-logo" style="width:200px;">'
   + '			<a href="#" target="_blank" title="#" ><img src="images/bomlogo.png"></a>'
   + '		</div>'


   //版权主体信息
   + '		<div class="SDGCOPYRIGHT-con">'


   //每个项目组自己的版权号
   + '			<p>'
   + '				<span class="SDGCOPYRIGHT-pr3">抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</span>'
   + '			</p>'

   //公司统一的版权号
   + '			<p>'
   + '				<span class="SDGCOPYRIGHT-pr3">All rights reserved. 清风盛世  版权所有 本游戏由【清风盛世】开发运营  ICP许可证：豫ICP备13013238号-1</span>'
   + '			</p>'

   + '		</div>'
   //右侧网络警察3个图标
   + '		<div class="SDGCOPYRIGHT-priv">'
   + '<img src="images/bailu123logo.png" border=0>'

   + '		</div>'


   + '</div>'

document.write(_sdgCopyrightHtml);

//统一官网标签
(function (d, s) {
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src = "http://static.sdg-china.com/copyright/js/copyrightcommon.js";
   sc.parentNode.appendChild(js);
}(document, "script"));

//监控代码
(function (d, s) {
   window.config = {
      bw_enabled: false,
      bw_base: "http://static.sdg-china.com/yxzm/pic/",
      siteid: "SDG-08194-01"
   };
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src = "http://static.sdg-china.com/yxzm/js/act.js";
   sc.parentNode.insertBefore(js, sc);
}(document, "script"));