(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var Validation = App.Validation;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    formHandler.addSubmitHandler(function(data) {
        myTruck.createOrder(data);
        checkList.addRow(data);
    });
    formHandler.addInputHandler(Validation.isCompanyEmail);
    formHandler.addInputCoffeeOrderHandler(Validation.isValidCoffeeOrder);
    formHandler.addInputCoffeeStrenthHandler(Validation.isValidCoffeeOrder);
    console.log(formHandler);

})(window);
