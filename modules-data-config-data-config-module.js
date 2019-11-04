(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-data-config-data-config-module"],{

/***/ "./src/app/shopify-app/modules/data-config/components/data-config/data-config.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/shopify-app/modules/data-config/components/data-config/data-config.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"company-details\">\n  <div class=\"padding-top-25px padding-bottom-60px\">\n    <div class=\"padding-header-data\">\n      <div class=\"display-flex flex-wrap\">\n        <div class=\"width-title\">\n          <div class=\"d-flex align-items-start flex-column\">\n            <div class=\"page-title color-black\">{{'COMPANY_DETAILS'|translate}}</div>\n            <div class=\"font-size-24px color-black font-weight-300\">{{'HISTORY_ACTIONS'|translate}}</div>\n          </div>\n        </div>\n        <span class=\"flex-grow-1\"></span>\n        <div class=\"width-button\">\n          <div class=\"d-flex flex-column\">\n            <button type=\"button\" type=\"button\" data-toggle=\"tooltip\" data-placement=\"top\"\n              title=\"{{'VIEW_RESULTS'|translate}}\" class=\"btn btn-company border-radius-0px button-font min-height-50px\"\n              (click)=\"onEditCompany()\">\n              {{'EDIT_COMPANY'|translate}}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"chk-block mb-0 border-box padding-left-20px padding-right-20px\">\n    <div class=\"row custom-header\">\n      <div class=\"col-xl-6 col-lg-6 col-md-6\">\n        {{'COMPANY_CONTACT'|translate}}\n      </div>\n\n      <div class=\"col-xl-6 col-lg-6 col-md-6\">\n        {{'COMPANY_PROFILE'|translate}}\n      </div>\n    </div>\n    <hr>\n    <div class=\"chk-block-content font-size-18px font-color-custom row\" *ngIf=\"company\">\n      <div class=\"col-xl-4 col-lg-4 col-md-4\">\n        <div class=\"font-weight-bold\">\n          {{'COMPANY_NAME'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.name}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-phone mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"text-icon-color\">\n            {{company.phone}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-at mr-1 mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"text-icon-color\">\n            {{company.email}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'ADDRESS'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.address ? company.address : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"row padding-left-15px padding-top-28px\">\n          <div class=\"font-weight-bold\">\n            CP:\n            <span class=\"font-weight-normal\">\n              {{company.zip ? company.zip : 'N/A'}}\n            </span>\n          </div>\n          <span class=\"width-42px\"></span>\n          <div class=\"font-weight-bold\">\n            {{'CITY'|translate}}:\n            <span class=\"font-weight-normal\">\n              {{company.city ? company.city : 'N/A'}}\n            </span>\n          </div>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'SITE'|translate}}:\n          <span class=\"font-weight-normal link-color-font\">\n            {{company.site ? company.site : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-facebook-f mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"link-color-font\">\n            {{company.facebook ? company.facebook : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-linkedin mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"link-color-font\">\n            {{company.linkedin ? company.linkedin : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-twitter mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"link-color-font\">\n            {{company.twitter ? company.twitter : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"padding-top-28px padding-left-5px\">\n          <i class=\"fa fa-instagram mr-1 icons-font padding-right-23px\"></i>\n          <span class=\"link-color-font\">\n            {{company.instagram ? company.instagram : 'N/A'}}\n          </span>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-4\">\n        <div class=\"font-weight-bold\">\n          {{'CEO'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.ceo ? company.ceo : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'SECTOR'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.activitySector.sector}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'NAF'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.naf ? company.naf : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'SIRET'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.siretNumber ? company.siretNumber : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'COMPANY_TYPE'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{type.get(company.type)}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          CA (2018):\n          <span class=\"font-weight-normal\">\n            {{company.grossSales2018 ? company.grossSales2018 : 'N/A'}}\n          </span>\n          <i class=\"fa fa-eur mr-1 euro-icon-font \"></i>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          CA Internet (2018):\n          <span class=\"font-weight-normal\">\n            {{company.internetGrossSales ? company.grossSales2018 : 'N/A'}}\n          </span>\n          <i class=\"fa fa-eur mr-1 euro-icon-font \"></i>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          CA (2019):\n          <span class=\"font-weight-normal\">\n            {{company.grossSales2019 ? company.grossSales2019 : 'N/A'}}\n          </span>\n          <i class=\"fa fa-eur mr-1 euro-icon-font \"></i>\n        </div>\n      </div>\n\n      <div class=\"col-xl-4 col-lg-4 col-md-4\">\n        <div class=\"font-weight-bold\">\n          {{'PRECISION'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.precision ? company.precision : 'N/A'}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'COMPANY_SIZE'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.companySize.description}}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'CREATION_DATE_COMPANY'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{ company.companyCreation ? (company.companyCreation | date:'dd/MM/yyyy') : 'N/A' }}\n          </span>\n        </div>\n        <div class=\"font-weight-bold padding-top-28px\">\n          {{'CREATION_DATE_DIGIPILOTE'|translate}}:\n          <span class=\"font-weight-normal\">\n            {{company.createdAt ? (company.createdAt | date:'dd/MM/yyyy') : 'N/A'}}\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"sec-title padding-left-40px padding-top-60px padding-bottom-40px\">\n    <h3 class=\"text-capitalize title-details\">{{'HISTORY_EVALUATIONS'|translate}}</h3>\n  </div>\n\n  <app-instances-table [companyId]=\"companyId\"></app-instances-table>\n\n  <div class=\"sec-title padding-left-40px padding-top-54px padding-bottom-40px\" *ngIf=\"questionnaires\">\n    <h3 class=\"text-capitalize title-details \" *ngIf=\"questionnaires.length > 0\">\n      {{'QT_SUGGESTED'|translate}}</h3>\n  </div>\n\n\n  <div class=\"course-wrap background-color\" *ngIf=\"questionnaires\">\n    <div class=\"degree-wrap\" *ngIf=\"questionnaires.length > 0\">\n      <div class=\"courses-grid-slider\" dir=\"ltr\">\n        <div class=\"container\">\n          <div *ngIf=\"jsonResponse.courses && jsonResponse.courses.length>0\">\n            <ng-container *ngIf=\"getCoursesByType('trending').length>4 ; else noSlider\">\n              <div class=\"mx-n3\">\n                <ngx-slick-carousel [config]=\"trendingCourseSlideConfig\">\n                  <ng-container ngxSlickItem *ngFor=\"let questionnaire of questionnaires\">\n                    <div class=\"px-3 course-item padding-top-70px padding-bottom-70px\">\n                      <a [routerLinkActive]=\"'active'\" [routerLink]=\"['/instance/create', questionnaire.id]\"\n                        [queryParams]=\"{companyId: companyId}\" data-toggle=\"tooltip\" data-placement=\"right\"\n                        title=\"{{'CREATE_QI'|translate}}\">\n                        <div class=\"card template-card\">\n                          <div class=\"card-header template-header padding-left-28px\">\n                            <span class=\"template-title\">{{'TEMPLATE'|translate}}</span>\n                          </div>\n                          <div class=\"card-body padding-28px\">\n                            <div class=\"sec-content\">\n                              <div class=\"title-font\">\n                                Titre\n                              </div>\n                              <div class=\"data-font padding-top-10px\">\n                                {{questionnaire.name}}\n                              </div>\n                              <div class=\"title-font padding-top-25px\">\n                                Description\n                              </div>\n                              <div class=\"data-font padding-top-10px\">\n                                {{questionnaire.description}}\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </a>\n                    </div>\n                  </ng-container>\n                </ngx-slick-carousel>\n              </div>\n            </ng-container>\n            <ng-template #noSlider>\n              <div class=\"row\">\n                <ng-container *ngFor=\"let questionnaire of questionnaires\">\n                  <div class=\"col-12 col-md-3 grid-b-space course-item\">\n                    <a [routerLinkActive]=\"'active'\" [routerLink]=\"['/instance/create', questionnaire.id]\"\n                      [queryParams]=\"{companyId: companyId}\" data-toggle=\"tooltip\" data-placement=\"right\"\n                      title=\"{{'CREATE_QI'|translate}}\">\n                      <div class=\"card template-card\">\n                        <div class=\"card-header template-header padding-left-28px\">\n                          <span class=\"template-title\">{{'Template'|translate}}</span>\n                        </div>\n                        <div class=\"card-body padding-28px\">\n                          <div class=\"sec-content\">\n                            <div class=\"title-font\">\n                              {{'TITLE'|translate}}\n                            </div>\n                            <div class=\"data-font padding-top-10px\">\n                              {{questionnaire.name}}\n                            </div>\n                            <div class=\"title-font padding-top-25px\">\n                              {{'DESCRIPTION'|translate}}\n                            </div>\n                            <div class=\"data-font padding-top-10px\">\n                              {{questionnaire.description}}\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                </ng-container>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n<div class=\"\">\n  <div class=\"\">wefcewfewf</div>\n  <span class=\"\"></span>\n  <div class=\"\">qwefqwefwfq</div>\n</div>"

/***/ }),

