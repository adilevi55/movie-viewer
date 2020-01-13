(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home-category-telmplate/home-category-telmplate.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home-category-telmplate/home-category-telmplate.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <a routerLink=\"/movie-list/category/{{categoryUrlName}}/1\">\n        {{categoryName}}\n    </a>\n    <mv-movie-list-layout \n    [movies]=movies\n    [notNeedPager]=\"true\"\n    [notNeedVoteData]=\"true\"\n    >\n\n    </mv-movie-list-layout>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home-layout/home-layout.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home-layout/home-layout.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"{'background-image': 'linear-gradient(rgba(52,41,49,0.80),\n rgba(0,0,0,0.85)),\n url(../../../assets/images/home-details-background.jpg)'}\">\n\n    <h1>WELCOME TO MOVIE VIEWER</h1>\n    <p>\n        On this site you can see details about movies and actors.<br>\n        You can search for a movie by its name or part of its name.<br>\n        You can see movie lists by category or genre.<br>\n        Clicking on the movie image or its name will bring you to a page with:<br>\n        details on The movie, recommended movies, the movie cast and watching the trailer by pressing a button.\n    </p>\n\n    <div class=\"categories-template-div\">\n        <mv-home-category-telmplate *ngFor='let c of categories' \n            [categoryUrlName]=\"c.categoryUrlName\"\n            [categoryName]=\"c.categoryName\"\n        >\n        </mv-home-category-telmplate>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/cast-movie/cast-movie.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/cast-movie/cast-movie.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"cast.length > 0; else noCastFound\"\r\n     fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n    \r\n     <div *ngFor='let c of cast' class=\"cast-div\"\r\n      fxFlex.lt-sm=\"40%\"\r\n      fxFlex.lt-md=\"0 1 calc(33.3% - 32px)\"\r\n      fxFlex.md=\"0 1 calc(25% - 32px)\"\r\n      fxFlex.lg=\"0 1 calc(20% - 32px)\"\r\n    >\r\n\r\n        <img routerLink=\"/person/{{c.id}}\" class=\"cast-img\" \r\n        src=\"https://image.tmdb.org/t/p/w300{{c.profile_path}}\"\r\n            onError=\"this.src='https://cdn.browshot.com/static/images/not-found.png'\">\r\n\r\n        <div class=\"cast-names\">\r\n            <a routerLink=\"/person/{{c.id}}\">{{c.name}}</a>\r\n            <p>{{c.character}}</p>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noCastFound>\r\n    <h1>The {{movieName}} movie has no cast</h1>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/get-movie-from-url/get-movie-from-url.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/get-movie-from-url/get-movie-from-url.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template [ngIf]=\"movieDetails\">\r\n        <mv-movie-layout [movieDetails]=\"movieDetails\"></mv-movie-layout>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-categories/movie-categories.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-categories/movie-categories.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template [ngIf]=\"category.length > 0\">\n    <div *ngFor=\"let c of category\">\n        <button mat-raised-button color=\"warn\"\n        routerLink=\"/movie-list/genre/{{c.name}}/{{c.id}}/1\">\n            {{c.name}}\n        </button>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-details/movie-details-img/movie-details-img.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-details/movie-details-img/movie-details-img.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img class=\"movie-img\" \n    src=\"https://image.tmdb.org/t/p/w300{{poster}}\"\n    onError=\"this.src='https://cdn.browshot.com/static/images/not-found.png'\" \n    width=\"100%\"\n>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"div-background\" \n    [ngStyle]=\"{'background-image': 'linear-gradient(rgba(52,41,49,0.80),\n     rgba(0,0,0,0.85)),\n    url('+'https://image.tmdb.org/t/p/w1280' + movieDetails.backdrop_path +')'}\" \n    fxLayoutAlign=\"center center\"\n    >\n   \n    <div class=\"div-layout-movie-details\" fxFlex=\"75%\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"center center\">\n       \n       <div class=\"div-centerd-movie-details\" fxFlex=\"60%\" >\n           <h1 class=\"title\">{{movieDetails.title}}</h1>\n           <p>Overview</p>\n           <p>{{movieDetails.overview}}</p>\n\n         <mv-movie-trailer-btn \n          [movieId]=\"movieDetails.id\" \n          [title]=\"movieDetails.title\"\n          ></mv-movie-trailer-btn>\n\n           <p>Categories</p>\n           <mv-movie-categories \n           [category]=\"movieDetails.genres\">\n          </mv-movie-categories>\n           \n           <div fxLayoutGap=\"0.7%\">\n            <mv-movie-time-date-vote \n            [movieDetails]=\"movieDetails\">\n          </mv-movie-time-date-vote>\n           </div>\n           \n       </div>\n\n<mv-movie-details-img fxFlex=\"40%\" fxFlexAlign=\"start\" \n[poster]=\"movieDetails.poster_path\">\n</mv-movie-details-img>\n   \n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"span-date\"><i class=\"material-icons\">\n        calendar_today\n    </i>{{movieDetails.release_date| date:'yyyy'}}</span>\n\n<span class=\"span-runtime\">\n    <i class=\"material-icons\">timer</i>\n    {{movieDetails.runtime}} minutes\n</span>\n\n<span class=\"span-vote\" \n[ngStyle]=\"movieDetails.vote_average < 6 ? {backgroundColor:'red'}:\nmovieDetails.vote_average > 8 ? {backgroundColor:'green'}:\nmovieDetails.vote_average < 8 && movieDetails.vote_average > 6  ?\n {color:'yellow'}:{color:''}\">\n{{movieDetails.vote_average}} \n<i class=\"material-icons\">\n        star\n    </i></span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-layout/movie-layout.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-layout/movie-layout.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mv-movie-details-layout [movieDetails]=\"movieDetails\"></mv-movie-details-layout>\n<mv-movie-navbar [movieDetails]=\"movieDetails\"></mv-movie-navbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-navbar/movie-navbar.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-navbar/movie-navbar.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group mat-align-tabs=\"center\" color=\"warn\" backgroundColor=\"warn\">\n    \n    <mat-tab class=\"movie-labels\" label=\"Recommendations Movies\">\n        <mv-recommendations-movies \n        [movieId]=\"movieDetails.id\" \n        [movieName]=\"movieDetails.title\">\n\n        </mv-recommendations-movies>\n    </mat-tab>\n\n    <mat-tab class=\"movie-labels\" label=\"Cast\">\n        <mv-cast-movie \n        [movieId]=\"movieDetails.id\" \n        [movieName]=\"movieDetails.title\"></mv-cast-movie>\n    </mat-tab>\n\n</mat-tab-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button *ngIf=\"movieHaveNoTrailer; else noTrailerFound\"\n mat-raised-button color=\"warn\" (click)=\"openDialog()\">\n    <i class=\"material-icons\">play_circle_filled</i>\n    Watch Trailer\n</button>\n\n<ng-template #noTrailerFound>\n    <button class=\"noTrailerFoundButton\" disabled mat-stroked-button color=\"warn\">\n        <i class=\"material-icons\">play_circle_filled</i>\n        {{title}} has no trailer\n    </button>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-trailer-dialog/movie-trailer-dialog-component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-trailer-dialog/movie-trailer-dialog-component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"trailerUrl\">\r\n    <iframe [src]=\"trailerUrl\" \r\n            width=\"100%\" height=\"99%\" frameborder=\"0\"\r\n            webkitallowfullscreen mozallowfullscreen allowfullscreen>\r\n    </iframe>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/recommendations-movies/recommendations-movies.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/recommendations-movies/recommendations-movies.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template [ngIf]=\"movieRecommendations.length > 0\" \r\n    [ngIfElse]=\"noRecommendationsFound\">\r\n\r\n    <mv-movie-list-layout [movies]=movieRecommendations [notNeedPager]=\"true\">\r\n    </mv-movie-list-layout>\r\n\r\n</ng-template>\r\n\r\n<ng-template #noRecommendationsFound>\r\n    <h1>The {{movieName}} movie has no recommended movies</h1>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movie-list-by-category/movie-list-by-category.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movie-list-by-category/movie-list-by-category.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mv-movie-list-layout \r\n[movies]=movies\r\n[currentPage]=\"currentPage\"\r\n[totalPages]=\"totalPages\"\r\n[categoryName]=\"categoryName\"\r\n[categoryForHttpReq]=\"categoryForHttpReq\"\r\n>\r\n</mv-movie-list-layout>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mv-movie-list-layout \r\n[movies]=movies\r\n[currentPage]=\"currentPage\"\r\n[totalPages]=\"totalPages\"\r\n[ganreName]=\"ganreName\"\r\n[ganreId]=\"ganreId\"\r\n>\r\n</mv-movie-list-layout>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person-details/person-details.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person-details/person-details.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div>\r\n        <h1>{{person.name}}</h1>\r\n        <img src=\"https://image.tmdb.org/t/p/w300{{person.profile_path}}\"\r\n        onError=\"this.src='https://cdn.browshot.com/static/images/not-found.png'\">\r\n\r\n        <p>{{person.birthday | date:\"mediumDate\"}}</p>\r\n\r\n        <p>biography\r\n            {{person.biography}}</p>\r\n    </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person-layout/person-layout.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person-layout/person-layout.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template  [ngIf]=\"person\">\n        <mv-person-details [person]=\"person\">\n        </mv-person-details>\n</ng-template>\n\n<ng-template  [ngIf]=\"movies\">\n        <mv-person-movies [movies]=\"movies\">\n        </mv-person-movies>\n</ng-template>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person-movies/person-movies.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person-movies/person-movies.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mv-movie-list-layout \r\n[movies]=movies\r\n[notNeedPager]=\"true\"\r\n>\r\n</mv-movie-list-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/app/app.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/app/app.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <header>\n      <mv-header-layout></mv-header-layout>\n    </header>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n    <footer>\n      <mv-footer></mv-footer>\n    </footer>\n  </section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/header/header-category-links/header-category-links.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/header/header-category-links/header-category-links.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a mat-tab-link routerLink=\"/home\">Home</a>\n\n<a fxShow.lt-md=\"false\" fxShow=\"true\" \n    mat-tab-link *ngFor=\"let link of navLinks\" [routerLink]=\"link.path\"\n    routerLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\">\n    {{link.label}}\n</a>\n\n<mv-menu-nav fxShow.lt-md=\"true\" fxShow=\"false\" \n            [navLinks]=\"navLinks\" [menuName]=\"navbarName\">\n</mv-menu-nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/header/header-gener-menu/header-gener-menu-list/header-gener-menu-list.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/header/header-gener-menu/header-gener-menu-list/header-gener-menu-list.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mv-menu-nav [navLinks]=\"navList\" [menuName]=\"navbarName\"></mv-menu-nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/header/header-layout/header-layout.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/header/header-layout/header-layout.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"pageNavbar\">\n        <nav mat-tab-nav-bar backgroundColor=\"warn\" color=\"warn\">\n\n            <mv-header-category-links></mv-header-category-links>\n            <mv-header-gener-menu-list></mv-header-gener-menu-list>\n            <mv-input-search-movie ></mv-input-search-movie>\n            \n        </nav>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/page-not-found404/page-not-found404.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/page-not-found404/page-not-found404.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n        <img fxFlex.xs=\"90%\" src=\"../../../../assets/images/page-not-found.png\">  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-movies/get-input-value/get-input-value.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-movies/get-input-value/get-input-value.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template [ngIf]=\"movies\" >\n    \n<mv-search-movies-layout\n[currentPage]=\"currentPage\"\n[totalPages]=\"totalPages\"\n[search]=\"search\"\n[movies]=\"movies\"\n></mv-search-movies-layout>\n\n</ng-template>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-movies/input-search-movie/input-search-movie.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-movies/input-search-movie/input-search-movie.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #formInfo=\"ngForm\">\r\n\r\n  <mat-form-field color=\"warn\">\r\n    <input matInput class=\"input-field\" required \r\n    #searchInfo=\"ngModel\" [(ngModel)]=\"search\" name=\"search\" \r\n    type=\"text\"  placeholder=\"Search Movie\">\r\n\r\n  <mat-error *ngIf=\"searchInfo.errors?.required && searchInfo.touched\">\r\n      Missing Search</mat-error>\r\n      \r\n  </mat-form-field>\r\n\r\n  <div>\r\n    <button mat-raised-button color=\"warn\" \r\n    [disabled]=\"formInfo.form.invalid\" (click)=\"getMoviesByInput()\">\r\n      Search\r\n    </button>\r\n  </div>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-movies/search-movies-layout/search-movies-layout.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-movies/search-movies-layout/search-movies-layout.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mv-movie-list-layout \n[movies]=\"movies\"\n[currentPage]=\"currentPage\"\n[totalPages]=\"totalPages\"\n[search]=\"search\"\n>\n</mv-movie-list-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/menu-nav/menu-nav.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/menu-nav/menu-nav.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a mat-tab-link routerLinkActive #rla=\"routerLinkActive\" \n[routerLink]=\"\" [matMenuTriggerFor]='menu'>\n{{menuName}}\n</a>\n\n<mat-menu #menu=\"matMenu\" class=\"Category-menu\">\n    <ng-container *ngFor=\"let link of navLinks\">\n        <button routerLink=\"{{link.path}}\" mat-menu-item class=\"menu-button-item\">\n            {{link.label}}\n        </button>\n    </ng-container>\n</mat-menu>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/movie-lists/movie-list-card/movie-list-card.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/movie-lists/movie-list-card/movie-list-card.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img routerLink=\"/movie/{{m.id}}\" \nonError=\"this.src='https://cdn.browshot.com/static/images/not-found.png'\"\n    src=\"https://image.tmdb.org/t/p/w300{{m.poster_path}}\" width=\"100%\">\n\n<p routerLink=\"/movie/{{m.id}}\">{{m.title}}</p>\n\n<div class=\"div-date-vote\" *ngIf=\"notNeedVoteData === undefined\">\n\n    <span>{{m.release_date|date:\"mediumDate\"}}</span>\n    <span class=\"span-vote\"\n        [ngStyle]=\"m.vote_average < 6 ? {backgroundColor:'red'}:m.vote_average > 8 ? {backgroundColor:'green'}:m.vote_average < 8 && m.vote_average > 6  ? {color:'yellow'}:{color:''}\">{{m.vote_average}}\n        <i class=\"material-icons\">star</i>\n    </span>\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 *ngIf=\"ganreName\">{{ganreName}}</h1>\n<h1 *ngIf=\"categoryName\">{{categoryName}}</h1>\n<h1 *ngIf=\"search\">Search</h1>\n\n<mv-pager *ngIf=\"notNeedPager === undefined\" \n        [currentPage]=\"currentPage\" [totalPages]=\"totalPages\"\n         [ganreName]=\"ganreName\" [ganreId]=\"ganreId\"\n          [categoryForHttpReq]=\"categoryForHttpReq\" [search]=\"search\">\n</mv-pager>\n\n<div>\n    <mv-movie-list-card *ngFor='let m of movies' \n    [m]=\"m\" [notNeedVoteData]=\"notNeedVoteData\">\n    </mv-movie-list-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/pager/pager.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/pager/pager.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\n\n    <div fxFlex.xs=\"100%\" fxFlex.sm=\"100%\" fxLayoutAlign=\"center\">\n       \n        <button mat-raised-button [disabled]=\"pagesArray[0] == 1\" (click)=\"get10PreviousPages()\">\n            <<</button> \n            <button mat-raised-button [disabled]=\"1 == currentPage || currentPage == pagesArray[0]\"\n                (click)=\"returnPage.loadPreviousPage.loadPreviousPageForListByGenderOrCategory(currentPage,ganreName,ganreId,categoryForHttpReq,search)\">\n                <</button> \n    </div> \n                <div *ngFor=\"let page of pagesArray; let i = index\">\n                    <button class=\"pagesButtons\" mat-button [disabled]=\"page == currentPage\"\n                        (click)=\"returnPage.loadSpecificPages.loadSpecificPageForListByGenderOrCategory(page,ganreName,ganreId,categoryForHttpReq,search)\">{{page}}</button>\n                </div>\n\n    <div fxFlex.xs=\"100%\" fxFlex.sm=\"100%\" fxLayoutAlign=\"center\">\n        \n        <button mat-raised-button [disabled]=\"totalPages == currentPage || currentPage == pagesArray[9]\"\n            (click)=\"returnPage.loadNextPage.loadNextPageForListByGenderOrCategory(currentPage,ganreName,ganreId,categoryForHttpReq,search)\">></button>\n        \n            <button mat-raised-button [disabled]=\"totalPages == currentPage || totalPages < pagesArray[0]+10\"\n            (click)=\"get10NextPages()\">>></button>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/components/home/home-category-telmplate/home-category-telmplate.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/home/home-category-telmplate/home-category-telmplate.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n    font-size: 150%;\r\n    font-weight: bold;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUtY2F0ZWdvcnktdGVsbXBsYXRlL2hvbWUtY2F0ZWdvcnktdGVsbXBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLWNhdGVnb3J5LXRlbG1wbGF0ZS9ob21lLWNhdGVnb3J5LXRlbG1wbGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home-category-telmplate/home-category-telmplate.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/home/home-category-telmplate/home-category-telmplate.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: HomeCategoryTelmplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCategoryTelmplateComponent", function() { return HomeCategoryTelmplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_request_http_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request/http-movies.service */ "./src/app/services/http-request/http-movies.service.ts");



let HomeCategoryTelmplateComponent = class HomeCategoryTelmplateComponent {
    constructor(httpMoviesService) {
        this.httpMoviesService = httpMoviesService;
    }
    ngOnInit() {
        this.httpMoviesService.getMoviesByCategories(this.categoryUrlName, 1)
            .subscribe(response => {
            this.movies = response.results.slice(-response.results.length, 4);
        });
    }
};
HomeCategoryTelmplateComponent.ctorParameters = () => [
    { type: src_app_services_http_request_http_movies_service__WEBPACK_IMPORTED_MODULE_2__["HttpMoviesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeCategoryTelmplateComponent.prototype, "categoryUrlName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeCategoryTelmplateComponent.prototype, "categoryName", void 0);
HomeCategoryTelmplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-home-category-telmplate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-category-telmplate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home-category-telmplate/home-category-telmplate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-category-telmplate.component.css */ "./src/app/components/home/home-category-telmplate/home-category-telmplate.component.css")).default]
    })
], HomeCategoryTelmplateComponent);



