$.fn.serializeJson = function() {
	var oResult = null;
	try {
   		//var arr = this.find("input:text, input:radio, input:checkbox, input:hidden, select, textarea");
   		var arr = this.find("input , select, textarea");
   		
        if (arr) {
        	oResult = {};
        	var vArrName = '';
        	var arrData = []; 
        	var jsonArr = {};
	        $.each(arr, function () {
	        	if ( this.name != '' && ! $(this).prop('disabled') ){
	        		if ( $(this).attr('jsonArray') ){
	        			if ( vArrName != $(this).attr('jsonArray') ) {
	        				if ( Object.keys(jsonArr).length != 0 ) {
		        				arrData.push(jsonArr);
		        				oResult[vArrName] = arrData;
		        				jsonArr = {};
		        	        	arrData = [];
	        				} else {
	        					if (this.type == 'checkbox') {
	        						if (this.checked == true) {
	        							jsonArr[this.name] = this.value;
	        						} else {
	        							if ( $(this).attr('unchkValue') ) {
	        								jsonArr[this.name] = $(this).attr('unchkValue');
	        							}
	        						}
	        					} else if (this.type == 'radio'){
	        						if (this.checked == true) {
	        							jsonArr[this.name] = this.value;
	        						} 
	        					} else {
	        						jsonArr[this.name] = this.value;
	        					}
	        				}
	        				vArrName = $(this).attr('jsonArray');
	        			} else {
	        				if ( jsonArr.hasOwnProperty(this.name) ) {
	        					arrData.push(jsonArr);
	        					jsonArr = {};
	        				} 
	        				if (this.type == 'checkbox') {
        						if (this.checked == true) {
        							jsonArr[this.name] = this.value;
        						} else {
        							if ( $(this).attr('unchkValue') ) {
        								jsonArr[this.name] = $(this).attr('unchkValue');
        							}
        						}
        					} else if (this.type == 'radio'){
        						if (this.checked == true) {
        							jsonArr[this.name] = this.value;
        						} 
        					} else {
        						jsonArr[this.name] = this.value;
        					}
	        			}
	        			
	        		} else {
	        			if ( vArrName != '' && Object.keys(jsonArr).length != 0) {
	        				arrData.push(jsonArr);
	        				oResult[vArrName] = arrData;
	        				jsonArr = {};
	        	        	arrData = []; 
	        	        	vArrName = '';
	        			}
	        			if (this.type == 'checkbox') {
    						if (this.checked == true) {
    							oResult[this.name] = this.value;
    						} else {
    							if ( $(this).attr('unchkValue') ) {
    								oResult[this.name] = $(this).attr('unchkValue');
    							}
    						}
    					} else if (this.type == 'radio'){
    						if (this.checked == true) {
    							oResult[this.name] = this.value;
    						} 
    					} else {
    						oResult[this.name] = this.value;
    					}
	        		}
	        	}
	        });
	        
	        if ( vArrName != '' && Object.keys(jsonArr).length != 0) {
    			arrData.push(jsonArr);
				oResult[vArrName] = arrData;
				jsonArr = {};
	        	arrData = [];
	        	vArrName = '';
			}
        }
	} catch(e) {
		console.log("error: %o", e);
	}
	return oResult;
};


