import VideoSystem from './VideoSystemModel.js';
import VideoSystemController from './VideoSystemController.js';
import VideoSystemView from './VideoSystemView.js';

const VideoSystemApp = new VideoSystemController(
    VideoSystem.getInstance(), new VideoSystemView()
  );
const historyActions = {
    init: () => {
        VideoSystemApp.handleInit();
    },

       ActorListInMenu: () => VideoSystemApp.handleActorList(),
       bindDirectorListInMenu: (event) => VideoSystemApp.handleDirectorList(event.state.category),
       bindProductsCategoryList: (event) => VideoSystemApp.handleProductionsCategoryList(event.state.category),

       bindProducts: (event) => VideoSystemApp.handleProduction(event.state.category),
       bindProductsList: (event) => VideoSystemApp.handleAletProductionList(event.state.category),
       bindInit: (event) => VideoSystemApp.handleInit(event.state.category),
       bindProductsTypeList: (event) => VideoSystemApp.handleProductionsTypeList(event.state.category),
       bindProductsCategoryListInMenu: (event) => VideoSystemApp.handleProductionsCategoryList(event.state.category),
       bindActors: (event) => VideoSystemApp.handleActor(event.state.category),
       bindProductsPerson: (event) => VideoSystemApp.handleProductionPerson(event.state.category),
       bindActorsProd: (event) => VideoSystemApp.handleActorProd(event.state.category),
       bindActorsProd: (event) => VideoSystemApp.handleShowProduct(event.state.category),
       bindDirectors: (event) => VideoSystemApp.handleDirector(event.state.category),
       bindShowProduct: (event) => VideoSystemApp.handleShowProduct(event.state.type) 


}
window.addEventListener('popstate', function (event) {
    if (event.state) {
        console.log(event.state);
        historyActions[event.state.action](event);
    }
});
history.replaceState({action: 'init'}, null);

export default VideoSystemApp;