/***/ }),

/***/ "./src/app/components/home/home-layout/home-layout.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/home/home-layout/home-layout.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p{\r\n    text-align: center;\r\n}\r\nh1{\r\n    text-shadow:\r\n    0 1px 0px #b43737,1px 0 0px #cd5d5d,\r\n    1px 2px 1px #b43737,2px 1px 1px #cd5d5d,\r\n    2px 3px 2px #b43737,3px 2px 2px #cd5d5d,\r\n     3px 4px 2px #b43737, 4px 3px 3px #cd5d5d,\r\n      4px 5px 3px #b43737, 5px 4px 2px #cd5d5d,\r\n       5px 6px 2px #b43737, 6px 5px 2px #cd5d5d,\r\n        6px 7px 1px #b43737, 7px 6px 1px #cd5d5d,\r\n         7px 8px 0px #b43737, 8px 7px 0px #cd5d5d;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJOzs7Ozs7OztpREFRNkM7QUFDakQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDF7XHJcbiAgICB0ZXh0LXNoYWRvdzpcclxuICAgIDAgMXB4IDBweCAjYjQzNzM3LDFweCAwIDBweCAjY2Q1ZDVkLFxyXG4gICAgMXB4IDJweCAxcHggI2I0MzczNywycHggMXB4IDFweCAjY2Q1ZDVkLFxyXG4gICAgMnB4IDNweCAycHggI2I0MzczNywzcHggMnB4IDJweCAjY2Q1ZDVkLFxyXG4gICAgIDNweCA0cHggMnB4ICNiNDM3MzcsIDRweCAzcHggM3B4ICNjZDVkNWQsXHJcbiAgICAgIDRweCA1cHggM3B4ICNiNDM3MzcsIDVweCA0cHggMnB4ICNjZDVkNWQsXHJcbiAgICAgICA1cHggNnB4IDJweCAjYjQzNzM3LCA2cHggNXB4IDJweCAjY2Q1ZDVkLFxyXG4gICAgICAgIDZweCA3cHggMXB4ICNiNDM3MzcsIDdweCA2cHggMXB4ICNjZDVkNWQsXHJcbiAgICAgICAgIDdweCA4cHggMHB4ICNiNDM3MzcsIDhweCA3cHggMHB4ICNjZDVkNWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home-layout/home-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/home-layout/home-layout.component.ts ***!
  \**********************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeLayoutComponent = class HomeLayoutComponent {
    constructor() {
        this.categories = [
            {
                "categoryName": "Playing Now Movies",
                "categoryUrlName": "now_playing",
            },
            {
                "categoryName": "Upcoming Movies",
                "categoryUrlName": "upcoming",
            },
            {
                "categoryName": "Top Rated Movies",
                "categoryUrlName": "top_rated",
            }
        ];
    }
};
HomeLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-home-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home-layout/home-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-layout.component.css */ "./src/app/components/home/home-layout/home-layout.component.css")).default]
    })
], HomeLayoutComponent);



/***/ }),

/***/ "./src/app/components/movie/cast-movie/cast-movie.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/movie/cast-movie/cast-movie.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cast-img {\r\n    border-radius: 50%;\r\n    flex-shrink: 0;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border: #f44336 solid 2px;\r\n    width: 50%;\r\n    height: 50%;\r\n  }\r\n.cast-div{\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n      height:initial;\r\n  }\r\na{\r\n    color:#f44336;\r\n    text-decoration: none;\r\n   }\r\np{\r\n    margin: 0;\r\n }\r\n \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9jYXN0LW1vdmllL2Nhc3QtbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGO01BQ00sb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixjQUFjO0VBQ2xCO0FBQ0Y7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0dBQ3RCO0FBQ0g7SUFDSSxTQUFTO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllL2Nhc3QtbW92aWUvY2FzdC1tb3ZpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhc3QtaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXI6ICNmNDQzMzYgc29saWQgMnB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuLmNhc3QtZGl2e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6aW5pdGlhbDtcclxuICB9XHJcbmF7XHJcbiAgICBjb2xvcjojZjQ0MzM2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICB9XHJcbnB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiB9XHJcbiBcclxuIl19 */");

/***/ }),

/***/ "./src/app/components/movie/cast-movie/cast-movie.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie/cast-movie/cast-movie.component.ts ***!
  \*********************************************************************/
/*! exports provided: CastMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastMovieComponent", function() { return CastMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_request_http_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request/http-movie.service */ "./src/app/services/http-request/http-movie.service.ts");



let CastMovieComponent = class CastMovieComponent {
    constructor(httpMovieService) {
        this.httpMovieService = httpMovieService;
        this.cast = [];
    }
    ngOnInit() {
        this.httpMovieService.getMoviecredits(this.movieId).subscribe(credits => {
            this.cast = credits.cast;
        });
    }
};
CastMovieComponent.ctorParameters = () => [
    { type: src_app_services_http_request_http_movie_service__WEBPACK_IMPORTED_MODULE_2__["HttpMovieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CastMovieComponent.prototype, "movieId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CastMovieComponent.prototype, "movieName", void 0);
CastMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mv-cast-movie",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cast-movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/cast-movie/cast-movie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cast-movie.component.css */ "./src/app/components/movie/cast-movie/cast-movie.component.css")).default]
    })
], CastMovieComponent);



/***/ }),

/***/ "./src/app/components/movie/get-movie-from-url/get-movie-from-url.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/movie/get-movie-from-url/get-movie-from-url.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GetMovieFromUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMovieFromUrlComponent", function() { return GetMovieFromUrlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_http_request_http_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http-request/http-movie.service */ "./src/app/services/http-request/http-movie.service.ts");