var CMN_UTIL = {
	addParams : function(pJsonData) {
		
		if ( pJsonData == undefined || pJsonData == null  || pJsonData.params == undefined || pJsonData.params == null
			|| pJsonData.target == undefined || pJsonData.target == null) {
			return;
		}
		
		var vHtml = [];
		
		$.each(pJsonData.params, function (key, val) {
			vHtml.push('<input type="hidden" name="' + key + '" ');
			
			if (pJsonData.makeId == true) {
				vHtml.push(' id="' + key + '" ');
			}
			
			vHtml.push(' value="' + val + '">');
		});
		
		if (pJsonData.data != undefined && pJsonData.data != null){
			$.each(pJsonData.data, function (key, val) {
				vHtml.push('<input type="hidden" name="' + key + '" ');
				
				if (pJsonData.makeId == true) {
					vHtml.push(' id="' + key + '" ');
				}
				
				vHtml.push(' value="' + val + '">');
			});
		}
		
		$(pJsonData.target).append( vHtml.join('') );
	}

	, getSelectedOptionText : function(pJsonData) {
		var vResult = '';
		if ( pJsonData == undefined || pJsonData == null || pJsonData.data == undefined || pJsonData.data == null || pJsonData.data.length == 0 ) {
			return '';
		}
		if ( pJsonData.dataKey == undefined || pJsonData.dataKey == null ){
			pJsonData.dataKey = {optionValue:"cditem", optionText:"cditemnm"};
		}
		
		var arrData = pJsonData.data;
		var jsonDataKey = pJsonData.dataKey;
		var jsonVal = {};
		for (var idx=0; idx<arrData.length; idx++) {
			jsonVal = arrData[idx];
			if ( pJsonData.selVal != undefined && pJsonData.selVal == jsonVal[jsonDataKey.optionValue] ){
				vResult = jsonVal[jsonDataKey.optionText];
				break;
			}
		};
		
		return vResult;
	}

	, makeSelectOption : function(pJsonData) {
		var arrResult = [];
		if ( pJsonData == undefined || pJsonData == null || pJsonData.data == undefined || pJsonData.data == null || pJsonData.data.length == 0 ) {
			return '';
		}
		if ( pJsonData.dataKey == undefined || pJsonData.dataKey == null ){
			pJsonData.dataKey = {optionValue:"cditem", optionText:"cditemnm"};
		}
		
		var jsonDataKey = pJsonData.dataKey;
		$.each(pJsonData.data, function (idx, jsonVal) {
			arrResult.push('<option value="' + jsonVal[jsonDataKey.optionValue] + '" ');
			if ( pJsonData.selVal != undefined && pJsonData.selVal == jsonVal[jsonDataKey.optionValue] ){
				arrResult.push(' selected ');	
			}
			arrResult.push(' >');
			arrResult.push(jsonVal[jsonDataKey.optionText]);
			arrResult.push('</option>');
		});
		
		return arrResult.join('');
	}

	, nvl : function(pStr) {
		return this.nvl2(pStr, '');
	}
	
	, nvl2 : function(pStr, pDefault) {
		var vResult = '';
		if (pStr == undefined || pStr == null || pStr == '') {
			if (pDefault == undefined || pDefault == null) {
				vResult = '';
			} else {
				vResult = pDefault;
			}
		} else {
			vResult = pStr;
		}
		return vResult;
	}
	
	, setDatePicker : function(pTarget){
		$(pTarget).datepicker({
			changeMonth : true,
			changeYear : true,
			showWeek : true,
			showOn: "button",
			firstDay : 0,
			dayNamesMin : ['S','M','T','W','T','F','S'],
			dateFormat : 'yy-mm-dd',
			monthNames: ["01","02","03","04","05","06","07","08","09","10","11","12"],
		    monthNamesShort: ["01","02","03","04","05","06","07","08","09","10","11","12"]
		});
	}
	
	, setSelectEvent : function (pTarget){
		var selectbox = $(pTarget);
		selectbox.off();
		selectbox.on({
			'blur': function() {
				$(this).parent().removeClass('focus');
				$(this).parent().css({"box-shadow":"none"});
			}
			, 'change' : function() {
				var select_name = $(this).children('option:selected').text();
				$(this).siblings('span').text(select_name);
				$(this).parent().removeClass('focus');
				
				if( $("#selbox").val() == "direct") {
					$("#selDirect").show();
					$(".selectbox").hide();
				} else {
					$("#selDirect").hide();
					$(this).siblings('span').text(select_name);
				}
				
				if ( $(this).parent().hasClass("okng") == true) {
					if ( $(this).val() == "NG") {
						$(this).parent().addClass('selectbox_red');
						$(this).parent().css({"box-shadow":"0 0 2px #f47d31"});
					} else {
						$(this).parent().removeClass('selectbox_red');
					}
				}
			}
			, 'focus': function() {
				$(this).parent().addClass('focus');
				$(this).parent().css({"box-shadow":"0 0 2px #f47d31"});
			}
		});
	}
	
	, toTimeFmt : function(pDateTimeStr) {
		var vResult = "";
		if ( CMN_UTIL.nvl( pDateTimeStr ) != '' && pDateTimeStr.length == 14) {
			vResult = pDateTimeStr.substr(8, 2) + ':' + pDateTimeStr.substr(10, 2) + ':' + pDateTimeStr.substr(12, 2);
		} 
		
		return vResult;
	}
	
	, toDateFmt : function(pDateStr) {
		var vResult = "";
		if ( CMN_UTIL.nvl( pDateStr ) != '' && pDateStr.length == 8) {
			vResult = pDateStr.substr(0, 4) + '-' + pDateStr.substr(4, 2) + '-' + pDateStr.substr(6, 2);
		} 
		
		return vResult;
	}
}


