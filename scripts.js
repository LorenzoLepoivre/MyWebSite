
	// Lazy Load
	$(document).ready(function() {
		var apparitions = document.getElementsByClassName('apparition');
		for (app of apparitions) { 
			$(app).addClass("invisible");
		}
		
		var no_script = document.getElementById('no-script');
		$(no_script).addClass("noDisplay");
		var has_script = document.getElementById('has-script');
		$(has_script).removeClass("noDisplay");
		$(has_script).addClass("yesDisplay");
		
		$(window).scroll( function() {
			var invisibles = document.getElementsByClassName('invisible');
			for (inv of invisibles) { 
				if($(inv).offset().top + $(inv).outerHeight()/2  <=  $(window).scrollTop() + $(window).height()){
					$(inv).removeClass("invisible");
				}
			}
		});
	
	});
	
	// Slider
	var  position = 1;
	var nbImages = $('img').length -4;
	var hauteurImage = 400;
	
	$('#lucarne').click(function() {
		position++;
		if (position > nbImages) {
			position = 1;
		}
		var topPosition = -(position - 1) * hauteurImage;
		$('#plateau').css({
		top: topPosition + 'px',
		transition: '400ms'
		});
		$('#num').text(position);
	});
	
	// Imprimer le site
	function imprimerSite() {
		window.print();
	}
	document.getElementById('btnPrint').addEventListener('click', imprimerSite);
	
	
	function addDarkmodeWidget() {
    const options = {
        label: '🌓', // default: ''
    };
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
}

window.addEventListener('load', addDarkmodeWidget);