let GetMovieFromUrlComponent = class GetMovieFromUrlComponent {
    constructor(route, httpMovieService) {
        this.route = route;
        this.httpMovieService = httpMovieService;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.httpMovieService.getMoviesDetailsById(params.id)
                .subscribe(movieDetails => {
                this.movieDetails = movieDetails;
            });
        });
    }
};
GetMovieFromUrlComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_http_request_http_movie_service__WEBPACK_IMPORTED_MODULE_3__["HttpMovieService"] }
];
GetMovieFromUrlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-get-movie-from-url',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-movie-from-url.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/get-movie-from-url/get-movie-from-url.component.html")).default,
    })
], GetMovieFromUrlComponent);



/***/ }),

/***/ "./src/app/components/movie/movie-categories/movie-categories.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/movie/movie-categories/movie-categories.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MovieCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCategoriesComponent", function() { return MovieCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieCategoriesComponent = class MovieCategoriesComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieCategoriesComponent.prototype, "category", void 0);
MovieCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-categories/movie-categories.component.html")).default,
    })
], MovieCategoriesComponent);



/***/ }),

/***/ "./src/app/components/movie/movie-details/movie-details-img/movie-details-img.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/movie/movie-details/movie-details-img/movie-details-img.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".movie-img{\r\n    margin-top:20%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMtaW1nL21vdmllLWRldGFpbHMtaW1nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMtaW1nL21vdmllLWRldGFpbHMtaW1nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtaW1ne1xyXG4gICAgbWFyZ2luLXRvcDoyMCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/movie/movie-details/movie-details-img/movie-details-img.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/movie/movie-details/movie-details-img/movie-details-img.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MovieDetailsImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsImgComponent", function() { return MovieDetailsImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieDetailsImgComponent = class MovieDetailsImgComponent {
    errorHandler(event) {
        event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieDetailsImgComponent.prototype, "poster", void 0);
MovieDetailsImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-details-img',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-details-img.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-details/movie-details-img/movie-details-img.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-details-img.component.css */ "./src/app/components/movie/movie-details/movie-details-img/movie-details-img.component.css")).default]
    })
], MovieDetailsImgComponent);



/***/ }),

/***/ "./src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-background{\r\n    background-size: cover;\r\n    background-position: center top;\r\n \r\n  }\r\n  .div-layout-movie-details{\r\n    margin-bottom:20px;\r\n  }\r\n  .title{\r\n  font-size: 3.5em;\r\n  font-weight: 700;\r\n   text-align: start;\r\n }\r\n  mv-movie-categories{\r\n     display: -webkit-box;\r\n     display: flex;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMtbGF5b3V0L21vdmllLWRldGFpbHMtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsK0JBQStCOztFQUVqQztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBRUQ7RUFDQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0dBQ2YsaUJBQWlCO0NBQ25CO0VBQ0E7S0FDSSxvQkFBYTtLQUFiLGFBQWE7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy1sYXlvdXQvbW92aWUtZGV0YWlscy1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gXHJcbiAgfVxyXG4gIC5kaXYtbGF5b3V0LW1vdmllLWRldGFpbHN7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgfVxyXG5cclxuIC50aXRsZXtcclxuICBmb250LXNpemU6IDMuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gfVxyXG4gbXYtbW92aWUtY2F0ZWdvcmllc3tcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MovieDetailsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsLayoutComponent", function() { return MovieDetailsLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieDetailsLayoutComponent = class MovieDetailsLayoutComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieDetailsLayoutComponent.prototype, "movieDetails", void 0);
MovieDetailsLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-details-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-details-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-details-layout.component.css */ "./src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component.css")).default]
    })
], MovieDetailsLayoutComponent);



/***/ }),

/***/ "./src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".span-vote{\r\n    background: #fc3;\r\n    padding:.2em .6em .3em;\r\n    border-radius: .25em;\r\n    font-weight:700;\r\n    color: #ffffff;  \r\n  }\r\n  .span-vote i {\r\n    position: relative;\r\n    top: 5px;\r\n   }\r\n  .span-runtime{\r\n     background: green;\r\n     padding:.2em .6em .3em;\r\n     border-radius: .25em;\r\n     font-weight:700;\r\n     color: #ffffff;  \r\n   }\r\n  .span-runtime i {\r\n     position: relative;\r\n     top: 5px;\r\n    }\r\n  .span-date{\r\n     background: rgb(165, 164, 164);\r\n     padding:.2em .6em .3em;\r\n     border-radius: .25em;\r\n     font-weight:700;\r\n     color: #ffffff;  \r\n   }\r\n  .span-date i {\r\n     position: relative;\r\n     top: 5px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS1kZXRhaWxzL21vdmllLXRpbWUtZGF0ZS12b3RlL21vdmllLXRpbWUtZGF0ZS12b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7R0FDVDtFQUNBO0tBQ0UsaUJBQWlCO0tBQ2pCLHNCQUFzQjtLQUN0QixvQkFBb0I7S0FDcEIsZUFBZTtLQUNmLGNBQWM7R0FDaEI7RUFDQTtLQUNFLGtCQUFrQjtLQUNsQixRQUFRO0lBQ1Q7RUFDRDtLQUNFLDhCQUE4QjtLQUM5QixzQkFBc0I7S0FDdEIsb0JBQW9CO0tBQ3BCLGVBQWU7S0FDZixjQUFjO0dBQ2hCO0VBQ0E7S0FDRSxrQkFBa0I7S0FDbEIsUUFBUTtJQUNUIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS1kZXRhaWxzL21vdmllLXRpbWUtZGF0ZS12b3RlL21vdmllLXRpbWUtZGF0ZS12b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bhbi12b3Rle1xyXG4gICAgYmFja2dyb3VuZDogI2ZjMztcclxuICAgIHBhZGRpbmc6LjJlbSAuNmVtIC4zZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmOyAgXHJcbiAgfVxyXG4gIC5zcGFuLXZvdGUgaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgfVxyXG4gICAuc3Bhbi1ydW50aW1le1xyXG4gICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgIHBhZGRpbmc6LjJlbSAuNmVtIC4zZW07XHJcbiAgICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XHJcbiAgICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgIGNvbG9yOiAjZmZmZmZmOyAgXHJcbiAgIH1cclxuICAgLnNwYW4tcnVudGltZSBpIHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgIC5zcGFuLWRhdGV7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiKDE2NSwgMTY0LCAxNjQpO1xyXG4gICAgIHBhZGRpbmc6LjJlbSAuNmVtIC4zZW07XHJcbiAgICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XHJcbiAgICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgIGNvbG9yOiAjZmZmZmZmOyAgXHJcbiAgIH1cclxuICAgLnNwYW4tZGF0ZSBpIHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgdG9wOiA1cHg7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MovieTimeDateVoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieTimeDateVoteComponent", function() { return MovieTimeDateVoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieTimeDateVoteComponent = class MovieTimeDateVoteComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieTimeDateVoteComponent.prototype, "movieDetails", void 0);
MovieTimeDateVoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-time-date-vote',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-time-date-vote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-time-date-vote.component.css */ "./src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component.css")).default]
    })
], MovieTimeDateVoteComponent);



/***/ }),

/***/ "./src/app/components/movie/movie-layout/movie-layout.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/movie/movie-layout/movie-layout.component.ts ***!
  \*************************************************************************/
/*! exports provided: MovieLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieLayoutComponent", function() { return MovieLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieLayoutComponent = class MovieLayoutComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieLayoutComponent.prototype, "movieDetails", void 0);
MovieLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-layout/movie-layout.component.html")).default,
    })
], MovieLayoutComponent);



/***/ }),

/***/ "./src/app/components/movie/movie-navbar/movie-navbar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/movie/movie-navbar/movie-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: MovieNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieNavbarComponent", function() { return MovieNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieNavbarComponent = class MovieNavbarComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieNavbarComponent.prototype, "movieDetails", void 0);
MovieNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-navbar/movie-navbar.component.html")).default,
    })
], MovieNavbarComponent);



/***/ }),

/***/ "./src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".noTrailerFoundButton{\r\n    background-color: #ffffff;  \r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS10cmFpbGVyLWJ0bi9tb3ZpZS10cmFpbGVyLWJ0bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0dBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS10cmFpbGVyLWJ0bi9tb3ZpZS10cmFpbGVyLWJ0bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vVHJhaWxlckZvdW5kQnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgIFxyXG4gICB9Il19 */");

/***/ }),

/***/ "./src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MovieTrailerBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieTrailerBtnComponent", function() { return MovieTrailerBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_http_request_http_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http-request/http-movie.service */ "./src/app/services/http-request/http-movie.service.ts");
/* harmony import */ var _movie_trailer_dialog_movie_trailer_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie-trailer-dialog/movie-trailer-dialog.component */ "./src/app/components/movie/movie-trailer-dialog/movie-trailer-dialog.component.ts");





let MovieTrailerBtnComponent = class MovieTrailerBtnComponent {
    constructor(httpMovieService, dialog) {
        this.httpMovieService = httpMovieService;
        this.dialog = dialog;
        this.movieHaveNoTrailer = true;
    }
    ngOnInit() {
        this.httpMovieService.getMovieTrailers(this.movieId)
            .subscribe(trailers => {
            if (trailers.results.length === 0) {
                this.movieHaveNoTrailer = false;
            }
            else {
                this.trailerUrl = trailers.results[0].key;
            }
        });
    }
    openDialog() {
        this.dialog.open(_movie_trailer_dialog_movie_trailer_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MovieTrailerDialogComponent"], {
            width: '80%', height: '600px',
            data: { trailerUrl: this.trailerUrl }
        });
    }
};
MovieTrailerBtnComponent.ctorParameters = () => [
    { type: src_app_services_http_request_http_movie_service__WEBPACK_IMPORTED_MODULE_3__["HttpMovieService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieTrailerBtnComponent.prototype, "movieId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieTrailerBtnComponent.prototype, "title", void 0);
MovieTrailerBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-trailer-btn',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-trailer-btn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-trailer-btn.component.css */ "./src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component.css")).default]
    })
], MovieTrailerBtnComponent);



/***/ }),

/***/ "./src/app/components/movie/movie-trailer-dialog/movie-trailer-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/movie/movie-trailer-dialog/movie-trailer-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MovieTrailerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieTrailerDialogComponent", function() { return MovieTrailerDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let MovieTrailerDialogComponent = class MovieTrailerDialogComponent {
    constructor(sanitizer, dialogRef, data) {
        this.sanitizer = sanitizer;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.trailerUrl = this.sanitizer
            .bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.data.trailerUrl);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
MovieTrailerDialogComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
MovieTrailerDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-trailer-dialog-component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie-trailer-dialog/movie-trailer-dialog-component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], MovieTrailerDialogComponent);



/***/ }),