/***/ "./src/app/shopify-app/modules/data-config/components/data-config/data-config.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/shopify-app/modules/data-config/components/data-config/data-config.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".min-height-50px {\n  min-height: 50px !important;\n  max-width: 260px !important; }\n\n.button-font {\n  font-weight: 300;\n  font-size: 24px; }\n\n@media screen and (max-width: 899px) {\n  .width-span {\n    display: none; }\n  .padding-header-data {\n    padding: 0px 0px 0px; }\n  .company-details {\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  .button-font {\n    font-weight: 300;\n    font-size: 20px; }\n  .page-title {\n    font-weight: 300;\n    font-size: 36px;\n    line-height: 47px; } }\n\n@media screen and (min-width: 900px) {\n  .width-span {\n    -webkit-box-flex: 1;\n            flex-grow: 1; }\n  .padding-header-data {\n    padding: 0px 45px 0px; }\n  .width-title {\n    width: 65%; }\n  .width-button {\n    width: 35%; }\n  .company-details {\n    padding-left: 30px !important;\n    padding-right: 50px !important; }\n  .button-font {\n    font-weight: 300;\n    font-size: 24px; }\n  .page-title {\n    font-weight: 300;\n    font-size: 40px;\n    line-height: 47px; } }\n\n.font-size-24px {\n  font-size: 24px; }\n\n.font-size-20px {\n  font-size: 20px; }\n\n.font-size-18px {\n  font-size: 18px; }\n\n.padding-bottom-60px {\n  padding-bottom: 60px; }\n\n.width-356px {\n  width: 356px; }\n\n.custom-header {\n  padding: 23px 44px 7px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #D42948; }\n\n.font-color-custom {\n  color: #3B453A; }\n\n.icons-font {\n  font-size: 20px;\n  color: #3B453A;\n  font-weight: bold; }\n\n.euro-icon-font {\n  font-size: 18px !important;\n  color: #3B453A;\n  font-weight: normal; }\n\n.text-icon-color {\n  color: #221F1F; }\n\n.width-42px {\n  width: 42px; }\n\n.padding-right-23px {\n  padding-right: 23px; }\n\n.padding-top-54px {\n  padding-top: 54px; }\n\n.padding-top-74px {\n  padding-top: 74px; }\n\n.padding-bottom-51px {\n  padding-bottom: 51px; }\n\n.padding-bottom-62px {\n  padding-bottom: 62px; }\n\n.link-color-font {\n  color: #1862c6; }\n\n.padding-top-28px {\n  padding-top: 28px; }\n\n.background-color {\n  background: rgba(229, 229, 229, 0.44); }\n\n.padding-top-70px {\n  padding-top: 70px; }\n\n.padding-bottom-70px {\n  padding-bottom: 70px; }\n\n.in-icons-font {\n  font-size: 24px;\n  color: #3B453A;\n  font-weight: bold; }\n\n.border-radius-0px {\n  border-radius: 0px !important; }\n\n.btn-company {\n  color: #fff;\n  background-color: #D42948;\n  border-color: #D42948; }\n\n.padding-top-60px {\n  padding-top: 60px !important; }\n\n.padding-bottom-60px {\n  padding-bottom: 60px !important; }\n\n.title-details {\n  font-weight: 300;\n  font-size: 24px;\n  color: #000000; }\n\n.color-black {\n  color: #000000; }\n\n.template-card {\n  background: #FFFFFF;\n  border: 1px solid #D2CFCF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  height: 322px; }\n\n.template-header {\n  background: #1862c6; }\n\n.template-title {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 21px;\n  color: #FFFFFF; }\n\n.title-font {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 21px;\n  color: #3B453A; }\n\n.data-font {\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #3B453A; }\n\n.padding-28px {\n  padding: 28px; }\n\n.padding-left-28px {\n  padding-left: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29ybGFuZG8vRGVzYXJyb2xsby9TT0xERVYvc2hvcGlmeS9jYXJyaWVyLXNlcnZpY2UtZnJvbnQvc3JjL2FwcC9zaG9waWZ5LWFwcC9tb2R1bGVzL2RhdGEtY29uZmlnL2NvbXBvbmVudHMvZGF0YS1jb25maWcvZGF0YS1jb25maWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkI7RUFDM0IsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSTtJQUNJLGFBQWEsRUFBQTtFQUdqQjtJQUNJLG9CQUFvQixFQUFBO0VBR3hCO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QixFQUFBO0VBR2pDO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtFQUduQjtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUEsRUFDcEI7O0FBR0w7RUFDSTtJQUNJLG1CQUFZO1lBQVosWUFBWSxFQUFBO0VBR2hCO0lBQ0kscUJBQXFCLEVBQUE7RUFHekI7SUFDSSxVQUFVLEVBQUE7RUFHZDtJQUNJLFVBQVUsRUFBQTtFQUdkO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QixFQUFBO0VBR2xDO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtFQUduQjtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUEsRUFDcEI7O0FBR0w7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFLbkI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxZQUFZLEVBQUE7O0FBSWhCO0VBQ0ksc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxxQ0FBcUMsRUFBQTs7QUFHekM7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUtyQjtFQUNJLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBdUJ6QjtFQUNJLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLCtCQUErQixFQUFBOztBQUVuQztFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QiwyQ0FBMkM7RUFDM0MsYUFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nob3BpZnktYXBwL21vZHVsZXMvZGF0YS1jb25maWcvY29tcG9uZW50cy9kYXRhLWNvbmZpZy9kYXRhLWNvbmZpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW4taGVpZ2h0LTUwcHgge1xuICAgIG1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tZm9udCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XG4gICAgLndpZHRoLXNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5wYWRkaW5nLWhlYWRlci1kYXRhIHtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHg7XG4gICAgfVxuXG4gICAgLmNvbXBhbnktZGV0YWlsc3tcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1mb250IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDdweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgLndpZHRoLXNwYW4ge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuXG4gICAgLnBhZGRpbmctaGVhZGVyLWRhdGEge1xuICAgICAgICBwYWRkaW5nOiAwcHggNDVweCAwcHg7XG4gICAgfVxuXG4gICAgLndpZHRoLXRpdGxlIHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICB9XG5cbiAgICAud2lkdGgtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICB9XG5cbiAgICAuY29tcGFueS1kZXRhaWxze1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5idXR0b24tZm9udCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAucGFnZS10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gICAgfVxufVxuXG4uZm9udC1zaXplLTI0cHgge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmZvbnQtc2l6ZS0yMHB4IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb250LXNpemUtMThweCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5cblxuLnBhZGRpbmctYm90dG9tLTYwcHgge1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4ud2lkdGgtMzU2cHgge1xuICAgIHdpZHRoOiAzNTZweDtcbn1cblxuXG4uY3VzdG9tLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjNweCA0NHB4IDdweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNENDI5NDg7XG59XG5cbi5mb250LWNvbG9yLWN1c3RvbSB7XG4gICAgY29sb3I6ICMzQjQ1M0E7XG59XG5cbi5pY29ucy1mb250IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMzQjQ1M0E7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ldXJvLWljb24tZm9udCB7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzQjQ1M0E7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRleHQtaWNvbi1jb2xvciB7XG4gICAgY29sb3I6ICMyMjFGMUY7XG59XG5cbi53aWR0aC00MnB4IHtcbiAgICB3aWR0aDogNDJweDtcbn1cblxuLnBhZGRpbmctcmlnaHQtMjNweCB7XG4gICAgcGFkZGluZy1yaWdodDogMjNweDtcbn1cblxuLnBhZGRpbmctdG9wLTU0cHgge1xuICAgIHBhZGRpbmctdG9wOiA1NHB4O1xufVxuXG4ucGFkZGluZy10b3AtNzRweCB7XG4gICAgcGFkZGluZy10b3A6IDc0cHg7XG59XG5cbi5wYWRkaW5nLWJvdHRvbS01MXB4IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTFweDtcbn1cblxuLnBhZGRpbmctYm90dG9tLTYycHgge1xuICAgIHBhZGRpbmctYm90dG9tOiA2MnB4O1xufVxuXG4ubGluay1jb2xvci1mb250IHtcbiAgICBjb2xvcjogIzE4NjJjNjtcbn1cblxuLnBhZGRpbmctdG9wLTI4cHgge1xuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuXG4uYmFja2dyb3VuZC1jb2xvciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjksIDIyOSwgMjI5LCAwLjQ0KTtcbn1cblxuLnBhZGRpbmctdG9wLTcwcHgge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuXG4ucGFkZGluZy1ib3R0b20tNzBweCB7XG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5cbi5pbi1pY29ucy1mb250IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMzQjQ1M0E7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuXG4uYm9yZGVyLXJhZGl1cy0wcHh7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tY29tcGFueSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q0Mjk0ODtcbiAgICBib3JkZXItY29sb3I6ICNENDI5NDg7XG59XG5cbi8vIDo6bmctZGVlcCBkYXRhdGFibGUtaGVhZGVyLWNlbGx7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIDo6bmctZGVlcCBkYXRhdGFibGUtYm9keS1jZWxse1xuLy8gICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyA6Om5nLWRlZXAgLnBhZ2UtY291bnR7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxse1xuLy8gICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gIWltcG9ydGFudDtcbi8vICAgICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbi8vICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyMXB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi5wYWRkaW5nLXRvcC02MHB4e1xuICAgIHBhZGRpbmctdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRkaW5nLWJvdHRvbS02MHB4e1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4ICFpbXBvcnRhbnQ7XG59XG4udGl0bGUtZGV0YWlscyB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jb2xvci1ibGFjayB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZW1wbGF0ZS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkNGQ0Y7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyBcbiAgICBoZWlnaHQ6IDMyMnB4OyAgIFxufVxuXG4udGVtcGxhdGUtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTg2MmM2O1xufVxuXG4udGVtcGxhdGUtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnRpdGxlLWZvbnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBjb2xvcjogIzNCNDUzQTtcbn1cblxuLmRhdGEtZm9udCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgY29sb3I6ICMzQjQ1M0E7XG59XG5cbi5wYWRkaW5nLTI4cHgge1xuICAgIHBhZGRpbmc6IDI4cHg7XG59XG5cbi5wYWRkaW5nLWxlZnQtMjhweCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4OyAgICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shopify-app/modules/data-config/components/data-config/data-config.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/shopify-app/modules/data-config/components/data-config/data-config.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DataConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConfigComponent", function() { return DataConfigComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var app_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _services_data_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/data-config.service */ "./src/app/shopify-app/modules/data-config/services/data-config.service.ts");
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
var DataConfigComponent = /** @class */ (function () {
    function DataConfigComponent(pageTitleService, activatedRoute, translate, router, errorHandlingService, dataConfigService, http) {
        this.pageTitleService = pageTitleService;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.router = router;
        this.errorHandlingService = errorHandlingService;
        this.dataConfigService = dataConfigService;
        this.http = http;
    }
    DataConfigComponent.prototype.ngOnInit = function () {
    };
    DataConfigComponent.prototype.onEditPedido = function () {
        // this.router.navigate(['/company/edit', this.companyId]);
    };
    DataConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-config',
            template: __webpack_require__(/*! ./data-config.component.html */ "./src/app/shopify-app/modules/data-config/components/data-config/data-config.component.html"),
            styles: [__webpack_require__(/*! ./data-config.component.scss */ "./src/app/shopify-app/modules/data-config/components/data-config/data-config.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_6__["PageTitleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _services_data_config_service__WEBPACK_IMPORTED_MODULE_7__["DataConfigService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataConfigComponent);
    return DataConfigComponent;
}());



/***/ }),

/***/ "./src/app/shopify-app/modules/data-config/data-config-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shopify-app/modules/data-config/data-config-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DataConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConfigRoutingModule", function() { return DataConfigRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _components_data_config_data_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/data-config/data-config.component */ "./src/app/shopify-app/modules/data-config/components/data-config/data-config.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    // {
    //   path: '',
    //   redirectTo: 'config',
    //   pathMatch: 'full',
    // },
    {
        path: '',
        component: _components_data_config_data_config_component__WEBPACK_IMPORTED_MODULE_3__["DataConfigComponent"],
        resolve: {
            config: app_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"],
        },
    }
];
var DataConfigRoutingModule = /** @class */ (function () {
    function DataConfigRoutingModule() {
    }
    DataConfigRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DataConfigRoutingModule);
    return DataConfigRoutingModule;
}());



/***/ }),

