(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-orders-orders-module"],{

/***/ "./src/app/shopify-app/modules/orders/components/orders-details/orders-details.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/shopify-app/modules/orders/components/orders-details/orders-details.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"company-details\">\n  <div class=\"padding-top-25px padding-bottom-60px\">\n    <div class=\"padding-header-data\">\n      <div class=\"display-flex flex-wrap\">\n        <div class=\"width-title\">\n          <div class=\"d-flex align-items-start flex-column\">\n            <div class=\"page-title color-black\">{{'COMPANY_DETAILS'|translate}}</div>\n            <div class=\"font-size-24px color-black font-weight-300\">{{'HISTORY_ACTIONS'|translate}}</div>\n          </div>\n        </div>\n        <span class=\"flex-grow-1\"></span>\n        <div class=\"width-button\">\n          <div class=\"d-flex flex-column\">\n            <button type=\"button\" type=\"button\" data-toggle=\"tooltip\" data-placement=\"top\"\n              title=\"{{'VIEW_RESULTS'|translate}}\" class=\"btn btn-company border-radius-0px button-font min-height-50px\"\n              (click)=\"onEditCompany()\">\n              {{'EDIT_COMPANY'|translate}}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"chk-block mb-0 border-box padding-left-20px padding-right-20px\">\n    <div class=\"row custom-header\">\n      <div class=\"col-xl-6 col-lg-6 col-md-6\">\n        {{'COMPANY_CONTACT'|translate}}\n      </div>\n\n      <div class=\"col-xl-6 col-lg-6 col-md-6\">\n        {{'COMPANY_PROFILE'|translate}}\n      </div>\n    </div>\n    <hr>\n    <div class=\"chk-block-content font-size-18px font-color-custom row\" *ngIf=\"company\">\n      <div class=\"col-xl-4 col-lg-4 col-md-4\">\n        <div class=\"font-weight-bold\">\n          {{'COMPANY_NAME'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.name}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-phone mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"text-icon-color\">\n            {{company.phone}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-at mr-1 mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"text-icon-color\">\n            {{company.email}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'ADDRESS'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.address ? company.address : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"row padding-left-15px padding-top-28px\">\n          <div class=\"font-weight-bold\">\n            CP:\n            <span class=\"font-weight-normal\">\n              {{company.zip ? company.zip : 'N/A'}}\n            </span>\n          </div>\n          <span class=\"width-42px\"></span>\n          <div class=\"font-weight-bold\">\n            {{'CITY'|translate}}:\n            <span class=\"font-weight-normal\">\n              {{company.city ? company.city : 'N/A'}}\n            </span>\n          </div>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'SITE'|translate}}:\n          <span class=\"font-weight-normal link-color-font\">\n            {{company.site ? company.site : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-facebook-f mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"link-color-font\">\n            {{company.facebook ? company.facebook : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-linkedin mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"link-color-font\">\n            {{company.linkedin ? company.linkedin : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-twitter mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"link-color-font\">\n            {{company.twitter ? company.twitter : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-instagram mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"link-color-font\">\n            {{company.instagram ? company.instagram : 'N/A'}}\n          </span>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-4\">\n        <div class=\"font-weight-bold\">\n          {{'CEO'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.ceo ? company.ceo : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'SECTOR'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.activitySector.sector}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'NAF'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.naf ? company.naf : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'SIRET'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.siretNumber ? company.siretNumber : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'COMPANY_TYPE'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{type.get(company.type)}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          CA (2018):\n          <span class=\"font-weight-normal\">\n            {{company.grossSales2018 ? company.grossSales2018 : 'N/A'}}\n          </span>\n          <i class=\"fa fa-eur mr-1 euro-icon-font \"></i>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          CA Internet (2018):\n          <span class=\"font-weight-normal\">\n            {{company.internetGrossSales ? company.grossSales2018 : 'N/A'}}\n          </span>\n          <i class=\"fa fa-eur mr-1 euro-icon-font \"></i>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          CA (2019):\n          <span class=\"font-weight-normal\">\n            {{company.grossSales2019 ? company.grossSales2019 : 'N/A'}}\n          </span>\n          <i class=\"fa fa-eur mr-1 euro-icon-font \"></i>\n        </div>\n      </div>\n\n      <div class=\"col-xl-4 col-lg-4 col-md-4\">\n        <div class=\"font-weight-bold\">\n          {{'PRECISION'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.precision ? company.precision : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'COMPANY_SIZE'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.companySize.description}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'CREATION_DATE_COMPANY'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{ company.companyCreation ? (company.companyCreation | date:'dd/MM/yyyy') : 'N/A' }}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'CREATION_DATE_DIGIPILOTE'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.createdAt ? (company.createdAt | date:'dd/MM/yyyy') : 'N/A'}}\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"sec-title padding-left-40px padding-top-60px padding-bottom-40px\">\n    <h3 class=\"text-capitalize title-details\">{{'HISTORY_EVALUATIONS'|translate}}</h3>\n  </div>\n\n  <app-instances-table [companyId]=\"companyId\"></app-instances-table>\n\n  <div class=\"sec-title padding-left-40px padding-top-54px padding-bottom-40px\" *ngIf=\"questionnaires\">\n    <h3 class=\"text-capitalize title-details \" *ngIf=\"questionnaires.length > 0\">\n      {{'QT_SUGGESTED'|translate}}</h3>\n  </div>\n\n\n  <div class=\"course-wrap background-color\" *ngIf=\"questionnaires\">\n    <div class=\"degree-wrap\" *ngIf=\"questionnaires.length > 0\">\n      <div class=\"courses-grid-slider\" dir=\"ltr\">\n        <div class=\"container\">\n          <div *ngIf=\"jsonResponse.courses && jsonResponse.courses.length>0\">\n            <ng-container *ngIf=\"getCoursesByType('trending').length>4 ; else noSlider\">\n              <div class=\"mx-n3\">\n                <ngx-slick-carousel [config]=\"trendingCourseSlideConfig\">\n                  <ng-container ngxSlickItem *ngFor=\"let questionnaire of questionnaires\">\n                    <div class=\"px-3 course-item padding-top-70px padding-bottom-70px\">\n                      <a [routerLinkActive]=\"'active'\" [routerLink]=\"['/instance/create', questionnaire.id]\"\n                        [queryParams]=\"{companyId: companyId}\" data-toggle=\"tooltip\" data-placement=\"right\"\n                        title=\"{{'CREATE_QI'|translate}}\">\n                        <div class=\"card template-card\">\n                          <div class=\"card-header template-header padding-left-28px\">\n                            <span class=\"template-title\">{{'TEMPLATE'|translate}}</span>\n                          </div>\n                          <div class=\"card-body padding-28px\">\n                            <div class=\"sec-content\">\n                              <div class=\"title-font\">\n                                Titre\n                              </div>\n                              <div class=\"data-font padding-top-10px\">\n                                {{questionnaire.name}}\n                              </div>\n                              <div class=\"title-font padding-top-25px\">\n                                Description\n                              </div>\n                              <div class=\"data-font padding-top-10px\">\n                                {{questionnaire.description}}\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </a>\n                    </div>\n                  </ng-container>\n                </ngx-slick-carousel>\n              </div>\n            </ng-container>\n            <ng-template #noSlider>\n              <div class=\"row\">\n                <ng-container *ngFor=\"let questionnaire of questionnaires\">\n                  <div class=\"col-12 col-md-3 grid-b-space course-item\">\n                    <a [routerLinkActive]=\"'active'\" [routerLink]=\"['/instance/create', questionnaire.id]\"\n                      [queryParams]=\"{companyId: companyId}\" data-toggle=\"tooltip\" data-placement=\"right\"\n                      title=\"{{'CREATE_QI'|translate}}\">\n                      <div class=\"card template-card\">\n                        <div class=\"card-header template-header padding-left-28px\">\n                          <span class=\"template-title\">{{'Template'|translate}}</span>\n                        </div>\n                        <div class=\"card-body padding-28px\">\n                          <div class=\"sec-content\">\n                            <div class=\"title-font\">\n                              {{'TITLE'|translate}}\n                            </div>\n                            <div class=\"data-font padding-top-10px\">\n                              {{questionnaire.name}}\n                            </div>\n                            <div class=\"title-font padding-top-25px\">\n                              {{'DESCRIPTION'|translate}}\n                            </div>\n                            <div class=\"data-font padding-top-10px\">\n                              {{questionnaire.description}}\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                </ng-container>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/shopify-app/modules/orders/components/orders-details/orders-details.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/shopify-app/modules/orders/components/orders-details/orders-details.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".min-height-50px {\n  min-height: 50px !important;\n  max-width: 260px !important; }\n\n.button-font {\n  font-weight: 300;\n  font-size: 24px; }\n\n@media screen and (max-width: 899px) {\n  .width-span {\n    display: none; }\n  .padding-header-data {\n    padding: 0px 0px 0px; }\n  .company-details {\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  .button-font {\n    font-weight: 300;\n    font-size: 20px; }\n  .page-title {\n    font-weight: 300;\n    font-size: 36px;\n    line-height: 47px; } }\n\n@media screen and (min-width: 900px) {\n  .width-span {\n    -webkit-box-flex: 1;\n            flex-grow: 1; }\n  .padding-header-data {\n    padding: 0px 45px 0px; }\n  .width-title {\n    width: 65%; }\n  .width-button {\n    width: 35%; }\n  .company-details {\n    padding-left: 30px !important;\n    padding-right: 50px !important; }\n  .button-font {\n    font-weight: 300;\n    font-size: 24px; }\n  .page-title {\n    font-weight: 300;\n    font-size: 40px;\n    line-height: 47px; } }\n\n.font-size-24px {\n  font-size: 24px; }\n\n.font-size-20px {\n  font-size: 20px; }\n\n.font-size-18px {\n  font-size: 18px; }\n\n.padding-bottom-60px {\n  padding-bottom: 60px; }\n\n.width-356px {\n  width: 356px; }\n\n.custom-header {\n  padding: 23px 44px 7px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #D42948; }\n\n.font-color-custom {\n  color: #3B453A; }\n\n.icons-font {\n  font-size: 20px;\n  color: #3B453A;\n  font-weight: bold; }\n\n.euro-icon-font {\n  font-size: 18px !important;\n  color: #3B453A;\n  font-weight: normal; }\n\n.text-icon-color {\n  color: #221F1F; }\n\n.width-42px {\n  width: 42px; }\n\n.padding-right-23px {\n  padding-right: 23px; }\n\n.padding-top-54px {\n  padding-top: 54px; }\n\n.padding-top-74px {\n  padding-top: 74px; }\n\n.padding-bottom-51px {\n  padding-bottom: 51px; }\n\n.padding-bottom-62px {\n  padding-bottom: 62px; }\n\n.link-color-font {\n  color: #1862c6; }\n\n.padding-top-28px {\n  padding-top: 28px; }\n\n.background-color {\n  background: rgba(229, 229, 229, 0.44); }\n\n.padding-top-70px {\n  padding-top: 70px; }\n\n.padding-bottom-70px {\n  padding-bottom: 70px; }\n\n.in-icons-font {\n  font-size: 24px;\n  color: #3B453A;\n  font-weight: bold; }\n\n.border-radius-0px {\n  border-radius: 0px !important; }\n\n.btn-company {\n  color: #fff;\n  background-color: #D42948;\n  border-color: #D42948; }\n\n.padding-top-60px {\n  padding-top: 60px !important; }\n\n.padding-bottom-60px {\n  padding-bottom: 60px !important; }\n\n.title-details {\n  font-weight: 300;\n  font-size: 24px;\n  color: #000000; }\n\n.color-black {\n  color: #000000; }\n\n.template-card {\n  background: #FFFFFF;\n  border: 1px solid #D2CFCF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  height: 322px; }\n\n.template-header {\n  background: #1862c6; }\n\n.template-title {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 21px;\n  color: #FFFFFF; }\n\n.title-font {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 21px;\n  color: #3B453A; }\n\n.data-font {\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #3B453A; }\n\n.padding-28px {\n  padding: 28px; }\n\n.padding-left-28px {\n  padding-left: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ybGFuZG8vRGVzYXJyb2xsby9TT0xERVYvc2hvcGlmeS9jYXJyaWVyLXNlcnZpY2UtZnJvbnQvc3JjL2FwcC9zaG9waWZ5LWFwcC9tb2R1bGVzL29yZGVycy9jb21wb25lbnRzL29yZGVycy1kZXRhaWxzL29yZGVycy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQTJCO0VBQzNCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR25CO0VBQ0k7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFDSSxvQkFBb0IsRUFBQTtFQUd4QjtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkIsRUFBQTtFQUdqQztJQUNJLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFHbkI7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQixFQUFBLEVBQ3BCOztBQUdMO0VBQ0k7SUFDSSxtQkFBWTtZQUFaLFlBQVksRUFBQTtFQUdoQjtJQUNJLHFCQUFxQixFQUFBO0VBR3pCO0lBQ0ksVUFBVSxFQUFBO0VBR2Q7SUFDSSxVQUFVLEVBQUE7RUFHZDtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEIsRUFBQTtFQUdsQztJQUNJLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFHbkI7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQixFQUFBLEVBQ3BCOztBQUdMO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBS25CO0VBQ0ksb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksWUFBWSxFQUFBOztBQUloQjtFQUNJLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kscUNBQXFDLEVBQUE7O0FBR3pDO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFLckI7RUFDSSw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQXVCekI7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSwrQkFBK0IsRUFBQTs7QUFFbkM7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsMkNBQTJDO0VBQzNDLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaG9waWZ5LWFwcC9tb2R1bGVzL29yZGVycy9jb21wb25lbnRzL29yZGVycy1kZXRhaWxzL29yZGVycy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbi1oZWlnaHQtNTBweCB7XG4gICAgbWluLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMjYwcHggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1mb250IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcbiAgICAud2lkdGgtc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBhZGRpbmctaGVhZGVyLWRhdGEge1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweDtcbiAgICB9XG5cbiAgICAuY29tcGFueS1kZXRhaWxze1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYnV0dG9uLWZvbnQge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICAud2lkdGgtc3BhbiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICAucGFkZGluZy1oZWFkZXItZGF0YSB7XG4gICAgICAgIHBhZGRpbmc6IDBweCA0NXB4IDBweDtcbiAgICB9XG5cbiAgICAud2lkdGgtdGl0bGUge1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgIH1cblxuICAgIC53aWR0aC1idXR0b24ge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgIH1cblxuICAgIC5jb21wYW55LWRldGFpbHN7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1mb250IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDdweDtcbiAgICB9XG59XG5cbi5mb250LXNpemUtMjRweCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZm9udC1zaXplLTIwcHgge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvbnQtc2l6ZS0xOHB4IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cblxuXG4ucGFkZGluZy1ib3R0b20tNjBweCB7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi53aWR0aC0zNTZweCB7XG4gICAgd2lkdGg6IDM1NnB4O1xufVxuXG5cbi5jdXN0b20taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyM3B4IDQ0cHggN3B4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0Q0Mjk0ODtcbn1cblxuLmZvbnQtY29sb3ItY3VzdG9tIHtcbiAgICBjb2xvcjogIzNCNDUzQTtcbn1cblxuLmljb25zLWZvbnQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzNCNDUzQTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmV1cm8taWNvbi1mb250IHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzNCNDUzQTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udGV4dC1pY29uLWNvbG9yIHtcbiAgICBjb2xvcjogIzIyMUYxRjtcbn1cblxuLndpZHRoLTQycHgge1xuICAgIHdpZHRoOiA0MnB4O1xufVxuXG4ucGFkZGluZy1yaWdodC0yM3B4IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyM3B4O1xufVxuXG4ucGFkZGluZy10b3AtNTRweCB7XG4gICAgcGFkZGluZy10b3A6IDU0cHg7XG59XG5cbi5wYWRkaW5nLXRvcC03NHB4IHtcbiAgICBwYWRkaW5nLXRvcDogNzRweDtcbn1cblxuLnBhZGRpbmctYm90dG9tLTUxcHgge1xuICAgIHBhZGRpbmctYm90dG9tOiA1MXB4O1xufVxuXG4ucGFkZGluZy1ib3R0b20tNjJweCB7XG4gICAgcGFkZGluZy1ib3R0b206IDYycHg7XG59XG5cbi5saW5rLWNvbG9yLWZvbnQge1xuICAgIGNvbG9yOiAjMTg2MmM2O1xufVxuXG4ucGFkZGluZy10b3AtMjhweCB7XG4gICAgcGFkZGluZy10b3A6IDI4cHg7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyOSwgMjI5LCAyMjksIDAuNDQpO1xufVxuXG4ucGFkZGluZy10b3AtNzBweCB7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG59XG5cbi5wYWRkaW5nLWJvdHRvbS03MHB4IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cblxuLmluLWljb25zLWZvbnQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzNCNDUzQTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5cbi5ib3JkZXItcmFkaXVzLTBweHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jb21wYW55IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDQyOTQ4O1xuICAgIGJvcmRlci1jb2xvcjogI0Q0Mjk0ODtcbn1cblxuLy8gOjpuZy1kZWVwIGRhdGF0YWJsZS1oZWFkZXItY2VsbHtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbi8vIH1cblxuLy8gOjpuZy1kZWVwIGRhdGF0YWJsZS1ib2R5LWNlbGx7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIDo6bmctZGVlcCAucGFnZS1jb3VudHtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbi8vIH1cblxuLy8gOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGx7XG4vLyAgICAgZm9udC1mYW1pbHk6IFJvYm90byAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4vLyAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDIxcHggIWltcG9ydGFudDtcbi8vIH1cblxuLnBhZGRpbmctdG9wLTYwcHh7XG4gICAgcGFkZGluZy10b3A6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmctYm90dG9tLTYwcHh7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHggIWltcG9ydGFudDtcbn1cbi50aXRsZS1kZXRhaWxzIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNvbG9yLWJsYWNrIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRlbXBsYXRlLWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QyQ0ZDRjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7IFxuICAgIGhlaWdodDogMzIycHg7ICAgXG59XG5cbi50ZW1wbGF0ZS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMxODYyYzY7XG59XG5cbi50ZW1wbGF0ZS10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4udGl0bGUtZm9udCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGNvbG9yOiAjM0I0NTNBO1xufVxuXG4uZGF0YS1mb250IHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBjb2xvcjogIzNCNDUzQTtcbn1cblxuLnBhZGRpbmctMjhweCB7XG4gICAgcGFkZGluZzogMjhweDtcbn1cblxuLnBhZGRpbmctbGVmdC0yOHB4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7ICAgIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shopify-app/modules/orders/components/orders-details/orders-details.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/shopify-app/modules/orders/components/orders-details/orders-details.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: OrdersDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDetailsComponent", function() { return OrdersDetailsComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var app_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/orders.service */ "./src/app/shopify-app/modules/orders/services/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var errorKey = 'Error';
var OrdersDetailsComponent = /** @class */ (function () {
    function OrdersDetailsComponent(pageTitleService, activatedRoute, translate, router, errorHandlingService, ordersService, http) {
        this.pageTitleService = pageTitleService;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.router = router;
        this.errorHandlingService = errorHandlingService;
        this.ordersService = ordersService;
        this.http = http;
    }
    OrdersDetailsComponent.prototype.ngOnInit = function () {
    };
    OrdersDetailsComponent.prototype.onEditPedido = function () {
        // this.router.navigate(['/company/edit', this.companyId]);
    };
    OrdersDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders-details',
            template: __webpack_require__(/*! ./orders-details.component.html */ "./src/app/shopify-app/modules/orders/components/orders-details/orders-details.component.html"),
            styles: [__webpack_require__(/*! ./orders-details.component.scss */ "./src/app/shopify-app/modules/orders/components/orders-details/orders-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_6__["PageTitleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _services_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], OrdersDetailsComponent);
    return OrdersDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shopify-app/modules/orders/components/orders-table/orders-table.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/shopify-app/modules/orders/components/orders-table/orders-table.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" padding-left-40px padding-bottom-60px\">\n  <div class=\"\">\n    <div class=\"padding-header-data\">\n      <div class=\"width-title\">\n        <div class=\"d-flex align-items-start flex-column title-color-black\">\n          <div class=\"page-title\">{{'Listado de Pedidos'|translate}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<form [formGroup]=\"filter\" autocomplete=\"off\">\n  <!-- <div class=\"chk-block-title px-4\">\n    <div class=\"d-block d-sm-flex justify-content-between align-items-center\">\n      <div class=\"d-flex justify-content-start align-items-center mb-sm-0 mb-3\">\n        \n      </div>\n      <div class=\"d-flex justify-content-start align-items-center\">\n        <button type=\"button\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{'GO_FORM_COMPANY'|translate}}\"\n          class=\"btn add-button border-radius-0px button-font\" [routerLinkActive]=\"'active'\" [routerLink]=\"['../create']\">\n          {{'ADD_COMPANY'|translate}}\n          <i class=\"fa fa-plus ml-2 font-size-24px\"></i>\n        </button>\n      </div>\n    </div>\n  </div> -->\n\n\n  <div class=\"user-manage-list\">\n    <div class=\"chk-block mb-0\">\n      <!-- <div class=\"chk-block-title px-4\">\n        <div class=\"d-block d-sm-flex justify-content-between align-items-center\">\n          <div class=\"d-flex justify-content-start align-items-center mb-sm-0 mb-3 row padding-left-30px\">\n            <div class=\"form-group form-field mr-3 mb-0 text-nowrap\">\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\"\n                placeholder=\"{{'COMPANY_NAME'|translate}}...\">\n            </div>\n            <div class=\"form-group form-field mr-3 mb-0 text-nowrap\">\n              <select class=\"form-control\" formControlName=\"size\">\n                <option [value]=\"''\" selected>{{'ALL_SIZE'|translate}}</option>\n                <option *ngFor=\"let size of sizeList\" [value]=\"size.id\">{{size.name}}</option>\n              </select>\n            </div>\n            <div class=\"form-group form-field mr-3 mb-0 text-nowrap\">\n              <select class=\"form-control\" formControlName=\"sector\">\n                <option [value]=\"''\" selected>{{'ALL_SECTOR'|translate}}</option>\n                <option *ngFor=\"let sector of sectorList\" [value]=\"sector.id\">{{sector.sector}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div> -->\n\n\n      <div class=\"chk-block-content\">\n        <div class=\"table-responsive\">\n          <div class=\"unseen\">\n            <table class=\"table border-collapse-inherit table-hover table-striped table-bordered \">\n              <thead>\n                <tr class=\"bg-white\">\n                  <th >{{'Productos'|translate}}</th>\n                  <th >{{'Cantidad'|translate}}</th>\n                  <th >{{'Importe'}}</th>\n                  <th >{{'Destino'}}</th>\n                  <th >{{'Acciones'}}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let order of ordersList\">\n                  <td>\n                    <div class=\"\" *ngFor=\"let item of order.rate.items\">\n                      {{item.name}}\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"\" *ngFor=\"let item of order.rate.items\">\n                      {{item.quantity}}\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"\">\n\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"\">\n                      <span>\n                        <small>{{order.rate.destination.address1}}</small>,\n                        <small>{{order.rate.destination.city}}</small>,\n                        <small>{{order.rate.destination.province}}</small>,\n                        <small>{{order.rate.destination.postal_code}}</small>\n                      </span>\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"\">\n                      <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{'Detalles'|translate}}\"\n                        class=\"mr-3 text-muted\" href=\"javascript:void(0)\" (click)=\"onDetails(rowIndex)\">\n                        <i class=\"fa fa-eye font-size-24px\" aria-hidden=\"true\"></i></a>\n                      <a data-toggle=\"tooltip \" data-placement=\"top\" title=\"{{'Aceptar'|translate}}\"\n                        class=\"mr-3 text-muted\" href=\"javascript:void(0)\" (click)=\"onEdit(rowIndex)\">\n                        <i class=\"fa fa-check-circle font-size-24px\" aria-hidden=\"true\"></i></a>\n                      <!-- <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{'DELETE'|translate}}\" class=\"mr-3 text-muted\"\n                              href=\"javascript:void(0)\" (click)=\"onDelete(rowIndex)\">\n                              <i class=\"fa fa-times font-size-24px\" aria-hidden=\"true\"></i></a> -->\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/shopify-app/modules/orders/components/orders-table/orders-table.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/shopify-app/modules/orders/components/orders-table/orders-table.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip-static .tooltip {\n  position: relative;\n  display: block;\n  opacity: 1;\n  z-index: 1; }\n  .tooltip-static .tooltip .tooltip-inner {\n    max-width: 100%; }\n  .popover-static .popover {\n  position: relative;\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  z-index: 1; }\n  .title-color-black {\n  color: #000000; }\n  .page-title {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 47px;\n  color: #000000; }\n  .page-sub-title {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #000000; }\n  .custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem; }\n  .custom-day.focused {\n  background-color: #e6e6e6; }\n  .custom-day.range,\n.custom-day:hover {\n  background-color: #0275d8;\n  color: white; }\n  .custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5); }\n  i {\n  font-size: 24px !important; }\n  .add-button {\n  color: #fff;\n  background-color: #D42948;\n  border-color: #D42948; }\n  .button-font {\n  font-weight: 300;\n  font-size: 24px; }\n  .column-title-font {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 21px;\n  color: #555555; }\n  .border-collapse-inherit {\n  border-collapse: inherit !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ybGFuZG8vRGVzYXJyb2xsby9TT0xERVYvc2hvcGlmeS9jYXJyaWVyLXNlcnZpY2UtZnJvbnQvc3JjL2FwcC9zaG9waWZ5LWFwcC9tb2R1bGVzL29yZGVycy9jb21wb25lbnRzL29yZGVycy10YWJsZS9vcmRlcnMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFVBQVU7RUFDVixVQUFVLEVBQUE7RUFKZDtJQU9RLGVBQWUsRUFBQTtFQUl2QjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsU0FBUztFQUNULGVBQWU7RUFDZixVQUFVLEVBQUE7RUFFZDtFQUNJLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7RUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjLEVBQUE7RUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVyxFQUFBO0VBR2Y7RUFDSSx5QkFBeUIsRUFBQTtFQUc3Qjs7RUFFSSx5QkFBa0M7RUFDbEMsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksd0NBQXdDLEVBQUE7RUFHNUM7RUFDSSwwQkFBMEIsRUFBQTtFQUc5QjtFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7RUFHekI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBR2pCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBO0VBR2xCO0VBQ0ksbUNBQW1DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaG9waWZ5LWFwcC9tb2R1bGVzL29yZGVycy9jb21wb25lbnRzL29yZGVycy10YWJsZS9vcmRlcnMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcC1zdGF0aWMgLnRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAudG9vbHRpcC1pbm5lciB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5wb3BvdmVyLXN0YXRpYyAucG9wb3ZlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbn1cbi50aXRsZS1jb2xvci1ibGFjayB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5wYWdlLXN1Yi10aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuLmN1c3RvbS1kYXkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWRheS5mYWRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuaSB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDQyOTQ4O1xuICAgIGJvcmRlci1jb2xvcjogI0Q0Mjk0ODtcbn1cblxuLmJ1dHRvbi1mb250IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uY29sdW1uLXRpdGxlLWZvbnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBjb2xvcjogIzU1NTU1NTtcbn1cblxuLmJvcmRlci1jb2xsYXBzZS1pbmhlcml0IHtcbiAgICBib3JkZXItY29sbGFwc2U6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/shopify-app/modules/orders/components/orders-table/orders-table.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shopify-app/modules/orders/components/orders-table/orders-table.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OrdersTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersTableComponent", function() { return OrdersTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _uiowa_date_range_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uiowa/date-range-picker */ "./node_modules/@uiowa/date-range-picker/fesm5/uiowa-date-range-picker.js");
/* harmony import */ var app_confirm_dialog_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/confirm-dialog/services/confirm-dialog.service */ "./src/app/confirm-dialog/services/confirm-dialog.service.ts");
/* harmony import */ var app_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/orders.service */ "./src/app/shopify-app/modules/orders/services/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var errorKey = 'Error';
var OrdersTableComponent = /** @class */ (function () {
    function OrdersTableComponent(confirmDialogService, ordersService, errorHandlingService, translate, router, activatedRoute, toastr) {
        this.confirmDialogService = confirmDialogService;
        this.ordersService = ordersService;
        this.errorHandlingService = errorHandlingService;
        this.translate = translate;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.dateRange = new _uiowa_date_range_picker__WEBPACK_IMPORTED_MODULE_4__["DateRange"](new Date(''), new Date(''));
        this.sizeList = [];
        this.sectorList = [];
    }
    OrdersTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getStaticOrders();
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500))
            .subscribe(function (change) { return _this.onFilter(); });
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    };
    OrdersTableComponent.prototype.getStaticOrders = function () {
        var _this = this;
        this.ordersService.getStaticOrders().subscribe(function (res) {
            _this.ordersList = res;
            console.log(_this.ordersList);
        }, function (err) { return console.log(err); }, function () { return _this.ordersList; });
    };
    OrdersTableComponent.prototype.ngAfterViewInit = function () {
        // this.loadPage();
    };
    OrdersTableComponent.prototype.ngOnDestroy = function () {
        this.filterValueChanges.unsubscribe();
    };
    OrdersTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['rangeDate'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['name'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['size'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['sector'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    OrdersTableComponent.prototype.loadPage = function () {
        this.getOrders();
    };
    OrdersTableComponent.prototype.getOrders = function () {
        var _this = this;
        this.ordersService.getOrders(Object.assign({}, this.filter.value))
            .subscribe(function (response) {
            _this.orders = response;
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    OrdersTableComponent.prototype.onFilter = function () {
        this.loadPage();
    };
    OrdersTableComponent.prototype.onSort = function () {
        this.loadPage();
    };
    OrdersTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    OrdersTableComponent.prototype.onDetails = function (index) {
        // const id = this.companies[index].id;
        // this.router.navigate(['/company/details', id]);
    };
    OrdersTableComponent.prototype.onEdit = function (index) {
        // const id = this.companies[index].id;
        // this.router.navigate(['/company/edit', id]);
    };
    // onDelete(index: number) {
    // 	const id = this.companies[index].id;
    // 	this.companyService.deleteCompany(id).subscribe(response => {
    // 		this.translate.get('DELETE_MESSAGE').subscribe((res: string) => {
    // 			this.toastr.success(res);
    // 		});
    // 		this.loadPage();
    // 	});
    // }
    OrdersTableComponent.prototype.deleteCompany = function (index) {
        // const id = this.companies[index].id;
        // this.companyService.deleteCompany(id).subscribe(response => {
        // 	this.translate.get('DELETE_MESSAGE').subscribe((res: string) => {
        // 		this.toastr.success(res);
        // 	});
        // 	this.loadPage();
        // }, (error: HandledError) => {
        // 	this.errorHandlingService.handleUiError(errorKey, error, 'regions');
        // });
    };
    OrdersTableComponent.prototype.onDelete = function (index) {
        var _this = this;
        var confirm;
        var message;
        this.translate.get('CONFIRM_TEXT').subscribe(function (res) {
            confirm = res;
        });
        this.translate.get('CONFIRM_DELETE_COMPANY_MESSAGE').subscribe(function (res) {
            message = res;
        });
        this.confirmDialogService.confirm(confirm, message)
            .then(function (confirmed) {
            if (confirmed) {
                _this.deleteCompany(index);
            }
        })
            .catch(function () {
            console.log('User dismissed the dialog');
        });
    };
    OrdersTableComponent.prototype.clearDate = function () {
        this.dateRange = new _uiowa_date_range_picker__WEBPACK_IMPORTED_MODULE_4__["DateRange"](new Date(''), new Date(''));
        this.filter.value.rangeDate = false;
        this.loadPage();
    };
    OrdersTableComponent.prototype.filterDate = function () {
        if (this.dateRange.end.toDateString() !== 'Invalid Date') {
            this.filter.value.rangeDate = this.dateRange;
            this.loadPage();
        }
    };
    OrdersTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders-table',
            template: __webpack_require__(/*! ./orders-table.component.html */ "./src/app/shopify-app/modules/orders/components/orders-table/orders-table.component.html"),
            styles: [__webpack_require__(/*! ./orders-table.component.scss */ "./src/app/shopify-app/modules/orders/components/orders-table/orders-table.component.scss")]
        }),
        __metadata("design:paramtypes", [app_confirm_dialog_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"],
            _services_orders_service__WEBPACK_IMPORTED_MODULE_9__["OrdersService"],
            app_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], OrdersTableComponent);
    return OrdersTableComponent;
}());



/***/ }),

/***/ "./src/app/shopify-app/modules/orders/orders-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shopify-app/modules/orders/orders-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var app_routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/routing/services/id-resolve.service */ "./src/app/routing/services/id-resolve.service.ts");
/* harmony import */ var _components_orders_details_orders_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/orders-details/orders-details.component */ "./src/app/shopify-app/modules/orders/components/orders-details/orders-details.component.ts");
/* harmony import */ var _components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/orders-table/orders-table.component */ "./src/app/shopify-app/modules/orders/components/orders-table/orders-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full',
    },
    {
        path: 'orders',
        component: _components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_5__["OrdersTableComponent"],
        resolve: {
            config: app_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"],
        },
    },
    {
        path: 'details/:id',
        component: _components_orders_details_orders_details_component__WEBPACK_IMPORTED_MODULE_4__["OrdersDetailsComponent"],
        resolve: {
            config: app_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"],
            pedidoId: app_routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_3__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../'] }
    },
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/shopify-app/modules/orders/orders.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shopify-app/modules/orders/orders.module.ts ***!
  \*************************************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _uiowa_date_range_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uiowa/date-range-picker */ "./node_modules/@uiowa/date-range-picker/fesm5/uiowa-date-range-picker.js");
/* harmony import */ var ng2_archwizard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-archwizard */ "./node_modules/ng2-archwizard/index.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _components_orders_details_orders_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/orders-details/orders-details.component */ "./src/app/shopify-app/modules/orders/components/orders-details/orders-details.component.ts");
/* harmony import */ var _components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/orders-table/orders-table.component */ "./src/app/shopify-app/modules/orders/components/orders-table/orders-table.component.ts");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/shopify-app/modules/orders/orders-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _orders_routing_module__WEBPACK_IMPORTED_MODULE_11__["OrdersRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerModule"],
                ng2_archwizard__WEBPACK_IMPORTED_MODULE_7__["ArchwizardModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                _uiowa_date_range_picker__WEBPACK_IMPORTED_MODULE_6__["DateRangePickerModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            ],
            declarations: [
                _components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_10__["OrdersTableComponent"],
                _components_orders_details_orders_details_component__WEBPACK_IMPORTED_MODULE_9__["OrdersDetailsComponent"],
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ }),