/***/ "./src/app/components/movie/recommendations-movies/recommendations-movies.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/movie/recommendations-movies/recommendations-movies.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n .layout{\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  white-space: nowrap;\r\n\r\n }\r\n .card{\r\n  display: inline-block;\r\n\r\n }\r\n .div-date-vote{\r\n   display: -webkit-box;\r\n   display: flex;\r\n   -webkit-box-pack: justify;\r\n           justify-content: space-between;\r\n }\r\n .span-vote{\r\n   background: #fc3;\r\n   padding:.2em .6em .3em;\r\n   border-radius: .25em;\r\n   font-weight:700;\r\n   color: #ffffff;  \r\n }\r\n .span-vote i {\r\n  position: relative;\r\n  top: 5px;\r\n }\r\n .movie-img{\r\n   margin-top: 5%;\r\n }\r\n p{\r\n  color:#f44336;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9yZWNvbW1lbmRhdGlvbnMtbW92aWVzL3JlY29tbWVuZGF0aW9ucy1tb3ZpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0M7RUFDQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7Q0FFcEI7Q0FDQTtFQUNDLHFCQUFxQjs7Q0FFdEI7Q0FDQTtHQUNFLG9CQUFhO0dBQWIsYUFBYTtHQUNiLHlCQUE4QjtXQUE5Qiw4QkFBOEI7Q0FDaEM7Q0FDQTtHQUNFLGdCQUFnQjtHQUNoQixzQkFBc0I7R0FDdEIsb0JBQW9CO0dBQ3BCLGVBQWU7R0FDZixjQUFjO0NBQ2hCO0NBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsUUFBUTtDQUNUO0NBQ0E7R0FDRSxjQUFjO0NBQ2hCO0NBQ0E7RUFDQyxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllL3JlY29tbWVuZGF0aW9ucy1tb3ZpZXMvcmVjb21tZW5kYXRpb25zLW1vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAubGF5b3V0e1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiB9XHJcbiAuY2FyZHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gfVxyXG4gLmRpdi1kYXRlLXZvdGV7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuIH1cclxuIC5zcGFuLXZvdGV7XHJcbiAgIGJhY2tncm91bmQ6ICNmYzM7XHJcbiAgIHBhZGRpbmc6LjJlbSAuNmVtIC4zZW07XHJcbiAgIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xyXG4gICBmb250LXdlaWdodDo3MDA7XHJcbiAgIGNvbG9yOiAjZmZmZmZmOyAgXHJcbiB9XHJcbiAuc3Bhbi12b3RlIGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDVweDtcclxuIH1cclxuIC5tb3ZpZS1pbWd7XHJcbiAgIG1hcmdpbi10b3A6IDUlO1xyXG4gfVxyXG4gcHtcclxuICBjb2xvcjojZjQ0MzM2O1xyXG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/movie/recommendations-movies/recommendations-movies.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/movie/recommendations-movies/recommendations-movies.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RecommendationsMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsMoviesComponent", function() { return RecommendationsMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_request_http_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request/http-movie.service */ "./src/app/services/http-request/http-movie.service.ts");



let RecommendationsMoviesComponent = class RecommendationsMoviesComponent {
    constructor(httpMovieService) {
        this.httpMovieService = httpMovieService;
        this.movieRecommendations = [];
    }
    ngOnInit() {
        this.httpMovieService.getMovieRecommendations(this.movieId)
            .subscribe(movieRecommendations => {
            this.movieRecommendations = movieRecommendations.results;
        });
    }
    ;
};
RecommendationsMoviesComponent.ctorParameters = () => [
    { type: src_app_services_http_request_http_movie_service__WEBPACK_IMPORTED_MODULE_2__["HttpMovieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecommendationsMoviesComponent.prototype, "movieId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecommendationsMoviesComponent.prototype, "movieName", void 0);
RecommendationsMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mv-recommendations-movies",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recommendations-movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/recommendations-movies/recommendations-movies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recommendations-movies.component.css */ "./src/app/components/movie/recommendations-movies/recommendations-movies.component.css")).default]
    })
], RecommendationsMoviesComponent);

;


/***/ }),

/***/ "./src/app/components/movies/movie-list-by-category/movie-list-by-category.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/movies/movie-list-by-category/movie-list-by-category.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MovieListByCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListByCategoryComponent", function() { return MovieListByCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_request_http_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request/http-movies.service */ "./src/app/services/http-request/http-movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_category_category_string_manipulation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category/category-string-manipulation-service */ "./src/app/services/category/category-string-manipulation-service.ts");





let MovieListByCategoryComponent = class MovieListByCategoryComponent {
    constructor(http, route, categoryStringManipulationService) {
        this.http = http;
        this.route = route;
        this.categoryStringManipulationService = categoryStringManipulationService;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.currentPage = params.page;
            let categoryStringObject = this.categoryStringManipulationService
                .changeCategoryString(params.categoryName);
            this.categoryName = categoryStringObject.categoryText;
            this.categoryForHttpReq = categoryStringObject.categoryForHttpReq;
            this.http.getMoviesByCategories(this.categoryForHttpReq, this.currentPage)
                .subscribe(response => {
                this.movies = response.results;
                this.totalPages = response.total_pages;
            });
        });
    }
};
MovieListByCategoryComponent.ctorParameters = () => [
    { type: src_app_services_http_request_http_movies_service__WEBPACK_IMPORTED_MODULE_2__["HttpMoviesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_category_category_string_manipulation_service__WEBPACK_IMPORTED_MODULE_4__["CategoryStringManipulationService"] }
];
MovieListByCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-list-by-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-list-by-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movie-list-by-category/movie-list-by-category.component.html")).default
    })
], MovieListByCategoryComponent);



/***/ }),

/***/ "./src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component.ts ***!
  \****************************************************************************************/
/*! exports provided: MovieListByGenereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListByGenereComponent", function() { return MovieListByGenereComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_request_http_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request/http-movies.service */ "./src/app/services/http-request/http-movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MovieListByGenereComponent = class MovieListByGenereComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.currentPage = params.page;
            this.ganreName = params.genreName;
            this.ganreId = params.genreId;
            this.http.getMoviesByGenre(this.currentPage, this.ganreId)
                .subscribe(response => {
                this.movies = response.results;
                this.totalPages = response.total_pages;
            });
        });
    }
};
MovieListByGenereComponent.ctorParameters = () => [
    { type: src_app_services_http_request_http_movies_service__WEBPACK_IMPORTED_MODULE_2__["HttpMoviesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
MovieListByGenereComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-list-by-genre',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-list-by-genre-component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component.html")).default,
    })
], MovieListByGenereComponent);



/***/ }),

/***/ "./src/app/components/person/person-details/person-details.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/person/person-details/person-details.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n    font-size: 3.5em;\r\n    font-weight: 700;\r\n    margin-top:150px ;\r\n}\r\ndiv{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb24vcGVyc29uLWRldGFpbHMvcGVyc29uLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlcnNvbi9wZXJzb24tZGV0YWlscy9wZXJzb24tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi10b3A6MTUwcHggO1xyXG59XHJcbmRpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/person/person-details/person-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/person/person-details/person-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: PersonDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailsComponent", function() { return PersonDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonDetailsComponent = class PersonDetailsComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonDetailsComponent.prototype, "person", void 0);
PersonDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-person-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./person-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person-details/person-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./person-details.component.css */ "./src/app/components/person/person-details/person-details.component.css")).default]
    })
], PersonDetailsComponent);



/***/ }),

/***/ "./src/app/components/person/person-layout/person-layout.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/person/person-layout/person-layout.component.ts ***!
  \****************************************************************************/
/*! exports provided: PersonLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonLayoutComponent", function() { return PersonLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_http_request_http_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http-request/http-person.service */ "./src/app/services/http-request/http-person.service.ts");




let PersonLayoutComponent = class PersonLayoutComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.personId = params["id"];
            this.http.getPerson(this.personId)
                .subscribe(person => {
                this.person = person;
            });
            this.http.getPersonMoviesCast(this.personId)
                .subscribe(response => {
                this.movies = response.cast;
            });
        });
    }
    ;
};
PersonLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_http_request_http_person_service__WEBPACK_IMPORTED_MODULE_3__["HttpPersonService"] }
];
PersonLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-person-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./person-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person-layout/person-layout.component.html")).default,
    })
], PersonLayoutComponent);



/***/ }),

/***/ "./src/app/components/person/person-movies/person-movies.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/person/person-movies/person-movies.component.ts ***!
  \****************************************************************************/
/*! exports provided: PersonMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonMoviesComponent", function() { return PersonMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonMoviesComponent = class PersonMoviesComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonMoviesComponent.prototype, "movies", void 0);
PersonMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-person-movies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./person-movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person-movies/person-movies.component.html")).default
    })
], PersonMoviesComponent);



/***/ }),

/***/ "./src/app/components/root-components/app/app.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/root-components/app/app.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main{\r\n margin-top: 70px;   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb290LWNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb290LWNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuIG1hcmdpbi10b3A6IDcwcHg7ICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/root-components/app/app.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/root-components/app/app.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/components/root-components/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/components/root-components/footer/footer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/root-components/footer/footer.component.ts ***!
  \***********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mv-footer",
        template: `<h1><a href="http://levi-adi.com">ADI LEVI &copy;</a></h1>
               <p>This application uses the API from TMDB but is not certified or approved by them.</p> `,
        styles: ["\n    h1{text-align:center;}\n    a{text-decoration: none;color:#ffff}\n    p{text-align:center}"]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/root-components/header/header-category-links/header-category-links.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/root-components/header/header-category-links/header-category-links.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: HeaderCategoryLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCategoryLinksComponent", function() { return HeaderCategoryLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderCategoryLinksComponent = class HeaderCategoryLinksComponent {
    constructor() {
        this.navbarName = 'Categories';
        this.navLinks = [
            { path: "movie-list/category/upcoming/1", label: "Upcoming" },
            { path: "movie-list/category/top-rated/1", label: "Top Rate" },
            { path: "movie-list/category/now-playing/1", label: "Playing Now" },
            { path: "movie-list/category/popular/1", label: "Popular" },
        ];
    }
};
HeaderCategoryLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-header-category-links',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-category-links.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/header/header-category-links/header-category-links.component.html")).default,
    })
], HeaderCategoryLinksComponent);



/***/ }),

/***/ "./src/app/components/root-components/header/header-gener-menu/header-gener-menu-list/header-gener-menu-list.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/components/root-components/header/header-gener-menu/header-gener-menu-list/header-gener-menu-list.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: HeaderGenerMenuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderGenerMenuListComponent", function() { return HeaderGenerMenuListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_request_http_genre_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request/http-genre-list.service */ "./src/app/services/http-request/http-genre-list.service.ts");



let HeaderGenerMenuListComponent = class HeaderGenerMenuListComponent {
    constructor(http) {
        this.http = http;
        this.navbarName = "Geners";
    }
    ngOnInit() {
        this.http.getGenreList().subscribe(genreList => {
            this.generList = genreList.genres;
            this.navList = this.generList
                .map((x, index) => x = { path: `movie-list/genre/${genreList.genres[index].name}/${genreList.genres[index].id}/1`, label: genreList.genres[index].name });
        });
    }
};
HeaderGenerMenuListComponent.ctorParameters = () => [
    { type: src_app_services_http_request_http_genre_list_service__WEBPACK_IMPORTED_MODULE_2__["HttpGenreListService"] }
];
HeaderGenerMenuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-header-gener-menu-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-gener-menu-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/header/header-gener-menu/header-gener-menu-list/header-gener-menu-list.component.html")).default,
    })
], HeaderGenerMenuListComponent);



/***/ }),

/***/ "./src/app/components/root-components/header/header-layout/header-layout.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/root-components/header/header-layout/header-layout.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#pageNavbar {\r\n    position: fixed;\r\n    top: 0px;\r\n    width: 100%;\r\n    z-index: 2;\r\n\r\n}\r\n\r\nnav *{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb290LWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1sYXlvdXQvaGVhZGVyLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUFtQjtZQUFuQixtQkFBbUI7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb290LWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1sYXlvdXQvaGVhZGVyLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2VOYXZiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcblxyXG59XHJcblxyXG5uYXYgKntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/root-components/header/header-layout/header-layout.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/root-components/header/header-layout/header-layout.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HeaderLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLayoutComponent", function() { return HeaderLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderLayoutComponent = class HeaderLayoutComponent {
};
HeaderLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-header-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/header/header-layout/header-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-layout.component.css */ "./src/app/components/root-components/header/header-layout/header-layout.component.css")).default]
    })
], HeaderLayoutComponent);



/***/ }),

/***/ "./src/app/components/root-components/page-not-found404/page-not-found404.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/root-components/page-not-found404/page-not-found404.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb290LWNvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQ0MDQvcGFnZS1ub3QtZm91bmQ0MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb290LWNvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQ0MDQvcGFnZS1ub3QtZm91bmQ0MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/root-components/page-not-found404/page-not-found404.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/root-components/page-not-found404/page-not-found404.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PageNotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound404Component", function() { return PageNotFound404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFound404Component = class PageNotFound404Component {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFound404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-page-not-found404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root-components/page-not-found404/page-not-found404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found404.component.css */ "./src/app/components/root-components/page-not-found404/page-not-found404.component.css")).default]
    })
], PageNotFound404Component);



/***/ }),

