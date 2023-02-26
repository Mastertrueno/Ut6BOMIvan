/* 
$(function () {
	let divExamples = document.getElementById('container');
	let buttons = divExamples.getElementsByClassName('navbar-nav').getElementsByClassName('document');
	let mywindow = null;
	let categories = $('#container');
	cleanMessage();
	let bOpen = $('<button class="btn btn-primary m-1">Abrir ventana</button>');
	bOpen.click(function (event) {
		mywindow = window.open("auxPage.html", "Mywindow", "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");
	});
	categories.append(bOpen);
});

if (!mywindow || mywindow.closed) {
	mywindow = window.open("auxPage.html", "Mywindow", "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");
} else {
	mywindow.focus();
} */
(function () {
	let menu = $('.navbar-nav');
	let divExamples = document.getElementsByClassName('container')[0];
	console.log(divExamples);
	//let botones = $(divExamples.getElementsByClassName("collapse")[0].getElementsByTagName("div")[0].getElementsByClassName('navbar-nav'));
	//console.log(botones);
	console.log(menu);
	let bot = $(`<div class="buttons">
					<ul class="navbar-nav">
						<li class="nav-item ">
							<a class="nav-link " href="#" id="navWindow" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Abrir Ventana
							</a>
						</li>
						<li class="nav-item ">
							<a class="nav-link btn " href="#" id="navWindow" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							 Cerrar Ventana
							</a>
						</li>
					</ul>
				</div>`);
	menu.append(bot);

	buttons[0].addEventListener('click', function () {
		$$result.clear();
		$$result.logBold('Funciones globales sin window');
		$$result.log(document.getElementById('message').textContent);
		$$result.logBold('Funciones globales con window');
		$$result.log(window.document.getElementById('message').textContent);
	});

	buttons[1].addEventListener('click', function () {
		$$result.clear();
		$$result.logBold('Dimensiones de la ventana');
		$$result.log("Altura: " + window.innerHeight);
		$$result.log("Anchura: " + window.innerWidth);
	});

	buttons[2].addEventListener('click', function () {
		$$result.clear();
		$$result.logBold('Gestión de nueva ventana');
		$$result.log('Abrir ventanas');
		$$result.log('Pasar el foco entre ventanas');
		$$result.log('Modificar contenido entre ventanas');
		$$result.log('Invocar funciones entre ventanas');
		$$result.log('Abrir enlaces en nueva ventana');
		$$result.log('Mover ventanas');
		$$result.log('Redimensionar ventanas');

		window.mywindow = null;
		let categories = $('#categories');
		let bOpen = $('<button class="btn btn-primary m-1">Abrir ventana</button>');
		bOpen.click(function (event) {
			if (!mywindow || mywindow.closed) {
				mywindow = window.open("auxPage.html", "Mywindow", "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");
			} else {
				mywindow.focus();
			}
		});
		categories.prepend(bOpen);

		// Close Window
		let bClose = $('<button class="btn btn-danger m-1">Cerrar Ventana </button>');
		bClose.click(function (event) {
			if (mywindow && !(mywindow.closed)) {
				mywindow.close();
				$$result.log('Acabas de cerrar la ventana.');
			} else {
				$$result.log('La ventana está cerrada.');
			}
		});
		bOpen.after(bClose);

		// Title
		let bTitle = $('<button class="btn btn-primary m-1">Título</button>');
		bTitle.click(function (event) {
			if (mywindow && !(mywindow.closed)) {
				$$result.log($(mywindow.document).find('h1').first().text());
			} else {
				$$result.log('La ventana está cerrada.');
			}
		});
		bClose.after(bTitle);

		// Greeting
		let bGreeting = $('<button class="btn btn-primary m-1">Saludar</button>');
		bGreeting.click(function (event) {
			if (mywindow && !(mywindow.closed)) {
				$(mywindow.document).find('#message').first().text(greeting());
				mywindow.focus();
			} else {
				$$result.log('La ventana está cerrada.');
			}
		});
		bTitle.after(bGreeting);

		// Get Greeting
		let bGetGreeting = $('<button class="btn btn-primary m-1">Obtener Saludo</button>');
		bGetGreeting.click(function (event) {
			if (mywindow && !(mywindow.closed)) {
				$$result.log(mywindow.greeting());
			} else {
				$$result.log('La ventana está cerrada.');
			}
		});
		bGreeting.after(bGetGreeting);

		let link = $(`<div>
					<a target="myWindow" href="https://developer.mozilla.org/es/">Abrir MDN</a>
			</div>`);
		bGetGreeting.after(link);

		// moveTo
		let bMoveTo = $('<button class="btn btn-primary m-1">Mover</button>');
		bMoveTo.click(function (event) {
			if (mywindow && !(mywindow.closed)) {
				mywindow.moveTo(1250, 1250);
				mywindow.focus();
			} else {
				$$result.log('La ventana está cerrada.');
			}
		});
		link.after(bMoveTo);

		$(document).keydown(function (event) {
			switch (event.code) {
				case "ArrowUp":
					mywindow.moveBy(0, -10);
					break;
				case "ArrowDown":
					mywindow.moveBy(0, 10);
					break;
				case "ArrowLeft":
					mywindow.moveBy(-10, 0);
					break;
				case "ArrowRight":
					mywindow.moveBy(10, 0);
					break;
			}
		});

		// Resize
		let bResize = $('<button class="btn btn-primary m-1">Redimensionar</button>');
		bResize.click(function (event) {
			if (mywindow && !(mywindow.closed)) {
				mywindow.resizeTo(1024, 768);
				mywindow.focus();
			} else {
				$$result.log('La ventana está cerrada.');
			}
		});
		bMoveTo.after(bResize);

		$(document).keydown(function (event) {
			switch (event.code) {
				case "Numpad8":
					mywindow.resizeBy(0, 10);
					break;
				case "Numpad2":
					mywindow.resizeBy(0, -10);
					break;
				case "Numpad4":
					mywindow.resizeBy(-10, 0);
					break;
				case "Numpad6":
					mywindow.resizeBy(10, 0);
					break;
			}
		});
	});

	buttons[3].addEventListener('click', function () {
		$$result.clear();
		$$result.logBold('Propiedades objeto screen');
		$$result.log("Width: " + screen.width);
		$$result.log("Height: " + screen.height);
		$$result.log("availWidth: " + screen.availWidth);
		$$result.log("availHeight: " + screen.availHeight);
	});

	buttons[4].addEventListener('click', function () {
		$$result.clear();
		$$result.logBold('Propiedades objeto location');
		$$result.log("href: " + location.href);
		$$result.log("hostname: " + location.hostname);
		$$result.log("pathname: " + location.pathname);
		$$result.log("protocol: " + location.protocol);
		$$result.log("puerto: " + location.port);
	});

	function reload() {
		window.location.reload();
	}
	buttons[5].addEventListener('click', reload);

	function assign() {
		window.location.assign('https://developer.mozilla.org/es/');
	}
	buttons[6].addEventListener('click', assign);

})();


