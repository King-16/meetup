$(document).ready(function () {
	$(".map__btn").click(function () {
		$(".popup").addClass("d-none");
	})
})

$(document).ready(function(){
    $(".menu__item").on("click","a", function (event) { //обєкто по якому клікаєм
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(document).ready(function(){
 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.arrow__up').fadeIn();
		} else {
			$('.arrow__up').fadeOut();
			}
	});

	$('.arrow__up').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
	});
 
});


function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2019, 2, 9);
  // Период сброса — 3 дня
  var period = 364*24*60*60*1000;

  function update() {
    var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
  
    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
  }
  setTimeout(update, 0);
}

 updater(document.getElementById("days"),
 document.getElementById("hours"), 
 document.getElementById("minutes"),
 document.getElementById("seconds"));