/***/ "./src/app/components/search-movies/get-input-value/get-input-value.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/search-movies/get-input-value/get-input-value.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GetInputValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInputValueComponent", function() { return GetInputValueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_request_http_search_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request/http-search-movie.service */ "./src/app/services/http-request/http-search-movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GetInputValueComponent = class GetInputValueComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.currentPage = params.page;
            this.search = params.searchValue;
            this.http.getSearch(this.search, this.currentPage).subscribe(response => {
                if (response.results.length === 0) {
                    alert(this.search + " movie not found");
                }
                else {
                    this.movies = response.results;
                    this.totalPages = response.total_pages;
                }
            });
        });
    }
};
GetInputValueComponent.ctorParameters = () => [
    { type: src_app_services_http_request_http_search_movie_service__WEBPACK_IMPORTED_MODULE_2__["HttpSearchMovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
GetInputValueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-get-input-value',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-input-value.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-movies/get-input-value/get-input-value.component.html")).default,
    })
], GetInputValueComponent);



/***/ }),

/***/ "./src/app/components/search-movies/input-search-movie/input-search-movie.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/search-movies/input-search-movie/input-search-movie.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtbW92aWVzL2lucHV0LXNlYXJjaC1tb3ZpZS9pbnB1dC1zZWFyY2gtbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1tb3ZpZXMvaW5wdXQtc2VhcmNoLW1vdmllL2lucHV0LXNlYXJjaC1tb3ZpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/search-movies/input-search-movie/input-search-movie.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/search-movies/input-search-movie/input-search-movie.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: InputSearchMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearchMovieComponent", function() { return InputSearchMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let InputSearchMovieComponent = class InputSearchMovieComponent {
    constructor(router) {
        this.router = router;
    }
    getMoviesByInput() {
        this.router.navigateByUrl(`/movie-list/search/${this.search}/1`);
    }
};
InputSearchMovieComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InputSearchMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-input-search-movie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-search-movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-movies/input-search-movie/input-search-movie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-search-movie.component.css */ "./src/app/components/search-movies/input-search-movie/input-search-movie.component.css")).default]
    })
], InputSearchMovieComponent);



/***/ }),

/***/ "./src/app/components/search-movies/search-movies-layout/search-movies-layout.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/search-movies/search-movies-layout/search-movies-layout.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SearchMoviesLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMoviesLayoutComponent", function() { return SearchMoviesLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchMoviesLayoutComponent = class SearchMoviesLayoutComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchMoviesLayoutComponent.prototype, "movies", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchMoviesLayoutComponent.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchMoviesLayoutComponent.prototype, "totalPages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchMoviesLayoutComponent.prototype, "search", void 0);
SearchMoviesLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-search-movies-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-movies-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-movies/search-movies-layout/search-movies-layout.component.html")).default,
    })
], SearchMoviesLayoutComponent);



/***/ }),

/***/ "./src/app/components/shear-components/menu-nav/menu-nav.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/shear-components/menu-nav/menu-nav.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-button-item {\r\n    background: #f44336;\r\n    color: #FFFFFF;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGVhci1jb21wb25lbnRzL21lbnUtbmF2L21lbnUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYzs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoZWFyLWNvbXBvbmVudHMvbWVudS1uYXYvbWVudS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWJ1dHRvbi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/shear-components/menu-nav/menu-nav.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/shear-components/menu-nav/menu-nav.component.ts ***!
  \****************************************************************************/
/*! exports provided: MenuNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNavComponent", function() { return MenuNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuNavComponent = class MenuNavComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MenuNavComponent.prototype, "navLinks", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MenuNavComponent.prototype, "menuName", void 0);
MenuNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-menu-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/menu-nav/menu-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-nav.component.css */ "./src/app/components/shear-components/menu-nav/menu-nav.component.css")).default]
    })
], MenuNavComponent);



/***/ }),

/***/ "./src/app/components/shear-components/movie-lists/movie-list-card/movie-list-card.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/shear-components/movie-lists/movie-list-card/movie-list-card.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MovieListCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListCardComponent", function() { return MovieListCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieListCardComponent = class MovieListCardComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListCardComponent.prototype, "m", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListCardComponent.prototype, "notNeedVoteData", void 0);
MovieListCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-list-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-list-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/movie-lists/movie-list-card/movie-list-card.component.html")).default,
    })
], MovieListCardComponent);



/***/ }),

/***/ "./src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;  \r\n}\r\nmv-movie-list-card{\r\n    margin: 0.5%;\r\n}\r\nh1{\r\n    font-family: 'Shrikhand', cursive;\r\n    letter-spacing: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGVhci1jb21wb25lbnRzL21vdmllLWxpc3RzL21vdmllLWxpc3QtbGF5b3V0L21vdmllLWxpc3QtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2Ysd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hlYXItY29tcG9uZW50cy9tb3ZpZS1saXN0cy9tb3ZpZS1saXN0LWxheW91dC9tb3ZpZS1saXN0LWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXHJcbn1cclxubXYtbW92aWUtbGlzdC1jYXJke1xyXG4gICAgbWFyZ2luOiAwLjUlO1xyXG59XHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdTaHJpa2hhbmQnLCBjdXJzaXZlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MovieListLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListLayoutComponent", function() { return MovieListLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieListLayoutComponent = class MovieListLayoutComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListLayoutComponent.prototype, "movies", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListLayoutComponent.prototype, "categoryName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListLayoutComponent.prototype, "ganreName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListLayoutComponent.prototype, "notNeedVoteData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListLayoutComponent.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListLayoutComponent.prototype, "totalPages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListLayoutComponent.prototype, "ganreId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListLayoutComponent.prototype, "categoryForHttpReq", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListLayoutComponent.prototype, "search", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListLayoutComponent.prototype, "notNeedPager", void 0);
MovieListLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-movie-list-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-list-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-list-layout.component.css */ "./src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component.css")).default]
    })
], MovieListLayoutComponent);



/***/ }),

/***/ "./src/app/components/shear-components/pager/pager.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/shear-components/pager/pager.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttonNull{\r\n    display: none;\r\n}\r\n.pagesButtons{\r\n    text-shadow: 0 -1px 4px #FFF, 0 -2px 5px #ff0, 0 -18px 40px #F00;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGVhci1jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnRUFBZ0U7QUFDcEUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoZWFyLWNvbXBvbmVudHMvcGFnZXIvcGFnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25OdWxse1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucGFnZXNCdXR0b25ze1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgLTFweCA0cHggI0ZGRiwgMCAtMnB4IDVweCAjZmYwLCAwIC0xOHB4IDQwcHggI0YwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/shear-components/pager/pager.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/shear-components/pager/pager.component.ts ***!
  \**********************************************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_pager_return_page_sevice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pager/return-page.sevice */ "./src/app/services/pager/return-page.sevice.ts");



let PagerComponent = class PagerComponent {
    constructor(returnPage) {
        this.returnPage = returnPage;
        this.pagesArray = Array
            .from(Array(10), (x, index) => index + 1);
    }
    ngOnChanges(changes) {
        if (changes.totalPages !== undefined && changes.totalPages.currentValue < 10) {
            this.pagesArray = Array
                .from(Array(changes.totalPages.currentValue), (x, index) => index + 1);
        }
    }
    get10PreviousPages() {
        this.pagesArray = this.returnPage.loadPrevious10Pages
            .loadPrevious10PagesForListByGenderOrCategory(this.pagesArray, this.ganreName, this.ganreId, this.categoryForHttpReq, this.search);
    }
    ;
    get10NextPages() {
        this.pagesArray = this.returnPage.loadNext10Pages
            .loadNext10PageForListByGenderOrByCategory(this.pagesArray, this.ganreName, this.ganreId, this.categoryForHttpReq, this.search);
    }
    ;
};
PagerComponent.ctorParameters = () => [
    { type: src_app_services_pager_return_page_sevice__WEBPACK_IMPORTED_MODULE_2__["ReturnPageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "totalPages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "ganreName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "ganreId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "categoryForHttpReq", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "search", void 0);
PagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mv-pager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shear-components/pager/pager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pager.component.css */ "./src/app/components/shear-components/pager/pager.component.css")).default]
    })
], PagerComponent);



/***/ }),

/***/ "./src/app/modules/angular-material/angular-material.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/angular-material/angular-material.module.ts ***!
  \*********************************************************************/
/*! exports provided: AngualrMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngualrMaterialModule", function() { return AngualrMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");











const modules = [
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]
];
let AngualrMaterialModule = class AngualrMaterialModule {
};
AngualrMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [...modules],
        exports: [...modules]
    })
], AngualrMaterialModule);



/***/ }),

/***/ "./src/app/modules/header/header-categoris/header-categoris.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/header/header-categoris/header-categoris.module.ts ***!
  \****************************************************************************/
/*! exports provided: HeaderCategorisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCategorisModule", function() { return HeaderCategorisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");
/* harmony import */ var src_app_components_root_components_header_header_category_links_header_category_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/root-components/header/header-category-links/header-category-links.component */ "./src/app/components/root-components/header/header-category-links/header-category-links.component.ts");




const components = [
    src_app_components_root_components_header_header_category_links_header_category_links_component__WEBPACK_IMPORTED_MODULE_3__["HeaderCategoryLinksComponent"]
];
let HeaderCategorisModule = class HeaderCategorisModule {
};
HeaderCategorisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components],
        imports: [
            _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_2__["SheardModule"]
        ],
        exports: [...components]
    })
], HeaderCategorisModule);



/***/ }),

/***/ "./src/app/modules/header/header-gener/header-gener.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/header/header-gener/header-gener.module.ts ***!
  \********************************************************************/
/*! exports provided: HeaderGenerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderGenerModule", function() { return HeaderGenerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");
/* harmony import */ var src_app_components_root_components_header_header_gener_menu_header_gener_menu_list_header_gener_menu_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/root-components/header/header-gener-menu/header-gener-menu-list/header-gener-menu-list.component */ "./src/app/components/root-components/header/header-gener-menu/header-gener-menu-list/header-gener-menu-list.component.ts");




let HeaderGenerModule = class HeaderGenerModule {
};
HeaderGenerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_root_components_header_header_gener_menu_header_gener_menu_list_header_gener_menu_list_component__WEBPACK_IMPORTED_MODULE_3__["HeaderGenerMenuListComponent"]],
        imports: [
            _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_2__["SheardModule"]
        ],
        exports: [src_app_components_root_components_header_header_gener_menu_header_gener_menu_list_header_gener_menu_list_component__WEBPACK_IMPORTED_MODULE_3__["HeaderGenerMenuListComponent"]]
    })
], HeaderGenerModule);



/***/ }),

/***/ "./src/app/modules/header/header.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/header/header.module.ts ***!
  \*************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_root_components_header_header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/root-components/header/header-layout/header-layout.component */ "./src/app/components/root-components/header/header-layout/header-layout.component.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");
/* harmony import */ var _header_gener_header_gener_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-gener/header-gener.module */ "./src/app/modules/header/header-gener/header-gener.module.ts");
/* harmony import */ var _header_categoris_header_categoris_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-categoris/header-categoris.module */ "./src/app/modules/header/header-categoris/header-categoris.module.ts");
/* harmony import */ var _search_movies_search_movies_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search-movies/search-movies.module */ "./src/app/modules/search-movies/search-movies.module.ts");







const modules = [
    _header_gener_header_gener_module__WEBPACK_IMPORTED_MODULE_4__["HeaderGenerModule"],
    _header_categoris_header_categoris_module__WEBPACK_IMPORTED_MODULE_5__["HeaderCategorisModule"],
    _search_movies_search_movies_module__WEBPACK_IMPORTED_MODULE_6__["SearchMoviesModule"],
];
let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_root_components_header_header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_2__["HeaderLayoutComponent"]],
        imports: [
            _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__["SheardModule"],
            ...modules
        ],
        exports: [src_app_components_root_components_header_header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_2__["HeaderLayoutComponent"]]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_home_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/home/home-layout/home-layout.component */ "./src/app/components/home/home-layout/home-layout.component.ts");