//GNB
function GNB() {
	var gnbPage = $(".gnbPage"),
		gnbWrap = $("#gnb"),
		gnb = gnbWrap.find(".gnb"),
		depth1 = gnb.find("> ul > li"),
		depth2 = depth1.find("> ul"),
		btnGnb = gnbWrap.find(".btnGnb");

	$(window).resize(function(){
		gnb.outerHeight($(window).height() - $("#header").outerHeight() - 6);
		$(".gnbInfo .inner").outerHeight($(window).height() - $("#header").outerHeight() - 5);
	}).resize();

	depth1.has("ul").find("> a").append("<em></em>");

	btnGnb.click(function(e){
		e.preventDefault();
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			depth1.removeClass("on");
			depth2.slideUp(200,"easeInQuad");
		}else{
			$(this).addClass("on");
			depth1.addClass("on");
			depth2.slideDown(200,"easeInQuad");
		}
	});
	
	depth1.has("ul").find("> a").click(function(e){
		e.preventDefault();
		if($(this).parent().hasClass("on")){
			$(this).parent().removeClass("on");
			$(this).parent().find("ul").slideUp(200,"easeInQuad");
		}else{
			$(this).parent().addClass("on");
			$(this).parent().find("ul").slideDown(200,"easeInQuad");
		}
	})
}


$(function(){
	GNB();

	// 셀렉트박스
	$('#selDirect').hide();
	CMN_UTIL.setSelectEvent(".selectbox select");
	
	CMN_UTIL.setDatePicker(".date input");
	
});