/***/ "./src/app/shopify-app/modules/orders/services/orders.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shopify-app/modules/orders/services/orders.service.ts ***!
  \***********************************************************************/
/*! exports provided: ASCENDING, OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling-http.service */ "./src/app/error-handling/services/error-handling-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//


var ASCENDING = 'asc';
var OrdersService = /** @class */ (function () {
    // public companyList = new BehaviorSubject<Company[]>();
    function OrdersService(configService, http) {
        this.configService = configService;
        this.http = http;
        // this.apiEndpoint = this.configService.config.apiUrl + this.configService.config.apiConfigs.company.apiEndpoint;
    }
    OrdersService.prototype.getOrders = function (filter) {
        var queryParams = this.formatQueryParams(filter);
        return this.http.get(this.apiEndpoint + queryParams);
    };
    OrdersService.prototype.getOrder = function (id) {
        return this.http.get(this.apiEndpoint + id);
    };
    OrdersService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (filter.name) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "name=" + filter.name;
        }
        if (filter.size && filter.size !== '') {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "companySizeId=" + filter.size;
        }
        if (filter.sector && filter.sector !== '') {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "activitySectorId=" + filter.sector;
        }
        if (filter.rangeDate) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "startDate=" + new Date(filter.rangeDate.start).toISOString() + '&';
            queryParams += "endDate=" + new Date(filter.rangeDate.end).toISOString();
        }
        return queryParams;
    };
    OrdersService.prototype.getStaticOrders = function () {
        return this.http.get('assets/data/orders.json').map(function (response) { return response; });
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlingHttpService"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-orders-orders-module.js.map