/***/ "./src/app/shopify-app/modules/data-config/data-config.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shopify-app/modules/data-config/data-config.module.ts ***!
  \***********************************************************************/
/*! exports provided: DataConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConfigModule", function() { return DataConfigModule; });
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
/* harmony import */ var _data_config_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-config-routing.module */ "./src/app/shopify-app/modules/data-config/data-config-routing.module.ts");
/* harmony import */ var _components_data_config_data_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/data-config/data-config.component */ "./src/app/shopify-app/modules/data-config/components/data-config/data-config.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DataConfigModule = /** @class */ (function () {
    function DataConfigModule() {
    }
    DataConfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _data_config_routing_module__WEBPACK_IMPORTED_MODULE_9__["DataConfigRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerModule"],
                ng2_archwizard__WEBPACK_IMPORTED_MODULE_7__["ArchwizardModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                _uiowa_date_range_picker__WEBPACK_IMPORTED_MODULE_6__["DateRangePickerModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            ],
            declarations: [
                _components_data_config_data_config_component__WEBPACK_IMPORTED_MODULE_10__["DataConfigComponent"],
            ]
        })
    ], DataConfigModule);
    return DataConfigModule;
}());



/***/ }),

/***/ "./src/app/shopify-app/modules/data-config/services/data-config.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shopify-app/modules/data-config/services/data-config.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ASCENDING, DataConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConfigService", function() { return DataConfigService; });
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
var DataConfigService = /** @class */ (function () {
    // public companyList = new BehaviorSubject<Company[]>();
    function DataConfigService(configService, http) {
        this.configService = configService;
        this.http = http;
        // this.apiEndpoint = this.configService.config.apiUrl + this.configService.config.apiConfigs.company.apiEndpoint;
    }
    DataConfigService.prototype.getOrders = function (filter) {
        var queryParams = this.formatQueryParams(filter);
        return this.http.get(this.apiEndpoint + queryParams);
    };
    DataConfigService.prototype.getOrder = function (id) {
        return this.http.get(this.apiEndpoint + id);
    };
    DataConfigService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    DataConfigService.prototype.getStaticOrders = function () {
        return this.http.get('assets/data/orders.json').map(function (response) { return response; });
    };
    DataConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlingHttpService"]])
    ], DataConfigService);
    return DataConfigService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-data-config-data-config-module.js.map