const routes = [
    { path: '', component: src_app_components_home_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"] },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");
/* harmony import */ var src_app_components_home_home_category_telmplate_home_category_telmplate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/home/home-category-telmplate/home-category-telmplate.component */ "./src/app/components/home/home-category-telmplate/home-category-telmplate.component.ts");
/* harmony import */ var src_app_components_home_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/home/home-layout/home-layout.component */ "./src/app/components/home/home-layout/home-layout.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");






let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_home_home_category_telmplate_home_category_telmplate_component__WEBPACK_IMPORTED_MODULE_3__["HomeCategoryTelmplateComponent"], src_app_components_home_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_4__["HomeLayoutComponent"]],
        imports: [
            _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_2__["SheardModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"]
        ],
        exports: [src_app_components_home_home_category_telmplate_home_category_telmplate_component__WEBPACK_IMPORTED_MODULE_3__["HomeCategoryTelmplateComponent"], src_app_components_home_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_4__["HomeLayoutComponent"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/movie/movie-casts/movie-casts.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/movie/movie-casts/movie-casts.module.ts ***!
  \*****************************************************************/
/*! exports provided: MovieCastsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCastsModule", function() { return MovieCastsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_movie_cast_movie_cast_movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/movie/cast-movie/cast-movie.component */ "./src/app/components/movie/cast-movie/cast-movie.component.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");




const components = [
    src_app_components_movie_cast_movie_cast_movie_component__WEBPACK_IMPORTED_MODULE_2__["CastMovieComponent"],
];
let MovieCastsModule = class MovieCastsModule {
};
MovieCastsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components],
        imports: [
            _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__["SheardModule"]
        ],
        exports: [...components]
    })
], MovieCastsModule);



/***/ }),

/***/ "./src/app/modules/movie/movie-categories/movie-categories.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/movie/movie-categories/movie-categories.module.ts ***!
  \***************************************************************************/
/*! exports provided: MovieCategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCategoriesModule", function() { return MovieCategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_movie_movie_categories_movie_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/movie/movie-categories/movie-categories.component */ "./src/app/components/movie/movie-categories/movie-categories.component.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");




let MovieCategoriesModule = class MovieCategoriesModule {
};
MovieCategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_movie_movie_categories_movie_categories_component__WEBPACK_IMPORTED_MODULE_2__["MovieCategoriesComponent"]],
        imports: [
            _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__["SheardModule"]
        ],
        exports: [src_app_components_movie_movie_categories_movie_categories_component__WEBPACK_IMPORTED_MODULE_2__["MovieCategoriesComponent"]]
    })
], MovieCategoriesModule);



/***/ }),

/***/ "./src/app/modules/movie/movie-details/movie-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/movie/movie-details/movie-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: MovieDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsModule", function() { return MovieDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_movie_movie_details_movie_details_layout_movie_details_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component */ "./src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component.ts");
/* harmony import */ var src_app_components_movie_movie_details_movie_details_img_movie_details_img_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/movie/movie-details/movie-details-img/movie-details-img.component */ "./src/app/components/movie/movie-details/movie-details-img/movie-details-img.component.ts");
/* harmony import */ var src_app_components_movie_movie_details_movie_time_date_vote_movie_time_date_vote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component */ "./src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");
/* harmony import */ var _movie_trailer_movie_trailer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movie-trailer/movie-trailer.module */ "./src/app/modules/movie/movie-trailer/movie-trailer.module.ts");
/* harmony import */ var _movie_categories_movie_categories_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../movie-categories/movie-categories.module */ "./src/app/modules/movie/movie-categories/movie-categories.module.ts");








const components = [
    src_app_components_movie_movie_details_movie_details_layout_movie_details_layout_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailsLayoutComponent"],
    src_app_components_movie_movie_details_movie_time_date_vote_movie_time_date_vote_component__WEBPACK_IMPORTED_MODULE_4__["MovieTimeDateVoteComponent"],
    src_app_components_movie_movie_details_movie_details_img_movie_details_img_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsImgComponent"],
];
let MovieDetailsModule = class MovieDetailsModule {
};
MovieDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components],
        imports: [
            _movie_trailer_movie_trailer_module__WEBPACK_IMPORTED_MODULE_6__["MovieTrailerModule"],
            _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__["SheardModule"],
            _movie_categories_movie_categories_module__WEBPACK_IMPORTED_MODULE_7__["MovieCategoriesModule"]
        ],
        exports: [...components]
    })
], MovieDetailsModule);



/***/ }),

/***/ "./src/app/modules/movie/movie-layout/movie-layout.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/movie/movie-layout/movie-layout.module.ts ***!
  \*******************************************************************/
/*! exports provided: MovieLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieLayoutModule", function() { return MovieLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_movie_movie_layout_movie_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/movie/movie-layout/movie-layout.component */ "./src/app/components/movie/movie-layout/movie-layout.component.ts");
/* harmony import */ var _movie_details_movie_details_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie-details/movie-details.module */ "./src/app/modules/movie/movie-details/movie-details.module.ts");
/* harmony import */ var _movie_navbar_movie_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie-navbar/movie-navbar.module */ "./src/app/modules/movie/movie-navbar/movie-navbar.module.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");






const modules = [
    _movie_details_movie_details_module__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsModule"],
    _movie_navbar_movie_navbar_module__WEBPACK_IMPORTED_MODULE_4__["MovieNavbarModule"]
];
let MovieLayoutModule = class MovieLayoutModule {
};
MovieLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_movie_movie_layout_movie_layout_component__WEBPACK_IMPORTED_MODULE_2__["MovieLayoutComponent"]],
        imports: [
            _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__["SheardModule"],
            ...modules
        ],
        exports: [src_app_components_movie_movie_layout_movie_layout_component__WEBPACK_IMPORTED_MODULE_2__["MovieLayoutComponent"], ...modules]
    })
], MovieLayoutModule);



/***/ }),

/***/ "./src/app/modules/movie/movie-navbar/movie-navbar.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/movie/movie-navbar/movie-navbar.module.ts ***!
  \*******************************************************************/
/*! exports provided: MovieNavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieNavbarModule", function() { return MovieNavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_movie_movie_navbar_movie_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/movie/movie-navbar/movie-navbar.component */ "./src/app/components/movie/movie-navbar/movie-navbar.component.ts");
/* harmony import */ var _recommendations_movies_recommendations_movies_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recommendations-movies/recommendations-movies.module */ "./src/app/modules/movie/recommendations-movies/recommendations-movies.module.ts");
/* harmony import */ var _movie_casts_movie_casts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie-casts/movie-casts.module */ "./src/app/modules/movie/movie-casts/movie-casts.module.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");






let MovieNavbarModule = class MovieNavbarModule {
};
MovieNavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_movie_movie_navbar_movie_navbar_component__WEBPACK_IMPORTED_MODULE_2__["MovieNavbarComponent"]],
        imports: [
            _recommendations_movies_recommendations_movies_module__WEBPACK_IMPORTED_MODULE_3__["RecommendationsMoviesModule"],
            _movie_casts_movie_casts_module__WEBPACK_IMPORTED_MODULE_4__["MovieCastsModule"],
            _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__["SheardModule"]
        ],
        exports: [src_app_components_movie_movie_navbar_movie_navbar_component__WEBPACK_IMPORTED_MODULE_2__["MovieNavbarComponent"]]
    })
], MovieNavbarModule);



/***/ }),

/***/ "./src/app/modules/movie/movie-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/movie/movie-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MovieRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRoutingModule", function() { return MovieRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_movie_get_movie_from_url_get_movie_from_url_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/movie/get-movie-from-url/get-movie-from-url.component */ "./src/app/components/movie/get-movie-from-url/get-movie-from-url.component.ts");




const routes = [
    { path: '', component: src_app_components_movie_get_movie_from_url_get_movie_from_url_component__WEBPACK_IMPORTED_MODULE_3__["GetMovieFromUrlComponent"] },
];
let MovieRoutingModule = class MovieRoutingModule {
};
MovieRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MovieRoutingModule);



/***/ }),

/***/ "./src/app/modules/movie/movie-trailer/movie-trailer.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/movie/movie-trailer/movie-trailer.module.ts ***!
  \*********************************************************************/
/*! exports provided: MovieTrailerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieTrailerModule", function() { return MovieTrailerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_movie_movie_trailer_btn_movie_trailer_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component */ "./src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");
/* harmony import */ var src_app_components_movie_movie_trailer_dialog_movie_trailer_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/movie/movie-trailer-dialog/movie-trailer-dialog.component */ "./src/app/components/movie/movie-trailer-dialog/movie-trailer-dialog.component.ts");





const components = [
    src_app_components_movie_movie_trailer_btn_movie_trailer_btn_component__WEBPACK_IMPORTED_MODULE_2__["MovieTrailerBtnComponent"],
    src_app_components_movie_movie_trailer_dialog_movie_trailer_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MovieTrailerDialogComponent"],
];
let MovieTrailerModule = class MovieTrailerModule {
};
MovieTrailerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [src_app_components_movie_movie_trailer_dialog_movie_trailer_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MovieTrailerDialogComponent"]],
        declarations: [...components],
        imports: [_root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__["SheardModule"]],
        exports: [...components]
    })
], MovieTrailerModule);



/***/ }),

/***/ "./src/app/modules/movie/movie.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/movie/movie.module.ts ***!
  \***********************************************/
/*! exports provided: MovieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function() { return MovieModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-routing.module */ "./src/app/modules/movie/movie-routing.module.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");
/* harmony import */ var src_app_components_movie_get_movie_from_url_get_movie_from_url_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/movie/get-movie-from-url/get-movie-from-url.component */ "./src/app/components/movie/get-movie-from-url/get-movie-from-url.component.ts");
/* harmony import */ var _movie_layout_movie_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-layout/movie-layout.module */ "./src/app/modules/movie/movie-layout/movie-layout.module.ts");






const modules = [
    _movie_routing_module__WEBPACK_IMPORTED_MODULE_2__["MovieRoutingModule"],
    _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__["SheardModule"],
    _movie_layout_movie_layout_module__WEBPACK_IMPORTED_MODULE_5__["MovieLayoutModule"]
];
const components = [
    src_app_components_movie_get_movie_from_url_get_movie_from_url_component__WEBPACK_IMPORTED_MODULE_4__["GetMovieFromUrlComponent"]
];
let MovieModule = class MovieModule {
};
MovieModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components],
        imports: [...modules],
        exports: [...modules],
    })
], MovieModule);



/***/ }),

/***/ "./src/app/modules/movie/recommendations-movies/recommendations-movies.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/movie/recommendations-movies/recommendations-movies.module.ts ***!
  \***************************************************************************************/
/*! exports provided: RecommendationsMoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsMoviesModule", function() { return RecommendationsMoviesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_movie_recommendations_movies_recommendations_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/movie/recommendations-movies/recommendations-movies.component */ "./src/app/components/movie/recommendations-movies/recommendations-movies.component.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");




let RecommendationsMoviesModule = class RecommendationsMoviesModule {
};
RecommendationsMoviesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_movie_recommendations_movies_recommendations_movies_component__WEBPACK_IMPORTED_MODULE_2__["RecommendationsMoviesComponent"]],
        imports: [_root_modules_shear_module__WEBPACK_IMPORTED_MODULE_3__["SheardModule"]],
        exports: [src_app_components_movie_recommendations_movies_recommendations_movies_component__WEBPACK_IMPORTED_MODULE_2__["RecommendationsMoviesComponent"]]
    })
], RecommendationsMoviesModule);



/***/ }),

/***/ "./src/app/modules/movies-by-category/movies-by-category-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/movies-by-category/movies-by-category-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MoviesByCategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesByCategoryRoutingModule", function() { return MoviesByCategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_movies_movie_list_by_category_movie_list_by_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/movies/movie-list-by-category/movie-list-by-category.component */ "./src/app/components/movies/movie-list-by-category/movie-list-by-category.component.ts");