$(document).ready(function(){
	
	//(layout4.html) 라이오버튼 체크
	$('#inpRadio').prop('checked',true);
	
	//(layout4.html) 테이블 추가 버튼
	 $('.tbtn_plus').click(function() {
		 
		 var addTable = '<div class="cont_wrap cont_wrap4">'+
			 '<div class="table_wrap">'+
			 '<table>'+
		     '<colgroup>'+
			 '<col style="width:40%">'+
			 '<col style="width:60%">'+
			 '</colgroup>'+
			 '<tr class="line_m line_r">'+
			 '<th colspan="2">약품</th>'+
			 '</tr>'+
			 '<tr class="line_m line_r">'+
			 '<th>약품코드</th>'+
			 '<th>Lot No</th>'+
			 '</tr>'+
			 '<tr class="line_m line_r">'+
			 '<td><input type="text"></td>'+
			 '<td><input type="text"></td>'+
			 '</tr>'+
			 '</table>'+
			 '</div>'+
			 '</div>';
		 
		 var addHtml = $('.cont_wrap:last');
		 addHtml.after(addTable);
	  });
	
	//(layout71.html) 텝메뉴
	$('.content .tab_cont_wrap:gt(0)').hide();
	$('.tab_menu li').click(function(e){
		e.preventDefault();
		
		var tabIdx=$(this).index();
		
		$(this).addClass('on').siblings().removeClass('on');
		$('.content .tab_cont_wrap').hide().eq(tabIdx).show();
	});
	
	//(layout45.html) 라디오버튼
	$('.btnRadio li').click(function(e){
		e.preventDefault();
		
		$(this).addClass('on').siblings().removeClass('on');
	});
	
	//(layout41.html) 하단 픽스 영역 열고 닫기
	$('#bottom_wrap .btn_open').click(function(){
		
		$('#bottom_wrap').toggleClass('on');
	});
	
	//(layout42.html) 팝업 열기
	$('.btn_pop').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap').show();
		$('body').addClass('on');
    });
	
	//(layout45.html) 팝업 열기
	$('.btn_choose').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap').show();
		$('body').addClass('on');
    });
	
	//(layout11.html) 팝업 열기
	$('.btn_popplus').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap').show();
		$('body').addClass('on');
    });
	
	//팝업 닫기
	$('.popup_wrap .btn_close').click(function() {
		
		$('.popup_wrap').hide();
		$('body').removeClass('on');
		//$('.btnRadio li:first-child').addClass('on').siblings().removeClass('on');
    });
	
	//팝업 닫기 s/w 권취 추가 
	$('.popup_wrap_multi .btn_close').click(function() {
		
		$('.popup_wrap_multi').hide();
		$('body').removeClass('on');
		//$('.btnRadio li:first-child').addClass('on').siblings().removeClass('on');
    });
	
	
	
	//(layout11.html)  
    // #1 -5
	$('.btn_popplus_chk1').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap_chk1').show();
		$('body').addClass('on');
    });
	$('.btn_popplus_chk2').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap_chk2').show();
		$('body').addClass('on');
    });
	$('.btn_popplus_chk3').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap_chk3').show();
		$('body').addClass('on');
    });
	$('.btn_popplus_chk4').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap_chk4').show();
		$('body').addClass('on');
    });
	$('.btn_popplus_chk5').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap_chk5').show();
		$('body').addClass('on');
    });
	$('.btn_popplus_chk6').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap_chk6').show();
		$('body').addClass('on');
    });
	$('.btn_popplus_chk7').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap_chk7').show();
		$('body').addClass('on');
    });
	$('.btn_popplus_chk8').click(function(e) {
        e.preventDefault();
		
		$('.popup_wrap_chk8').show();
		$('body').addClass('on');
    });
	
	$('.popup_wrap_chk1 .btn_close').click(function() {
		
		$('.popup_wrap_chk1').hide();
		$('body').removeClass('on');
		//$('.btnRadio li:first-child').addClass('on').siblings().removeClass('on');
    });
	$('.popup_wrap_chk2 .btn_close').click(function() {
		
		$('.popup_wrap_chk2').hide();
		$('body').removeClass('on');
		//$('.btnRadio li:first-child').addClass('on').siblings().removeClass('on');
    });
	$('.popup_wrap_chk3 .btn_close').click(function() {
		
		$('.popup_wrap_chk3').hide();
		$('body').removeClass('on');
		//$('.btnRadio li:first-child').addClass('on').siblings().removeClass('on');
    });
	$('.popup_wrap_chk4 .btn_close').click(function() {
		
		$('.popup_wrap_chk4').hide();
		$('body').removeClass('on');
		//$('.btnRadio li:first-child').addClass('on').siblings().removeClass('on');
    });
	$('.popup_wrap_chk5 .btn_close').click(function() {
		
		$('.popup_wrap_chk5').hide();
		$('body').removeClass('on');
		//$('.btnRadio li:first-child').addClass('on').siblings().removeClass('on');
    });
	$('.popup_wrap_chk6 .btn_close').click(function() {
		
		$('.popup_wrap_chk6').hide();
		$('body').removeClass('on');
		//$('.btnRadio li:first-child').addClass('on').siblings().removeClass('on');
    });
	$('.popup_wrap_chk7 .btn_close').click(function() {
		
		$('.popup_wrap_chk7').hide();
		$('body').removeClass('on');
		//$('.btnRadio li:first-child').addClass('on').siblings().removeClass('on');
    });
	$('.popup_wrap_chk8 .btn_close').click(function() {
		
		$('.popup_wrap_chk8').hide();
		$('body').removeClass('on');
		//$('.btnRadio li:first-child').addClass('on').siblings().removeClass('on');
    });
	
	//spring값 시간 포맷(1230->12:30, 130->01:30)
	$(".format_hr").each(function() {
		var id = this.id;
		var len = $("#"+id).val().length;
		var hr = $("#"+id).val();
		var hr_fomt = "";
		if(hr != ""){
			console.log(hr);
			if(len == 4){
				hr_fomt = hr.substr(0,2)+":"+hr.substr(2,2)
			}else if(len == 3){
				hr_fomt = "0"+hr.substr(0,1)+":"+hr.substr(1,2)
			}
			$("#"+id).val(hr_fomt);
		}
	});
	
});

/**
 * 상단 메뉴 선택
 * @param url
 */
