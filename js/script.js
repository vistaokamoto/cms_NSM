(function($){
	/* IE9を判定 */
	if(is.ie(9)) $('body').addClass('is-ie9');

	/* スマホの「お電話での申込はこちら」の電話番号リンクの設定 */
	if(is.iphone() || is.androidPhone() || is.blackberry() || is.windowsPhone()) {
		//$('.pageHeader .tel a').attr('href', 'tel:0120141807');
	} else {
		$('.pageHeader .tel a').removeAttr('href');
	}

	/* ボタンの動き */
	$(function(){
		$('.btn, button, input[type="submit"], .experienced .btn').on('mousedown touchstart', function(){
			$(this).addClass('on');
		});
		$('.btn, button, input[type="submit"], .experienced .btn').on('mouseup touchend mouseleave', function(){
			$(this).removeClass('on');
		});
	});

	/* 「過去にお申し込みされたことがある方」アコーディオン */
	$('.experienced .btn').on('click', function(){
		if($(this).next().hasClass('open')){
			$(this).next().removeClass('open').slideUp(600);
		} else {
			$(this).next().addClass('open').slideDown(600);
		}
	});

	/* HeightLine */
	$('.heightLine_event01').heightLine({minWidth:640});

	/* 選択できない日付の設定 */
	(function(){
		$('#experienced_birth_y, #birthday_y').on('blur', function(){
			var $this = $(this);
			var $parent = $this.parents('.formGroup_item');
			var $monthForm = $parent.next().find('select');
			var $dateForm = $parent.next().next().find('select');
			var year = $(this).val()*1;
			var month = $monthForm.val()*1;
			$dateForm.find('option').each(function(){
				$(this).removeAttr('disabled');
			});
			if(month === 2){
				if(((year%4) === 0 && (year%100) !== 0) || (year%4) === 0 && (year%100) === 0 && (year%400) === 0) {
					if($dateForm.val()*1 > 29){
						//すでに30日以降を選択していた場合、2/29に変更
						$dateForm.val('29');
					}
					//年を変更した時に月が2月で選択した年がうるう年の場合。
					$dateForm.find('option').each(function(){
						if($(this).val()*1 > 29){
							//28日以降の選択肢を非表示
							$(this).attr('disabled', 'disabled');
						}
					});
				} else {
					//年を変更した時に月が2月で選択した年がうるう年ではない場合。
					if($dateForm.val()*1 > 28){
						//すでに29日以降を選択していた場合、2/28に変更
						$dateForm.val('28');
					}
					$dateForm.find('option').each(function(){
						if($(this).val()*1 > 28){
							//29日以降の選択肢を非表示
							$(this).attr('disabled', 'disabled');
						}
					});
				}
			}
		});
		$('#experienced_birth_m, #birthday_m').on('blur', function(){
			var $this = $(this);
			var $parent = $this.parents('.formGroup_item');
			var $dateForm = $parent.next().find('select');
			var $yearForm = $parent.prev().find('select');
			var month = $(this).val()*1;
			$dateForm.find('option').removeAttr('disabled');
			if(month === 2){
				//2月を選択した時。
				var year = $yearForm.val()*1;
				if(((year%4) === 0 && (year%100) !== 0) || (year%4) === 0 && (year%100) === 0 && (year%400) === 0) {
					//うるう年の場合
					if($dateForm.val()*1 > 29){
						//すでに日にちを選択しており、それが29日以降だった場合、29日にする。
						$dateForm.val('29');
					}
					$dateForm.find('option').each(function(){
						if($(this).val()*1 > 29){
							//29日以降の選択肢は非表示。
							$(this).attr('disabled', 'disabled');
						}
					});
				} else {
					//うるう年ではない場合
					if($dateForm.val()*1 > 28){
						//すでに日にちを選択しており、それが28日以降だった場合、28日にする。
						$dateForm.val('28');
					}
					$dateForm.find('option').each(function(){
						if($(this).val()*1 > 28){
							//28日以降の選択肢は非表示。
							$(this).attr('disabled', 'disabled');
						}
					});
				}
			} else if(month === 4 || month === 6 || month === 9 || month === 11) {
				//4月6月9月11月を選択した時。
				if($dateForm.val()*1 === 31){
					//すでに日にちを選択しており、それが31日だった場合、30日にする。
					$dateForm.val('30');
				}
				$dateForm.find('option:last-child').attr('disabled', 'disabled');
			}
		});
	})();

	/* -----------------------------------------------------------------------
	## Validation ############################################################
	----------------------------------------------------------------------- */
	(function(){
		var method = {};
		var validationData = {
			vData: {},
			errorMsg: {
				'require': '入力が必要です。',
				'requireSelect': '選択されていません。',
				'which': 'いずれかの入力が必要です。',
				'numelic': '数字以外が入力されています。',
				'half': '半角ではない文字が入力されています。',
				'mail': 'メールアドレスではありません。',
				'address': '番地・マンション名・ビル名・部屋番号までご記入ください。',
			}
		};
		method.getValidateItem = function($self){
			var validate = $self.data('validate');
			return validate.split(' ');
		}
		method.checkValid = function($self){
			method.getValidateItem($self);
		};
		method.require = function($self){
			var value;
			value = $self.val();
			return !!value;
		};
		method.requireSelect = function($self){
			var value;
			value = $self.val();
			return !!value;
		};
		method.numelic = function($self){
			var REGEXP_NUMELIC = /^[0-9]+$/;
			var value = $self.val();
			var result;
			if(REGEXP_NUMELIC.test(value) === false && value !== ''){
				result = false;
			} else if(REGEXP_NUMELIC.test(value) === false && value === ''){
				result = true;
			} else {
				result = true;
			}
			return result;
		};
		method.half = function($self){
			var REGEXP_HALF = /^[a-zA-Z0-9!-/:-@¥[-`{-~]+$/;
			var value = $self.val();
			var result;
			if(REGEXP_HALF.test(value) === false && value !== ''){
				result = false;
			} else if(REGEXP_HALF.test(value) === false && value === ''){
				result = true;
			} else {
				result = true;
			}
			return result;
		};
		method.email = function($self){
			var REGEXP_EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
			var value = $self.val();
			var result;
			if(REGEXP_EMAIL.test(value) === false && value !== ''){
				result = false;
			} else if(REGEXP_EMAIL.test(value) === false && value === ''){
				result = true;
			} else {
				result = true;
			}
			return result;
		};
		method.which = function($self){
			var group = $self.data('which');
			var checkVal = [];
			var result = false;
			$('.validation[data-which="' + group +'"]').each(function(){
				checkVal.push(method.require($(this)));
			});
			checkVal.forEach(function(c){
				if(c) result = true;
			});
			return result;
		};
		method.address = function($self){
			var result = true;
			var selectr = '#'+$self.attr('name')+'_tmp';
			if($(selectr).val() != undefined && $(selectr).val() != ''){
				if($self.val() == $(selectr).val()){
					result = false;
				}
			}
			return result;
		};
		method.validateSubmit = function(){
			var result = true;
			$('.validation').each(function(){
				var $self = $(this);
				var name = $self.data('name');
				var validate = $self.data('validate');
				var validateItem = method.getValidateItem($self);
				if(validate != '' && validate != undefined){
					$.each(validateItem, function(i, val){
						//alert('name:'+name+' val:'+val+' vData:'+validationData.vData[name][val]);
						if(val !== 'which'){
							validationData.vData[name][val] = method[val]($self);
							if(validationData.vData[name][val] === false) result = false;
						} else {
							var group = $self.data('which');
							validationData.vData[group][val] = method[val]($self);
							if(validationData.vData[group][val] === false) result = false;
						}
					});
				}
			});
			return result;
		};

		$('.validation').each(function(){
			var $self = $(this);
			var name = $self.data('name');
			var type = $self.attr('type');
			var validate = $self.data('validate');
			var validateItem = method.getValidateItem($self);
//alert(name);
//alert(type);
//alert(validate);
//alert($self.data('validate'));

			/* init */
			if(validate != '' && validate != undefined){
				validationData.vData[name] = validationData.vData[name] || {};
				$.each(validateItem, function(i, val){
					if(val !== 'which'){
						validationData.vData[name][val] = 'empty';
					} else {
						var group = $self.data('which');
						validationData.vData[group] = {};
						validationData.vData[group][val] = 'empty';
					}
				});
	
				$self.on('blur', function(){
					$.each(validateItem, function(i, val){
						if(val !== 'which'){
							validationData.vData[name][val] = method[val]($self);
						} else {
							var group = $self.data('which');
							validationData.vData[group][val] = method[val]($self);
						}
					});
				});
			}
		});
		$('#regist').on('click', function(e){
			var check;
			check = method.validateSubmit();
			if(!check) {
				e.preventDefault();
				alert('入力漏れ、もしくは入力内容が誤っている項目があります。');
				setTimeout(function(){
					var errorOffset = $('.error:first').parents('.formRow').offset().top;
					$('html, body').animate({'scrollTop': errorOffset}, 600, 'swing');
				}, 300);
			} else {
				if(confirm('入力した内容で申し込みしてもよろしいでしょうか？')){
					$('#form').submit();
				}else{
					return false;
				}
			}
		})

		// Vue.js
		var vm = new Vue({
			el: '#form',
			data: validationData
		});
		vm.$watch('vData', function(n, o){

		}, {deep: true});

	})();

	/* ページ離脱時に確認ダイアログを出す。
	window.addEventListener("beforeunload", function (e) {
		var confirmationMessage = "入力内容を破棄します。";
		e.returnValue = confirmationMessage;
		return confirmationMessage;
	}); */

}).call(this, jQuery);