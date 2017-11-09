$(document).ready(function(){
	setInterval(function(){
		remainTimer -= 1;
		parseTime(remainTimer);
	}, 1000);
});

var remainTimer = 51460599;
function parseTime(timestamp) {
	if(timestamp < 0) timestamp = 0;

		var day = Math.floor((timestamp/60/60)/24);
		var hour = Math.floor(timestamp/60/60);
		var mins = Math.floor((timestamp - hour*60*60)/60);
		var secs = Math.floor(timestamp - hour*60*60 - mins * 60);
		var left_hour = Math.floor((timestamp - day*24*60*60) / 60 / 60);

		$('.page .wrapper__slider .deals__section-dashboard-clock-time-days').text(day);
		$('.page .wrapper__slider .deals__section-dashboard-clock-time-hours').text(left_hour);

		if(String(mins).length > 1) {
			$('.page .wrapper__slider .deals__section-dashboard-clock-time-mins').text(mins);
		}else{
			$('.page .wrapper__slider .deals__section-dashboard-clock-time-mins').text('0' + mins);
		}

		if(String(secs).length > 1) {
			$('.page .wrapper__slider .deals__section-dashboard-clock-time-secs').text(secs);
		}else{
			$('.page .wrapper__slider .deals__section-dashboard-clock-time-secs').text('0' + secs);
		}
}