function fnSelectGnbMenu(url , btn , menunm , pgmid){
	$("#gnbMenuForm").attr("action", url);
	$("#btnstp").val(btn);
	$("#menunm").val(menunm);
	$("#pgmid").val(pgmid);
	$("#gnbMenuForm").submit();
	
	//test 
	//window.open(url+"?pgmid="+pgmid+"","contentPop","fullscreen=yes,channelmode=yes, scrollbars=yes, resizable=yes, menubar=no,status=no,toolbar=no,location=no");
}


/**
 * ajax호출 후 펑션 실행 param : type, url,  param, dataType, callback 함수명
 */
function ajaxCall(type, url, param, dataType, callBack) {

	if (typeof type == undefined)
		type = "POST";
	if (typeof url == undefined)
		return false;
	if (typeof param == undefined)
		param = null;
	if (typeof dataType == undefined)
		dataType = "json";
	if (typeof callBack == undefined)
		callBack = "";

	$.ajax({
		type : type,
		url : url,
		data : param,
		dataType : dataType,
		headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
		success : function(data) {
			if (callBack != "") {
				eval(callBack)(data);
			}
		},
		error : function(data, textStatus, e) {
			alert(textStatus);
		}
	});
}

/**
 * 팝업호출 후 펑션 실행 param : 팝업명, url, callback 함수명, param, type
 */
function fnCallPopBack(pop_name, url, callBack, param, type) {
	$.ajax({
		type : 'POST',
		url : url,
		data : param,
		dataType : type,
		headers : {
			ajax : 'true'
		},
		success : function(data) {
			$("#" + pop_name).show();
			$("#" + pop_name).html(data);
			//$('body').addClass('on');
			if(callBack){
				eval(callBack)();
			}
		},
		error : function(data, textStatus, e) {
		}
	});
}

function fnPopupClose(id) {
	$("#" + id).hide();
	$("#" + id).html("");
	$('body').removeClass('on');
};


function fnDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	return yyyy+'-'+mm+'-'+dd;
}

$.fn.serializeObject = function(){
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};




function custom_alert( message, title ) {
    if ( !title )
        title = 'Alert';

    if ( !message )
        message = 'No Message to Display.';

    var $dialog2  = $('<div></div>').html( message ).dialog({
        title: title,
        resizable: false,
        modal: true
    });
    
    setTimeout(function(){$dialog2.dialog("close")},1000);
}

// 성형 ITEM 판정
function fn_jdg_cal_d(spec,up,down,inval1,inval2){
	var jdg1 = "NG";
	var jdg2 = "NG";
	var jdg = "NG";
	
	if( parseFloat(down) <= parseFloat(inval1)){
		if(  parseFloat(up) >= parseFloat(inval1)){
			jdg1 = "OK";
		}
	}
	
	if(  parseFloat(down) <= parseFloat(inval2)){
		if(  parseFloat(up) >= parseFloat(inval2)){
			jdg2 = "OK";
		}
	}
	
	if( jdg1 == 'OK' && jdg2 == 'OK'){
		jdg = "OK";
	}else{
		jdg = "NG";
	}
		
	return jdg;
}

function fn_jdg_cal_s(spec,up,down,inval1){
	var jdg = "NG";
	
	if(parseFloat(down) <= parseFloat(inval1)){
		if(parseFloat(up) >= parseFloat(inval1)){
			jdg = "OK";
		}
	}
		
	return jdg;
}

function fn_jdg_cal_etc(spec,up,down,inval1){
	var jdg = "NG";
	
	if( eval(parseFloat(spec)+parseFloat(down)) <= inval1){
		if( eval(parseFloat(spec)+parseFloat(up)) >= inval1){
			jdg = "OK";
		}
	}
		
	return jdg;
}

function fn_jdg_cal_text(spec,up,down,inval1){
	var jdg = "NG";
	
	if( spec == inval1){
		jdg = "OK";
	}
		
	return jdg;
}

function fn_nvl(val, defaultVal){
	var dVal	=	"";
	if(defaultVal){
		dVal	=	defaultVal;
	}
	
	if(val){
		return val;
	}else{
		return dVal;
	}
}

function fn_help(pgmid){
	var val = pgmid;
	fnCallPopBack( "common_pop","/content/COMMON_HELP.do?pgmid="+val ,fnHelpPopup);
}
function fnHelpPopup() {
	
}


function maxLengthCheck(object){
	  if(object.value.length > object.maxLength) {
	    object.value = object.value.slice(0, object.maxLength);
	  }
}