const routes = [
    { path: '', component: src_app_components_movies_movie_list_by_category_movie_list_by_category_component__WEBPACK_IMPORTED_MODULE_3__["MovieListByCategoryComponent"] },
];
let MoviesByCategoryRoutingModule = class MoviesByCategoryRoutingModule {
};
MoviesByCategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MoviesByCategoryRoutingModule);



/***/ }),

/***/ "./src/app/modules/movies-by-category/movies-by-category.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/movies-by-category/movies-by-category.module.ts ***!
  \*************************************************************************/
/*! exports provided: MoviesByCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesByCategoryModule", function() { return MoviesByCategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "./src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var _movies_by_category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies-by-category-routing.module */ "./src/app/modules/movies-by-category/movies-by-category-routing.module.ts");
/* harmony import */ var src_app_components_movies_movie_list_by_category_movie_list_by_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/movies/movie-list-by-category/movie-list-by-category.component */ "./src/app/components/movies/movie-list-by-category/movie-list-by-category.component.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");






const moduls = [
    _movies_by_category_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesByCategoryRoutingModule"],
    _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngualrMaterialModule"],
    _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__["SheardModule"]
];
const components = [
    src_app_components_movies_movie_list_by_category_movie_list_by_category_component__WEBPACK_IMPORTED_MODULE_4__["MovieListByCategoryComponent"],
];
let MoviesByCategoryModule = class MoviesByCategoryModule {
};
MoviesByCategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components],
        imports: [...moduls],
        exports: [...moduls, ...components]
    })
], MoviesByCategoryModule);



/***/ }),

/***/ "./src/app/modules/movies-by-genere/movies-by-genere-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/movies-by-genere/movies-by-genere-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MoviesByGenereRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesByGenereRoutingModule", function() { return MoviesByGenereRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_movies_movie_list_by_genre_movie_list_by_genre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component */ "./src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component.ts");




const routes = [
    { path: '', component: src_app_components_movies_movie_list_by_genre_movie_list_by_genre_component__WEBPACK_IMPORTED_MODULE_3__["MovieListByGenereComponent"] },
];
let MoviesByGenereRoutingModule = class MoviesByGenereRoutingModule {
};
MoviesByGenereRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MoviesByGenereRoutingModule);



/***/ }),

/***/ "./src/app/modules/movies-by-genere/movies-by-genere.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/movies-by-genere/movies-by-genere.module.ts ***!
  \*********************************************************************/
/*! exports provided: MoviesByGenereModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesByGenereModule", function() { return MoviesByGenereModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movies_by_genere_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-by-genere-routing.module */ "./src/app/modules/movies-by-genere/movies-by-genere-routing.module.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "./src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var src_app_components_movies_movie_list_by_genre_movie_list_by_genre_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component */ "./src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");






const moduls = [
    _movies_by_genere_routing_module__WEBPACK_IMPORTED_MODULE_2__["MoviesByGenereRoutingModule"],
    _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngualrMaterialModule"],
    _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__["SheardModule"]
];
const components = [
    src_app_components_movies_movie_list_by_genre_movie_list_by_genre_component__WEBPACK_IMPORTED_MODULE_4__["MovieListByGenereComponent"],
];
let MoviesByGenereModule = class MoviesByGenereModule {
};
MoviesByGenereModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components],
        imports: [...moduls],
        exports: [...moduls, ...components]
    })
], MoviesByGenereModule);



/***/ }),

/***/ "./src/app/modules/person/person-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/person/person-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PersonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonRoutingModule", function() { return PersonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_person_person_layout_person_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/person/person-layout/person-layout.component */ "./src/app/components/person/person-layout/person-layout.component.ts");




const routes = [
    { path: '', component: src_app_components_person_person_layout_person_layout_component__WEBPACK_IMPORTED_MODULE_3__["PersonLayoutComponent"] },
];
let PersonRoutingModule = class PersonRoutingModule {
};
PersonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PersonRoutingModule);



/***/ }),

/***/ "./src/app/modules/person/person.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/person/person.module.ts ***!
  \*************************************************/
/*! exports provided: PersonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonModule", function() { return PersonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_person_person_details_person_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/person/person-details/person-details.component */ "./src/app/components/person/person-details/person-details.component.ts");
/* harmony import */ var _person_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-routing.module */ "./src/app/modules/person/person-routing.module.ts");
/* harmony import */ var src_app_components_person_person_movies_person_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/person/person-movies/person-movies.component */ "./src/app/components/person/person-movies/person-movies.component.ts");
/* harmony import */ var src_app_components_person_person_layout_person_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/person/person-layout/person-layout.component */ "./src/app/components/person/person-layout/person-layout.component.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");







const moduls = [
    _person_routing_module__WEBPACK_IMPORTED_MODULE_3__["PersonRoutingModule"],
    _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_6__["SheardModule"]
];
const components = [
    src_app_components_person_person_details_person_details_component__WEBPACK_IMPORTED_MODULE_2__["PersonDetailsComponent"],
    src_app_components_person_person_movies_person_movies_component__WEBPACK_IMPORTED_MODULE_4__["PersonMoviesComponent"],
    src_app_components_person_person_layout_person_layout_component__WEBPACK_IMPORTED_MODULE_5__["PersonLayoutComponent"]
];
let PersonModule = class PersonModule {
};
PersonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components],
        imports: [...moduls],
        exports: [...moduls, ...components]
    })
], PersonModule);



/***/ }),

/***/ "./src/app/modules/root-modules/app-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/root-modules/app-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_root_components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/root-components/page-not-found404/page-not-found404.component */ "./src/app/components/root-components/page-not-found404/page-not-found404.component.ts");




const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/modules/home/home.module.ts"))
            .then(m => m.HomeModule) },
    { path: 'movie/:id', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../movie/movie.module */ "./src/app/modules/movie/movie.module.ts"))
            .then(m => m.MovieModule) },
    { path: 'movie-list/genre/:genreName/:genreId/:page', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../movies-by-genere/movies-by-genere.module */ "./src/app/modules/movies-by-genere/movies-by-genere.module.ts"))
            .then(m => m.MoviesByGenereModule) },
    { path: 'movie-list/category/:categoryName/:page', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../movies-by-category/movies-by-category.module */ "./src/app/modules/movies-by-category/movies-by-category.module.ts"))
            .then(m => m.MoviesByCategoryModule) },
    { path: 'movie-list/search/:searchValue/:page', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../search-movies/search-movies.module */ "./src/app/modules/search-movies/search-movies.module.ts"))
            .then(m => m.SearchMoviesModule) },
    { path: 'person/:id', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../person/person.module */ "./src/app/modules/person/person.module.ts"))
            .then(m => m.PersonModule) },
    { path: '**', component: src_app_components_root_components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFound404Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/modules/root-modules/app.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/root-modules/app.module.ts ***!
  \****************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_root_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/root-components/app/app.component */ "./src/app/components/root-components/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.module */ "./src/app/modules/root-modules/core.module.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_root_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _core_module__WEBPACK_IMPORTED_MODULE_5__["CoreMoudle"]
        ],
        bootstrap: [_components_root_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/root-modules/core.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/root-modules/core.module.ts ***!
  \*****************************************************/
/*! exports provided: CoreMoudle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMoudle", function() { return CoreMoudle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_root_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/root-components/footer/footer.component */ "./src/app/components/root-components/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/modules/root-modules/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _movie_movie_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../movie/movie.module */ "./src/app/modules/movie/movie.module.ts");
/* harmony import */ var _person_person_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../person/person.module */ "./src/app/modules/person/person.module.ts");
/* harmony import */ var _movies_by_category_movies_by_category_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../movies-by-category/movies-by-category.module */ "./src/app/modules/movies-by-category/movies-by-category.module.ts");
/* harmony import */ var _movies_by_genere_movies_by_genere_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../movies-by-genere/movies-by-genere.module */ "./src/app/modules/movies-by-genere/movies-by-genere.module.ts");
/* harmony import */ var _shear_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shear.module */ "./src/app/modules/root-modules/shear.module.ts");
/* harmony import */ var src_app_components_root_components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/root-components/page-not-found404/page-not-found404.component */ "./src/app/components/root-components/page-not-found404/page-not-found404.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.module */ "./src/app/modules/header/header.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../home/home.module */ "./src/app/modules/home/home.module.ts");













const components = [
    src_app_components_root_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
    src_app_components_root_components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFound404Component"]
];
const moudles = [
    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
    _movie_movie_module__WEBPACK_IMPORTED_MODULE_5__["MovieModule"],
    _person_person_module__WEBPACK_IMPORTED_MODULE_6__["PersonModule"],
    _movies_by_category_movies_by_category_module__WEBPACK_IMPORTED_MODULE_7__["MoviesByCategoryModule"],
    _movies_by_genere_movies_by_genere_module__WEBPACK_IMPORTED_MODULE_8__["MoviesByGenereModule"],
    _shear_module__WEBPACK_IMPORTED_MODULE_9__["SheardModule"],
    _header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"],
    _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"]
];
let CoreMoudle = class CoreMoudle {
};
CoreMoudle = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components],
        imports: [...moudles],
        exports: [...moudles, ...components],
    })
], CoreMoudle);



/***/ }),

/***/ "./src/app/modules/root-modules/shear.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/root-modules/shear.module.ts ***!
  \******************************************************/
/*! exports provided: SheardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheardModule", function() { return SheardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_shear_components_movie_lists_movie_list_card_movie_list_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shear-components/movie-lists/movie-list-card/movie-list-card.component */ "./src/app/components/shear-components/movie-lists/movie-list-card/movie-list-card.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_components_shear_components_movie_lists_movie_list_layout_movie_list_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component */ "./src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component.ts");
/* harmony import */ var src_app_components_shear_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/shear-components/pager/pager.component */ "./src/app/components/shear-components/pager/pager.component.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "./src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_components_shear_components_menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/shear-components/menu-nav/menu-nav.component */ "./src/app/components/shear-components/menu-nav/menu-nav.component.ts");










const components = [
    src_app_components_shear_components_movie_lists_movie_list_card_movie_list_card_component__WEBPACK_IMPORTED_MODULE_2__["MovieListCardComponent"],
    src_app_components_shear_components_movie_lists_movie_list_layout_movie_list_layout_component__WEBPACK_IMPORTED_MODULE_5__["MovieListLayoutComponent"],
    src_app_components_shear_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__["PagerComponent"],
    src_app_components_shear_components_menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_9__["MenuNavComponent"]
];
const modules = [
    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
    _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngualrMaterialModule"]
];
let SheardModule = class SheardModule {
};
SheardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components],
        imports: [...modules],
        exports: [...components, ...modules]
    })
], SheardModule);



/***/ }),

/***/ "./src/app/modules/search-movies/search-movies-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/search-movies/search-movies-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SearchMoviesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMoviesRoutingModule", function() { return SearchMoviesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_search_movies_get_input_value_get_input_value_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/search-movies/get-input-value/get-input-value.component */ "./src/app/components/search-movies/get-input-value/get-input-value.component.ts");




const routes = [
    { path: '', component: src_app_components_search_movies_get_input_value_get_input_value_component__WEBPACK_IMPORTED_MODULE_3__["GetInputValueComponent"] },
];
let SearchMoviesRoutingModule = class SearchMoviesRoutingModule {
};
SearchMoviesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SearchMoviesRoutingModule);



/***/ }),

/***/ "./src/app/modules/search-movies/search-movies.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/search-movies/search-movies.module.ts ***!
  \***************************************************************/
/*! exports provided: SearchMoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMoviesModule", function() { return SearchMoviesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_search_movies_search_movies_layout_search_movies_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/search-movies/search-movies-layout/search-movies-layout.component */ "./src/app/components/search-movies/search-movies-layout/search-movies-layout.component.ts");
/* harmony import */ var src_app_components_search_movies_get_input_value_get_input_value_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/search-movies/get-input-value/get-input-value.component */ "./src/app/components/search-movies/get-input-value/get-input-value.component.ts");
/* harmony import */ var src_app_components_search_movies_input_search_movie_input_search_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/search-movies/input-search-movie/input-search-movie.component */ "./src/app/components/search-movies/input-search-movie/input-search-movie.component.ts");
/* harmony import */ var _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../root-modules/shear.module */ "./src/app/modules/root-modules/shear.module.ts");
/* harmony import */ var _search_movies_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-movies-routing.module */ "./src/app/modules/search-movies/search-movies-routing.module.ts");







