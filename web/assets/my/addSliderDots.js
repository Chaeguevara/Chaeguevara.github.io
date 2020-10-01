var ele;
var ele2;

ele = $(".numbertext")
n = ele.length;
ele2 = $("div[style='text-align:center']");
$(".numbertext").each(function(i){
	var t1 = i+1 + " / " + n;
	$(this).text(t1);
	var j = i+1;
	preText = "<span class='dot' onclick='currentSlide("+j+")'></span>";
	ele2.append(preText);
	
	
});
