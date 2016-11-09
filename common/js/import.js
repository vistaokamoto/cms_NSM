(function(){
	var s = document.getElementsByTagName("script");
	var d = s[s.length-1].src.substring(0, s[s.length-1].src.lastIndexOf("/")+1);
	for(var i=0; i<arguments.length; i++){
		document.write('<script type="text/javascript" src="'+d+arguments[i]+'"></script>');
	}
})(
//jquery
// "jquery-1.4.4.min.js",	20141224コメントアウト昔のJS

//rollover
"smartRollover.js",

//scroll
"jquery.easingscroll.js",

//height
"fixHeight.js",

//zoom
"jquery.colorbox.js",

//rollover opacity
"opacity-rollover.js",

//sidemenu
//"jquery.listfolder.js",	

//lightbox
"jquery.easing.pack.js",
"jquery.mousewheel.pack.js",
"jquery.fancybox.pack.js",

"run_common.js"	//run
);