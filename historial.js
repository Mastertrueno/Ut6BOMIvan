import "./VideoSystemApp.js";
const historyActions = {
    init: () => {
        VideoSystemApp.handleInit();
    },
       bindProductsCategoryList: (event) => VideoSystemApp.handleProductionsCategoryList(event.state.category),

       bindProducts: (event) => VideoSystemApp.handleProduction(event.state.product),
       bindProductsList: (event) => VideoSystemApp.handleAletProductionList(event.state.product),
       bindInit: (event) => VideoSystemApp.handleInit(event.state.category),
       bindProductsTypeList: (event) => VideoSystemApp.handleProductionsTypeList(event.state.type),
       bindActors: (event) => VideoSystemApp.handleActor(event.state.actor),
       bindProductsPerson: (event) => VideoSystemApp.handleProductionPerson(event.state.product),
       bindActorsProd: (event) => VideoSystemApp.handleActorProd(event.state.actor),
       bindActorsProd: (event) => VideoSystemApp.handleShowProduct(event.state.actor),
       bindDirectors: (event) => VideoSystemApp.handleDirector(event.state.director),
       bindShowProduct: (event) => VideoSystemApp.handleShowProduct(event.state.type),


    //showProduct: (event) => VideoSystemApp.handleShowProduct(event.state.serial)
}
window.addEventListener('popstate', function (event) {
    if (event.state) {
        console.log(event.state);
        historyActions[event.state.action](event);
    }
});
