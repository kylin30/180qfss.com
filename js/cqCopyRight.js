document.write('<link rel="stylesheet" type="text/css" href="'+CopyRightcss+'">');

var logoPath = 'http://static.sdg-china.com/copyright/';
//var logoPath = '';
var subLogo = logoPath+'pic/cq/logo.jpg';

if(CopyRightcss.indexOf('black') != -1){
	
}

var _sdgCopyrightLink = '#';
var _sdgCopyrightHtml = '';
_sdgCopyrightHtml +=''

+'<div class="SDGCOPYRIGHT-wrap20130425">' 

//ʢ����ϷLOGO�ͺ���ý��LOGO
+'		<div class="SDGCOPYRIGHT-logo" style="width:200px;">'
+'			<a href="#" target="_blank" title="#" ><img src="images/bomlogo.png"></a>'
+'		</div>'


//��Ȩ������Ϣ
+'		<div class="SDGCOPYRIGHT-con">'


//ÿ����Ŀ���Լ��İ�Ȩ��
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">���Ʋ�����Ϸ �ܾ�������Ϸ ע�����ұ��� ������ƭ�ϵ� �ʶ���Ϸ���� ������Ϸ���� ������ʱ�� ���ܽ�������</span>'
+'			</p>'

//��˾ͳһ�İ�Ȩ��
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">All rights reserved. ���ʢ��  ��Ȩ���� ����Ϸ�ɡ����ʢ����������Ӫ  ICP���֤��ԥICP��13013238��-1</span>'
+'			</p>'

+'		</div>'
//�Ҳ����羯��3��ͼ��
+'		<div class="SDGCOPYRIGHT-priv">'
+'<img src="images/bailu123logo.png" border=0>'

+'		</div>'


+'</div>'

document.write(_sdgCopyrightHtml);

//ͳһ������ǩ
(function(d, s) {
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src="http://static.sdg-china.com/copyright/js/copyrightcommon.js";
   sc.parentNode.appendChild(js);
}(document, "script"));

//��ش���
(function(d, s) {
  window.config ={
  bw_enabled:false,
  bw_base:"http://static.sdg-china.com/yxzm/pic/",
  siteid:"SDG-08194-01"
};
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src="http://static.sdg-china.com/yxzm/js/act.js";
   sc.parentNode.insertBefore(js, sc);
}(document, "script"));