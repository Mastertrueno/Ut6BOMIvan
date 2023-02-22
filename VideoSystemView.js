class VideoSystemgerView {
	constructor() {
		this.main = $('main');
		this.categories = $('#categories');
		this.menu = $('.navbar-nav');
		this.productWindow = null;
	}
	#excecuteHandler(handler, handlerArguments, scrollElement, data, url, event) {
		handler(...handlerArguments);
		/* $(scrollElement).get(0).scrollIntoView();
		history.pushState(data, null, url);
		event.preventDefault(); */
	}
	/* ListCategories() {
		this.categories.empty();
		this.categories.append(`<div id="type-list" class="row">
			   <div class="col-lg-3 col-md-6"><a data-type="Accion" href="#product-list">
					   <div class="cat-list-image"><img alt="Categoría Accion" src="images/accion.jfif" />
					   </div>
					   <div class="cat-list-text">
						   <h3>Accion</h3>
					   </div>
				   </a>
			   </div>
			   <div class="col-lg-3 col-md-6"><a data-type="Romance" href="#product-list">
					   <div class="cat-list-image"><img alt="Categoría Romance" src="images/romance.jfif" />
					   </div>
					   <div class="cat-list-text">
						   <h3>Romance</h3>
					   </div>
				   </a>
			   </div>
			   <div class="col-lg-3 col-md-6"><a data-type="Misterio" href="#product-list">
					   <div class="cat-list-image"><img alt="Categoría Misterio" src="images/misterio.jfif" />
					   </div>
					   <div class="cat-list-text">
						   <h3>Misterio</h3>
					   </div>
				   </a>
			   </div>
		   </div>`);
	} */
	showCategories(categories) {
		console.log(categories);
		if (this.categories.children().length > 1)
			this.categories.children()[1].remove();
		let container = $('<div id="category-list" class="row"></div>');
		for (let category of categories){
			console.log(category[0]);
			container.append(`<div class="col-lg-3 col-md-6"><a data-category="${category[0].Name}" href="#product-list">
					<div class="cat-list-image"><img alt="${category[0].Name}" src="images/${category[0].Name}.jfif" />
					</div>
					<div class="cat-list-text">
						<h3>${category[0].Name}</h3>
						<div>${category[0].Description}</div>
					</div>
				</a>
			</div>`);
		}
		container.prepend(`<h1>Categorias</h1>`);
		this.categories.append(container);
	}
	showProductions(categories) {
		if (this.categories.length > 1)
			this.categories.remove();
		let container = $('<div id="category-list" class="row"></div>');
		for (let category of categories) {
			container.append(`<div class="col-lg-3 col-md-6"><a data-category="${category[0].Name}" href="#product-list">
		<div class="cat-list-image"><img alt="${category[0].Name}" src="images/${category[0].Name}.jfif" />
		</div>
		<div class="cat-list-text">
					<h3>${category[0].Name}</h3>
					<div>${category[0].Description}</div>
				</div>
			</a>
		</div>`);
		}
		this.categories.append(container);
	}
	showAletProductions(productions) {
		this.main.empty();
		console.log(productions);
/* 		if (this.productions.length > 1)
			this.productions.children()[1].remove(); */
		let container = $('<div id="product-list" class="row"></div>');
		let list=[];
		for (let product of productions){
			console.log(product);
			list.push(product);
			
		}
		let len ;
		for (let index = 0; index < 3; index++) {
			len=Math.floor( Math.random() * list.length);
			console.log(len);
			container.append(`<div class="col-lg-3 col-md-6"><a data-product="${list[len].Title}" href="#product-list">
					<div class="prod-list-image"><img alt="${list[len].Title}" src="images/${list[len].Title}.jfif " />
					</div>
					<div class="prod-list-text">
						<h3>${list[len].Title}</h3>
						
					</div>
				</a>
			</div>`);
			list.splice(len,1);
			//console.log(list);
		}
		this.categories.append(container);
		container.prepend(`<h1>Populares</h1>`);
		this.main.append(container);
	}
	showCategoriesInMenu(categories) {
		let li = $(`<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navCats" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Categorías
			</a>
		</li>`);
		let container = $('<div class="dropdown-menu" aria-labelledby="navCats"></div>');
		//if (!category.done) shopping
		for (let category of categories) {
			container.append(`<a data-category="${category[0].Name}"
		class="dropdown-item" href="#product-list">${category[0].Name}</a>`);
		}
		li.append(container);
		this.menu.append(li);
	}
	showActorsInMenu(actors) {
		let li = $(`<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navActor" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Actores
			</a>
			</li>`);
		let container = $('<div class="dropdown-menu" aria-labelledby="navAct"></div>');
		//if (!category.done) shopping
		for (let actor of actors) {
			//console.log(actor[0].Lastname1);
			container.append(`<a data-actor="${actor[0].Name}${actor[0].Lastname1}"
		class="dropdown-item" href="#actor-list">${actor[0].Name} ${actor[0].Lastname1}</a>`);
		}
		li.append(container);
		this.menu.append(li);
	}
	showDirectorsInMenu(directors) {
		let li = $(`<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navDirector" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Directores
			</a>
			</li>`);
		let container = $('<div class="dropdown-menu" aria-labelledby="navDirec"></div>');
		//if (!category.done) shopping
		for (let director of directors) {
			//console.log(director[0].Lastname1);
			container.append(`<a data-actor="${director[0].Name}"
		class="dropdown-item" href="#actor-list">${director[0].Name} ${director[0].Lastname1}</a>`);
		}
		li.append(container);
		this.menu.append(li);
	}
	listProductions(production, category, Videosystem) {
		this.main.empty();
		if (production.length > 1)
			production.remove();
		let container = $(`<div id="production-list" class="container my-3"><div class="row"> </div></div>`);
		//let product = production.next();

		for (let product of production) {
			//console.log(product);

			let div = $(`<div class="col-md-4">
				<figure class="card card-product-grid card-lg"> <a data-serial="${product.serial}" href="#single-product" class="img-wrap"><img class="${product.constructor.name}-style" src="images/${product.Title}.jfif"></a>
					<figcaption class="info-wrap">
						<div class="row">
							<div class="col-md-8"> <a data-serial="${product.serial}" href="#single-product" class="title"><h2>${product.Title}</h2></a> </div>
						</div>
					</figcaption>
					
				</figure>
			</div>`);
			container.children().first().append(div);
			/* for (let actor of Videosystem.actors) {
				console.log(actor);
			} */
			for (let actor of Videosystem.getCast(product)) {
				/* console.log(actor);
				console.log(actor.Name); */
				container.children().children().children().last().append(`<div class="actor-wrap"> <span class="actor h5">${actor.Name} ${actor.Lastname1}</span> <br> </div>`);
			}

			//product = production.next();
		}
		container.prepend(`<h1>${category}</h1>`);
		this.main.append(container);
	}
	listActor(actor, Videosystem) {
		this.main.empty();
		console.log(actor);
		let container = $(`<div id="actor-list" class="container my-3"><div class="row"> </div></div>`);
		//let product = production.next();
		//for (let index = 0; index < actors.length; index++) {

		let div = $(`<div class="col-md-4">
				<figure class="card card-actor-grid card-lg"> <a data-actor="${actor}" href="#single-actor" class="img-wrap"><img class="${actor}-style" src=""></a>
					
					
				</figure>
			</div>`);
		container.children().first().append(div);
		console.log(Videosystem.getProductionsActor(actor));
		for (let prod of Videosystem.getProductionsActor(actor)) {
			console.log(prod);
			console.log(prod.Title);
			container.children().children().children().last().append(`<div class="production-wrap"> <span class="production h5">${prod.Title}</span> <br> </div>`);
		}

		//product = production.next();

		container.prepend(`<h1>${actor.Name} ${actor.Lastname1}</h1>`);
		this.main.append(container);
	}
	listDirector(director, Videosystem) {
		this.main.empty();
		console.log(director);
		let container = $(`<div id="director-list" class="container my-3"><div class="row"> </div></div>`);
		//let product = production.next();
		//for (let index = 0; index < actors.length; index++) {

		let div = $(`<div class="col-md-4">
				<figure class="card card-director-grid card-lg"> <a data-actor="${director}" href="#single-actor" class="img-wrap"><img class="${director}-style" src=""></a>
					
					
				</figure>
			</div>`);
		container.children().first().append(div);
		console.log(Videosystem.getProductionsDirector(director));
		for (let prod of Videosystem.getProductionsDirector(director)) {
			console.log(prod);
			console.log(prod.Title);
			container.children().children().children().last().append(`<div class="production-wrap"> <span class="production h5">${prod.Title}</span> <br> </div>`);
		}

		//product = production.next();

		container.prepend(`<h1>${director.Name} ${director.Lastname1}</h1>`);
		this.main.append(container);
	}
	bindInit(handler) {
		$('#init').click((event) => {
			handler();
		});
		$('#logo').click((event) => {
			handler();
		});
	}
	bindProductsCategoryListInMenu(handler) {
		console.log(handler);
		$('#navCats').next().children().click((event) => {
			console.log((event.target));
			let category = $(event.target).closest($('a')).get(0).dataset.category;
			console.log(category);
			this.#excecuteHandler(
				handler, [category],
				'#product-list',
				{ action: 'productsCategoryList', category: category },
				'#category-list', event
			);
			console.log(this.#excecuteHandler);
		});
	}
	bindProductsCategoryList(handler){
		$('#category-list').find('a').click((event) => {
			let category = $(event.target).closest($('a')).get(0).dataset.category;
			this.#excecuteHandler(
				handler, [category],
				'#product-list',
				{action: 'productsCategoryList', category: category},
				'#category-list', event
			);
		});
	}
	bindProductsList(handler){
		console.log(handler);
		console.log($('#product-list'));
		$('#product-list').find('a').click((event) => {
			let prod = $(event.target).closest($('a')).get(0);
			console.log(prod);
			this.#excecuteHandler(
				handler, [prod],
				'#product-list',
				{action: 'productsCategoryList'},
				'#product-list', event
			);
		});
	}
	bindActorListInMenu(handler) {
		console.log("bindactor");
		console.log($('#navActor').next().children());
		console.log(handler);
		$('#navActor').next().children().click((event) => {
			console.log(event.target);
			let act = $(event.target).closest($('a')).get(0);
			console.log(act);
			this.#excecuteHandler(
				handler, [act],
				'#actor-list',
				{ action: 'productsActorList', Name: act },
				'#actor-list', event
			);
			console.log(this.#excecuteHandler);
		});
	}
	bindDirectorListInMenu(handler) {
		console.log("binddirectorr");
		console.log($('#navDirector').next().children());
		console.log(handler);
		$('#navDirector').next().children().click((event) => {
			console.log(event.target);
			let dir = $(event.target).closest($('a')).get(0);
			console.log(dir);
			this.#excecuteHandler(
				handler, [dir],
				'#director-list',
				{ action: 'productsDirectorList', Name: dir },
				'#director-list', event
			);
			console.log(this.#excecuteHandler);
		});
	}
	bindPersonListInMenu(handler) {
		$('#navCats').next().children().click((event) => {
			console.log((event.target));
			let person = $(event.target).closest($('a')).get(0).dataset.category;
			let type;
			if (event.target.text == "Actor") {
				this.#excecuteHandler(
					handler, [person],
					'#actor-list',
					{ action: 'productsCategoryList' },
					'#actor-list', event
				);
			} else {
				this.#excecuteHandler(
					handler, [person],
					'#director-list',
					{ action: 'productsCategoryList' },
					'#director-list', event
				);
			}

		});
	}
	bindShowProduct(handler) {
		//console.log($('#product-list').children());
		$('#product-list').click((event) => {
			//console.log("aqui");
			let category = $(event.target).closest($('a')).get(0).dataset.category;
			this.#excecuteHandler(
				handler, [category],
				'#product-list',
				{ action: 'productsCategoryList', category: category },
				'#category-list', event
			);
		});
		$('#product-list').find('figcaption a').click((event) => {
			this.#excecuteHandler(
				handler, [category],
				'#product-list',
				{ action: 'productsCategoryList', category: category },
				'#category-list', event
			);
		});
	}
	bindProductsTypeList(handler){
		$('#type-list').find('a').click((event) => {
			let type = $(event.target).closest($('a')).get(0).dataset.type;
			this.#excecuteHandler(
				handler, [type],
				'#product-list',
				{action: 'productsTypeList', type: type},
				'#type-list', event
			);
		});
	}
}
export default VideoSystemgerView;