const components = [
    src_app_components_search_movies_input_search_movie_input_search_movie_component__WEBPACK_IMPORTED_MODULE_4__["InputSearchMovieComponent"],
    src_app_components_search_movies_get_input_value_get_input_value_component__WEBPACK_IMPORTED_MODULE_3__["GetInputValueComponent"],
    src_app_components_search_movies_search_movies_layout_search_movies_layout_component__WEBPACK_IMPORTED_MODULE_2__["SearchMoviesLayoutComponent"],
];
let SearchMoviesModule = class SearchMoviesModule {
};
SearchMoviesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components],
        imports: [
            _root_modules_shear_module__WEBPACK_IMPORTED_MODULE_5__["SheardModule"],
            _search_movies_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchMoviesRoutingModule"]
        ],
        exports: [...components, _search_movies_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchMoviesRoutingModule"]]
    })
], SearchMoviesModule);



/***/ }),

/***/ "./src/app/services/category/category-string-manipulation-service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/category/category-string-manipulation-service.ts ***!
  \***************************************************************************/
/*! exports provided: CategoryStringManipulationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryStringManipulationService", function() { return CategoryStringManipulationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryStringManipulationService = class CategoryStringManipulationService {
    changeCategoryString(category) {
        const categoryForHttpReq = category.replace(/-/g, '_');
        const categoryText = category.replace(/-/g, ' ');
        const returnObject = {
            'categoryText': categoryText,
            'categoryForHttpReq': categoryForHttpReq
        };
        return returnObject;
    }
};
CategoryStringManipulationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryStringManipulationService);



/***/ }),

/***/ "./src/app/services/http-request/http-genre-list.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/http-request/http-genre-list.service.ts ***!
  \******************************************************************/
/*! exports provided: HttpGenreListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpGenreListService", function() { return HttpGenreListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpGenreListService = class HttpGenreListService {
    constructor(http) {
        this.http = http;
    }
    getGenreList() {
        const observable = this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
        return observable;
    }
};
HttpGenreListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpGenreListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpGenreListService);



/***/ }),

/***/ "./src/app/services/http-request/http-movie.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/http-request/http-movie.service.ts ***!
  \*************************************************************/
/*! exports provided: HttpMovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMovieService", function() { return HttpMovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpMovieService = class HttpMovieService {
    constructor(http) {
        this.http = http;
    }
    getMoviesDetailsById(id) {
        const observable = this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
        return observable;
    }
    getMovieTrailers(id) {
        const observable = this.http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
        return observable;
    }
    getMovieRecommendations(id) {
        const observable = this.http.get('https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
        return observable;
    }
    getMoviecredits(id) {
        const observable = this.http.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
        return observable;
    }
};
HttpMovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpMovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpMovieService);



/***/ }),

/***/ "./src/app/services/http-request/http-movies.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/http-request/http-movies.service.ts ***!
  \**************************************************************/
/*! exports provided: HttpMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMoviesService", function() { return HttpMoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpMoviesService = class HttpMoviesService {
    constructor(http) {
        this.http = http;
    }
    getMoviesByCategories(category, page) {
        const observable = this.http.get('https://api.themoviedb.org/3/movie/' + category + '?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US&page=' + page);
        return observable;
    }
    getMoviesByGenre(page, genre) {
        const observable = this.http.get('https://api.themoviedb.org/3/genre/' + genre + '/movies?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US&page=' + page);
        return observable;
    }
};
HttpMoviesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpMoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpMoviesService);



/***/ }),

/***/ "./src/app/services/http-request/http-person.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/http-request/http-person.service.ts ***!
  \**************************************************************/
/*! exports provided: HttpPersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpPersonService", function() { return HttpPersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpPersonService = class HttpPersonService {
    constructor(http) {
        this.http = http;
    }
    getPerson(id) {
        const observable = this.http.get('https://api.themoviedb.org/3/person/' + id + '?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
        return observable;
    }
    getPersonMoviesCast(id) {
        const observable = this.http.get('https://api.themoviedb.org/3/person/' + id + '/movie_credits?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
        return observable;
    }
};
HttpPersonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpPersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpPersonService);



/***/ }),

/***/ "./src/app/services/http-request/http-search-movie.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/http-request/http-search-movie.service.ts ***!
  \********************************************************************/
/*! exports provided: HttpSearchMovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpSearchMovieService", function() { return HttpSearchMovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpSearchMovieService = class HttpSearchMovieService {
    constructor(http) {
        this.http = http;
    }
    getSearch(searchVolue, page) {
        const observable = this.http.get('https://api.themoviedb.org/3/search/movie?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US&query='
            + searchVolue + '&page=' + page + '&include_adult=false');
        return observable;
    }
};
HttpSearchMovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpSearchMovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpSearchMovieService);



/***/ }),

/***/ "./src/app/services/pager/load-next-10-pages.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/pager/load-next-10-pages.service.ts ***!
  \**************************************************************/
/*! exports provided: LoadNext10PagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNext10PagesService", function() { return LoadNext10PagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoadNext10PagesService = class LoadNext10PagesService {
    constructor(router) {
        this.router = router;
    }
    loadNext10PageForListByGenderOrByCategory(pagesArray, genreName, genreId, categoryName, search) {
        pagesArray = pagesArray.map(a => a + 10);
        if (genreName) {
            this.router.navigateByUrl(`/movie-list/genre/${genreName}/${genreId}/${pagesArray[0]}`);
        }
        else if (categoryName) {
            this.router.navigateByUrl(`/movie-list/category/${categoryName}/${pagesArray[0]}`);
        }
        else {
            this.router.navigateByUrl(`/movie-list/search/${search}/${pagesArray[0]}`);
        }
        return pagesArray;
    }
};
LoadNext10PagesService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoadNext10PagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadNext10PagesService);



/***/ }),

/***/ "./src/app/services/pager/load-next-page.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/pager/load-next-page.service.ts ***!
  \**********************************************************/
/*! exports provided: LoadNextPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextPageService", function() { return LoadNextPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoadNextPageService = class LoadNextPageService {
    constructor(router) {
        this.router = router;
    }
    loadNextPageForListByGenderOrCategory(currentPage, genreName, genreId, categoryName, search) {
        currentPage++;
        if (genreName) {
            this.router.navigateByUrl(`/movie-list/genre/${genreName}/${genreId}/${currentPage}`);
        }
        else if (categoryName) {
            this.router.navigateByUrl(`/movie-list/category/${categoryName}/${currentPage}`);
        }
        else {
            this.router.navigateByUrl(`/movie-list/search/${search}/${currentPage}`);
        }
    }
};
LoadNextPageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoadNextPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadNextPageService);



/***/ }),

/***/ "./src/app/services/pager/load-previous-10-pages.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/pager/load-previous-10-pages.service.ts ***!
  \******************************************************************/
/*! exports provided: LoadPrevious10PagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPrevious10PagesService", function() { return LoadPrevious10PagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoadPrevious10PagesService = class LoadPrevious10PagesService {
    constructor(router) {
        this.router = router;
    }
    loadPrevious10PagesForListByGenderOrCategory(pagesArray, genreName, genreId, categoryName, search) {
        pagesArray = pagesArray.map(a => Number(a) - 10);
        if (genreName) {
            this.router.navigateByUrl(`/movie-list/genre/${genreName}/${genreId}/${pagesArray[9]}`);
        }
        else if (categoryName) {
            this.router.navigateByUrl(`/movie-list/category/${categoryName}/${pagesArray[9]}`);
        }
        else {
            this.router.navigateByUrl(`/movie-list/search/${search}/${pagesArray[9]}`);
        }
        return pagesArray;
    }
};
LoadPrevious10PagesService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoadPrevious10PagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadPrevious10PagesService);



/***/ }),

/***/ "./src/app/services/pager/load-previous-page.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/pager/load-previous-page.service.ts ***!
  \**************************************************************/
/*! exports provided: LoadPreviousPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPreviousPageService", function() { return LoadPreviousPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoadPreviousPageService = class LoadPreviousPageService {
    constructor(router) {
        this.router = router;
    }
    loadPreviousPageForListByGenderOrCategory(currentPage, genreName, genreId, categoryName, search) {
        currentPage--;
        if (genreName) {
            this.router.navigateByUrl(`/movie-list/genre/${genreName}/${genreId}/${currentPage}`);
        }
        else if (categoryName) {
            this.router.navigateByUrl(`/movie-list/category/${categoryName}/${currentPage}`);
        }
        else {
            this.router.navigateByUrl(`/movie-list/search/${search}/${currentPage}`);
        }
    }
};
LoadPreviousPageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoadPreviousPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadPreviousPageService);



/***/ }),

/***/ "./src/app/services/pager/load-specific-page.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/pager/load-specific-page.service.ts ***!
  \**************************************************************/
/*! exports provided: LoadSpecificPagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSpecificPagesService", function() { return LoadSpecificPagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoadSpecificPagesService = class LoadSpecificPagesService {
    constructor(router) {
        this.router = router;
    }
    loadSpecificPageForListByGenderOrCategory(page, genreName, genreId, categoryName, search) {
        if (genreName) {
            this.router.navigateByUrl(`/movie-list/genre/${genreName}/${genreId}/${page}`);
        }
        else if (categoryName) {
            this.router.navigateByUrl(`/movie-list/category/${categoryName}/${page}`);
        }
        else {
            this.router.navigateByUrl(`/movie-list/search/${search}/${page}`);
        }
    }
};
LoadSpecificPagesService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoadSpecificPagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadSpecificPagesService);



/***/ }),

/***/ "./src/app/services/pager/return-page.sevice.ts":
/*!******************************************************!*\
  !*** ./src/app/services/pager/return-page.sevice.ts ***!
  \******************************************************/
/*! exports provided: ReturnPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnPageService", function() { return ReturnPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _load_next_10_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-next-10-pages.service */ "./src/app/services/pager/load-next-10-pages.service.ts");
/* harmony import */ var _load_next_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-next-page.service */ "./src/app/services/pager/load-next-page.service.ts");
/* harmony import */ var _load_previous_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load-previous-page.service */ "./src/app/services/pager/load-previous-page.service.ts");
/* harmony import */ var _load_previous_10_pages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./load-previous-10-pages.service */ "./src/app/services/pager/load-previous-10-pages.service.ts");
/* harmony import */ var _load_specific_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./load-specific-page.service */ "./src/app/services/pager/load-specific-page.service.ts");







let ReturnPageService = class ReturnPageService {
    constructor(loadNext10Pages, loadNextPage, loadPrevious10Pages, loadPreviousPage, loadSpecificPages) {
        this.loadNext10Pages = loadNext10Pages;
        this.loadNextPage = loadNextPage;
        this.loadPrevious10Pages = loadPrevious10Pages;
        this.loadPreviousPage = loadPreviousPage;
        this.loadSpecificPages = loadSpecificPages;
    }
};
ReturnPageService.ctorParameters = () => [
    { type: _load_next_10_pages_service__WEBPACK_IMPORTED_MODULE_2__["LoadNext10PagesService"] },
    { type: _load_next_page_service__WEBPACK_IMPORTED_MODULE_3__["LoadNextPageService"] },
    { type: _load_previous_10_pages_service__WEBPACK_IMPORTED_MODULE_5__["LoadPrevious10PagesService"] },
    { type: _load_previous_page_service__WEBPACK_IMPORTED_MODULE_4__["LoadPreviousPageService"] },
    { type: _load_specific_page_service__WEBPACK_IMPORTED_MODULE_6__["LoadSpecificPagesService"] }
];
ReturnPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReturnPageService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_modules_root_modules_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/modules/root-modules/app.module */ "./src/app/modules/root-modules/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_modules_root_modules_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adile\OneDrive\שולחן העבודה\תכנות\פרוייקטים\angular\MoviesViewer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map