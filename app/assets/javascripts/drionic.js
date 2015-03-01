drionic = {}
drionic.regions = 6

drionic.initialize = function(){
	[1,2,3,4,5,6].forEach(function(i){
		var id = "region" + i
		var jEl = $("#" + id)
		jEl.click(function(){
			$("#content").html(JST["regions/" + id]())
			$(".tab").removeClass("active")
			jEl.addClass("active")
		})
	})
	$('#region1').trigger("click")
}

$(document).ready(drionic.initialize)