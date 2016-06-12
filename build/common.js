/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	* @module
	* @description
	* Starting point to import all public core APIs.
	*/
	__export(__webpack_require__(9));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	var application_ref_1 = __webpack_require__(37);
	exports.createPlatform = application_ref_1.createPlatform;
	exports.assertPlatform = application_ref_1.assertPlatform;
	exports.disposePlatform = application_ref_1.disposePlatform;
	exports.getPlatform = application_ref_1.getPlatform;
	exports.coreBootstrap = application_ref_1.coreBootstrap;
	exports.coreLoadAndBootstrap = application_ref_1.coreLoadAndBootstrap;
	exports.createNgZone = application_ref_1.createNgZone;
	exports.PlatformRef = application_ref_1.PlatformRef;
	exports.ApplicationRef = application_ref_1.ApplicationRef;
	var application_tokens_1 = __webpack_require__(63);
	exports.APP_ID = application_tokens_1.APP_ID;
	exports.APP_INITIALIZER = application_tokens_1.APP_INITIALIZER;
	exports.PACKAGE_ROOT_URL = application_tokens_1.PACKAGE_ROOT_URL;
	exports.PLATFORM_INITIALIZER = application_tokens_1.PLATFORM_INITIALIZER;
	__export(__webpack_require__(85));
	__export(__webpack_require__(86));
	__export(__webpack_require__(87));
	var debug_node_1 = __webpack_require__(92);
	exports.DebugElement = debug_node_1.DebugElement;
	exports.DebugNode = debug_node_1.DebugNode;
	exports.asNativeElements = debug_node_1.asNativeElements;
	exports.getDebugNode = debug_node_1.getDebugNode;
	__export(__webpack_require__(64));
	__export(__webpack_require__(93));
	__export(__webpack_require__(94));
	__export(__webpack_require__(95));
	__export(__webpack_require__(96));
	__export(__webpack_require__(28));
	var profile_1 = __webpack_require__(73);
	exports.wtfCreateScope = profile_1.wtfCreateScope;
	exports.wtfLeave = profile_1.wtfLeave;
	exports.wtfStartTimeRange = profile_1.wtfStartTimeRange;
	exports.wtfEndTimeRange = profile_1.wtfEndTimeRange;
	var lang_1 = __webpack_require__(11);
	exports.Type = lang_1.Type;
	exports.enableProdMode = lang_1.enableProdMode;
	var async_1 = __webpack_require__(39);
	exports.EventEmitter = async_1.EventEmitter;
	var exceptions_1 = __webpack_require__(22);
	exports.ExceptionHandler = exceptions_1.ExceptionHandler;
	exports.WrappedException = exceptions_1.WrappedException;
	exports.BaseException = exceptions_1.BaseException;
	__export(__webpack_require__(97));
	//# sourceMappingURL=index.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* This indirection is needed to free up Component, etc symbols in the public API
	* to be used by the decorator versions of these annotations.
	*/
	var di_1 = __webpack_require__(10);
	exports.QueryMetadata = di_1.QueryMetadata;
	exports.ContentChildrenMetadata = di_1.ContentChildrenMetadata;
	exports.ContentChildMetadata = di_1.ContentChildMetadata;
	exports.ViewChildrenMetadata = di_1.ViewChildrenMetadata;
	exports.ViewQueryMetadata = di_1.ViewQueryMetadata;
	exports.ViewChildMetadata = di_1.ViewChildMetadata;
	exports.AttributeMetadata = di_1.AttributeMetadata;
	var directives_1 = __webpack_require__(14);
	exports.ComponentMetadata = directives_1.ComponentMetadata;
	exports.DirectiveMetadata = directives_1.DirectiveMetadata;
	exports.PipeMetadata = directives_1.PipeMetadata;
	exports.InputMetadata = directives_1.InputMetadata;
	exports.OutputMetadata = directives_1.OutputMetadata;
	exports.HostBindingMetadata = directives_1.HostBindingMetadata;
	exports.HostListenerMetadata = directives_1.HostListenerMetadata;
	var view_1 = __webpack_require__(16);
	exports.ViewMetadata = view_1.ViewMetadata;
	exports.ViewEncapsulation = view_1.ViewEncapsulation;
	var di_2 = __webpack_require__(10);
	var directives_2 = __webpack_require__(14);
	var view_2 = __webpack_require__(16);
	var decorators_1 = __webpack_require__(17);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ComponentMetadata.
	/**
	 * Declare reusable UI building blocks for an application.
	 *
	 * Each Angular component requires a single `@Component` annotation. The `@Component`
	 * annotation specifies when a component is instantiated, and which properties and hostListeners it
	 * binds to.
	 *
	 * When a component is instantiated, Angular
	 * - creates a shadow DOM for the component.
	 * - loads the selected template into the shadow DOM.
	 * - creates all the injectable objects configured with `providers` and `viewProviders`.
	 *
	 * All template expressions and statements are then evaluated against the component instance.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the component class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the component.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='component'}
	 */
	exports.Component = decorators_1.makeDecorator(directives_2.ComponentMetadata, function (fn) { return fn.View = View; });
	// TODO(alexeagle): remove the duplication of this doc. It is copied from DirectiveMetadata.
	/**
	 * Directives allow you to attach behavior to elements in the DOM.
	 *
	 * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
	 *
	 * A directive consists of a single directive annotation and a controller class. When the
	 * directive's `selector` matches
	 * elements in the DOM, the following steps occur:
	 *
	 * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
	 * arguments.
	 * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
	 * depth-first order,
	 *    as declared in the HTML.
	 *
	 * ## Understanding How Injection Works
	 *
	 * There are three stages of injection resolution.
	 * - *Pre-existing Injectors*:
	 *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
	 * the dependency was
	 *     specified as `@Optional`, returns `null`.
	 *   - The platform injector resolves browser singleton resources, such as: cookies, title,
	 * location, and others.
	 * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
	 * the same parent-child hierarchy
	 *     as the component instances in the DOM.
	 * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
	 * element has an `ElementInjector`
	 *     which follow the same parent-child hierarchy as the DOM elements themselves.
	 *
	 * When a template is instantiated, it also must instantiate the corresponding directives in a
	 * depth-first order. The
	 * current `ElementInjector` resolves the constructor dependencies for each directive.
	 *
	 * Angular then resolves dependencies as follows, according to the order in which they appear in the
	 * {@link ViewMetadata}:
	 *
	 * 1. Dependencies on the current element
	 * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
	 * 3. Dependencies on component injectors and their parents until it encounters the root component
	 * 4. Dependencies on pre-existing injectors
	 *
	 *
	 * The `ElementInjector` can inject other directives, element-specific special objects, or it can
	 * delegate to the parent
	 * injector.
	 *
	 * To inject other directives, declare the constructor parameter as:
	 * - `directive:DirectiveType`: a directive on the current element only
	 * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
	 * element and the
	 *    Shadow DOM root.
	 * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
	 * directives.
	 * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
	 * child directives.
	 *
	 * To inject element-specific special objects, declare the constructor parameter as:
	 * - `element: ElementRef` to obtain a reference to logical element in the view.
	 * - `viewContainer: ViewContainerRef` to control child template instantiation, for
	 * {@link DirectiveMetadata} directives only
	 * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
	 *
	 * ### Example
	 *
	 * The following example demonstrates how dependency injection resolves constructor arguments in
	 * practice.
	 *
	 *
	 * Assume this HTML template:
	 *
	 * ```
	 * <div dependency="1">
	 *   <div dependency="2">
	 *     <div dependency="3" my-directive>
	 *       <div dependency="4">
	 *         <div dependency="5"></div>
	 *       </div>
	 *       <div dependency="6"></div>
	 *     </div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * With the following `dependency` decorator and `SomeService` injectable class.
	 *
	 * ```
	 * @Injectable()
	 * class SomeService {
	 * }
	 *
	 * @Directive({
	 *   selector: '[dependency]',
	 *   inputs: [
	 *     'id: dependency'
	 *   ]
	 * })
	 * class Dependency {
	 *   id:string;
	 * }
	 * ```
	 *
	 * Let's step through the different ways in which `MyDirective` could be declared...
	 *
	 *
	 * ### No injection
	 *
	 * Here the constructor is declared with no arguments, therefore nothing is injected into
	 * `MyDirective`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor() {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with no dependencies.
	 *
	 *
	 * ### Component-level injection
	 *
	 * Directives can inject any injectable instance from the closest component injector or any of its
	 * parents.
	 *
	 * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
	 * from the parent
	 * component's injector.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(someService: SomeService) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a dependency on `SomeService`.
	 *
	 *
	 * ### Injecting a directive from the current element
	 *
	 * Directives can inject other directives declared on the current element.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(dependency: Dependency) {
	 *     expect(dependency.id).toEqual(3);
	 *   }
	 * }
	 * ```
	 * This directive would be instantiated with `Dependency` declared at the same element, in this case
	 * `dependency="3"`.
	 *
	 * ### Injecting a directive from any ancestor elements
	 *
	 * Directives can inject other directives declared on any ancestor element (in the current Shadow
	 * DOM), i.e. on the current element, the
	 * parent element, or its parents.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Host() dependency: Dependency) {
	 *     expect(dependency.id).toEqual(2);
	 *   }
	 * }
	 * ```
	 *
	 * `@Host` checks the current element, the parent, as well as its parents recursively. If
	 * `dependency="2"` didn't
	 * exist on the direct parent, this injection would
	 * have returned
	 * `dependency="1"`.
	 *
	 *
	 * ### Injecting a live collection of direct child directives
	 *
	 *
	 * A directive can also query for other child directives. Since parent directives are instantiated
	 * before child directives, a directive can't simply inject the list of child directives. Instead,
	 * the directive injects a {@link QueryList}, which updates its contents as children are added,
	 * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
	 * `ngIf`, or an `ngSwitch`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
	 * 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
	 *
	 * ### Injecting a live collection of descendant directives
	 *
	 * By passing the descendant flag to `@Query` above, we can include the children of the child
	 * elements.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
	 *
	 * ### Optional injection
	 *
	 * The normal behavior of directives is to return an error when a specified dependency cannot be
	 * resolved. If you
	 * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
	 * with `@Optional()`.
	 * This explicitly permits the author of a template to treat some of the surrounding directives as
	 * optional.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Optional() dependency:Dependency) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a `Dependency` directive found on the current element.
	 * If none can be
	 * found, the injector supplies `null` instead of throwing an error.
	 *
	 * ### Example
	 *
	 * Here we use a decorator directive to simply define basic tool-tip behavior.
	 *
	 * ```
	 * @Directive({
	 *   selector: '[tooltip]',
	 *   inputs: [
	 *     'text: tooltip'
	 *   ],
	 *   host: {
	 *     '(mouseenter)': 'onMouseEnter()',
	 *     '(mouseleave)': 'onMouseLeave()'
	 *   }
	 * })
	 * class Tooltip{
	 *   text:string;
	 *   overlay:Overlay; // NOT YET IMPLEMENTED
	 *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
	 *
	 *   constructor(overlayManager:OverlayManager) {
	 *     this.overlay = overlay;
	 *   }
	 *
	 *   onMouseEnter() {
	 *     // exact signature to be determined
	 *     this.overlay = this.overlayManager.open(text, ...);
	 *   }
	 *
	 *   onMouseLeave() {
	 *     this.overlay.close();
	 *     this.overlay = null;
	 *   }
	 * }
	 * ```
	 * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
	 * `tooltip` selector,
	 * like so:
	 *
	 * ```
	 * <div tooltip="some text here"></div>
	 * ```
	 *
	 * Directives can also control the instantiation, destruction, and positioning of inline template
	 * elements:
	 *
	 * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
	 * runtime.
	 * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
	 * location in the current view
	 * where these actions are performed.
	 *
	 * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
	 * `<template>` element. Thus a
	 * directive in a child view cannot inject the directive that created it.
	 *
	 * Since directives that create views via ViewContainers are common in Angular, and using the full
	 * `<template>` element syntax is wordy, Angular
	 * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
	 * equivalent.
	 *
	 * Thus,
	 *
	 * ```
	 * <ul>
	 *   <li *foo="bar" title="text"></li>
	 * </ul>
	 * ```
	 *
	 * Expands in use to:
	 *
	 * ```
	 * <ul>
	 *   <template [foo]="bar">
	 *     <li title="text"></li>
	 *   </template>
	 * </ul>
	 * ```
	 *
	 * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
	 * the directive
	 * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the directive class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the directive.
	 *
	 * ### Example
	 *
	 * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
	 *
	 * Here is a simple directive that triggers on an `unless` selector:
	 *
	 * ```
	 * @Directive({
	 *   selector: '[unless]',
	 *   inputs: ['unless']
	 * })
	 * export class Unless {
	 *   viewContainer: ViewContainerRef;
	 *   templateRef: TemplateRef;
	 *   prevCondition: boolean;
	 *
	 *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
	 *     this.viewContainer = viewContainer;
	 *     this.templateRef = templateRef;
	 *     this.prevCondition = null;
	 *   }
	 *
	 *   set unless(newCondition) {
	 *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
	 *       this.prevCondition = true;
	 *       this.viewContainer.clear();
	 *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
	 *       this.prevCondition = false;
	 *       this.viewContainer.create(this.templateRef);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * We can then use this `unless` selector in a template:
	 * ```
	 * <ul>
	 *   <li *unless="expr"></li>
	 * </ul>
	 * ```
	 *
	 * Once the directive instantiates the child view, the shorthand notation for the template expands
	 * and the result is:
	 *
	 * ```
	 * <ul>
	 *   <template [unless]="exp">
	 *     <li></li>
	 *   </template>
	 *   <li></li>
	 * </ul>
	 * ```
	 *
	 * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
	 * the instantiated
	 * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
	 */
	exports.Directive = decorators_1.makeDecorator(directives_2.DirectiveMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewMetadata.
	/**
	 * Metadata properties available for configuring Views.
	 *
	 * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
	 * `@View` annotation specifies the HTML template to use, and lists the directives that are active
	 * within the template.
	 *
	 * When a component is instantiated, the template is loaded into the component's shadow root, and
	 * the expressions and statements in the template are evaluated against the component.
	 *
	 * For details on the `@Component` annotation, see {@link ComponentMetadata}.
	 *
	 * ### Example
	 *
	 * ```
	 * @Component({
	 *   selector: 'greet',
	 *   template: 'Hello {{name}}!',
	 *   directives: [GreetUser, Bold]
	 * })
	 * class Greet {
	 *   name: string;
	 *
	 *   constructor() {
	 *     this.name = 'World';
	 *   }
	 * }
	 * ```
	 */
	var View = decorators_1.makeDecorator(view_2.ViewMetadata, function (fn) { return fn.View = View; });
	/**
	 * Specifies that a constant attribute value should be injected.
	 *
	 * The directive can inject constant string literals of host element attributes.
	 *
	 * ### Example
	 *
	 * Suppose we have an `<input>` element and want to know its `type`.
	 *
	 * ```html
	 * <input type="text">
	 * ```
	 *
	 * A decorator can inject string literal `text` like so:
	 *
	 * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
	 */
	exports.Attribute = decorators_1.makeParamDecorator(di_2.AttributeMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from QueryMetadata.
	/**
	 * Declares an injectable parameter to be a live list of directives or variable
	 * bindings from the content children of a directive.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
	 *
	 * Assume that `<tabs>` component would like to get a list its children `<pane>`
	 * components as shown in this example:
	 *
	 * ```html
	 * <tabs>
	 *   <pane title="Overview">...</pane>
	 *   <pane *ngFor="let o of objects" [title]="o.title">{{o.text}}</pane>
	 * </tabs>
	 * ```
	 *
	 * The preferred solution is to query for `Pane` directives using this decorator.
	 *
	 * ```javascript
	 * @Component({
	 *   selector: 'pane',
	 *   inputs: ['title']
	 * })
	 * class Pane {
	 *   title:string;
	 * }
	 *
	 * @Component({
	 *  selector: 'tabs',
	 *  template: `
	 *    <ul>
	 *      <li *ngFor="let pane of panes">{{pane.title}}</li>
	 *    </ul>
	 *    <ng-content></ng-content>
	 *  `
	 * })
	 * class Tabs {
	 *   panes: QueryList<Pane>;
	 *   constructor(@Query(Pane) panes:QueryList<Pane>) {
	 *     this.panes = panes;
	 *   }
	 * }
	 * ```
	 *
	 * A query can look for variable bindings by passing in a string with desired binding symbol.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/sT2j25cH1dURAyBRCKx1?p=preview))
	 * ```html
	 * <seeker>
	 *   <div #findme>...</div>
	 * </seeker>
	 *
	 * @Component({ selector: 'seeker' })
	 * class seeker {
	 *   constructor(@Query('findme') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * In this case the object that is injected depend on the type of the variable
	 * binding. It can be an ElementRef, a directive or a component.
	 *
	 * Passing in a comma separated list of variable bindings will query for all of them.
	 *
	 * ```html
	 * <seeker>
	 *   <div #findMe>...</div>
	 *   <div #findMeToo>...</div>
	 * </seeker>
	 *
	 *  @Component({
	 *   selector: 'seeker'
	 * })
	 * class Seeker {
	 *   constructor(@Query('findMe, findMeToo') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * Configure whether query looks for direct children or all descendants
	 * of the querying element, by using the `descendants` parameter.
	 * It is set to `false` by default.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/wtGeB977bv7qvA5FTYl9?p=preview))
	 * ```html
	 * <container #first>
	 *   <item>a</item>
	 *   <item>b</item>
	 *   <container #second>
	 *     <item>c</item>
	 *   </container>
	 * </container>
	 * ```
	 *
	 * When querying for items, the first container will see only `a` and `b` by default,
	 * but with `Query(TextDirective, {descendants: true})` it will see `c` too.
	 *
	 * The queried directives are kept in a depth-first pre-order with respect to their
	 * positions in the DOM.
	 *
	 * Query does not look deep into any subcomponent views.
	 *
	 * Query is updated as part of the change-detection cycle. Since change detection
	 * happens after construction of a directive, QueryList will always be empty when observed in the
	 * constructor.
	 *
	 * The injected object is an unmodifiable live list.
	 * See {@link QueryList} for more details.
	 */
	exports.Query = decorators_1.makeParamDecorator(di_2.QueryMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ContentChildrenMetadata.
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChildren(ChildDirective) contentChildren: QueryList<ChildDirective>;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChildren is set
	 *   }
	 * }
	 * ```
	 */
	exports.ContentChildren = decorators_1.makePropDecorator(di_2.ContentChildrenMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ContentChildMetadata.
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChild(ChildDirective) contentChild;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChild is set
	 *   }
	 * }
	 * ```
	 */
	exports.ContentChild = decorators_1.makePropDecorator(di_2.ContentChildMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewChildrenMetadata.
	/**
	 * Declares a list of child element references.
	 *
	 * Angular automatically updates the list when the DOM is updated.
	 *
	 * `ViewChildren` takes a argument to select elements.
	 *
	 * - If the argument is a type, directives or components with the type will be bound.
	 *
	 * - If the argument is a string, the string is interpreted as a list of comma-separated selectors.
	 * For each selector, an element containing the matching template variable (e.g. `#child`) will be
	 * bound.
	 *
	 * View children are set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren(ChildCmp) children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp #child1></child-cmp>
	 *     <child-cmp #child2></child-cmp>
	 *     <child-cmp #child3></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren('child1,child2,child3') children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 *
	 * See also: [ViewChildrenMetadata]
	 */
	exports.ViewChildren = decorators_1.makePropDecorator(di_2.ViewChildrenMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewChildMetadata.
	/**
	 * Declares a reference to a child element.
	 *
	 * `ViewChildren` takes a argument to select elements.
	 *
	 * - If the argument is a type, a directive or a component with the type will be bound.
	 *
	 * - If the argument is a string, the string is interpreted as a selector. An element containing the
	 * matching template variable (e.g. `#child`) will be bound.
	 *
	 * In either case, `@ViewChild()` assigns the first (looking from above) element if there are
	 * multiple matches.
	 *
	 * View child is set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild(ChildCmp) child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp #child></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild('child') child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 * See also: [ViewChildMetadata]
	 */
	exports.ViewChild = decorators_1.makePropDecorator(di_2.ViewChildMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewQueryMetadata.
	/**
	 * Similar to {@link QueryMetadata}, but querying the component view, instead of
	 * the content children.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/eNsFHDf7YjyM6IzKxM1j?p=preview))
	 *
	 * ```javascript
	 * @Component({
	 *   ...,
	 *   template: `
	 *     <item> a </item>
	 *     <item> b </item>
	 *     <item> c </item>
	 *   `
	 * })
	 * class MyComponent {
	 *   shown: boolean;
	 *
	 *   constructor(private @Query(Item) items:QueryList<Item>) {
	 *     items.changes.subscribe(() => console.log(items.length));
	 *   }
	 * }
	 * ```
	 *
	 * Supports the same querying parameters as {@link QueryMetadata}, except
	 * `descendants`. This always queries the whole view.
	 *
	 * As `shown` is flipped between true and false, items will contain zero of one
	 * items.
	 *
	 * Specifies that a {@link QueryList} should be injected.
	 *
	 * The injected object is an iterable and observable live list.
	 * See {@link QueryList} for more details.
	 */
	exports.ViewQuery = decorators_1.makeParamDecorator(di_2.ViewQueryMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from PipeMetadata.
	/**
	 * Declare reusable pipe function.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='pipe'}
	 */
	exports.Pipe = decorators_1.makeDecorator(directives_2.PipeMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from InputMetadata.
	/**
	 * Declares a data-bound input property.
	 *
	 * Angular automatically updates data-bound properties during change detection.
	 *
	 * `InputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * The following example creates a component with two input properties.
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'bank-account',
	 *   template: `
	 *     Bank Name: {{bankName}}
	 *     Account Id: {{id}}
	 *   `
	 * })
	 * class BankAccount {
	 *   @Input() bankName: string;
	 *   @Input('account-id') id: string;
	 *
	 *   // this property is not bound, and won't be automatically updated by Angular
	 *   normalizedBankName: string;
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
	 *   `,
	 *   directives: [BankAccount]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 */
	exports.Input = decorators_1.makePropDecorator(directives_2.InputMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from OutputMetadata.
	/**
	 * Declares an event-bound output property.
	 *
	 * When an output property emits an event, an event handler attached to that event
	 * the template is invoked.
	 *
	 * `OutputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Directive({
	 *   selector: 'interval-dir',
	 * })
	 * class IntervalDir {
	 *   @Output() everySecond = new EventEmitter();
	 *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
	 *
	 *   constructor() {
	 *     setInterval(() => this.everySecond.emit("event"), 1000);
	 *     setInterval(() => this.five5Secs.emit("event"), 5000);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
	 *     </interval-dir>
	 *   `,
	 *   directives: [IntervalDir]
	 * })
	 * class App {
	 *   everySecond() { console.log('second'); }
	 *   everyFiveSeconds() { console.log('five seconds'); }
	 * }
	 * bootstrap(App);
	 * ```
	 */
	exports.Output = decorators_1.makePropDecorator(directives_2.OutputMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from HostBindingMetadata.
	/**
	 * Declares a host property binding.
	 *
	 * Angular automatically checks host property bindings during change detection.
	 * If a binding changes, it will update the host element of the directive.
	 *
	 * `HostBindingMetadata` takes an optional parameter that specifies the property
	 * name of the host element that will be updated. When not provided,
	 * the class property name is used.
	 *
	 * ### Example
	 *
	 * The following example creates a directive that sets the `valid` and `invalid` classes
	 * on the DOM element that has ngModel directive on it.
	 *
	 * ```typescript
	 * @Directive({selector: '[ngModel]'})
	 * class NgModelStatus {
	 *   constructor(public control:NgModel) {}
	 *   @HostBinding('[class.valid]') get valid { return this.control.valid; }
	 *   @HostBinding('[class.invalid]') get invalid { return this.control.invalid; }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<input [(ngModel)]="prop">`,
	 *   directives: [FORM_DIRECTIVES, NgModelStatus]
	 * })
	 * class App {
	 *   prop;
	 * }
	 *
	 * bootstrap(App);
	 * ```
	 */
	exports.HostBinding = decorators_1.makePropDecorator(directives_2.HostBindingMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from HostListenerMetadata.
	/**
	 * Declares a host listener.
	 *
	 * Angular will invoke the decorated method when the host element emits the specified event.
	 *
	 * If the decorated method returns `false`, then `preventDefault` is applied on the DOM
	 * event.
	 *
	 * ### Example
	 *
	 * The following example declares a directive that attaches a click listener to the button and
	 * counts clicks.
	 *
	 * ```typescript
	 * @Directive({selector: 'button[counting]'})
	 * class CountClicks {
	 *   numberOfClicks = 0;
	 *
	 *   @HostListener('click', ['$event.target'])
	 *   onClick(btn) {
	 *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<button counting>Increment</button>`,
	 *   directives: [CountClicks]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 */
	exports.HostListener = decorators_1.makePropDecorator(directives_2.HostListenerMetadata);
	//# sourceMappingURL=metadata.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(11);
	var metadata_1 = __webpack_require__(12);
	var forward_ref_1 = __webpack_require__(13);
	/**
	 * Specifies that a constant attribute value should be injected.
	 *
	 * The directive can inject constant string literals of host element attributes.
	 *
	 * ### Example
	 *
	 * Suppose we have an `<input>` element and want to know its `type`.
	 *
	 * ```html
	 * <input type="text">
	 * ```
	 *
	 * A decorator can inject string literal `text` like so:
	 *
	 * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
	 * @ts2dart_const
	 */
	var AttributeMetadata = (function (_super) {
	    __extends(AttributeMetadata, _super);
	    function AttributeMetadata(attributeName) {
	        _super.call(this);
	        this.attributeName = attributeName;
	    }
	    Object.defineProperty(AttributeMetadata.prototype, "token", {
	        get: function () {
	            // Normally one would default a token to a type of an injected value but here
	            // the type of a variable is "string" and we can't use primitive type as a return value
	            // so we use instance of Attribute instead. This doesn't matter much in practice as arguments
	            // with @Attribute annotation are injected by ElementInjector that doesn't take tokens into
	            // account.
	            return this;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AttributeMetadata.prototype.toString = function () { return "@Attribute(" + lang_1.stringify(this.attributeName) + ")"; };
	    return AttributeMetadata;
	}(metadata_1.DependencyMetadata));
	exports.AttributeMetadata = AttributeMetadata;
	/**
	 * Declares an injectable parameter to be a live list of directives or variable
	 * bindings from the content children of a directive.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
	 *
	 * Assume that `<tabs>` component would like to get a list its children `<pane>`
	 * components as shown in this example:
	 *
	 * ```html
	 * <tabs>
	 *   <pane title="Overview">...</pane>
	 *   <pane *ngFor="let o of objects" [title]="o.title">{{o.text}}</pane>
	 * </tabs>
	 * ```
	 *
	 * The preferred solution is to query for `Pane` directives using this decorator.
	 *
	 * ```javascript
	 * @Component({
	 *   selector: 'pane',
	 *   inputs: ['title']
	 * })
	 * class Pane {
	 *   title:string;
	 * }
	 *
	 * @Component({
	 *  selector: 'tabs',
	 *  template: `
	 *    <ul>
	 *      <li *ngFor="let pane of panes">{{pane.title}}</li>
	 *    </ul>
	 *    <ng-content></ng-content>
	 *  `
	 * })
	 * class Tabs {
	 *   panes: QueryList<Pane>;
	 *   constructor(@Query(Pane) panes:QueryList<Pane>) {
	  *    this.panes = panes;
	  *  }
	 * }
	 * ```
	 *
	 * A query can look for variable bindings by passing in a string with desired binding symbol.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/sT2j25cH1dURAyBRCKx1?p=preview))
	 * ```html
	 * <seeker>
	 *   <div #findme>...</div>
	 * </seeker>
	 *
	 * @Component({ selector: 'seeker' })
	 * class Seeker {
	 *   constructor(@Query('findme') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * In this case the object that is injected depend on the type of the variable
	 * binding. It can be an ElementRef, a directive or a component.
	 *
	 * Passing in a comma separated list of variable bindings will query for all of them.
	 *
	 * ```html
	 * <seeker>
	 *   <div #find-me>...</div>
	 *   <div #find-me-too>...</div>
	 * </seeker>
	 *
	 *  @Component({
	 *   selector: 'seeker'
	 * })
	 * class Seeker {
	 *   constructor(@Query('findMe, findMeToo') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * Configure whether query looks for direct children or all descendants
	 * of the querying element, by using the `descendants` parameter.
	 * It is set to `false` by default.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/wtGeB977bv7qvA5FTYl9?p=preview))
	 * ```html
	 * <container #first>
	 *   <item>a</item>
	 *   <item>b</item>
	 *   <container #second>
	 *     <item>c</item>
	 *   </container>
	 * </container>
	 * ```
	 *
	 * When querying for items, the first container will see only `a` and `b` by default,
	 * but with `Query(TextDirective, {descendants: true})` it will see `c` too.
	 *
	 * The queried directives are kept in a depth-first pre-order with respect to their
	 * positions in the DOM.
	 *
	 * Query does not look deep into any subcomponent views.
	 *
	 * Query is updated as part of the change-detection cycle. Since change detection
	 * happens after construction of a directive, QueryList will always be empty when observed in the
	 * constructor.
	 *
	 * The injected object is an unmodifiable live list.
	 * See {@link QueryList} for more details.
	 * @ts2dart_const
	 */
	var QueryMetadata = (function (_super) {
	    __extends(QueryMetadata, _super);
	    function QueryMetadata(_selector, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.first, first = _d === void 0 ? false : _d, _e = _b.read, read = _e === void 0 ? null : _e;
	        _super.call(this);
	        this._selector = _selector;
	        this.descendants = descendants;
	        this.first = first;
	        this.read = read;
	    }
	    Object.defineProperty(QueryMetadata.prototype, "isViewQuery", {
	        /**
	         * always `false` to differentiate it with {@link ViewQueryMetadata}.
	         */
	        get: function () { return false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryMetadata.prototype, "selector", {
	        /**
	         * what this is querying for.
	         */
	        get: function () { return forward_ref_1.resolveForwardRef(this._selector); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryMetadata.prototype, "isVarBindingQuery", {
	        /**
	         * whether this is querying for a variable binding or a directive.
	         */
	        get: function () { return lang_1.isString(this.selector); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryMetadata.prototype, "varBindings", {
	        /**
	         * returns a list of variable bindings this is querying for.
	         * Only applicable if this is a variable bindings query.
	         */
	        get: function () { return this.selector.split(','); },
	        enumerable: true,
	        configurable: true
	    });
	    QueryMetadata.prototype.toString = function () { return "@Query(" + lang_1.stringify(this.selector) + ")"; };
	    return QueryMetadata;
	}(metadata_1.DependencyMetadata));
	exports.QueryMetadata = QueryMetadata;
	// TODO: add an example after ContentChildren and ViewChildren are in master
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChildren(ChildDirective) contentChildren: QueryList<ChildDirective>;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChildren is set
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ContentChildrenMetadata = (function (_super) {
	    __extends(ContentChildrenMetadata, _super);
	    function ContentChildrenMetadata(_selector, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.read, read = _d === void 0 ? null : _d;
	        _super.call(this, _selector, { descendants: descendants, read: read });
	    }
	    return ContentChildrenMetadata;
	}(QueryMetadata));
	exports.ContentChildrenMetadata = ContentChildrenMetadata;
	// TODO: add an example after ContentChild and ViewChild are in master
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChild(ChildDirective) contentChild;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChild is set
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ContentChildMetadata = (function (_super) {
	    __extends(ContentChildMetadata, _super);
	    function ContentChildMetadata(_selector, _a) {
	        var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
	        _super.call(this, _selector, { descendants: true, first: true, read: read });
	    }
	    return ContentChildMetadata;
	}(QueryMetadata));
	exports.ContentChildMetadata = ContentChildMetadata;
	/**
	 * Similar to {@link QueryMetadata}, but querying the component view, instead of
	 * the content children.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/eNsFHDf7YjyM6IzKxM1j?p=preview))
	 *
	 * ```javascript
	 * @Component({
	 *   ...,
	 *   template: `
	 *     <item> a </item>
	 *     <item> b </item>
	 *     <item> c </item>
	 *   `
	 * })
	 * class MyComponent {
	 *   shown: boolean;
	 *
	 *   constructor(private @ViewQuery(Item) items:QueryList<Item>) {
	 *     items.changes.subscribe(() => console.log(items.length));
	 *   }
	 * }
	 * ```
	 *
	 * Supports the same querying parameters as {@link QueryMetadata}, except
	 * `descendants`. This always queries the whole view.
	 *
	 * As `shown` is flipped between true and false, items will contain zero of one
	 * items.
	 *
	 * Specifies that a {@link QueryList} should be injected.
	 *
	 * The injected object is an iterable and observable live list.
	 * See {@link QueryList} for more details.
	 * @ts2dart_const
	 */
	var ViewQueryMetadata = (function (_super) {
	    __extends(ViewQueryMetadata, _super);
	    function ViewQueryMetadata(_selector, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.first, first = _d === void 0 ? false : _d, _e = _b.read, read = _e === void 0 ? null : _e;
	        _super.call(this, _selector, { descendants: descendants, first: first, read: read });
	    }
	    Object.defineProperty(ViewQueryMetadata.prototype, "isViewQuery", {
	        /**
	         * always `true` to differentiate it with {@link QueryMetadata}.
	         */
	        get: function () { return true; },
	        enumerable: true,
	        configurable: true
	    });
	    ViewQueryMetadata.prototype.toString = function () { return "@ViewQuery(" + lang_1.stringify(this.selector) + ")"; };
	    return ViewQueryMetadata;
	}(QueryMetadata));
	exports.ViewQueryMetadata = ViewQueryMetadata;
	/**
	 * Declares a list of child element references.
	 *
	 * Angular automatically updates the list when the DOM is updated.
	 *
	 * `ViewChildren` takes an argument to select elements.
	 *
	 * - If the argument is a type, directives or components with the type will be bound.
	 *
	 * - If the argument is a string, the string is interpreted as a list of comma-separated selectors.
	 * For each selector, an element containing the matching template variable (e.g. `#child`) will be
	 * bound.
	 *
	 * View children are set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren(ChildCmp) children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp #child1></child-cmp>
	 *     <child-cmp #child2></child-cmp>
	 *     <child-cmp #child3></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren('child1,child2,child3') children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ViewChildrenMetadata = (function (_super) {
	    __extends(ViewChildrenMetadata, _super);
	    function ViewChildrenMetadata(_selector, _a) {
	        var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
	        _super.call(this, _selector, { descendants: true, read: read });
	    }
	    return ViewChildrenMetadata;
	}(ViewQueryMetadata));
	exports.ViewChildrenMetadata = ViewChildrenMetadata;
	/**
	 *
	 * Declares a reference of child element.
	 *
	 * `ViewChildren` takes an argument to select elements.
	 *
	 * - If the argument is a type, a directive or a component with the type will be bound.
	 *
	 If the argument is a string, the string is interpreted as a selector. An element containing the
	 matching template variable (e.g. `#child`) will be bound.
	 *
	 * In either case, `@ViewChild()` assigns the first (looking from above) element if there are
	 multiple matches.
	 *
	 * View child is set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild(ChildCmp) child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp #child></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild('child') child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ViewChildMetadata = (function (_super) {
	    __extends(ViewChildMetadata, _super);
	    function ViewChildMetadata(_selector, _a) {
	        var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
	        _super.call(this, _selector, { descendants: true, first: true, read: read });
	    }
	    return ViewChildMetadata;
	}(ViewQueryMetadata));
	exports.ViewChildMetadata = ViewChildMetadata;
	//# sourceMappingURL=di.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	var _devMode = true;
	var _modeLocked = false;
	function lockMode() {
	    _modeLocked = true;
	}
	exports.lockMode = lockMode;
	/**
	 * Disable Angular's development mode, which turns off assertions and other
	 * checks within the framework.
	 *
	 * One important assertion this disables verifies that a change detection pass
	 * does not result in additional changes to any bindings (also known as
	 * unidirectional data flow).
	 */
	function enableProdMode() {
	    if (_modeLocked) {
	        // Cannot use BaseException as that ends up importing from facade/lang.
	        throw 'Cannot enable prod mode after platform setup.';
	    }
	    _devMode = false;
	}
	exports.enableProdMode = enableProdMode;
	function assertionsEnabled() {
	    return _devMode;
	}
	exports.assertionsEnabled = assertionsEnabled;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === "boolean";
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === "number";
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === "string";
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === "function";
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf("\n");
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(""); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError("Invalid integer literal when parsing " + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " +
	            radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    RegExpWrapper.replaceAll = function (regExp, input, replace) {
	        var c = regExp.exec(input);
	        var res = '';
	        regExp.lastIndex = 0;
	        var prev = 0;
	        while (c) {
	            res += input.substring(prev, c.index);
	            res += replace(c);
	            prev = c.index + c[0].length;
	            regExp.lastIndex = prev;
	            c = regExp.exec(input);
	        }
	        res += input.substring(prev);
	        return res;
	    };
	    return RegExpWrapper;
	}());
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	}());
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === "function" || typeof o === "object");
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function bitWiseOr(values) {
	    return values.reduce(function (a, b) { return a | b; });
	}
	exports.bitWiseOr = bitWiseOr;
	function bitWiseAnd(values) {
	    return values.reduce(function (a, b) { return a & b; });
	}
	exports.bitWiseAnd = bitWiseAnd;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	/**
	 * A parameter metadata that specifies a dependency.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/6uHYJK?p=preview))
	 *
	 * ```typescript
	 * class Engine {}
	 *
	 * @Injectable()
	 * class Car {
	 *   engine;
	 *   constructor(@Inject("MyEngine") engine:Engine) {
	 *     this.engine = engine;
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([
	 *  provide("MyEngine", {useClass: Engine}),
	 *  Car
	 * ]);
	 *
	 * expect(injector.get(Car).engine instanceof Engine).toBe(true);
	 * ```
	 *
	 * When `@Inject()` is not present, {@link Injector} will use the type annotation of the parameter.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * class Engine {}
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine: Engine) {} //same as constructor(@Inject(Engine) engine:Engine)
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([Engine, Car]);
	 * expect(injector.get(Car).engine instanceof Engine).toBe(true);
	 * ```
	 * @ts2dart_const
	 */
	var InjectMetadata = (function () {
	    function InjectMetadata(token) {
	        this.token = token;
	    }
	    InjectMetadata.prototype.toString = function () { return "@Inject(" + lang_1.stringify(this.token) + ")"; };
	    return InjectMetadata;
	}());
	exports.InjectMetadata = InjectMetadata;
	/**
	 * A parameter metadata that marks a dependency as optional. {@link Injector} provides `null` if
	 * the dependency is not found.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/AsryOm?p=preview))
	 *
	 * ```typescript
	 * class Engine {}
	 *
	 * @Injectable()
	 * class Car {
	 *   engine;
	 *   constructor(@Optional() engine:Engine) {
	 *     this.engine = engine;
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([Car]);
	 * expect(injector.get(Car).engine).toBeNull();
	 * ```
	 * @ts2dart_const
	 */
	var OptionalMetadata = (function () {
	    function OptionalMetadata() {
	    }
	    OptionalMetadata.prototype.toString = function () { return "@Optional()"; };
	    return OptionalMetadata;
	}());
	exports.OptionalMetadata = OptionalMetadata;
	/**
	 * `DependencyMetadata` is used by the framework to extend DI.
	 * This is internal to Angular and should not be used directly.
	 * @ts2dart_const
	 */
	var DependencyMetadata = (function () {
	    function DependencyMetadata() {
	    }
	    Object.defineProperty(DependencyMetadata.prototype, "token", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return DependencyMetadata;
	}());
	exports.DependencyMetadata = DependencyMetadata;
	/**
	 * A marker metadata that marks a class as available to {@link Injector} for creation.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/Wk4DMQ?p=preview))
	 *
	 * ```typescript
	 * @Injectable()
	 * class UsefulService {}
	 *
	 * @Injectable()
	 * class NeedsService {
	 *   constructor(public service:UsefulService) {}
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
	 * expect(injector.get(NeedsService).service instanceof UsefulService).toBe(true);
	 * ```
	 * {@link Injector} will throw {@link NoAnnotationError} when trying to instantiate a class that
	 * does not have `@Injectable` marker, as shown in the example below.
	 *
	 * ```typescript
	 * class UsefulService {}
	 *
	 * class NeedsService {
	 *   constructor(public service:UsefulService) {}
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
	 * expect(() => injector.get(NeedsService)).toThrowError();
	 * ```
	 * @ts2dart_const
	 */
	var InjectableMetadata = (function () {
	    function InjectableMetadata() {
	    }
	    return InjectableMetadata;
	}());
	exports.InjectableMetadata = InjectableMetadata;
	/**
	 * Specifies that an {@link Injector} should retrieve a dependency only from itself.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/NeagAg?p=preview))
	 *
	 * ```typescript
	 * class Dependency {
	 * }
	 *
	 * @Injectable()
	 * class NeedsDependency {
	 *   dependency;
	 *   constructor(@Self() dependency:Dependency) {
	 *     this.dependency = dependency;
	 *   }
	 * }
	 *
	 * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
	 * var nd = inj.get(NeedsDependency);
	 *
	 * expect(nd.dependency instanceof Dependency).toBe(true);
	 *
	 * var inj = Injector.resolveAndCreate([Dependency]);
	 * var child = inj.resolveAndCreateChild([NeedsDependency]);
	 * expect(() => child.get(NeedsDependency)).toThrowError();
	 * ```
	 * @ts2dart_const
	 */
	var SelfMetadata = (function () {
	    function SelfMetadata() {
	    }
	    SelfMetadata.prototype.toString = function () { return "@Self()"; };
	    return SelfMetadata;
	}());
	exports.SelfMetadata = SelfMetadata;
	/**
	 * Specifies that the dependency resolution should start from the parent injector.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/Wchdzb?p=preview))
	 *
	 * ```typescript
	 * class Dependency {
	 * }
	 *
	 * @Injectable()
	 * class NeedsDependency {
	 *   dependency;
	 *   constructor(@SkipSelf() dependency:Dependency) {
	 *     this.dependency = dependency;
	 *   }
	 * }
	 *
	 * var parent = Injector.resolveAndCreate([Dependency]);
	 * var child = parent.resolveAndCreateChild([NeedsDependency]);
	 * expect(child.get(NeedsDependency).dependency instanceof Depedency).toBe(true);
	 *
	 * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
	 * expect(() => inj.get(NeedsDependency)).toThrowError();
	 * ```
	 * @ts2dart_const
	 */
	var SkipSelfMetadata = (function () {
	    function SkipSelfMetadata() {
	    }
	    SkipSelfMetadata.prototype.toString = function () { return "@SkipSelf()"; };
	    return SkipSelfMetadata;
	}());
	exports.SkipSelfMetadata = SkipSelfMetadata;
	/**
	 * Specifies that an injector should retrieve a dependency from any injector until reaching the
	 * closest host.
	 *
	 * In Angular, a component element is automatically declared as a host for all the injectors in
	 * its view.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/GX79pV?p=preview))
	 *
	 * In the following example `App` contains `ParentCmp`, which contains `ChildDirective`.
	 * So `ParentCmp` is the host of `ChildDirective`.
	 *
	 * `ChildDirective` depends on two services: `HostService` and `OtherService`.
	 * `HostService` is defined at `ParentCmp`, and `OtherService` is defined at `App`.
	 *
	 *```typescript
	 * class OtherService {}
	 * class HostService {}
	 *
	 * @Directive({
	 *   selector: 'child-directive'
	 * })
	 * class ChildDirective {
	 *   constructor(@Optional() @Host() os:OtherService, @Optional() @Host() hs:HostService){
	 *     console.log("os is null", os);
	 *     console.log("hs is NOT null", hs);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'parent-cmp',
	 *   providers: [HostService],
	 *   template: `
	 *     Dir: <child-directive></child-directive>
	 *   `,
	 *   directives: [ChildDirective]
	 * })
	 * class ParentCmp {
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [OtherService],
	 *   template: `
	 *     Parent: <parent-cmp></parent-cmp>
	 *   `,
	 *   directives: [ParentCmp]
	 * })
	 * class App {
	 * }
	 *
	 * bootstrap(App);
	 *```
	 * @ts2dart_const
	 */
	var HostMetadata = (function () {
	    function HostMetadata() {
	    }
	    HostMetadata.prototype.toString = function () { return "@Host()"; };
	    return HostMetadata;
	}());
	exports.HostMetadata = HostMetadata;
	//# sourceMappingURL=metadata.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	/**
	 * Allows to refer to references which are not yet defined.
	 *
	 * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
	 * DI is declared,
	 * but not yet defined. It is also used when the `token` which we use when creating a query is not
	 * yet defined.
	 *
	 * ### Example
	 * {@example core/di/ts/forward_ref/forward_ref.ts region='forward_ref'}
	 */
	function forwardRef(forwardRefFn) {
	    forwardRefFn.__forward_ref__ = forwardRef;
	    forwardRefFn.toString = function () { return lang_1.stringify(this()); };
	    return forwardRefFn;
	}
	exports.forwardRef = forwardRef;
	/**
	 * Lazily retrieves the reference value from a forwardRef.
	 *
	 * Acts as the identity function when given a non-forward-ref value.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
	 *
	 * ```typescript
	 * var ref = forwardRef(() => "refValue");
	 * expect(resolveForwardRef(ref)).toEqual("refValue");
	 * expect(resolveForwardRef("regularValue")).toEqual("regularValue");
	 * ```
	 *
	 * See: {@link forwardRef}
	 */
	function resolveForwardRef(type) {
	    if (lang_1.isFunction(type) && type.hasOwnProperty('__forward_ref__') &&
	        type.__forward_ref__ === forwardRef) {
	        return type();
	    }
	    else {
	        return type;
	    }
	}
	exports.resolveForwardRef = resolveForwardRef;
	//# sourceMappingURL=forward_ref.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(11);
	var metadata_1 = __webpack_require__(12);
	var constants_1 = __webpack_require__(15);
	/**
	 * Directives allow you to attach behavior to elements in the DOM.
	 *
	 * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
	 *
	 * A directive consists of a single directive annotation and a controller class. When the
	 * directive's `selector` matches
	 * elements in the DOM, the following steps occur:
	 *
	 * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
	 * arguments.
	 * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
	 * depth-first order,
	 *    as declared in the HTML.
	 *
	 * ## Understanding How Injection Works
	 *
	 * There are three stages of injection resolution.
	 * - *Pre-existing Injectors*:
	 *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
	 * the dependency was
	 *     specified as `@Optional`, returns `null`.
	 *   - The platform injector resolves browser singleton resources, such as: cookies, title,
	 * location, and others.
	 * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
	 * the same parent-child hierarchy
	 *     as the component instances in the DOM.
	 * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
	 * element has an `ElementInjector`
	 *     which follow the same parent-child hierarchy as the DOM elements themselves.
	 *
	 * When a template is instantiated, it also must instantiate the corresponding directives in a
	 * depth-first order. The
	 * current `ElementInjector` resolves the constructor dependencies for each directive.
	 *
	 * Angular then resolves dependencies as follows, according to the order in which they appear in the
	 * {@link ViewMetadata}:
	 *
	 * 1. Dependencies on the current element
	 * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
	 * 3. Dependencies on component injectors and their parents until it encounters the root component
	 * 4. Dependencies on pre-existing injectors
	 *
	 *
	 * The `ElementInjector` can inject other directives, element-specific special objects, or it can
	 * delegate to the parent
	 * injector.
	 *
	 * To inject other directives, declare the constructor parameter as:
	 * - `directive:DirectiveType`: a directive on the current element only
	 * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
	 * element and the
	 *    Shadow DOM root.
	 * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
	 * directives.
	 * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
	 * child directives.
	 *
	 * To inject element-specific special objects, declare the constructor parameter as:
	 * - `element: ElementRef` to obtain a reference to logical element in the view.
	 * - `viewContainer: ViewContainerRef` to control child template instantiation, for
	 * {@link DirectiveMetadata} directives only
	 * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
	 *
	 * ### Example
	 *
	 * The following example demonstrates how dependency injection resolves constructor arguments in
	 * practice.
	 *
	 *
	 * Assume this HTML template:
	 *
	 * ```
	 * <div dependency="1">
	 *   <div dependency="2">
	 *     <div dependency="3" my-directive>
	 *       <div dependency="4">
	 *         <div dependency="5"></div>
	 *       </div>
	 *       <div dependency="6"></div>
	 *     </div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * With the following `dependency` decorator and `SomeService` injectable class.
	 *
	 * ```
	 * @Injectable()
	 * class SomeService {
	 * }
	 *
	 * @Directive({
	 *   selector: '[dependency]',
	 *   inputs: [
	 *     'id: dependency'
	 *   ]
	 * })
	 * class Dependency {
	 *   id:string;
	 * }
	 * ```
	 *
	 * Let's step through the different ways in which `MyDirective` could be declared...
	 *
	 *
	 * ### No injection
	 *
	 * Here the constructor is declared with no arguments, therefore nothing is injected into
	 * `MyDirective`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor() {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with no dependencies.
	 *
	 *
	 * ### Component-level injection
	 *
	 * Directives can inject any injectable instance from the closest component injector or any of its
	 * parents.
	 *
	 * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
	 * from the parent
	 * component's injector.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(someService: SomeService) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a dependency on `SomeService`.
	 *
	 *
	 * ### Injecting a directive from the current element
	 *
	 * Directives can inject other directives declared on the current element.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(dependency: Dependency) {
	 *     expect(dependency.id).toEqual(3);
	 *   }
	 * }
	 * ```
	 * This directive would be instantiated with `Dependency` declared at the same element, in this case
	 * `dependency="3"`.
	 *
	 * ### Injecting a directive from any ancestor elements
	 *
	 * Directives can inject other directives declared on any ancestor element (in the current Shadow
	 * DOM), i.e. on the current element, the
	 * parent element, or its parents.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Host() dependency: Dependency) {
	 *     expect(dependency.id).toEqual(2);
	 *   }
	 * }
	 * ```
	 *
	 * `@Host` checks the current element, the parent, as well as its parents recursively. If
	 * `dependency="2"` didn't
	 * exist on the direct parent, this injection would
	 * have returned
	 * `dependency="1"`.
	 *
	 *
	 * ### Injecting a live collection of direct child directives
	 *
	 *
	 * A directive can also query for other child directives. Since parent directives are instantiated
	 * before child directives, a directive can't simply inject the list of child directives. Instead,
	 * the directive injects a {@link QueryList}, which updates its contents as children are added,
	 * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
	 * `ngIf`, or an `ngSwitch`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
	 * `Dependency` 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
	 *
	 * ### Injecting a live collection of descendant directives
	 *
	 * By passing the descendant flag to `@Query` above, we can include the children of the child
	 * elements.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
	 *
	 * ### Optional injection
	 *
	 * The normal behavior of directives is to return an error when a specified dependency cannot be
	 * resolved. If you
	 * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
	 * with `@Optional()`.
	 * This explicitly permits the author of a template to treat some of the surrounding directives as
	 * optional.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Optional() dependency:Dependency) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a `Dependency` directive found on the current element.
	 * If none can be
	 * found, the injector supplies `null` instead of throwing an error.
	 *
	 * ### Example
	 *
	 * Here we use a decorator directive to simply define basic tool-tip behavior.
	 *
	 * ```
	 * @Directive({
	 *   selector: '[tooltip]',
	 *   inputs: [
	 *     'text: tooltip'
	 *   ],
	 *   host: {
	 *     '(mouseenter)': 'onMouseEnter()',
	 *     '(mouseleave)': 'onMouseLeave()'
	 *   }
	 * })
	 * class Tooltip{
	 *   text:string;
	 *   overlay:Overlay; // NOT YET IMPLEMENTED
	 *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
	 *
	 *   constructor(overlayManager:OverlayManager) {
	 *     this.overlay = overlay;
	 *   }
	 *
	 *   onMouseEnter() {
	 *     // exact signature to be determined
	 *     this.overlay = this.overlayManager.open(text, ...);
	 *   }
	 *
	 *   onMouseLeave() {
	 *     this.overlay.close();
	 *     this.overlay = null;
	 *   }
	 * }
	 * ```
	 * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
	 * `tooltip` selector,
	 * like so:
	 *
	 * ```
	 * <div tooltip="some text here"></div>
	 * ```
	 *
	 * Directives can also control the instantiation, destruction, and positioning of inline template
	 * elements:
	 *
	 * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
	 * runtime.
	 * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
	 * location in the current view
	 * where these actions are performed.
	 *
	 * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
	 * `<template>` element. Thus a
	 * directive in a child view cannot inject the directive that created it.
	 *
	 * Since directives that create views via ViewContainers are common in Angular, and using the full
	 * `<template>` element syntax is wordy, Angular
	 * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
	 * equivalent.
	 *
	 * Thus,
	 *
	 * ```
	 * <ul>
	 *   <li *foo="bar" title="text"></li>
	 * </ul>
	 * ```
	 *
	 * Expands in use to:
	 *
	 * ```
	 * <ul>
	 *   <template [foo]="bar">
	 *     <li title="text"></li>
	 *   </template>
	 * </ul>
	 * ```
	 *
	 * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
	 * the directive
	 * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the directive class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the directive.
	 *
	 * ### Example
	 *
	 * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
	 *
	 * Here is a simple directive that triggers on an `unless` selector:
	 *
	 * ```
	 * @Directive({
	 *   selector: '[unless]',
	 *   inputs: ['unless']
	 * })
	 * export class Unless {
	 *   viewContainer: ViewContainerRef;
	 *   templateRef: TemplateRef;
	 *   prevCondition: boolean;
	 *
	 *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
	 *     this.viewContainer = viewContainer;
	 *     this.templateRef = templateRef;
	 *     this.prevCondition = null;
	 *   }
	 *
	 *   set unless(newCondition) {
	 *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
	 *       this.prevCondition = true;
	 *       this.viewContainer.clear();
	 *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
	 *       this.prevCondition = false;
	 *       this.viewContainer.create(this.templateRef);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * We can then use this `unless` selector in a template:
	 * ```
	 * <ul>
	 *   <li *unless="expr"></li>
	 * </ul>
	 * ```
	 *
	 * Once the directive instantiates the child view, the shorthand notation for the template expands
	 * and the result is:
	 *
	 * ```
	 * <ul>
	 *   <template [unless]="exp">
	 *     <li></li>
	 *   </template>
	 *   <li></li>
	 * </ul>
	 * ```
	 *
	 * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
	 * the instantiated
	 * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
	 * @ts2dart_const
	 */
	var DirectiveMetadata = (function (_super) {
	    __extends(DirectiveMetadata, _super);
	    function DirectiveMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, selector = _b.selector, inputs = _b.inputs, outputs = _b.outputs, properties = _b.properties, events = _b.events, host = _b.host, bindings = _b.bindings, providers = _b.providers, exportAs = _b.exportAs, queries = _b.queries;
	        _super.call(this);
	        this.selector = selector;
	        this._inputs = inputs;
	        this._properties = properties;
	        this._outputs = outputs;
	        this._events = events;
	        this.host = host;
	        this.exportAs = exportAs;
	        this.queries = queries;
	        this._providers = providers;
	        this._bindings = bindings;
	    }
	    Object.defineProperty(DirectiveMetadata.prototype, "inputs", {
	        /**
	         * Enumerates the set of data-bound input properties for a directive
	         *
	         * Angular automatically updates input properties during change detection.
	         *
	         * The `inputs` property defines a set of `directiveProperty` to `bindingProperty`
	         * configuration:
	         *
	         * - `directiveProperty` specifies the component property where the value is written.
	         * - `bindingProperty` specifies the DOM property where the value is read from.
	         *
	         * When `bindingProperty` is not provided, it is assumed to be equal to `directiveProperty`.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/ivhfXY?p=preview))
	         *
	         * The following example creates a component with two data-bound properties.
	         *
	         * ```typescript
	         * @Component({
	         *   selector: 'bank-account',
	         *   inputs: ['bankName', 'id: account-id'],
	         *   template: `
	         *     Bank Name: {{bankName}}
	         *     Account Id: {{id}}
	         *   `
	         * })
	         * class BankAccount {
	         *   bankName: string;
	         *   id: string;
	         *
	         *   // this property is not bound, and won't be automatically updated by Angular
	         *   normalizedBankName: string;
	         * }
	         *
	         * @Component({
	         *   selector: 'app',
	         *   template: `
	         *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
	         *   `,
	         *   directives: [BankAccount]
	         * })
	         * class App {}
	         *
	         * bootstrap(App);
	         * ```
	         *
	         */
	        get: function () {
	            return lang_1.isPresent(this._properties) && this._properties.length > 0 ? this._properties :
	                this._inputs;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "properties", {
	        get: function () { return this.inputs; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "outputs", {
	        /**
	         * Enumerates the set of event-bound output properties.
	         *
	         * When an output property emits an event, an event handler attached to that event
	         * the template is invoked.
	         *
	         * The `outputs` property defines a set of `directiveProperty` to `bindingProperty`
	         * configuration:
	         *
	         * - `directiveProperty` specifies the component property that emits events.
	         * - `bindingProperty` specifies the DOM property the event handler is attached to.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/d5CNq7?p=preview))
	         *
	         * ```typescript
	         * @Directive({
	         *   selector: 'interval-dir',
	         *   outputs: ['everySecond', 'five5Secs: everyFiveSeconds']
	         * })
	         * class IntervalDir {
	         *   everySecond = new EventEmitter();
	         *   five5Secs = new EventEmitter();
	         *
	         *   constructor() {
	         *     setInterval(() => this.everySecond.emit("event"), 1000);
	         *     setInterval(() => this.five5Secs.emit("event"), 5000);
	         *   }
	         * }
	         *
	         * @Component({
	         *   selector: 'app',
	         *   template: `
	         *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
	         *     </interval-dir>
	         *   `,
	         *   directives: [IntervalDir]
	         * })
	         * class App {
	         *   everySecond() { console.log('second'); }
	         *   everyFiveSeconds() { console.log('five seconds'); }
	         * }
	         * bootstrap(App);
	         * ```
	         *
	         */
	        get: function () {
	            return lang_1.isPresent(this._events) && this._events.length > 0 ? this._events : this._outputs;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "events", {
	        get: function () { return this.outputs; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "providers", {
	        /**
	         * Defines the set of injectable objects that are visible to a Directive and its light DOM
	         * children.
	         *
	         * ## Simple Example
	         *
	         * Here is an example of a class that can be injected:
	         *
	         * ```
	         * class Greeter {
	         *    greet(name:string) {
	         *      return 'Hello ' + name + '!';
	         *    }
	         * }
	         *
	         * @Directive({
	         *   selector: 'greet',
	         *   bindings: [
	         *     Greeter
	         *   ]
	         * })
	         * class HelloWorld {
	         *   greeter:Greeter;
	         *
	         *   constructor(greeter:Greeter) {
	         *     this.greeter = greeter;
	         *   }
	         * }
	         * ```
	         */
	        get: function () {
	            return lang_1.isPresent(this._bindings) && this._bindings.length > 0 ? this._bindings :
	                this._providers;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "bindings", {
	        /** @deprecated */
	        get: function () { return this.providers; },
	        enumerable: true,
	        configurable: true
	    });
	    return DirectiveMetadata;
	}(metadata_1.InjectableMetadata));
	exports.DirectiveMetadata = DirectiveMetadata;
	/**
	 * Declare reusable UI building blocks for an application.
	 *
	 * Each Angular component requires a single `@Component` annotation. The
	 * `@Component`
	 * annotation specifies when a component is instantiated, and which properties and hostListeners it
	 * binds to.
	 *
	 * When a component is instantiated, Angular
	 * - creates a shadow DOM for the component.
	 * - loads the selected template into the shadow DOM.
	 * - creates all the injectable objects configured with `providers` and `viewProviders`.
	 *
	 * All template expressions and statements are then evaluated against the component instance.
	 *
	 * For details on the `@View` annotation, see {@link ViewMetadata}.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the component class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the component.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='component'}
	 * @ts2dart_const
	 */
	var ComponentMetadata = (function (_super) {
	    __extends(ComponentMetadata, _super);
	    function ComponentMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, selector = _b.selector, inputs = _b.inputs, outputs = _b.outputs, properties = _b.properties, events = _b.events, host = _b.host, exportAs = _b.exportAs, moduleId = _b.moduleId, bindings = _b.bindings, providers = _b.providers, viewBindings = _b.viewBindings, viewProviders = _b.viewProviders, _c = _b.changeDetection, changeDetection = _c === void 0 ? constants_1.ChangeDetectionStrategy.Default : _c, queries = _b.queries, templateUrl = _b.templateUrl, template = _b.template, styleUrls = _b.styleUrls, styles = _b.styles, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation;
	        _super.call(this, {
	            selector: selector,
	            inputs: inputs,
	            outputs: outputs,
	            properties: properties,
	            events: events,
	            host: host,
	            exportAs: exportAs,
	            bindings: bindings,
	            providers: providers,
	            queries: queries
	        });
	        this.changeDetection = changeDetection;
	        this._viewProviders = viewProviders;
	        this._viewBindings = viewBindings;
	        this.templateUrl = templateUrl;
	        this.template = template;
	        this.styleUrls = styleUrls;
	        this.styles = styles;
	        this.directives = directives;
	        this.pipes = pipes;
	        this.encapsulation = encapsulation;
	        this.moduleId = moduleId;
	    }
	    Object.defineProperty(ComponentMetadata.prototype, "viewProviders", {
	        /**
	         * Defines the set of injectable objects that are visible to its view DOM children.
	         *
	         * ## Simple Example
	         *
	         * Here is an example of a class that can be injected:
	         *
	         * ```
	         * class Greeter {
	         *    greet(name:string) {
	         *      return 'Hello ' + name + '!';
	         *    }
	         * }
	         *
	         * @Directive({
	         *   selector: 'needs-greeter'
	         * })
	         * class NeedsGreeter {
	         *   greeter:Greeter;
	         *
	         *   constructor(greeter:Greeter) {
	         *     this.greeter = greeter;
	         *   }
	         * }
	         *
	         * @Component({
	         *   selector: 'greet',
	         *   viewProviders: [
	         *     Greeter
	         *   ],
	         *   template: `<needs-greeter></needs-greeter>`,
	         *   directives: [NeedsGreeter]
	         * })
	         * class HelloWorld {
	         * }
	         *
	         * ```
	         */
	        get: function () {
	            return lang_1.isPresent(this._viewBindings) && this._viewBindings.length > 0 ? this._viewBindings :
	                this._viewProviders;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentMetadata.prototype, "viewBindings", {
	        get: function () { return this.viewProviders; },
	        enumerable: true,
	        configurable: true
	    });
	    return ComponentMetadata;
	}(DirectiveMetadata));
	exports.ComponentMetadata = ComponentMetadata;
	/**
	 * Declare reusable pipe function.
	 *
	 * A "pure" pipe is only re-evaluated when either the input or any of the arguments change.
	 *
	 * When not specified, pipes default to being pure.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='pipe'}
	 * @ts2dart_const
	 */
	var PipeMetadata = (function (_super) {
	    __extends(PipeMetadata, _super);
	    function PipeMetadata(_a) {
	        var name = _a.name, pure = _a.pure;
	        _super.call(this);
	        this.name = name;
	        this._pure = pure;
	    }
	    Object.defineProperty(PipeMetadata.prototype, "pure", {
	        get: function () { return lang_1.isPresent(this._pure) ? this._pure : true; },
	        enumerable: true,
	        configurable: true
	    });
	    return PipeMetadata;
	}(metadata_1.InjectableMetadata));
	exports.PipeMetadata = PipeMetadata;
	/**
	 * Declares a data-bound input property.
	 *
	 * Angular automatically updates data-bound properties during change detection.
	 *
	 * `InputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * The following example creates a component with two input properties.
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'bank-account',
	 *   template: `
	 *     Bank Name: {{bankName}}
	 *     Account Id: {{id}}
	 *   `
	 * })
	 * class BankAccount {
	 *   @Input() bankName: string;
	 *   @Input('account-id') id: string;
	 *
	 *   // this property is not bound, and won't be automatically updated by Angular
	 *   normalizedBankName: string;
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
	 *   `,
	 *   directives: [BankAccount]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var InputMetadata = (function () {
	    function InputMetadata(
	        /**
	         * Name used when instantiating a component in the template.
	         */
	        bindingPropertyName) {
	        this.bindingPropertyName = bindingPropertyName;
	    }
	    return InputMetadata;
	}());
	exports.InputMetadata = InputMetadata;
	/**
	 * Declares an event-bound output property.
	 *
	 * When an output property emits an event, an event handler attached to that event
	 * the template is invoked.
	 *
	 * `OutputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Directive({
	 *   selector: 'interval-dir',
	 * })
	 * class IntervalDir {
	 *   @Output() everySecond = new EventEmitter();
	 *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
	 *
	 *   constructor() {
	 *     setInterval(() => this.everySecond.emit("event"), 1000);
	 *     setInterval(() => this.five5Secs.emit("event"), 5000);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
	 *     </interval-dir>
	 *   `,
	 *   directives: [IntervalDir]
	 * })
	 * class App {
	 *   everySecond() { console.log('second'); }
	 *   everyFiveSeconds() { console.log('five seconds'); }
	 * }
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var OutputMetadata = (function () {
	    function OutputMetadata(bindingPropertyName) {
	        this.bindingPropertyName = bindingPropertyName;
	    }
	    return OutputMetadata;
	}());
	exports.OutputMetadata = OutputMetadata;
	/**
	 * Declares a host property binding.
	 *
	 * Angular automatically checks host property bindings during change detection.
	 * If a binding changes, it will update the host element of the directive.
	 *
	 * `HostBindingMetadata` takes an optional parameter that specifies the property
	 * name of the host element that will be updated. When not provided,
	 * the class property name is used.
	 *
	 * ### Example
	 *
	 * The following example creates a directive that sets the `valid` and `invalid` classes
	 * on the DOM element that has ngModel directive on it.
	 *
	 * ```typescript
	 * @Directive({selector: '[ngModel]'})
	 * class NgModelStatus {
	 *   constructor(public control:NgModel) {}
	 *   @HostBinding('class.valid') get valid { return this.control.valid; }
	 *   @HostBinding('class.invalid') get invalid { return this.control.invalid; }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<input [(ngModel)]="prop">`,
	 *   directives: [FORM_DIRECTIVES, NgModelStatus]
	 * })
	 * class App {
	 *   prop;
	 * }
	 *
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var HostBindingMetadata = (function () {
	    function HostBindingMetadata(hostPropertyName) {
	        this.hostPropertyName = hostPropertyName;
	    }
	    return HostBindingMetadata;
	}());
	exports.HostBindingMetadata = HostBindingMetadata;
	/**
	 * Declares a host listener.
	 *
	 * Angular will invoke the decorated method when the host element emits the specified event.
	 *
	 * If the decorated method returns `false`, then `preventDefault` is applied on the DOM
	 * event.
	 *
	 * ### Example
	 *
	 * The following example declares a directive that attaches a click listener to the button and
	 * counts clicks.
	 *
	 * ```typescript
	 * @Directive({selector: 'button[counting]'})
	 * class CountClicks {
	 *   numberOfClicks = 0;
	 *
	 *   @HostListener('click', ['$event.target'])
	 *   onClick(btn) {
	 *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<button counting>Increment</button>`,
	 *   directives: [CountClicks]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var HostListenerMetadata = (function () {
	    function HostListenerMetadata(eventName, args) {
	        this.eventName = eventName;
	        this.args = args;
	    }
	    return HostListenerMetadata;
	}());
	exports.HostListenerMetadata = HostListenerMetadata;
	//# sourceMappingURL=directives.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	/**
	 * Describes the current state of the change detector.
	 */
	(function (ChangeDetectorState) {
	    /**
	     * `NeverChecked` means that the change detector has not been checked yet, and
	     * initialization methods should be called during detection.
	     */
	    ChangeDetectorState[ChangeDetectorState["NeverChecked"] = 0] = "NeverChecked";
	    /**
	     * `CheckedBefore` means that the change detector has successfully completed at least
	     * one detection previously.
	     */
	    ChangeDetectorState[ChangeDetectorState["CheckedBefore"] = 1] = "CheckedBefore";
	    /**
	     * `Errored` means that the change detector encountered an error checking a binding
	     * or calling a directive lifecycle method and is now in an inconsistent state. Change
	     * detectors in this state will no longer detect changes.
	     */
	    ChangeDetectorState[ChangeDetectorState["Errored"] = 2] = "Errored";
	})(exports.ChangeDetectorState || (exports.ChangeDetectorState = {}));
	var ChangeDetectorState = exports.ChangeDetectorState;
	/**
	 * Describes within the change detector which strategy will be used the next time change
	 * detection is triggered.
	 */
	(function (ChangeDetectionStrategy) {
	    /**
	     * `CheckedOnce` means that after calling detectChanges the mode of the change detector
	     * will become `Checked`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckOnce"] = 0] = "CheckOnce";
	    /**
	     * `Checked` means that the change detector should be skipped until its mode changes to
	     * `CheckOnce`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Checked"] = 1] = "Checked";
	    /**
	     * `CheckAlways` means that after calling detectChanges the mode of the change detector
	     * will remain `CheckAlways`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckAlways"] = 2] = "CheckAlways";
	    /**
	     * `Detached` means that the change detector sub tree is not a part of the main tree and
	     * should be skipped.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Detached"] = 3] = "Detached";
	    /**
	     * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 4] = "OnPush";
	    /**
	     * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 5] = "Default";
	})(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
	var ChangeDetectionStrategy = exports.ChangeDetectionStrategy;
	/**
	 * List of possible {@link ChangeDetectionStrategy} values.
	 */
	exports.CHANGE_DETECTION_STRATEGY_VALUES = [
	    ChangeDetectionStrategy.CheckOnce,
	    ChangeDetectionStrategy.Checked,
	    ChangeDetectionStrategy.CheckAlways,
	    ChangeDetectionStrategy.Detached,
	    ChangeDetectionStrategy.OnPush,
	    ChangeDetectionStrategy.Default
	];
	/**
	 * List of possible {@link ChangeDetectorState} values.
	 */
	exports.CHANGE_DETECTOR_STATE_VALUES = [
	    ChangeDetectorState.NeverChecked,
	    ChangeDetectorState.CheckedBefore,
	    ChangeDetectorState.Errored
	];
	function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
	    return lang_1.isBlank(changeDetectionStrategy) ||
	        changeDetectionStrategy === ChangeDetectionStrategy.Default;
	}
	exports.isDefaultChangeDetectionStrategy = isDefaultChangeDetectionStrategy;
	//# sourceMappingURL=constants.js.map

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Defines template and style encapsulation options available for Component's {@link View}.
	 *
	 * See {@link ViewMetadata#encapsulation}.
	 */
	(function (ViewEncapsulation) {
	    /**
	     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
	     * Element and pre-processing the style rules provided via
	     * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
	     * attribute to all selectors.
	     *
	     * This is the default option.
	     */
	    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
	    /**
	     * Use the native encapsulation mechanism of the renderer.
	     *
	     * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
	     * creating a ShadowRoot for Component's Host Element.
	     */
	    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
	    /**
	     * Don't provide any template or style encapsulation.
	     */
	    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
	})(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
	var ViewEncapsulation = exports.ViewEncapsulation;
	exports.VIEW_ENCAPSULATION_VALUES = [ViewEncapsulation.Emulated, ViewEncapsulation.Native, ViewEncapsulation.None];
	/**
	 * Metadata properties available for configuring Views.
	 *
	 * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
	 * `@View` annotation specifies the HTML template to use, and lists the directives that are active
	 * within the template.
	 *
	 * When a component is instantiated, the template is loaded into the component's shadow root, and
	 * the expressions and statements in the template are evaluated against the component.
	 *
	 * For details on the `@Component` annotation, see {@link ComponentMetadata}.
	 *
	 * ### Example
	 *
	 * ```
	 * @Component({
	 *   selector: 'greet',
	 *   template: 'Hello {{name}}!',
	 *   directives: [GreetUser, Bold]
	 * })
	 * class Greet {
	 *   name: string;
	 *
	 *   constructor() {
	 *     this.name = 'World';
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ViewMetadata = (function () {
	    function ViewMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, templateUrl = _b.templateUrl, template = _b.template, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation, styles = _b.styles, styleUrls = _b.styleUrls;
	        this.templateUrl = templateUrl;
	        this.template = template;
	        this.styleUrls = styleUrls;
	        this.styles = styles;
	        this.directives = directives;
	        this.pipes = pipes;
	        this.encapsulation = encapsulation;
	    }
	    return ViewMetadata;
	}());
	exports.ViewMetadata = ViewMetadata;
	//# sourceMappingURL=view.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var _nextClassId = 0;
	function extractAnnotation(annotation) {
	    if (lang_1.isFunction(annotation) && annotation.hasOwnProperty('annotation')) {
	        // it is a decorator, extract annotation
	        annotation = annotation.annotation;
	    }
	    return annotation;
	}
	function applyParams(fnOrArray, key) {
	    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function ||
	        fnOrArray === Number || fnOrArray === Array) {
	        throw new Error("Can not use native " + lang_1.stringify(fnOrArray) + " as constructor");
	    }
	    if (lang_1.isFunction(fnOrArray)) {
	        return fnOrArray;
	    }
	    else if (fnOrArray instanceof Array) {
	        var annotations = fnOrArray;
	        var fn = fnOrArray[fnOrArray.length - 1];
	        if (!lang_1.isFunction(fn)) {
	            throw new Error("Last position of Class method array must be Function in key " + key + " was '" + lang_1.stringify(fn) + "'");
	        }
	        var annoLength = annotations.length - 1;
	        if (annoLength != fn.length) {
	            throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + lang_1.stringify(fn));
	        }
	        var paramsAnnotations = [];
	        for (var i = 0, ii = annotations.length - 1; i < ii; i++) {
	            var paramAnnotations = [];
	            paramsAnnotations.push(paramAnnotations);
	            var annotation = annotations[i];
	            if (annotation instanceof Array) {
	                for (var j = 0; j < annotation.length; j++) {
	                    paramAnnotations.push(extractAnnotation(annotation[j]));
	                }
	            }
	            else if (lang_1.isFunction(annotation)) {
	                paramAnnotations.push(extractAnnotation(annotation));
	            }
	            else {
	                paramAnnotations.push(annotation);
	            }
	        }
	        Reflect.defineMetadata('parameters', paramsAnnotations, fn);
	        return fn;
	    }
	    else {
	        throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + lang_1.stringify(fnOrArray) + "'");
	    }
	}
	/**
	 * Provides a way for expressing ES6 classes with parameter annotations in ES5.
	 *
	 * ## Basic Example
	 *
	 * ```
	 * var Greeter = ng.Class({
	 *   constructor: function(name) {
	 *     this.name = name;
	 *   },
	 *
	 *   greet: function() {
	 *     alert('Hello ' + this.name + '!');
	 *   }
	 * });
	 * ```
	 *
	 * is equivalent to ES6:
	 *
	 * ```
	 * class Greeter {
	 *   constructor(name) {
	 *     this.name = name;
	 *   }
	 *
	 *   greet() {
	 *     alert('Hello ' + this.name + '!');
	 *   }
	 * }
	 * ```
	 *
	 * or equivalent to ES5:
	 *
	 * ```
	 * var Greeter = function (name) {
	 *   this.name = name;
	 * }
	 *
	 * Greeter.prototype.greet = function () {
	 *   alert('Hello ' + this.name + '!');
	 * }
	 * ```
	 *
	 * ### Example with parameter annotations
	 *
	 * ```
	 * var MyService = ng.Class({
	 *   constructor: [String, [new Query(), QueryList], function(name, queryList) {
	 *     ...
	 *   }]
	 * });
	 * ```
	 *
	 * is equivalent to ES6:
	 *
	 * ```
	 * class MyService {
	 *   constructor(name: string, @Query() queryList: QueryList) {
	 *     ...
	 *   }
	 * }
	 * ```
	 *
	 * ### Example with inheritance
	 *
	 * ```
	 * var Shape = ng.Class({
	 *   constructor: (color) {
	 *     this.color = color;
	 *   }
	 * });
	 *
	 * var Square = ng.Class({
	 *   extends: Shape,
	 *   constructor: function(color, size) {
	 *     Shape.call(this, color);
	 *     this.size = size;
	 *   }
	 * });
	 * ```
	 */
	function Class(clsDef) {
	    var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
	    var proto = constructor.prototype;
	    if (clsDef.hasOwnProperty('extends')) {
	        if (lang_1.isFunction(clsDef.extends)) {
	            constructor.prototype = proto =
	                Object.create(clsDef.extends.prototype);
	        }
	        else {
	            throw new Error("Class definition 'extends' property must be a constructor function was: " + lang_1.stringify(clsDef.extends));
	        }
	    }
	    for (var key in clsDef) {
	        if (key != 'extends' && key != 'prototype' && clsDef.hasOwnProperty(key)) {
	            proto[key] = applyParams(clsDef[key], key);
	        }
	    }
	    if (this && this.annotations instanceof Array) {
	        Reflect.defineMetadata('annotations', this.annotations, constructor);
	    }
	    if (!constructor['name']) {
	        constructor['overriddenName'] = "class" + _nextClassId++;
	    }
	    return constructor;
	}
	exports.Class = Class;
	var Reflect = lang_1.global.Reflect;
	// Throw statement at top-level is disallowed by closure compiler in ES6 input.
	// Wrap in an IIFE as a work-around.
	(function checkReflect() {
	    if (!(Reflect && Reflect.getMetadata)) {
	        throw 'reflect-metadata shim is required when using class decorators';
	    }
	})();
	function makeDecorator(annotationCls, chainFn) {
	    if (chainFn === void 0) { chainFn = null; }
	    function DecoratorFactory(objOrType) {
	        var annotationInstance = new annotationCls(objOrType);
	        if (this instanceof annotationCls) {
	            return annotationInstance;
	        }
	        else {
	            var chainAnnotation = lang_1.isFunction(this) && this.annotations instanceof Array ? this.annotations : [];
	            chainAnnotation.push(annotationInstance);
	            var TypeDecorator = function TypeDecorator(cls) {
	                var annotations = Reflect.getOwnMetadata('annotations', cls);
	                annotations = annotations || [];
	                annotations.push(annotationInstance);
	                Reflect.defineMetadata('annotations', annotations, cls);
	                return cls;
	            };
	            TypeDecorator.annotations = chainAnnotation;
	            TypeDecorator.Class = Class;
	            if (chainFn)
	                chainFn(TypeDecorator);
	            return TypeDecorator;
	        }
	    }
	    DecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    DecoratorFactory.annotationCls = annotationCls;
	    return DecoratorFactory;
	}
	exports.makeDecorator = makeDecorator;
	function makeParamDecorator(annotationCls) {
	    function ParamDecoratorFactory() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        var annotationInstance = Object.create(annotationCls.prototype);
	        annotationCls.apply(annotationInstance, args);
	        if (this instanceof annotationCls) {
	            return annotationInstance;
	        }
	        else {
	            ParamDecorator.annotation = annotationInstance;
	            return ParamDecorator;
	        }
	        function ParamDecorator(cls, unusedKey, index) {
	            var parameters = Reflect.getMetadata('parameters', cls);
	            parameters = parameters || [];
	            // there might be gaps if some in between parameters do not have annotations.
	            // we pad with nulls.
	            while (parameters.length <= index) {
	                parameters.push(null);
	            }
	            parameters[index] = parameters[index] || [];
	            var annotationsForParam = parameters[index];
	            annotationsForParam.push(annotationInstance);
	            Reflect.defineMetadata('parameters', parameters, cls);
	            return cls;
	        }
	    }
	    ParamDecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    ParamDecoratorFactory.annotationCls = annotationCls;
	    return ParamDecoratorFactory;
	}
	exports.makeParamDecorator = makeParamDecorator;
	function makePropDecorator(annotationCls) {
	    function PropDecoratorFactory() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        var decoratorInstance = Object.create(annotationCls.prototype);
	        annotationCls.apply(decoratorInstance, args);
	        if (this instanceof annotationCls) {
	            return decoratorInstance;
	        }
	        else {
	            return function PropDecorator(target, name) {
	                var meta = Reflect.getOwnMetadata('propMetadata', target.constructor);
	                meta = meta || {};
	                meta[name] = meta[name] || [];
	                meta[name].unshift(decoratorInstance);
	                Reflect.defineMetadata('propMetadata', meta, target.constructor);
	            };
	        }
	    }
	    PropDecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    PropDecoratorFactory.annotationCls = annotationCls;
	    return PropDecoratorFactory;
	}
	exports.makePropDecorator = makePropDecorator;
	//# sourceMappingURL=decorators.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for util
	var decorators_1 = __webpack_require__(17);
	exports.Class = decorators_1.Class;
	//# sourceMappingURL=util.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	* @module
	* @description
	* The `di` module provides dependency injection container services.
	*/
	var metadata_1 = __webpack_require__(12);
	exports.InjectMetadata = metadata_1.InjectMetadata;
	exports.OptionalMetadata = metadata_1.OptionalMetadata;
	exports.InjectableMetadata = metadata_1.InjectableMetadata;
	exports.SelfMetadata = metadata_1.SelfMetadata;
	exports.HostMetadata = metadata_1.HostMetadata;
	exports.SkipSelfMetadata = metadata_1.SkipSelfMetadata;
	exports.DependencyMetadata = metadata_1.DependencyMetadata;
	// we have to reexport * because Dart and TS export two different sets of types
	__export(__webpack_require__(20));
	var forward_ref_1 = __webpack_require__(13);
	exports.forwardRef = forward_ref_1.forwardRef;
	exports.resolveForwardRef = forward_ref_1.resolveForwardRef;
	var injector_1 = __webpack_require__(21);
	exports.Injector = injector_1.Injector;
	var reflective_injector_1 = __webpack_require__(26);
	exports.ReflectiveInjector = reflective_injector_1.ReflectiveInjector;
	var provider_1 = __webpack_require__(34);
	exports.Binding = provider_1.Binding;
	exports.ProviderBuilder = provider_1.ProviderBuilder;
	exports.bind = provider_1.bind;
	exports.Provider = provider_1.Provider;
	exports.provide = provider_1.provide;
	var reflective_provider_1 = __webpack_require__(27);
	exports.ResolvedReflectiveFactory = reflective_provider_1.ResolvedReflectiveFactory;
	exports.ReflectiveDependency = reflective_provider_1.ReflectiveDependency;
	var reflective_key_1 = __webpack_require__(32);
	exports.ReflectiveKey = reflective_key_1.ReflectiveKey;
	var reflective_exceptions_1 = __webpack_require__(33);
	exports.NoProviderError = reflective_exceptions_1.NoProviderError;
	exports.AbstractProviderError = reflective_exceptions_1.AbstractProviderError;
	exports.CyclicDependencyError = reflective_exceptions_1.CyclicDependencyError;
	exports.InstantiationError = reflective_exceptions_1.InstantiationError;
	exports.InvalidProviderError = reflective_exceptions_1.InvalidProviderError;
	exports.NoAnnotationError = reflective_exceptions_1.NoAnnotationError;
	exports.OutOfBoundsError = reflective_exceptions_1.OutOfBoundsError;
	var opaque_token_1 = __webpack_require__(36);
	exports.OpaqueToken = opaque_token_1.OpaqueToken;
	//# sourceMappingURL=di.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(12);
	var decorators_1 = __webpack_require__(17);
	/**
	 * Factory for creating {@link InjectMetadata}.
	 */
	exports.Inject = decorators_1.makeParamDecorator(metadata_1.InjectMetadata);
	/**
	 * Factory for creating {@link OptionalMetadata}.
	 */
	exports.Optional = decorators_1.makeParamDecorator(metadata_1.OptionalMetadata);
	/**
	 * Factory for creating {@link InjectableMetadata}.
	 */
	exports.Injectable = decorators_1.makeDecorator(metadata_1.InjectableMetadata);
	/**
	 * Factory for creating {@link SelfMetadata}.
	 */
	exports.Self = decorators_1.makeParamDecorator(metadata_1.SelfMetadata);
	/**
	 * Factory for creating {@link HostMetadata}.
	 */
	exports.Host = decorators_1.makeParamDecorator(metadata_1.HostMetadata);
	/**
	 * Factory for creating {@link SkipSelfMetadata}.
	 */
	exports.SkipSelf = decorators_1.makeParamDecorator(metadata_1.SkipSelfMetadata);
	//# sourceMappingURL=decorators.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var exceptions_1 = __webpack_require__(22);
	var _THROW_IF_NOT_FOUND = new Object();
	exports.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
	var Injector = (function () {
	    function Injector() {
	    }
	    /**
	     * Retrieves an instance from the injector based on the provided token.
	     * If not found:
	     * - Throws {@link NoProviderError} if no `notFoundValue` that is not equal to
	     * Injector.THROW_IF_NOT_FOUND is given
	     * - Returns the `notFoundValue` otherwise
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/HeXSHg?p=preview))
	     *
	     * ```typescript
	     * var injector = ReflectiveInjector.resolveAndCreate([
	     *   provide("validToken", {useValue: "Value"})
	     * ]);
	     * expect(injector.get("validToken")).toEqual("Value");
	     * expect(() => injector.get("invalidToken")).toThrowError();
	     * ```
	     *
	     * `Injector` returns itself when given `Injector` as a token.
	     *
	     * ```typescript
	     * var injector = ReflectiveInjector.resolveAndCreate([]);
	     * expect(injector.get(Injector)).toBe(injector);
	     * ```
	     */
	    Injector.prototype.get = function (token, notFoundValue) { return exceptions_1.unimplemented(); };
	    Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
	    return Injector;
	}());
	exports.Injector = Injector;
	//# sourceMappingURL=injector.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(23);
	var exception_handler_1 = __webpack_require__(24);
	var exception_handler_2 = __webpack_require__(24);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = "--"; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	* A base class for the WrappedException that can be used to identify
	* a WrappedException from ExceptionHandler without adding circular
	* dependency.
	*/
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var base_wrapped_exception_1 = __webpack_require__(23);
	var collection_1 = __webpack_require__(25);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [provide(ExceptionHandler, {useClass: MyExceptionHandler})])
	 *
	 * ```
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join("\n");
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError("STACKTRACE:");
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError("ORIGINAL STACKTRACE:");
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError("ERROR CONTEXT:");
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).reduce(function (r, a) {
	            r.push(map[a]);
	            return r;
	        }, []);
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(25);
	var reflective_provider_1 = __webpack_require__(27);
	var reflective_exceptions_1 = __webpack_require__(33);
	var exceptions_1 = __webpack_require__(22);
	var reflective_key_1 = __webpack_require__(32);
	var metadata_1 = __webpack_require__(12);
	var injector_1 = __webpack_require__(21);
	var __unused; // avoid unused import when Type union types are erased
	// Threshold for the dynamic version
	var _MAX_CONSTRUCTION_COUNTER = 10;
	var UNDEFINED = new Object();
	var ReflectiveProtoInjectorInlineStrategy = (function () {
	    function ReflectiveProtoInjectorInlineStrategy(protoEI, providers) {
	        this.provider0 = null;
	        this.provider1 = null;
	        this.provider2 = null;
	        this.provider3 = null;
	        this.provider4 = null;
	        this.provider5 = null;
	        this.provider6 = null;
	        this.provider7 = null;
	        this.provider8 = null;
	        this.provider9 = null;
	        this.keyId0 = null;
	        this.keyId1 = null;
	        this.keyId2 = null;
	        this.keyId3 = null;
	        this.keyId4 = null;
	        this.keyId5 = null;
	        this.keyId6 = null;
	        this.keyId7 = null;
	        this.keyId8 = null;
	        this.keyId9 = null;
	        var length = providers.length;
	        if (length > 0) {
	            this.provider0 = providers[0];
	            this.keyId0 = providers[0].key.id;
	        }
	        if (length > 1) {
	            this.provider1 = providers[1];
	            this.keyId1 = providers[1].key.id;
	        }
	        if (length > 2) {
	            this.provider2 = providers[2];
	            this.keyId2 = providers[2].key.id;
	        }
	        if (length > 3) {
	            this.provider3 = providers[3];
	            this.keyId3 = providers[3].key.id;
	        }
	        if (length > 4) {
	            this.provider4 = providers[4];
	            this.keyId4 = providers[4].key.id;
	        }
	        if (length > 5) {
	            this.provider5 = providers[5];
	            this.keyId5 = providers[5].key.id;
	        }
	        if (length > 6) {
	            this.provider6 = providers[6];
	            this.keyId6 = providers[6].key.id;
	        }
	        if (length > 7) {
	            this.provider7 = providers[7];
	            this.keyId7 = providers[7].key.id;
	        }
	        if (length > 8) {
	            this.provider8 = providers[8];
	            this.keyId8 = providers[8].key.id;
	        }
	        if (length > 9) {
	            this.provider9 = providers[9];
	            this.keyId9 = providers[9].key.id;
	        }
	    }
	    ReflectiveProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function (index) {
	        if (index == 0)
	            return this.provider0;
	        if (index == 1)
	            return this.provider1;
	        if (index == 2)
	            return this.provider2;
	        if (index == 3)
	            return this.provider3;
	        if (index == 4)
	            return this.provider4;
	        if (index == 5)
	            return this.provider5;
	        if (index == 6)
	            return this.provider6;
	        if (index == 7)
	            return this.provider7;
	        if (index == 8)
	            return this.provider8;
	        if (index == 9)
	            return this.provider9;
	        throw new reflective_exceptions_1.OutOfBoundsError(index);
	    };
	    ReflectiveProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function (injector) {
	        return new ReflectiveInjectorInlineStrategy(injector, this);
	    };
	    return ReflectiveProtoInjectorInlineStrategy;
	}());
	exports.ReflectiveProtoInjectorInlineStrategy = ReflectiveProtoInjectorInlineStrategy;
	var ReflectiveProtoInjectorDynamicStrategy = (function () {
	    function ReflectiveProtoInjectorDynamicStrategy(protoInj, providers) {
	        this.providers = providers;
	        var len = providers.length;
	        this.keyIds = collection_1.ListWrapper.createFixedSize(len);
	        for (var i = 0; i < len; i++) {
	            this.keyIds[i] = providers[i].key.id;
	        }
	    }
	    ReflectiveProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function (index) {
	        if (index < 0 || index >= this.providers.length) {
	            throw new reflective_exceptions_1.OutOfBoundsError(index);
	        }
	        return this.providers[index];
	    };
	    ReflectiveProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function (ei) {
	        return new ReflectiveInjectorDynamicStrategy(this, ei);
	    };
	    return ReflectiveProtoInjectorDynamicStrategy;
	}());
	exports.ReflectiveProtoInjectorDynamicStrategy = ReflectiveProtoInjectorDynamicStrategy;
	var ReflectiveProtoInjector = (function () {
	    function ReflectiveProtoInjector(providers) {
	        this.numberOfProviders = providers.length;
	        this._strategy = providers.length > _MAX_CONSTRUCTION_COUNTER ?
	            new ReflectiveProtoInjectorDynamicStrategy(this, providers) :
	            new ReflectiveProtoInjectorInlineStrategy(this, providers);
	    }
	    ReflectiveProtoInjector.fromResolvedProviders = function (providers) {
	        return new ReflectiveProtoInjector(providers);
	    };
	    ReflectiveProtoInjector.prototype.getProviderAtIndex = function (index) {
	        return this._strategy.getProviderAtIndex(index);
	    };
	    return ReflectiveProtoInjector;
	}());
	exports.ReflectiveProtoInjector = ReflectiveProtoInjector;
	var ReflectiveInjectorInlineStrategy = (function () {
	    function ReflectiveInjectorInlineStrategy(injector, protoStrategy) {
	        this.injector = injector;
	        this.protoStrategy = protoStrategy;
	        this.obj0 = UNDEFINED;
	        this.obj1 = UNDEFINED;
	        this.obj2 = UNDEFINED;
	        this.obj3 = UNDEFINED;
	        this.obj4 = UNDEFINED;
	        this.obj5 = UNDEFINED;
	        this.obj6 = UNDEFINED;
	        this.obj7 = UNDEFINED;
	        this.obj8 = UNDEFINED;
	        this.obj9 = UNDEFINED;
	    }
	    ReflectiveInjectorInlineStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
	    ReflectiveInjectorInlineStrategy.prototype.instantiateProvider = function (provider) {
	        return this.injector._new(provider);
	    };
	    ReflectiveInjectorInlineStrategy.prototype.getObjByKeyId = function (keyId) {
	        var p = this.protoStrategy;
	        var inj = this.injector;
	        if (p.keyId0 === keyId) {
	            if (this.obj0 === UNDEFINED) {
	                this.obj0 = inj._new(p.provider0);
	            }
	            return this.obj0;
	        }
	        if (p.keyId1 === keyId) {
	            if (this.obj1 === UNDEFINED) {
	                this.obj1 = inj._new(p.provider1);
	            }
	            return this.obj1;
	        }
	        if (p.keyId2 === keyId) {
	            if (this.obj2 === UNDEFINED) {
	                this.obj2 = inj._new(p.provider2);
	            }
	            return this.obj2;
	        }
	        if (p.keyId3 === keyId) {
	            if (this.obj3 === UNDEFINED) {
	                this.obj3 = inj._new(p.provider3);
	            }
	            return this.obj3;
	        }
	        if (p.keyId4 === keyId) {
	            if (this.obj4 === UNDEFINED) {
	                this.obj4 = inj._new(p.provider4);
	            }
	            return this.obj4;
	        }
	        if (p.keyId5 === keyId) {
	            if (this.obj5 === UNDEFINED) {
	                this.obj5 = inj._new(p.provider5);
	            }
	            return this.obj5;
	        }
	        if (p.keyId6 === keyId) {
	            if (this.obj6 === UNDEFINED) {
	                this.obj6 = inj._new(p.provider6);
	            }
	            return this.obj6;
	        }
	        if (p.keyId7 === keyId) {
	            if (this.obj7 === UNDEFINED) {
	                this.obj7 = inj._new(p.provider7);
	            }
	            return this.obj7;
	        }
	        if (p.keyId8 === keyId) {
	            if (this.obj8 === UNDEFINED) {
	                this.obj8 = inj._new(p.provider8);
	            }
	            return this.obj8;
	        }
	        if (p.keyId9 === keyId) {
	            if (this.obj9 === UNDEFINED) {
	                this.obj9 = inj._new(p.provider9);
	            }
	            return this.obj9;
	        }
	        return UNDEFINED;
	    };
	    ReflectiveInjectorInlineStrategy.prototype.getObjAtIndex = function (index) {
	        if (index == 0)
	            return this.obj0;
	        if (index == 1)
	            return this.obj1;
	        if (index == 2)
	            return this.obj2;
	        if (index == 3)
	            return this.obj3;
	        if (index == 4)
	            return this.obj4;
	        if (index == 5)
	            return this.obj5;
	        if (index == 6)
	            return this.obj6;
	        if (index == 7)
	            return this.obj7;
	        if (index == 8)
	            return this.obj8;
	        if (index == 9)
	            return this.obj9;
	        throw new reflective_exceptions_1.OutOfBoundsError(index);
	    };
	    ReflectiveInjectorInlineStrategy.prototype.getMaxNumberOfObjects = function () { return _MAX_CONSTRUCTION_COUNTER; };
	    return ReflectiveInjectorInlineStrategy;
	}());
	exports.ReflectiveInjectorInlineStrategy = ReflectiveInjectorInlineStrategy;
	var ReflectiveInjectorDynamicStrategy = (function () {
	    function ReflectiveInjectorDynamicStrategy(protoStrategy, injector) {
	        this.protoStrategy = protoStrategy;
	        this.injector = injector;
	        this.objs = collection_1.ListWrapper.createFixedSize(protoStrategy.providers.length);
	        collection_1.ListWrapper.fill(this.objs, UNDEFINED);
	    }
	    ReflectiveInjectorDynamicStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
	    ReflectiveInjectorDynamicStrategy.prototype.instantiateProvider = function (provider) {
	        return this.injector._new(provider);
	    };
	    ReflectiveInjectorDynamicStrategy.prototype.getObjByKeyId = function (keyId) {
	        var p = this.protoStrategy;
	        for (var i = 0; i < p.keyIds.length; i++) {
	            if (p.keyIds[i] === keyId) {
	                if (this.objs[i] === UNDEFINED) {
	                    this.objs[i] = this.injector._new(p.providers[i]);
	                }
	                return this.objs[i];
	            }
	        }
	        return UNDEFINED;
	    };
	    ReflectiveInjectorDynamicStrategy.prototype.getObjAtIndex = function (index) {
	        if (index < 0 || index >= this.objs.length) {
	            throw new reflective_exceptions_1.OutOfBoundsError(index);
	        }
	        return this.objs[index];
	    };
	    ReflectiveInjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function () { return this.objs.length; };
	    return ReflectiveInjectorDynamicStrategy;
	}());
	exports.ReflectiveInjectorDynamicStrategy = ReflectiveInjectorDynamicStrategy;
	/**
	 * A ReflectiveDependency injection container used for instantiating objects and resolving
	 * dependencies.
	 *
	 * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
	 * constructor dependencies.
	 *
	 * In typical use, application code asks for the dependencies in the constructor and they are
	 * resolved by the `Injector`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
	 *
	 * The following example creates an `Injector` configured to create `Engine` and `Car`.
	 *
	 * ```typescript
	 * @Injectable()
	 * class Engine {
	 * }
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine:Engine) {}
	 * }
	 *
	 * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	 * var car = injector.get(Car);
	 * expect(car instanceof Car).toBe(true);
	 * expect(car.engine instanceof Engine).toBe(true);
	 * ```
	 *
	 * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
	 * resolve all of the object's dependencies automatically.
	 */
	var ReflectiveInjector = (function () {
	    function ReflectiveInjector() {
	    }
	    /**
	     * Turns an array of provider definitions into an array of resolved providers.
	     *
	     * A resolution is a process of flattening multiple nested arrays and converting individual
	     * providers into an array of {@link ResolvedReflectiveProvider}s.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/AiXTHi?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
	     *
	     * expect(providers.length).toEqual(2);
	     *
	     * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
	     * expect(providers[0].key.displayName).toBe("Car");
	     * expect(providers[0].dependencies.length).toEqual(1);
	     * expect(providers[0].factory).toBeDefined();
	     *
	     * expect(providers[1].key.displayName).toBe("Engine");
	     * });
	     * ```
	     *
	     * See {@link ReflectiveInjector#fromResolvedProviders} for more info.
	     */
	    ReflectiveInjector.resolve = function (providers) {
	        return reflective_provider_1.resolveReflectiveProviders(providers);
	    };
	    /**
	     * Resolves an array of providers and creates an injector from those providers.
	     *
	     * The passed-in providers can be an array of `Type`, {@link Provider},
	     * or a recursive array of more providers.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/ePOccA?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	     * expect(injector.get(Car) instanceof Car).toBe(true);
	     * ```
	     *
	     * This function is slower than the corresponding `fromResolvedProviders`
	     * because it needs to resolve the passed-in providers first.
	     * See {@link Injector#resolve} and {@link Injector#fromResolvedProviders}.
	     */
	    ReflectiveInjector.resolveAndCreate = function (providers, parent) {
	        if (parent === void 0) { parent = null; }
	        var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
	        return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
	    };
	    /**
	     * Creates an injector from previously resolved providers.
	     *
	     * This API is the recommended way to construct injectors in performance-sensitive parts.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/KrSMci?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var providers = ReflectiveInjector.resolve([Car, Engine]);
	     * var injector = ReflectiveInjector.fromResolvedProviders(providers);
	     * expect(injector.get(Car) instanceof Car).toBe(true);
	     * ```
	     */
	    ReflectiveInjector.fromResolvedProviders = function (providers, parent) {
	        if (parent === void 0) { parent = null; }
	        return new ReflectiveInjector_(ReflectiveProtoInjector.fromResolvedProviders(providers), parent);
	    };
	    /**
	     * @deprecated
	     */
	    ReflectiveInjector.fromResolvedBindings = function (providers) {
	        return ReflectiveInjector.fromResolvedProviders(providers);
	    };
	    Object.defineProperty(ReflectiveInjector.prototype, "parent", {
	        /**
	         * Parent of this injector.
	         *
	         * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	         * -->
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/eosMGo?p=preview))
	         *
	         * ```typescript
	         * var parent = ReflectiveInjector.resolveAndCreate([]);
	         * var child = parent.resolveAndCreateChild([]);
	         * expect(child.parent).toBe(parent);
	         * ```
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @internal
	     */
	    ReflectiveInjector.prototype.debugContext = function () { return null; };
	    /**
	     * Resolves an array of providers and creates a child injector from those providers.
	     *
	     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	     * -->
	     *
	     * The passed-in providers can be an array of `Type`, {@link Provider},
	     * or a recursive array of more providers.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/opB3T4?p=preview))
	     *
	     * ```typescript
	     * class ParentProvider {}
	     * class ChildProvider {}
	     *
	     * var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
	     * var child = parent.resolveAndCreateChild([ChildProvider]);
	     *
	     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	     * ```
	     *
	     * This function is slower than the corresponding `createChildFromResolved`
	     * because it needs to resolve the passed-in providers first.
	     * See {@link Injector#resolve} and {@link Injector#createChildFromResolved}.
	     */
	    ReflectiveInjector.prototype.resolveAndCreateChild = function (providers) {
	        return exceptions_1.unimplemented();
	    };
	    /**
	     * Creates a child injector from previously resolved providers.
	     *
	     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	     * -->
	     *
	     * This API is the recommended way to construct injectors in performance-sensitive parts.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/VhyfjN?p=preview))
	     *
	     * ```typescript
	     * class ParentProvider {}
	     * class ChildProvider {}
	     *
	     * var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
	     * var childProviders = ReflectiveInjector.resolve([ChildProvider]);
	     *
	     * var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
	     * var child = parent.createChildFromResolved(childProviders);
	     *
	     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	     * ```
	     */
	    ReflectiveInjector.prototype.createChildFromResolved = function (providers) {
	        return exceptions_1.unimplemented();
	    };
	    /**
	     * Resolves a provider and instantiates an object in the context of the injector.
	     *
	     * The created object does not get cached by the injector.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/yvVXoB?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	     *
	     * var car = injector.resolveAndInstantiate(Car);
	     * expect(car.engine).toBe(injector.get(Engine));
	     * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
	     * ```
	     */
	    ReflectiveInjector.prototype.resolveAndInstantiate = function (provider) { return exceptions_1.unimplemented(); };
	    /**
	     * Instantiates an object using a resolved provider in the context of the injector.
	     *
	     * The created object does not get cached by the injector.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/ptCImQ?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	     * var carProvider = ReflectiveInjector.resolve([Car])[0];
	     * var car = injector.instantiateResolved(carProvider);
	     * expect(car.engine).toBe(injector.get(Engine));
	     * expect(car).not.toBe(injector.instantiateResolved(carProvider));
	     * ```
	     */
	    ReflectiveInjector.prototype.instantiateResolved = function (provider) { return exceptions_1.unimplemented(); };
	    return ReflectiveInjector;
	}());
	exports.ReflectiveInjector = ReflectiveInjector;
	var ReflectiveInjector_ = (function () {
	    /**
	     * Private
	     */
	    function ReflectiveInjector_(_proto /* ProtoInjector */, _parent, _debugContext) {
	        if (_parent === void 0) { _parent = null; }
	        if (_debugContext === void 0) { _debugContext = null; }
	        this._debugContext = _debugContext;
	        /** @internal */
	        this._constructionCounter = 0;
	        this._proto = _proto;
	        this._parent = _parent;
	        this._strategy = _proto._strategy.createInjectorStrategy(this);
	    }
	    /**
	     * @internal
	     */
	    ReflectiveInjector_.prototype.debugContext = function () { return this._debugContext(); };
	    ReflectiveInjector_.prototype.get = function (token, notFoundValue) {
	        if (notFoundValue === void 0) { notFoundValue = injector_1.THROW_IF_NOT_FOUND; }
	        return this._getByKey(reflective_key_1.ReflectiveKey.get(token), null, null, notFoundValue);
	    };
	    ReflectiveInjector_.prototype.getAt = function (index) { return this._strategy.getObjAtIndex(index); };
	    Object.defineProperty(ReflectiveInjector_.prototype, "parent", {
	        get: function () { return this._parent; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ReflectiveInjector_.prototype, "internalStrategy", {
	        /**
	         * @internal
	         * Internal. Do not use.
	         * We return `any` not to export the InjectorStrategy type.
	         */
	        get: function () { return this._strategy; },
	        enumerable: true,
	        configurable: true
	    });
	    ReflectiveInjector_.prototype.resolveAndCreateChild = function (providers) {
	        var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
	        return this.createChildFromResolved(ResolvedReflectiveProviders);
	    };
	    ReflectiveInjector_.prototype.createChildFromResolved = function (providers) {
	        var proto = new ReflectiveProtoInjector(providers);
	        var inj = new ReflectiveInjector_(proto);
	        inj._parent = this;
	        return inj;
	    };
	    ReflectiveInjector_.prototype.resolveAndInstantiate = function (provider) {
	        return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
	    };
	    ReflectiveInjector_.prototype.instantiateResolved = function (provider) {
	        return this._instantiateProvider(provider);
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._new = function (provider) {
	        if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
	            throw new reflective_exceptions_1.CyclicDependencyError(this, provider.key);
	        }
	        return this._instantiateProvider(provider);
	    };
	    ReflectiveInjector_.prototype._instantiateProvider = function (provider) {
	        if (provider.multiProvider) {
	            var res = collection_1.ListWrapper.createFixedSize(provider.resolvedFactories.length);
	            for (var i = 0; i < provider.resolvedFactories.length; ++i) {
	                res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
	            }
	            return res;
	        }
	        else {
	            return this._instantiate(provider, provider.resolvedFactories[0]);
	        }
	    };
	    ReflectiveInjector_.prototype._instantiate = function (provider, ResolvedReflectiveFactory) {
	        var factory = ResolvedReflectiveFactory.factory;
	        var deps = ResolvedReflectiveFactory.dependencies;
	        var length = deps.length;
	        var d0;
	        var d1;
	        var d2;
	        var d3;
	        var d4;
	        var d5;
	        var d6;
	        var d7;
	        var d8;
	        var d9;
	        var d10;
	        var d11;
	        var d12;
	        var d13;
	        var d14;
	        var d15;
	        var d16;
	        var d17;
	        var d18;
	        var d19;
	        try {
	            d0 = length > 0 ? this._getByReflectiveDependency(provider, deps[0]) : null;
	            d1 = length > 1 ? this._getByReflectiveDependency(provider, deps[1]) : null;
	            d2 = length > 2 ? this._getByReflectiveDependency(provider, deps[2]) : null;
	            d3 = length > 3 ? this._getByReflectiveDependency(provider, deps[3]) : null;
	            d4 = length > 4 ? this._getByReflectiveDependency(provider, deps[4]) : null;
	            d5 = length > 5 ? this._getByReflectiveDependency(provider, deps[5]) : null;
	            d6 = length > 6 ? this._getByReflectiveDependency(provider, deps[6]) : null;
	            d7 = length > 7 ? this._getByReflectiveDependency(provider, deps[7]) : null;
	            d8 = length > 8 ? this._getByReflectiveDependency(provider, deps[8]) : null;
	            d9 = length > 9 ? this._getByReflectiveDependency(provider, deps[9]) : null;
	            d10 = length > 10 ? this._getByReflectiveDependency(provider, deps[10]) : null;
	            d11 = length > 11 ? this._getByReflectiveDependency(provider, deps[11]) : null;
	            d12 = length > 12 ? this._getByReflectiveDependency(provider, deps[12]) : null;
	            d13 = length > 13 ? this._getByReflectiveDependency(provider, deps[13]) : null;
	            d14 = length > 14 ? this._getByReflectiveDependency(provider, deps[14]) : null;
	            d15 = length > 15 ? this._getByReflectiveDependency(provider, deps[15]) : null;
	            d16 = length > 16 ? this._getByReflectiveDependency(provider, deps[16]) : null;
	            d17 = length > 17 ? this._getByReflectiveDependency(provider, deps[17]) : null;
	            d18 = length > 18 ? this._getByReflectiveDependency(provider, deps[18]) : null;
	            d19 = length > 19 ? this._getByReflectiveDependency(provider, deps[19]) : null;
	        }
	        catch (e) {
	            if (e instanceof reflective_exceptions_1.AbstractProviderError || e instanceof reflective_exceptions_1.InstantiationError) {
	                e.addKey(this, provider.key);
	            }
	            throw e;
	        }
	        var obj;
	        try {
	            switch (length) {
	                case 0:
	                    obj = factory();
	                    break;
	                case 1:
	                    obj = factory(d0);
	                    break;
	                case 2:
	                    obj = factory(d0, d1);
	                    break;
	                case 3:
	                    obj = factory(d0, d1, d2);
	                    break;
	                case 4:
	                    obj = factory(d0, d1, d2, d3);
	                    break;
	                case 5:
	                    obj = factory(d0, d1, d2, d3, d4);
	                    break;
	                case 6:
	                    obj = factory(d0, d1, d2, d3, d4, d5);
	                    break;
	                case 7:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6);
	                    break;
	                case 8:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
	                    break;
	                case 9:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
	                    break;
	                case 10:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
	                    break;
	                case 11:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
	                    break;
	                case 12:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
	                    break;
	                case 13:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
	                    break;
	                case 14:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
	                    break;
	                case 15:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
	                    break;
	                case 16:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
	                    break;
	                case 17:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
	                    break;
	                case 18:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
	                    break;
	                case 19:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
	                    break;
	                case 20:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
	                    break;
	                default:
	                    throw new exceptions_1.BaseException("Cannot instantiate '" + provider.key.displayName + "' because it has more than 20 dependencies");
	            }
	        }
	        catch (e) {
	            throw new reflective_exceptions_1.InstantiationError(this, e, e.stack, provider.key);
	        }
	        return obj;
	    };
	    ReflectiveInjector_.prototype._getByReflectiveDependency = function (provider, dep) {
	        return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional ? null : injector_1.THROW_IF_NOT_FOUND);
	    };
	    ReflectiveInjector_.prototype._getByKey = function (key, lowerBoundVisibility, upperBoundVisibility, notFoundValue) {
	        if (key === INJECTOR_KEY) {
	            return this;
	        }
	        if (upperBoundVisibility instanceof metadata_1.SelfMetadata) {
	            return this._getByKeySelf(key, notFoundValue);
	        }
	        else {
	            return this._getByKeyDefault(key, notFoundValue, lowerBoundVisibility);
	        }
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._throwOrNull = function (key, notFoundValue) {
	        if (notFoundValue !== injector_1.THROW_IF_NOT_FOUND) {
	            return notFoundValue;
	        }
	        else {
	            throw new reflective_exceptions_1.NoProviderError(this, key);
	        }
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._getByKeySelf = function (key, notFoundValue) {
	        var obj = this._strategy.getObjByKeyId(key.id);
	        return (obj !== UNDEFINED) ? obj : this._throwOrNull(key, notFoundValue);
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._getByKeyDefault = function (key, notFoundValue, lowerBoundVisibility) {
	        var inj;
	        if (lowerBoundVisibility instanceof metadata_1.SkipSelfMetadata) {
	            inj = this._parent;
	        }
	        else {
	            inj = this;
	        }
	        while (inj instanceof ReflectiveInjector_) {
	            var inj_ = inj;
	            var obj = inj_._strategy.getObjByKeyId(key.id);
	            if (obj !== UNDEFINED)
	                return obj;
	            inj = inj_._parent;
	        }
	        if (inj !== null) {
	            return inj.get(key.token, notFoundValue);
	        }
	        else {
	            return this._throwOrNull(key, notFoundValue);
	        }
	    };
	    Object.defineProperty(ReflectiveInjector_.prototype, "displayName", {
	        get: function () {
	            return "ReflectiveInjector(providers: [" + _mapProviders(this, function (b) { return (" \"" + b.key.displayName + "\" "); }).join(", ") + "])";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ReflectiveInjector_.prototype.toString = function () { return this.displayName; };
	    return ReflectiveInjector_;
	}());
	exports.ReflectiveInjector_ = ReflectiveInjector_;
	var INJECTOR_KEY = reflective_key_1.ReflectiveKey.get(injector_1.Injector);
	function _mapProviders(injector, fn) {
	    var res = [];
	    for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
	        res.push(fn(injector._proto.getProviderAtIndex(i)));
	    }
	    return res;
	}
	//# sourceMappingURL=reflective_injector.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(25);
	var reflection_1 = __webpack_require__(28);
	var reflective_key_1 = __webpack_require__(32);
	var metadata_1 = __webpack_require__(12);
	var reflective_exceptions_1 = __webpack_require__(33);
	var forward_ref_1 = __webpack_require__(13);
	var provider_1 = __webpack_require__(34);
	var provider_util_1 = __webpack_require__(35);
	/**
	 * `Dependency` is used by the framework to extend DI.
	 * This is internal to Angular and should not be used directly.
	 */
	var ReflectiveDependency = (function () {
	    function ReflectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
	        this.key = key;
	        this.optional = optional;
	        this.lowerBoundVisibility = lowerBoundVisibility;
	        this.upperBoundVisibility = upperBoundVisibility;
	        this.properties = properties;
	    }
	    ReflectiveDependency.fromKey = function (key) {
	        return new ReflectiveDependency(key, false, null, null, []);
	    };
	    return ReflectiveDependency;
	}());
	exports.ReflectiveDependency = ReflectiveDependency;
	var _EMPTY_LIST = [];
	var ResolvedReflectiveProvider_ = (function () {
	    function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
	        this.key = key;
	        this.resolvedFactories = resolvedFactories;
	        this.multiProvider = multiProvider;
	    }
	    Object.defineProperty(ResolvedReflectiveProvider_.prototype, "resolvedFactory", {
	        get: function () { return this.resolvedFactories[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    return ResolvedReflectiveProvider_;
	}());
	exports.ResolvedReflectiveProvider_ = ResolvedReflectiveProvider_;
	/**
	 * An internal resolved representation of a factory function created by resolving {@link Provider}.
	 */
	var ResolvedReflectiveFactory = (function () {
	    function ResolvedReflectiveFactory(
	        /**
	         * Factory function which can return an instance of an object represented by a key.
	         */
	        factory, 
	        /**
	         * Arguments (dependencies) to the `factory` function.
	         */
	        dependencies) {
	        this.factory = factory;
	        this.dependencies = dependencies;
	    }
	    return ResolvedReflectiveFactory;
	}());
	exports.ResolvedReflectiveFactory = ResolvedReflectiveFactory;
	/**
	 * Resolve a single provider.
	 */
	function resolveReflectiveFactory(provider) {
	    var factoryFn;
	    var resolvedDeps;
	    if (lang_1.isPresent(provider.useClass)) {
	        var useClass = forward_ref_1.resolveForwardRef(provider.useClass);
	        factoryFn = reflection_1.reflector.factory(useClass);
	        resolvedDeps = _dependenciesFor(useClass);
	    }
	    else if (lang_1.isPresent(provider.useExisting)) {
	        factoryFn = function (aliasInstance) { return aliasInstance; };
	        resolvedDeps = [ReflectiveDependency.fromKey(reflective_key_1.ReflectiveKey.get(provider.useExisting))];
	    }
	    else if (lang_1.isPresent(provider.useFactory)) {
	        factoryFn = provider.useFactory;
	        resolvedDeps = constructDependencies(provider.useFactory, provider.dependencies);
	    }
	    else {
	        factoryFn = function () { return provider.useValue; };
	        resolvedDeps = _EMPTY_LIST;
	    }
	    return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
	}
	exports.resolveReflectiveFactory = resolveReflectiveFactory;
	/**
	 * Converts the {@link Provider} into {@link ResolvedProvider}.
	 *
	 * {@link Injector} internally only uses {@link ResolvedProvider}, {@link Provider} contains
	 * convenience provider syntax.
	 */
	function resolveReflectiveProvider(provider) {
	    return new ResolvedReflectiveProvider_(reflective_key_1.ReflectiveKey.get(provider.token), [resolveReflectiveFactory(provider)], provider.multi);
	}
	exports.resolveReflectiveProvider = resolveReflectiveProvider;
	/**
	 * Resolve a list of Providers.
	 */
	function resolveReflectiveProviders(providers) {
	    var normalized = _normalizeProviders(providers, []);
	    var resolved = normalized.map(resolveReflectiveProvider);
	    return collection_1.MapWrapper.values(mergeResolvedReflectiveProviders(resolved, new Map()));
	}
	exports.resolveReflectiveProviders = resolveReflectiveProviders;
	/**
	 * Merges a list of ResolvedProviders into a list where
	 * each key is contained exactly once and multi providers
	 * have been merged.
	 */
	function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
	    for (var i = 0; i < providers.length; i++) {
	        var provider = providers[i];
	        var existing = normalizedProvidersMap.get(provider.key.id);
	        if (lang_1.isPresent(existing)) {
	            if (provider.multiProvider !== existing.multiProvider) {
	                throw new reflective_exceptions_1.MixingMultiProvidersWithRegularProvidersError(existing, provider);
	            }
	            if (provider.multiProvider) {
	                for (var j = 0; j < provider.resolvedFactories.length; j++) {
	                    existing.resolvedFactories.push(provider.resolvedFactories[j]);
	                }
	            }
	            else {
	                normalizedProvidersMap.set(provider.key.id, provider);
	            }
	        }
	        else {
	            var resolvedProvider;
	            if (provider.multiProvider) {
	                resolvedProvider = new ResolvedReflectiveProvider_(provider.key, collection_1.ListWrapper.clone(provider.resolvedFactories), provider.multiProvider);
	            }
	            else {
	                resolvedProvider = provider;
	            }
	            normalizedProvidersMap.set(provider.key.id, resolvedProvider);
	        }
	    }
	    return normalizedProvidersMap;
	}
	exports.mergeResolvedReflectiveProviders = mergeResolvedReflectiveProviders;
	function _normalizeProviders(providers, res) {
	    providers.forEach(function (b) {
	        if (b instanceof lang_1.Type) {
	            res.push(provider_1.provide(b, { useClass: b }));
	        }
	        else if (b instanceof provider_1.Provider) {
	            res.push(b);
	        }
	        else if (provider_util_1.isProviderLiteral(b)) {
	            res.push(provider_util_1.createProvider(b));
	        }
	        else if (b instanceof Array) {
	            _normalizeProviders(b, res);
	        }
	        else if (b instanceof provider_1.ProviderBuilder) {
	            throw new reflective_exceptions_1.InvalidProviderError(b.token);
	        }
	        else {
	            throw new reflective_exceptions_1.InvalidProviderError(b);
	        }
	    });
	    return res;
	}
	function constructDependencies(typeOrFunc, dependencies) {
	    if (lang_1.isBlank(dependencies)) {
	        return _dependenciesFor(typeOrFunc);
	    }
	    else {
	        var params = dependencies.map(function (t) { return [t]; });
	        return dependencies.map(function (t) { return _extractToken(typeOrFunc, t, params); });
	    }
	}
	exports.constructDependencies = constructDependencies;
	function _dependenciesFor(typeOrFunc) {
	    var params = reflection_1.reflector.parameters(typeOrFunc);
	    if (lang_1.isBlank(params))
	        return [];
	    if (params.some(lang_1.isBlank)) {
	        throw new reflective_exceptions_1.NoAnnotationError(typeOrFunc, params);
	    }
	    return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
	}
	function _extractToken(typeOrFunc, metadata /*any[] | any*/, params) {
	    var depProps = [];
	    var token = null;
	    var optional = false;
	    if (!lang_1.isArray(metadata)) {
	        if (metadata instanceof metadata_1.InjectMetadata) {
	            return _createDependency(metadata.token, optional, null, null, depProps);
	        }
	        else {
	            return _createDependency(metadata, optional, null, null, depProps);
	        }
	    }
	    var lowerBoundVisibility = null;
	    var upperBoundVisibility = null;
	    for (var i = 0; i < metadata.length; ++i) {
	        var paramMetadata = metadata[i];
	        if (paramMetadata instanceof lang_1.Type) {
	            token = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.InjectMetadata) {
	            token = paramMetadata.token;
	        }
	        else if (paramMetadata instanceof metadata_1.OptionalMetadata) {
	            optional = true;
	        }
	        else if (paramMetadata instanceof metadata_1.SelfMetadata) {
	            upperBoundVisibility = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.HostMetadata) {
	            upperBoundVisibility = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.SkipSelfMetadata) {
	            lowerBoundVisibility = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.DependencyMetadata) {
	            if (lang_1.isPresent(paramMetadata.token)) {
	                token = paramMetadata.token;
	            }
	            depProps.push(paramMetadata);
	        }
	    }
	    token = forward_ref_1.resolveForwardRef(token);
	    if (lang_1.isPresent(token)) {
	        return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	    }
	    else {
	        throw new reflective_exceptions_1.NoAnnotationError(typeOrFunc, params);
	    }
	}
	function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
	    return new ReflectiveDependency(reflective_key_1.ReflectiveKey.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	}
	//# sourceMappingURL=reflective_provider.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var reflector_1 = __webpack_require__(29);
	var reflector_2 = __webpack_require__(29);
	exports.Reflector = reflector_2.Reflector;
	exports.ReflectionInfo = reflector_2.ReflectionInfo;
	var reflection_capabilities_1 = __webpack_require__(31);
	/**
	 * The {@link Reflector} used internally in Angular to access metadata
	 * about symbols.
	 */
	exports.reflector = new reflector_1.Reflector(new reflection_capabilities_1.ReflectionCapabilities());
	//# sourceMappingURL=reflection.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	var collection_1 = __webpack_require__(25);
	var reflector_reader_1 = __webpack_require__(30);
	/**
	 * Reflective information about a symbol, including annotations, interfaces, and other metadata.
	 */
	var ReflectionInfo = (function () {
	    function ReflectionInfo(annotations, parameters, factory, interfaces, propMetadata) {
	        this.annotations = annotations;
	        this.parameters = parameters;
	        this.factory = factory;
	        this.interfaces = interfaces;
	        this.propMetadata = propMetadata;
	    }
	    return ReflectionInfo;
	}());
	exports.ReflectionInfo = ReflectionInfo;
	/**
	 * Provides access to reflection data about symbols. Used internally by Angular
	 * to power dependency injection and compilation.
	 */
	var Reflector = (function (_super) {
	    __extends(Reflector, _super);
	    function Reflector(reflectionCapabilities) {
	        _super.call(this);
	        /** @internal */
	        this._injectableInfo = new collection_1.Map();
	        /** @internal */
	        this._getters = new collection_1.Map();
	        /** @internal */
	        this._setters = new collection_1.Map();
	        /** @internal */
	        this._methods = new collection_1.Map();
	        this._usedKeys = null;
	        this.reflectionCapabilities = reflectionCapabilities;
	    }
	    Reflector.prototype.isReflectionEnabled = function () { return this.reflectionCapabilities.isReflectionEnabled(); };
	    /**
	     * Causes `this` reflector to track keys used to access
	     * {@link ReflectionInfo} objects.
	     */
	    Reflector.prototype.trackUsage = function () { this._usedKeys = new collection_1.Set(); };
	    /**
	     * Lists types for which reflection information was not requested since
	     * {@link #trackUsage} was called. This list could later be audited as
	     * potential dead code.
	     */
	    Reflector.prototype.listUnusedKeys = function () {
	        var _this = this;
	        if (this._usedKeys == null) {
	            throw new exceptions_1.BaseException('Usage tracking is disabled');
	        }
	        var allTypes = collection_1.MapWrapper.keys(this._injectableInfo);
	        return allTypes.filter(function (key) { return !collection_1.SetWrapper.has(_this._usedKeys, key); });
	    };
	    Reflector.prototype.registerFunction = function (func, funcInfo) {
	        this._injectableInfo.set(func, funcInfo);
	    };
	    Reflector.prototype.registerType = function (type, typeInfo) {
	        this._injectableInfo.set(type, typeInfo);
	    };
	    Reflector.prototype.registerGetters = function (getters) { _mergeMaps(this._getters, getters); };
	    Reflector.prototype.registerSetters = function (setters) { _mergeMaps(this._setters, setters); };
	    Reflector.prototype.registerMethods = function (methods) { _mergeMaps(this._methods, methods); };
	    Reflector.prototype.factory = function (type) {
	        if (this._containsReflectionInfo(type)) {
	            var res = this._getReflectionInfo(type).factory;
	            return lang_1.isPresent(res) ? res : null;
	        }
	        else {
	            return this.reflectionCapabilities.factory(type);
	        }
	    };
	    Reflector.prototype.parameters = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).parameters;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.parameters(typeOrFunc);
	        }
	    };
	    Reflector.prototype.annotations = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).annotations;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.annotations(typeOrFunc);
	        }
	    };
	    Reflector.prototype.propMetadata = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).propMetadata;
	            return lang_1.isPresent(res) ? res : {};
	        }
	        else {
	            return this.reflectionCapabilities.propMetadata(typeOrFunc);
	        }
	    };
	    Reflector.prototype.interfaces = function (type) {
	        if (this._injectableInfo.has(type)) {
	            var res = this._getReflectionInfo(type).interfaces;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.interfaces(type);
	        }
	    };
	    Reflector.prototype.getter = function (name) {
	        if (this._getters.has(name)) {
	            return this._getters.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.getter(name);
	        }
	    };
	    Reflector.prototype.setter = function (name) {
	        if (this._setters.has(name)) {
	            return this._setters.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.setter(name);
	        }
	    };
	    Reflector.prototype.method = function (name) {
	        if (this._methods.has(name)) {
	            return this._methods.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.method(name);
	        }
	    };
	    /** @internal */
	    Reflector.prototype._getReflectionInfo = function (typeOrFunc) {
	        if (lang_1.isPresent(this._usedKeys)) {
	            this._usedKeys.add(typeOrFunc);
	        }
	        return this._injectableInfo.get(typeOrFunc);
	    };
	    /** @internal */
	    Reflector.prototype._containsReflectionInfo = function (typeOrFunc) { return this._injectableInfo.has(typeOrFunc); };
	    Reflector.prototype.importUri = function (type) { return this.reflectionCapabilities.importUri(type); };
	    return Reflector;
	}(reflector_reader_1.ReflectorReader));
	exports.Reflector = Reflector;
	function _mergeMaps(target, config) {
	    collection_1.StringMapWrapper.forEach(config, function (v, k) { return target.set(k, v); });
	}
	//# sourceMappingURL=reflector.js.map

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Provides read-only access to reflection data about symbols. Used internally by Angular
	* to power dependency injection and compilation.
	*/
	var ReflectorReader = (function () {
	    function ReflectorReader() {
	    }
	    return ReflectorReader;
	}());
	exports.ReflectorReader = ReflectorReader;
	//# sourceMappingURL=reflector_reader.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	var ReflectionCapabilities = (function () {
	    function ReflectionCapabilities(reflect) {
	        this._reflect = lang_1.isPresent(reflect) ? reflect : lang_1.global.Reflect;
	    }
	    ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
	    ReflectionCapabilities.prototype.factory = function (t) {
	        switch (t.length) {
	            case 0:
	                return function () { return new t(); };
	            case 1:
	                return function (a1) { return new t(a1); };
	            case 2:
	                return function (a1, a2) { return new t(a1, a2); };
	            case 3:
	                return function (a1, a2, a3) { return new t(a1, a2, a3); };
	            case 4:
	                return function (a1, a2, a3, a4) { return new t(a1, a2, a3, a4); };
	            case 5:
	                return function (a1, a2, a3, a4, a5) { return new t(a1, a2, a3, a4, a5); };
	            case 6:
	                return function (a1, a2, a3, a4, a5, a6) {
	                    return new t(a1, a2, a3, a4, a5, a6);
	                };
	            case 7:
	                return function (a1, a2, a3, a4, a5, a6, a7) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7);
	                };
	            case 8:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8);
	                };
	            case 9:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9);
	                };
	            case 10:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
	                };
	            case 11:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
	                };
	            case 12:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
	                };
	            case 13:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
	                };
	            case 14:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
	                };
	            case 15:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
	                };
	            case 16:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
	                };
	            case 17:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
	                };
	            case 18:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
	                };
	            case 19:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
	                };
	            case 20:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
	                };
	        }
	        ;
	        throw new Error("Cannot create a factory for '" + lang_1.stringify(t) + "' because its constructor has more than 20 arguments");
	    };
	    /** @internal */
	    ReflectionCapabilities.prototype._zipTypesAndAnnotations = function (paramTypes, paramAnnotations) {
	        var result;
	        if (typeof paramTypes === 'undefined') {
	            result = new Array(paramAnnotations.length);
	        }
	        else {
	            result = new Array(paramTypes.length);
	        }
	        for (var i = 0; i < result.length; i++) {
	            // TS outputs Object for parameters without types, while Traceur omits
	            // the annotations. For now we preserve the Traceur behavior to aid
	            // migration, but this can be revisited.
	            if (typeof paramTypes === 'undefined') {
	                result[i] = [];
	            }
	            else if (paramTypes[i] != Object) {
	                result[i] = [paramTypes[i]];
	            }
	            else {
	                result[i] = [];
	            }
	            if (lang_1.isPresent(paramAnnotations) && lang_1.isPresent(paramAnnotations[i])) {
	                result[i] = result[i].concat(paramAnnotations[i]);
	            }
	        }
	        return result;
	    };
	    ReflectionCapabilities.prototype.parameters = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.parameters)) {
	            return typeOrFunc.parameters;
	        }
	        // API of tsickle for lowering decorators to properties on the class.
	        if (lang_1.isPresent(typeOrFunc.ctorParameters)) {
	            var ctorParameters = typeOrFunc.ctorParameters;
	            var paramTypes_1 = ctorParameters.map(function (ctorParam) { return ctorParam && ctorParam.type; });
	            var paramAnnotations_1 = ctorParameters.map(function (ctorParam) { return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators); });
	            return this._zipTypesAndAnnotations(paramTypes_1, paramAnnotations_1);
	        }
	        // API for metadata created by invoking the decorators.
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
	            var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
	            if (lang_1.isPresent(paramTypes) || lang_1.isPresent(paramAnnotations)) {
	                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
	            }
	        }
	        // The array has to be filled with `undefined` because holes would be skipped by `some`
	        var parameters = new Array(typeOrFunc.length);
	        parameters.fill(undefined);
	        return parameters;
	    };
	    ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.annotations)) {
	            var annotations = typeOrFunc.annotations;
	            if (lang_1.isFunction(annotations) && annotations.annotations) {
	                annotations = annotations.annotations;
	            }
	            return annotations;
	        }
	        // API of tsickle for lowering decorators to properties on the class.
	        if (lang_1.isPresent(typeOrFunc.decorators)) {
	            return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
	        }
	        // API for metadata created by invoking the decorators.
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
	            if (lang_1.isPresent(annotations))
	                return annotations;
	        }
	        return [];
	    };
	    ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.propMetadata)) {
	            var propMetadata = typeOrFunc.propMetadata;
	            if (lang_1.isFunction(propMetadata) && propMetadata.propMetadata) {
	                propMetadata = propMetadata.propMetadata;
	            }
	            return propMetadata;
	        }
	        // API of tsickle for lowering decorators to properties on the class.
	        if (lang_1.isPresent(typeOrFunc.propDecorators)) {
	            var propDecorators_1 = typeOrFunc.propDecorators;
	            var propMetadata_1 = {};
	            Object.keys(propDecorators_1)
	                .forEach(function (prop) {
	                propMetadata_1[prop] = convertTsickleDecoratorIntoMetadata(propDecorators_1[prop]);
	            });
	            return propMetadata_1;
	        }
	        // API for metadata created by invoking the decorators.
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
	            if (lang_1.isPresent(propMetadata))
	                return propMetadata;
	        }
	        return {};
	    };
	    ReflectionCapabilities.prototype.interfaces = function (type) {
	        throw new exceptions_1.BaseException("JavaScript does not support interfaces");
	    };
	    ReflectionCapabilities.prototype.getter = function (name) { return new Function('o', 'return o.' + name + ';'); };
	    ReflectionCapabilities.prototype.setter = function (name) {
	        return new Function('o', 'v', 'return o.' + name + ' = v;');
	    };
	    ReflectionCapabilities.prototype.method = function (name) {
	        var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
	        return new Function('o', 'args', functionBody);
	    };
	    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
	    ReflectionCapabilities.prototype.importUri = function (type) { return "./" + lang_1.stringify(type); };
	    return ReflectionCapabilities;
	}());
	exports.ReflectionCapabilities = ReflectionCapabilities;
	function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
	    if (!decoratorInvocations) {
	        return [];
	    }
	    return decoratorInvocations.map(function (decoratorInvocation) {
	        var decoratorType = decoratorInvocation.type;
	        var annotationCls = decoratorType.annotationCls;
	        var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
	        var annotation = Object.create(annotationCls.prototype);
	        annotationCls.apply(annotation, annotationArgs);
	        return annotation;
	    });
	}
	//# sourceMappingURL=reflection_capabilities.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	var forward_ref_1 = __webpack_require__(13);
	/**
	 * A unique object used for retrieving items from the {@link ReflectiveInjector}.
	 *
	 * Keys have:
	 * - a system-wide unique `id`.
	 * - a `token`.
	 *
	 * `Key` is used internally by {@link ReflectiveInjector} because its system-wide unique `id` allows
	 * the
	 * injector to store created objects in a more efficient way.
	 *
	 * `Key` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
	 * resolving
	 * providers.
	 */
	var ReflectiveKey = (function () {
	    /**
	     * Private
	     */
	    function ReflectiveKey(token, id) {
	        this.token = token;
	        this.id = id;
	        if (lang_1.isBlank(token)) {
	            throw new exceptions_1.BaseException('Token must be defined!');
	        }
	    }
	    Object.defineProperty(ReflectiveKey.prototype, "displayName", {
	        /**
	         * Returns a stringified token.
	         */
	        get: function () { return lang_1.stringify(this.token); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Retrieves a `Key` for a token.
	     */
	    ReflectiveKey.get = function (token) {
	        return _globalKeyRegistry.get(forward_ref_1.resolveForwardRef(token));
	    };
	    Object.defineProperty(ReflectiveKey, "numberOfKeys", {
	        /**
	         * @returns the number of keys registered in the system.
	         */
	        get: function () { return _globalKeyRegistry.numberOfKeys; },
	        enumerable: true,
	        configurable: true
	    });
	    return ReflectiveKey;
	}());
	exports.ReflectiveKey = ReflectiveKey;
	/**
	 * @internal
	 */
	var KeyRegistry = (function () {
	    function KeyRegistry() {
	        this._allKeys = new Map();
	    }
	    KeyRegistry.prototype.get = function (token) {
	        if (token instanceof ReflectiveKey)
	            return token;
	        if (this._allKeys.has(token)) {
	            return this._allKeys.get(token);
	        }
	        var newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
	        this._allKeys.set(token, newKey);
	        return newKey;
	    };
	    Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
	        get: function () { return this._allKeys.size; },
	        enumerable: true,
	        configurable: true
	    });
	    return KeyRegistry;
	}());
	exports.KeyRegistry = KeyRegistry;
	var _globalKeyRegistry = new KeyRegistry();
	//# sourceMappingURL=reflective_key.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(25);
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	function findFirstClosedCycle(keys) {
	    var res = [];
	    for (var i = 0; i < keys.length; ++i) {
	        if (collection_1.ListWrapper.contains(res, keys[i])) {
	            res.push(keys[i]);
	            return res;
	        }
	        else {
	            res.push(keys[i]);
	        }
	    }
	    return res;
	}
	function constructResolvingPath(keys) {
	    if (keys.length > 1) {
	        var reversed = findFirstClosedCycle(collection_1.ListWrapper.reversed(keys));
	        var tokenStrs = reversed.map(function (k) { return lang_1.stringify(k.token); });
	        return " (" + tokenStrs.join(' -> ') + ")";
	    }
	    else {
	        return "";
	    }
	}
	/**
	 * Base class for all errors arising from misconfigured providers.
	 */
	var AbstractProviderError = (function (_super) {
	    __extends(AbstractProviderError, _super);
	    function AbstractProviderError(injector, key, constructResolvingMessage) {
	        _super.call(this, "DI Exception");
	        this.keys = [key];
	        this.injectors = [injector];
	        this.constructResolvingMessage = constructResolvingMessage;
	        this.message = this.constructResolvingMessage(this.keys);
	    }
	    AbstractProviderError.prototype.addKey = function (injector, key) {
	        this.injectors.push(injector);
	        this.keys.push(key);
	        this.message = this.constructResolvingMessage(this.keys);
	    };
	    Object.defineProperty(AbstractProviderError.prototype, "context", {
	        get: function () { return this.injectors[this.injectors.length - 1].debugContext(); },
	        enumerable: true,
	        configurable: true
	    });
	    return AbstractProviderError;
	}(exceptions_1.BaseException));
	exports.AbstractProviderError = AbstractProviderError;
	/**
	 * Thrown when trying to retrieve a dependency by `Key` from {@link Injector}, but the
	 * {@link Injector} does not have a {@link Provider} for {@link Key}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
	 *
	 * ```typescript
	 * class A {
	 *   constructor(b:B) {}
	 * }
	 *
	 * expect(() => Injector.resolveAndCreate([A])).toThrowError();
	 * ```
	 */
	var NoProviderError = (function (_super) {
	    __extends(NoProviderError, _super);
	    function NoProviderError(injector, key) {
	        _super.call(this, injector, key, function (keys) {
	            var first = lang_1.stringify(collection_1.ListWrapper.first(keys).token);
	            return "No provider for " + first + "!" + constructResolvingPath(keys);
	        });
	    }
	    return NoProviderError;
	}(AbstractProviderError));
	exports.NoProviderError = NoProviderError;
	/**
	 * Thrown when dependencies form a cycle.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
	 *
	 * ```typescript
	 * var injector = Injector.resolveAndCreate([
	 *   provide("one", {useFactory: (two) => "two", deps: [[new Inject("two")]]}),
	 *   provide("two", {useFactory: (one) => "one", deps: [[new Inject("one")]]})
	 * ]);
	 *
	 * expect(() => injector.get("one")).toThrowError();
	 * ```
	 *
	 * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
	 */
	var CyclicDependencyError = (function (_super) {
	    __extends(CyclicDependencyError, _super);
	    function CyclicDependencyError(injector, key) {
	        _super.call(this, injector, key, function (keys) {
	            return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
	        });
	    }
	    return CyclicDependencyError;
	}(AbstractProviderError));
	exports.CyclicDependencyError = CyclicDependencyError;
	/**
	 * Thrown when a constructing type returns with an Error.
	 *
	 * The `InstantiationError` class contains the original error plus the dependency graph which caused
	 * this object to be instantiated.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
	 *
	 * ```typescript
	 * class A {
	 *   constructor() {
	 *     throw new Error('message');
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([A]);
	
	 * try {
	 *   injector.get(A);
	 * } catch (e) {
	 *   expect(e instanceof InstantiationError).toBe(true);
	 *   expect(e.originalException.message).toEqual("message");
	 *   expect(e.originalStack).toBeDefined();
	 * }
	 * ```
	 */
	var InstantiationError = (function (_super) {
	    __extends(InstantiationError, _super);
	    function InstantiationError(injector, originalException, originalStack, key) {
	        _super.call(this, "DI Exception", originalException, originalStack, null);
	        this.keys = [key];
	        this.injectors = [injector];
	    }
	    InstantiationError.prototype.addKey = function (injector, key) {
	        this.injectors.push(injector);
	        this.keys.push(key);
	    };
	    Object.defineProperty(InstantiationError.prototype, "wrapperMessage", {
	        get: function () {
	            var first = lang_1.stringify(collection_1.ListWrapper.first(this.keys).token);
	            return "Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InstantiationError.prototype, "causeKey", {
	        get: function () { return this.keys[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InstantiationError.prototype, "context", {
	        get: function () { return this.injectors[this.injectors.length - 1].debugContext(); },
	        enumerable: true,
	        configurable: true
	    });
	    return InstantiationError;
	}(exceptions_1.WrappedException));
	exports.InstantiationError = InstantiationError;
	/**
	 * Thrown when an object other then {@link Provider} (or `Type`) is passed to {@link Injector}
	 * creation.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
	 *
	 * ```typescript
	 * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
	 * ```
	 */
	var InvalidProviderError = (function (_super) {
	    __extends(InvalidProviderError, _super);
	    function InvalidProviderError(provider) {
	        _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " +
	            provider.toString());
	    }
	    return InvalidProviderError;
	}(exceptions_1.BaseException));
	exports.InvalidProviderError = InvalidProviderError;
	/**
	 * Thrown when the class has no annotation information.
	 *
	 * Lack of annotation information prevents the {@link Injector} from determining which dependencies
	 * need to be injected into the constructor.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
	 *
	 * ```typescript
	 * class A {
	 *   constructor(b) {}
	 * }
	 *
	 * expect(() => Injector.resolveAndCreate([A])).toThrowError();
	 * ```
	 *
	 * This error is also thrown when the class not marked with {@link Injectable} has parameter types.
	 *
	 * ```typescript
	 * class B {}
	 *
	 * class A {
	 *   constructor(b:B) {} // no information about the parameter types of A is available at runtime.
	 * }
	 *
	 * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
	 * ```
	 */
	var NoAnnotationError = (function (_super) {
	    __extends(NoAnnotationError, _super);
	    function NoAnnotationError(typeOrFunc, params) {
	        _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
	    }
	    NoAnnotationError._genMessage = function (typeOrFunc, params) {
	        var signature = [];
	        for (var i = 0, ii = params.length; i < ii; i++) {
	            var parameter = params[i];
	            if (lang_1.isBlank(parameter) || parameter.length == 0) {
	                signature.push('?');
	            }
	            else {
	                signature.push(parameter.map(lang_1.stringify).join(' '));
	            }
	        }
	        return "Cannot resolve all parameters for '" + lang_1.stringify(typeOrFunc) + "'(" +
	            signature.join(', ') + "). " +
	            "Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" +
	            lang_1.stringify(typeOrFunc) + "' is decorated with Injectable.";
	    };
	    return NoAnnotationError;
	}(exceptions_1.BaseException));
	exports.NoAnnotationError = NoAnnotationError;
	/**
	 * Thrown when getting an object by index.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
	 *
	 * ```typescript
	 * class A {}
	 *
	 * var injector = Injector.resolveAndCreate([A]);
	 *
	 * expect(() => injector.getAt(100)).toThrowError();
	 * ```
	 */
	var OutOfBoundsError = (function (_super) {
	    __extends(OutOfBoundsError, _super);
	    function OutOfBoundsError(index) {
	        _super.call(this, "Index " + index + " is out-of-bounds.");
	    }
	    return OutOfBoundsError;
	}(exceptions_1.BaseException));
	exports.OutOfBoundsError = OutOfBoundsError;
	// TODO: add a working example after alpha38 is released
	/**
	 * Thrown when a multi provider and a regular provider are bound to the same token.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * expect(() => Injector.resolveAndCreate([
	 *   new Provider("Strings", {useValue: "string1", multi: true}),
	 *   new Provider("Strings", {useValue: "string2", multi: false})
	 * ])).toThrowError();
	 * ```
	 */
	var MixingMultiProvidersWithRegularProvidersError = (function (_super) {
	    __extends(MixingMultiProvidersWithRegularProvidersError, _super);
	    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
	        _super.call(this, "Cannot mix multi providers and regular providers, got: " + provider1.toString() + " " +
	            provider2.toString());
	    }
	    return MixingMultiProvidersWithRegularProvidersError;
	}(exceptions_1.BaseException));
	exports.MixingMultiProvidersWithRegularProvidersError = MixingMultiProvidersWithRegularProvidersError;
	//# sourceMappingURL=reflective_exceptions.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	/**
	 * Describes how the {@link Injector} should instantiate a given token.
	 *
	 * See {@link provide}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/GNAyj6K6PfYg2NBzgwZ5?p%3Dpreview&p=preview))
	 *
	 * ```javascript
	 * var injector = Injector.resolveAndCreate([
	 *   new Provider("message", { useValue: 'Hello' })
	 * ]);
	 *
	 * expect(injector.get("message")).toEqual('Hello');
	 * ```
	 * @ts2dart_const
	 */
	var Provider = (function () {
	    function Provider(token, _a) {
	        var useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
	        this.token = token;
	        this.useClass = useClass;
	        this.useValue = useValue;
	        this.useExisting = useExisting;
	        this.useFactory = useFactory;
	        this.dependencies = deps;
	        this._multi = multi;
	    }
	    Object.defineProperty(Provider.prototype, "multi", {
	        // TODO: Provide a full working example after alpha38 is released.
	        /**
	         * Creates multiple providers matching the same token (a multi-provider).
	         *
	         * Multi-providers are used for creating pluggable service, where the system comes
	         * with some default providers, and the user can register additional providers.
	         * The combination of the default providers and the additional providers will be
	         * used to drive the behavior of the system.
	         *
	         * ### Example
	         *
	         * ```typescript
	         * var injector = Injector.resolveAndCreate([
	         *   new Provider("Strings", { useValue: "String1", multi: true}),
	         *   new Provider("Strings", { useValue: "String2", multi: true})
	         * ]);
	         *
	         * expect(injector.get("Strings")).toEqual(["String1", "String2"]);
	         * ```
	         *
	         * Multi-providers and regular providers cannot be mixed. The following
	         * will throw an exception:
	         *
	         * ```typescript
	         * var injector = Injector.resolveAndCreate([
	         *   new Provider("Strings", { useValue: "String1", multi: true }),
	         *   new Provider("Strings", { useValue: "String2"})
	         * ]);
	         * ```
	         */
	        get: function () { return lang_1.normalizeBool(this._multi); },
	        enumerable: true,
	        configurable: true
	    });
	    return Provider;
	}());
	exports.Provider = Provider;
	/**
	 * See {@link Provider} instead.
	 *
	 * @deprecated
	 * @ts2dart_const
	 */
	var Binding = (function (_super) {
	    __extends(Binding, _super);
	    function Binding(token, _a) {
	        var toClass = _a.toClass, toValue = _a.toValue, toAlias = _a.toAlias, toFactory = _a.toFactory, deps = _a.deps, multi = _a.multi;
	        _super.call(this, token, {
	            useClass: toClass,
	            useValue: toValue,
	            useExisting: toAlias,
	            useFactory: toFactory,
	            deps: deps,
	            multi: multi
	        });
	    }
	    Object.defineProperty(Binding.prototype, "toClass", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useClass; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Binding.prototype, "toAlias", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useExisting; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Binding.prototype, "toFactory", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useFactory; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Binding.prototype, "toValue", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useValue; },
	        enumerable: true,
	        configurable: true
	    });
	    return Binding;
	}(Provider));
	exports.Binding = Binding;
	/**
	 * Creates a {@link Provider}.
	 *
	 * To construct a {@link Provider}, bind a `token` to either a class, a value, a factory function,
	 * or
	 * to an existing `token`.
	 * See {@link ProviderBuilder} for more details.
	 *
	 * The `token` is most commonly a class or {@link OpaqueToken-class.html}.
	 *
	 * @deprecated
	 */
	function bind(token) {
	    return new ProviderBuilder(token);
	}
	exports.bind = bind;
	/**
	 * Helper class for the {@link bind} function.
	 */
	var ProviderBuilder = (function () {
	    function ProviderBuilder(token) {
	        this.token = token;
	    }
	    /**
	     * Binds a DI token to a class.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/ZpBCSYqv6e2ud5KXLdxQ?p=preview))
	     *
	     * Because `toAlias` and `toClass` are often confused, the example contains
	     * both use cases for easy comparison.
	     *
	     * ```typescript
	     * class Vehicle {}
	     *
	     * class Car extends Vehicle {}
	     *
	     * var injectorClass = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useClass: Car})
	     * ]);
	     * var injectorAlias = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useExisting: Car})
	     * ]);
	     *
	     * expect(injectorClass.get(Vehicle)).not.toBe(injectorClass.get(Car));
	     * expect(injectorClass.get(Vehicle) instanceof Car).toBe(true);
	     *
	     * expect(injectorAlias.get(Vehicle)).toBe(injectorAlias.get(Car));
	     * expect(injectorAlias.get(Vehicle) instanceof Car).toBe(true);
	     * ```
	     */
	    ProviderBuilder.prototype.toClass = function (type) {
	        if (!lang_1.isType(type)) {
	            throw new exceptions_1.BaseException("Trying to create a class provider but \"" + lang_1.stringify(type) + "\" is not a class!");
	        }
	        return new Provider(this.token, { useClass: type });
	    };
	    /**
	     * Binds a DI token to a value.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/G024PFHmDL0cJFgfZK8O?p=preview))
	     *
	     * ```typescript
	     * var injector = Injector.resolveAndCreate([
	     *   provide('message', {useValue: 'Hello'})
	     * ]);
	     *
	     * expect(injector.get('message')).toEqual('Hello');
	     * ```
	     */
	    ProviderBuilder.prototype.toValue = function (value) { return new Provider(this.token, { useValue: value }); };
	    /**
	     * Binds a DI token to an existing token.
	     *
	     * Angular will return the same instance as if the provided token was used. (This is
	     * in contrast to `useClass` where a separate instance of `useClass` will be returned.)
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/uBaoF2pN5cfc5AfZapNw?p=preview))
	     *
	     * Because `toAlias` and `toClass` are often confused, the example contains
	     * both use cases for easy comparison.
	     *
	     * ```typescript
	     * class Vehicle {}
	     *
	     * class Car extends Vehicle {}
	     *
	     * var injectorAlias = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useExisting: Car})
	     * ]);
	     * var injectorClass = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useClass: Car})
	     * ]);
	     *
	     * expect(injectorAlias.get(Vehicle)).toBe(injectorAlias.get(Car));
	     * expect(injectorAlias.get(Vehicle) instanceof Car).toBe(true);
	     *
	     * expect(injectorClass.get(Vehicle)).not.toBe(injectorClass.get(Car));
	     * expect(injectorClass.get(Vehicle) instanceof Car).toBe(true);
	     * ```
	     */
	    ProviderBuilder.prototype.toAlias = function (aliasToken) {
	        if (lang_1.isBlank(aliasToken)) {
	            throw new exceptions_1.BaseException("Can not alias " + lang_1.stringify(this.token) + " to a blank value!");
	        }
	        return new Provider(this.token, { useExisting: aliasToken });
	    };
	    /**
	     * Binds a DI token to a function which computes the value.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/OejNIfTT3zb1iBxaIYOb?p=preview))
	     *
	     * ```typescript
	     * var injector = Injector.resolveAndCreate([
	     *   provide(Number, {useFactory: () => { return 1+2; }}),
	     *   provide(String, {useFactory: (v) => { return "Value: " + v; }, deps: [Number]})
	     * ]);
	     *
	     * expect(injector.get(Number)).toEqual(3);
	     * expect(injector.get(String)).toEqual('Value: 3');
	     * ```
	     */
	    ProviderBuilder.prototype.toFactory = function (factory, dependencies) {
	        if (!lang_1.isFunction(factory)) {
	            throw new exceptions_1.BaseException("Trying to create a factory provider but \"" + lang_1.stringify(factory) + "\" is not a function!");
	        }
	        return new Provider(this.token, { useFactory: factory, deps: dependencies });
	    };
	    return ProviderBuilder;
	}());
	exports.ProviderBuilder = ProviderBuilder;
	/**
	 * Creates a {@link Provider}.
	 *
	 * See {@link Provider} for more details.
	 *
	 * <!-- TODO: improve the docs -->
	 */
	function provide(token, _a) {
	    var useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
	    return new Provider(token, {
	        useClass: useClass,
	        useValue: useValue,
	        useExisting: useExisting,
	        useFactory: useFactory,
	        deps: deps,
	        multi: multi
	    });
	}
	exports.provide = provide;
	//# sourceMappingURL=provider.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var provider_1 = __webpack_require__(34);
	function isProviderLiteral(obj) {
	    return obj && typeof obj == 'object' && obj.provide;
	}
	exports.isProviderLiteral = isProviderLiteral;
	function createProvider(obj) {
	    return new provider_1.Provider(obj.provide, obj);
	}
	exports.createProvider = createProvider;
	//# sourceMappingURL=provider_util.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Creates a token that can be used in a DI Provider.
	*
	* ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
	*
	* ```typescript
	* var t = new OpaqueToken("value");
	*
	* var injector = Injector.resolveAndCreate([
	*   provide(t, {useValue: "bindingValue"})
	* ]);
	*
	* expect(injector.get(t)).toEqual("bindingValue");
	* ```
	*
	* Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
	* caused by multiple providers using the same string as two different tokens.
	*
	* Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
	* error messages.
	* @ts2dart_const
	*/
	var OpaqueToken = (function () {
	    function OpaqueToken(_desc) {
	        this._desc = _desc;
	    }
	    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
	    return OpaqueToken;
	}());
	exports.OpaqueToken = OpaqueToken;
	//# sourceMappingURL=opaque_token.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ng_zone_1 = __webpack_require__(38);
	var lang_1 = __webpack_require__(11);
	var di_1 = __webpack_require__(19);
	var application_tokens_1 = __webpack_require__(63);
	var async_1 = __webpack_require__(39);
	var collection_1 = __webpack_require__(25);
	var testability_1 = __webpack_require__(64);
	var component_resolver_1 = __webpack_require__(65);
	var exceptions_1 = __webpack_require__(22);
	var console_1 = __webpack_require__(84);
	var profile_1 = __webpack_require__(73);
	/**
	 * Create an Angular zone.
	 */
	function createNgZone() {
	    return new ng_zone_1.NgZone({ enableLongStackTrace: lang_1.assertionsEnabled() });
	}
	exports.createNgZone = createNgZone;
	var _platform;
	var _inPlatformCreate = false;
	/**
	 * Creates a platform.
	 * Platforms have to be eagerly created via this function.
	 */
	function createPlatform(injector) {
	    if (_inPlatformCreate) {
	        throw new exceptions_1.BaseException('Already creating a platform...');
	    }
	    if (lang_1.isPresent(_platform) && !_platform.disposed) {
	        throw new exceptions_1.BaseException("There can be only one platform. Destroy the previous one to create a new one.");
	    }
	    lang_1.lockMode();
	    _inPlatformCreate = true;
	    try {
	        _platform = injector.get(PlatformRef);
	    }
	    finally {
	        _inPlatformCreate = false;
	    }
	    return _platform;
	}
	exports.createPlatform = createPlatform;
	/**
	 * Checks that there currently is a platform
	 * which contains the given token as a provider.
	 */
	function assertPlatform(requiredToken) {
	    var platform = getPlatform();
	    if (lang_1.isBlank(platform)) {
	        throw new exceptions_1.BaseException('Not platform exists!');
	    }
	    if (lang_1.isPresent(platform) && lang_1.isBlank(platform.injector.get(requiredToken, null))) {
	        throw new exceptions_1.BaseException('A platform with a different configuration has been created. Please destroy it first.');
	    }
	    return platform;
	}
	exports.assertPlatform = assertPlatform;
	/**
	 * Dispose the existing platform.
	 */
	function disposePlatform() {
	    if (lang_1.isPresent(_platform) && !_platform.disposed) {
	        _platform.dispose();
	    }
	}
	exports.disposePlatform = disposePlatform;
	/**
	 * Returns the current platform.
	 */
	function getPlatform() {
	    return lang_1.isPresent(_platform) && !_platform.disposed ? _platform : null;
	}
	exports.getPlatform = getPlatform;
	/**
	 * Shortcut for ApplicationRef.bootstrap.
	 * Requires a platform the be created first.
	 */
	function coreBootstrap(injector, componentFactory) {
	    var appRef = injector.get(ApplicationRef);
	    return appRef.bootstrap(componentFactory);
	}
	exports.coreBootstrap = coreBootstrap;
	/**
	 * Resolves the componentFactory for the given component,
	 * waits for asynchronous initializers and bootstraps the component.
	 * Requires a platform the be created first.
	 */
	function coreLoadAndBootstrap(injector, componentType) {
	    var appRef = injector.get(ApplicationRef);
	    return appRef.run(function () {
	        var componentResolver = injector.get(component_resolver_1.ComponentResolver);
	        return async_1.PromiseWrapper
	            .all([componentResolver.resolveComponent(componentType), appRef.waitForAsyncInitializers()])
	            .then(function (arr) { return appRef.bootstrap(arr[0]); });
	    });
	}
	exports.coreLoadAndBootstrap = coreLoadAndBootstrap;
	/**
	 * The Angular platform is the entry point for Angular on a web page. Each page
	 * has exactly one platform, and services (such as reflection) which are common
	 * to every Angular application running on the page are bound in its scope.
	 *
	 * A page's platform is initialized implicitly when {@link bootstrap}() is called, or
	 * explicitly by calling {@link createPlatform}().
	 */
	var PlatformRef = (function () {
	    function PlatformRef() {
	    }
	    Object.defineProperty(PlatformRef.prototype, "injector", {
	        /**
	         * Retrieve the platform {@link Injector}, which is the parent injector for
	         * every Angular application on the page and provides singleton providers.
	         */
	        get: function () { throw exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(PlatformRef.prototype, "disposed", {
	        get: function () { throw exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return PlatformRef;
	}());
	exports.PlatformRef = PlatformRef;
	var PlatformRef_ = (function (_super) {
	    __extends(PlatformRef_, _super);
	    function PlatformRef_(_injector) {
	        _super.call(this);
	        this._injector = _injector;
	        /** @internal */
	        this._applications = [];
	        /** @internal */
	        this._disposeListeners = [];
	        this._disposed = false;
	        if (!_inPlatformCreate) {
	            throw new exceptions_1.BaseException('Platforms have to be created via `createPlatform`!');
	        }
	        var inits = _injector.get(application_tokens_1.PLATFORM_INITIALIZER, null);
	        if (lang_1.isPresent(inits))
	            inits.forEach(function (init) { return init(); });
	    }
	    PlatformRef_.prototype.registerDisposeListener = function (dispose) { this._disposeListeners.push(dispose); };
	    Object.defineProperty(PlatformRef_.prototype, "injector", {
	        get: function () { return this._injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformRef_.prototype, "disposed", {
	        get: function () { return this._disposed; },
	        enumerable: true,
	        configurable: true
	    });
	    PlatformRef_.prototype.addApplication = function (appRef) { this._applications.push(appRef); };
	    PlatformRef_.prototype.dispose = function () {
	        collection_1.ListWrapper.clone(this._applications).forEach(function (app) { return app.dispose(); });
	        this._disposeListeners.forEach(function (dispose) { return dispose(); });
	        this._disposed = true;
	    };
	    /** @internal */
	    PlatformRef_.prototype._applicationDisposed = function (app) { collection_1.ListWrapper.remove(this._applications, app); };
	    PlatformRef_.decorators = [
	        { type: di_1.Injectable },
	    ];
	    PlatformRef_.ctorParameters = [
	        { type: di_1.Injector, },
	    ];
	    return PlatformRef_;
	}(PlatformRef));
	exports.PlatformRef_ = PlatformRef_;
	/**
	 * A reference to an Angular application running on a page.
	 *
	 * For more about Angular applications, see the documentation for {@link bootstrap}.
	 */
	var ApplicationRef = (function () {
	    function ApplicationRef() {
	    }
	    Object.defineProperty(ApplicationRef.prototype, "injector", {
	        /**
	         * Retrieve the application {@link Injector}.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ApplicationRef.prototype, "zone", {
	        /**
	         * Retrieve the application {@link NgZone}.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
	        /**
	         * Get a list of component types registered to this application.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return ApplicationRef;
	}());
	exports.ApplicationRef = ApplicationRef;
	var ApplicationRef_ = (function (_super) {
	    __extends(ApplicationRef_, _super);
	    function ApplicationRef_(_platform, _zone, _injector) {
	        var _this = this;
	        _super.call(this);
	        this._platform = _platform;
	        this._zone = _zone;
	        this._injector = _injector;
	        /** @internal */
	        this._bootstrapListeners = [];
	        /** @internal */
	        this._disposeListeners = [];
	        /** @internal */
	        this._rootComponents = [];
	        /** @internal */
	        this._rootComponentTypes = [];
	        /** @internal */
	        this._changeDetectorRefs = [];
	        /** @internal */
	        this._runningTick = false;
	        /** @internal */
	        this._enforceNoNewChanges = false;
	        var zone = _injector.get(ng_zone_1.NgZone);
	        this._enforceNoNewChanges = lang_1.assertionsEnabled();
	        zone.run(function () { _this._exceptionHandler = _injector.get(exceptions_1.ExceptionHandler); });
	        this._asyncInitDonePromise = this.run(function () {
	            var inits = _injector.get(application_tokens_1.APP_INITIALIZER, null);
	            var asyncInitResults = [];
	            var asyncInitDonePromise;
	            if (lang_1.isPresent(inits)) {
	                for (var i = 0; i < inits.length; i++) {
	                    var initResult = inits[i]();
	                    if (lang_1.isPromise(initResult)) {
	                        asyncInitResults.push(initResult);
	                    }
	                }
	            }
	            if (asyncInitResults.length > 0) {
	                asyncInitDonePromise =
	                    async_1.PromiseWrapper.all(asyncInitResults).then(function (_) { return _this._asyncInitDone = true; });
	                _this._asyncInitDone = false;
	            }
	            else {
	                _this._asyncInitDone = true;
	                asyncInitDonePromise = async_1.PromiseWrapper.resolve(true);
	            }
	            return asyncInitDonePromise;
	        });
	        async_1.ObservableWrapper.subscribe(zone.onError, function (error) {
	            _this._exceptionHandler.call(error.error, error.stackTrace);
	        });
	        async_1.ObservableWrapper.subscribe(this._zone.onMicrotaskEmpty, function (_) { _this._zone.run(function () { _this.tick(); }); });
	    }
	    ApplicationRef_.prototype.registerBootstrapListener = function (listener) {
	        this._bootstrapListeners.push(listener);
	    };
	    ApplicationRef_.prototype.registerDisposeListener = function (dispose) { this._disposeListeners.push(dispose); };
	    ApplicationRef_.prototype.registerChangeDetector = function (changeDetector) {
	        this._changeDetectorRefs.push(changeDetector);
	    };
	    ApplicationRef_.prototype.unregisterChangeDetector = function (changeDetector) {
	        collection_1.ListWrapper.remove(this._changeDetectorRefs, changeDetector);
	    };
	    ApplicationRef_.prototype.waitForAsyncInitializers = function () { return this._asyncInitDonePromise; };
	    ApplicationRef_.prototype.run = function (callback) {
	        var _this = this;
	        var zone = this.injector.get(ng_zone_1.NgZone);
	        var result;
	        // Note: Don't use zone.runGuarded as we want to know about
	        // the thrown exception!
	        // Note: the completer needs to be created outside
	        // of `zone.run` as Dart swallows rejected promises
	        // via the onError callback of the promise.
	        var completer = async_1.PromiseWrapper.completer();
	        zone.run(function () {
	            try {
	                result = callback();
	                if (lang_1.isPromise(result)) {
	                    async_1.PromiseWrapper.then(result, function (ref) { completer.resolve(ref); }, function (err, stackTrace) {
	                        completer.reject(err, stackTrace);
	                        _this._exceptionHandler.call(err, stackTrace);
	                    });
	                }
	            }
	            catch (e) {
	                _this._exceptionHandler.call(e, e.stack);
	                throw e;
	            }
	        });
	        return lang_1.isPromise(result) ? completer.promise : result;
	    };
	    ApplicationRef_.prototype.bootstrap = function (componentFactory) {
	        var _this = this;
	        if (!this._asyncInitDone) {
	            throw new exceptions_1.BaseException('Cannot bootstrap as there are still asynchronous initializers running. Wait for them using waitForAsyncInitializers().');
	        }
	        return this.run(function () {
	            _this._rootComponentTypes.push(componentFactory.componentType);
	            var compRef = componentFactory.create(_this._injector, [], componentFactory.selector);
	            compRef.onDestroy(function () { _this._unloadComponent(compRef); });
	            var testability = compRef.injector.get(testability_1.Testability, null);
	            if (lang_1.isPresent(testability)) {
	                compRef.injector.get(testability_1.TestabilityRegistry)
	                    .registerApplication(compRef.location.nativeElement, testability);
	            }
	            _this._loadComponent(compRef);
	            var c = _this._injector.get(console_1.Console);
	            if (lang_1.assertionsEnabled()) {
	                c.log("Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.");
	            }
	            return compRef;
	        });
	    };
	    /** @internal */
	    ApplicationRef_.prototype._loadComponent = function (componentRef) {
	        this._changeDetectorRefs.push(componentRef.changeDetectorRef);
	        this.tick();
	        this._rootComponents.push(componentRef);
	        this._bootstrapListeners.forEach(function (listener) { return listener(componentRef); });
	    };
	    /** @internal */
	    ApplicationRef_.prototype._unloadComponent = function (componentRef) {
	        if (!collection_1.ListWrapper.contains(this._rootComponents, componentRef)) {
	            return;
	        }
	        this.unregisterChangeDetector(componentRef.changeDetectorRef);
	        collection_1.ListWrapper.remove(this._rootComponents, componentRef);
	    };
	    Object.defineProperty(ApplicationRef_.prototype, "injector", {
	        get: function () { return this._injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ApplicationRef_.prototype, "zone", {
	        get: function () { return this._zone; },
	        enumerable: true,
	        configurable: true
	    });
	    ApplicationRef_.prototype.tick = function () {
	        if (this._runningTick) {
	            throw new exceptions_1.BaseException("ApplicationRef.tick is called recursively");
	        }
	        var s = ApplicationRef_._tickScope();
	        try {
	            this._runningTick = true;
	            this._changeDetectorRefs.forEach(function (detector) { return detector.detectChanges(); });
	            if (this._enforceNoNewChanges) {
	                this._changeDetectorRefs.forEach(function (detector) { return detector.checkNoChanges(); });
	            }
	        }
	        finally {
	            this._runningTick = false;
	            profile_1.wtfLeave(s);
	        }
	    };
	    ApplicationRef_.prototype.dispose = function () {
	        // TODO(alxhub): Dispose of the NgZone.
	        collection_1.ListWrapper.clone(this._rootComponents).forEach(function (ref) { return ref.destroy(); });
	        this._disposeListeners.forEach(function (dispose) { return dispose(); });
	        this._platform._applicationDisposed(this);
	    };
	    Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
	        get: function () { return this._rootComponentTypes; },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    ApplicationRef_._tickScope = profile_1.wtfCreateScope('ApplicationRef#tick()');
	    ApplicationRef_.decorators = [
	        { type: di_1.Injectable },
	    ];
	    ApplicationRef_.ctorParameters = [
	        { type: PlatformRef_, },
	        { type: ng_zone_1.NgZone, },
	        { type: di_1.Injector, },
	    ];
	    return ApplicationRef_;
	}(ApplicationRef));
	exports.ApplicationRef_ = ApplicationRef_;
	/**
	 * @internal
	 */
	exports.PLATFORM_CORE_PROVIDERS = 
	/*@ts2dart_const*/ [
	    PlatformRef_,
	    /*@ts2dart_const*/ (
	    /* @ts2dart_Provider */ { provide: PlatformRef, useExisting: PlatformRef_ })
	];
	/**
	 * @internal
	 */
	exports.APPLICATION_CORE_PROVIDERS = [
	    /* @ts2dart_Provider */ { provide: ng_zone_1.NgZone, useFactory: createNgZone, deps: [] },
	    ApplicationRef_,
	    /* @ts2dart_Provider */ { provide: ApplicationRef, useExisting: ApplicationRef_ }
	];
	//# sourceMappingURL=application_ref.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var async_1 = __webpack_require__(39);
	var ng_zone_impl_1 = __webpack_require__(62);
	var exceptions_1 = __webpack_require__(22);
	var ng_zone_impl_2 = __webpack_require__(62);
	exports.NgZoneError = ng_zone_impl_2.NgZoneError;
	/**
	 * An injectable service for executing work inside or outside of the Angular zone.
	 *
	 * The most common use of this service is to optimize performance when starting a work consisting of
	 * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
	 * Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
	 * can reenter the Angular zone via {@link #run}.
	 *
	 * <!-- TODO: add/fix links to:
	 *   - docs explaining zones and the use of zones in Angular and change-detection
	 *   - link to runOutsideAngular/run (throughout this file!)
	 *   -->
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
	 * ```
	 * import {Component, View, NgZone} from '@angular/core';
	 * import {NgIf} from '@angular/common';
	 *
	 * @Component({
	 *   selector: 'ng-zone-demo'.
	 *   template: `
	 *     <h2>Demo: NgZone</h2>
	 *
	 *     <p>Progress: {{progress}}%</p>
	 *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
	 *
	 *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
	 *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
	 *   `,
	 *   directives: [NgIf]
	 * })
	 * export class NgZoneDemo {
	 *   progress: number = 0;
	 *   label: string;
	 *
	 *   constructor(private _ngZone: NgZone) {}
	 *
	 *   // Loop inside the Angular zone
	 *   // so the UI DOES refresh after each setTimeout cycle
	 *   processWithinAngularZone() {
	 *     this.label = 'inside';
	 *     this.progress = 0;
	 *     this._increaseProgress(() => console.log('Inside Done!'));
	 *   }
	 *
	 *   // Loop outside of the Angular zone
	 *   // so the UI DOES NOT refresh after each setTimeout cycle
	 *   processOutsideOfAngularZone() {
	 *     this.label = 'outside';
	 *     this.progress = 0;
	 *     this._ngZone.runOutsideAngular(() => {
	 *       this._increaseProgress(() => {
	 *       // reenter the Angular zone and display done
	 *       this._ngZone.run(() => {console.log('Outside Done!') });
	 *     }}));
	 *   }
	 *
	 *
	 *   _increaseProgress(doneCallback: () => void) {
	 *     this.progress += 1;
	 *     console.log(`Current progress: ${this.progress}%`);
	 *
	 *     if (this.progress < 100) {
	 *       window.setTimeout(() => this._increaseProgress(doneCallback)), 10)
	 *     } else {
	 *       doneCallback();
	 *     }
	 *   }
	 * }
	 * ```
	 */
	var NgZone = (function () {
	    /**
	     * @param {bool} enableLongStackTrace whether to enable long stack trace. They should only be
	     *               enabled in development mode as they significantly impact perf.
	     */
	    function NgZone(_a) {
	        var _this = this;
	        var _b = _a.enableLongStackTrace, enableLongStackTrace = _b === void 0 ? false : _b;
	        this._hasPendingMicrotasks = false;
	        this._hasPendingMacrotasks = false;
	        /** @internal */
	        this._isStable = true;
	        /** @internal */
	        this._nesting = 0;
	        /** @internal */
	        this._onUnstable = new async_1.EventEmitter(false);
	        /** @internal */
	        this._onMicrotaskEmpty = new async_1.EventEmitter(false);
	        /** @internal */
	        this._onStable = new async_1.EventEmitter(false);
	        /** @internal */
	        this._onErrorEvents = new async_1.EventEmitter(false);
	        this._zoneImpl = new ng_zone_impl_1.NgZoneImpl({
	            trace: enableLongStackTrace,
	            onEnter: function () {
	                // console.log('ZONE.enter', this._nesting, this._isStable);
	                _this._nesting++;
	                if (_this._isStable) {
	                    _this._isStable = false;
	                    _this._onUnstable.emit(null);
	                }
	            },
	            onLeave: function () {
	                _this._nesting--;
	                // console.log('ZONE.leave', this._nesting, this._isStable);
	                _this._checkStable();
	            },
	            setMicrotask: function (hasMicrotasks) {
	                _this._hasPendingMicrotasks = hasMicrotasks;
	                _this._checkStable();
	            },
	            setMacrotask: function (hasMacrotasks) { _this._hasPendingMacrotasks = hasMacrotasks; },
	            onError: function (error) { return _this._onErrorEvents.emit(error); }
	        });
	    }
	    NgZone.isInAngularZone = function () { return ng_zone_impl_1.NgZoneImpl.isInAngularZone(); };
	    NgZone.assertInAngularZone = function () {
	        if (!ng_zone_impl_1.NgZoneImpl.isInAngularZone()) {
	            throw new exceptions_1.BaseException('Expected to be in Angular Zone, but it is not!');
	        }
	    };
	    NgZone.assertNotInAngularZone = function () {
	        if (ng_zone_impl_1.NgZoneImpl.isInAngularZone()) {
	            throw new exceptions_1.BaseException('Expected to not be in Angular Zone, but it is!');
	        }
	    };
	    NgZone.prototype._checkStable = function () {
	        var _this = this;
	        if (this._nesting == 0) {
	            if (!this._hasPendingMicrotasks && !this._isStable) {
	                try {
	                    // console.log('ZONE.microtaskEmpty');
	                    this._nesting++;
	                    this._onMicrotaskEmpty.emit(null);
	                }
	                finally {
	                    this._nesting--;
	                    if (!this._hasPendingMicrotasks) {
	                        try {
	                            // console.log('ZONE.stable', this._nesting, this._isStable);
	                            this.runOutsideAngular(function () { return _this._onStable.emit(null); });
	                        }
	                        finally {
	                            this._isStable = true;
	                        }
	                    }
	                }
	            }
	        }
	    };
	    ;
	    Object.defineProperty(NgZone.prototype, "onUnstable", {
	        /**
	         * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
	         */
	        get: function () { return this._onUnstable; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "onMicrotaskEmpty", {
	        /**
	         * Notifies when there is no more microtasks enqueue in the current VM Turn.
	         * This is a hint for Angular to do change detection, which may enqueue more microtasks.
	         * For this reason this event can fire multiple times per VM Turn.
	         */
	        get: function () { return this._onMicrotaskEmpty; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "onStable", {
	        /**
	         * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
	         * implies we are about to relinquish VM turn.
	         * This event gets called just once.
	         */
	        get: function () { return this._onStable; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "onError", {
	        /**
	         * Notify that an error has been delivered.
	         */
	        get: function () { return this._onErrorEvents; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
	        /**
	         * Whether there are any outstanding microtasks.
	         */
	        get: function () { return this._hasPendingMicrotasks; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "hasPendingMacrotasks", {
	        /**
	         * Whether there are any outstanding microtasks.
	         */
	        get: function () { return this._hasPendingMacrotasks; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Executes the `fn` function synchronously within the Angular zone and returns value returned by
	     * the function.
	     *
	     * Running functions via `run` allows you to reenter Angular zone from a task that was executed
	     * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
	     *
	     * Any future tasks or microtasks scheduled from within this function will continue executing from
	     * within the Angular zone.
	     *
	     * If a synchronous error happens it will be rethrown and not reported via `onError`.
	     */
	    NgZone.prototype.run = function (fn) { return this._zoneImpl.runInner(fn); };
	    /**
	     * Same as #run, except that synchronous errors are caught and forwarded
	     * via `onError` and not rethrown.
	     */
	    NgZone.prototype.runGuarded = function (fn) { return this._zoneImpl.runInnerGuarded(fn); };
	    /**
	     * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
	     * the function.
	     *
	     * Running functions via `runOutsideAngular` allows you to escape Angular's zone and do work that
	     * doesn't trigger Angular change-detection or is subject to Angular's error handling.
	     *
	     * Any future tasks or microtasks scheduled from within this function will continue executing from
	     * outside of the Angular zone.
	     *
	     * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
	     */
	    NgZone.prototype.runOutsideAngular = function (fn) { return this._zoneImpl.runOuter(fn); };
	    return NgZone;
	}());
	exports.NgZone = NgZone;
	//# sourceMappingURL=ng_zone.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(11);
	var promise_1 = __webpack_require__(40);
	exports.PromiseWrapper = promise_1.PromiseWrapper;
	exports.PromiseCompleter = promise_1.PromiseCompleter;
	var Subject_1 = __webpack_require__(41);
	var PromiseObservable_1 = __webpack_require__(60);
	var toPromise_1 = __webpack_require__(61);
	var Observable_1 = __webpack_require__(42);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(41);
	exports.Subject = Subject_2.Subject;
	var TimerWrapper = (function () {
	    function TimerWrapper() {
	    }
	    TimerWrapper.setTimeout = function (fn, millis) {
	        return lang_1.global.setTimeout(fn, millis);
	    };
	    TimerWrapper.clearTimeout = function (id) { lang_1.global.clearTimeout(id); };
	    TimerWrapper.setInterval = function (fn, millis) {
	        return lang_1.global.setInterval(fn, millis);
	    };
	    TimerWrapper.clearInterval = function (id) { lang_1.global.clearInterval(id); };
	    return TimerWrapper;
	}());
	exports.TimerWrapper = TimerWrapper;
	var ObservableWrapper = (function () {
	    function ObservableWrapper() {
	    }
	    // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
	    ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
	        if (onComplete === void 0) { onComplete = function () { }; }
	        onError = (typeof onError === "function") && onError || lang_1.noop;
	        onComplete = (typeof onComplete === "function") && onComplete || lang_1.noop;
	        return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
	    };
	    ObservableWrapper.isObservable = function (obs) { return !!obs.subscribe; };
	    /**
	     * Returns whether `obs` has any subscribers listening to events.
	     */
	    ObservableWrapper.hasSubscribers = function (obs) { return obs.observers.length > 0; };
	    ObservableWrapper.dispose = function (subscription) { subscription.unsubscribe(); };
	    /**
	     * @deprecated - use callEmit() instead
	     */
	    ObservableWrapper.callNext = function (emitter, value) { emitter.next(value); };
	    ObservableWrapper.callEmit = function (emitter, value) { emitter.emit(value); };
	    ObservableWrapper.callError = function (emitter, error) { emitter.error(error); };
	    ObservableWrapper.callComplete = function (emitter) { emitter.complete(); };
	    ObservableWrapper.fromPromise = function (promise) {
	        return PromiseObservable_1.PromiseObservable.create(promise);
	    };
	    ObservableWrapper.toPromise = function (obj) { return toPromise_1.toPromise.call(obj); };
	    return ObservableWrapper;
	}());
	exports.ObservableWrapper = ObservableWrapper;
	/**
	 * Use by directives and components to emit custom Events.
	 *
	 * ### Examples
	 *
	 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	 * title gets clicked:
	 *
	 * ```
	 * @Component({
	 *   selector: 'zippy',
	 *   template: `
	 *   <div class="zippy">
	 *     <div (click)="toggle()">Toggle</div>
	 *     <div [hidden]="!visible">
	 *       <ng-content></ng-content>
	 *     </div>
	 *  </div>`})
	 * export class Zippy {
	 *   visible: boolean = true;
	 *   @Output() open: EventEmitter<any> = new EventEmitter();
	 *   @Output() close: EventEmitter<any> = new EventEmitter();
	 *
	 *   toggle() {
	 *     this.visible = !this.visible;
	 *     if (this.visible) {
	 *       this.open.emit(null);
	 *     } else {
	 *       this.close.emit(null);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * Use Rx.Observable but provides an adapter to make it work as specified here:
	 * https://github.com/jhusain/observable-spec
	 *
	 * Once a reference implementation of the spec is available, switch to it.
	 */
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    /**
	     * Creates an instance of [EventEmitter], which depending on [isAsync],
	     * delivers events synchronously or asynchronously.
	     */
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = true; }
	        _super.call(this);
	        this._isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext.next(value); }); } :
	                function (value) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this._isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this._isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                function (value) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this._isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this._isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	var PromiseCompleter = (function () {
	    function PromiseCompleter() {
	        var _this = this;
	        this.promise = new Promise(function (res, rej) {
	            _this.resolve = res;
	            _this.reject = rej;
	        });
	    }
	    return PromiseCompleter;
	}());
	exports.PromiseCompleter = PromiseCompleter;
	var PromiseWrapper = (function () {
	    function PromiseWrapper() {
	    }
	    PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
	    PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
	    // Note: We can't rename this method into `catch`, as this is not a valid
	    // method name in Dart.
	    PromiseWrapper.catchError = function (promise, onError) {
	        return promise.catch(onError);
	    };
	    PromiseWrapper.all = function (promises) {
	        if (promises.length == 0)
	            return Promise.resolve([]);
	        return Promise.all(promises);
	    };
	    PromiseWrapper.then = function (promise, success, rejection) {
	        return promise.then(success, rejection);
	    };
	    PromiseWrapper.wrap = function (computation) {
	        return new Promise(function (res, rej) {
	            try {
	                res(computation());
	            }
	            catch (e) {
	                rej(e);
	            }
	        });
	    };
	    PromiseWrapper.scheduleMicrotask = function (computation) {
	        PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
	    };
	    PromiseWrapper.isPromise = function (obj) { return obj instanceof Promise; };
	    PromiseWrapper.completer = function () { return new PromiseCompleter(); };
	    return PromiseWrapper;
	}());
	exports.PromiseWrapper = PromiseWrapper;
	//# sourceMappingURL=promise.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(42);
	var Subscriber_1 = __webpack_require__(47);
	var Subscription_1 = __webpack_require__(49);
	var SubjectSubscription_1 = __webpack_require__(57);
	var rxSubscriber_1 = __webpack_require__(55);
	var throwError_1 = __webpack_require__(58);
	var ObjectUnsubscribedError_1 = __webpack_require__(59);
	/**
	 * @class Subject<T>
	 */
	var Subject = (function (_super) {
	    __extends(Subject, _super);
	    function Subject(destination, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.source = source;
	        this.observers = [];
	        this.isUnsubscribed = false;
	        this.isStopped = false;
	        this.hasErrored = false;
	        this.dispatching = false;
	        this.hasCompleted = false;
	        this.source = source;
	    }
	    Subject.prototype.lift = function (operator) {
	        var subject = new Subject(this.destination || this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.add = function (subscription) {
	        return Subscription_1.Subscription.prototype.add.call(this, subscription);
	    };
	    Subject.prototype.remove = function (subscription) {
	        Subscription_1.Subscription.prototype.remove.call(this, subscription);
	    };
	    Subject.prototype.unsubscribe = function () {
	        Subscription_1.Subscription.prototype.unsubscribe.call(this);
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.source) {
	            return this.source.subscribe(subscriber);
	        }
	        else {
	            if (subscriber.isUnsubscribed) {
	                return;
	            }
	            else if (this.hasErrored) {
	                return subscriber.error(this.errorValue);
	            }
	            else if (this.hasCompleted) {
	                return subscriber.complete();
	            }
	            this.throwIfUnsubscribed();
	            var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	            this.observers.push(subscriber);
	            return subscription;
	        }
	    };
	    Subject.prototype._unsubscribe = function () {
	        this.source = null;
	        this.isStopped = true;
	        this.observers = null;
	        this.destination = null;
	    };
	    Subject.prototype.next = function (value) {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.dispatching = true;
	        this._next(value);
	        this.dispatching = false;
	        if (this.hasErrored) {
	            this._error(this.errorValue);
	        }
	        else if (this.hasCompleted) {
	            this._complete();
	        }
	    };
	    Subject.prototype.error = function (err) {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.isStopped = true;
	        this.hasErrored = true;
	        this.errorValue = err;
	        if (this.dispatching) {
	            return;
	        }
	        this._error(err);
	    };
	    Subject.prototype.complete = function () {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.isStopped = true;
	        this.hasCompleted = true;
	        if (this.dispatching) {
	            return;
	        }
	        this._complete();
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new SubjectObservable(this);
	        return observable;
	    };
	    Subject.prototype._next = function (value) {
	        if (this.destination) {
	            this.destination.next(value);
	        }
	        else {
	            this._finalNext(value);
	        }
	    };
	    Subject.prototype._finalNext = function (value) {
	        var index = -1;
	        var observers = this.observers.slice(0);
	        var len = observers.length;
	        while (++index < len) {
	            observers[index].next(value);
	        }
	    };
	    Subject.prototype._error = function (err) {
	        if (this.destination) {
	            this.destination.error(err);
	        }
	        else {
	            this._finalError(err);
	        }
	    };
	    Subject.prototype._finalError = function (err) {
	        var index = -1;
	        var observers = this.observers;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.observers = null;
	        this.isUnsubscribed = true;
	        if (observers) {
	            var len = observers.length;
	            while (++index < len) {
	                observers[index].error(err);
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    Subject.prototype._complete = function () {
	        if (this.destination) {
	            this.destination.complete();
	        }
	        else {
	            this._finalComplete();
	        }
	    };
	    Subject.prototype._finalComplete = function () {
	        var index = -1;
	        var observers = this.observers;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.observers = null;
	        this.isUnsubscribed = true;
	        if (observers) {
	            var len = observers.length;
	            while (++index < len) {
	                observers[index].complete();
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    Subject.prototype.throwIfUnsubscribed = function () {
	        if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	    };
	    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return new Subscriber_1.Subscriber(this);
	    };
	    Subject.create = function (destination, source) {
	        return new Subject(destination, source);
	    };
	    return Subject;
	}(Observable_1.Observable));
	exports.Subject = Subject;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectObservable = (function (_super) {
	    __extends(SubjectObservable, _super);
	    function SubjectObservable(source) {
	        _super.call(this);
	        this.source = source;
	    }
	    return SubjectObservable;
	}(Observable_1.Observable));
	//# sourceMappingURL=Subject.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(43);
	var observable_1 = __webpack_require__(45);
	var toSubscriber_1 = __webpack_require__(46);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * Registers handlers for handling emitted values, error and completions from the observable, and
	     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	     * @method subscribe
	     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled
	     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	     * @return {ISubscription} a subscription reference to the registered handlers
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        sink.add(operator ? operator.call(sink, this) : this._subscribe(sink));
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` imple will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.$$observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {"use strict";
	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
	/* tslint:disable:no-unused-variable */
	var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	var freeGlobal = objectTypes[typeof global] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)(module), (function() { return this; }())))

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(43);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.observable) {
	        exports.$$observable = Symbol.observable;
	    }
	    else {
	        if (typeof Symbol.for === 'function') {
	            exports.$$observable = Symbol.for('observable');
	        }
	        else {
	            exports.$$observable = Symbol('observable');
	        }
	        Symbol.observable = exports.$$observable;
	    }
	}
	else {
	    exports.$$observable = '@@observable';
	}
	//# sourceMappingURL=observable.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(47);
	var rxSubscriber_1 = __webpack_require__(55);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver && typeof nextOrObserver === 'object') {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        else if (typeof nextOrObserver[rxSubscriber_1.$$rxSubscriber] === 'function') {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(48);
	var Subscription_1 = __webpack_require__(49);
	var rxSubscriber_1 = __webpack_require__(55);
	var Observer_1 = __webpack_require__(56);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return this;
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(50);
	var isObject_1 = __webpack_require__(51);
	var isFunction_1 = __webpack_require__(48);
	var tryCatch_1 = __webpack_require__(52);
	var errorObject_1 = __webpack_require__(53);
	var UnsubscriptionError_1 = __webpack_require__(54);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.isUnsubscribed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `isUnsubscribed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
	            return;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.isUnsubscribed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        return sub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.isUnsubscribed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(53);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        this.name = 'UnsubscriptionError';
	        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n') : '';
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(43);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    isUnsubscribed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(49);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectSubscription = (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, observer) {
	        _super.call(this);
	        this.subject = subject;
	        this.observer = observer;
	        this.isUnsubscribed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isUnsubscribed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.observer);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription_1.Subscription));
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";
	function throwError(e) { throw e; }
	exports.throwError = throwError;
	//# sourceMappingURL=throwError.js.map

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an action is invalid because the object has been
	 * unsubscribed.
	 *
	 * @see {@link Subject}
	 * @see {@link BehaviorSubject}
	 *
	 * @class ObjectUnsubscribedError
	 */
	var ObjectUnsubscribedError = (function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        _super.call(this, 'object unsubscribed');
	        this.name = 'ObjectUnsubscribedError';
	    }
	    return ObjectUnsubscribedError;
	}(Error));
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(43);
	var Observable_1 = __webpack_require__(42);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var PromiseObservable = (function (_super) {
	    __extends(PromiseObservable, _super);
	    function PromiseObservable(promise, scheduler) {
	        if (scheduler === void 0) { scheduler = null; }
	        _super.call(this);
	        this.promise = promise;
	        this.scheduler = scheduler;
	    }
	    /**
	     * @param promise
	     * @param scheduler
	     * @return {PromiseObservable}
	     * @static true
	     * @name fromPromise
	     * @owner Observable
	     */
	    PromiseObservable.create = function (promise, scheduler) {
	        if (scheduler === void 0) { scheduler = null; }
	        return new PromiseObservable(promise, scheduler);
	    };
	    PromiseObservable.prototype._subscribe = function (subscriber) {
	        var _this = this;
	        var promise = this.promise;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            if (this._isScalar) {
	                if (!subscriber.isUnsubscribed) {
	                    subscriber.next(this.value);
	                    subscriber.complete();
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.next(value);
	                        subscriber.complete();
	                    }
	                }, function (err) {
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.error(err);
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	        else {
	            if (this._isScalar) {
	                if (!subscriber.isUnsubscribed) {
	                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	                    }
	                }, function (err) {
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	    };
	    return PromiseObservable;
	}(Observable_1.Observable));
	exports.PromiseObservable = PromiseObservable;
	function dispatchNext(arg) {
	    var value = arg.value, subscriber = arg.subscriber;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.next(value);
	        subscriber.complete();
	    }
	}
	function dispatchError(arg) {
	    var err = arg.err, subscriber = arg.subscriber;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.error(err);
	    }
	}
	//# sourceMappingURL=PromiseObservable.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(43);
	/**
	 * @param PromiseCtor
	 * @return {Promise<T>}
	 * @method toPromise
	 * @owner Observable
	 */
	function toPromise(PromiseCtor) {
	    var _this = this;
	    if (!PromiseCtor) {
	        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	            PromiseCtor = root_1.root.Rx.config.Promise;
	        }
	        else if (root_1.root.Promise) {
	            PromiseCtor = root_1.root.Promise;
	        }
	    }
	    if (!PromiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return new PromiseCtor(function (resolve, reject) {
	        var value;
	        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	    });
	}
	exports.toPromise = toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Stores error information; delivered via [NgZone.onError] stream.
	*/
	var NgZoneError = (function () {
	    function NgZoneError(error, stackTrace) {
	        this.error = error;
	        this.stackTrace = stackTrace;
	    }
	    return NgZoneError;
	}());
	exports.NgZoneError = NgZoneError;
	var NgZoneImpl = (function () {
	    function NgZoneImpl(_a) {
	        var _this = this;
	        var trace = _a.trace, onEnter = _a.onEnter, onLeave = _a.onLeave, setMicrotask = _a.setMicrotask, setMacrotask = _a.setMacrotask, onError = _a.onError;
	        this.onEnter = onEnter;
	        this.onLeave = onLeave;
	        this.setMicrotask = setMicrotask;
	        this.setMacrotask = setMacrotask;
	        this.onError = onError;
	        if (Zone) {
	            this.outer = this.inner = Zone.current;
	            if (Zone['wtfZoneSpec']) {
	                this.inner = this.inner.fork(Zone['wtfZoneSpec']);
	            }
	            if (trace && Zone['longStackTraceZoneSpec']) {
	                this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
	            }
	            this.inner = this.inner.fork({
	                name: 'angular',
	                properties: { 'isAngularZone': true },
	                onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
	                    try {
	                        _this.onEnter();
	                        return delegate.invokeTask(target, task, applyThis, applyArgs);
	                    }
	                    finally {
	                        _this.onLeave();
	                    }
	                },
	                onInvoke: function (delegate, current, target, callback, applyThis, applyArgs, source) {
	                    try {
	                        _this.onEnter();
	                        return delegate.invoke(target, callback, applyThis, applyArgs, source);
	                    }
	                    finally {
	                        _this.onLeave();
	                    }
	                },
	                onHasTask: function (delegate, current, target, hasTaskState) {
	                    delegate.hasTask(target, hasTaskState);
	                    if (current == target) {
	                        // We are only interested in hasTask events which originate from our zone
	                        // (A child hasTask event is not interesting to us)
	                        if (hasTaskState.change == 'microTask') {
	                            _this.setMicrotask(hasTaskState.microTask);
	                        }
	                        else if (hasTaskState.change == 'macroTask') {
	                            _this.setMacrotask(hasTaskState.macroTask);
	                        }
	                    }
	                },
	                onHandleError: function (delegate, current, target, error) {
	                    delegate.handleError(target, error);
	                    _this.onError(new NgZoneError(error, error.stack));
	                    return false;
	                }
	            });
	        }
	        else {
	            throw new Error('Angular requires Zone.js polyfill.');
	        }
	    }
	    NgZoneImpl.isInAngularZone = function () { return Zone.current.get('isAngularZone') === true; };
	    NgZoneImpl.prototype.runInner = function (fn) { return this.inner.run(fn); };
	    ;
	    NgZoneImpl.prototype.runInnerGuarded = function (fn) { return this.inner.runGuarded(fn); };
	    ;
	    NgZoneImpl.prototype.runOuter = function (fn) { return this.outer.run(fn); };
	    ;
	    return NgZoneImpl;
	}());
	exports.NgZoneImpl = NgZoneImpl;
	//# sourceMappingURL=ng_zone_impl.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var di_1 = __webpack_require__(19);
	var lang_1 = __webpack_require__(11);
	/**
	 * A DI Token representing a unique string id assigned to the application by Angular and used
	 * primarily for prefixing application attributes and CSS styles when
	 * {@link ViewEncapsulation#Emulated} is being used.
	 *
	 * If you need to avoid randomly generated value to be used as an application id, you can provide
	 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
	 * using this token.
	 */
	exports.APP_ID = new di_1.OpaqueToken('AppId');
	function _appIdRandomProviderFactory() {
	    return "" + _randomChar() + _randomChar() + _randomChar();
	}
	/**
	 * Providers that will generate a random APP_ID_TOKEN.
	 */
	exports.APP_ID_RANDOM_PROVIDER = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: exports.APP_ID,
	    useFactory: _appIdRandomProviderFactory,
	    deps: []
	};
	function _randomChar() {
	    return lang_1.StringWrapper.fromCharCode(97 + lang_1.Math.floor(lang_1.Math.random() * 25));
	}
	/**
	 * A function that will be executed when a platform is initialized.
	 */
	exports.PLATFORM_INITIALIZER = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Platform Initializer");
	/**
	 * A function that will be executed when an application is initialized.
	 */
	exports.APP_INITIALIZER = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Application Initializer");
	/**
	 * A token which indicates the root directory of the application
	 */
	exports.PACKAGE_ROOT_URL = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Application Packages Root URL");
	//# sourceMappingURL=application_tokens.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(25);
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	var ng_zone_1 = __webpack_require__(38);
	var async_1 = __webpack_require__(39);
	var decorators_1 = __webpack_require__(20);
	var Testability = (function () {
	    function Testability(_ngZone) {
	        this._ngZone = _ngZone;
	        /** @internal */
	        this._pendingCount = 0;
	        /** @internal */
	        this._isZoneStable = true;
	        /**
	         * Whether any work was done since the last 'whenStable' callback. This is
	         * useful to detect if this could have potentially destabilized another
	         * component while it is stabilizing.
	         * @internal
	         */
	        this._didWork = false;
	        /** @internal */
	        this._callbacks = [];
	        this._watchAngularEvents();
	    }
	    /** @internal */
	    Testability.prototype._watchAngularEvents = function () {
	        var _this = this;
	        async_1.ObservableWrapper.subscribe(this._ngZone.onUnstable, function (_) {
	            _this._didWork = true;
	            _this._isZoneStable = false;
	        });
	        this._ngZone.runOutsideAngular(function () {
	            async_1.ObservableWrapper.subscribe(_this._ngZone.onStable, function (_) {
	                ng_zone_1.NgZone.assertNotInAngularZone();
	                lang_1.scheduleMicroTask(function () {
	                    _this._isZoneStable = true;
	                    _this._runCallbacksIfReady();
	                });
	            });
	        });
	    };
	    Testability.prototype.increasePendingRequestCount = function () {
	        this._pendingCount += 1;
	        this._didWork = true;
	        return this._pendingCount;
	    };
	    Testability.prototype.decreasePendingRequestCount = function () {
	        this._pendingCount -= 1;
	        if (this._pendingCount < 0) {
	            throw new exceptions_1.BaseException('pending async requests below zero');
	        }
	        this._runCallbacksIfReady();
	        return this._pendingCount;
	    };
	    Testability.prototype.isStable = function () {
	        return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
	    };
	    /** @internal */
	    Testability.prototype._runCallbacksIfReady = function () {
	        var _this = this;
	        if (this.isStable()) {
	            // Schedules the call backs in a new frame so that it is always async.
	            lang_1.scheduleMicroTask(function () {
	                while (_this._callbacks.length !== 0) {
	                    (_this._callbacks.pop())(_this._didWork);
	                }
	                _this._didWork = false;
	            });
	        }
	        else {
	            // Not Ready
	            this._didWork = true;
	        }
	    };
	    Testability.prototype.whenStable = function (callback) {
	        this._callbacks.push(callback);
	        this._runCallbacksIfReady();
	    };
	    Testability.prototype.getPendingRequestCount = function () { return this._pendingCount; };
	    Testability.prototype.findBindings = function (using, provider, exactMatch) {
	        // TODO(juliemr): implement.
	        return [];
	    };
	    Testability.prototype.findProviders = function (using, provider, exactMatch) {
	        // TODO(juliemr): implement.
	        return [];
	    };
	    Testability.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    Testability.ctorParameters = [
	        { type: ng_zone_1.NgZone, },
	    ];
	    return Testability;
	}());
	exports.Testability = Testability;
	var TestabilityRegistry = (function () {
	    function TestabilityRegistry() {
	        /** @internal */
	        this._applications = new collection_1.Map();
	        _testabilityGetter.addToWindow(this);
	    }
	    TestabilityRegistry.prototype.registerApplication = function (token, testability) {
	        this._applications.set(token, testability);
	    };
	    TestabilityRegistry.prototype.getTestability = function (elem) { return this._applications.get(elem); };
	    TestabilityRegistry.prototype.getAllTestabilities = function () { return collection_1.MapWrapper.values(this._applications); };
	    TestabilityRegistry.prototype.getAllRootElements = function () { return collection_1.MapWrapper.keys(this._applications); };
	    TestabilityRegistry.prototype.findTestabilityInTree = function (elem, findInAncestors) {
	        if (findInAncestors === void 0) { findInAncestors = true; }
	        return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
	    };
	    TestabilityRegistry.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    TestabilityRegistry.ctorParameters = [];
	    return TestabilityRegistry;
	}());
	exports.TestabilityRegistry = TestabilityRegistry;
	/* @ts2dart_const */
	var _NoopGetTestability = (function () {
	    function _NoopGetTestability() {
	    }
	    _NoopGetTestability.prototype.addToWindow = function (registry) { };
	    _NoopGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	        return null;
	    };
	    return _NoopGetTestability;
	}());
	/**
	 * Set the {@link GetTestability} implementation used by the Angular testing framework.
	 */
	function setTestabilityGetter(getter) {
	    _testabilityGetter = getter;
	}
	exports.setTestabilityGetter = setTestabilityGetter;
	var _testabilityGetter = new _NoopGetTestability();
	//# sourceMappingURL=testability.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	var async_1 = __webpack_require__(39);
	var reflection_1 = __webpack_require__(28);
	var component_factory_1 = __webpack_require__(66);
	var decorators_1 = __webpack_require__(20);
	/**
	 * Low-level service for loading {@link ComponentFactory}s, which
	 * can later be used to create and render a Component instance.
	 */
	var ComponentResolver = (function () {
	    function ComponentResolver() {
	    }
	    return ComponentResolver;
	}());
	exports.ComponentResolver = ComponentResolver;
	function _isComponentFactory(type) {
	    return type instanceof component_factory_1.ComponentFactory;
	}
	var ReflectorComponentResolver = (function (_super) {
	    __extends(ReflectorComponentResolver, _super);
	    function ReflectorComponentResolver() {
	        _super.apply(this, arguments);
	    }
	    ReflectorComponentResolver.prototype.resolveComponent = function (componentType) {
	        var metadatas = reflection_1.reflector.annotations(componentType);
	        var componentFactory = metadatas.find(_isComponentFactory);
	        if (lang_1.isBlank(componentFactory)) {
	            throw new exceptions_1.BaseException("No precompiled component " + lang_1.stringify(componentType) + " found");
	        }
	        return async_1.PromiseWrapper.resolve(componentFactory);
	    };
	    ReflectorComponentResolver.prototype.clearCache = function () { };
	    ReflectorComponentResolver.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    return ReflectorComponentResolver;
	}(ComponentResolver));
	exports.ReflectorComponentResolver = ReflectorComponentResolver;
	//# sourceMappingURL=component_resolver.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	var view_utils_1 = __webpack_require__(67);
	/**
	 * Represents an instance of a Component created via a {@link ComponentFactory}.
	 *
	 * `ComponentRef` provides access to the Component Instance as well other objects related to this
	 * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
	 * method.
	 */
	var ComponentRef = (function () {
	    function ComponentRef() {
	    }
	    Object.defineProperty(ComponentRef.prototype, "location", {
	        /**
	         * Location of the Host Element of this Component Instance.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef.prototype, "injector", {
	        /**
	         * The injector on which the component instance exists.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef.prototype, "instance", {
	        /**
	         * The instance of the Component.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef.prototype, "hostView", {
	        /**
	         * The {@link ViewRef} of the Host View of this Component instance.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef.prototype, "changeDetectorRef", {
	        /**
	         * The {@link ChangeDetectorRef} of the Component instance.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef.prototype, "componentType", {
	        /**
	         * The component type.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return ComponentRef;
	}());
	exports.ComponentRef = ComponentRef;
	var ComponentRef_ = (function (_super) {
	    __extends(ComponentRef_, _super);
	    function ComponentRef_(_hostElement, _componentType) {
	        _super.call(this);
	        this._hostElement = _hostElement;
	        this._componentType = _componentType;
	    }
	    Object.defineProperty(ComponentRef_.prototype, "location", {
	        get: function () { return this._hostElement.elementRef; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef_.prototype, "injector", {
	        get: function () { return this._hostElement.injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef_.prototype, "instance", {
	        get: function () { return this._hostElement.component; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef_.prototype, "hostView", {
	        get: function () { return this._hostElement.parentView.ref; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef_.prototype, "changeDetectorRef", {
	        get: function () { return this._hostElement.parentView.ref; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef_.prototype, "componentType", {
	        get: function () { return this._componentType; },
	        enumerable: true,
	        configurable: true
	    });
	    ComponentRef_.prototype.destroy = function () { this._hostElement.parentView.destroy(); };
	    ComponentRef_.prototype.onDestroy = function (callback) { this.hostView.onDestroy(callback); };
	    return ComponentRef_;
	}(ComponentRef));
	exports.ComponentRef_ = ComponentRef_;
	var EMPTY_CONTEXT = new Object();
	/*@ts2dart_const*/
	var ComponentFactory = (function () {
	    function ComponentFactory(selector, _viewFactory, _componentType) {
	        this.selector = selector;
	        this._viewFactory = _viewFactory;
	        this._componentType = _componentType;
	    }
	    Object.defineProperty(ComponentFactory.prototype, "componentType", {
	        get: function () { return this._componentType; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Creates a new component.
	     */
	    ComponentFactory.prototype.create = function (injector, projectableNodes, rootSelectorOrNode) {
	        if (projectableNodes === void 0) { projectableNodes = null; }
	        if (rootSelectorOrNode === void 0) { rootSelectorOrNode = null; }
	        var vu = injector.get(view_utils_1.ViewUtils);
	        if (lang_1.isBlank(projectableNodes)) {
	            projectableNodes = [];
	        }
	        // Note: Host views don't need a declarationAppElement!
	        var hostView = this._viewFactory(vu, injector, null);
	        var hostElement = hostView.create(EMPTY_CONTEXT, projectableNodes, rootSelectorOrNode);
	        return new ComponentRef_(hostElement, this._componentType);
	    };
	    return ComponentFactory;
	}());
	exports.ComponentFactory = ComponentFactory;
	//# sourceMappingURL=component_factory.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var security_1 = __webpack_require__(68);
	var lang_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(25);
	var exceptions_1 = __webpack_require__(22);
	var element_1 = __webpack_require__(69);
	var exceptions_2 = __webpack_require__(75);
	var change_detection_1 = __webpack_require__(76);
	var api_1 = __webpack_require__(83);
	var application_tokens_1 = __webpack_require__(63);
	var decorators_1 = __webpack_require__(20);
	var change_detection_util_1 = __webpack_require__(82);
	var ViewUtils = (function () {
	    function ViewUtils(_renderer, _appId, sanitizer) {
	        this._renderer = _renderer;
	        this._appId = _appId;
	        this._nextCompTypeId = 0;
	        this.sanitizer = sanitizer;
	    }
	    /**
	     * Used by the generated code
	     */
	    ViewUtils.prototype.createRenderComponentType = function (templateUrl, slotCount, encapsulation, styles) {
	        return new api_1.RenderComponentType(this._appId + "-" + this._nextCompTypeId++, templateUrl, slotCount, encapsulation, styles);
	    };
	    /** @internal */
	    ViewUtils.prototype.renderComponent = function (renderComponentType) {
	        return this._renderer.renderComponent(renderComponentType);
	    };
	    ViewUtils.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    ViewUtils.ctorParameters = [
	        { type: api_1.RootRenderer, },
	        { type: undefined, decorators: [{ type: decorators_1.Inject, args: [application_tokens_1.APP_ID,] },] },
	        { type: security_1.SanitizationService, },
	    ];
	    return ViewUtils;
	}());
	exports.ViewUtils = ViewUtils;
	function flattenNestedViewRenderNodes(nodes) {
	    return _flattenNestedViewRenderNodes(nodes, []);
	}
	exports.flattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
	function _flattenNestedViewRenderNodes(nodes, renderNodes) {
	    for (var i = 0; i < nodes.length; i++) {
	        var node = nodes[i];
	        if (node instanceof element_1.AppElement) {
	            var appEl = node;
	            renderNodes.push(appEl.nativeElement);
	            if (lang_1.isPresent(appEl.nestedViews)) {
	                for (var k = 0; k < appEl.nestedViews.length; k++) {
	                    _flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements, renderNodes);
	                }
	            }
	        }
	        else {
	            renderNodes.push(node);
	        }
	    }
	    return renderNodes;
	}
	var EMPTY_ARR = [];
	function ensureSlotCount(projectableNodes, expectedSlotCount) {
	    var res;
	    if (lang_1.isBlank(projectableNodes)) {
	        res = EMPTY_ARR;
	    }
	    else if (projectableNodes.length < expectedSlotCount) {
	        var givenSlotCount = projectableNodes.length;
	        res = collection_1.ListWrapper.createFixedSize(expectedSlotCount);
	        for (var i = 0; i < expectedSlotCount; i++) {
	            res[i] = (i < givenSlotCount) ? projectableNodes[i] : EMPTY_ARR;
	        }
	    }
	    else {
	        res = projectableNodes;
	    }
	    return res;
	}
	exports.ensureSlotCount = ensureSlotCount;
	exports.MAX_INTERPOLATION_VALUES = 9;
	function interpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
	    switch (valueCount) {
	        case 1:
	            return c0 + _toStringWithNull(a1) + c1;
	        case 2:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
	        case 3:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3;
	        case 4:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4;
	        case 5:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
	        case 6:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6;
	        case 7:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6 + _toStringWithNull(a7) + c7;
	        case 8:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
	        case 9:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) +
	                c9;
	        default:
	            throw new exceptions_1.BaseException("Does not support more than 9 expressions");
	    }
	}
	exports.interpolate = interpolate;
	function _toStringWithNull(v) {
	    return v != null ? v.toString() : '';
	}
	function checkBinding(throwOnChange, oldValue, newValue) {
	    if (throwOnChange) {
	        if (!change_detection_1.devModeEqual(oldValue, newValue)) {
	            throw new exceptions_2.ExpressionChangedAfterItHasBeenCheckedException(oldValue, newValue, null);
	        }
	        return false;
	    }
	    else {
	        return !lang_1.looseIdentical(oldValue, newValue);
	    }
	}
	exports.checkBinding = checkBinding;
	function arrayLooseIdentical(a, b) {
	    if (a.length != b.length)
	        return false;
	    for (var i = 0; i < a.length; ++i) {
	        if (!lang_1.looseIdentical(a[i], b[i]))
	            return false;
	    }
	    return true;
	}
	exports.arrayLooseIdentical = arrayLooseIdentical;
	function mapLooseIdentical(m1, m2) {
	    var k1 = collection_1.StringMapWrapper.keys(m1);
	    var k2 = collection_1.StringMapWrapper.keys(m2);
	    if (k1.length != k2.length) {
	        return false;
	    }
	    var key;
	    for (var i = 0; i < k1.length; i++) {
	        key = k1[i];
	        if (!lang_1.looseIdentical(m1[key], m2[key])) {
	            return false;
	        }
	    }
	    return true;
	}
	exports.mapLooseIdentical = mapLooseIdentical;
	function castByValue(input, value) {
	    return input;
	}
	exports.castByValue = castByValue;
	exports.EMPTY_ARRAY = [];
	exports.EMPTY_MAP = {};
	function pureProxy1(fn) {
	    var result;
	    var v0;
	    v0 = change_detection_util_1.uninitialized;
	    return function (p0) {
	        if (!lang_1.looseIdentical(v0, p0)) {
	            v0 = p0;
	            result = fn(p0);
	        }
	        return result;
	    };
	}
	exports.pureProxy1 = pureProxy1;
	function pureProxy2(fn) {
	    var result;
	    var v0, v1;
	    v0 = v1 = change_detection_util_1.uninitialized;
	    return function (p0, p1) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1)) {
	            v0 = p0;
	            v1 = p1;
	            result = fn(p0, p1);
	        }
	        return result;
	    };
	}
	exports.pureProxy2 = pureProxy2;
	function pureProxy3(fn) {
	    var result;
	    var v0, v1, v2;
	    v0 = v1 = v2 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            result = fn(p0, p1, p2);
	        }
	        return result;
	    };
	}
	exports.pureProxy3 = pureProxy3;
	function pureProxy4(fn) {
	    var result;
	    var v0, v1, v2, v3;
	    v0 = v1 = v2 = v3 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            result = fn(p0, p1, p2, p3);
	        }
	        return result;
	    };
	}
	exports.pureProxy4 = pureProxy4;
	function pureProxy5(fn) {
	    var result;
	    var v0, v1, v2, v3, v4;
	    v0 = v1 = v2 = v3 = v4 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            result = fn(p0, p1, p2, p3, p4);
	        }
	        return result;
	    };
	}
	exports.pureProxy5 = pureProxy5;
	function pureProxy6(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5;
	    v0 = v1 = v2 = v3 = v4 = v5 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            result = fn(p0, p1, p2, p3, p4, p5);
	        }
	        return result;
	    };
	}
	exports.pureProxy6 = pureProxy6;
	function pureProxy7(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            result = fn(p0, p1, p2, p3, p4, p5, p6);
	        }
	        return result;
	    };
	}
	exports.pureProxy7 = pureProxy7;
	function pureProxy8(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6, v7;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6, p7) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6) || !lang_1.looseIdentical(v7, p7)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            v7 = p7;
	            result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
	        }
	        return result;
	    };
	}
	exports.pureProxy8 = pureProxy8;
	function pureProxy9(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6, v7, v8;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6) || !lang_1.looseIdentical(v7, p7) || !lang_1.looseIdentical(v8, p8)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            v7 = p7;
	            v8 = p8;
	            result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
	        }
	        return result;
	    };
	}
	exports.pureProxy9 = pureProxy9;
	function pureProxy10(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6, v7, v8, v9;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6) || !lang_1.looseIdentical(v7, p7) || !lang_1.looseIdentical(v8, p8) ||
	            !lang_1.looseIdentical(v9, p9)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            v7 = p7;
	            v8 = p8;
	            v9 = p9;
	            result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
	        }
	        return result;
	    };
	}
	exports.pureProxy10 = pureProxy10;
	//# sourceMappingURL=view_utils.js.map

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	/**
	* A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
	* like `innerHTML` that could cause Cross Site Scripting (XSS) security bugs when improperly
	* handled.
	*
	* See DomSanitizationService for more details on security in Angular applications.
	*/
	(function (SecurityContext) {
	    SecurityContext[SecurityContext["NONE"] = 0] = "NONE";
	    SecurityContext[SecurityContext["HTML"] = 1] = "HTML";
	    SecurityContext[SecurityContext["STYLE"] = 2] = "STYLE";
	    SecurityContext[SecurityContext["SCRIPT"] = 3] = "SCRIPT";
	    SecurityContext[SecurityContext["URL"] = 4] = "URL";
	    SecurityContext[SecurityContext["RESOURCE_URL"] = 5] = "RESOURCE_URL";
	})(exports.SecurityContext || (exports.SecurityContext = {}));
	var SecurityContext = exports.SecurityContext;
	/**
	 * SanitizationService is used by the views to sanitize potentially dangerous values. This is a
	 * private API, use code should only refer to DomSanitizationService.
	 */
	var SanitizationService = (function () {
	    function SanitizationService() {
	    }
	    return SanitizationService;
	}());
	exports.SanitizationService = SanitizationService;
	//# sourceMappingURL=security.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(25);
	var exceptions_1 = __webpack_require__(22);
	var view_type_1 = __webpack_require__(70);
	var element_ref_1 = __webpack_require__(71);
	var view_container_ref_1 = __webpack_require__(72);
	/**
	 * An AppElement is created for elements that have a ViewContainerRef,
	 * a nested component or a <template> element to keep data around
	 * that is needed for later instantiations.
	 */
	var AppElement = (function () {
	    function AppElement(index, parentIndex, parentView, nativeElement) {
	        this.index = index;
	        this.parentIndex = parentIndex;
	        this.parentView = parentView;
	        this.nativeElement = nativeElement;
	        this.nestedViews = null;
	        this.componentView = null;
	    }
	    Object.defineProperty(AppElement.prototype, "elementRef", {
	        get: function () { return new element_ref_1.ElementRef(this.nativeElement); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppElement.prototype, "vcRef", {
	        get: function () { return new view_container_ref_1.ViewContainerRef_(this); },
	        enumerable: true,
	        configurable: true
	    });
	    AppElement.prototype.initComponent = function (component, componentConstructorViewQueries, view) {
	        this.component = component;
	        this.componentConstructorViewQueries = componentConstructorViewQueries;
	        this.componentView = view;
	    };
	    Object.defineProperty(AppElement.prototype, "parentInjector", {
	        get: function () { return this.parentView.injector(this.parentIndex); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppElement.prototype, "injector", {
	        get: function () { return this.parentView.injector(this.index); },
	        enumerable: true,
	        configurable: true
	    });
	    AppElement.prototype.mapNestedViews = function (nestedViewClass, callback) {
	        var result = [];
	        if (lang_1.isPresent(this.nestedViews)) {
	            this.nestedViews.forEach(function (nestedView) {
	                if (nestedView.clazz === nestedViewClass) {
	                    result.push(callback(nestedView));
	                }
	            });
	        }
	        return result;
	    };
	    AppElement.prototype.attachView = function (view, viewIndex) {
	        if (view.type === view_type_1.ViewType.COMPONENT) {
	            throw new exceptions_1.BaseException("Component views can't be moved!");
	        }
	        var nestedViews = this.nestedViews;
	        if (nestedViews == null) {
	            nestedViews = [];
	            this.nestedViews = nestedViews;
	        }
	        collection_1.ListWrapper.insert(nestedViews, viewIndex, view);
	        var refRenderNode;
	        if (viewIndex > 0) {
	            var prevView = nestedViews[viewIndex - 1];
	            refRenderNode = prevView.lastRootNode;
	        }
	        else {
	            refRenderNode = this.nativeElement;
	        }
	        if (lang_1.isPresent(refRenderNode)) {
	            view.renderer.attachViewAfter(refRenderNode, view.flatRootNodes);
	        }
	        view.addToContentChildren(this);
	    };
	    AppElement.prototype.detachView = function (viewIndex) {
	        var view = collection_1.ListWrapper.removeAt(this.nestedViews, viewIndex);
	        if (view.type === view_type_1.ViewType.COMPONENT) {
	            throw new exceptions_1.BaseException("Component views can't be moved!");
	        }
	        view.renderer.detachView(view.flatRootNodes);
	        view.removeFromContentChildren(this);
	        return view;
	    };
	    return AppElement;
	}());
	exports.AppElement = AppElement;
	//# sourceMappingURL=element.js.map

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	(function (ViewType) {
	    // A view that contains the host element with bound component directive.
	    // Contains a COMPONENT view
	    ViewType[ViewType["HOST"] = 0] = "HOST";
	    // The view of the component
	    // Can contain 0 to n EMBEDDED views
	    ViewType[ViewType["COMPONENT"] = 1] = "COMPONENT";
	    // A view that is embedded into another View via a <template> element
	    // inside of a COMPONENT view
	    ViewType[ViewType["EMBEDDED"] = 2] = "EMBEDDED";
	})(exports.ViewType || (exports.ViewType = {}));
	var ViewType = exports.ViewType;
	//# sourceMappingURL=view_type.js.map

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	/**
	* A wrapper around a native element inside of a View.
	*
	* An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
	* element.
	*/
	// Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
	// i.e. users have to ask for what they need. With that, we can build better analysis tools
	// and could do better codegen in the future.
	var ElementRef = (function () {
	    function ElementRef(nativeElement) {
	        this.nativeElement = nativeElement;
	    }
	    return ElementRef;
	}());
	exports.ElementRef = ElementRef;
	//# sourceMappingURL=element_ref.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(25);
	var exceptions_1 = __webpack_require__(22);
	var lang_1 = __webpack_require__(11);
	var profile_1 = __webpack_require__(73);
	/**
	 * Represents a container where one or more Views can be attached.
	 *
	 * The container can contain two kinds of Views. Host Views, created by instantiating a
	 * {@link Component} via {@link #createComponent}, and Embedded Views, created by instantiating an
	 * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
	 *
	 * The location of the View Container within the containing View is specified by the Anchor
	 * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
	 * have a single View Container.
	 *
	 * Root elements of Views attached to this container become siblings of the Anchor Element in
	 * the Rendered View.
	 *
	 * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
	 * with `ViewContainerRef` on the Element, or you obtain it via a {@link ViewChild} query.
	 */
	var ViewContainerRef = (function () {
	    function ViewContainerRef() {
	    }
	    Object.defineProperty(ViewContainerRef.prototype, "element", {
	        /**
	         * Anchor element that specifies the location of this container in the containing View.
	         * <!-- TODO: rename to anchorElement -->
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef.prototype, "injector", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef.prototype, "parentInjector", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef.prototype, "length", {
	        /**
	         * Returns the number of Views currently attached to this container.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return ViewContainerRef;
	}());
	exports.ViewContainerRef = ViewContainerRef;
	var ViewContainerRef_ = (function () {
	    function ViewContainerRef_(_element) {
	        this._element = _element;
	        /** @internal */
	        this._createComponentInContainerScope = profile_1.wtfCreateScope('ViewContainerRef#createComponent()');
	        /** @internal */
	        this._insertScope = profile_1.wtfCreateScope('ViewContainerRef#insert()');
	        /** @internal */
	        this._removeScope = profile_1.wtfCreateScope('ViewContainerRef#remove()');
	        /** @internal */
	        this._detachScope = profile_1.wtfCreateScope('ViewContainerRef#detach()');
	    }
	    ViewContainerRef_.prototype.get = function (index) { return this._element.nestedViews[index].ref; };
	    Object.defineProperty(ViewContainerRef_.prototype, "length", {
	        get: function () {
	            var views = this._element.nestedViews;
	            return lang_1.isPresent(views) ? views.length : 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef_.prototype, "element", {
	        get: function () { return this._element.elementRef; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef_.prototype, "injector", {
	        get: function () { return this._element.injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
	        get: function () { return this._element.parentInjector; },
	        enumerable: true,
	        configurable: true
	    });
	    // TODO(rado): profile and decide whether bounds checks should be added
	    // to the methods below.
	    ViewContainerRef_.prototype.createEmbeddedView = function (templateRef, context, index) {
	        if (context === void 0) { context = null; }
	        if (index === void 0) { index = -1; }
	        var viewRef = templateRef.createEmbeddedView(context);
	        this.insert(viewRef, index);
	        return viewRef;
	    };
	    ViewContainerRef_.prototype.createComponent = function (componentFactory, index, injector, projectableNodes) {
	        if (index === void 0) { index = -1; }
	        if (injector === void 0) { injector = null; }
	        if (projectableNodes === void 0) { projectableNodes = null; }
	        var s = this._createComponentInContainerScope();
	        var contextInjector = lang_1.isPresent(injector) ? injector : this._element.parentInjector;
	        var componentRef = componentFactory.create(contextInjector, projectableNodes);
	        this.insert(componentRef.hostView, index);
	        return profile_1.wtfLeave(s, componentRef);
	    };
	    // TODO(i): refactor insert+remove into move
	    ViewContainerRef_.prototype.insert = function (viewRef, index) {
	        if (index === void 0) { index = -1; }
	        var s = this._insertScope();
	        if (index == -1)
	            index = this.length;
	        var viewRef_ = viewRef;
	        this._element.attachView(viewRef_.internalView, index);
	        return profile_1.wtfLeave(s, viewRef_);
	    };
	    ViewContainerRef_.prototype.indexOf = function (viewRef) {
	        return collection_1.ListWrapper.indexOf(this._element.nestedViews, viewRef.internalView);
	    };
	    // TODO(i): rename to destroy
	    ViewContainerRef_.prototype.remove = function (index) {
	        if (index === void 0) { index = -1; }
	        var s = this._removeScope();
	        if (index == -1)
	            index = this.length - 1;
	        var view = this._element.detachView(index);
	        view.destroy();
	        // view is intentionally not returned to the client.
	        profile_1.wtfLeave(s);
	    };
	    // TODO(i): refactor insert+remove into move
	    ViewContainerRef_.prototype.detach = function (index) {
	        if (index === void 0) { index = -1; }
	        var s = this._detachScope();
	        if (index == -1)
	            index = this.length - 1;
	        var view = this._element.detachView(index);
	        return profile_1.wtfLeave(s, view.ref);
	    };
	    ViewContainerRef_.prototype.clear = function () {
	        for (var i = this.length - 1; i >= 0; i--) {
	            this.remove(i);
	        }
	    };
	    return ViewContainerRef_;
	}());
	exports.ViewContainerRef_ = ViewContainerRef_;
	//# sourceMappingURL=view_container_ref.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var impl = __webpack_require__(74);
	// Change exports to const once https://github.com/angular/ts2dart/issues/150
	/**
	 * True if WTF is enabled.
	 */
	exports.wtfEnabled = impl.detectWTF();
	function noopScope(arg0, arg1) {
	    return null;
	}
	/**
	 * Create trace scope.
	 *
	 * Scopes must be strictly nested and are analogous to stack frames, but
	 * do not have to follow the stack frames. Instead it is recommended that they follow logical
	 * nesting. You may want to use
	 * [Event
	 * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
	 * as they are defined in WTF.
	 *
	 * Used to mark scope entry. The return value is used to leave the scope.
	 *
	 *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
	 *
	 *     someMethod() {
	 *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
	 *        // DO SOME WORK HERE
	 *        return wtfLeave(s, 123); // Return value 123
	 *     }
	 *
	 * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
	 * negatively impact the performance of your application. For this reason we recommend that
	 * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
	 * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
	 * exception, will produce incorrect trace, but presence of exception signifies logic error which
	 * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
	 * an exception is expected during normal execution while profiling.
	 *
	 */
	exports.wtfCreateScope = exports.wtfEnabled ? impl.createScope : function (signature, flags) { return noopScope; };
	/**
	 * Used to mark end of Scope.
	 *
	 * - `scope` to end.
	 * - `returnValue` (optional) to be passed to the WTF.
	 *
	 * Returns the `returnValue for easy chaining.
	 */
	exports.wtfLeave = exports.wtfEnabled ? impl.leave : function (s, r) { return r; };
	/**
	 * Used to mark Async start. Async are similar to scope but they don't have to be strictly nested.
	 * The return value is used in the call to [endAsync]. Async ranges only work if WTF has been
	 * enabled.
	 *
	 *     someMethod() {
	 *        var s = wtfStartTimeRange('HTTP:GET', 'some.url');
	 *        var future = new Future.delay(5).then((_) {
	 *          wtfEndTimeRange(s);
	 *        });
	 *     }
	 */
	exports.wtfStartTimeRange = exports.wtfEnabled ? impl.startTimeRange : function (rangeType, action) { return null; };
	/**
	 * Ends a async time range operation.
	 * [range] is the return value from [wtfStartTimeRange] Async ranges only work if WTF has been
	 * enabled.
	 */
	exports.wtfEndTimeRange = exports.wtfEnabled ? impl.endTimeRange : function (r) {
	    return null;
	};
	//# sourceMappingURL=profile.js.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var trace;
	var events;
	function detectWTF() {
	    var wtf = lang_1.global['wtf'];
	    if (wtf) {
	        trace = wtf['trace'];
	        if (trace) {
	            events = trace['events'];
	            return true;
	        }
	    }
	    return false;
	}
	exports.detectWTF = detectWTF;
	function createScope(signature, flags) {
	    if (flags === void 0) { flags = null; }
	    return events.createScope(signature, flags);
	}
	exports.createScope = createScope;
	function leave(scope, returnValue) {
	    trace.leaveScope(scope, returnValue);
	    return returnValue;
	}
	exports.leave = leave;
	function startTimeRange(rangeType, action) {
	    return trace.beginTimeRange(rangeType, action);
	}
	exports.startTimeRange = startTimeRange;
	function endTimeRange(range) {
	    trace.endTimeRange(range);
	}
	exports.endTimeRange = endTimeRange;
	//# sourceMappingURL=wtf_impl.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(22);
	/**
	 * An error thrown if application changes model breaking the top-down data flow.
	 *
	 * This exception is only thrown in dev mode.
	 *
	 * <!-- TODO: Add a link once the dev mode option is configurable -->
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'parent',
	 *   template: `
	 *     <child [prop]="parentProp"></child>
	 *   `,
	 *   directives: [forwardRef(() => Child)]
	 * })
	 * class Parent {
	 *   parentProp = "init";
	 * }
	 *
	 * @Directive({selector: 'child', inputs: ['prop']})
	 * class Child {
	 *   constructor(public parent: Parent) {}
	 *
	 *   set prop(v) {
	 *     // this updates the parent property, which is disallowed during change detection
	 *     // this will result in ExpressionChangedAfterItHasBeenCheckedException
	 *     this.parent.parentProp = "updated";
	 *   }
	 * }
	 * ```
	 */
	var ExpressionChangedAfterItHasBeenCheckedException = (function (_super) {
	    __extends(ExpressionChangedAfterItHasBeenCheckedException, _super);
	    function ExpressionChangedAfterItHasBeenCheckedException(oldValue, currValue, context) {
	        _super.call(this, "Expression has changed after it was checked. " +
	            ("Previous value: '" + oldValue + "'. Current value: '" + currValue + "'"));
	    }
	    return ExpressionChangedAfterItHasBeenCheckedException;
	}(exceptions_1.BaseException));
	exports.ExpressionChangedAfterItHasBeenCheckedException = ExpressionChangedAfterItHasBeenCheckedException;
	/**
	 * Thrown when an exception was raised during view creation, change detection or destruction.
	 *
	 * This error wraps the original exception to attach additional contextual information that can
	 * be useful for debugging.
	 */
	var ViewWrappedException = (function (_super) {
	    __extends(ViewWrappedException, _super);
	    function ViewWrappedException(originalException, originalStack, context) {
	        _super.call(this, "Error in " + context.source, originalException, originalStack, context);
	    }
	    return ViewWrappedException;
	}(exceptions_1.WrappedException));
	exports.ViewWrappedException = ViewWrappedException;
	/**
	 * Thrown when a destroyed view is used.
	 *
	 * This error indicates a bug in the framework.
	 *
	 * This is an internal Angular error.
	 */
	var ViewDestroyedException = (function (_super) {
	    __extends(ViewDestroyedException, _super);
	    function ViewDestroyedException(details) {
	        _super.call(this, "Attempt to use a destroyed view: " + details);
	    }
	    return ViewDestroyedException;
	}(exceptions_1.BaseException));
	exports.ViewDestroyedException = ViewDestroyedException;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var iterable_differs_1 = __webpack_require__(77);
	var default_iterable_differ_1 = __webpack_require__(78);
	var keyvalue_differs_1 = __webpack_require__(79);
	var default_keyvalue_differ_1 = __webpack_require__(80);
	var default_keyvalue_differ_2 = __webpack_require__(80);
	exports.DefaultKeyValueDifferFactory = default_keyvalue_differ_2.DefaultKeyValueDifferFactory;
	exports.KeyValueChangeRecord = default_keyvalue_differ_2.KeyValueChangeRecord;
	var default_iterable_differ_2 = __webpack_require__(78);
	exports.DefaultIterableDifferFactory = default_iterable_differ_2.DefaultIterableDifferFactory;
	exports.CollectionChangeRecord = default_iterable_differ_2.CollectionChangeRecord;
	var constants_1 = __webpack_require__(15);
	exports.ChangeDetectionStrategy = constants_1.ChangeDetectionStrategy;
	exports.CHANGE_DETECTION_STRATEGY_VALUES = constants_1.CHANGE_DETECTION_STRATEGY_VALUES;
	exports.ChangeDetectorState = constants_1.ChangeDetectorState;
	exports.CHANGE_DETECTOR_STATE_VALUES = constants_1.CHANGE_DETECTOR_STATE_VALUES;
	exports.isDefaultChangeDetectionStrategy = constants_1.isDefaultChangeDetectionStrategy;
	var change_detector_ref_1 = __webpack_require__(81);
	exports.ChangeDetectorRef = change_detector_ref_1.ChangeDetectorRef;
	var iterable_differs_2 = __webpack_require__(77);
	exports.IterableDiffers = iterable_differs_2.IterableDiffers;
	var keyvalue_differs_2 = __webpack_require__(79);
	exports.KeyValueDiffers = keyvalue_differs_2.KeyValueDiffers;
	var default_iterable_differ_3 = __webpack_require__(78);
	exports.DefaultIterableDiffer = default_iterable_differ_3.DefaultIterableDiffer;
	var change_detection_util_1 = __webpack_require__(82);
	exports.WrappedValue = change_detection_util_1.WrappedValue;
	exports.ValueUnwrapper = change_detection_util_1.ValueUnwrapper;
	exports.SimpleChange = change_detection_util_1.SimpleChange;
	exports.devModeEqual = change_detection_util_1.devModeEqual;
	exports.looseIdentical = change_detection_util_1.looseIdentical;
	exports.uninitialized = change_detection_util_1.uninitialized;
	/**
	 * Structural diffing for `Object`s and `Map`s.
	 */
	exports.keyValDiff = 
	/*@ts2dart_const*/ [new default_keyvalue_differ_1.DefaultKeyValueDifferFactory()];
	/**
	 * Structural diffing for `Iterable` types such as `Array`s.
	 */
	exports.iterableDiff = 
	/*@ts2dart_const*/ [new default_iterable_differ_1.DefaultIterableDifferFactory()];
	exports.defaultIterableDiffers = new iterable_differs_1.IterableDiffers(exports.iterableDiff);
	exports.defaultKeyValueDiffers = new keyvalue_differs_1.KeyValueDiffers(exports.keyValDiff);
	//# sourceMappingURL=change_detection.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	var collection_1 = __webpack_require__(25);
	var di_1 = __webpack_require__(19);
	/**
	 * A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
	 * @ts2dart_const
	 */
	var IterableDiffers = (function () {
	    /*@ts2dart_const*/
	    function IterableDiffers(factories) {
	        this.factories = factories;
	    }
	    IterableDiffers.create = function (factories, parent) {
	        if (lang_1.isPresent(parent)) {
	            var copied = collection_1.ListWrapper.clone(parent.factories);
	            factories = factories.concat(copied);
	            return new IterableDiffers(factories);
	        }
	        else {
	            return new IterableDiffers(factories);
	        }
	    };
	    /**
	     * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
	     * inherited {@link IterableDiffers} instance with the provided factories and return a new
	     * {@link IterableDiffers} instance.
	     *
	     * The following example shows how to extend an existing list of factories,
	           * which will only be applied to the injector for this component and its children.
	           * This step is all that's required to make a new {@link IterableDiffer} available.
	     *
	     * ### Example
	     *
	     * ```
	     * @Component({
	     *   viewProviders: [
	     *     IterableDiffers.extend([new ImmutableListDiffer()])
	     *   ]
	     * })
	     * ```
	     */
	    IterableDiffers.extend = function (factories) {
	        return new di_1.Provider(IterableDiffers, {
	            useFactory: function (parent) {
	                if (lang_1.isBlank(parent)) {
	                    // Typically would occur when calling IterableDiffers.extend inside of dependencies passed
	                    // to
	                    // bootstrap(), which would override default pipes instead of extending them.
	                    throw new exceptions_1.BaseException('Cannot extend IterableDiffers without a parent injector');
	                }
	                return IterableDiffers.create(factories, parent);
	            },
	            // Dependency technically isn't optional, but we can provide a better error message this way.
	            deps: [[IterableDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
	        });
	    };
	    IterableDiffers.prototype.find = function (iterable) {
	        var factory = this.factories.find(function (f) { return f.supports(iterable); });
	        if (lang_1.isPresent(factory)) {
	            return factory;
	        }
	        else {
	            throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + iterable + "' of type '" + lang_1.getTypeNameForDebugging(iterable) + "'");
	        }
	    };
	    return IterableDiffers;
	}());
	exports.IterableDiffers = IterableDiffers;
	//# sourceMappingURL=iterable_differs.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var exceptions_1 = __webpack_require__(22);
	var collection_1 = __webpack_require__(25);
	var lang_1 = __webpack_require__(11);
	/* @ts2dart_const */
	var DefaultIterableDifferFactory = (function () {
	    function DefaultIterableDifferFactory() {
	    }
	    DefaultIterableDifferFactory.prototype.supports = function (obj) { return collection_1.isListLikeIterable(obj); };
	    DefaultIterableDifferFactory.prototype.create = function (cdRef, trackByFn) {
	        return new DefaultIterableDiffer(trackByFn);
	    };
	    return DefaultIterableDifferFactory;
	}());
	exports.DefaultIterableDifferFactory = DefaultIterableDifferFactory;
	var trackByIdentity = function (index, item) { return item; };
	var DefaultIterableDiffer = (function () {
	    function DefaultIterableDiffer(_trackByFn) {
	        this._trackByFn = _trackByFn;
	        this._length = null;
	        this._collection = null;
	        // Keeps track of the used records at any point in time (during & across `_check()` calls)
	        this._linkedRecords = null;
	        // Keeps track of the removed records at any point in time during `_check()` calls.
	        this._unlinkedRecords = null;
	        this._previousItHead = null;
	        this._itHead = null;
	        this._itTail = null;
	        this._additionsHead = null;
	        this._additionsTail = null;
	        this._movesHead = null;
	        this._movesTail = null;
	        this._removalsHead = null;
	        this._removalsTail = null;
	        // Keeps track of records where custom track by is the same, but item identity has changed
	        this._identityChangesHead = null;
	        this._identityChangesTail = null;
	        this._trackByFn = lang_1.isPresent(this._trackByFn) ? this._trackByFn : trackByIdentity;
	    }
	    Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
	        get: function () { return this._collection; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
	        get: function () { return this._length; },
	        enumerable: true,
	        configurable: true
	    });
	    DefaultIterableDiffer.prototype.forEachItem = function (fn) {
	        var record;
	        for (record = this._itHead; record !== null; record = record._next) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachPreviousItem = function (fn) {
	        var record;
	        for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachAddedItem = function (fn) {
	        var record;
	        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachMovedItem = function (fn) {
	        var record;
	        for (record = this._movesHead; record !== null; record = record._nextMoved) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachRemovedItem = function (fn) {
	        var record;
	        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachIdentityChange = function (fn) {
	        var record;
	        for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.diff = function (collection) {
	        if (lang_1.isBlank(collection))
	            collection = [];
	        if (!collection_1.isListLikeIterable(collection)) {
	            throw new exceptions_1.BaseException("Error trying to diff '" + collection + "'");
	        }
	        if (this.check(collection)) {
	            return this;
	        }
	        else {
	            return null;
	        }
	    };
	    DefaultIterableDiffer.prototype.onDestroy = function () { };
	    // todo(vicb): optim for UnmodifiableListView (frozen arrays)
	    DefaultIterableDiffer.prototype.check = function (collection) {
	        var _this = this;
	        this._reset();
	        var record = this._itHead;
	        var mayBeDirty = false;
	        var index;
	        var item;
	        var itemTrackBy;
	        if (lang_1.isArray(collection)) {
	            var list = collection;
	            this._length = collection.length;
	            for (index = 0; index < this._length; index++) {
	                item = list[index];
	                itemTrackBy = this._trackByFn(index, item);
	                if (record === null || !lang_1.looseIdentical(record.trackById, itemTrackBy)) {
	                    record = this._mismatch(record, item, itemTrackBy, index);
	                    mayBeDirty = true;
	                }
	                else {
	                    if (mayBeDirty) {
	                        // TODO(misko): can we limit this to duplicates only?
	                        record = this._verifyReinsertion(record, item, itemTrackBy, index);
	                    }
	                    if (!lang_1.looseIdentical(record.item, item))
	                        this._addIdentityChange(record, item);
	                }
	                record = record._next;
	            }
	        }
	        else {
	            index = 0;
	            collection_1.iterateListLike(collection, function (item) {
	                itemTrackBy = _this._trackByFn(index, item);
	                if (record === null || !lang_1.looseIdentical(record.trackById, itemTrackBy)) {
	                    record = _this._mismatch(record, item, itemTrackBy, index);
	                    mayBeDirty = true;
	                }
	                else {
	                    if (mayBeDirty) {
	                        // TODO(misko): can we limit this to duplicates only?
	                        record = _this._verifyReinsertion(record, item, itemTrackBy, index);
	                    }
	                    if (!lang_1.looseIdentical(record.item, item))
	                        _this._addIdentityChange(record, item);
	                }
	                record = record._next;
	                index++;
	            });
	            this._length = index;
	        }
	        this._truncate(record);
	        this._collection = collection;
	        return this.isDirty;
	    };
	    Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
	        /* CollectionChanges is considered dirty if it has any additions, moves, removals, or identity
	         * changes.
	         */
	        get: function () {
	            return this._additionsHead !== null || this._movesHead !== null ||
	                this._removalsHead !== null || this._identityChangesHead !== null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Reset the state of the change objects to show no changes. This means set previousKey to
	     * currentKey, and clear all of the queues (additions, moves, removals).
	     * Set the previousIndexes of moved and added items to their currentIndexes
	     * Reset the list of additions, moves and removals
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._reset = function () {
	        if (this.isDirty) {
	            var record;
	            var nextRecord;
	            for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
	                record._nextPrevious = record._next;
	            }
	            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                record.previousIndex = record.currentIndex;
	            }
	            this._additionsHead = this._additionsTail = null;
	            for (record = this._movesHead; record !== null; record = nextRecord) {
	                record.previousIndex = record.currentIndex;
	                nextRecord = record._nextMoved;
	            }
	            this._movesHead = this._movesTail = null;
	            this._removalsHead = this._removalsTail = null;
	            this._identityChangesHead = this._identityChangesTail = null;
	        }
	    };
	    /**
	     * This is the core function which handles differences between collections.
	     *
	     * - `record` is the record which we saw at this position last time. If null then it is a new
	     *   item.
	     * - `item` is the current item in the collection
	     * - `index` is the position of the item in the collection
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._mismatch = function (record, item, itemTrackBy, index) {
	        // The previous record after which we will append the current one.
	        var previousRecord;
	        if (record === null) {
	            previousRecord = this._itTail;
	        }
	        else {
	            previousRecord = record._prev;
	            // Remove the record from the collection since we know it does not match the item.
	            this._remove(record);
	        }
	        // Attempt to see if we have seen the item before.
	        record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
	        if (record !== null) {
	            // We have seen this before, we need to move it forward in the collection.
	            // But first we need to check if identity changed, so we can update in view if necessary
	            if (!lang_1.looseIdentical(record.item, item))
	                this._addIdentityChange(record, item);
	            this._moveAfter(record, previousRecord, index);
	        }
	        else {
	            // Never seen it, check evicted list.
	            record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
	            if (record !== null) {
	                // It is an item which we have evicted earlier: reinsert it back into the list.
	                // But first we need to check if identity changed, so we can update in view if necessary
	                if (!lang_1.looseIdentical(record.item, item))
	                    this._addIdentityChange(record, item);
	                this._reinsertAfter(record, previousRecord, index);
	            }
	            else {
	                // It is a new item: add it.
	                record =
	                    this._addAfter(new CollectionChangeRecord(item, itemTrackBy), previousRecord, index);
	            }
	        }
	        return record;
	    };
	    /**
	     * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
	     *
	     * Use case: `[a, a]` => `[b, a, a]`
	     *
	     * If we did not have this check then the insertion of `b` would:
	     *   1) evict first `a`
	     *   2) insert `b` at `0` index.
	     *   3) leave `a` at index `1` as is. <-- this is wrong!
	     *   3) reinsert `a` at index 2. <-- this is wrong!
	     *
	     * The correct behavior is:
	     *   1) evict first `a`
	     *   2) insert `b` at `0` index.
	     *   3) reinsert `a` at index 1.
	     *   3) move `a` at from `1` to `2`.
	     *
	     *
	     * Double check that we have not evicted a duplicate item. We need to check if the item type may
	     * have already been removed:
	     * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
	     * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
	     * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
	     * at the end.
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._verifyReinsertion = function (record, item, itemTrackBy, index) {
	        var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
	        if (reinsertRecord !== null) {
	            record = this._reinsertAfter(reinsertRecord, record._prev, index);
	        }
	        else if (record.currentIndex != index) {
	            record.currentIndex = index;
	            this._addToMoves(record, index);
	        }
	        return record;
	    };
	    /**
	     * Get rid of any excess {@link CollectionChangeRecord}s from the previous collection
	     *
	     * - `record` The first excess {@link CollectionChangeRecord}.
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._truncate = function (record) {
	        // Anything after that needs to be removed;
	        while (record !== null) {
	            var nextRecord = record._next;
	            this._addToRemovals(this._unlink(record));
	            record = nextRecord;
	        }
	        if (this._unlinkedRecords !== null) {
	            this._unlinkedRecords.clear();
	        }
	        if (this._additionsTail !== null) {
	            this._additionsTail._nextAdded = null;
	        }
	        if (this._movesTail !== null) {
	            this._movesTail._nextMoved = null;
	        }
	        if (this._itTail !== null) {
	            this._itTail._next = null;
	        }
	        if (this._removalsTail !== null) {
	            this._removalsTail._nextRemoved = null;
	        }
	        if (this._identityChangesTail !== null) {
	            this._identityChangesTail._nextIdentityChange = null;
	        }
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._reinsertAfter = function (record, prevRecord, index) {
	        if (this._unlinkedRecords !== null) {
	            this._unlinkedRecords.remove(record);
	        }
	        var prev = record._prevRemoved;
	        var next = record._nextRemoved;
	        if (prev === null) {
	            this._removalsHead = next;
	        }
	        else {
	            prev._nextRemoved = next;
	        }
	        if (next === null) {
	            this._removalsTail = prev;
	        }
	        else {
	            next._prevRemoved = prev;
	        }
	        this._insertAfter(record, prevRecord, index);
	        this._addToMoves(record, index);
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._moveAfter = function (record, prevRecord, index) {
	        this._unlink(record);
	        this._insertAfter(record, prevRecord, index);
	        this._addToMoves(record, index);
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addAfter = function (record, prevRecord, index) {
	        this._insertAfter(record, prevRecord, index);
	        if (this._additionsTail === null) {
	            // todo(vicb)
	            // assert(this._additionsHead === null);
	            this._additionsTail = this._additionsHead = record;
	        }
	        else {
	            // todo(vicb)
	            // assert(_additionsTail._nextAdded === null);
	            // assert(record._nextAdded === null);
	            this._additionsTail = this._additionsTail._nextAdded = record;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._insertAfter = function (record, prevRecord, index) {
	        // todo(vicb)
	        // assert(record != prevRecord);
	        // assert(record._next === null);
	        // assert(record._prev === null);
	        var next = prevRecord === null ? this._itHead : prevRecord._next;
	        // todo(vicb)
	        // assert(next != record);
	        // assert(prevRecord != record);
	        record._next = next;
	        record._prev = prevRecord;
	        if (next === null) {
	            this._itTail = record;
	        }
	        else {
	            next._prev = record;
	        }
	        if (prevRecord === null) {
	            this._itHead = record;
	        }
	        else {
	            prevRecord._next = record;
	        }
	        if (this._linkedRecords === null) {
	            this._linkedRecords = new _DuplicateMap();
	        }
	        this._linkedRecords.put(record);
	        record.currentIndex = index;
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._remove = function (record) {
	        return this._addToRemovals(this._unlink(record));
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._unlink = function (record) {
	        if (this._linkedRecords !== null) {
	            this._linkedRecords.remove(record);
	        }
	        var prev = record._prev;
	        var next = record._next;
	        // todo(vicb)
	        // assert((record._prev = null) === null);
	        // assert((record._next = null) === null);
	        if (prev === null) {
	            this._itHead = next;
	        }
	        else {
	            prev._next = next;
	        }
	        if (next === null) {
	            this._itTail = prev;
	        }
	        else {
	            next._prev = prev;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addToMoves = function (record, toIndex) {
	        // todo(vicb)
	        // assert(record._nextMoved === null);
	        if (record.previousIndex === toIndex) {
	            return record;
	        }
	        if (this._movesTail === null) {
	            // todo(vicb)
	            // assert(_movesHead === null);
	            this._movesTail = this._movesHead = record;
	        }
	        else {
	            // todo(vicb)
	            // assert(_movesTail._nextMoved === null);
	            this._movesTail = this._movesTail._nextMoved = record;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addToRemovals = function (record) {
	        if (this._unlinkedRecords === null) {
	            this._unlinkedRecords = new _DuplicateMap();
	        }
	        this._unlinkedRecords.put(record);
	        record.currentIndex = null;
	        record._nextRemoved = null;
	        if (this._removalsTail === null) {
	            // todo(vicb)
	            // assert(_removalsHead === null);
	            this._removalsTail = this._removalsHead = record;
	            record._prevRemoved = null;
	        }
	        else {
	            // todo(vicb)
	            // assert(_removalsTail._nextRemoved === null);
	            // assert(record._nextRemoved === null);
	            record._prevRemoved = this._removalsTail;
	            this._removalsTail = this._removalsTail._nextRemoved = record;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addIdentityChange = function (record, item) {
	        record.item = item;
	        if (this._identityChangesTail === null) {
	            this._identityChangesTail = this._identityChangesHead = record;
	        }
	        else {
	            this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
	        }
	        return record;
	    };
	    DefaultIterableDiffer.prototype.toString = function () {
	        var list = [];
	        this.forEachItem(function (record) { return list.push(record); });
	        var previous = [];
	        this.forEachPreviousItem(function (record) { return previous.push(record); });
	        var additions = [];
	        this.forEachAddedItem(function (record) { return additions.push(record); });
	        var moves = [];
	        this.forEachMovedItem(function (record) { return moves.push(record); });
	        var removals = [];
	        this.forEachRemovedItem(function (record) { return removals.push(record); });
	        var identityChanges = [];
	        this.forEachIdentityChange(function (record) { return identityChanges.push(record); });
	        return "collection: " + list.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" +
	            "additions: " + additions.join(', ') + "\n" + "moves: " + moves.join(', ') + "\n" +
	            "removals: " + removals.join(', ') + "\n" + "identityChanges: " +
	            identityChanges.join(', ') + "\n";
	    };
	    return DefaultIterableDiffer;
	}());
	exports.DefaultIterableDiffer = DefaultIterableDiffer;
	var CollectionChangeRecord = (function () {
	    function CollectionChangeRecord(item, trackById) {
	        this.item = item;
	        this.trackById = trackById;
	        this.currentIndex = null;
	        this.previousIndex = null;
	        /** @internal */
	        this._nextPrevious = null;
	        /** @internal */
	        this._prev = null;
	        /** @internal */
	        this._next = null;
	        /** @internal */
	        this._prevDup = null;
	        /** @internal */
	        this._nextDup = null;
	        /** @internal */
	        this._prevRemoved = null;
	        /** @internal */
	        this._nextRemoved = null;
	        /** @internal */
	        this._nextAdded = null;
	        /** @internal */
	        this._nextMoved = null;
	        /** @internal */
	        this._nextIdentityChange = null;
	    }
	    CollectionChangeRecord.prototype.toString = function () {
	        return this.previousIndex === this.currentIndex ?
	            lang_1.stringify(this.item) :
	            lang_1.stringify(this.item) + '[' + lang_1.stringify(this.previousIndex) + '->' +
	                lang_1.stringify(this.currentIndex) + ']';
	    };
	    return CollectionChangeRecord;
	}());
	exports.CollectionChangeRecord = CollectionChangeRecord;
	// A linked list of CollectionChangeRecords with the same CollectionChangeRecord.item
	var _DuplicateItemRecordList = (function () {
	    function _DuplicateItemRecordList() {
	        /** @internal */
	        this._head = null;
	        /** @internal */
	        this._tail = null;
	    }
	    /**
	     * Append the record to the list of duplicates.
	     *
	     * Note: by design all records in the list of duplicates hold the same value in record.item.
	     */
	    _DuplicateItemRecordList.prototype.add = function (record) {
	        if (this._head === null) {
	            this._head = this._tail = record;
	            record._nextDup = null;
	            record._prevDup = null;
	        }
	        else {
	            // todo(vicb)
	            // assert(record.item ==  _head.item ||
	            //       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
	            this._tail._nextDup = record;
	            record._prevDup = this._tail;
	            record._nextDup = null;
	            this._tail = record;
	        }
	    };
	    // Returns a CollectionChangeRecord having CollectionChangeRecord.trackById == trackById and
	    // CollectionChangeRecord.currentIndex >= afterIndex
	    _DuplicateItemRecordList.prototype.get = function (trackById, afterIndex) {
	        var record;
	        for (record = this._head; record !== null; record = record._nextDup) {
	            if ((afterIndex === null || afterIndex < record.currentIndex) &&
	                lang_1.looseIdentical(record.trackById, trackById)) {
	                return record;
	            }
	        }
	        return null;
	    };
	    /**
	     * Remove one {@link CollectionChangeRecord} from the list of duplicates.
	     *
	     * Returns whether the list of duplicates is empty.
	     */
	    _DuplicateItemRecordList.prototype.remove = function (record) {
	        // todo(vicb)
	        // assert(() {
	        //  // verify that the record being removed is in the list.
	        //  for (CollectionChangeRecord cursor = _head; cursor != null; cursor = cursor._nextDup) {
	        //    if (identical(cursor, record)) return true;
	        //  }
	        //  return false;
	        //});
	        var prev = record._prevDup;
	        var next = record._nextDup;
	        if (prev === null) {
	            this._head = next;
	        }
	        else {
	            prev._nextDup = next;
	        }
	        if (next === null) {
	            this._tail = prev;
	        }
	        else {
	            next._prevDup = prev;
	        }
	        return this._head === null;
	    };
	    return _DuplicateItemRecordList;
	}());
	var _DuplicateMap = (function () {
	    function _DuplicateMap() {
	        this.map = new Map();
	    }
	    _DuplicateMap.prototype.put = function (record) {
	        // todo(vicb) handle corner cases
	        var key = lang_1.getMapKey(record.trackById);
	        var duplicates = this.map.get(key);
	        if (!lang_1.isPresent(duplicates)) {
	            duplicates = new _DuplicateItemRecordList();
	            this.map.set(key, duplicates);
	        }
	        duplicates.add(record);
	    };
	    /**
	     * Retrieve the `value` using key. Because the CollectionChangeRecord value may be one which we
	     * have already iterated over, we use the afterIndex to pretend it is not there.
	     *
	     * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
	     * have any more `a`s needs to return the last `a` not the first or second.
	     */
	    _DuplicateMap.prototype.get = function (trackById, afterIndex) {
	        if (afterIndex === void 0) { afterIndex = null; }
	        var key = lang_1.getMapKey(trackById);
	        var recordList = this.map.get(key);
	        return lang_1.isBlank(recordList) ? null : recordList.get(trackById, afterIndex);
	    };
	    /**
	     * Removes a {@link CollectionChangeRecord} from the list of duplicates.
	     *
	     * The list of duplicates also is removed from the map if it gets empty.
	     */
	    _DuplicateMap.prototype.remove = function (record) {
	        var key = lang_1.getMapKey(record.trackById);
	        // todo(vicb)
	        // assert(this.map.containsKey(key));
	        var recordList = this.map.get(key);
	        // Remove the list of duplicates when it gets empty
	        if (recordList.remove(record)) {
	            this.map.delete(key);
	        }
	        return record;
	    };
	    Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
	        get: function () { return this.map.size === 0; },
	        enumerable: true,
	        configurable: true
	    });
	    _DuplicateMap.prototype.clear = function () { this.map.clear(); };
	    _DuplicateMap.prototype.toString = function () { return '_DuplicateMap(' + lang_1.stringify(this.map) + ')'; };
	    return _DuplicateMap;
	}());
	//# sourceMappingURL=default_iterable_differ.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	var collection_1 = __webpack_require__(25);
	var di_1 = __webpack_require__(19);
	/**
	 * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
	 * @ts2dart_const
	 */
	var KeyValueDiffers = (function () {
	    /*@ts2dart_const*/
	    function KeyValueDiffers(factories) {
	        this.factories = factories;
	    }
	    KeyValueDiffers.create = function (factories, parent) {
	        if (lang_1.isPresent(parent)) {
	            var copied = collection_1.ListWrapper.clone(parent.factories);
	            factories = factories.concat(copied);
	            return new KeyValueDiffers(factories);
	        }
	        else {
	            return new KeyValueDiffers(factories);
	        }
	    };
	    /**
	     * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
	     * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
	     * {@link KeyValueDiffers} instance.
	     *
	     * The following example shows how to extend an existing list of factories,
	           * which will only be applied to the injector for this component and its children.
	           * This step is all that's required to make a new {@link KeyValueDiffer} available.
	     *
	     * ### Example
	     *
	     * ```
	     * @Component({
	     *   viewProviders: [
	     *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
	     *   ]
	     * })
	     * ```
	     */
	    KeyValueDiffers.extend = function (factories) {
	        return new di_1.Provider(KeyValueDiffers, {
	            useFactory: function (parent) {
	                if (lang_1.isBlank(parent)) {
	                    // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
	                    // to
	                    // bootstrap(), which would override default pipes instead of extending them.
	                    throw new exceptions_1.BaseException('Cannot extend KeyValueDiffers without a parent injector');
	                }
	                return KeyValueDiffers.create(factories, parent);
	            },
	            // Dependency technically isn't optional, but we can provide a better error message this way.
	            deps: [[KeyValueDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
	        });
	    };
	    KeyValueDiffers.prototype.find = function (kv) {
	        var factory = this.factories.find(function (f) { return f.supports(kv); });
	        if (lang_1.isPresent(factory)) {
	            return factory;
	        }
	        else {
	            throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + kv + "'");
	        }
	    };
	    return KeyValueDiffers;
	}());
	exports.KeyValueDiffers = KeyValueDiffers;
	//# sourceMappingURL=keyvalue_differs.js.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(25);
	var lang_1 = __webpack_require__(11);
	var exceptions_1 = __webpack_require__(22);
	/* @ts2dart_const */
	var DefaultKeyValueDifferFactory = (function () {
	    function DefaultKeyValueDifferFactory() {
	    }
	    DefaultKeyValueDifferFactory.prototype.supports = function (obj) { return obj instanceof Map || lang_1.isJsObject(obj); };
	    DefaultKeyValueDifferFactory.prototype.create = function (cdRef) { return new DefaultKeyValueDiffer(); };
	    return DefaultKeyValueDifferFactory;
	}());
	exports.DefaultKeyValueDifferFactory = DefaultKeyValueDifferFactory;
	var DefaultKeyValueDiffer = (function () {
	    function DefaultKeyValueDiffer() {
	        this._records = new Map();
	        this._mapHead = null;
	        this._previousMapHead = null;
	        this._changesHead = null;
	        this._changesTail = null;
	        this._additionsHead = null;
	        this._additionsTail = null;
	        this._removalsHead = null;
	        this._removalsTail = null;
	    }
	    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
	        get: function () {
	            return this._additionsHead !== null || this._changesHead !== null ||
	                this._removalsHead !== null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DefaultKeyValueDiffer.prototype.forEachItem = function (fn) {
	        var record;
	        for (record = this._mapHead; record !== null; record = record._next) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function (fn) {
	        var record;
	        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachChangedItem = function (fn) {
	        var record;
	        for (record = this._changesHead; record !== null; record = record._nextChanged) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachAddedItem = function (fn) {
	        var record;
	        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function (fn) {
	        var record;
	        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.diff = function (map) {
	        if (lang_1.isBlank(map))
	            map = collection_1.MapWrapper.createFromPairs([]);
	        if (!(map instanceof Map || lang_1.isJsObject(map))) {
	            throw new exceptions_1.BaseException("Error trying to diff '" + map + "'");
	        }
	        if (this.check(map)) {
	            return this;
	        }
	        else {
	            return null;
	        }
	    };
	    DefaultKeyValueDiffer.prototype.onDestroy = function () { };
	    DefaultKeyValueDiffer.prototype.check = function (map) {
	        var _this = this;
	        this._reset();
	        var records = this._records;
	        var oldSeqRecord = this._mapHead;
	        var lastOldSeqRecord = null;
	        var lastNewSeqRecord = null;
	        var seqChanged = false;
	        this._forEach(map, function (value, key) {
	            var newSeqRecord;
	            if (oldSeqRecord !== null && key === oldSeqRecord.key) {
	                newSeqRecord = oldSeqRecord;
	                if (!lang_1.looseIdentical(value, oldSeqRecord.currentValue)) {
	                    oldSeqRecord.previousValue = oldSeqRecord.currentValue;
	                    oldSeqRecord.currentValue = value;
	                    _this._addToChanges(oldSeqRecord);
	                }
	            }
	            else {
	                seqChanged = true;
	                if (oldSeqRecord !== null) {
	                    oldSeqRecord._next = null;
	                    _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
	                    _this._addToRemovals(oldSeqRecord);
	                }
	                if (records.has(key)) {
	                    newSeqRecord = records.get(key);
	                }
	                else {
	                    newSeqRecord = new KeyValueChangeRecord(key);
	                    records.set(key, newSeqRecord);
	                    newSeqRecord.currentValue = value;
	                    _this._addToAdditions(newSeqRecord);
	                }
	            }
	            if (seqChanged) {
	                if (_this._isInRemovals(newSeqRecord)) {
	                    _this._removeFromRemovals(newSeqRecord);
	                }
	                if (lastNewSeqRecord == null) {
	                    _this._mapHead = newSeqRecord;
	                }
	                else {
	                    lastNewSeqRecord._next = newSeqRecord;
	                }
	            }
	            lastOldSeqRecord = oldSeqRecord;
	            lastNewSeqRecord = newSeqRecord;
	            oldSeqRecord = oldSeqRecord === null ? null : oldSeqRecord._next;
	        });
	        this._truncate(lastOldSeqRecord, oldSeqRecord);
	        return this.isDirty;
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._reset = function () {
	        if (this.isDirty) {
	            var record;
	            // Record the state of the mapping
	            for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
	                record._nextPrevious = record._next;
	            }
	            for (record = this._changesHead; record !== null; record = record._nextChanged) {
	                record.previousValue = record.currentValue;
	            }
	            for (record = this._additionsHead; record != null; record = record._nextAdded) {
	                record.previousValue = record.currentValue;
	            }
	            // todo(vicb) once assert is supported
	            // assert(() {
	            //  var r = _changesHead;
	            //  while (r != null) {
	            //    var nextRecord = r._nextChanged;
	            //    r._nextChanged = null;
	            //    r = nextRecord;
	            //  }
	            //
	            //  r = _additionsHead;
	            //  while (r != null) {
	            //    var nextRecord = r._nextAdded;
	            //    r._nextAdded = null;
	            //    r = nextRecord;
	            //  }
	            //
	            //  r = _removalsHead;
	            //  while (r != null) {
	            //    var nextRecord = r._nextRemoved;
	            //    r._nextRemoved = null;
	            //    r = nextRecord;
	            //  }
	            //
	            //  return true;
	            //});
	            this._changesHead = this._changesTail = null;
	            this._additionsHead = this._additionsTail = null;
	            this._removalsHead = this._removalsTail = null;
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._truncate = function (lastRecord, record) {
	        while (record !== null) {
	            if (lastRecord === null) {
	                this._mapHead = null;
	            }
	            else {
	                lastRecord._next = null;
	            }
	            var nextRecord = record._next;
	            // todo(vicb) assert
	            // assert((() {
	            //  record._next = null;
	            //  return true;
	            //}));
	            this._addToRemovals(record);
	            lastRecord = record;
	            record = nextRecord;
	        }
	        for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
	            rec.previousValue = rec.currentValue;
	            rec.currentValue = null;
	            this._records.delete(rec.key);
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._isInRemovals = function (record) {
	        return record === this._removalsHead || record._nextRemoved !== null ||
	            record._prevRemoved !== null;
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._addToRemovals = function (record) {
	        // todo(vicb) assert
	        // assert(record._next == null);
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        // assert(record._nextRemoved == null);
	        // assert(record._prevRemoved == null);
	        if (this._removalsHead === null) {
	            this._removalsHead = this._removalsTail = record;
	        }
	        else {
	            this._removalsTail._nextRemoved = record;
	            record._prevRemoved = this._removalsTail;
	            this._removalsTail = record;
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._removeFromSeq = function (prev, record) {
	        var next = record._next;
	        if (prev === null) {
	            this._mapHead = next;
	        }
	        else {
	            prev._next = next;
	        }
	        // todo(vicb) assert
	        // assert((() {
	        //  record._next = null;
	        //  return true;
	        //})());
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._removeFromRemovals = function (record) {
	        // todo(vicb) assert
	        // assert(record._next == null);
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        var prev = record._prevRemoved;
	        var next = record._nextRemoved;
	        if (prev === null) {
	            this._removalsHead = next;
	        }
	        else {
	            prev._nextRemoved = next;
	        }
	        if (next === null) {
	            this._removalsTail = prev;
	        }
	        else {
	            next._prevRemoved = prev;
	        }
	        record._prevRemoved = record._nextRemoved = null;
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._addToAdditions = function (record) {
	        // todo(vicb): assert
	        // assert(record._next == null);
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        // assert(record._nextRemoved == null);
	        // assert(record._prevRemoved == null);
	        if (this._additionsHead === null) {
	            this._additionsHead = this._additionsTail = record;
	        }
	        else {
	            this._additionsTail._nextAdded = record;
	            this._additionsTail = record;
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._addToChanges = function (record) {
	        // todo(vicb) assert
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        // assert(record._nextRemoved == null);
	        // assert(record._prevRemoved == null);
	        if (this._changesHead === null) {
	            this._changesHead = this._changesTail = record;
	        }
	        else {
	            this._changesTail._nextChanged = record;
	            this._changesTail = record;
	        }
	    };
	    DefaultKeyValueDiffer.prototype.toString = function () {
	        var items = [];
	        var previous = [];
	        var changes = [];
	        var additions = [];
	        var removals = [];
	        var record;
	        for (record = this._mapHead; record !== null; record = record._next) {
	            items.push(lang_1.stringify(record));
	        }
	        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	            previous.push(lang_1.stringify(record));
	        }
	        for (record = this._changesHead; record !== null; record = record._nextChanged) {
	            changes.push(lang_1.stringify(record));
	        }
	        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	            additions.push(lang_1.stringify(record));
	        }
	        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	            removals.push(lang_1.stringify(record));
	        }
	        return "map: " + items.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" +
	            "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" +
	            "removals: " + removals.join(', ') + "\n";
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._forEach = function (obj, fn) {
	        if (obj instanceof Map) {
	            obj.forEach(fn);
	        }
	        else {
	            collection_1.StringMapWrapper.forEach(obj, fn);
	        }
	    };
	    return DefaultKeyValueDiffer;
	}());
	exports.DefaultKeyValueDiffer = DefaultKeyValueDiffer;
	var KeyValueChangeRecord = (function () {
	    function KeyValueChangeRecord(key) {
	        this.key = key;
	        this.previousValue = null;
	        this.currentValue = null;
	        /** @internal */
	        this._nextPrevious = null;
	        /** @internal */
	        this._next = null;
	        /** @internal */
	        this._nextAdded = null;
	        /** @internal */
	        this._nextRemoved = null;
	        /** @internal */
	        this._prevRemoved = null;
	        /** @internal */
	        this._nextChanged = null;
	    }
	    KeyValueChangeRecord.prototype.toString = function () {
	        return lang_1.looseIdentical(this.previousValue, this.currentValue) ?
	            lang_1.stringify(this.key) :
	            (lang_1.stringify(this.key) + '[' + lang_1.stringify(this.previousValue) + '->' +
	                lang_1.stringify(this.currentValue) + ']');
	    };
	    return KeyValueChangeRecord;
	}());
	exports.KeyValueChangeRecord = KeyValueChangeRecord;
	//# sourceMappingURL=default_keyvalue_differ.js.map

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	var ChangeDetectorRef = (function () {
	    function ChangeDetectorRef() {
	    }
	    return ChangeDetectorRef;
	}());
	exports.ChangeDetectorRef = ChangeDetectorRef;
	//# sourceMappingURL=change_detector_ref.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(25);
	var lang_2 = __webpack_require__(11);
	exports.looseIdentical = lang_2.looseIdentical;
	exports.uninitialized = new Object();
	function devModeEqual(a, b) {
	    if (collection_1.isListLikeIterable(a) && collection_1.isListLikeIterable(b)) {
	        return collection_1.areIterablesEqual(a, b, devModeEqual);
	    }
	    else if (!collection_1.isListLikeIterable(a) && !lang_1.isPrimitive(a) && !collection_1.isListLikeIterable(b) &&
	        !lang_1.isPrimitive(b)) {
	        return true;
	    }
	    else {
	        return lang_1.looseIdentical(a, b);
	    }
	}
	exports.devModeEqual = devModeEqual;
	/**
	 * Indicates that the result of a {@link PipeMetadata} transformation has changed even though the
	 * reference
	 * has not changed.
	 *
	 * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
	 *
	 * Example:
	 *
	 * ```
	 * if (this._latestValue === this._latestReturnedValue) {
	 *    return this._latestReturnedValue;
	 *  } else {
	 *    this._latestReturnedValue = this._latestValue;
	 *    return WrappedValue.wrap(this._latestValue); // this will force update
	 *  }
	 * ```
	 */
	var WrappedValue = (function () {
	    function WrappedValue(wrapped) {
	        this.wrapped = wrapped;
	    }
	    WrappedValue.wrap = function (value) { return new WrappedValue(value); };
	    return WrappedValue;
	}());
	exports.WrappedValue = WrappedValue;
	/**
	 * Helper class for unwrapping WrappedValue s
	 */
	var ValueUnwrapper = (function () {
	    function ValueUnwrapper() {
	        this.hasWrappedValue = false;
	    }
	    ValueUnwrapper.prototype.unwrap = function (value) {
	        if (value instanceof WrappedValue) {
	            this.hasWrappedValue = true;
	            return value.wrapped;
	        }
	        return value;
	    };
	    ValueUnwrapper.prototype.reset = function () { this.hasWrappedValue = false; };
	    return ValueUnwrapper;
	}());
	exports.ValueUnwrapper = ValueUnwrapper;
	/**
	 * Represents a basic change from a previous to a new value.
	 */
	var SimpleChange = (function () {
	    function SimpleChange(previousValue, currentValue) {
	        this.previousValue = previousValue;
	        this.currentValue = currentValue;
	    }
	    /**
	     * Check whether the new value is the first value assigned.
	     */
	    SimpleChange.prototype.isFirstChange = function () { return this.previousValue === exports.uninitialized; };
	    return SimpleChange;
	}());
	exports.SimpleChange = SimpleChange;
	//# sourceMappingURL=change_detection_util.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var exceptions_1 = __webpack_require__(22);
	var RenderComponentType = (function () {
	    function RenderComponentType(id, templateUrl, slotCount, encapsulation, styles) {
	        this.id = id;
	        this.templateUrl = templateUrl;
	        this.slotCount = slotCount;
	        this.encapsulation = encapsulation;
	        this.styles = styles;
	    }
	    return RenderComponentType;
	}());
	exports.RenderComponentType = RenderComponentType;
	var RenderDebugInfo = (function () {
	    function RenderDebugInfo() {
	    }
	    Object.defineProperty(RenderDebugInfo.prototype, "injector", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "component", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "providerTokens", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "references", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "context", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "source", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return RenderDebugInfo;
	}());
	exports.RenderDebugInfo = RenderDebugInfo;
	var Renderer = (function () {
	    function Renderer() {
	    }
	    return Renderer;
	}());
	exports.Renderer = Renderer;
	/**
	 * Injectable service that provides a low-level interface for modifying the UI.
	 *
	 * Use this service to bypass Angular's templating and make custom UI changes that can't be
	 * expressed declaratively. For example if you need to set a property or an attribute whose name is
	 * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
	 * respectively.
	 *
	 * If you are implementing a custom renderer, you must implement this interface.
	 *
	 * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
	 */
	var RootRenderer = (function () {
	    function RootRenderer() {
	    }
	    return RootRenderer;
	}());
	exports.RootRenderer = RootRenderer;
	//# sourceMappingURL=api.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var decorators_1 = __webpack_require__(20);
	// Note: Need to rename warn as in Dart
	// class members and imports can't use the same name.
	var _warnImpl = lang_1.warn;
	var Console = (function () {
	    function Console() {
	    }
	    Console.prototype.log = function (message) { lang_1.print(message); };
	    // Note: for reporting errors use `DOM.logError()` as it is platform specific
	    Console.prototype.warn = function (message) { _warnImpl(message); };
	    Console.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    return Console;
	}());
	exports.Console = Console;
	//# sourceMappingURL=console.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for Zone
	var ng_zone_1 = __webpack_require__(38);
	exports.NgZone = ng_zone_1.NgZone;
	exports.NgZoneError = ng_zone_1.NgZoneError;
	//# sourceMappingURL=zone.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for render
	var api_1 = __webpack_require__(83);
	exports.RootRenderer = api_1.RootRenderer;
	exports.Renderer = api_1.Renderer;
	exports.RenderComponentType = api_1.RenderComponentType;
	//# sourceMappingURL=render.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for compiler
	var component_resolver_1 = __webpack_require__(65);
	exports.ComponentResolver = component_resolver_1.ComponentResolver;
	var query_list_1 = __webpack_require__(88);
	exports.QueryList = query_list_1.QueryList;
	var dynamic_component_loader_1 = __webpack_require__(89);
	exports.DynamicComponentLoader = dynamic_component_loader_1.DynamicComponentLoader;
	var element_ref_1 = __webpack_require__(71);
	exports.ElementRef = element_ref_1.ElementRef;
	var template_ref_1 = __webpack_require__(90);
	exports.TemplateRef = template_ref_1.TemplateRef;
	var view_ref_1 = __webpack_require__(91);
	exports.EmbeddedViewRef = view_ref_1.EmbeddedViewRef;
	exports.ViewRef = view_ref_1.ViewRef;
	var view_container_ref_1 = __webpack_require__(72);
	exports.ViewContainerRef = view_container_ref_1.ViewContainerRef;
	var component_factory_1 = __webpack_require__(66);
	exports.ComponentRef = component_factory_1.ComponentRef;
	exports.ComponentFactory = component_factory_1.ComponentFactory;
	var exceptions_1 = __webpack_require__(75);
	exports.ExpressionChangedAfterItHasBeenCheckedException = exceptions_1.ExpressionChangedAfterItHasBeenCheckedException;
	//# sourceMappingURL=linker.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(25);
	var lang_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(39);
	/**
	 * An unmodifiable list of items that Angular keeps up to date when the state
	 * of the application changes.
	 *
	 * The type of object that {@link QueryMetadata} and {@link ViewQueryMetadata} provide.
	 *
	 * Implements an iterable interface, therefore it can be used in both ES6
	 * javascript `for (var i of items)` loops as well as in Angular templates with
	 * `*ngFor="let i of myList"`.
	 *
	 * Changes can be observed by subscribing to the changes `Observable`.
	 *
	 * NOTE: In the future this class will implement an `Observable` interface.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
	 * ```typescript
	 * @Component({...})
	 * class Container {
	 *   constructor(@Query(Item) items: QueryList<Item>) {
	 *     items.changes.subscribe(_ => console.log(items.length));
	 *   }
	 * }
	 * ```
	 */
	var QueryList = (function () {
	    function QueryList() {
	        this._dirty = true;
	        this._results = [];
	        this._emitter = new async_1.EventEmitter();
	    }
	    Object.defineProperty(QueryList.prototype, "changes", {
	        get: function () { return this._emitter; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryList.prototype, "length", {
	        get: function () { return this._results.length; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryList.prototype, "first", {
	        get: function () { return collection_1.ListWrapper.first(this._results); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryList.prototype, "last", {
	        get: function () { return collection_1.ListWrapper.last(this._results); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * returns a new array with the passed in function applied to each element.
	     */
	    QueryList.prototype.map = function (fn) { return this._results.map(fn); };
	    /**
	     * returns a filtered array.
	     */
	    QueryList.prototype.filter = function (fn) { return this._results.filter(fn); };
	    /**
	     * returns a reduced value.
	     */
	    QueryList.prototype.reduce = function (fn, init) { return this._results.reduce(fn, init); };
	    /**
	     * executes function for each element in a query.
	     */
	    QueryList.prototype.forEach = function (fn) { this._results.forEach(fn); };
	    /**
	     * converts QueryList into an array
	     */
	    QueryList.prototype.toArray = function () { return collection_1.ListWrapper.clone(this._results); };
	    QueryList.prototype[lang_1.getSymbolIterator()] = function () { return this._results[lang_1.getSymbolIterator()](); };
	    QueryList.prototype.toString = function () { return this._results.toString(); };
	    /**
	     * @internal
	     */
	    QueryList.prototype.reset = function (res) {
	        this._results = collection_1.ListWrapper.flatten(res);
	        this._dirty = false;
	    };
	    /** @internal */
	    QueryList.prototype.notifyOnChanges = function () { this._emitter.emit(this); };
	    /** internal */
	    QueryList.prototype.setDirty = function () { this._dirty = true; };
	    Object.defineProperty(QueryList.prototype, "dirty", {
	        /** internal */
	        get: function () { return this._dirty; },
	        enumerable: true,
	        configurable: true
	    });
	    return QueryList;
	}());
	exports.QueryList = QueryList;
	//# sourceMappingURL=query_list.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var component_resolver_1 = __webpack_require__(65);
	var lang_1 = __webpack_require__(11);
	var reflective_injector_1 = __webpack_require__(26);
	var decorators_1 = __webpack_require__(20);
	/**
	 * Use ComponentResolver and ViewContainerRef directly.
	 *
	 * @deprecated
	 */
	var DynamicComponentLoader = (function () {
	    function DynamicComponentLoader() {
	    }
	    return DynamicComponentLoader;
	}());
	exports.DynamicComponentLoader = DynamicComponentLoader;
	var DynamicComponentLoader_ = (function (_super) {
	    __extends(DynamicComponentLoader_, _super);
	    function DynamicComponentLoader_(_compiler) {
	        _super.call(this);
	        this._compiler = _compiler;
	    }
	    DynamicComponentLoader_.prototype.loadAsRoot = function (type, overrideSelectorOrNode, injector, onDispose, projectableNodes) {
	        return this._compiler.resolveComponent(type).then(function (componentFactory) {
	            var componentRef = componentFactory.create(injector, projectableNodes, lang_1.isPresent(overrideSelectorOrNode) ? overrideSelectorOrNode : componentFactory.selector);
	            if (lang_1.isPresent(onDispose)) {
	                componentRef.onDestroy(onDispose);
	            }
	            return componentRef;
	        });
	    };
	    DynamicComponentLoader_.prototype.loadNextToLocation = function (type, location, providers, projectableNodes) {
	        if (providers === void 0) { providers = null; }
	        if (projectableNodes === void 0) { projectableNodes = null; }
	        return this._compiler.resolveComponent(type).then(function (componentFactory) {
	            var contextInjector = location.parentInjector;
	            var childInjector = lang_1.isPresent(providers) && providers.length > 0 ?
	                reflective_injector_1.ReflectiveInjector.fromResolvedProviders(providers, contextInjector) :
	                contextInjector;
	            return location.createComponent(componentFactory, location.length, childInjector, projectableNodes);
	        });
	    };
	    DynamicComponentLoader_.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    DynamicComponentLoader_.ctorParameters = [
	        { type: component_resolver_1.ComponentResolver, },
	    ];
	    return DynamicComponentLoader_;
	}(DynamicComponentLoader));
	exports.DynamicComponentLoader_ = DynamicComponentLoader_;
	//# sourceMappingURL=dynamic_component_loader.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(11);
	var EMPTY_CONTEXT = new Object();
	/**
	 * Represents an Embedded Template that can be used to instantiate Embedded Views.
	 *
	 * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<template>` element (or
	 * directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into the
	 * constructor of the directive using the `TemplateRef` Token. Alternatively you can query for the
	 * `TemplateRef` from a Component or a Directive via {@link Query}.
	 *
	 * To instantiate Embedded Views based on a Template, use
	 * {@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
	 * View Container.
	 */
	var TemplateRef = (function () {
	    function TemplateRef() {
	    }
	    Object.defineProperty(TemplateRef.prototype, "elementRef", {
	        /**
	         * The location in the View where the Embedded View logically belongs to.
	         *
	         * The data-binding and injection contexts of Embedded Views created from this `TemplateRef`
	         * inherit from the contexts of this location.
	         *
	         * Typically new Embedded Views are attached to the View Container of this location, but in
	         * advanced use-cases, the View can be attached to a different container while keeping the
	         * data-binding and injection context from the original location.
	         *
	         */
	        // TODO(i): rename to anchor or location
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return TemplateRef;
	}());
	exports.TemplateRef = TemplateRef;
	var TemplateRef_ = (function (_super) {
	    __extends(TemplateRef_, _super);
	    function TemplateRef_(_appElement, _viewFactory) {
	        _super.call(this);
	        this._appElement = _appElement;
	        this._viewFactory = _viewFactory;
	    }
	    TemplateRef_.prototype.createEmbeddedView = function (context) {
	        var view = this._viewFactory(this._appElement.parentView.viewUtils, this._appElement.parentInjector, this._appElement);
	        if (lang_1.isBlank(context)) {
	            context = EMPTY_CONTEXT;
	        }
	        view.create(context, null, null);
	        return view.ref;
	    };
	    Object.defineProperty(TemplateRef_.prototype, "elementRef", {
	        get: function () { return this._appElement.elementRef; },
	        enumerable: true,
	        configurable: true
	    });
	    return TemplateRef_;
	}(TemplateRef));
	exports.TemplateRef_ = TemplateRef_;
	//# sourceMappingURL=template_ref.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(22);
	var constants_1 = __webpack_require__(15);
	var ViewRef = (function () {
	    function ViewRef() {
	    }
	    Object.defineProperty(ViewRef.prototype, "destroyed", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return ViewRef;
	}());
	exports.ViewRef = ViewRef;
	/**
	 * Represents an Angular View.
	 *
	 * <!-- TODO: move the next two paragraphs to the dev guide -->
	 * A View is a fundamental building block of the application UI. It is the smallest grouping of
	 * Elements which are created and destroyed together.
	 *
	 * Properties of elements in a View can change, but the structure (number and order) of elements in
	 * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
	 * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
	 * <!-- /TODO -->
	 *
	 * ### Example
	 *
	 * Given this template...
	 *
	 * ```
	 * Count: {{items.length}}
	 * <ul>
	 *   <li *ngFor="let  item of items">{{item}}</li>
	 * </ul>
	 * ```
	 *
	 * ... we have two {@link TemplateRef}s:
	 *
	 * Outer {@link TemplateRef}:
	 * ```
	 * Count: {{items.length}}
	 * <ul>
	 *   <template ngFor let-item [ngForOf]="items"></template>
	 * </ul>
	 * ```
	 *
	 * Inner {@link TemplateRef}:
	 * ```
	 *   <li>{{item}}</li>
	 * ```
	 *
	 * Notice that the original template is broken down into two separate {@link TemplateRef}s.
	 *
	 * The outer/inner {@link TemplateRef}s are then assembled into views like so:
	 *
	 * ```
	 * <!-- ViewRef: outer-0 -->
	 * Count: 2
	 * <ul>
	 *   <template view-container-ref></template>
	 *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
	 *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
	 * </ul>
	 * <!-- /ViewRef: outer-0 -->
	 * ```
	 */
	var EmbeddedViewRef = (function (_super) {
	    __extends(EmbeddedViewRef, _super);
	    function EmbeddedViewRef() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(EmbeddedViewRef.prototype, "context", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return EmbeddedViewRef;
	}(ViewRef));
	exports.EmbeddedViewRef = EmbeddedViewRef;
	var ViewRef_ = (function () {
	    function ViewRef_(_view) {
	        this._view = _view;
	        this._view = _view;
	    }
	    Object.defineProperty(ViewRef_.prototype, "internalView", {
	        get: function () { return this._view; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
	        get: function () { return this._view.flatRootNodes; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewRef_.prototype, "context", {
	        get: function () { return this._view.context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewRef_.prototype, "destroyed", {
	        get: function () { return this._view.destroyed; },
	        enumerable: true,
	        configurable: true
	    });
	    ViewRef_.prototype.markForCheck = function () { this._view.markPathToRootAsCheckOnce(); };
	    ViewRef_.prototype.detach = function () { this._view.cdMode = constants_1.ChangeDetectionStrategy.Detached; };
	    ViewRef_.prototype.detectChanges = function () { this._view.detectChanges(false); };
	    ViewRef_.prototype.checkNoChanges = function () { this._view.detectChanges(true); };
	    ViewRef_.prototype.reattach = function () {
	        this._view.cdMode = constants_1.ChangeDetectionStrategy.CheckAlways;
	        this.markForCheck();
	    };
	    ViewRef_.prototype.onDestroy = function (callback) { this._view.disposables.push(callback); };
	    ViewRef_.prototype.destroy = function () { this._view.destroy(); };
	    return ViewRef_;
	}());
	exports.ViewRef_ = ViewRef_;
	//# sourceMappingURL=view_ref.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(25);
	var EventListener = (function () {
	    function EventListener(name, callback) {
	        this.name = name;
	        this.callback = callback;
	    }
	    ;
	    return EventListener;
	}());
	exports.EventListener = EventListener;
	var DebugNode = (function () {
	    function DebugNode(nativeNode, parent, _debugInfo) {
	        this._debugInfo = _debugInfo;
	        this.nativeNode = nativeNode;
	        if (lang_1.isPresent(parent) && parent instanceof DebugElement) {
	            parent.addChild(this);
	        }
	        else {
	            this.parent = null;
	        }
	        this.listeners = [];
	    }
	    Object.defineProperty(DebugNode.prototype, "injector", {
	        get: function () { return lang_1.isPresent(this._debugInfo) ? this._debugInfo.injector : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "componentInstance", {
	        get: function () {
	            return lang_1.isPresent(this._debugInfo) ? this._debugInfo.component : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "context", {
	        get: function () { return lang_1.isPresent(this._debugInfo) ? this._debugInfo.context : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "references", {
	        get: function () {
	            return lang_1.isPresent(this._debugInfo) ? this._debugInfo.references : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "providerTokens", {
	        get: function () {
	            return lang_1.isPresent(this._debugInfo) ? this._debugInfo.providerTokens : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "source", {
	        get: function () { return lang_1.isPresent(this._debugInfo) ? this._debugInfo.source : null; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Use injector.get(token) instead.
	     *
	     * @deprecated
	     */
	    DebugNode.prototype.inject = function (token) { return this.injector.get(token); };
	    return DebugNode;
	}());
	exports.DebugNode = DebugNode;
	var DebugElement = (function (_super) {
	    __extends(DebugElement, _super);
	    function DebugElement(nativeNode, parent, _debugInfo) {
	        _super.call(this, nativeNode, parent, _debugInfo);
	        this.properties = {};
	        this.attributes = {};
	        this.childNodes = [];
	        this.nativeElement = nativeNode;
	    }
	    DebugElement.prototype.addChild = function (child) {
	        if (lang_1.isPresent(child)) {
	            this.childNodes.push(child);
	            child.parent = this;
	        }
	    };
	    DebugElement.prototype.removeChild = function (child) {
	        var childIndex = this.childNodes.indexOf(child);
	        if (childIndex !== -1) {
	            child.parent = null;
	            this.childNodes.splice(childIndex, 1);
	        }
	    };
	    DebugElement.prototype.insertChildrenAfter = function (child, newChildren) {
	        var siblingIndex = this.childNodes.indexOf(child);
	        if (siblingIndex !== -1) {
	            var previousChildren = this.childNodes.slice(0, siblingIndex + 1);
	            var nextChildren = this.childNodes.slice(siblingIndex + 1);
	            this.childNodes =
	                collection_1.ListWrapper.concat(collection_1.ListWrapper.concat(previousChildren, newChildren), nextChildren);
	            for (var i = 0; i < newChildren.length; ++i) {
	                var newChild = newChildren[i];
	                if (lang_1.isPresent(newChild.parent)) {
	                    newChild.parent.removeChild(newChild);
	                }
	                newChild.parent = this;
	            }
	        }
	    };
	    DebugElement.prototype.query = function (predicate) {
	        var results = this.queryAll(predicate);
	        return results.length > 0 ? results[0] : null;
	    };
	    DebugElement.prototype.queryAll = function (predicate) {
	        var matches = [];
	        _queryElementChildren(this, predicate, matches);
	        return matches;
	    };
	    DebugElement.prototype.queryAllNodes = function (predicate) {
	        var matches = [];
	        _queryNodeChildren(this, predicate, matches);
	        return matches;
	    };
	    Object.defineProperty(DebugElement.prototype, "children", {
	        get: function () {
	            var children = [];
	            this.childNodes.forEach(function (node) {
	                if (node instanceof DebugElement) {
	                    children.push(node);
	                }
	            });
	            return children;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DebugElement.prototype.triggerEventHandler = function (eventName, eventObj) {
	        this.listeners.forEach(function (listener) {
	            if (listener.name == eventName) {
	                listener.callback(eventObj);
	            }
	        });
	    };
	    return DebugElement;
	}(DebugNode));
	exports.DebugElement = DebugElement;
	function asNativeElements(debugEls) {
	    return debugEls.map(function (el) { return el.nativeElement; });
	}
	exports.asNativeElements = asNativeElements;
	function _queryElementChildren(element, predicate, matches) {
	    element.childNodes.forEach(function (node) {
	        if (node instanceof DebugElement) {
	            if (predicate(node)) {
	                matches.push(node);
	            }
	            _queryElementChildren(node, predicate, matches);
	        }
	    });
	}
	function _queryNodeChildren(parentNode, predicate, matches) {
	    if (parentNode instanceof DebugElement) {
	        parentNode.childNodes.forEach(function (node) {
	            if (predicate(node)) {
	                matches.push(node);
	            }
	            if (node instanceof DebugElement) {
	                _queryNodeChildren(node, predicate, matches);
	            }
	        });
	    }
	}
	// Need to keep the nodes in a global Map so that multiple angular apps are supported.
	var _nativeNodeToDebugNode = new Map();
	function getDebugNode(nativeNode) {
	    return _nativeNodeToDebugNode.get(nativeNode);
	}
	exports.getDebugNode = getDebugNode;
	function getAllDebugNodes() {
	    return collection_1.MapWrapper.values(_nativeNodeToDebugNode);
	}
	exports.getAllDebugNodes = getAllDebugNodes;
	function indexDebugNode(node) {
	    _nativeNodeToDebugNode.set(node.nativeNode, node);
	}
	exports.indexDebugNode = indexDebugNode;
	function removeDebugNodeFromIndex(node) {
	    _nativeNodeToDebugNode.delete(node.nativeNode);
	}
	exports.removeDebugNodeFromIndex = removeDebugNodeFromIndex;
	//# sourceMappingURL=debug_node.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* @module
	* @description
	* Change detection enables data binding in Angular.
	*/
	var change_detection_1 = __webpack_require__(76);
	exports.ChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
	exports.ChangeDetectorRef = change_detection_1.ChangeDetectorRef;
	exports.WrappedValue = change_detection_1.WrappedValue;
	exports.SimpleChange = change_detection_1.SimpleChange;
	exports.DefaultIterableDiffer = change_detection_1.DefaultIterableDiffer;
	exports.IterableDiffers = change_detection_1.IterableDiffers;
	exports.KeyValueDiffers = change_detection_1.KeyValueDiffers;
	exports.CollectionChangeRecord = change_detection_1.CollectionChangeRecord;
	exports.KeyValueChangeRecord = change_detection_1.KeyValueChangeRecord;
	//# sourceMappingURL=change_detection.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var di_1 = __webpack_require__(19);
	/**
	 * A token that can be provided when bootstraping an application to make an array of directives
	 * available in every component of the application.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {PLATFORM_DIRECTIVES} from '@angular/core';
	 * import {OtherDirective} from './myDirectives';
	 *
	 * @Component({
	 *   selector: 'my-component',
	 *   template: `
	 *     <!-- can use other directive even though the component does not list it in `directives` -->
	 *     <other-directive></other-directive>
	 *   `
	 * })
	 * export class MyComponent {
	 *   ...
	 * }
	 *
	 * bootstrap(MyComponent, [provide(PLATFORM_DIRECTIVES, {useValue: [OtherDirective], multi:true})]);
	 * ```
	 */
	exports.PLATFORM_DIRECTIVES = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Platform Directives");
	/**
	 * A token that can be provided when bootstraping an application to make an array of pipes
	 * available in every component of the application.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {PLATFORM_PIPES} from '@angular/core';
	 * import {OtherPipe} from './myPipe';
	 *
	 * @Component({
	 *   selector: 'my-component',
	 *   template: `
	 *     {{123 | other-pipe}}
	 *   `
	 * })
	 * export class MyComponent {
	 *   ...
	 * }
	 *
	 * bootstrap(MyComponent, [provide(PLATFORM_PIPES, {useValue: [OtherPipe], multi:true})]);
	 * ```
	 */
	exports.PLATFORM_PIPES = new di_1.OpaqueToken("Platform Pipes");
	//# sourceMappingURL=platform_directives_and_pipes.js.map

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var console_1 = __webpack_require__(84);
	var reflection_1 = __webpack_require__(28);
	var reflector_reader_1 = __webpack_require__(30);
	var testability_1 = __webpack_require__(64);
	var application_ref_1 = __webpack_require__(37);
	function _reflector() {
	    return reflection_1.reflector;
	}
	var __unused; // prevent missing use Dart warning.
	/**
	 * A default set of providers which should be included in any Angular platform.
	 */
	exports.PLATFORM_COMMON_PROVIDERS = [
	    application_ref_1.PLATFORM_CORE_PROVIDERS,
	    /*@ts2dart_Provider*/ { provide: reflection_1.Reflector, useFactory: _reflector, deps: [] },
	    /*@ts2dart_Provider*/ { provide: reflector_reader_1.ReflectorReader, useExisting: reflection_1.Reflector },
	    testability_1.TestabilityRegistry,
	    console_1.Console
	];
	//# sourceMappingURL=platform_common_providers.js.map

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var application_tokens_1 = __webpack_require__(63);
	var application_ref_1 = __webpack_require__(37);
	var change_detection_1 = __webpack_require__(76);
	var view_utils_1 = __webpack_require__(67);
	var component_resolver_1 = __webpack_require__(65);
	var dynamic_component_loader_1 = __webpack_require__(89);
	var __unused; // avoid unused import when Type union types are erased
	/**
	 * A default set of providers which should be included in any Angular
	 * application, regardless of the platform it runs onto.
	 */
	exports.APPLICATION_COMMON_PROVIDERS = 
	/*@ts2dart_const*/ [
	    application_ref_1.APPLICATION_CORE_PROVIDERS,
	    /* @ts2dart_Provider */ { provide: component_resolver_1.ComponentResolver, useClass: component_resolver_1.ReflectorComponentResolver },
	    application_tokens_1.APP_ID_RANDOM_PROVIDER,
	    view_utils_1.ViewUtils,
	    /* @ts2dart_Provider */ { provide: change_detection_1.IterableDiffers, useValue: change_detection_1.defaultIterableDiffers },
	    /* @ts2dart_Provider */ { provide: change_detection_1.KeyValueDiffers, useValue: change_detection_1.defaultKeyValueDiffers },
	    /* @ts2dart_Provider */ { provide: dynamic_component_loader_1.DynamicComponentLoader, useClass: dynamic_component_loader_1.DynamicComponentLoader_ }
	];
	//# sourceMappingURL=application_common_providers.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var constants = __webpack_require__(15);
	var security = __webpack_require__(68);
	var reflective_provider = __webpack_require__(27);
	var lifecycle_hooks = __webpack_require__(98);
	var reflector_reader = __webpack_require__(30);
	var component_resolver = __webpack_require__(65);
	var element = __webpack_require__(69);
	var view = __webpack_require__(99);
	var view_type = __webpack_require__(70);
	var view_utils = __webpack_require__(67);
	var metadata_view = __webpack_require__(16);
	var debug_context = __webpack_require__(100);
	var change_detection_util = __webpack_require__(82);
	var api = __webpack_require__(83);
	var template_ref = __webpack_require__(90);
	var wtf_init = __webpack_require__(102);
	var reflection_capabilities = __webpack_require__(31);
	var decorators = __webpack_require__(17);
	var debug = __webpack_require__(103);
	var provider_util = __webpack_require__(35);
	var console = __webpack_require__(84);
	exports.__core_private__ = {
	    isDefaultChangeDetectionStrategy: constants.isDefaultChangeDetectionStrategy,
	    ChangeDetectorState: constants.ChangeDetectorState,
	    CHANGE_DETECTION_STRATEGY_VALUES: constants.CHANGE_DETECTION_STRATEGY_VALUES,
	    constructDependencies: reflective_provider.constructDependencies,
	    LifecycleHooks: lifecycle_hooks.LifecycleHooks,
	    LIFECYCLE_HOOKS_VALUES: lifecycle_hooks.LIFECYCLE_HOOKS_VALUES,
	    ReflectorReader: reflector_reader.ReflectorReader,
	    ReflectorComponentResolver: component_resolver.ReflectorComponentResolver,
	    AppElement: element.AppElement,
	    AppView: view.AppView,
	    DebugAppView: view.DebugAppView,
	    ViewType: view_type.ViewType,
	    MAX_INTERPOLATION_VALUES: view_utils.MAX_INTERPOLATION_VALUES,
	    checkBinding: view_utils.checkBinding,
	    flattenNestedViewRenderNodes: view_utils.flattenNestedViewRenderNodes,
	    interpolate: view_utils.interpolate,
	    ViewUtils: view_utils.ViewUtils,
	    VIEW_ENCAPSULATION_VALUES: metadata_view.VIEW_ENCAPSULATION_VALUES,
	    DebugContext: debug_context.DebugContext,
	    StaticNodeDebugInfo: debug_context.StaticNodeDebugInfo,
	    devModeEqual: change_detection_util.devModeEqual,
	    uninitialized: change_detection_util.uninitialized,
	    ValueUnwrapper: change_detection_util.ValueUnwrapper,
	    RenderDebugInfo: api.RenderDebugInfo,
	    SecurityContext: security.SecurityContext,
	    SanitizationService: security.SanitizationService,
	    TemplateRef_: template_ref.TemplateRef_,
	    wtfInit: wtf_init.wtfInit,
	    ReflectionCapabilities: reflection_capabilities.ReflectionCapabilities,
	    makeDecorator: decorators.makeDecorator,
	    DebugDomRootRenderer: debug.DebugDomRootRenderer,
	    createProvider: provider_util.createProvider,
	    isProviderLiteral: provider_util.isProviderLiteral,
	    EMPTY_ARRAY: view_utils.EMPTY_ARRAY,
	    EMPTY_MAP: view_utils.EMPTY_MAP,
	    pureProxy1: view_utils.pureProxy1,
	    pureProxy2: view_utils.pureProxy2,
	    pureProxy3: view_utils.pureProxy3,
	    pureProxy4: view_utils.pureProxy4,
	    pureProxy5: view_utils.pureProxy5,
	    pureProxy6: view_utils.pureProxy6,
	    pureProxy7: view_utils.pureProxy7,
	    pureProxy8: view_utils.pureProxy8,
	    pureProxy9: view_utils.pureProxy9,
	    pureProxy10: view_utils.pureProxy10,
	    castByValue: view_utils.castByValue,
	    Console: console.Console,
	};
	//# sourceMappingURL=private_export.js.map

/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";
	(function (LifecycleHooks) {
	    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
	    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
	    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
	    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
	    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
	    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
	    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
	    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
	})(exports.LifecycleHooks || (exports.LifecycleHooks = {}));
	var LifecycleHooks = exports.LifecycleHooks;
	/**
	 * @internal
	 */
	exports.LIFECYCLE_HOOKS_VALUES = [
	    LifecycleHooks.OnInit,
	    LifecycleHooks.OnDestroy,
	    LifecycleHooks.DoCheck,
	    LifecycleHooks.OnChanges,
	    LifecycleHooks.AfterContentInit,
	    LifecycleHooks.AfterContentChecked,
	    LifecycleHooks.AfterViewInit,
	    LifecycleHooks.AfterViewChecked
	];
	//# sourceMappingURL=lifecycle_hooks.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(25);
	var element_1 = __webpack_require__(69);
	var lang_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(39);
	var view_ref_1 = __webpack_require__(91);
	var view_type_1 = __webpack_require__(70);
	var view_utils_1 = __webpack_require__(67);
	var change_detection_1 = __webpack_require__(76);
	var profile_1 = __webpack_require__(73);
	var exceptions_1 = __webpack_require__(75);
	var debug_context_1 = __webpack_require__(100);
	var element_injector_1 = __webpack_require__(101);
	var _scope_check = profile_1.wtfCreateScope("AppView#check(ascii id)");
	/**
	 * Cost of making objects: http://jsperf.com/instantiate-size-of-object
	 *
	 */
	var AppView = (function () {
	    function AppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode) {
	        this.clazz = clazz;
	        this.componentType = componentType;
	        this.type = type;
	        this.viewUtils = viewUtils;
	        this.parentInjector = parentInjector;
	        this.declarationAppElement = declarationAppElement;
	        this.cdMode = cdMode;
	        this.contentChildren = [];
	        this.viewChildren = [];
	        this.viewContainerElement = null;
	        // The names of the below fields must be kept in sync with codegen_name_util.ts or
	        // change detection will fail.
	        this.cdState = change_detection_1.ChangeDetectorState.NeverChecked;
	        this.destroyed = false;
	        this.ref = new view_ref_1.ViewRef_(this);
	        if (type === view_type_1.ViewType.COMPONENT || type === view_type_1.ViewType.HOST) {
	            this.renderer = viewUtils.renderComponent(componentType);
	        }
	        else {
	            this.renderer = declarationAppElement.parentView.renderer;
	        }
	    }
	    AppView.prototype.create = function (context, givenProjectableNodes, rootSelectorOrNode) {
	        this.context = context;
	        var projectableNodes;
	        switch (this.type) {
	            case view_type_1.ViewType.COMPONENT:
	                projectableNodes = view_utils_1.ensureSlotCount(givenProjectableNodes, this.componentType.slotCount);
	                break;
	            case view_type_1.ViewType.EMBEDDED:
	                projectableNodes = this.declarationAppElement.parentView.projectableNodes;
	                break;
	            case view_type_1.ViewType.HOST:
	                // Note: Don't ensure the slot count for the projectableNodes as we store
	                // them only for the contained component view (which will later check the slot count...)
	                projectableNodes = givenProjectableNodes;
	                break;
	        }
	        this._hasExternalHostElement = lang_1.isPresent(rootSelectorOrNode);
	        this.projectableNodes = projectableNodes;
	        return this.createInternal(rootSelectorOrNode);
	    };
	    /**
	     * Overwritten by implementations.
	     * Returns the AppElement for the host element for ViewType.HOST.
	     */
	    AppView.prototype.createInternal = function (rootSelectorOrNode) { return null; };
	    AppView.prototype.init = function (rootNodesOrAppElements, allNodes, disposables, subscriptions) {
	        this.rootNodesOrAppElements = rootNodesOrAppElements;
	        this.allNodes = allNodes;
	        this.disposables = disposables;
	        this.subscriptions = subscriptions;
	        if (this.type === view_type_1.ViewType.COMPONENT) {
	            // Note: the render nodes have been attached to their host element
	            // in the ViewFactory already.
	            this.declarationAppElement.parentView.viewChildren.push(this);
	            this.dirtyParentQueriesInternal();
	        }
	    };
	    AppView.prototype.selectOrCreateHostElement = function (elementName, rootSelectorOrNode, debugInfo) {
	        var hostElement;
	        if (lang_1.isPresent(rootSelectorOrNode)) {
	            hostElement = this.renderer.selectRootElement(rootSelectorOrNode, debugInfo);
	        }
	        else {
	            hostElement = this.renderer.createElement(null, elementName, debugInfo);
	        }
	        return hostElement;
	    };
	    AppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
	        return this.injectorGetInternal(token, nodeIndex, notFoundResult);
	    };
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.injectorGetInternal = function (token, nodeIndex, notFoundResult) {
	        return notFoundResult;
	    };
	    AppView.prototype.injector = function (nodeIndex) {
	        if (lang_1.isPresent(nodeIndex)) {
	            return new element_injector_1.ElementInjector(this, nodeIndex);
	        }
	        else {
	            return this.parentInjector;
	        }
	    };
	    AppView.prototype.destroy = function () {
	        if (this._hasExternalHostElement) {
	            this.renderer.detachView(this.flatRootNodes);
	        }
	        else if (lang_1.isPresent(this.viewContainerElement)) {
	            this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));
	        }
	        this._destroyRecurse();
	    };
	    AppView.prototype._destroyRecurse = function () {
	        if (this.destroyed) {
	            return;
	        }
	        var children = this.contentChildren;
	        for (var i = 0; i < children.length; i++) {
	            children[i]._destroyRecurse();
	        }
	        children = this.viewChildren;
	        for (var i = 0; i < children.length; i++) {
	            children[i]._destroyRecurse();
	        }
	        this.destroyLocal();
	        this.destroyed = true;
	    };
	    AppView.prototype.destroyLocal = function () {
	        var hostElement = this.type === view_type_1.ViewType.COMPONENT ? this.declarationAppElement.nativeElement : null;
	        for (var i = 0; i < this.disposables.length; i++) {
	            this.disposables[i]();
	        }
	        for (var i = 0; i < this.subscriptions.length; i++) {
	            async_1.ObservableWrapper.dispose(this.subscriptions[i]);
	        }
	        this.destroyInternal();
	        if (this._hasExternalHostElement) {
	            this.renderer.detachView(this.flatRootNodes);
	        }
	        else if (lang_1.isPresent(this.viewContainerElement)) {
	            this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));
	        }
	        else {
	            this.dirtyParentQueriesInternal();
	        }
	        this.renderer.destroyView(hostElement, this.allNodes);
	    };
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.destroyInternal = function () { };
	    Object.defineProperty(AppView.prototype, "changeDetectorRef", {
	        get: function () { return this.ref; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppView.prototype, "parent", {
	        get: function () {
	            return lang_1.isPresent(this.declarationAppElement) ? this.declarationAppElement.parentView : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppView.prototype, "flatRootNodes", {
	        get: function () { return view_utils_1.flattenNestedViewRenderNodes(this.rootNodesOrAppElements); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppView.prototype, "lastRootNode", {
	        get: function () {
	            var lastNode = this.rootNodesOrAppElements.length > 0 ?
	                this.rootNodesOrAppElements[this.rootNodesOrAppElements.length - 1] :
	                null;
	            return _findLastRenderNode(lastNode);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.dirtyParentQueriesInternal = function () { };
	    AppView.prototype.detectChanges = function (throwOnChange) {
	        var s = _scope_check(this.clazz);
	        if (this.cdMode === change_detection_1.ChangeDetectionStrategy.Detached ||
	            this.cdMode === change_detection_1.ChangeDetectionStrategy.Checked ||
	            this.cdState === change_detection_1.ChangeDetectorState.Errored)
	            return;
	        if (this.destroyed) {
	            this.throwDestroyedError('detectChanges');
	        }
	        this.detectChangesInternal(throwOnChange);
	        if (this.cdMode === change_detection_1.ChangeDetectionStrategy.CheckOnce)
	            this.cdMode = change_detection_1.ChangeDetectionStrategy.Checked;
	        this.cdState = change_detection_1.ChangeDetectorState.CheckedBefore;
	        profile_1.wtfLeave(s);
	    };
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.detectChangesInternal = function (throwOnChange) {
	        this.detectContentChildrenChanges(throwOnChange);
	        this.detectViewChildrenChanges(throwOnChange);
	    };
	    AppView.prototype.detectContentChildrenChanges = function (throwOnChange) {
	        for (var i = 0; i < this.contentChildren.length; ++i) {
	            this.contentChildren[i].detectChanges(throwOnChange);
	        }
	    };
	    AppView.prototype.detectViewChildrenChanges = function (throwOnChange) {
	        for (var i = 0; i < this.viewChildren.length; ++i) {
	            this.viewChildren[i].detectChanges(throwOnChange);
	        }
	    };
	    AppView.prototype.addToContentChildren = function (renderAppElement) {
	        renderAppElement.parentView.contentChildren.push(this);
	        this.viewContainerElement = renderAppElement;
	        this.dirtyParentQueriesInternal();
	    };
	    AppView.prototype.removeFromContentChildren = function (renderAppElement) {
	        collection_1.ListWrapper.remove(renderAppElement.parentView.contentChildren, this);
	        this.dirtyParentQueriesInternal();
	        this.viewContainerElement = null;
	    };
	    AppView.prototype.markAsCheckOnce = function () { this.cdMode = change_detection_1.ChangeDetectionStrategy.CheckOnce; };
	    AppView.prototype.markPathToRootAsCheckOnce = function () {
	        var c = this;
	        while (lang_1.isPresent(c) && c.cdMode !== change_detection_1.ChangeDetectionStrategy.Detached) {
	            if (c.cdMode === change_detection_1.ChangeDetectionStrategy.Checked) {
	                c.cdMode = change_detection_1.ChangeDetectionStrategy.CheckOnce;
	            }
	            var parentEl = c.type === view_type_1.ViewType.COMPONENT ? c.declarationAppElement : c.viewContainerElement;
	            c = lang_1.isPresent(parentEl) ? parentEl.parentView : null;
	        }
	    };
	    AppView.prototype.eventHandler = function (cb) { return cb; };
	    AppView.prototype.throwDestroyedError = function (details) { throw new exceptions_1.ViewDestroyedException(details); };
	    return AppView;
	}());
	exports.AppView = AppView;
	var DebugAppView = (function (_super) {
	    __extends(DebugAppView, _super);
	    function DebugAppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode, staticNodeDebugInfos) {
	        _super.call(this, clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode);
	        this.staticNodeDebugInfos = staticNodeDebugInfos;
	        this._currentDebugContext = null;
	    }
	    DebugAppView.prototype.create = function (context, givenProjectableNodes, rootSelectorOrNode) {
	        this._resetDebug();
	        try {
	            return _super.prototype.create.call(this, context, givenProjectableNodes, rootSelectorOrNode);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
	        this._resetDebug();
	        try {
	            return _super.prototype.injectorGet.call(this, token, nodeIndex, notFoundResult);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype.destroyLocal = function () {
	        this._resetDebug();
	        try {
	            _super.prototype.destroyLocal.call(this);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype.detectChanges = function (throwOnChange) {
	        this._resetDebug();
	        try {
	            _super.prototype.detectChanges.call(this, throwOnChange);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype._resetDebug = function () { this._currentDebugContext = null; };
	    DebugAppView.prototype.debug = function (nodeIndex, rowNum, colNum) {
	        return this._currentDebugContext = new debug_context_1.DebugContext(this, nodeIndex, rowNum, colNum);
	    };
	    DebugAppView.prototype._rethrowWithContext = function (e, stack) {
	        if (!(e instanceof exceptions_1.ViewWrappedException)) {
	            if (!(e instanceof exceptions_1.ExpressionChangedAfterItHasBeenCheckedException)) {
	                this.cdState = change_detection_1.ChangeDetectorState.Errored;
	            }
	            if (lang_1.isPresent(this._currentDebugContext)) {
	                throw new exceptions_1.ViewWrappedException(e, stack, this._currentDebugContext);
	            }
	        }
	    };
	    DebugAppView.prototype.eventHandler = function (cb) {
	        var _this = this;
	        var superHandler = _super.prototype.eventHandler.call(this, cb);
	        return function (event) {
	            _this._resetDebug();
	            try {
	                return superHandler(event);
	            }
	            catch (e) {
	                _this._rethrowWithContext(e, e.stack);
	                throw e;
	            }
	        };
	    };
	    return DebugAppView;
	}(AppView));
	exports.DebugAppView = DebugAppView;
	function _findLastRenderNode(node) {
	    var lastNode;
	    if (node instanceof element_1.AppElement) {
	        var appEl = node;
	        lastNode = appEl.nativeElement;
	        if (lang_1.isPresent(appEl.nestedViews)) {
	            // Note: Views might have no root nodes at all!
	            for (var i = appEl.nestedViews.length - 1; i >= 0; i--) {
	                var nestedView = appEl.nestedViews[i];
	                if (nestedView.rootNodesOrAppElements.length > 0) {
	                    lastNode = _findLastRenderNode(nestedView.rootNodesOrAppElements[nestedView.rootNodesOrAppElements.length - 1]);
	                }
	            }
	        }
	    }
	    else {
	        lastNode = node;
	    }
	    return lastNode;
	}
	//# sourceMappingURL=view.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(25);
	var view_type_1 = __webpack_require__(70);
	/* @ts2dart_const */
	var StaticNodeDebugInfo = (function () {
	    function StaticNodeDebugInfo(providerTokens, componentToken, refTokens) {
	        this.providerTokens = providerTokens;
	        this.componentToken = componentToken;
	        this.refTokens = refTokens;
	    }
	    return StaticNodeDebugInfo;
	}());
	exports.StaticNodeDebugInfo = StaticNodeDebugInfo;
	var DebugContext = (function () {
	    function DebugContext(_view, _nodeIndex, _tplRow, _tplCol) {
	        this._view = _view;
	        this._nodeIndex = _nodeIndex;
	        this._tplRow = _tplRow;
	        this._tplCol = _tplCol;
	    }
	    Object.defineProperty(DebugContext.prototype, "_staticNodeInfo", {
	        get: function () {
	            return lang_1.isPresent(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "context", {
	        get: function () { return this._view.context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "component", {
	        get: function () {
	            var staticNodeInfo = this._staticNodeInfo;
	            if (lang_1.isPresent(staticNodeInfo) && lang_1.isPresent(staticNodeInfo.componentToken)) {
	                return this.injector.get(staticNodeInfo.componentToken);
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "componentRenderElement", {
	        get: function () {
	            var componentView = this._view;
	            while (lang_1.isPresent(componentView.declarationAppElement) &&
	                componentView.type !== view_type_1.ViewType.COMPONENT) {
	                componentView = componentView.declarationAppElement.parentView;
	            }
	            return lang_1.isPresent(componentView.declarationAppElement) ?
	                componentView.declarationAppElement.nativeElement :
	                null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "injector", {
	        get: function () { return this._view.injector(this._nodeIndex); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "renderNode", {
	        get: function () {
	            if (lang_1.isPresent(this._nodeIndex) && lang_1.isPresent(this._view.allNodes)) {
	                return this._view.allNodes[this._nodeIndex];
	            }
	            else {
	                return null;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "providerTokens", {
	        get: function () {
	            var staticNodeInfo = this._staticNodeInfo;
	            return lang_1.isPresent(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "source", {
	        get: function () {
	            return this._view.componentType.templateUrl + ":" + this._tplRow + ":" + this._tplCol;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "references", {
	        get: function () {
	            var _this = this;
	            var varValues = {};
	            var staticNodeInfo = this._staticNodeInfo;
	            if (lang_1.isPresent(staticNodeInfo)) {
	                var refs = staticNodeInfo.refTokens;
	                collection_1.StringMapWrapper.forEach(refs, function (refToken, refName) {
	                    var varValue;
	                    if (lang_1.isBlank(refToken)) {
	                        varValue = lang_1.isPresent(_this._view.allNodes) ? _this._view.allNodes[_this._nodeIndex] : null;
	                    }
	                    else {
	                        varValue = _this._view.injectorGet(refToken, _this._nodeIndex, null);
	                    }
	                    varValues[refName] = varValue;
	                });
	            }
	            return varValues;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return DebugContext;
	}());
	exports.DebugContext = DebugContext;
	//# sourceMappingURL=debug_context.js.map

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var injector_1 = __webpack_require__(21);
	var _UNDEFINED = new Object();
	var ElementInjector = (function (_super) {
	    __extends(ElementInjector, _super);
	    function ElementInjector(_view, _nodeIndex) {
	        _super.call(this);
	        this._view = _view;
	        this._nodeIndex = _nodeIndex;
	    }
	    ElementInjector.prototype.get = function (token, notFoundValue) {
	        if (notFoundValue === void 0) { notFoundValue = injector_1.THROW_IF_NOT_FOUND; }
	        var result = _UNDEFINED;
	        if (result === _UNDEFINED) {
	            result = this._view.injectorGet(token, this._nodeIndex, _UNDEFINED);
	        }
	        if (result === _UNDEFINED) {
	            result = this._view.parentInjector.get(token, notFoundValue);
	        }
	        return result;
	    };
	    return ElementInjector;
	}(injector_1.Injector));
	exports.ElementInjector = ElementInjector;
	//# sourceMappingURL=element_injector.js.map

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";
	/**
	* This is here because DART requires it. It is noop in JS.
	*/
	function wtfInit() { }
	exports.wtfInit = wtfInit;
	//# sourceMappingURL=wtf_init.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(11);
	var debug_node_1 = __webpack_require__(92);
	var DebugDomRootRenderer = (function () {
	    function DebugDomRootRenderer(_delegate) {
	        this._delegate = _delegate;
	    }
	    DebugDomRootRenderer.prototype.renderComponent = function (componentProto) {
	        return new DebugDomRenderer(this._delegate.renderComponent(componentProto));
	    };
	    return DebugDomRootRenderer;
	}());
	exports.DebugDomRootRenderer = DebugDomRootRenderer;
	var DebugDomRenderer = (function () {
	    function DebugDomRenderer(_delegate) {
	        this._delegate = _delegate;
	    }
	    DebugDomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
	        var nativeEl = this._delegate.selectRootElement(selectorOrNode, debugInfo);
	        var debugEl = new debug_node_1.DebugElement(nativeEl, null, debugInfo);
	        debug_node_1.indexDebugNode(debugEl);
	        return nativeEl;
	    };
	    DebugDomRenderer.prototype.createElement = function (parentElement, name, debugInfo) {
	        var nativeEl = this._delegate.createElement(parentElement, name, debugInfo);
	        var debugEl = new debug_node_1.DebugElement(nativeEl, debug_node_1.getDebugNode(parentElement), debugInfo);
	        debugEl.name = name;
	        debug_node_1.indexDebugNode(debugEl);
	        return nativeEl;
	    };
	    DebugDomRenderer.prototype.createViewRoot = function (hostElement) { return this._delegate.createViewRoot(hostElement); };
	    DebugDomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
	        var comment = this._delegate.createTemplateAnchor(parentElement, debugInfo);
	        var debugEl = new debug_node_1.DebugNode(comment, debug_node_1.getDebugNode(parentElement), debugInfo);
	        debug_node_1.indexDebugNode(debugEl);
	        return comment;
	    };
	    DebugDomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
	        var text = this._delegate.createText(parentElement, value, debugInfo);
	        var debugEl = new debug_node_1.DebugNode(text, debug_node_1.getDebugNode(parentElement), debugInfo);
	        debug_node_1.indexDebugNode(debugEl);
	        return text;
	    };
	    DebugDomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	        var debugParent = debug_node_1.getDebugNode(parentElement);
	        if (lang_1.isPresent(debugParent) && debugParent instanceof debug_node_1.DebugElement) {
	            var debugElement_1 = debugParent;
	            nodes.forEach(function (node) { debugElement_1.addChild(debug_node_1.getDebugNode(node)); });
	        }
	        this._delegate.projectNodes(parentElement, nodes);
	    };
	    DebugDomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
	        var debugNode = debug_node_1.getDebugNode(node);
	        if (lang_1.isPresent(debugNode)) {
	            var debugParent = debugNode.parent;
	            if (viewRootNodes.length > 0 && lang_1.isPresent(debugParent)) {
	                var debugViewRootNodes = [];
	                viewRootNodes.forEach(function (rootNode) { return debugViewRootNodes.push(debug_node_1.getDebugNode(rootNode)); });
	                debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
	            }
	        }
	        this._delegate.attachViewAfter(node, viewRootNodes);
	    };
	    DebugDomRenderer.prototype.detachView = function (viewRootNodes) {
	        viewRootNodes.forEach(function (node) {
	            var debugNode = debug_node_1.getDebugNode(node);
	            if (lang_1.isPresent(debugNode) && lang_1.isPresent(debugNode.parent)) {
	                debugNode.parent.removeChild(debugNode);
	            }
	        });
	        this._delegate.detachView(viewRootNodes);
	    };
	    DebugDomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	        viewAllNodes.forEach(function (node) { debug_node_1.removeDebugNodeFromIndex(debug_node_1.getDebugNode(node)); });
	        this._delegate.destroyView(hostElement, viewAllNodes);
	    };
	    DebugDomRenderer.prototype.listen = function (renderElement, name, callback) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl)) {
	            debugEl.listeners.push(new debug_node_1.EventListener(name, callback));
	        }
	        return this._delegate.listen(renderElement, name, callback);
	    };
	    DebugDomRenderer.prototype.listenGlobal = function (target, name, callback) {
	        return this._delegate.listenGlobal(target, name, callback);
	    };
	    DebugDomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl) && debugEl instanceof debug_node_1.DebugElement) {
	            debugEl.properties[propertyName] = propertyValue;
	        }
	        this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
	    };
	    DebugDomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl) && debugEl instanceof debug_node_1.DebugElement) {
	            debugEl.attributes[attributeName] = attributeValue;
	        }
	        this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
	    };
	    DebugDomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	        this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
	    };
	    DebugDomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	        this._delegate.setElementClass(renderElement, className, isAdd);
	    };
	    DebugDomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	        this._delegate.setElementStyle(renderElement, styleName, styleValue);
	    };
	    DebugDomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	        this._delegate.invokeElementMethod(renderElement, methodName, args);
	    };
	    DebugDomRenderer.prototype.setText = function (renderNode, text) { this._delegate.setText(renderNode, text); };
	    return DebugDomRenderer;
	}());
	exports.DebugDomRenderer = DebugDomRenderer;
	//# sourceMappingURL=debug_renderer.js.map

/***/ },
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(178));
	//# sourceMappingURL=index.js.map

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(179);
	var browser_common_1 = __webpack_require__(180);
	var dom_events_1 = __webpack_require__(269);
	exports.DomEventsPlugin = dom_events_1.DomEventsPlugin;
	var event_manager_1 = __webpack_require__(254);
	exports.EventManager = event_manager_1.EventManager;
	exports.EVENT_MANAGER_PLUGINS = event_manager_1.EVENT_MANAGER_PLUGINS;
	var ng_probe_1 = __webpack_require__(268);
	exports.ELEMENT_PROBE_PROVIDERS = ng_probe_1.ELEMENT_PROBE_PROVIDERS;
	var browser_common_2 = __webpack_require__(180);
	exports.BROWSER_APP_COMMON_PROVIDERS = browser_common_2.BROWSER_APP_COMMON_PROVIDERS;
	exports.BROWSER_SANITIZATION_PROVIDERS = browser_common_2.BROWSER_SANITIZATION_PROVIDERS;
	exports.BROWSER_PROVIDERS = browser_common_2.BROWSER_PROVIDERS;
	exports.By = browser_common_2.By;
	exports.Title = browser_common_2.Title;
	exports.enableDebugTools = browser_common_2.enableDebugTools;
	exports.disableDebugTools = browser_common_2.disableDebugTools;
	exports.HAMMER_GESTURE_CONFIG = browser_common_2.HAMMER_GESTURE_CONFIG;
	exports.HammerGestureConfig = browser_common_2.HammerGestureConfig;
	__export(__webpack_require__(277));
	var dom_tokens_1 = __webpack_require__(253);
	exports.DOCUMENT = dom_tokens_1.DOCUMENT;
	var dom_sanitization_service_1 = __webpack_require__(245);
	exports.DomSanitizationService = dom_sanitization_service_1.DomSanitizationService;
	exports.SecurityContext = dom_sanitization_service_1.SecurityContext;
	var platform_browser_static_1 = __webpack_require__(278);
	exports.bootstrapStatic = platform_browser_static_1.bootstrapStatic;
	exports.browserStaticPlatform = platform_browser_static_1.browserStaticPlatform;
	exports.BROWSER_APP_STATIC_PROVIDERS = platform_browser_static_1.BROWSER_APP_STATIC_PROVIDERS;
	exports.BrowserPlatformLocation = platform_browser_static_1.BrowserPlatformLocation;
	function browserPlatform() {
	    if (lang_1.isBlank(core_1.getPlatform())) {
	        core_1.createPlatform(core_1.ReflectiveInjector.resolveAndCreate(browser_common_1.BROWSER_PROVIDERS));
	    }
	    return core_1.assertPlatform(browser_common_1.BROWSER_PLATFORM_MARKER);
	}
	exports.browserPlatform = browserPlatform;
	//# sourceMappingURL=platform_browser.js.map

/***/ },
/* 179 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	var _devMode = true;
	var _modeLocked = false;
	function lockMode() {
	    _modeLocked = true;
	}
	exports.lockMode = lockMode;
	/**
	 * Disable Angular's development mode, which turns off assertions and other
	 * checks within the framework.
	 *
	 * One important assertion this disables verifies that a change detection pass
	 * does not result in additional changes to any bindings (also known as
	 * unidirectional data flow).
	 */
	function enableProdMode() {
	    if (_modeLocked) {
	        // Cannot use BaseException as that ends up importing from facade/lang.
	        throw 'Cannot enable prod mode after platform setup.';
	    }
	    _devMode = false;
	}
	exports.enableProdMode = enableProdMode;
	function assertionsEnabled() {
	    return _devMode;
	}
	exports.assertionsEnabled = assertionsEnabled;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === "boolean";
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === "number";
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === "string";
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === "function";
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf("\n");
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(""); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError("Invalid integer literal when parsing " + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " +
	            radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    RegExpWrapper.replaceAll = function (regExp, input, replace) {
	        var c = regExp.exec(input);
	        var res = '';
	        regExp.lastIndex = 0;
	        var prev = 0;
	        while (c) {
	            res += input.substring(prev, c.index);
	            res += replace(c);
	            prev = c.index + c[0].length;
	            regExp.lastIndex = prev;
	            c = regExp.exec(input);
	        }
	        res += input.substring(prev);
	        return res;
	    };
	    return RegExpWrapper;
	}());
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	}());
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === "function" || typeof o === "object");
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function bitWiseOr(values) {
	    return values.reduce(function (a, b) { return a | b; });
	}
	exports.bitWiseOr = bitWiseOr;
	function bitWiseAnd(values) {
	    return values.reduce(function (a, b) { return a & b; });
	}
	exports.bitWiseAnd = bitWiseAnd;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var core_private_1 = __webpack_require__(181);
	var common_1 = __webpack_require__(182);
	var dom_sanitization_service_1 = __webpack_require__(245);
	var lang_1 = __webpack_require__(179);
	var browser_adapter_1 = __webpack_require__(248);
	var testability_1 = __webpack_require__(252);
	var dom_adapter_1 = __webpack_require__(251);
	var dom_tokens_1 = __webpack_require__(253);
	var event_manager_1 = __webpack_require__(254);
	var dom_renderer_1 = __webpack_require__(258);
	var shared_styles_host_1 = __webpack_require__(266);
	var key_events_1 = __webpack_require__(267);
	var ng_probe_1 = __webpack_require__(268);
	var dom_events_1 = __webpack_require__(269);
	var hammer_gestures_1 = __webpack_require__(270);
	var shared_styles_host_2 = __webpack_require__(266);
	var animation_builder_1 = __webpack_require__(259);
	var browser_details_1 = __webpack_require__(265);
	var title_1 = __webpack_require__(272);
	exports.Title = title_1.Title;
	var browser_adapter_2 = __webpack_require__(248);
	exports.BrowserDomAdapter = browser_adapter_2.BrowserDomAdapter;
	var tools_1 = __webpack_require__(273);
	exports.enableDebugTools = tools_1.enableDebugTools;
	exports.disableDebugTools = tools_1.disableDebugTools;
	var by_1 = __webpack_require__(276);
	exports.By = by_1.By;
	exports.BROWSER_PLATFORM_MARKER = 
	/*@ts2dart_const*/ new core_1.OpaqueToken('BrowserPlatformMarker');
	/**
	 * A set of providers to initialize the Angular platform in a web browser.
	 *
	 * Used automatically by `bootstrap`, or can be passed to {@link platform}.
	 */
	exports.BROWSER_PROVIDERS = [
	    /*@ts2dart_Provider*/ { provide: exports.BROWSER_PLATFORM_MARKER, useValue: true },
	    core_1.PLATFORM_COMMON_PROVIDERS,
	    /*@ts2dart_Provider*/ { provide: core_1.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
	];
	function _exceptionHandler() {
	    // !IS_DART is required because we must rethrow exceptions in JS,
	    // but must not rethrow exceptions in Dart
	    return new core_1.ExceptionHandler(dom_adapter_1.getDOM(), !lang_1.IS_DART);
	}
	function _document() {
	    return dom_adapter_1.getDOM().defaultDoc();
	}
	exports.BROWSER_SANITIZATION_PROVIDERS = [
	    /* @ts2dart_Provider */ { provide: core_private_1.SanitizationService, useExisting: dom_sanitization_service_1.DomSanitizationService },
	    /* @ts2dart_Provider */ { provide: dom_sanitization_service_1.DomSanitizationService, useClass: dom_sanitization_service_1.DomSanitizationServiceImpl },
	];
	/**
	 * A set of providers to initialize an Angular application in a web browser.
	 *
	 * Used automatically by `bootstrap`, or can be passed to {@link PlatformRef.application}.
	 */
	exports.BROWSER_APP_COMMON_PROVIDERS = 
	/*@ts2dart_const*/ [
	    core_1.APPLICATION_COMMON_PROVIDERS,
	    common_1.FORM_PROVIDERS,
	    exports.BROWSER_SANITIZATION_PROVIDERS,
	    /* @ts2dart_Provider */ { provide: core_1.PLATFORM_PIPES, useValue: common_1.COMMON_PIPES, multi: true },
	    /* @ts2dart_Provider */ { provide: core_1.PLATFORM_DIRECTIVES, useValue: common_1.COMMON_DIRECTIVES, multi: true },
	    /* @ts2dart_Provider */ { provide: core_1.ExceptionHandler, useFactory: _exceptionHandler, deps: [] },
	    /* @ts2dart_Provider */ { provide: dom_tokens_1.DOCUMENT, useFactory: _document, deps: [] },
	    /* @ts2dart_Provider */ { provide: event_manager_1.EVENT_MANAGER_PLUGINS, useClass: dom_events_1.DomEventsPlugin, multi: true },
	    /* @ts2dart_Provider */ { provide: event_manager_1.EVENT_MANAGER_PLUGINS, useClass: key_events_1.KeyEventsPlugin, multi: true },
	    /* @ts2dart_Provider */ { provide: event_manager_1.EVENT_MANAGER_PLUGINS, useClass: hammer_gestures_1.HammerGesturesPlugin, multi: true },
	    /* @ts2dart_Provider */ { provide: hammer_gestures_1.HAMMER_GESTURE_CONFIG, useClass: hammer_gestures_1.HammerGestureConfig },
	    /* @ts2dart_Provider */ { provide: dom_renderer_1.DomRootRenderer, useClass: dom_renderer_1.DomRootRenderer_ },
	    /* @ts2dart_Provider */ { provide: core_1.RootRenderer, useExisting: dom_renderer_1.DomRootRenderer },
	    /* @ts2dart_Provider */ { provide: shared_styles_host_1.SharedStylesHost, useExisting: shared_styles_host_2.DomSharedStylesHost },
	    shared_styles_host_2.DomSharedStylesHost,
	    core_1.Testability,
	    browser_details_1.BrowserDetails,
	    animation_builder_1.AnimationBuilder,
	    event_manager_1.EventManager,
	    ng_probe_1.ELEMENT_PROBE_PROVIDERS
	];
	var hammer_gestures_2 = __webpack_require__(270);
	exports.HAMMER_GESTURE_CONFIG = hammer_gestures_2.HAMMER_GESTURE_CONFIG;
	exports.HammerGestureConfig = hammer_gestures_2.HammerGestureConfig;
	function initDomAdapter() {
	    browser_adapter_1.BrowserDomAdapter.makeCurrent();
	    core_private_1.wtfInit();
	    testability_1.BrowserGetTestability.init();
	}
	exports.initDomAdapter = initDomAdapter;
	//# sourceMappingURL=browser_common.js.map

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	exports.RenderDebugInfo = core_1.__core_private__.RenderDebugInfo;
	exports.wtfInit = core_1.__core_private__.wtfInit;
	exports.ReflectionCapabilities = core_1.__core_private__.ReflectionCapabilities;
	exports.VIEW_ENCAPSULATION_VALUES = core_1.__core_private__.VIEW_ENCAPSULATION_VALUES;
	exports.DebugDomRootRenderer = core_1.__core_private__.DebugDomRootRenderer;
	exports.SecurityContext = core_1.__core_private__.SecurityContext;
	exports.SanitizationService = core_1.__core_private__.SanitizationService;
	//# sourceMappingURL=core_private.js.map

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(183));
	__export(__webpack_require__(204));
	__export(__webpack_require__(214));
	__export(__webpack_require__(238));
	__export(__webpack_require__(239));
	//# sourceMappingURL=index.js.map

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* @module
	* @description
	* This module provides a set of common Pipes.
	*/
	var async_pipe_1 = __webpack_require__(184);
	exports.AsyncPipe = async_pipe_1.AsyncPipe;
	var date_pipe_1 = __webpack_require__(193);
	exports.DatePipe = date_pipe_1.DatePipe;
	var json_pipe_1 = __webpack_require__(195);
	exports.JsonPipe = json_pipe_1.JsonPipe;
	var slice_pipe_1 = __webpack_require__(196);
	exports.SlicePipe = slice_pipe_1.SlicePipe;
	var lowercase_pipe_1 = __webpack_require__(197);
	exports.LowerCasePipe = lowercase_pipe_1.LowerCasePipe;
	var number_pipe_1 = __webpack_require__(198);
	exports.NumberPipe = number_pipe_1.NumberPipe;
	exports.DecimalPipe = number_pipe_1.DecimalPipe;
	exports.PercentPipe = number_pipe_1.PercentPipe;
	exports.CurrencyPipe = number_pipe_1.CurrencyPipe;
	var uppercase_pipe_1 = __webpack_require__(199);
	exports.UpperCasePipe = uppercase_pipe_1.UpperCasePipe;
	var replace_pipe_1 = __webpack_require__(200);
	exports.ReplacePipe = replace_pipe_1.ReplacePipe;
	var i18n_plural_pipe_1 = __webpack_require__(201);
	exports.I18nPluralPipe = i18n_plural_pipe_1.I18nPluralPipe;
	var i18n_select_pipe_1 = __webpack_require__(202);
	exports.I18nSelectPipe = i18n_select_pipe_1.I18nSelectPipe;
	var common_pipes_1 = __webpack_require__(203);
	exports.COMMON_PIPES = common_pipes_1.COMMON_PIPES;
	//# sourceMappingURL=pipes.js.map

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var async_1 = __webpack_require__(186);
	var invalid_pipe_argument_exception_1 = __webpack_require__(188);
	var ObservableStrategy = (function () {
	    function ObservableStrategy() {
	    }
	    ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
	        return async_1.ObservableWrapper.subscribe(async, updateLatestValue, function (e) { throw e; });
	    };
	    ObservableStrategy.prototype.dispose = function (subscription) { async_1.ObservableWrapper.dispose(subscription); };
	    ObservableStrategy.prototype.onDestroy = function (subscription) { async_1.ObservableWrapper.dispose(subscription); };
	    return ObservableStrategy;
	}());
	var PromiseStrategy = (function () {
	    function PromiseStrategy() {
	    }
	    PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
	        return async.then(updateLatestValue);
	    };
	    PromiseStrategy.prototype.dispose = function (subscription) { };
	    PromiseStrategy.prototype.onDestroy = function (subscription) { };
	    return PromiseStrategy;
	}());
	var _promiseStrategy = new PromiseStrategy();
	var _observableStrategy = new ObservableStrategy();
	var __unused;
	var AsyncPipe = (function () {
	    function AsyncPipe(_ref) {
	        /** @internal */
	        this._latestValue = null;
	        /** @internal */
	        this._latestReturnedValue = null;
	        /** @internal */
	        this._subscription = null;
	        /** @internal */
	        this._obj = null;
	        this._strategy = null;
	        this._ref = _ref;
	    }
	    AsyncPipe.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._subscription)) {
	            this._dispose();
	        }
	    };
	    AsyncPipe.prototype.transform = function (obj) {
	        if (lang_1.isBlank(this._obj)) {
	            if (lang_1.isPresent(obj)) {
	                this._subscribe(obj);
	            }
	            this._latestReturnedValue = this._latestValue;
	            return this._latestValue;
	        }
	        if (obj !== this._obj) {
	            this._dispose();
	            return this.transform(obj);
	        }
	        if (this._latestValue === this._latestReturnedValue) {
	            return this._latestReturnedValue;
	        }
	        else {
	            this._latestReturnedValue = this._latestValue;
	            return core_1.WrappedValue.wrap(this._latestValue);
	        }
	    };
	    /** @internal */
	    AsyncPipe.prototype._subscribe = function (obj) {
	        var _this = this;
	        this._obj = obj;
	        this._strategy = this._selectStrategy(obj);
	        this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
	    };
	    /** @internal */
	    AsyncPipe.prototype._selectStrategy = function (obj) {
	        if (lang_1.isPromise(obj)) {
	            return _promiseStrategy;
	        }
	        else if (async_1.ObservableWrapper.isObservable(obj)) {
	            return _observableStrategy;
	        }
	        else {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(AsyncPipe, obj);
	        }
	    };
	    /** @internal */
	    AsyncPipe.prototype._dispose = function () {
	        this._strategy.dispose(this._subscription);
	        this._latestValue = null;
	        this._latestReturnedValue = null;
	        this._subscription = null;
	        this._obj = null;
	    };
	    /** @internal */
	    AsyncPipe.prototype._updateLatestValue = function (async, value) {
	        if (async === this._obj) {
	            this._latestValue = value;
	            this._ref.markForCheck();
	        }
	    };
	    AsyncPipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'async', pure: false },] },
	        { type: core_1.Injectable },
	    ];
	    AsyncPipe.ctorParameters = [
	        { type: core_1.ChangeDetectorRef, },
	    ];
	    return AsyncPipe;
	}());
	exports.AsyncPipe = AsyncPipe;
	//# sourceMappingURL=async_pipe.js.map

/***/ },
/* 185 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	var _devMode = true;
	var _modeLocked = false;
	function lockMode() {
	    _modeLocked = true;
	}
	exports.lockMode = lockMode;
	/**
	 * Disable Angular's development mode, which turns off assertions and other
	 * checks within the framework.
	 *
	 * One important assertion this disables verifies that a change detection pass
	 * does not result in additional changes to any bindings (also known as
	 * unidirectional data flow).
	 */
	function enableProdMode() {
	    if (_modeLocked) {
	        // Cannot use BaseException as that ends up importing from facade/lang.
	        throw 'Cannot enable prod mode after platform setup.';
	    }
	    _devMode = false;
	}
	exports.enableProdMode = enableProdMode;
	function assertionsEnabled() {
	    return _devMode;
	}
	exports.assertionsEnabled = assertionsEnabled;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === "boolean";
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === "number";
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === "string";
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === "function";
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf("\n");
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(""); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError("Invalid integer literal when parsing " + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " +
	            radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    RegExpWrapper.replaceAll = function (regExp, input, replace) {
	        var c = regExp.exec(input);
	        var res = '';
	        regExp.lastIndex = 0;
	        var prev = 0;
	        while (c) {
	            res += input.substring(prev, c.index);
	            res += replace(c);
	            prev = c.index + c[0].length;
	            regExp.lastIndex = prev;
	            c = regExp.exec(input);
	        }
	        res += input.substring(prev);
	        return res;
	    };
	    return RegExpWrapper;
	}());
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	}());
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === "function" || typeof o === "object");
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function bitWiseOr(values) {
	    return values.reduce(function (a, b) { return a | b; });
	}
	exports.bitWiseOr = bitWiseOr;
	function bitWiseAnd(values) {
	    return values.reduce(function (a, b) { return a & b; });
	}
	exports.bitWiseAnd = bitWiseAnd;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(185);
	var promise_1 = __webpack_require__(187);
	exports.PromiseWrapper = promise_1.PromiseWrapper;
	exports.PromiseCompleter = promise_1.PromiseCompleter;
	var Subject_1 = __webpack_require__(41);
	var PromiseObservable_1 = __webpack_require__(60);
	var toPromise_1 = __webpack_require__(61);
	var Observable_1 = __webpack_require__(42);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(41);
	exports.Subject = Subject_2.Subject;
	var TimerWrapper = (function () {
	    function TimerWrapper() {
	    }
	    TimerWrapper.setTimeout = function (fn, millis) {
	        return lang_1.global.setTimeout(fn, millis);
	    };
	    TimerWrapper.clearTimeout = function (id) { lang_1.global.clearTimeout(id); };
	    TimerWrapper.setInterval = function (fn, millis) {
	        return lang_1.global.setInterval(fn, millis);
	    };
	    TimerWrapper.clearInterval = function (id) { lang_1.global.clearInterval(id); };
	    return TimerWrapper;
	}());
	exports.TimerWrapper = TimerWrapper;
	var ObservableWrapper = (function () {
	    function ObservableWrapper() {
	    }
	    // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
	    ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
	        if (onComplete === void 0) { onComplete = function () { }; }
	        onError = (typeof onError === "function") && onError || lang_1.noop;
	        onComplete = (typeof onComplete === "function") && onComplete || lang_1.noop;
	        return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
	    };
	    ObservableWrapper.isObservable = function (obs) { return !!obs.subscribe; };
	    /**
	     * Returns whether `obs` has any subscribers listening to events.
	     */
	    ObservableWrapper.hasSubscribers = function (obs) { return obs.observers.length > 0; };
	    ObservableWrapper.dispose = function (subscription) { subscription.unsubscribe(); };
	    /**
	     * @deprecated - use callEmit() instead
	     */
	    ObservableWrapper.callNext = function (emitter, value) { emitter.next(value); };
	    ObservableWrapper.callEmit = function (emitter, value) { emitter.emit(value); };
	    ObservableWrapper.callError = function (emitter, error) { emitter.error(error); };
	    ObservableWrapper.callComplete = function (emitter) { emitter.complete(); };
	    ObservableWrapper.fromPromise = function (promise) {
	        return PromiseObservable_1.PromiseObservable.create(promise);
	    };
	    ObservableWrapper.toPromise = function (obj) { return toPromise_1.toPromise.call(obj); };
	    return ObservableWrapper;
	}());
	exports.ObservableWrapper = ObservableWrapper;
	/**
	 * Use by directives and components to emit custom Events.
	 *
	 * ### Examples
	 *
	 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	 * title gets clicked:
	 *
	 * ```
	 * @Component({
	 *   selector: 'zippy',
	 *   template: `
	 *   <div class="zippy">
	 *     <div (click)="toggle()">Toggle</div>
	 *     <div [hidden]="!visible">
	 *       <ng-content></ng-content>
	 *     </div>
	 *  </div>`})
	 * export class Zippy {
	 *   visible: boolean = true;
	 *   @Output() open: EventEmitter<any> = new EventEmitter();
	 *   @Output() close: EventEmitter<any> = new EventEmitter();
	 *
	 *   toggle() {
	 *     this.visible = !this.visible;
	 *     if (this.visible) {
	 *       this.open.emit(null);
	 *     } else {
	 *       this.close.emit(null);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * Use Rx.Observable but provides an adapter to make it work as specified here:
	 * https://github.com/jhusain/observable-spec
	 *
	 * Once a reference implementation of the spec is available, switch to it.
	 */
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    /**
	     * Creates an instance of [EventEmitter], which depending on [isAsync],
	     * delivers events synchronously or asynchronously.
	     */
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = true; }
	        _super.call(this);
	        this._isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext.next(value); }); } :
	                function (value) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this._isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this._isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                function (value) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this._isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this._isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },
/* 187 */
/***/ function(module, exports) {

	"use strict";
	var PromiseCompleter = (function () {
	    function PromiseCompleter() {
	        var _this = this;
	        this.promise = new Promise(function (res, rej) {
	            _this.resolve = res;
	            _this.reject = rej;
	        });
	    }
	    return PromiseCompleter;
	}());
	exports.PromiseCompleter = PromiseCompleter;
	var PromiseWrapper = (function () {
	    function PromiseWrapper() {
	    }
	    PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
	    PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
	    // Note: We can't rename this method into `catch`, as this is not a valid
	    // method name in Dart.
	    PromiseWrapper.catchError = function (promise, onError) {
	        return promise.catch(onError);
	    };
	    PromiseWrapper.all = function (promises) {
	        if (promises.length == 0)
	            return Promise.resolve([]);
	        return Promise.all(promises);
	    };
	    PromiseWrapper.then = function (promise, success, rejection) {
	        return promise.then(success, rejection);
	    };
	    PromiseWrapper.wrap = function (computation) {
	        return new Promise(function (res, rej) {
	            try {
	                res(computation());
	            }
	            catch (e) {
	                rej(e);
	            }
	        });
	    };
	    PromiseWrapper.scheduleMicrotask = function (computation) {
	        PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
	    };
	    PromiseWrapper.isPromise = function (obj) { return obj instanceof Promise; };
	    PromiseWrapper.completer = function () { return new PromiseCompleter(); };
	    return PromiseWrapper;
	}());
	exports.PromiseWrapper = PromiseWrapper;
	//# sourceMappingURL=promise.js.map

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(185);
	var exceptions_1 = __webpack_require__(189);
	var InvalidPipeArgumentException = (function (_super) {
	    __extends(InvalidPipeArgumentException, _super);
	    function InvalidPipeArgumentException(type, value) {
	        _super.call(this, "Invalid argument '" + value + "' for pipe '" + lang_1.stringify(type) + "'");
	    }
	    return InvalidPipeArgumentException;
	}(exceptions_1.BaseException));
	exports.InvalidPipeArgumentException = InvalidPipeArgumentException;
	//# sourceMappingURL=invalid_pipe_argument_exception.js.map

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(190);
	var exception_handler_1 = __webpack_require__(191);
	var exception_handler_2 = __webpack_require__(191);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = "--"; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 190 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	* A base class for the WrappedException that can be used to identify
	* a WrappedException from ExceptionHandler without adding circular
	* dependency.
	*/
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(185);
	var base_wrapped_exception_1 = __webpack_require__(190);
	var collection_1 = __webpack_require__(192);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [provide(ExceptionHandler, {useClass: MyExceptionHandler})])
	 *
	 * ```
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join("\n");
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError("STACKTRACE:");
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError("ORIGINAL STACKTRACE:");
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError("ERROR CONTEXT:");
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(185);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).reduce(function (r, a) {
	            r.push(map[a]);
	            return r;
	        }, []);
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var intl_1 = __webpack_require__(194);
	var collection_1 = __webpack_require__(192);
	var invalid_pipe_argument_exception_1 = __webpack_require__(188);
	// TODO: move to a global configurable location along with other i18n components.
	var defaultLocale = 'en-US';
	var DatePipe = (function () {
	    function DatePipe() {
	    }
	    DatePipe.prototype.transform = function (value, pattern) {
	        if (pattern === void 0) { pattern = 'mediumDate'; }
	        if (lang_1.isBlank(value))
	            return null;
	        if (!this.supports(value)) {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(DatePipe, value);
	        }
	        if (lang_1.isNumber(value)) {
	            value = lang_1.DateWrapper.fromMillis(value);
	        }
	        if (collection_1.StringMapWrapper.contains(DatePipe._ALIASES, pattern)) {
	            pattern = collection_1.StringMapWrapper.get(DatePipe._ALIASES, pattern);
	        }
	        return intl_1.DateFormatter.format(value, defaultLocale, pattern);
	    };
	    DatePipe.prototype.supports = function (obj) { return lang_1.isDate(obj) || lang_1.isNumber(obj); };
	    /** @internal */
	    DatePipe._ALIASES = {
	        'medium': 'yMMMdjms',
	        'short': 'yMdjm',
	        'fullDate': 'yMMMMEEEEd',
	        'longDate': 'yMMMMd',
	        'mediumDate': 'yMMMd',
	        'shortDate': 'yMd',
	        'mediumTime': 'jms',
	        'shortTime': 'jm'
	    };
	    DatePipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'date', pure: true },] },
	        { type: core_1.Injectable },
	    ];
	    return DatePipe;
	}());
	exports.DatePipe = DatePipe;
	//# sourceMappingURL=date_pipe.js.map

/***/ },
/* 194 */
/***/ function(module, exports) {

	"use strict";
	(function (NumberFormatStyle) {
	    NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
	    NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
	    NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
	})(exports.NumberFormatStyle || (exports.NumberFormatStyle = {}));
	var NumberFormatStyle = exports.NumberFormatStyle;
	var NumberFormatter = (function () {
	    function NumberFormatter() {
	    }
	    NumberFormatter.format = function (num, locale, style, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.minimumIntegerDigits, minimumIntegerDigits = _c === void 0 ? 1 : _c, _d = _b.minimumFractionDigits, minimumFractionDigits = _d === void 0 ? 0 : _d, _e = _b.maximumFractionDigits, maximumFractionDigits = _e === void 0 ? 3 : _e, currency = _b.currency, _f = _b.currencyAsSymbol, currencyAsSymbol = _f === void 0 ? false : _f;
	        var intlOptions = {
	            minimumIntegerDigits: minimumIntegerDigits,
	            minimumFractionDigits: minimumFractionDigits,
	            maximumFractionDigits: maximumFractionDigits
	        };
	        intlOptions.style = NumberFormatStyle[style].toLowerCase();
	        if (style == NumberFormatStyle.Currency) {
	            intlOptions.currency = currency;
	            intlOptions.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
	        }
	        return new Intl.NumberFormat(locale, intlOptions).format(num);
	    };
	    return NumberFormatter;
	}());
	exports.NumberFormatter = NumberFormatter;
	function digitCondition(len) {
	    return len == 2 ? '2-digit' : 'numeric';
	}
	function nameCondition(len) {
	    return len < 4 ? 'short' : 'long';
	}
	function extractComponents(pattern) {
	    var ret = {};
	    var i = 0, j;
	    while (i < pattern.length) {
	        j = i;
	        while (j < pattern.length && pattern[j] == pattern[i])
	            j++;
	        var len = j - i;
	        switch (pattern[i]) {
	            case 'G':
	                ret.era = nameCondition(len);
	                break;
	            case 'y':
	                ret.year = digitCondition(len);
	                break;
	            case 'M':
	                if (len >= 3)
	                    ret.month = nameCondition(len);
	                else
	                    ret.month = digitCondition(len);
	                break;
	            case 'd':
	                ret.day = digitCondition(len);
	                break;
	            case 'E':
	                ret.weekday = nameCondition(len);
	                break;
	            case 'j':
	                ret.hour = digitCondition(len);
	                break;
	            case 'h':
	                ret.hour = digitCondition(len);
	                ret.hour12 = true;
	                break;
	            case 'H':
	                ret.hour = digitCondition(len);
	                ret.hour12 = false;
	                break;
	            case 'm':
	                ret.minute = digitCondition(len);
	                break;
	            case 's':
	                ret.second = digitCondition(len);
	                break;
	            case 'z':
	                ret.timeZoneName = 'long';
	                break;
	            case 'Z':
	                ret.timeZoneName = 'short';
	                break;
	        }
	        i = j;
	    }
	    return ret;
	}
	var dateFormatterCache = new Map();
	var DateFormatter = (function () {
	    function DateFormatter() {
	    }
	    DateFormatter.format = function (date, locale, pattern) {
	        var key = locale + pattern;
	        if (dateFormatterCache.has(key)) {
	            return dateFormatterCache.get(key).format(date);
	        }
	        var formatter = new Intl.DateTimeFormat(locale, extractComponents(pattern));
	        dateFormatterCache.set(key, formatter);
	        return formatter.format(date);
	    };
	    return DateFormatter;
	}());
	exports.DateFormatter = DateFormatter;
	//# sourceMappingURL=intl.js.map

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var JsonPipe = (function () {
	    function JsonPipe() {
	    }
	    JsonPipe.prototype.transform = function (value) { return lang_1.Json.stringify(value); };
	    JsonPipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'json', pure: false },] },
	        { type: core_1.Injectable },
	    ];
	    return JsonPipe;
	}());
	exports.JsonPipe = JsonPipe;
	//# sourceMappingURL=json_pipe.js.map

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var collection_1 = __webpack_require__(192);
	var invalid_pipe_argument_exception_1 = __webpack_require__(188);
	var SlicePipe = (function () {
	    function SlicePipe() {
	    }
	    SlicePipe.prototype.transform = function (value, start, end) {
	        if (end === void 0) { end = null; }
	        if (!this.supports(value)) {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(SlicePipe, value);
	        }
	        if (lang_1.isBlank(value))
	            return value;
	        if (lang_1.isString(value)) {
	            return lang_1.StringWrapper.slice(value, start, end);
	        }
	        return collection_1.ListWrapper.slice(value, start, end);
	    };
	    SlicePipe.prototype.supports = function (obj) { return lang_1.isString(obj) || lang_1.isArray(obj); };
	    SlicePipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'slice', pure: false },] },
	        { type: core_1.Injectable },
	    ];
	    return SlicePipe;
	}());
	exports.SlicePipe = SlicePipe;
	//# sourceMappingURL=slice_pipe.js.map

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var invalid_pipe_argument_exception_1 = __webpack_require__(188);
	var LowerCasePipe = (function () {
	    function LowerCasePipe() {
	    }
	    LowerCasePipe.prototype.transform = function (value) {
	        if (lang_1.isBlank(value))
	            return value;
	        if (!lang_1.isString(value)) {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(LowerCasePipe, value);
	        }
	        return value.toLowerCase();
	    };
	    LowerCasePipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'lowercase' },] },
	        { type: core_1.Injectable },
	    ];
	    return LowerCasePipe;
	}());
	exports.LowerCasePipe = LowerCasePipe;
	//# sourceMappingURL=lowercase_pipe.js.map

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var exceptions_1 = __webpack_require__(189);
	var intl_1 = __webpack_require__(194);
	var invalid_pipe_argument_exception_1 = __webpack_require__(188);
	var defaultLocale = 'en-US';
	var _re = lang_1.RegExpWrapper.create('^(\\d+)?\\.((\\d+)(\\-(\\d+))?)?$');
	var NumberPipe = (function () {
	    function NumberPipe() {
	    }
	    /** @internal */
	    NumberPipe._format = function (value, style, digits, currency, currencyAsSymbol) {
	        if (currency === void 0) { currency = null; }
	        if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
	        if (lang_1.isBlank(value))
	            return null;
	        if (!lang_1.isNumber(value)) {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(NumberPipe, value);
	        }
	        var minInt = 1, minFraction = 0, maxFraction = 3;
	        if (lang_1.isPresent(digits)) {
	            var parts = lang_1.RegExpWrapper.firstMatch(_re, digits);
	            if (lang_1.isBlank(parts)) {
	                throw new exceptions_1.BaseException(digits + " is not a valid digit info for number pipes");
	            }
	            if (lang_1.isPresent(parts[1])) {
	                minInt = lang_1.NumberWrapper.parseIntAutoRadix(parts[1]);
	            }
	            if (lang_1.isPresent(parts[3])) {
	                minFraction = lang_1.NumberWrapper.parseIntAutoRadix(parts[3]);
	            }
	            if (lang_1.isPresent(parts[5])) {
	                maxFraction = lang_1.NumberWrapper.parseIntAutoRadix(parts[5]);
	            }
	        }
	        return intl_1.NumberFormatter.format(value, defaultLocale, style, {
	            minimumIntegerDigits: minInt,
	            minimumFractionDigits: minFraction,
	            maximumFractionDigits: maxFraction,
	            currency: currency,
	            currencyAsSymbol: currencyAsSymbol
	        });
	    };
	    NumberPipe.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return NumberPipe;
	}());
	exports.NumberPipe = NumberPipe;
	var DecimalPipe = (function (_super) {
	    __extends(DecimalPipe, _super);
	    function DecimalPipe() {
	        _super.apply(this, arguments);
	    }
	    DecimalPipe.prototype.transform = function (value, digits) {
	        if (digits === void 0) { digits = null; }
	        return NumberPipe._format(value, intl_1.NumberFormatStyle.Decimal, digits);
	    };
	    DecimalPipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'number' },] },
	        { type: core_1.Injectable },
	    ];
	    return DecimalPipe;
	}(NumberPipe));
	exports.DecimalPipe = DecimalPipe;
	var PercentPipe = (function (_super) {
	    __extends(PercentPipe, _super);
	    function PercentPipe() {
	        _super.apply(this, arguments);
	    }
	    PercentPipe.prototype.transform = function (value, digits) {
	        if (digits === void 0) { digits = null; }
	        return NumberPipe._format(value, intl_1.NumberFormatStyle.Percent, digits);
	    };
	    PercentPipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'percent' },] },
	        { type: core_1.Injectable },
	    ];
	    return PercentPipe;
	}(NumberPipe));
	exports.PercentPipe = PercentPipe;
	var CurrencyPipe = (function (_super) {
	    __extends(CurrencyPipe, _super);
	    function CurrencyPipe() {
	        _super.apply(this, arguments);
	    }
	    CurrencyPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
	        if (currencyCode === void 0) { currencyCode = 'USD'; }
	        if (symbolDisplay === void 0) { symbolDisplay = false; }
	        if (digits === void 0) { digits = null; }
	        return NumberPipe._format(value, intl_1.NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
	    };
	    CurrencyPipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'currency' },] },
	        { type: core_1.Injectable },
	    ];
	    return CurrencyPipe;
	}(NumberPipe));
	exports.CurrencyPipe = CurrencyPipe;
	//# sourceMappingURL=number_pipe.js.map

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var invalid_pipe_argument_exception_1 = __webpack_require__(188);
	var UpperCasePipe = (function () {
	    function UpperCasePipe() {
	    }
	    UpperCasePipe.prototype.transform = function (value) {
	        if (lang_1.isBlank(value))
	            return value;
	        if (!lang_1.isString(value)) {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(UpperCasePipe, value);
	        }
	        return value.toUpperCase();
	    };
	    UpperCasePipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'uppercase' },] },
	        { type: core_1.Injectable },
	    ];
	    return UpperCasePipe;
	}());
	exports.UpperCasePipe = UpperCasePipe;
	//# sourceMappingURL=uppercase_pipe.js.map

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var invalid_pipe_argument_exception_1 = __webpack_require__(188);
	var ReplacePipe = (function () {
	    function ReplacePipe() {
	    }
	    ReplacePipe.prototype.transform = function (value, pattern, replacement) {
	        if (lang_1.isBlank(value)) {
	            return value;
	        }
	        if (!this._supportedInput(value)) {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(ReplacePipe, value);
	        }
	        var input = value.toString();
	        if (!this._supportedPattern(pattern)) {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(ReplacePipe, pattern);
	        }
	        if (!this._supportedReplacement(replacement)) {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(ReplacePipe, replacement);
	        }
	        // template fails with literal RegExp e.g /pattern/igm
	        // var rgx = pattern instanceof RegExp ? pattern : RegExpWrapper.create(pattern);
	        if (lang_1.isFunction(replacement)) {
	            var rgxPattern = lang_1.isString(pattern) ? lang_1.RegExpWrapper.create(pattern) : pattern;
	            return lang_1.StringWrapper.replaceAllMapped(input, rgxPattern, replacement);
	        }
	        if (pattern instanceof RegExp) {
	            // use the replaceAll variant
	            return lang_1.StringWrapper.replaceAll(input, pattern, replacement);
	        }
	        return lang_1.StringWrapper.replace(input, pattern, replacement);
	    };
	    ReplacePipe.prototype._supportedInput = function (input) { return lang_1.isString(input) || lang_1.isNumber(input); };
	    ReplacePipe.prototype._supportedPattern = function (pattern) {
	        return lang_1.isString(pattern) || pattern instanceof RegExp;
	    };
	    ReplacePipe.prototype._supportedReplacement = function (replacement) {
	        return lang_1.isString(replacement) || lang_1.isFunction(replacement);
	    };
	    ReplacePipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'replace' },] },
	        { type: core_1.Injectable },
	    ];
	    return ReplacePipe;
	}());
	exports.ReplacePipe = ReplacePipe;
	//# sourceMappingURL=replace_pipe.js.map

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var invalid_pipe_argument_exception_1 = __webpack_require__(188);
	var interpolationExp = lang_1.RegExpWrapper.create('#');
	var I18nPluralPipe = (function () {
	    function I18nPluralPipe() {
	    }
	    I18nPluralPipe.prototype.transform = function (value, pluralMap) {
	        var key;
	        var valueStr;
	        if (!lang_1.isStringMap(pluralMap)) {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(I18nPluralPipe, pluralMap);
	        }
	        key = value === 0 || value === 1 ? "=" + value : 'other';
	        valueStr = lang_1.isPresent(value) ? value.toString() : '';
	        return lang_1.StringWrapper.replaceAll(pluralMap[key], interpolationExp, valueStr);
	    };
	    I18nPluralPipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'i18nPlural', pure: true },] },
	        { type: core_1.Injectable },
	    ];
	    return I18nPluralPipe;
	}());
	exports.I18nPluralPipe = I18nPluralPipe;
	//# sourceMappingURL=i18n_plural_pipe.js.map

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var collection_1 = __webpack_require__(192);
	var invalid_pipe_argument_exception_1 = __webpack_require__(188);
	var I18nSelectPipe = (function () {
	    function I18nSelectPipe() {
	    }
	    I18nSelectPipe.prototype.transform = function (value, mapping) {
	        if (!lang_1.isStringMap(mapping)) {
	            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(I18nSelectPipe, mapping);
	        }
	        return collection_1.StringMapWrapper.contains(mapping, value) ? mapping[value] : mapping['other'];
	    };
	    I18nSelectPipe.decorators = [
	        { type: core_1.Pipe, args: [{ name: 'i18nSelect', pure: true },] },
	        { type: core_1.Injectable },
	    ];
	    return I18nSelectPipe;
	}());
	exports.I18nSelectPipe = I18nSelectPipe;
	//# sourceMappingURL=i18n_select_pipe.js.map

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* @module
	* @description
	* This module provides a set of common Pipes.
	*/
	var async_pipe_1 = __webpack_require__(184);
	var uppercase_pipe_1 = __webpack_require__(199);
	var lowercase_pipe_1 = __webpack_require__(197);
	var json_pipe_1 = __webpack_require__(195);
	var slice_pipe_1 = __webpack_require__(196);
	var date_pipe_1 = __webpack_require__(193);
	var number_pipe_1 = __webpack_require__(198);
	var replace_pipe_1 = __webpack_require__(200);
	var i18n_plural_pipe_1 = __webpack_require__(201);
	var i18n_select_pipe_1 = __webpack_require__(202);
	/**
	 * A collection of Angular core pipes that are likely to be used in each and every
	 * application.
	 *
	 * This collection can be used to quickly enumerate all the built-in pipes in the `pipes`
	 * property of the `@Component` decorator.
	 */
	exports.COMMON_PIPES = [
	    async_pipe_1.AsyncPipe,
	    uppercase_pipe_1.UpperCasePipe,
	    lowercase_pipe_1.LowerCasePipe,
	    json_pipe_1.JsonPipe,
	    slice_pipe_1.SlicePipe,
	    number_pipe_1.DecimalPipe,
	    number_pipe_1.PercentPipe,
	    number_pipe_1.CurrencyPipe,
	    date_pipe_1.DatePipe,
	    replace_pipe_1.ReplacePipe,
	    i18n_plural_pipe_1.I18nPluralPipe,
	    i18n_select_pipe_1.I18nSelectPipe
	];
	//# sourceMappingURL=common_pipes.js.map

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	* @module
	* @description
	* Common directives shipped with Angular.
	*/
	var ng_class_1 = __webpack_require__(205);
	exports.NgClass = ng_class_1.NgClass;
	var ng_for_1 = __webpack_require__(206);
	exports.NgFor = ng_for_1.NgFor;
	var ng_if_1 = __webpack_require__(207);
	exports.NgIf = ng_if_1.NgIf;
	var ng_template_outlet_1 = __webpack_require__(208);
	exports.NgTemplateOutlet = ng_template_outlet_1.NgTemplateOutlet;
	var ng_style_1 = __webpack_require__(209);
	exports.NgStyle = ng_style_1.NgStyle;
	var ng_switch_1 = __webpack_require__(210);
	exports.NgSwitch = ng_switch_1.NgSwitch;
	exports.NgSwitchWhen = ng_switch_1.NgSwitchWhen;
	exports.NgSwitchDefault = ng_switch_1.NgSwitchDefault;
	var ng_plural_1 = __webpack_require__(211);
	exports.NgPlural = ng_plural_1.NgPlural;
	exports.NgPluralCase = ng_plural_1.NgPluralCase;
	exports.NgLocalization = ng_plural_1.NgLocalization;
	__export(__webpack_require__(212));
	var core_directives_1 = __webpack_require__(213);
	exports.CORE_DIRECTIVES = core_directives_1.CORE_DIRECTIVES;
	//# sourceMappingURL=directives.js.map

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var collection_1 = __webpack_require__(192);
	var NgClass = (function () {
	    function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
	        this._iterableDiffers = _iterableDiffers;
	        this._keyValueDiffers = _keyValueDiffers;
	        this._ngEl = _ngEl;
	        this._renderer = _renderer;
	        this._initialClasses = [];
	    }
	    Object.defineProperty(NgClass.prototype, "initialClasses", {
	        set: function (v) {
	            this._applyInitialClasses(true);
	            this._initialClasses = lang_1.isPresent(v) && lang_1.isString(v) ? v.split(' ') : [];
	            this._applyInitialClasses(false);
	            this._applyClasses(this._rawClass, false);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgClass.prototype, "rawClass", {
	        set: function (v) {
	            this._cleanupClasses(this._rawClass);
	            if (lang_1.isString(v)) {
	                v = v.split(' ');
	            }
	            this._rawClass = v;
	            this._iterableDiffer = null;
	            this._keyValueDiffer = null;
	            if (lang_1.isPresent(v)) {
	                if (collection_1.isListLikeIterable(v)) {
	                    this._iterableDiffer = this._iterableDiffers.find(v).create(null);
	                }
	                else {
	                    this._keyValueDiffer = this._keyValueDiffers.find(v).create(null);
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgClass.prototype.ngDoCheck = function () {
	        if (lang_1.isPresent(this._iterableDiffer)) {
	            var changes = this._iterableDiffer.diff(this._rawClass);
	            if (lang_1.isPresent(changes)) {
	                this._applyIterableChanges(changes);
	            }
	        }
	        if (lang_1.isPresent(this._keyValueDiffer)) {
	            var changes = this._keyValueDiffer.diff(this._rawClass);
	            if (lang_1.isPresent(changes)) {
	                this._applyKeyValueChanges(changes);
	            }
	        }
	    };
	    NgClass.prototype.ngOnDestroy = function () { this._cleanupClasses(this._rawClass); };
	    NgClass.prototype._cleanupClasses = function (rawClassVal) {
	        this._applyClasses(rawClassVal, true);
	        this._applyInitialClasses(false);
	    };
	    NgClass.prototype._applyKeyValueChanges = function (changes) {
	        var _this = this;
	        changes.forEachAddedItem(function (record) { _this._toggleClass(record.key, record.currentValue); });
	        changes.forEachChangedItem(function (record) { _this._toggleClass(record.key, record.currentValue); });
	        changes.forEachRemovedItem(function (record) {
	            if (record.previousValue) {
	                _this._toggleClass(record.key, false);
	            }
	        });
	    };
	    NgClass.prototype._applyIterableChanges = function (changes) {
	        var _this = this;
	        changes.forEachAddedItem(function (record) { _this._toggleClass(record.item, true); });
	        changes.forEachRemovedItem(function (record) { _this._toggleClass(record.item, false); });
	    };
	    NgClass.prototype._applyInitialClasses = function (isCleanup) {
	        var _this = this;
	        this._initialClasses.forEach(function (className) { return _this._toggleClass(className, !isCleanup); });
	    };
	    NgClass.prototype._applyClasses = function (rawClassVal, isCleanup) {
	        var _this = this;
	        if (lang_1.isPresent(rawClassVal)) {
	            if (lang_1.isArray(rawClassVal)) {
	                rawClassVal.forEach(function (className) { return _this._toggleClass(className, !isCleanup); });
	            }
	            else if (rawClassVal instanceof Set) {
	                rawClassVal.forEach(function (className) { return _this._toggleClass(className, !isCleanup); });
	            }
	            else {
	                collection_1.StringMapWrapper.forEach(rawClassVal, function (expVal, className) {
	                    if (lang_1.isPresent(expVal))
	                        _this._toggleClass(className, !isCleanup);
	                });
	            }
	        }
	    };
	    NgClass.prototype._toggleClass = function (className, enabled) {
	        className = className.trim();
	        if (className.length > 0) {
	            if (className.indexOf(' ') > -1) {
	                var classes = className.split(/\s+/g);
	                for (var i = 0, len = classes.length; i < len; i++) {
	                    this._renderer.setElementClass(this._ngEl.nativeElement, classes[i], enabled);
	                }
	            }
	            else {
	                this._renderer.setElementClass(this._ngEl.nativeElement, className, enabled);
	            }
	        }
	    };
	    NgClass.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngClass]', inputs: ['rawClass: ngClass', 'initialClasses: class'] },] },
	    ];
	    NgClass.ctorParameters = [
	        { type: core_1.IterableDiffers, },
	        { type: core_1.KeyValueDiffers, },
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	    ];
	    return NgClass;
	}());
	exports.NgClass = NgClass;
	//# sourceMappingURL=ng_class.js.map

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var exceptions_1 = __webpack_require__(189);
	var NgForRow = (function () {
	    function NgForRow($implicit, index, count) {
	        this.$implicit = $implicit;
	        this.index = index;
	        this.count = count;
	    }
	    Object.defineProperty(NgForRow.prototype, "first", {
	        get: function () { return this.index === 0; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForRow.prototype, "last", {
	        get: function () { return this.index === this.count - 1; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForRow.prototype, "even", {
	        get: function () { return this.index % 2 === 0; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForRow.prototype, "odd", {
	        get: function () { return !this.even; },
	        enumerable: true,
	        configurable: true
	    });
	    return NgForRow;
	}());
	exports.NgForRow = NgForRow;
	var NgFor = (function () {
	    function NgFor(_viewContainer, _templateRef, _iterableDiffers, _cdr) {
	        this._viewContainer = _viewContainer;
	        this._templateRef = _templateRef;
	        this._iterableDiffers = _iterableDiffers;
	        this._cdr = _cdr;
	    }
	    Object.defineProperty(NgFor.prototype, "ngForOf", {
	        set: function (value) {
	            this._ngForOf = value;
	            if (lang_1.isBlank(this._differ) && lang_1.isPresent(value)) {
	                try {
	                    this._differ = this._iterableDiffers.find(value).create(this._cdr, this._ngForTrackBy);
	                }
	                catch (e) {
	                    throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + value + "' of type '" + lang_1.getTypeNameForDebugging(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgFor.prototype, "ngForTemplate", {
	        set: function (value) {
	            if (lang_1.isPresent(value)) {
	                this._templateRef = value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgFor.prototype, "ngForTrackBy", {
	        set: function (value) { this._ngForTrackBy = value; },
	        enumerable: true,
	        configurable: true
	    });
	    NgFor.prototype.ngDoCheck = function () {
	        if (lang_1.isPresent(this._differ)) {
	            var changes = this._differ.diff(this._ngForOf);
	            if (lang_1.isPresent(changes))
	                this._applyChanges(changes);
	        }
	    };
	    NgFor.prototype._applyChanges = function (changes) {
	        var _this = this;
	        // TODO(rado): check if change detection can produce a change record that is
	        // easier to consume than current.
	        var recordViewTuples = [];
	        changes.forEachRemovedItem(function (removedRecord) {
	            return recordViewTuples.push(new RecordViewTuple(removedRecord, null));
	        });
	        changes.forEachMovedItem(function (movedRecord) {
	            return recordViewTuples.push(new RecordViewTuple(movedRecord, null));
	        });
	        var insertTuples = this._bulkRemove(recordViewTuples);
	        changes.forEachAddedItem(function (addedRecord) {
	            return insertTuples.push(new RecordViewTuple(addedRecord, null));
	        });
	        this._bulkInsert(insertTuples);
	        for (var i = 0; i < insertTuples.length; i++) {
	            this._perViewChange(insertTuples[i].view, insertTuples[i].record);
	        }
	        for (var i = 0, ilen = this._viewContainer.length; i < ilen; i++) {
	            var viewRef = this._viewContainer.get(i);
	            viewRef.context.index = i;
	            viewRef.context.count = ilen;
	        }
	        changes.forEachIdentityChange(function (record) {
	            var viewRef = _this._viewContainer.get(record.currentIndex);
	            viewRef.context.$implicit = record.item;
	        });
	    };
	    NgFor.prototype._perViewChange = function (view, record) {
	        view.context.$implicit = record.item;
	    };
	    NgFor.prototype._bulkRemove = function (tuples) {
	        tuples.sort(function (a, b) {
	            return a.record.previousIndex - b.record.previousIndex;
	        });
	        var movedTuples = [];
	        for (var i = tuples.length - 1; i >= 0; i--) {
	            var tuple = tuples[i];
	            // separate moved views from removed views.
	            if (lang_1.isPresent(tuple.record.currentIndex)) {
	                tuple.view =
	                    this._viewContainer.detach(tuple.record.previousIndex);
	                movedTuples.push(tuple);
	            }
	            else {
	                this._viewContainer.remove(tuple.record.previousIndex);
	            }
	        }
	        return movedTuples;
	    };
	    NgFor.prototype._bulkInsert = function (tuples) {
	        tuples.sort(function (a, b) { return a.record.currentIndex - b.record.currentIndex; });
	        for (var i = 0; i < tuples.length; i++) {
	            var tuple = tuples[i];
	            if (lang_1.isPresent(tuple.view)) {
	                this._viewContainer.insert(tuple.view, tuple.record.currentIndex);
	            }
	            else {
	                tuple.view = this._viewContainer.createEmbeddedView(this._templateRef, new NgForRow(null, null, null), tuple.record.currentIndex);
	            }
	        }
	        return tuples;
	    };
	    NgFor.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngFor][ngForOf]', inputs: ['ngForTrackBy', 'ngForOf', 'ngForTemplate'] },] },
	    ];
	    NgFor.ctorParameters = [
	        { type: core_1.ViewContainerRef, },
	        { type: core_1.TemplateRef, },
	        { type: core_1.IterableDiffers, },
	        { type: core_1.ChangeDetectorRef, },
	    ];
	    return NgFor;
	}());
	exports.NgFor = NgFor;
	var RecordViewTuple = (function () {
	    function RecordViewTuple(record, view) {
	        this.record = record;
	        this.view = view;
	    }
	    return RecordViewTuple;
	}());
	//# sourceMappingURL=ng_for.js.map

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var NgIf = (function () {
	    function NgIf(_viewContainer, _templateRef) {
	        this._viewContainer = _viewContainer;
	        this._templateRef = _templateRef;
	        this._prevCondition = null;
	    }
	    Object.defineProperty(NgIf.prototype, "ngIf", {
	        set: function (newCondition /* boolean */) {
	            if (newCondition && (lang_1.isBlank(this._prevCondition) || !this._prevCondition)) {
	                this._prevCondition = true;
	                this._viewContainer.createEmbeddedView(this._templateRef);
	            }
	            else if (!newCondition && (lang_1.isBlank(this._prevCondition) || this._prevCondition)) {
	                this._prevCondition = false;
	                this._viewContainer.clear();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgIf.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngIf]', inputs: ['ngIf'] },] },
	    ];
	    NgIf.ctorParameters = [
	        { type: core_1.ViewContainerRef, },
	        { type: core_1.TemplateRef, },
	    ];
	    return NgIf;
	}());
	exports.NgIf = NgIf;
	//# sourceMappingURL=ng_if.js.map

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var NgTemplateOutlet = (function () {
	    function NgTemplateOutlet(_viewContainerRef) {
	        this._viewContainerRef = _viewContainerRef;
	    }
	    Object.defineProperty(NgTemplateOutlet.prototype, "ngTemplateOutlet", {
	        set: function (templateRef) {
	            if (lang_1.isPresent(this._insertedViewRef)) {
	                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._insertedViewRef));
	            }
	            if (lang_1.isPresent(templateRef)) {
	                this._insertedViewRef = this._viewContainerRef.createEmbeddedView(templateRef);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgTemplateOutlet.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngTemplateOutlet]' },] },
	    ];
	    NgTemplateOutlet.ctorParameters = [
	        { type: core_1.ViewContainerRef, },
	    ];
	    NgTemplateOutlet.propDecorators = {
	        'ngTemplateOutlet': [{ type: core_1.Input },],
	    };
	    return NgTemplateOutlet;
	}());
	exports.NgTemplateOutlet = NgTemplateOutlet;
	//# sourceMappingURL=ng_template_outlet.js.map

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var NgStyle = (function () {
	    function NgStyle(_differs, _ngEl, _renderer) {
	        this._differs = _differs;
	        this._ngEl = _ngEl;
	        this._renderer = _renderer;
	    }
	    Object.defineProperty(NgStyle.prototype, "rawStyle", {
	        set: function (v) {
	            this._rawStyle = v;
	            if (lang_1.isBlank(this._differ) && lang_1.isPresent(v)) {
	                this._differ = this._differs.find(this._rawStyle).create(null);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgStyle.prototype.ngDoCheck = function () {
	        if (lang_1.isPresent(this._differ)) {
	            var changes = this._differ.diff(this._rawStyle);
	            if (lang_1.isPresent(changes)) {
	                this._applyChanges(changes);
	            }
	        }
	    };
	    NgStyle.prototype._applyChanges = function (changes) {
	        var _this = this;
	        changes.forEachAddedItem(function (record) { _this._setStyle(record.key, record.currentValue); });
	        changes.forEachChangedItem(function (record) { _this._setStyle(record.key, record.currentValue); });
	        changes.forEachRemovedItem(function (record) { _this._setStyle(record.key, null); });
	    };
	    NgStyle.prototype._setStyle = function (name, val) {
	        this._renderer.setElementStyle(this._ngEl.nativeElement, name, val);
	    };
	    NgStyle.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngStyle]', inputs: ['rawStyle: ngStyle'] },] },
	    ];
	    NgStyle.ctorParameters = [
	        { type: core_1.KeyValueDiffers, },
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	    ];
	    return NgStyle;
	}());
	exports.NgStyle = NgStyle;
	//# sourceMappingURL=ng_style.js.map

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var collection_1 = __webpack_require__(192);
	var _WHEN_DEFAULT = new Object();
	var SwitchView = (function () {
	    function SwitchView(_viewContainerRef, _templateRef) {
	        this._viewContainerRef = _viewContainerRef;
	        this._templateRef = _templateRef;
	    }
	    SwitchView.prototype.create = function () { this._viewContainerRef.createEmbeddedView(this._templateRef); };
	    SwitchView.prototype.destroy = function () { this._viewContainerRef.clear(); };
	    return SwitchView;
	}());
	exports.SwitchView = SwitchView;
	var NgSwitch = (function () {
	    function NgSwitch() {
	        this._useDefault = false;
	        this._valueViews = new collection_1.Map();
	        this._activeViews = [];
	    }
	    Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
	        set: function (value) {
	            // Empty the currently active ViewContainers
	            this._emptyAllActiveViews();
	            // Add the ViewContainers matching the value (with a fallback to default)
	            this._useDefault = false;
	            var views = this._valueViews.get(value);
	            if (lang_1.isBlank(views)) {
	                this._useDefault = true;
	                views = lang_1.normalizeBlank(this._valueViews.get(_WHEN_DEFAULT));
	            }
	            this._activateViews(views);
	            this._switchValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSwitch.prototype._onWhenValueChanged = function (oldWhen, newWhen, view) {
	        this._deregisterView(oldWhen, view);
	        this._registerView(newWhen, view);
	        if (oldWhen === this._switchValue) {
	            view.destroy();
	            collection_1.ListWrapper.remove(this._activeViews, view);
	        }
	        else if (newWhen === this._switchValue) {
	            if (this._useDefault) {
	                this._useDefault = false;
	                this._emptyAllActiveViews();
	            }
	            view.create();
	            this._activeViews.push(view);
	        }
	        // Switch to default when there is no more active ViewContainers
	        if (this._activeViews.length === 0 && !this._useDefault) {
	            this._useDefault = true;
	            this._activateViews(this._valueViews.get(_WHEN_DEFAULT));
	        }
	    };
	    /** @internal */
	    NgSwitch.prototype._emptyAllActiveViews = function () {
	        var activeContainers = this._activeViews;
	        for (var i = 0; i < activeContainers.length; i++) {
	            activeContainers[i].destroy();
	        }
	        this._activeViews = [];
	    };
	    /** @internal */
	    NgSwitch.prototype._activateViews = function (views) {
	        // TODO(vicb): assert(this._activeViews.length === 0);
	        if (lang_1.isPresent(views)) {
	            for (var i = 0; i < views.length; i++) {
	                views[i].create();
	            }
	            this._activeViews = views;
	        }
	    };
	    /** @internal */
	    NgSwitch.prototype._registerView = function (value, view) {
	        var views = this._valueViews.get(value);
	        if (lang_1.isBlank(views)) {
	            views = [];
	            this._valueViews.set(value, views);
	        }
	        views.push(view);
	    };
	    /** @internal */
	    NgSwitch.prototype._deregisterView = function (value, view) {
	        // `_WHEN_DEFAULT` is used a marker for non-registered whens
	        if (value === _WHEN_DEFAULT)
	            return;
	        var views = this._valueViews.get(value);
	        if (views.length == 1) {
	            this._valueViews.delete(value);
	        }
	        else {
	            collection_1.ListWrapper.remove(views, view);
	        }
	    };
	    NgSwitch.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngSwitch]', inputs: ['ngSwitch'] },] },
	    ];
	    return NgSwitch;
	}());
	exports.NgSwitch = NgSwitch;
	var NgSwitchWhen = (function () {
	    function NgSwitchWhen(viewContainer, templateRef, ngSwitch) {
	        // `_WHEN_DEFAULT` is used as a marker for a not yet initialized value
	        /** @internal */
	        this._value = _WHEN_DEFAULT;
	        this._switch = ngSwitch;
	        this._view = new SwitchView(viewContainer, templateRef);
	    }
	    Object.defineProperty(NgSwitchWhen.prototype, "ngSwitchWhen", {
	        set: function (value) {
	            this._switch._onWhenValueChanged(this._value, value, this._view);
	            this._value = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgSwitchWhen.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngSwitchWhen]', inputs: ['ngSwitchWhen'] },] },
	    ];
	    NgSwitchWhen.ctorParameters = [
	        { type: core_1.ViewContainerRef, },
	        { type: core_1.TemplateRef, },
	        { type: NgSwitch, decorators: [{ type: core_1.Host },] },
	    ];
	    return NgSwitchWhen;
	}());
	exports.NgSwitchWhen = NgSwitchWhen;
	var NgSwitchDefault = (function () {
	    function NgSwitchDefault(viewContainer, templateRef, sswitch) {
	        sswitch._registerView(_WHEN_DEFAULT, new SwitchView(viewContainer, templateRef));
	    }
	    NgSwitchDefault.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngSwitchDefault]' },] },
	    ];
	    NgSwitchDefault.ctorParameters = [
	        { type: core_1.ViewContainerRef, },
	        { type: core_1.TemplateRef, },
	        { type: NgSwitch, decorators: [{ type: core_1.Host },] },
	    ];
	    return NgSwitchDefault;
	}());
	exports.NgSwitchDefault = NgSwitchDefault;
	//# sourceMappingURL=ng_switch.js.map

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var collection_1 = __webpack_require__(192);
	var ng_switch_1 = __webpack_require__(210);
	var _CATEGORY_DEFAULT = 'other';
	var NgLocalization = (function () {
	    function NgLocalization() {
	    }
	    return NgLocalization;
	}());
	exports.NgLocalization = NgLocalization;
	var NgPluralCase = (function () {
	    function NgPluralCase(value, template, viewContainer) {
	        this.value = value;
	        this._view = new ng_switch_1.SwitchView(viewContainer, template);
	    }
	    NgPluralCase.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngPluralCase]' },] },
	    ];
	    NgPluralCase.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['ngPluralCase',] },] },
	        { type: core_1.TemplateRef, },
	        { type: core_1.ViewContainerRef, },
	    ];
	    return NgPluralCase;
	}());
	exports.NgPluralCase = NgPluralCase;
	var NgPlural = (function () {
	    function NgPlural(_localization) {
	        this._localization = _localization;
	        this._caseViews = new collection_1.Map();
	        this.cases = null;
	    }
	    Object.defineProperty(NgPlural.prototype, "ngPlural", {
	        set: function (value) {
	            this._switchValue = value;
	            this._updateView();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgPlural.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        this.cases.forEach(function (pluralCase) {
	            _this._caseViews.set(_this._formatValue(pluralCase), pluralCase._view);
	        });
	        this._updateView();
	    };
	    /** @internal */
	    NgPlural.prototype._updateView = function () {
	        this._clearViews();
	        var view = this._caseViews.get(this._switchValue);
	        if (!lang_1.isPresent(view))
	            view = this._getCategoryView(this._switchValue);
	        this._activateView(view);
	    };
	    /** @internal */
	    NgPlural.prototype._clearViews = function () {
	        if (lang_1.isPresent(this._activeView))
	            this._activeView.destroy();
	    };
	    /** @internal */
	    NgPlural.prototype._activateView = function (view) {
	        if (!lang_1.isPresent(view))
	            return;
	        this._activeView = view;
	        this._activeView.create();
	    };
	    /** @internal */
	    NgPlural.prototype._getCategoryView = function (value) {
	        var category = this._localization.getPluralCategory(value);
	        var categoryView = this._caseViews.get(category);
	        return lang_1.isPresent(categoryView) ? categoryView : this._caseViews.get(_CATEGORY_DEFAULT);
	    };
	    /** @internal */
	    NgPlural.prototype._isValueView = function (pluralCase) { return pluralCase.value[0] === "="; };
	    /** @internal */
	    NgPlural.prototype._formatValue = function (pluralCase) {
	        return this._isValueView(pluralCase) ? this._stripValue(pluralCase.value) : pluralCase.value;
	    };
	    /** @internal */
	    NgPlural.prototype._stripValue = function (value) { return lang_1.NumberWrapper.parseInt(value.substring(1), 10); };
	    NgPlural.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngPlural]' },] },
	    ];
	    NgPlural.ctorParameters = [
	        { type: NgLocalization, },
	    ];
	    NgPlural.propDecorators = {
	        'cases': [{ type: core_1.ContentChildren, args: [NgPluralCase,] },],
	        'ngPlural': [{ type: core_1.Input },],
	    };
	    return NgPlural;
	}());
	exports.NgPlural = NgPlural;
	//# sourceMappingURL=ng_plural.js.map

/***/ },
/* 212 */
/***/ function(module, exports) {

	"use strict";
	//# sourceMappingURL=observable_list_diff.js.map

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ng_class_1 = __webpack_require__(205);
	var ng_for_1 = __webpack_require__(206);
	var ng_if_1 = __webpack_require__(207);
	var ng_template_outlet_1 = __webpack_require__(208);
	var ng_style_1 = __webpack_require__(209);
	var ng_switch_1 = __webpack_require__(210);
	var ng_plural_1 = __webpack_require__(211);
	/**
	 * A collection of Angular core directives that are likely to be used in each and every Angular
	 * application.
	 *
	 * This collection can be used to quickly enumerate all the built-in directives in the `directives`
	 * property of the `@Component` annotation.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/yakGwpCdUkg0qfzX5m8g?p=preview))
	 *
	 * Instead of writing:
	 *
	 * ```typescript
	 * import {NgClass, NgIf, NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault} from '@angular/common';
	 * import {OtherDirective} from './myDirectives';
	 *
	 * @Component({
	 *   selector: 'my-component',
	 *   templateUrl: 'myComponent.html',
	 *   directives: [NgClass, NgIf, NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault, OtherDirective]
	 * })
	 * export class MyComponent {
	 *   ...
	 * }
	 * ```
	 * one could import all the core directives at once:
	 *
	 * ```typescript
	 * import {CORE_DIRECTIVES} from '@angular/common';
	 * import {OtherDirective} from './myDirectives';
	 *
	 * @Component({
	 *   selector: 'my-component',
	 *   templateUrl: 'myComponent.html',
	 *   directives: [CORE_DIRECTIVES, OtherDirective]
	 * })
	 * export class MyComponent {
	 *   ...
	 * }
	 * ```
	 */
	exports.CORE_DIRECTIVES = [
	    ng_class_1.NgClass,
	    ng_for_1.NgFor,
	    ng_if_1.NgIf,
	    ng_template_outlet_1.NgTemplateOutlet,
	    ng_style_1.NgStyle,
	    ng_switch_1.NgSwitch,
	    ng_switch_1.NgSwitchWhen,
	    ng_switch_1.NgSwitchDefault,
	    ng_plural_1.NgPlural,
	    ng_plural_1.NgPluralCase
	];
	//# sourceMappingURL=core_directives.js.map

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* @module
	* @description
	* This module is used for handling user input, by defining and building a {@link ControlGroup} that
	* consists of
	* {@link Control} objects, and mapping them onto the DOM. {@link Control} objects can then be used
	* to read information
	* from the form DOM elements.
	*
	* Forms providers are not included in default providers; you must import these providers
	* explicitly.
	*/
	var model_1 = __webpack_require__(215);
	exports.AbstractControl = model_1.AbstractControl;
	exports.Control = model_1.Control;
	exports.ControlGroup = model_1.ControlGroup;
	exports.ControlArray = model_1.ControlArray;
	var abstract_control_directive_1 = __webpack_require__(216);
	exports.AbstractControlDirective = abstract_control_directive_1.AbstractControlDirective;
	var control_container_1 = __webpack_require__(217);
	exports.ControlContainer = control_container_1.ControlContainer;
	var ng_control_name_1 = __webpack_require__(218);
	exports.NgControlName = ng_control_name_1.NgControlName;
	var ng_form_control_1 = __webpack_require__(229);
	exports.NgFormControl = ng_form_control_1.NgFormControl;
	var ng_model_1 = __webpack_require__(230);
	exports.NgModel = ng_model_1.NgModel;
	var ng_control_1 = __webpack_require__(219);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_group_1 = __webpack_require__(231);
	exports.NgControlGroup = ng_control_group_1.NgControlGroup;
	var ng_form_model_1 = __webpack_require__(232);
	exports.NgFormModel = ng_form_model_1.NgFormModel;
	var ng_form_1 = __webpack_require__(233);
	exports.NgForm = ng_form_1.NgForm;
	var control_value_accessor_1 = __webpack_require__(220);
	exports.NG_VALUE_ACCESSOR = control_value_accessor_1.NG_VALUE_ACCESSOR;
	var default_value_accessor_1 = __webpack_require__(223);
	exports.DefaultValueAccessor = default_value_accessor_1.DefaultValueAccessor;
	var ng_control_status_1 = __webpack_require__(234);
	exports.NgControlStatus = ng_control_status_1.NgControlStatus;
	var checkbox_value_accessor_1 = __webpack_require__(225);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_1.CheckboxControlValueAccessor;
	var select_control_value_accessor_1 = __webpack_require__(226);
	exports.NgSelectOption = select_control_value_accessor_1.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_1.SelectControlValueAccessor;
	var directives_1 = __webpack_require__(235);
	exports.FORM_DIRECTIVES = directives_1.FORM_DIRECTIVES;
	exports.RadioButtonState = directives_1.RadioButtonState;
	var validators_1 = __webpack_require__(222);
	exports.NG_VALIDATORS = validators_1.NG_VALIDATORS;
	exports.NG_ASYNC_VALIDATORS = validators_1.NG_ASYNC_VALIDATORS;
	exports.Validators = validators_1.Validators;
	var validators_2 = __webpack_require__(236);
	exports.RequiredValidator = validators_2.RequiredValidator;
	exports.MinLengthValidator = validators_2.MinLengthValidator;
	exports.MaxLengthValidator = validators_2.MaxLengthValidator;
	exports.PatternValidator = validators_2.PatternValidator;
	var form_builder_1 = __webpack_require__(237);
	exports.FormBuilder = form_builder_1.FormBuilder;
	var form_builder_2 = __webpack_require__(237);
	var radio_control_value_accessor_1 = __webpack_require__(227);
	/**
	 * Shorthand set of providers used for building Angular forms.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * bootstrap(MyApp, [FORM_PROVIDERS]);
	 * ```
	 */
	exports.FORM_PROVIDERS = [form_builder_2.FormBuilder, radio_control_value_accessor_1.RadioControlRegistry];
	/**
	 * See {@link FORM_PROVIDERS} instead.
	 *
	 * @deprecated
	 */
	exports.FORM_BINDINGS = exports.FORM_PROVIDERS;
	//# sourceMappingURL=forms.js.map

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(185);
	var async_1 = __webpack_require__(186);
	var promise_1 = __webpack_require__(187);
	var collection_1 = __webpack_require__(192);
	/**
	 * Indicates that a Control is valid, i.e. that no errors exist in the input value.
	 */
	exports.VALID = "VALID";
	/**
	 * Indicates that a Control is invalid, i.e. that an error exists in the input value.
	 */
	exports.INVALID = "INVALID";
	/**
	 * Indicates that a Control is pending, i.e. that async validation is occurring and
	 * errors are not yet available for the input value.
	 */
	exports.PENDING = "PENDING";
	function isControl(control) {
	    return control instanceof AbstractControl;
	}
	exports.isControl = isControl;
	function _find(control, path) {
	    if (lang_1.isBlank(path))
	        return null;
	    if (!(path instanceof Array)) {
	        path = path.split("/");
	    }
	    if (path instanceof Array && collection_1.ListWrapper.isEmpty(path))
	        return null;
	    return path
	        .reduce(function (v, name) {
	        if (v instanceof ControlGroup) {
	            return lang_1.isPresent(v.controls[name]) ? v.controls[name] : null;
	        }
	        else if (v instanceof ControlArray) {
	            var index = name;
	            return lang_1.isPresent(v.at(index)) ? v.at(index) : null;
	        }
	        else {
	            return null;
	        }
	    }, control);
	}
	function toObservable(r) {
	    return promise_1.PromiseWrapper.isPromise(r) ? async_1.ObservableWrapper.fromPromise(r) : r;
	}
	/**
	 *
	 */
	var AbstractControl = (function () {
	    function AbstractControl(validator, asyncValidator) {
	        this.validator = validator;
	        this.asyncValidator = asyncValidator;
	        this._pristine = true;
	        this._touched = false;
	    }
	    Object.defineProperty(AbstractControl.prototype, "value", {
	        get: function () { return this._value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "status", {
	        get: function () { return this._status; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valid", {
	        get: function () { return this._status === exports.VALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "errors", {
	        /**
	         * Returns the errors of this control.
	         */
	        get: function () { return this._errors; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pristine", {
	        get: function () { return this._pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "dirty", {
	        get: function () { return !this.pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "touched", {
	        get: function () { return this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "untouched", {
	        get: function () { return !this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	        get: function () { return this._valueChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	        get: function () { return this._statusChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pending", {
	        get: function () { return this._status == exports.PENDING; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControl.prototype.markAsTouched = function () { this._touched = true; };
	    AbstractControl.prototype.markAsDirty = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._pristine = false;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsDirty({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPending = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._status = exports.PENDING;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsPending({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	    AbstractControl.prototype.updateValueAndValidity = function (_a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._updateValue();
	        this._errors = this._runValidator();
	        this._status = this._calculateStatus();
	        if (this._status == exports.VALID || this._status == exports.PENDING) {
	            this._runAsyncValidator(emitEvent);
	        }
	        if (emitEvent) {
	            async_1.ObservableWrapper.callEmit(this._valueChanges, this._value);
	            async_1.ObservableWrapper.callEmit(this._statusChanges, this._status);
	        }
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        }
	    };
	    AbstractControl.prototype._runValidator = function () {
	        return lang_1.isPresent(this.validator) ? this.validator(this) : null;
	    };
	    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	        var _this = this;
	        if (lang_1.isPresent(this.asyncValidator)) {
	            this._status = exports.PENDING;
	            this._cancelExistingSubscription();
	            var obs = toObservable(this.asyncValidator(this));
	            this._asyncValidationSubscription = async_1.ObservableWrapper.subscribe(obs, function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); });
	        }
	    };
	    AbstractControl.prototype._cancelExistingSubscription = function () {
	        if (lang_1.isPresent(this._asyncValidationSubscription)) {
	            async_1.ObservableWrapper.dispose(this._asyncValidationSubscription);
	        }
	    };
	    /**
	     * Sets errors on a control.
	     *
	     * This is used when validations are run not automatically, but manually by the user.
	     *
	     * Calling `setErrors` will also update the validity of the parent control.
	     *
	     * ## Usage
	     *
	     * ```
	     * var login = new Control("someLogin");
	     * login.setErrors({
	     *   "notUnique": true
	     * });
	     *
	     * expect(login.valid).toEqual(false);
	     * expect(login.errors).toEqual({"notUnique": true});
	     *
	     * login.updateValue("someOtherLogin");
	     *
	     * expect(login.valid).toEqual(true);
	     * ```
	     */
	    AbstractControl.prototype.setErrors = function (errors, _a) {
	        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._errors = errors;
	        this._status = this._calculateStatus();
	        if (emitEvent) {
	            async_1.ObservableWrapper.callEmit(this._statusChanges, this._status);
	        }
	        if (lang_1.isPresent(this._parent)) {
	            this._parent._updateControlsErrors();
	        }
	    };
	    AbstractControl.prototype.find = function (path) { return _find(this, path); };
	    AbstractControl.prototype.getError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        var control = lang_1.isPresent(path) && !collection_1.ListWrapper.isEmpty(path) ? this.find(path) : this;
	        if (lang_1.isPresent(control) && lang_1.isPresent(control._errors)) {
	            return collection_1.StringMapWrapper.get(control._errors, errorCode);
	        }
	        else {
	            return null;
	        }
	    };
	    AbstractControl.prototype.hasError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        return lang_1.isPresent(this.getError(errorCode, path));
	    };
	    Object.defineProperty(AbstractControl.prototype, "root", {
	        get: function () {
	            var x = this;
	            while (lang_1.isPresent(x._parent)) {
	                x = x._parent;
	            }
	            return x;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    AbstractControl.prototype._updateControlsErrors = function () {
	        this._status = this._calculateStatus();
	        if (lang_1.isPresent(this._parent)) {
	            this._parent._updateControlsErrors();
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._initObservables = function () {
	        this._valueChanges = new async_1.EventEmitter();
	        this._statusChanges = new async_1.EventEmitter();
	    };
	    AbstractControl.prototype._calculateStatus = function () {
	        if (lang_1.isPresent(this._errors))
	            return exports.INVALID;
	        if (this._anyControlsHaveStatus(exports.PENDING))
	            return exports.PENDING;
	        if (this._anyControlsHaveStatus(exports.INVALID))
	            return exports.INVALID;
	        return exports.VALID;
	    };
	    return AbstractControl;
	}());
	exports.AbstractControl = AbstractControl;
	/**
	 * Defines a part of a form that cannot be divided into other controls. `Control`s have values and
	 * validation state, which is determined by an optional validation function.
	 *
	 * `Control` is one of the three fundamental building blocks used to define forms in Angular, along
	 * with {@link ControlGroup} and {@link ControlArray}.
	 *
	 * ## Usage
	 *
	 * By default, a `Control` is created for every `<input>` or other form component.
	 * With {@link NgFormControl} or {@link NgFormModel} an existing {@link Control} can be
	 * bound to a DOM element instead. This `Control` can be configured with a custom
	 * validation function.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 */
	var Control = (function (_super) {
	    __extends(Control, _super);
	    function Control(value, validator, asyncValidator) {
	        if (value === void 0) { value = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this._value = value;
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        this._initObservables();
	    }
	    /**
	     * Set the value of the control to `value`.
	     *
	     * If `onlySelf` is `true`, this change will only affect the validation of this `Control`
	     * and not its parent component. If `emitEvent` is `true`, this change will cause a
	     * `valueChanges` event on the `Control` to be emitted. Both of these options default to
	     * `false`.
	     *
	     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	     * specified.
	     */
	    Control.prototype.updateValue = function (value, _a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange;
	        emitModelToViewChange = lang_1.isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	        this._value = value;
	        if (lang_1.isPresent(this._onChange) && emitModelToViewChange)
	            this._onChange(this._value);
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * @internal
	     */
	    Control.prototype._updateValue = function () { };
	    /**
	     * @internal
	     */
	    Control.prototype._anyControlsHaveStatus = function (status) { return false; };
	    /**
	     * Register a listener for change events.
	     */
	    Control.prototype.registerOnChange = function (fn) { this._onChange = fn; };
	    return Control;
	}(AbstractControl));
	exports.Control = Control;
	/**
	 * Defines a part of a form, of fixed length, that can contain other controls.
	 *
	 * A `ControlGroup` aggregates the values of each {@link Control} in the group.
	 * The status of a `ControlGroup` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire group is invalid.
	 * Similarly, if a control changes its value, the entire group changes as well.
	 *
	 * `ControlGroup` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link Control} and {@link ControlArray}. {@link ControlArray} can also contain other
	 * controls, but is of variable length.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 */
	var ControlGroup = (function (_super) {
	    __extends(ControlGroup, _super);
	    function ControlGroup(controls, optionals, validator, asyncValidator) {
	        if (optionals === void 0) { optionals = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._optionals = lang_1.isPresent(optionals) ? optionals : {};
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Add a control to this group.
	     */
	    ControlGroup.prototype.addControl = function (name, control) {
	        this.controls[name] = control;
	        control.setParent(this);
	    };
	    /**
	     * Remove a control from this group.
	     */
	    ControlGroup.prototype.removeControl = function (name) { collection_1.StringMapWrapper.delete(this.controls, name); };
	    /**
	     * Mark the named control as non-optional.
	     */
	    ControlGroup.prototype.include = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, true);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as optional.
	     */
	    ControlGroup.prototype.exclude = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, false);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Check whether there is a control with the given name in the group.
	     */
	    ControlGroup.prototype.contains = function (controlName) {
	        var c = collection_1.StringMapWrapper.contains(this.controls, controlName);
	        return c && this._included(controlName);
	    };
	    /** @internal */
	    ControlGroup.prototype._setParentForControls = function () {
	        var _this = this;
	        collection_1.StringMapWrapper.forEach(this.controls, function (control, name) { control.setParent(_this); });
	    };
	    /** @internal */
	    ControlGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	    /** @internal */
	    ControlGroup.prototype._anyControlsHaveStatus = function (status) {
	        var _this = this;
	        var res = false;
	        collection_1.StringMapWrapper.forEach(this.controls, function (control, name) {
	            res = res || (_this.contains(name) && control.status == status);
	        });
	        return res;
	    };
	    /** @internal */
	    ControlGroup.prototype._reduceValue = function () {
	        return this._reduceChildren({}, function (acc, control, name) {
	            acc[name] = control.value;
	            return acc;
	        });
	    };
	    /** @internal */
	    ControlGroup.prototype._reduceChildren = function (initValue, fn) {
	        var _this = this;
	        var res = initValue;
	        collection_1.StringMapWrapper.forEach(this.controls, function (control, name) {
	            if (_this._included(name)) {
	                res = fn(res, control, name);
	            }
	        });
	        return res;
	    };
	    /** @internal */
	    ControlGroup.prototype._included = function (controlName) {
	        var isOptional = collection_1.StringMapWrapper.contains(this._optionals, controlName);
	        return !isOptional || collection_1.StringMapWrapper.get(this._optionals, controlName);
	    };
	    return ControlGroup;
	}(AbstractControl));
	exports.ControlGroup = ControlGroup;
	/**
	 * Defines a part of a form, of variable length, that can contain other controls.
	 *
	 * A `ControlArray` aggregates the values of each {@link Control} in the group.
	 * The status of a `ControlArray` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire array is invalid.
	 * Similarly, if a control changes its value, the entire array changes as well.
	 *
	 * `ControlArray` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link Control} and {@link ControlGroup}. {@link ControlGroup} can also contain
	 * other controls, but is of fixed length.
	 *
	 * ## Adding or removing controls
	 *
	 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	 * in `ControlArray` itself. These methods ensure the controls are properly tracked in the
	 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	 * the `ControlArray` directly, as that will result in strange and unexpected behavior such
	 * as broken change detection.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 */
	var ControlArray = (function (_super) {
	    __extends(ControlArray, _super);
	    function ControlArray(controls, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Get the {@link AbstractControl} at the given `index` in the array.
	     */
	    ControlArray.prototype.at = function (index) { return this.controls[index]; };
	    /**
	     * Insert a new {@link AbstractControl} at the end of the array.
	     */
	    ControlArray.prototype.push = function (control) {
	        this.controls.push(control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Insert a new {@link AbstractControl} at the given `index` in the array.
	     */
	    ControlArray.prototype.insert = function (index, control) {
	        collection_1.ListWrapper.insert(this.controls, index, control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove the control at the given `index` in the array.
	     */
	    ControlArray.prototype.removeAt = function (index) {
	        collection_1.ListWrapper.removeAt(this.controls, index);
	        this.updateValueAndValidity();
	    };
	    Object.defineProperty(ControlArray.prototype, "length", {
	        /**
	         * Length of the control array.
	         */
	        get: function () { return this.controls.length; },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    ControlArray.prototype._updateValue = function () { this._value = this.controls.map(function (control) { return control.value; }); };
	    /** @internal */
	    ControlArray.prototype._anyControlsHaveStatus = function (status) {
	        return this.controls.some(function (c) { return c.status == status; });
	    };
	    /** @internal */
	    ControlArray.prototype._setParentForControls = function () {
	        var _this = this;
	        this.controls.forEach(function (control) { control.setParent(_this); });
	    };
	    return ControlArray;
	}(AbstractControl));
	exports.ControlArray = ControlArray;
	//# sourceMappingURL=model.js.map

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(185);
	var exceptions_1 = __webpack_require__(189);
	/**
	 * Base class for control directives.
	 *
	 * Only used internally in the forms module.
	 */
	var AbstractControlDirective = (function () {
	    function AbstractControlDirective() {
	    }
	    Object.defineProperty(AbstractControlDirective.prototype, "control", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "value", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.value : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.valid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.errors : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pristine : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.dirty : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.touched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.untouched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "path", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return AbstractControlDirective;
	}());
	exports.AbstractControlDirective = AbstractControlDirective;
	//# sourceMappingURL=abstract_control_directive.js.map

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_control_directive_1 = __webpack_require__(216);
	/**
	 * A directive that contains multiple {@link NgControl}s.
	 *
	 * Only used by the forms module.
	 */
	var ControlContainer = (function (_super) {
	    __extends(ControlContainer, _super);
	    function ControlContainer() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(ControlContainer.prototype, "formDirective", {
	        /**
	         * Get the form to which this container belongs.
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ControlContainer.prototype, "path", {
	        /**
	         * Get the path to this container.
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return ControlContainer;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.ControlContainer = ControlContainer;
	//# sourceMappingURL=control_container.js.map

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var async_1 = __webpack_require__(186);
	var control_container_1 = __webpack_require__(217);
	var ng_control_1 = __webpack_require__(219);
	var control_value_accessor_1 = __webpack_require__(220);
	var shared_1 = __webpack_require__(221);
	var validators_1 = __webpack_require__(222);
	exports.controlNameBinding = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return NgControlName; })
	};
	var NgControlName = (function (_super) {
	    __extends(NgControlName, _super);
	    function NgControlName(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        /** @internal */
	        this.update = new async_1.EventEmitter();
	        this._added = false;
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    NgControlName.prototype.ngOnChanges = function (changes) {
	        if (!this._added) {
	            this.formDirective.addControl(this);
	            this._added = true;
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.viewModel = this.model;
	            this.formDirective.updateModel(this, this.model);
	        }
	    };
	    NgControlName.prototype.ngOnDestroy = function () { this.formDirective.removeControl(this); };
	    NgControlName.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        async_1.ObservableWrapper.callEmit(this.update, newValue);
	    };
	    Object.defineProperty(NgControlName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlName.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlName.prototype, "control", {
	        get: function () { return this.formDirective.getControl(this); },
	        enumerable: true,
	        configurable: true
	    });
	    NgControlName.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngControl]',
	                    bindings: [exports.controlNameBinding],
	                    inputs: ['name: ngControl', 'model: ngModel'],
	                    outputs: ['update: ngModelChange'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    NgControlName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    return NgControlName;
	}(ng_control_1.NgControl));
	exports.NgControlName = NgControlName;
	//# sourceMappingURL=ng_control_name.js.map

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(189);
	var abstract_control_directive_1 = __webpack_require__(216);
	/**
	 * A base class that all control directive extend.
	 * It binds a {@link Control} object to a DOM element.
	 *
	 * Used internally by Angular forms.
	 */
	var NgControl = (function (_super) {
	    __extends(NgControl, _super);
	    function NgControl() {
	        _super.apply(this, arguments);
	        this.name = null;
	        this.valueAccessor = null;
	    }
	    Object.defineProperty(NgControl.prototype, "validator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControl.prototype, "asyncValidator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return NgControl;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.NgControl = NgControl;
	//# sourceMappingURL=ng_control.js.map

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	/**
	 * Used to provide a {@link ControlValueAccessor} for form controls.
	 *
	 * See {@link DefaultValueAccessor} for how to implement one.
	 */
	exports.NG_VALUE_ACCESSOR = 
	/*@ts2dart_const*/ new core_1.OpaqueToken("NgValueAccessor");
	//# sourceMappingURL=control_value_accessor.js.map

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(192);
	var lang_1 = __webpack_require__(185);
	var exceptions_1 = __webpack_require__(189);
	var validators_1 = __webpack_require__(222);
	var default_value_accessor_1 = __webpack_require__(223);
	var number_value_accessor_1 = __webpack_require__(224);
	var checkbox_value_accessor_1 = __webpack_require__(225);
	var select_control_value_accessor_1 = __webpack_require__(226);
	var radio_control_value_accessor_1 = __webpack_require__(227);
	var normalize_validator_1 = __webpack_require__(228);
	function controlPath(name, parent) {
	    var p = collection_1.ListWrapper.clone(parent.path);
	    p.push(name);
	    return p;
	}
	exports.controlPath = controlPath;
	function setUpControl(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, "Cannot find control");
	    if (lang_1.isBlank(dir.valueAccessor))
	        _throwError(dir, "No value accessor for");
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    dir.valueAccessor.writeValue(control.value);
	    // view -> model
	    dir.valueAccessor.registerOnChange(function (newValue) {
	        dir.viewToModelUpdate(newValue);
	        control.updateValue(newValue, { emitModelToViewChange: false });
	        control.markAsDirty();
	    });
	    // model -> view
	    control.registerOnChange(function (newValue) { return dir.valueAccessor.writeValue(newValue); });
	    // touched
	    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	}
	exports.setUpControl = setUpControl;
	function setUpControlGroup(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, "Cannot find control");
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	}
	exports.setUpControlGroup = setUpControlGroup;
	function _throwError(dir, message) {
	    var path = dir.path.join(" -> ");
	    throw new exceptions_1.BaseException(message + " '" + path + "'");
	}
	function composeValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.compose(validators.map(normalize_validator_1.normalizeValidator)) : null;
	}
	exports.composeValidators = composeValidators;
	function composeAsyncValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.composeAsync(validators.map(normalize_validator_1.normalizeAsyncValidator)) :
	        null;
	}
	exports.composeAsyncValidators = composeAsyncValidators;
	function isPropertyUpdated(changes, viewModel) {
	    if (!collection_1.StringMapWrapper.contains(changes, "model"))
	        return false;
	    var change = changes["model"];
	    if (change.isFirstChange())
	        return true;
	    return !lang_1.looseIdentical(viewModel, change.currentValue);
	}
	exports.isPropertyUpdated = isPropertyUpdated;
	// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	function selectValueAccessor(dir, valueAccessors) {
	    if (lang_1.isBlank(valueAccessors))
	        return null;
	    var defaultAccessor;
	    var builtinAccessor;
	    var customAccessor;
	    valueAccessors.forEach(function (v) {
	        if (lang_1.hasConstructor(v, default_value_accessor_1.DefaultValueAccessor)) {
	            defaultAccessor = v;
	        }
	        else if (lang_1.hasConstructor(v, checkbox_value_accessor_1.CheckboxControlValueAccessor) ||
	            lang_1.hasConstructor(v, number_value_accessor_1.NumberValueAccessor) ||
	            lang_1.hasConstructor(v, select_control_value_accessor_1.SelectControlValueAccessor) ||
	            lang_1.hasConstructor(v, radio_control_value_accessor_1.RadioControlValueAccessor)) {
	            if (lang_1.isPresent(builtinAccessor))
	                _throwError(dir, "More than one built-in value accessor matches");
	            builtinAccessor = v;
	        }
	        else {
	            if (lang_1.isPresent(customAccessor))
	                _throwError(dir, "More than one custom value accessor matches");
	            customAccessor = v;
	        }
	    });
	    if (lang_1.isPresent(customAccessor))
	        return customAccessor;
	    if (lang_1.isPresent(builtinAccessor))
	        return builtinAccessor;
	    if (lang_1.isPresent(defaultAccessor))
	        return defaultAccessor;
	    _throwError(dir, "No valid value accessor for");
	    return null;
	}
	exports.selectValueAccessor = selectValueAccessor;
	//# sourceMappingURL=shared.js.map

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var promise_1 = __webpack_require__(187);
	var async_1 = __webpack_require__(186);
	var collection_1 = __webpack_require__(192);
	/**
	 * Providers for validators to be used for {@link Control}s in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * ### Example
	 *
	 * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	 */
	exports.NG_VALIDATORS = new core_1.OpaqueToken("NgValidators");
	/**
	 * Providers for asynchronous validators to be used for {@link Control}s
	 * in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * See {@link NG_VALIDATORS} for more details.
	 */
	exports.NG_ASYNC_VALIDATORS = 
	/*@ts2dart_const*/ new core_1.OpaqueToken("NgAsyncValidators");
	/**
	 * Provides a set of validators used by form controls.
	 *
	 * A validator is a function that processes a {@link Control} or collection of
	 * controls and returns a map of errors. A null map means that validation has passed.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * var loginControl = new Control("", Validators.required)
	 * ```
	 */
	var Validators = (function () {
	    function Validators() {
	    }
	    /**
	     * Validator that requires controls to have a non-empty value.
	     */
	    Validators.required = function (control) {
	        return lang_1.isBlank(control.value) || (lang_1.isString(control.value) && control.value == "") ?
	            { "required": true } :
	            null;
	    };
	    /**
	     * Validator that requires controls to have a value of a minimum length.
	     */
	    Validators.minLength = function (minLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length < minLength ?
	                { "minlength": { "requiredLength": minLength, "actualLength": v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a value of a maximum length.
	     */
	    Validators.maxLength = function (maxLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length > maxLength ?
	                { "maxlength": { "requiredLength": maxLength, "actualLength": v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires a control to match a regex to its value.
	     */
	    Validators.pattern = function (pattern) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var regex = new RegExp("^" + pattern + "$");
	            var v = control.value;
	            return regex.test(v) ? null :
	                { "pattern": { "requiredPattern": "^" + pattern + "$", "actualValue": v } };
	        };
	    };
	    /**
	     * No-op validator.
	     */
	    Validators.nullValidator = function (c) { return null; };
	    /**
	     * Compose multiple validators into a single function that returns the union
	     * of the individual error maps.
	     */
	    Validators.compose = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            return _mergeErrors(_executeValidators(control, presentValidators));
	        };
	    };
	    Validators.composeAsync = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	            return promise_1.PromiseWrapper.all(promises).then(_mergeErrors);
	        };
	    };
	    return Validators;
	}());
	exports.Validators = Validators;
	function _convertToPromise(obj) {
	    return promise_1.PromiseWrapper.isPromise(obj) ? obj : async_1.ObservableWrapper.toPromise(obj);
	}
	function _executeValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _executeAsyncValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _mergeErrors(arrayOfErrors) {
	    var res = arrayOfErrors.reduce(function (res, errors) {
	        return lang_1.isPresent(errors) ? collection_1.StringMapWrapper.merge(res, errors) : res;
	    }, {});
	    return collection_1.StringMapWrapper.isEmpty(res) ? null : res;
	}
	//# sourceMappingURL=validators.js.map

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var control_value_accessor_1 = __webpack_require__(220);
	exports.DEFAULT_VALUE_ACCESSOR = 
	/* @ts2dart_Provider */ {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return DefaultValueAccessor; }),
	    multi: true
	};
	var DefaultValueAccessor = (function () {
	    function DefaultValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    DefaultValueAccessor.prototype.writeValue = function (value) {
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    DefaultValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input:not([type=checkbox])[ngControl],textarea[ngControl],input:not([type=checkbox])[ngFormControl],textarea[ngFormControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                    // TODO: vsavkin replace the above selector with the one below it once
	                    // https://github.com/angular/angular/issues/3011 is implemented
	                    // selector: '[ngControl],[ngModel],[ngFormControl]',
	                    host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    bindings: [exports.DEFAULT_VALUE_ACCESSOR]
	                },] },
	    ];
	    DefaultValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return DefaultValueAccessor;
	}());
	exports.DefaultValueAccessor = DefaultValueAccessor;
	//# sourceMappingURL=default_value_accessor.js.map

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var control_value_accessor_1 = __webpack_require__(220);
	exports.NUMBER_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NumberValueAccessor; }),
	    multi: true
	};
	var NumberValueAccessor = (function () {
	    function NumberValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    NumberValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
	    };
	    NumberValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : lang_1.NumberWrapper.parseFloat(value)); };
	    };
	    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    NumberValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=number][ngControl],input[type=number][ngFormControl],input[type=number][ngModel]',
	                    host: {
	                        '(change)': 'onChange($event.target.value)',
	                        '(input)': 'onChange($event.target.value)',
	                        '(blur)': 'onTouched()'
	                    },
	                    bindings: [exports.NUMBER_VALUE_ACCESSOR]
	                },] },
	    ];
	    NumberValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return NumberValueAccessor;
	}());
	exports.NumberValueAccessor = NumberValueAccessor;
	//# sourceMappingURL=number_value_accessor.js.map

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var control_value_accessor_1 = __webpack_require__(220);
	exports.CHECKBOX_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return CheckboxControlValueAccessor; }),
	    multi: true
	};
	var CheckboxControlValueAccessor = (function () {
	    function CheckboxControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	    };
	    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    CheckboxControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=checkbox][ngControl],input[type=checkbox][ngFormControl],input[type=checkbox][ngModel]',
	                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                    providers: [exports.CHECKBOX_VALUE_ACCESSOR]
	                },] },
	    ];
	    CheckboxControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return CheckboxControlValueAccessor;
	}());
	exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	//# sourceMappingURL=checkbox_value_accessor.js.map

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var collection_1 = __webpack_require__(192);
	var control_value_accessor_1 = __webpack_require__(220);
	exports.SELECT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (!lang_1.isPrimitive(value))
	        value = "Object";
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(":")[0];
	}
	var SelectControlValueAccessor = (function () {
	    function SelectControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectControlValueAccessor.prototype.writeValue = function (value) {
	        this.value = value;
	        var valueString = _buildValueString(this._getOptionId(value), value);
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	    };
	    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (valueString) { fn(_this._getOptionValue(valueString)); };
	    };
	    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id), value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var value = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(value) ? value : valueString;
	    };
	    SelectControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select[ngControl],select[ngFormControl],select[ngModel]',
	                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_VALUE_ACCESSOR]
	                },] },
	    ];
	    SelectControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return SelectControlValueAccessor;
	}());
	exports.SelectControlValueAccessor = SelectControlValueAccessor;
	var NgSelectOption = (function () {
	    function NgSelectOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select))
	            this.id = this._select._registerOption();
	    }
	    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._select._optionMap.set(this.id, value);
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectOption.prototype, "value", {
	        set: function (value) {
	            this._setElementValue(value);
	            if (lang_1.isPresent(this._select))
	                this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    NgSelectOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    NgSelectOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    NgSelectOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    NgSelectOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectOption;
	}());
	exports.NgSelectOption = NgSelectOption;
	//# sourceMappingURL=select_control_value_accessor.js.map

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var collection_1 = __webpack_require__(192);
	var control_value_accessor_1 = __webpack_require__(220);
	var ng_control_1 = __webpack_require__(219);
	exports.RADIO_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return RadioControlValueAccessor; }),
	    multi: true
	};
	var RadioControlRegistry = (function () {
	    function RadioControlRegistry() {
	        this._accessors = [];
	    }
	    RadioControlRegistry.prototype.add = function (control, accessor) {
	        this._accessors.push([control, accessor]);
	    };
	    RadioControlRegistry.prototype.remove = function (accessor) {
	        var indexToRemove = -1;
	        for (var i = 0; i < this._accessors.length; ++i) {
	            if (this._accessors[i][1] === accessor) {
	                indexToRemove = i;
	            }
	        }
	        collection_1.ListWrapper.removeAt(this._accessors, indexToRemove);
	    };
	    RadioControlRegistry.prototype.select = function (accessor) {
	        this._accessors.forEach(function (c) {
	            if (c[0].control.root === accessor._control.control.root && c[1] !== accessor) {
	                c[1].fireUncheck();
	            }
	        });
	    };
	    RadioControlRegistry.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return RadioControlRegistry;
	}());
	exports.RadioControlRegistry = RadioControlRegistry;
	/**
	 * The value provided by the forms API for radio buttons.
	 */
	var RadioButtonState = (function () {
	    function RadioButtonState(checked, value) {
	        this.checked = checked;
	        this.value = value;
	    }
	    return RadioButtonState;
	}());
	exports.RadioButtonState = RadioButtonState;
	var RadioControlValueAccessor = (function () {
	    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this._registry = _registry;
	        this._injector = _injector;
	        this.onChange = function () { };
	        this.onTouched = function () { };
	    }
	    RadioControlValueAccessor.prototype.ngOnInit = function () {
	        this._control = this._injector.get(ng_control_1.NgControl);
	        this._registry.add(this._control, this);
	    };
	    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	    RadioControlValueAccessor.prototype.writeValue = function (value) {
	        this._state = value;
	        if (lang_1.isPresent(value) && value.checked) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', true);
	        }
	    };
	    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this._fn = fn;
	        this.onChange = function () {
	            fn(new RadioButtonState(true, _this._state.value));
	            _this._registry.select(_this);
	        };
	    };
	    RadioControlValueAccessor.prototype.fireUncheck = function () { this._fn(new RadioButtonState(false, this._state.value)); };
	    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    RadioControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=radio][ngControl],input[type=radio][ngFormControl],input[type=radio][ngModel]',
	                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                    providers: [exports.RADIO_VALUE_ACCESSOR]
	                },] },
	    ];
	    RadioControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	        { type: RadioControlRegistry, },
	        { type: core_1.Injector, },
	    ];
	    RadioControlValueAccessor.propDecorators = {
	        'name': [{ type: core_1.Input },],
	    };
	    return RadioControlValueAccessor;
	}());
	exports.RadioControlValueAccessor = RadioControlValueAccessor;
	//# sourceMappingURL=radio_control_value_accessor.js.map

/***/ },
/* 228 */
/***/ function(module, exports) {

	"use strict";
	function normalizeValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeValidator = normalizeValidator;
	function normalizeAsyncValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return Promise.resolve(validator.validate(c)); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeAsyncValidator = normalizeAsyncValidator;
	//# sourceMappingURL=normalize_validator.js.map

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var collection_1 = __webpack_require__(192);
	var async_1 = __webpack_require__(186);
	var ng_control_1 = __webpack_require__(219);
	var validators_1 = __webpack_require__(222);
	var control_value_accessor_1 = __webpack_require__(220);
	var shared_1 = __webpack_require__(221);
	exports.formControlBinding = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return NgFormControl; })
	};
	var NgFormControl = (function (_super) {
	    __extends(NgFormControl, _super);
	    function NgFormControl(_validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    NgFormControl.prototype.ngOnChanges = function (changes) {
	        if (this._isControlChanged(changes)) {
	            shared_1.setUpControl(this.form, this);
	            this.form.updateValueAndValidity({ emitEvent: false });
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.form.updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    Object.defineProperty(NgFormControl.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgFormControl.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgFormControl.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgFormControl.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    NgFormControl.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        async_1.ObservableWrapper.callEmit(this.update, newValue);
	    };
	    NgFormControl.prototype._isControlChanged = function (changes) {
	        return collection_1.StringMapWrapper.contains(changes, "form");
	    };
	    NgFormControl.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngFormControl]',
	                    bindings: [exports.formControlBinding],
	                    inputs: ['form: ngFormControl', 'model: ngModel'],
	                    outputs: ['update: ngModelChange'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    NgFormControl.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    return NgFormControl;
	}(ng_control_1.NgControl));
	exports.NgFormControl = NgFormControl;
	//# sourceMappingURL=ng_form_control.js.map

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var async_1 = __webpack_require__(186);
	var control_value_accessor_1 = __webpack_require__(220);
	var ng_control_1 = __webpack_require__(219);
	var model_1 = __webpack_require__(215);
	var validators_1 = __webpack_require__(222);
	var shared_1 = __webpack_require__(221);
	exports.formControlBinding = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return NgModel; })
	};
	var NgModel = (function (_super) {
	    __extends(NgModel, _super);
	    function NgModel(_validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        /** @internal */
	        this._control = new model_1.Control();
	        /** @internal */
	        this._added = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    NgModel.prototype.ngOnChanges = function (changes) {
	        if (!this._added) {
	            shared_1.setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	            this._added = true;
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this._control.updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    Object.defineProperty(NgModel.prototype, "control", {
	        get: function () { return this._control; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    NgModel.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        async_1.ObservableWrapper.callEmit(this.update, newValue);
	    };
	    NgModel.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngModel]:not([ngControl]):not([ngFormControl])',
	                    bindings: [exports.formControlBinding],
	                    inputs: ['model: ngModel'],
	                    outputs: ['update: ngModelChange'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    NgModel.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    return NgModel;
	}(ng_control_1.NgControl));
	exports.NgModel = NgModel;
	//# sourceMappingURL=ng_model.js.map

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var control_container_1 = __webpack_require__(217);
	var shared_1 = __webpack_require__(221);
	var validators_1 = __webpack_require__(222);
	exports.controlGroupProvider = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgControlGroup; })
	};
	var NgControlGroup = (function (_super) {
	    __extends(NgControlGroup, _super);
	    function NgControlGroup(parent, _validators, _asyncValidators) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._parent = parent;
	    }
	    NgControlGroup.prototype.ngOnInit = function () { this.formDirective.addControlGroup(this); };
	    NgControlGroup.prototype.ngOnDestroy = function () { this.formDirective.removeControlGroup(this); };
	    Object.defineProperty(NgControlGroup.prototype, "control", {
	        /**
	         * Get the {@link ControlGroup} backing this binding.
	         */
	        get: function () { return this.formDirective.getControlGroup(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlGroup.prototype, "path", {
	        /**
	         * Get the path to this control group.
	         */
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlGroup.prototype, "formDirective", {
	        /**
	         * Get the {@link Form} to which this group belongs.
	         */
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlGroup.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlGroup.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    NgControlGroup.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngControlGroup]',
	                    providers: [exports.controlGroupProvider],
	                    inputs: ['name: ngControlGroup'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    NgControlGroup.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    return NgControlGroup;
	}(control_container_1.ControlContainer));
	exports.NgControlGroup = NgControlGroup;
	//# sourceMappingURL=ng_control_group.js.map

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var collection_1 = __webpack_require__(192);
	var exceptions_1 = __webpack_require__(189);
	var async_1 = __webpack_require__(186);
	var control_container_1 = __webpack_require__(217);
	var shared_1 = __webpack_require__(221);
	var validators_1 = __webpack_require__(222);
	exports.formDirectiveProvider = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgFormModel; })
	};
	var NgFormModel = (function (_super) {
	    __extends(NgFormModel, _super);
	    function NgFormModel(_validators, _asyncValidators) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this.form = null;
	        this.directives = [];
	        this.ngSubmit = new async_1.EventEmitter();
	    }
	    NgFormModel.prototype.ngOnChanges = function (changes) {
	        this._checkFormPresent();
	        if (collection_1.StringMapWrapper.contains(changes, "form")) {
	            var sync = shared_1.composeValidators(this._validators);
	            this.form.validator = validators_1.Validators.compose([this.form.validator, sync]);
	            var async = shared_1.composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = validators_1.Validators.composeAsync([this.form.asyncValidator, async]);
	            this.form.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        this._updateDomValue();
	    };
	    Object.defineProperty(NgFormModel.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgFormModel.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgFormModel.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    NgFormModel.prototype.addControl = function (dir) {
	        var ctrl = this.form.find(dir.path);
	        shared_1.setUpControl(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	        this.directives.push(dir);
	    };
	    NgFormModel.prototype.getControl = function (dir) { return this.form.find(dir.path); };
	    NgFormModel.prototype.removeControl = function (dir) { collection_1.ListWrapper.remove(this.directives, dir); };
	    NgFormModel.prototype.addControlGroup = function (dir) {
	        var ctrl = this.form.find(dir.path);
	        shared_1.setUpControlGroup(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    NgFormModel.prototype.removeControlGroup = function (dir) { };
	    NgFormModel.prototype.getControlGroup = function (dir) {
	        return this.form.find(dir.path);
	    };
	    NgFormModel.prototype.updateModel = function (dir, value) {
	        var ctrl = this.form.find(dir.path);
	        ctrl.updateValue(value);
	    };
	    NgFormModel.prototype.onSubmit = function () {
	        async_1.ObservableWrapper.callEmit(this.ngSubmit, null);
	        return false;
	    };
	    /** @internal */
	    NgFormModel.prototype._updateDomValue = function () {
	        var _this = this;
	        this.directives.forEach(function (dir) {
	            var ctrl = _this.form.find(dir.path);
	            dir.valueAccessor.writeValue(ctrl.value);
	        });
	    };
	    NgFormModel.prototype._checkFormPresent = function () {
	        if (lang_1.isBlank(this.form)) {
	            throw new exceptions_1.BaseException("ngFormModel expects a form. Please pass one in. Example: <form [ngFormModel]=\"myCoolForm\">");
	        }
	    };
	    NgFormModel.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngFormModel]',
	                    bindings: [exports.formDirectiveProvider],
	                    inputs: ['form: ngFormModel'],
	                    host: { '(submit)': 'onSubmit()' },
	                    outputs: ['ngSubmit'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    NgFormModel.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    return NgFormModel;
	}(control_container_1.ControlContainer));
	exports.NgFormModel = NgFormModel;
	//# sourceMappingURL=ng_form_model.js.map

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var async_1 = __webpack_require__(186);
	var collection_1 = __webpack_require__(192);
	var lang_1 = __webpack_require__(185);
	var control_container_1 = __webpack_require__(217);
	var model_1 = __webpack_require__(215);
	var shared_1 = __webpack_require__(221);
	var validators_1 = __webpack_require__(222);
	exports.formDirectiveProvider = 
	/*@ts2dart_const*/ { provide: control_container_1.ControlContainer, useExisting: core_1.forwardRef(function () { return NgForm; }) };
	var NgForm = (function (_super) {
	    __extends(NgForm, _super);
	    function NgForm(validators, asyncValidators) {
	        _super.call(this);
	        this.ngSubmit = new async_1.EventEmitter();
	        this.form = new model_1.ControlGroup({}, null, shared_1.composeValidators(validators), shared_1.composeAsyncValidators(asyncValidators));
	    }
	    Object.defineProperty(NgForm.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "controls", {
	        get: function () { return this.form.controls; },
	        enumerable: true,
	        configurable: true
	    });
	    NgForm.prototype.addControl = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            var ctrl = new model_1.Control();
	            shared_1.setUpControl(ctrl, dir);
	            container.addControl(dir.name, ctrl);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.getControl = function (dir) { return this.form.find(dir.path); };
	    NgForm.prototype.removeControl = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	                container.updateValueAndValidity({ emitEvent: false });
	            }
	        });
	    };
	    NgForm.prototype.addControlGroup = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            var group = new model_1.ControlGroup({});
	            shared_1.setUpControlGroup(group, dir);
	            container.addControl(dir.name, group);
	            group.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.removeControlGroup = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	                container.updateValueAndValidity({ emitEvent: false });
	            }
	        });
	    };
	    NgForm.prototype.getControlGroup = function (dir) {
	        return this.form.find(dir.path);
	    };
	    NgForm.prototype.updateModel = function (dir, value) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var ctrl = _this.form.find(dir.path);
	            ctrl.updateValue(value);
	        });
	    };
	    NgForm.prototype.onSubmit = function () {
	        async_1.ObservableWrapper.callEmit(this.ngSubmit, null);
	        return false;
	    };
	    /** @internal */
	    NgForm.prototype._findContainer = function (path) {
	        path.pop();
	        return collection_1.ListWrapper.isEmpty(path) ? this.form : this.form.find(path);
	    };
	    NgForm.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'form:not([ngNoForm]):not([ngFormModel]),ngForm,[ngForm]',
	                    bindings: [exports.formDirectiveProvider],
	                    host: {
	                        '(submit)': 'onSubmit()',
	                    },
	                    outputs: ['ngSubmit'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    NgForm.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    return NgForm;
	}(control_container_1.ControlContainer));
	exports.NgForm = NgForm;
	//# sourceMappingURL=ng_form.js.map

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var ng_control_1 = __webpack_require__(219);
	var lang_1 = __webpack_require__(185);
	var NgControlStatus = (function () {
	    function NgControlStatus(cd) {
	        this._cd = cd;
	    }
	    Object.defineProperty(NgControlStatus.prototype, "ngClassUntouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.untouched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassTouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.touched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassPristine", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.pristine : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassDirty", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.dirty : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassValid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassInvalid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? !this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgControlStatus.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngControl],[ngModel],[ngFormControl]',
	                    host: {
	                        '[class.ng-untouched]': 'ngClassUntouched',
	                        '[class.ng-touched]': 'ngClassTouched',
	                        '[class.ng-pristine]': 'ngClassPristine',
	                        '[class.ng-dirty]': 'ngClassDirty',
	                        '[class.ng-valid]': 'ngClassValid',
	                        '[class.ng-invalid]': 'ngClassInvalid'
	                    }
	                },] },
	    ];
	    NgControlStatus.ctorParameters = [
	        { type: ng_control_1.NgControl, decorators: [{ type: core_1.Self },] },
	    ];
	    return NgControlStatus;
	}());
	exports.NgControlStatus = NgControlStatus;
	//# sourceMappingURL=ng_control_status.js.map

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ng_control_name_1 = __webpack_require__(218);
	var ng_form_control_1 = __webpack_require__(229);
	var ng_model_1 = __webpack_require__(230);
	var ng_control_group_1 = __webpack_require__(231);
	var ng_form_model_1 = __webpack_require__(232);
	var ng_form_1 = __webpack_require__(233);
	var default_value_accessor_1 = __webpack_require__(223);
	var checkbox_value_accessor_1 = __webpack_require__(225);
	var number_value_accessor_1 = __webpack_require__(224);
	var radio_control_value_accessor_1 = __webpack_require__(227);
	var ng_control_status_1 = __webpack_require__(234);
	var select_control_value_accessor_1 = __webpack_require__(226);
	var validators_1 = __webpack_require__(236);
	var ng_control_name_2 = __webpack_require__(218);
	exports.NgControlName = ng_control_name_2.NgControlName;
	var ng_form_control_2 = __webpack_require__(229);
	exports.NgFormControl = ng_form_control_2.NgFormControl;
	var ng_model_2 = __webpack_require__(230);
	exports.NgModel = ng_model_2.NgModel;
	var ng_control_group_2 = __webpack_require__(231);
	exports.NgControlGroup = ng_control_group_2.NgControlGroup;
	var ng_form_model_2 = __webpack_require__(232);
	exports.NgFormModel = ng_form_model_2.NgFormModel;
	var ng_form_2 = __webpack_require__(233);
	exports.NgForm = ng_form_2.NgForm;
	var default_value_accessor_2 = __webpack_require__(223);
	exports.DefaultValueAccessor = default_value_accessor_2.DefaultValueAccessor;
	var checkbox_value_accessor_2 = __webpack_require__(225);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_2.CheckboxControlValueAccessor;
	var radio_control_value_accessor_2 = __webpack_require__(227);
	exports.RadioControlValueAccessor = radio_control_value_accessor_2.RadioControlValueAccessor;
	exports.RadioButtonState = radio_control_value_accessor_2.RadioButtonState;
	var number_value_accessor_2 = __webpack_require__(224);
	exports.NumberValueAccessor = number_value_accessor_2.NumberValueAccessor;
	var ng_control_status_2 = __webpack_require__(234);
	exports.NgControlStatus = ng_control_status_2.NgControlStatus;
	var select_control_value_accessor_2 = __webpack_require__(226);
	exports.SelectControlValueAccessor = select_control_value_accessor_2.SelectControlValueAccessor;
	exports.NgSelectOption = select_control_value_accessor_2.NgSelectOption;
	var validators_2 = __webpack_require__(236);
	exports.RequiredValidator = validators_2.RequiredValidator;
	exports.MinLengthValidator = validators_2.MinLengthValidator;
	exports.MaxLengthValidator = validators_2.MaxLengthValidator;
	exports.PatternValidator = validators_2.PatternValidator;
	var ng_control_1 = __webpack_require__(219);
	exports.NgControl = ng_control_1.NgControl;
	/**
	 *
	 * A list of all the form directives used as part of a `@Component` annotation.
	 *
	 *  This is a shorthand for importing them each individually.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'my-app',
	 *   directives: [FORM_DIRECTIVES]
	 * })
	 * class MyApp {}
	 * ```
	 */
	exports.FORM_DIRECTIVES = [
	    ng_control_name_1.NgControlName,
	    ng_control_group_1.NgControlGroup,
	    ng_form_control_1.NgFormControl,
	    ng_model_1.NgModel,
	    ng_form_model_1.NgFormModel,
	    ng_form_1.NgForm,
	    select_control_value_accessor_1.NgSelectOption,
	    default_value_accessor_1.DefaultValueAccessor,
	    number_value_accessor_1.NumberValueAccessor,
	    checkbox_value_accessor_1.CheckboxControlValueAccessor,
	    select_control_value_accessor_1.SelectControlValueAccessor,
	    radio_control_value_accessor_1.RadioControlValueAccessor,
	    ng_control_status_1.NgControlStatus,
	    validators_1.RequiredValidator,
	    validators_1.MinLengthValidator,
	    validators_1.MaxLengthValidator,
	    validators_1.PatternValidator
	];
	//# sourceMappingURL=directives.js.map

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var validators_1 = __webpack_require__(222);
	var REQUIRED = validators_1.Validators.required;
	exports.REQUIRED_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useValue: REQUIRED,
	    multi: true
	};
	var RequiredValidator = (function () {
	    function RequiredValidator() {
	    }
	    RequiredValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[required][ngControl],[required][ngFormControl],[required][ngModel]',
	                    providers: [exports.REQUIRED_VALIDATOR]
	                },] },
	    ];
	    return RequiredValidator;
	}());
	exports.RequiredValidator = RequiredValidator;
	/**
	 * Provivder which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='min'}
	 */
	exports.MIN_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MinLengthValidator; }),
	    multi: true
	};
	var MinLengthValidator = (function () {
	    function MinLengthValidator(minLength) {
	        this._validator = validators_1.Validators.minLength(lang_1.NumberWrapper.parseInt(minLength, 10));
	    }
	    MinLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    MinLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[minlength][ngControl],[minlength][ngFormControl],[minlength][ngModel]',
	                    providers: [exports.MIN_LENGTH_VALIDATOR]
	                },] },
	    ];
	    MinLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ["minlength",] },] },
	    ];
	    return MinLengthValidator;
	}());
	exports.MinLengthValidator = MinLengthValidator;
	/**
	 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='max'}
	 */
	exports.MAX_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MaxLengthValidator; }),
	    multi: true
	};
	var MaxLengthValidator = (function () {
	    function MaxLengthValidator(maxLength) {
	        this._validator = validators_1.Validators.maxLength(lang_1.NumberWrapper.parseInt(maxLength, 10));
	    }
	    MaxLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    MaxLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[maxlength][ngControl],[maxlength][ngFormControl],[maxlength][ngModel]',
	                    providers: [exports.MAX_LENGTH_VALIDATOR]
	                },] },
	    ];
	    MaxLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ["maxlength",] },] },
	    ];
	    return MaxLengthValidator;
	}());
	exports.MaxLengthValidator = MaxLengthValidator;
	/**
	 * A Directive that adds the `pattern` validator to any controls marked with the
	 * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	 * as the regex to validate Control value against.  Follows pattern attribute
	 * semantics; i.e. regex must match entire Control value.
	 *
	 * ### Example
	 *
	 * ```
	 * <input [ngControl]="fullName" pattern="[a-zA-Z ]*">
	 * ```
	 */
	exports.PATTERN_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return PatternValidator; }),
	    multi: true
	};
	var PatternValidator = (function () {
	    function PatternValidator(pattern) {
	        this._validator = validators_1.Validators.pattern(pattern);
	    }
	    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	    PatternValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[pattern][ngControl],[pattern][ngFormControl],[pattern][ngModel]',
	                    providers: [exports.PATTERN_VALIDATOR]
	                },] },
	    ];
	    PatternValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ["pattern",] },] },
	    ];
	    return PatternValidator;
	}());
	exports.PatternValidator = PatternValidator;
	//# sourceMappingURL=validators.js.map

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var collection_1 = __webpack_require__(192);
	var lang_1 = __webpack_require__(185);
	var modelModule = __webpack_require__(215);
	var FormBuilder = (function () {
	    function FormBuilder() {
	    }
	    /**
	     * Construct a new {@link ControlGroup} with the given map of configuration.
	     * Valid keys for the `extra` parameter map are `optionals` and `validator`.
	     *
	     * See the {@link ControlGroup} constructor for more details.
	     */
	    FormBuilder.prototype.group = function (controlsConfig, extra) {
	        if (extra === void 0) { extra = null; }
	        var controls = this._reduceControls(controlsConfig);
	        var optionals = (lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, "optionals") : null);
	        var validator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, "validator") : null;
	        var asyncValidator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, "asyncValidator") : null;
	        return new modelModule.ControlGroup(controls, optionals, validator, asyncValidator);
	    };
	    /**
	     * Construct a new {@link Control} with the given `value`,`validator`, and `asyncValidator`.
	     */
	    FormBuilder.prototype.control = function (value, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        return new modelModule.Control(value, validator, asyncValidator);
	    };
	    /**
	     * Construct an array of {@link Control}s from the given `controlsConfig` array of
	     * configuration, with the given optional `validator` and `asyncValidator`.
	     */
	    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	        var _this = this;
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	        return new modelModule.ControlArray(controls, validator, asyncValidator);
	    };
	    /** @internal */
	    FormBuilder.prototype._reduceControls = function (controlsConfig) {
	        var _this = this;
	        var controls = {};
	        collection_1.StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	            controls[controlName] = _this._createControl(controlConfig);
	        });
	        return controls;
	    };
	    /** @internal */
	    FormBuilder.prototype._createControl = function (controlConfig) {
	        if (controlConfig instanceof modelModule.Control ||
	            controlConfig instanceof modelModule.ControlGroup ||
	            controlConfig instanceof modelModule.ControlArray) {
	            return controlConfig;
	        }
	        else if (lang_1.isArray(controlConfig)) {
	            var value = controlConfig[0];
	            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	            return this.control(value, validator, asyncValidator);
	        }
	        else {
	            return this.control(controlConfig);
	        }
	    };
	    FormBuilder.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return FormBuilder;
	}());
	exports.FormBuilder = FormBuilder;
	//# sourceMappingURL=form_builder.js.map

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var forms_1 = __webpack_require__(214);
	var directives_1 = __webpack_require__(204);
	/**
	 * A collection of Angular core directives that are likely to be used in each and every Angular
	 * application. This includes core directives (e.g., NgIf and NgFor), and forms directives (e.g.,
	 * NgModel).
	 *
	 * This collection can be used to quickly enumerate all the built-in directives in the `directives`
	 * property of the `@Component` decorator.
	 *
	 * ### Example
	 *
	 * Instead of writing:
	 *
	 * ```typescript
	 * import {NgClass, NgIf, NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault, NgModel, NgForm} from
	 * '@angular/common';
	 * import {OtherDirective} from './myDirectives';
	 *
	 * @Component({
	 *   selector: 'my-component',
	 *   templateUrl: 'myComponent.html',
	 *   directives: [NgClass, NgIf, NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault, NgModel, NgForm,
	 * OtherDirective]
	 * })
	 * export class MyComponent {
	 *   ...
	 * }
	 * ```
	 * one could import all the common directives at once:
	 *
	 * ```typescript
	 * import {COMMON_DIRECTIVES} from '@angular/common';
	 * import {OtherDirective} from './myDirectives';
	 *
	 * @Component({
	 *   selector: 'my-component',
	 *   templateUrl: 'myComponent.html',
	 *   directives: [COMMON_DIRECTIVES, OtherDirective]
	 * })
	 * export class MyComponent {
	 *   ...
	 * }
	 * ```
	 */
	exports.COMMON_DIRECTIVES = [directives_1.CORE_DIRECTIVES, forms_1.FORM_DIRECTIVES];
	//# sourceMappingURL=common_directives.js.map

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(240));
	__export(__webpack_require__(241));
	__export(__webpack_require__(242));
	__export(__webpack_require__(244));
	__export(__webpack_require__(243));
	//# sourceMappingURL=location.js.map

/***/ },
/* 240 */
/***/ function(module, exports) {

	"use strict";
	/**
	* This class should not be used directly by an application developer. Instead, use
	* {@link Location}.
	*
	* `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
	* agnostic.
	* This means that we can have different implementation of `PlatformLocation` for the different
	* platforms
	* that angular supports. For example, the default `PlatformLocation` is {@link
	* BrowserPlatformLocation},
	* however when you run your app in a WebWorker you use {@link WebWorkerPlatformLocation}.
	*
	* The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
	* when
	* they need to interact with the DOM apis like pushState, popState, etc...
	*
	* {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
	* by
	* the {@link Router} in order to navigate between routes. Since all interactions between {@link
	* Router} /
	* {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
	* class
	* they are all platform independent.
	*/
	var PlatformLocation = (function () {
	    function PlatformLocation() {
	    }
	    Object.defineProperty(PlatformLocation.prototype, "pathname", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformLocation.prototype, "search", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformLocation.prototype, "hash", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return PlatformLocation;
	}());
	exports.PlatformLocation = PlatformLocation;
	//# sourceMappingURL=platform_location.js.map

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	/**
	 * `LocationStrategy` is responsible for representing and reading route state
	 * from the browser's URL. Angular provides two strategies:
	 * {@link HashLocationStrategy} and {@link PathLocationStrategy} (default).
	 *
	 * This is used under the hood of the {@link Location} service.
	 *
	 * Applications should use the {@link Router} or {@link Location} services to
	 * interact with application route state.
	 *
	 * For instance, {@link HashLocationStrategy} produces URLs like
	 * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
	 * `http://example.com/foo` as an equivalent URL.
	 *
	 * See these two classes for more.
	 */
	var LocationStrategy = (function () {
	    function LocationStrategy() {
	    }
	    return LocationStrategy;
	}());
	exports.LocationStrategy = LocationStrategy;
	/**
	 * The `APP_BASE_HREF` token represents the base href to be used with the
	 * {@link PathLocationStrategy}.
	 *
	 * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
	 * representing the URL prefix that should be preserved when generating and recognizing
	 * URLs.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from '@angular/core';
	 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from '@angular/router';
	 * import {APP_BASE_HREF} from '@angular/common';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS,
	 *   provide(APP_BASE_HREF, {useValue: '/my/app'})
	 * ]);
	 * ```
	 */
	exports.APP_BASE_HREF = new core_1.OpaqueToken('appBaseHref');
	//# sourceMappingURL=location_strategy.js.map

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var location_strategy_1 = __webpack_require__(241);
	var location_1 = __webpack_require__(243);
	var platform_location_1 = __webpack_require__(240);
	var HashLocationStrategy = (function (_super) {
	    __extends(HashLocationStrategy, _super);
	    function HashLocationStrategy(_platformLocation, _baseHref) {
	        _super.call(this);
	        this._platformLocation = _platformLocation;
	        this._baseHref = '';
	        if (lang_1.isPresent(_baseHref)) {
	            this._baseHref = _baseHref;
	        }
	    }
	    HashLocationStrategy.prototype.onPopState = function (fn) {
	        this._platformLocation.onPopState(fn);
	        this._platformLocation.onHashChange(fn);
	    };
	    HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	    HashLocationStrategy.prototype.path = function () {
	        // the hash value is always prefixed with a `#`
	        // and if it is empty then it will stay empty
	        var path = this._platformLocation.hash;
	        if (!lang_1.isPresent(path))
	            path = '#';
	        // Dart will complain if a call to substring is
	        // executed with a position value that extends the
	        // length of string.
	        return (path.length > 0 ? path.substring(1) : path);
	    };
	    HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	        var url = location_1.Location.joinWithSlash(this._baseHref, internal);
	        return url.length > 0 ? ('#' + url) : url;
	    };
	    HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
	        var url = this.prepareExternalUrl(path + location_1.Location.normalizeQueryParams(queryParams));
	        if (url.length == 0) {
	            url = this._platformLocation.pathname;
	        }
	        this._platformLocation.pushState(state, title, url);
	    };
	    HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
	        var url = this.prepareExternalUrl(path + location_1.Location.normalizeQueryParams(queryParams));
	        if (url.length == 0) {
	            url = this._platformLocation.pathname;
	        }
	        this._platformLocation.replaceState(state, title, url);
	    };
	    HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	    HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	    HashLocationStrategy.decorators = [
	        { type: core_1.Injectable },
	    ];
	    HashLocationStrategy.ctorParameters = [
	        { type: platform_location_1.PlatformLocation, },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [location_strategy_1.APP_BASE_HREF,] },] },
	    ];
	    return HashLocationStrategy;
	}(location_strategy_1.LocationStrategy));
	exports.HashLocationStrategy = HashLocationStrategy;
	//# sourceMappingURL=hash_location_strategy.js.map

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var async_1 = __webpack_require__(186);
	var location_strategy_1 = __webpack_require__(241);
	var Location = (function () {
	    function Location(platformStrategy) {
	        var _this = this;
	        this.platformStrategy = platformStrategy;
	        /** @internal */
	        this._subject = new async_1.EventEmitter();
	        var browserBaseHref = this.platformStrategy.getBaseHref();
	        this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
	        this.platformStrategy.onPopState(function (ev) {
	            async_1.ObservableWrapper.callEmit(_this._subject, { 'url': _this.path(), 'pop': true, 'type': ev.type });
	        });
	    }
	    /**
	     * Returns the normalized URL path.
	     */
	    Location.prototype.path = function () { return this.normalize(this.platformStrategy.path()); };
	    /**
	     * Given a string representing a URL, returns the normalized URL path without leading or
	     * trailing slashes
	     */
	    Location.prototype.normalize = function (url) {
	        return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
	    };
	    /**
	     * Given a string representing a URL, returns the platform-specific external URL path.
	     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
	     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
	     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
	     */
	    Location.prototype.prepareExternalUrl = function (url) {
	        if (url.length > 0 && !url.startsWith('/')) {
	            url = '/' + url;
	        }
	        return this.platformStrategy.prepareExternalUrl(url);
	    };
	    // TODO: rename this method to pushState
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and pushes a
	     * new item onto the platform's history.
	     */
	    Location.prototype.go = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.pushState(null, '', path, query);
	    };
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and replaces
	     * the top item on the platform's history stack.
	     */
	    Location.prototype.replaceState = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.replaceState(null, '', path, query);
	    };
	    /**
	     * Navigates forward in the platform's history.
	     */
	    Location.prototype.forward = function () { this.platformStrategy.forward(); };
	    /**
	     * Navigates back in the platform's history.
	     */
	    Location.prototype.back = function () { this.platformStrategy.back(); };
	    /**
	     * Subscribe to the platform's `popState` events.
	     */
	    Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
	        if (onThrow === void 0) { onThrow = null; }
	        if (onReturn === void 0) { onReturn = null; }
	        return async_1.ObservableWrapper.subscribe(this._subject, onNext, onThrow, onReturn);
	    };
	    /**
	     * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
	     * is.
	     */
	    Location.normalizeQueryParams = function (params) {
	        return (params.length > 0 && params.substring(0, 1) != '?') ? ('?' + params) : params;
	    };
	    /**
	     * Given 2 parts of a url, join them with a slash if needed.
	     */
	    Location.joinWithSlash = function (start, end) {
	        if (start.length == 0) {
	            return end;
	        }
	        if (end.length == 0) {
	            return start;
	        }
	        var slashes = 0;
	        if (start.endsWith('/')) {
	            slashes++;
	        }
	        if (end.startsWith('/')) {
	            slashes++;
	        }
	        if (slashes == 2) {
	            return start + end.substring(1);
	        }
	        if (slashes == 1) {
	            return start + end;
	        }
	        return start + '/' + end;
	    };
	    /**
	     * If url has a trailing slash, remove it, otherwise return url as is.
	     */
	    Location.stripTrailingSlash = function (url) {
	        if (/\/$/g.test(url)) {
	            url = url.substring(0, url.length - 1);
	        }
	        return url;
	    };
	    Location.decorators = [
	        { type: core_1.Injectable },
	    ];
	    Location.ctorParameters = [
	        { type: location_strategy_1.LocationStrategy, },
	    ];
	    return Location;
	}());
	exports.Location = Location;
	function _stripBaseHref(baseHref, url) {
	    if (baseHref.length > 0 && url.startsWith(baseHref)) {
	        return url.substring(baseHref.length);
	    }
	    return url;
	}
	function _stripIndexHtml(url) {
	    if (/\/index.html$/g.test(url)) {
	        // '/index.html'.length == 11
	        return url.substring(0, url.length - 11);
	    }
	    return url;
	}
	//# sourceMappingURL=location.js.map

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(185);
	var exceptions_1 = __webpack_require__(189);
	var platform_location_1 = __webpack_require__(240);
	var location_strategy_1 = __webpack_require__(241);
	var location_1 = __webpack_require__(243);
	var PathLocationStrategy = (function (_super) {
	    __extends(PathLocationStrategy, _super);
	    function PathLocationStrategy(_platformLocation, href) {
	        _super.call(this);
	        this._platformLocation = _platformLocation;
	        if (lang_1.isBlank(href)) {
	            href = this._platformLocation.getBaseHrefFromDOM();
	        }
	        if (lang_1.isBlank(href)) {
	            throw new exceptions_1.BaseException("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
	        }
	        this._baseHref = href;
	    }
	    PathLocationStrategy.prototype.onPopState = function (fn) {
	        this._platformLocation.onPopState(fn);
	        this._platformLocation.onHashChange(fn);
	    };
	    PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	    PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	        return location_1.Location.joinWithSlash(this._baseHref, internal);
	    };
	    PathLocationStrategy.prototype.path = function () {
	        return this._platformLocation.pathname +
	            location_1.Location.normalizeQueryParams(this._platformLocation.search);
	    };
	    PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
	        var externalUrl = this.prepareExternalUrl(url + location_1.Location.normalizeQueryParams(queryParams));
	        this._platformLocation.pushState(state, title, externalUrl);
	    };
	    PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
	        var externalUrl = this.prepareExternalUrl(url + location_1.Location.normalizeQueryParams(queryParams));
	        this._platformLocation.replaceState(state, title, externalUrl);
	    };
	    PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	    PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	    PathLocationStrategy.decorators = [
	        { type: core_1.Injectable },
	    ];
	    PathLocationStrategy.ctorParameters = [
	        { type: platform_location_1.PlatformLocation, },
	        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [location_strategy_1.APP_BASE_HREF,] },] },
	    ];
	    return PathLocationStrategy;
	}(location_strategy_1.LocationStrategy));
	exports.PathLocationStrategy = PathLocationStrategy;
	//# sourceMappingURL=path_location_strategy.js.map

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var url_sanitizer_1 = __webpack_require__(246);
	var style_sanitizer_1 = __webpack_require__(247);
	var core_private_1 = __webpack_require__(181);
	exports.SecurityContext = core_private_1.SecurityContext;
	var core_1 = __webpack_require__(8);
	/**
	 * DomSanitizationService helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
	 * values to be safe to use in the different DOM contexts.
	 *
	 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
	 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
	 * the website.
	 *
	 * In specific situations, it might be necessary to disable sanitization, for example if the
	 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
	 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
	 * methods, and then binding to that value from the template.
	 *
	 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
	 * Cross Site Scripting (XSS) security bug!
	 *
	 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
	 * close as possible to the source of the value, to make it easy to verify no security bug is
	 * created by its use.
	 *
	 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
	 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
	 * code. The sanitizer leaves safe values intact.
	 */
	var DomSanitizationService = (function () {
	    function DomSanitizationService() {
	    }
	    return DomSanitizationService;
	}());
	exports.DomSanitizationService = DomSanitizationService;
	var DomSanitizationServiceImpl = (function (_super) {
	    __extends(DomSanitizationServiceImpl, _super);
	    function DomSanitizationServiceImpl() {
	        _super.apply(this, arguments);
	    }
	    DomSanitizationServiceImpl.prototype.sanitize = function (ctx, value) {
	        if (value == null)
	            return null;
	        switch (ctx) {
	            case core_private_1.SecurityContext.NONE:
	                return value;
	            case core_private_1.SecurityContext.HTML:
	                if (value instanceof SafeHtmlImpl)
	                    return value.changingThisBreaksApplicationSecurity;
	                this.checkNotSafeValue(value, 'HTML');
	                return this.sanitizeHtml(String(value));
	            case core_private_1.SecurityContext.STYLE:
	                if (value instanceof SafeStyleImpl)
	                    return value.changingThisBreaksApplicationSecurity;
	                this.checkNotSafeValue(value, 'Style');
	                return style_sanitizer_1.sanitizeStyle(value);
	            case core_private_1.SecurityContext.SCRIPT:
	                if (value instanceof SafeScriptImpl)
	                    return value.changingThisBreaksApplicationSecurity;
	                this.checkNotSafeValue(value, 'Script');
	                throw new Error('unsafe value used in a script context');
	            case core_private_1.SecurityContext.URL:
	                if (value instanceof SafeUrlImpl)
	                    return value.changingThisBreaksApplicationSecurity;
	                this.checkNotSafeValue(value, 'URL');
	                return url_sanitizer_1.sanitizeUrl(String(value));
	            case core_private_1.SecurityContext.RESOURCE_URL:
	                if (value instanceof SafeResourceUrlImpl) {
	                    return value.changingThisBreaksApplicationSecurity;
	                }
	                this.checkNotSafeValue(value, 'ResourceURL');
	                throw new Error('unsafe value used in a resource URL context');
	            default:
	                throw new Error("Unexpected SecurityContext " + ctx);
	        }
	    };
	    DomSanitizationServiceImpl.prototype.checkNotSafeValue = function (value, expectedType) {
	        if (value instanceof SafeValueImpl) {
	            throw new Error('Required a safe ' + expectedType + ', got a ' + value.getTypeName());
	        }
	    };
	    DomSanitizationServiceImpl.prototype.sanitizeHtml = function (value) {
	        // TODO(martinprobst): implement.
	        return value;
	    };
	    DomSanitizationServiceImpl.prototype.bypassSecurityTrustHtml = function (value) { return new SafeHtmlImpl(value); };
	    DomSanitizationServiceImpl.prototype.bypassSecurityTrustStyle = function (value) { return new SafeStyleImpl(value); };
	    DomSanitizationServiceImpl.prototype.bypassSecurityTrustScript = function (value) { return new SafeScriptImpl(value); };
	    DomSanitizationServiceImpl.prototype.bypassSecurityTrustUrl = function (value) { return new SafeUrlImpl(value); };
	    DomSanitizationServiceImpl.prototype.bypassSecurityTrustResourceUrl = function (value) {
	        return new SafeResourceUrlImpl(value);
	    };
	    DomSanitizationServiceImpl.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return DomSanitizationServiceImpl;
	}(DomSanitizationService));
	exports.DomSanitizationServiceImpl = DomSanitizationServiceImpl;
	var SafeValueImpl = (function () {
	    function SafeValueImpl(changingThisBreaksApplicationSecurity) {
	        this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
	        // empty
	    }
	    return SafeValueImpl;
	}());
	var SafeHtmlImpl = (function (_super) {
	    __extends(SafeHtmlImpl, _super);
	    function SafeHtmlImpl() {
	        _super.apply(this, arguments);
	    }
	    SafeHtmlImpl.prototype.getTypeName = function () { return 'HTML'; };
	    return SafeHtmlImpl;
	}(SafeValueImpl));
	var SafeStyleImpl = (function (_super) {
	    __extends(SafeStyleImpl, _super);
	    function SafeStyleImpl() {
	        _super.apply(this, arguments);
	    }
	    SafeStyleImpl.prototype.getTypeName = function () { return 'Style'; };
	    return SafeStyleImpl;
	}(SafeValueImpl));
	var SafeScriptImpl = (function (_super) {
	    __extends(SafeScriptImpl, _super);
	    function SafeScriptImpl() {
	        _super.apply(this, arguments);
	    }
	    SafeScriptImpl.prototype.getTypeName = function () { return 'Script'; };
	    return SafeScriptImpl;
	}(SafeValueImpl));
	var SafeUrlImpl = (function (_super) {
	    __extends(SafeUrlImpl, _super);
	    function SafeUrlImpl() {
	        _super.apply(this, arguments);
	    }
	    SafeUrlImpl.prototype.getTypeName = function () { return 'URL'; };
	    return SafeUrlImpl;
	}(SafeValueImpl));
	var SafeResourceUrlImpl = (function (_super) {
	    __extends(SafeResourceUrlImpl, _super);
	    function SafeResourceUrlImpl() {
	        _super.apply(this, arguments);
	    }
	    SafeResourceUrlImpl.prototype.getTypeName = function () { return 'ResourceURL'; };
	    return SafeResourceUrlImpl;
	}(SafeValueImpl));
	//# sourceMappingURL=dom_sanitization_service.js.map

/***/ },
/* 246 */
/***/ function(module, exports) {

	"use strict";
	/**
	* A pattern that recognizes a commonly useful subset of URLs that are safe.
	*
	* This regular expression matches a subset of URLs that will not cause script
	* execution if used in URL context within a HTML document. Specifically, this
	* regular expression matches if (comment from here on and regex copied from
	* Soy's EscapingConventions):
	* (1) Either a protocol in a whitelist (http, https, mailto or ftp).
	* (2) or no protocol.  A protocol must be followed by a colon. The below
	*     allows that by allowing colons only after one of the characters [/?#].
	*     A colon after a hash (#) must be in the fragment.
	*     Otherwise, a colon after a (?) must be in a query.
	*     Otherwise, a colon after a single solidus (/) must be in a path.
	*     Otherwise, a colon after a double solidus (//) must be in the authority
	*     (before port).
	*
	* The pattern disallows &, used in HTML entity declarations before
	* one of the characters in [/?#]. This disallows HTML entities used in the
	* protocol name, which should never happen, e.g. "h&#116;tp" for "http".
	* It also disallows HTML entities in the first path part of a relative path,
	* e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
	* that. More importantly, it disallows masking of a colon,
	* e.g. "javascript&#58;...".
	*
	* This regular expression was taken from the Closure sanitization library.
	*/
	var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
	function sanitizeUrl(url) {
	    if (String(url).match(SAFE_URL_PATTERN))
	        return url;
	    return 'unsafe:' + url;
	}
	exports.sanitizeUrl = sanitizeUrl;
	//# sourceMappingURL=url_sanitizer.js.map

/***/ },
/* 247 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Regular expression for safe style values.
	*
	* Quotes (" and ') are allowed, but a check must be done elsewhere to ensure
	* they're balanced.
	*
	* ',' allows multiple values to be assigned to the same property
	* (e.g. background-attachment or font-family) and hence could allow
	* multiple values to get injected, but that should pose no risk of XSS.
	*
	* The rgb() and rgba() expression checks only for XSS safety, not for CSS
	* validity.
	*
	* This regular expression was taken from the Closure sanitization library.
	*/
	var SAFE_STYLE_VALUE = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;
	/**
	 * Checks that quotes (" and ') are properly balanced inside a string. Assumes
	 * that neither escape (\) nor any other character that could result in
	 * breaking out of a string parsing context are allowed;
	 * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
	 *
	 * This code was taken from the Closure sanitization library.
	 */
	function hasBalancedQuotes(value) {
	    var outsideSingle = true;
	    var outsideDouble = true;
	    for (var i = 0; i < value.length; i++) {
	        var c = value.charAt(i);
	        if (c === '\'' && outsideDouble) {
	            outsideSingle = !outsideSingle;
	        }
	        else if (c === '"' && outsideSingle) {
	            outsideDouble = !outsideDouble;
	        }
	    }
	    return outsideSingle && outsideDouble;
	}
	function sanitizeStyle(value) {
	    if (String(value).match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value))
	        return value;
	    return 'unsafe';
	}
	exports.sanitizeStyle = sanitizeStyle;
	//# sourceMappingURL=style_sanitizer.js.map

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(249);
	var lang_1 = __webpack_require__(179);
	var generic_browser_adapter_1 = __webpack_require__(250);
	var dom_adapter_1 = __webpack_require__(251);
	var _attrToPropMap = {
	    'class': 'className',
	    'innerHtml': 'innerHTML',
	    'readonly': 'readOnly',
	    'tabindex': 'tabIndex'
	};
	var DOM_KEY_LOCATION_NUMPAD = 3;
	// Map to convert some key or keyIdentifier values to what will be returned by getEventKey
	var _keyMap = {
	    // The following values are here for cross-browser compatibility and to match the W3C standard
	    // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
	    '\b': 'Backspace',
	    '\t': 'Tab',
	    '\x7F': 'Delete',
	    '\x1B': 'Escape',
	    'Del': 'Delete',
	    'Esc': 'Escape',
	    'Left': 'ArrowLeft',
	    'Right': 'ArrowRight',
	    'Up': 'ArrowUp',
	    'Down': 'ArrowDown',
	    'Menu': 'ContextMenu',
	    'Scroll': 'ScrollLock',
	    'Win': 'OS'
	};
	// There is a bug in Chrome for numeric keypad keys:
	// https://code.google.com/p/chromium/issues/detail?id=155654
	// 1, 2, 3 ... are reported as A, B, C ...
	var _chromeNumKeyPadMap = {
	    'A': '1',
	    'B': '2',
	    'C': '3',
	    'D': '4',
	    'E': '5',
	    'F': '6',
	    'G': '7',
	    'H': '8',
	    'I': '9',
	    'J': '*',
	    'K': '+',
	    'M': '-',
	    'N': '.',
	    'O': '/',
	    '\x60': '0',
	    '\x90': 'NumLock'
	};
	/**
	 * A `DomAdapter` powered by full browser DOM APIs.
	 */
	/* tslint:disable:requireParameterType */
	var BrowserDomAdapter = (function (_super) {
	    __extends(BrowserDomAdapter, _super);
	    function BrowserDomAdapter() {
	        _super.apply(this, arguments);
	    }
	    BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error("parse not implemented"); };
	    BrowserDomAdapter.makeCurrent = function () { dom_adapter_1.setRootDomAdapter(new BrowserDomAdapter()); };
	    BrowserDomAdapter.prototype.hasProperty = function (element, name) { return name in element; };
	    BrowserDomAdapter.prototype.setProperty = function (el, name, value) { el[name] = value; };
	    BrowserDomAdapter.prototype.getProperty = function (el, name) { return el[name]; };
	    BrowserDomAdapter.prototype.invoke = function (el, methodName, args) {
	        el[methodName].apply(el, args);
	    };
	    // TODO(tbosch): move this into a separate environment class once we have it
	    BrowserDomAdapter.prototype.logError = function (error) {
	        if (window.console.error) {
	            window.console.error(error);
	        }
	        else {
	            window.console.log(error);
	        }
	    };
	    BrowserDomAdapter.prototype.log = function (error) { window.console.log(error); };
	    BrowserDomAdapter.prototype.logGroup = function (error) {
	        if (window.console.group) {
	            window.console.group(error);
	            this.logError(error);
	        }
	        else {
	            window.console.log(error);
	        }
	    };
	    BrowserDomAdapter.prototype.logGroupEnd = function () {
	        if (window.console.groupEnd) {
	            window.console.groupEnd();
	        }
	    };
	    Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
	        get: function () { return _attrToPropMap; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserDomAdapter.prototype.query = function (selector) { return document.querySelector(selector); };
	    BrowserDomAdapter.prototype.querySelector = function (el, selector) { return el.querySelector(selector); };
	    BrowserDomAdapter.prototype.querySelectorAll = function (el, selector) { return el.querySelectorAll(selector); };
	    BrowserDomAdapter.prototype.on = function (el, evt, listener) { el.addEventListener(evt, listener, false); };
	    BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
	        el.addEventListener(evt, listener, false);
	        // Needed to follow Dart's subscription semantic, until fix of
	        // https://code.google.com/p/dart/issues/detail?id=17406
	        return function () { el.removeEventListener(evt, listener, false); };
	    };
	    BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) { el.dispatchEvent(evt); };
	    BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
	        var evt = document.createEvent('MouseEvent');
	        evt.initEvent(eventType, true, true);
	        return evt;
	    };
	    BrowserDomAdapter.prototype.createEvent = function (eventType) {
	        var evt = document.createEvent('Event');
	        evt.initEvent(eventType, true, true);
	        return evt;
	    };
	    BrowserDomAdapter.prototype.preventDefault = function (evt) {
	        evt.preventDefault();
	        evt.returnValue = false;
	    };
	    BrowserDomAdapter.prototype.isPrevented = function (evt) {
	        return evt.defaultPrevented || lang_1.isPresent(evt.returnValue) && !evt.returnValue;
	    };
	    BrowserDomAdapter.prototype.getInnerHTML = function (el) { return el.innerHTML; };
	    BrowserDomAdapter.prototype.getOuterHTML = function (el) { return el.outerHTML; };
	    BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
	    BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
	    BrowserDomAdapter.prototype.type = function (node) { return node.type; };
	    BrowserDomAdapter.prototype.content = function (node) {
	        if (this.hasProperty(node, "content")) {
	            return node.content;
	        }
	        else {
	            return node;
	        }
	    };
	    BrowserDomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
	    BrowserDomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
	    BrowserDomAdapter.prototype.parentElement = function (el) { return el.parentNode; };
	    BrowserDomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
	    BrowserDomAdapter.prototype.childNodesAsList = function (el) {
	        var childNodes = el.childNodes;
	        var res = collection_1.ListWrapper.createFixedSize(childNodes.length);
	        for (var i = 0; i < childNodes.length; i++) {
	            res[i] = childNodes[i];
	        }
	        return res;
	    };
	    BrowserDomAdapter.prototype.clearNodes = function (el) {
	        while (el.firstChild) {
	            el.removeChild(el.firstChild);
	        }
	    };
	    BrowserDomAdapter.prototype.appendChild = function (el, node) { el.appendChild(node); };
	    BrowserDomAdapter.prototype.removeChild = function (el, node) { el.removeChild(node); };
	    BrowserDomAdapter.prototype.replaceChild = function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
	    BrowserDomAdapter.prototype.remove = function (node) {
	        if (node.parentNode) {
	            node.parentNode.removeChild(node);
	        }
	        return node;
	    };
	    BrowserDomAdapter.prototype.insertBefore = function (el, node) { el.parentNode.insertBefore(node, el); };
	    BrowserDomAdapter.prototype.insertAllBefore = function (el, nodes) { nodes.forEach(function (n) { return el.parentNode.insertBefore(n, el); }); };
	    BrowserDomAdapter.prototype.insertAfter = function (el, node) { el.parentNode.insertBefore(node, el.nextSibling); };
	    BrowserDomAdapter.prototype.setInnerHTML = function (el, value) { el.innerHTML = value; };
	    BrowserDomAdapter.prototype.getText = function (el) { return el.textContent; };
	    // TODO(vicb): removed Element type because it does not support StyleElement
	    BrowserDomAdapter.prototype.setText = function (el, value) { el.textContent = value; };
	    BrowserDomAdapter.prototype.getValue = function (el) { return el.value; };
	    BrowserDomAdapter.prototype.setValue = function (el, value) { el.value = value; };
	    BrowserDomAdapter.prototype.getChecked = function (el) { return el.checked; };
	    BrowserDomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
	    BrowserDomAdapter.prototype.createComment = function (text) { return document.createComment(text); };
	    BrowserDomAdapter.prototype.createTemplate = function (html) {
	        var t = document.createElement('template');
	        t.innerHTML = html;
	        return t;
	    };
	    BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
	        if (doc === void 0) { doc = document; }
	        return doc.createElement(tagName);
	    };
	    BrowserDomAdapter.prototype.createElementNS = function (ns, tagName, doc) {
	        if (doc === void 0) { doc = document; }
	        return doc.createElementNS(ns, tagName);
	    };
	    BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
	        if (doc === void 0) { doc = document; }
	        return doc.createTextNode(text);
	    };
	    BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
	        if (doc === void 0) { doc = document; }
	        var el = doc.createElement('SCRIPT');
	        el.setAttribute(attrName, attrValue);
	        return el;
	    };
	    BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
	        if (doc === void 0) { doc = document; }
	        var style = doc.createElement('style');
	        this.appendChild(style, this.createTextNode(css));
	        return style;
	    };
	    BrowserDomAdapter.prototype.createShadowRoot = function (el) { return el.createShadowRoot(); };
	    BrowserDomAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
	    BrowserDomAdapter.prototype.getHost = function (el) { return el.host; };
	    BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
	    BrowserDomAdapter.prototype.getElementsByClassName = function (element, name) {
	        return element.getElementsByClassName(name);
	    };
	    BrowserDomAdapter.prototype.getElementsByTagName = function (element, name) {
	        return element.getElementsByTagName(name);
	    };
	    BrowserDomAdapter.prototype.classList = function (element) { return Array.prototype.slice.call(element.classList, 0); };
	    BrowserDomAdapter.prototype.addClass = function (element, className) { element.classList.add(className); };
	    BrowserDomAdapter.prototype.removeClass = function (element, className) { element.classList.remove(className); };
	    BrowserDomAdapter.prototype.hasClass = function (element, className) { return element.classList.contains(className); };
	    BrowserDomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
	        element.style[styleName] = styleValue;
	    };
	    BrowserDomAdapter.prototype.removeStyle = function (element, stylename) { element.style[stylename] = null; };
	    BrowserDomAdapter.prototype.getStyle = function (element, stylename) { return element.style[stylename]; };
	    BrowserDomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
	        if (styleValue === void 0) { styleValue = null; }
	        var value = this.getStyle(element, styleName) || '';
	        return styleValue ? value == styleValue : value.length > 0;
	    };
	    BrowserDomAdapter.prototype.tagName = function (element) { return element.tagName; };
	    BrowserDomAdapter.prototype.attributeMap = function (element) {
	        var res = new Map();
	        var elAttrs = element.attributes;
	        for (var i = 0; i < elAttrs.length; i++) {
	            var attrib = elAttrs[i];
	            res.set(attrib.name, attrib.value);
	        }
	        return res;
	    };
	    BrowserDomAdapter.prototype.hasAttribute = function (element, attribute) { return element.hasAttribute(attribute); };
	    BrowserDomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
	        return element.hasAttributeNS(ns, attribute);
	    };
	    BrowserDomAdapter.prototype.getAttribute = function (element, attribute) { return element.getAttribute(attribute); };
	    BrowserDomAdapter.prototype.getAttributeNS = function (element, ns, name) {
	        return element.getAttributeNS(ns, name);
	    };
	    BrowserDomAdapter.prototype.setAttribute = function (element, name, value) { element.setAttribute(name, value); };
	    BrowserDomAdapter.prototype.setAttributeNS = function (element, ns, name, value) {
	        element.setAttributeNS(ns, name, value);
	    };
	    BrowserDomAdapter.prototype.removeAttribute = function (element, attribute) { element.removeAttribute(attribute); };
	    BrowserDomAdapter.prototype.removeAttributeNS = function (element, ns, name) { element.removeAttributeNS(ns, name); };
	    BrowserDomAdapter.prototype.templateAwareRoot = function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
	    BrowserDomAdapter.prototype.createHtmlDocument = function () {
	        return document.implementation.createHTMLDocument('fakeTitle');
	    };
	    BrowserDomAdapter.prototype.defaultDoc = function () { return document; };
	    BrowserDomAdapter.prototype.getBoundingClientRect = function (el) {
	        try {
	            return el.getBoundingClientRect();
	        }
	        catch (e) {
	            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
	        }
	    };
	    BrowserDomAdapter.prototype.getTitle = function () { return document.title; };
	    BrowserDomAdapter.prototype.setTitle = function (newTitle) { document.title = newTitle || ''; };
	    BrowserDomAdapter.prototype.elementMatches = function (n, selector) {
	        var matches = false;
	        if (n instanceof HTMLElement) {
	            if (n.matches) {
	                matches = n.matches(selector);
	            }
	            else if (n.msMatchesSelector) {
	                matches = n.msMatchesSelector(selector);
	            }
	            else if (n.webkitMatchesSelector) {
	                matches = n.webkitMatchesSelector(selector);
	            }
	        }
	        return matches;
	    };
	    BrowserDomAdapter.prototype.isTemplateElement = function (el) {
	        return el instanceof HTMLElement && el.nodeName == "TEMPLATE";
	    };
	    BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
	    BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
	    BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
	    BrowserDomAdapter.prototype.hasShadowRoot = function (node) { return node instanceof HTMLElement && lang_1.isPresent(node.shadowRoot); };
	    BrowserDomAdapter.prototype.isShadowRoot = function (node) { return node instanceof DocumentFragment; };
	    BrowserDomAdapter.prototype.importIntoDoc = function (node) {
	        var toImport = node;
	        if (this.isTemplateElement(node)) {
	            toImport = this.content(node);
	        }
	        return document.importNode(toImport, true);
	    };
	    BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
	    BrowserDomAdapter.prototype.getHref = function (el) { return el.href; };
	    BrowserDomAdapter.prototype.getEventKey = function (event) {
	        var key = event.key;
	        if (lang_1.isBlank(key)) {
	            key = event.keyIdentifier;
	            // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
	            // Safari
	            // cf
	            // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
	            if (lang_1.isBlank(key)) {
	                return 'Unidentified';
	            }
	            if (key.startsWith('U+')) {
	                key = String.fromCharCode(parseInt(key.substring(2), 16));
	                if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
	                    // There is a bug in Chrome for numeric keypad keys:
	                    // https://code.google.com/p/chromium/issues/detail?id=155654
	                    // 1, 2, 3 ... are reported as A, B, C ...
	                    key = _chromeNumKeyPadMap[key];
	                }
	            }
	        }
	        if (_keyMap.hasOwnProperty(key)) {
	            key = _keyMap[key];
	        }
	        return key;
	    };
	    BrowserDomAdapter.prototype.getGlobalEventTarget = function (target) {
	        if (target == "window") {
	            return window;
	        }
	        else if (target == "document") {
	            return document;
	        }
	        else if (target == "body") {
	            return document.body;
	        }
	    };
	    BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
	    BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
	    BrowserDomAdapter.prototype.getBaseHref = function () {
	        var href = getBaseElementHref();
	        if (lang_1.isBlank(href)) {
	            return null;
	        }
	        return relativePath(href);
	    };
	    BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
	    BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
	    BrowserDomAdapter.prototype.setData = function (element, name, value) {
	        this.setAttribute(element, 'data-' + name, value);
	    };
	    BrowserDomAdapter.prototype.getData = function (element, name) { return this.getAttribute(element, 'data-' + name); };
	    BrowserDomAdapter.prototype.getComputedStyle = function (element) { return getComputedStyle(element); };
	    // TODO(tbosch): move this into a separate environment class once we have it
	    BrowserDomAdapter.prototype.setGlobalVar = function (path, value) { lang_1.setValueOnPath(lang_1.global, path, value); };
	    BrowserDomAdapter.prototype.requestAnimationFrame = function (callback) { return window.requestAnimationFrame(callback); };
	    BrowserDomAdapter.prototype.cancelAnimationFrame = function (id) { window.cancelAnimationFrame(id); };
	    BrowserDomAdapter.prototype.performanceNow = function () {
	        // performance.now() is not available in all browsers, see
	        // http://caniuse.com/#search=performance.now
	        if (lang_1.isPresent(window.performance) && lang_1.isPresent(window.performance.now)) {
	            return window.performance.now();
	        }
	        else {
	            return lang_1.DateWrapper.toMillis(lang_1.DateWrapper.now());
	        }
	    };
	    return BrowserDomAdapter;
	}(generic_browser_adapter_1.GenericBrowserDomAdapter));
	exports.BrowserDomAdapter = BrowserDomAdapter;
	var baseElement = null;
	function getBaseElementHref() {
	    if (lang_1.isBlank(baseElement)) {
	        baseElement = document.querySelector('base');
	        if (lang_1.isBlank(baseElement)) {
	            return null;
	        }
	    }
	    return baseElement.getAttribute('href');
	}
	// based on urlUtils.js in AngularJS 1
	var urlParsingNode = null;
	function relativePath(url) {
	    if (lang_1.isBlank(urlParsingNode)) {
	        urlParsingNode = document.createElement("a");
	    }
	    urlParsingNode.setAttribute('href', url);
	    return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
	        '/' + urlParsingNode.pathname;
	}
	//# sourceMappingURL=browser_adapter.js.map

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(179);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).reduce(function (r, a) {
	            r.push(map[a]);
	            return r;
	        }, []);
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(249);
	var lang_1 = __webpack_require__(179);
	var dom_adapter_1 = __webpack_require__(251);
	/**
	 * Provides DOM operations in any browser environment.
	 */
	var GenericBrowserDomAdapter = (function (_super) {
	    __extends(GenericBrowserDomAdapter, _super);
	    function GenericBrowserDomAdapter() {
	        var _this = this;
	        _super.call(this);
	        this._animationPrefix = null;
	        this._transitionEnd = null;
	        try {
	            var element = this.createElement('div', this.defaultDoc());
	            if (lang_1.isPresent(this.getStyle(element, 'animationName'))) {
	                this._animationPrefix = '';
	            }
	            else {
	                var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
	                for (var i = 0; i < domPrefixes.length; i++) {
	                    if (lang_1.isPresent(this.getStyle(element, domPrefixes[i] + 'AnimationName'))) {
	                        this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
	                        break;
	                    }
	                }
	            }
	            var transEndEventNames = {
	                WebkitTransition: 'webkitTransitionEnd',
	                MozTransition: 'transitionend',
	                OTransition: 'oTransitionEnd otransitionend',
	                transition: 'transitionend'
	            };
	            collection_1.StringMapWrapper.forEach(transEndEventNames, function (value, key) {
	                if (lang_1.isPresent(_this.getStyle(element, key))) {
	                    _this._transitionEnd = value;
	                }
	            });
	        }
	        catch (e) {
	            this._animationPrefix = null;
	            this._transitionEnd = null;
	        }
	    }
	    GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return el.getDistributedNodes(); };
	    GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
	        el.href = href == null ? baseUrl : baseUrl + '/../' + href;
	    };
	    GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
	    GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
	        return lang_1.isFunction(this.defaultDoc().body.createShadowRoot);
	    };
	    GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () {
	        return lang_1.isPresent(this._animationPrefix) ? this._animationPrefix : "";
	    };
	    GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return lang_1.isPresent(this._transitionEnd) ? this._transitionEnd : ""; };
	    GenericBrowserDomAdapter.prototype.supportsAnimation = function () {
	        return lang_1.isPresent(this._animationPrefix) && lang_1.isPresent(this._transitionEnd);
	    };
	    return GenericBrowserDomAdapter;
	}(dom_adapter_1.DomAdapter));
	exports.GenericBrowserDomAdapter = GenericBrowserDomAdapter;
	//# sourceMappingURL=generic_browser_adapter.js.map

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(179);
	var _DOM = null;
	function getDOM() {
	    return _DOM;
	}
	exports.getDOM = getDOM;
	function setDOM(adapter) {
	    _DOM = adapter;
	}
	exports.setDOM = setDOM;
	function setRootDomAdapter(adapter) {
	    if (lang_1.isBlank(_DOM)) {
	        _DOM = adapter;
	    }
	}
	exports.setRootDomAdapter = setRootDomAdapter;
	/* tslint:disable:requireParameterType */
	/**
	 * Provides DOM operations in an environment-agnostic way.
	 */
	var DomAdapter = (function () {
	    function DomAdapter() {
	        this.xhrType = null;
	    }
	    /** @deprecated */
	    DomAdapter.prototype.getXHR = function () { return this.xhrType; };
	    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
	        /**
	         * Maps attribute names to their corresponding property names for cases
	         * where attribute name doesn't match property name.
	         */
	        get: function () { return this._attrToPropMap; },
	        set: function (value) { this._attrToPropMap = value; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    ;
	    return DomAdapter;
	}());
	exports.DomAdapter = DomAdapter;
	//# sourceMappingURL=dom_adapter.js.map

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var collection_1 = __webpack_require__(249);
	var lang_1 = __webpack_require__(179);
	var dom_adapter_1 = __webpack_require__(251);
	var PublicTestability = (function () {
	    function PublicTestability(testability) {
	        this._testability = testability;
	    }
	    PublicTestability.prototype.isStable = function () { return this._testability.isStable(); };
	    PublicTestability.prototype.whenStable = function (callback) { this._testability.whenStable(callback); };
	    PublicTestability.prototype.findBindings = function (using, provider, exactMatch) {
	        return this.findProviders(using, provider, exactMatch);
	    };
	    PublicTestability.prototype.findProviders = function (using, provider, exactMatch) {
	        return this._testability.findBindings(using, provider, exactMatch);
	    };
	    return PublicTestability;
	}());
	var BrowserGetTestability = (function () {
	    function BrowserGetTestability() {
	    }
	    BrowserGetTestability.init = function () { core_1.setTestabilityGetter(new BrowserGetTestability()); };
	    BrowserGetTestability.prototype.addToWindow = function (registry) {
	        lang_1.global.getAngularTestability = function (elem, findInAncestors) {
	            if (findInAncestors === void 0) { findInAncestors = true; }
	            var testability = registry.findTestabilityInTree(elem, findInAncestors);
	            if (testability == null) {
	                throw new Error('Could not find testability for element.');
	            }
	            return new PublicTestability(testability);
	        };
	        lang_1.global.getAllAngularTestabilities = function () {
	            var testabilities = registry.getAllTestabilities();
	            return testabilities.map(function (testability) { return new PublicTestability(testability); });
	        };
	        lang_1.global.getAllAngularRootElements = function () { return registry.getAllRootElements(); };
	        var whenAllStable = function (callback) {
	            var testabilities = lang_1.global.getAllAngularTestabilities();
	            var count = testabilities.length;
	            var didWork = false;
	            var decrement = function (didWork_) {
	                didWork = didWork || didWork_;
	                count--;
	                if (count == 0) {
	                    callback(didWork);
	                }
	            };
	            testabilities.forEach(function (testability) { testability.whenStable(decrement); });
	        };
	        if (!lang_1.global.frameworkStabilizers) {
	            lang_1.global.frameworkStabilizers = collection_1.ListWrapper.createGrowableSize(0);
	        }
	        lang_1.global.frameworkStabilizers.push(whenAllStable);
	    };
	    BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	        if (elem == null) {
	            return null;
	        }
	        var t = registry.getTestability(elem);
	        if (lang_1.isPresent(t)) {
	            return t;
	        }
	        else if (!findInAncestors) {
	            return null;
	        }
	        if (dom_adapter_1.getDOM().isShadowRoot(elem)) {
	            return this.findTestabilityInTree(registry, dom_adapter_1.getDOM().getHost(elem), true);
	        }
	        return this.findTestabilityInTree(registry, dom_adapter_1.getDOM().parentElement(elem), true);
	    };
	    return BrowserGetTestability;
	}());
	exports.BrowserGetTestability = BrowserGetTestability;
	//# sourceMappingURL=testability.js.map

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	/**
	 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
	 *
	 * Note: Document might not be available in the Application Context when Application and Rendering
	 * Contexts are not the same (e.g. when running the application into a Web Worker).
	 */
	exports.DOCUMENT = new core_1.OpaqueToken('DocumentToken');
	//# sourceMappingURL=dom_tokens.js.map

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var exceptions_1 = __webpack_require__(255);
	var collection_1 = __webpack_require__(249);
	exports.EVENT_MANAGER_PLUGINS = 
	/*@ts2dart_const*/ new core_1.OpaqueToken("EventManagerPlugins");
	var EventManager = (function () {
	    function EventManager(plugins, _zone) {
	        var _this = this;
	        this._zone = _zone;
	        plugins.forEach(function (p) { return p.manager = _this; });
	        this._plugins = collection_1.ListWrapper.reversed(plugins);
	    }
	    EventManager.prototype.addEventListener = function (element, eventName, handler) {
	        var plugin = this._findPluginFor(eventName);
	        return plugin.addEventListener(element, eventName, handler);
	    };
	    EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
	        var plugin = this._findPluginFor(eventName);
	        return plugin.addGlobalEventListener(target, eventName, handler);
	    };
	    EventManager.prototype.getZone = function () { return this._zone; };
	    /** @internal */
	    EventManager.prototype._findPluginFor = function (eventName) {
	        var plugins = this._plugins;
	        for (var i = 0; i < plugins.length; i++) {
	            var plugin = plugins[i];
	            if (plugin.supports(eventName)) {
	                return plugin;
	            }
	        }
	        throw new exceptions_1.BaseException("No event manager plugin found for event " + eventName);
	    };
	    EventManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    EventManager.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.EVENT_MANAGER_PLUGINS,] },] },
	        { type: core_1.NgZone, },
	    ];
	    return EventManager;
	}());
	exports.EventManager = EventManager;
	var EventManagerPlugin = (function () {
	    function EventManagerPlugin() {
	    }
	    // That is equivalent to having supporting $event.target
	    EventManagerPlugin.prototype.supports = function (eventName) { return false; };
	    EventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        throw "not implemented";
	    };
	    EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
	        throw "not implemented";
	    };
	    return EventManagerPlugin;
	}());
	exports.EventManagerPlugin = EventManagerPlugin;
	//# sourceMappingURL=event_manager.js.map

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(256);
	var exception_handler_1 = __webpack_require__(257);
	var exception_handler_2 = __webpack_require__(257);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = "--"; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 256 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	* A base class for the WrappedException that can be used to identify
	* a WrappedException from ExceptionHandler without adding circular
	* dependency.
	*/
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(179);
	var base_wrapped_exception_1 = __webpack_require__(256);
	var collection_1 = __webpack_require__(249);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [provide(ExceptionHandler, {useClass: MyExceptionHandler})])
	 *
	 * ```
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join("\n");
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError("STACKTRACE:");
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError("ORIGINAL STACKTRACE:");
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError("ERROR CONTEXT:");
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var animation_builder_1 = __webpack_require__(259);
	var lang_1 = __webpack_require__(179);
	var exceptions_1 = __webpack_require__(255);
	var shared_styles_host_1 = __webpack_require__(266);
	var event_manager_1 = __webpack_require__(254);
	var dom_tokens_1 = __webpack_require__(253);
	var dom_adapter_1 = __webpack_require__(251);
	var util_1 = __webpack_require__(264);
	var NAMESPACE_URIS = 
	/*@ts2dart_const*/
	{ 'xlink': 'http://www.w3.org/1999/xlink', 'svg': 'http://www.w3.org/2000/svg' };
	var TEMPLATE_COMMENT_TEXT = 'template bindings={}';
	var TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/g;
	var DomRootRenderer = (function () {
	    function DomRootRenderer(document, eventManager, sharedStylesHost, animate) {
	        this.document = document;
	        this.eventManager = eventManager;
	        this.sharedStylesHost = sharedStylesHost;
	        this.animate = animate;
	        this._registeredComponents = new Map();
	    }
	    DomRootRenderer.prototype.renderComponent = function (componentProto) {
	        var renderer = this._registeredComponents.get(componentProto.id);
	        if (lang_1.isBlank(renderer)) {
	            renderer = new DomRenderer(this, componentProto);
	            this._registeredComponents.set(componentProto.id, renderer);
	        }
	        return renderer;
	    };
	    return DomRootRenderer;
	}());
	exports.DomRootRenderer = DomRootRenderer;
	var DomRootRenderer_ = (function (_super) {
	    __extends(DomRootRenderer_, _super);
	    function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animate) {
	        _super.call(this, _document, _eventManager, sharedStylesHost, animate);
	    }
	    DomRootRenderer_.decorators = [
	        { type: core_1.Injectable },
	    ];
	    DomRootRenderer_.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Inject, args: [dom_tokens_1.DOCUMENT,] },] },
	        { type: event_manager_1.EventManager, },
	        { type: shared_styles_host_1.DomSharedStylesHost, },
	        { type: animation_builder_1.AnimationBuilder, },
	    ];
	    return DomRootRenderer_;
	}(DomRootRenderer));
	exports.DomRootRenderer_ = DomRootRenderer_;
	var DomRenderer = (function () {
	    function DomRenderer(_rootRenderer, componentProto) {
	        this._rootRenderer = _rootRenderer;
	        this.componentProto = componentProto;
	        this._styles = _flattenStyles(componentProto.id, componentProto.styles, []);
	        if (componentProto.encapsulation !== core_1.ViewEncapsulation.Native) {
	            this._rootRenderer.sharedStylesHost.addStyles(this._styles);
	        }
	        if (this.componentProto.encapsulation === core_1.ViewEncapsulation.Emulated) {
	            this._contentAttr = _shimContentAttribute(componentProto.id);
	            this._hostAttr = _shimHostAttribute(componentProto.id);
	        }
	        else {
	            this._contentAttr = null;
	            this._hostAttr = null;
	        }
	    }
	    DomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
	        var el;
	        if (lang_1.isString(selectorOrNode)) {
	            el = dom_adapter_1.getDOM().querySelector(this._rootRenderer.document, selectorOrNode);
	            if (lang_1.isBlank(el)) {
	                throw new exceptions_1.BaseException("The selector \"" + selectorOrNode + "\" did not match any elements");
	            }
	        }
	        else {
	            el = selectorOrNode;
	        }
	        dom_adapter_1.getDOM().clearNodes(el);
	        return el;
	    };
	    DomRenderer.prototype.createElement = function (parent, name, debugInfo) {
	        var nsAndName = splitNamespace(name);
	        var el = lang_1.isPresent(nsAndName[0]) ?
	            dom_adapter_1.getDOM().createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) :
	            dom_adapter_1.getDOM().createElement(nsAndName[1]);
	        if (lang_1.isPresent(this._contentAttr)) {
	            dom_adapter_1.getDOM().setAttribute(el, this._contentAttr, '');
	        }
	        if (lang_1.isPresent(parent)) {
	            dom_adapter_1.getDOM().appendChild(parent, el);
	        }
	        return el;
	    };
	    DomRenderer.prototype.createViewRoot = function (hostElement) {
	        var nodesParent;
	        if (this.componentProto.encapsulation === core_1.ViewEncapsulation.Native) {
	            nodesParent = dom_adapter_1.getDOM().createShadowRoot(hostElement);
	            this._rootRenderer.sharedStylesHost.addHost(nodesParent);
	            for (var i = 0; i < this._styles.length; i++) {
	                dom_adapter_1.getDOM().appendChild(nodesParent, dom_adapter_1.getDOM().createStyleElement(this._styles[i]));
	            }
	        }
	        else {
	            if (lang_1.isPresent(this._hostAttr)) {
	                dom_adapter_1.getDOM().setAttribute(hostElement, this._hostAttr, '');
	            }
	            nodesParent = hostElement;
	        }
	        return nodesParent;
	    };
	    DomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
	        var comment = dom_adapter_1.getDOM().createComment(TEMPLATE_COMMENT_TEXT);
	        if (lang_1.isPresent(parentElement)) {
	            dom_adapter_1.getDOM().appendChild(parentElement, comment);
	        }
	        return comment;
	    };
	    DomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
	        var node = dom_adapter_1.getDOM().createTextNode(value);
	        if (lang_1.isPresent(parentElement)) {
	            dom_adapter_1.getDOM().appendChild(parentElement, node);
	        }
	        return node;
	    };
	    DomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	        if (lang_1.isBlank(parentElement))
	            return;
	        appendNodes(parentElement, nodes);
	    };
	    DomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
	        moveNodesAfterSibling(node, viewRootNodes);
	        for (var i = 0; i < viewRootNodes.length; i++)
	            this.animateNodeEnter(viewRootNodes[i]);
	    };
	    DomRenderer.prototype.detachView = function (viewRootNodes) {
	        for (var i = 0; i < viewRootNodes.length; i++) {
	            var node = viewRootNodes[i];
	            dom_adapter_1.getDOM().remove(node);
	            this.animateNodeLeave(node);
	        }
	    };
	    DomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	        if (this.componentProto.encapsulation === core_1.ViewEncapsulation.Native && lang_1.isPresent(hostElement)) {
	            this._rootRenderer.sharedStylesHost.removeHost(dom_adapter_1.getDOM().getShadowRoot(hostElement));
	        }
	    };
	    DomRenderer.prototype.listen = function (renderElement, name, callback) {
	        return this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
	    };
	    DomRenderer.prototype.listenGlobal = function (target, name, callback) {
	        return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
	    };
	    DomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	        dom_adapter_1.getDOM().setProperty(renderElement, propertyName, propertyValue);
	    };
	    DomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	        var attrNs;
	        var nsAndName = splitNamespace(attributeName);
	        if (lang_1.isPresent(nsAndName[0])) {
	            attributeName = nsAndName[0] + ':' + nsAndName[1];
	            attrNs = NAMESPACE_URIS[nsAndName[0]];
	        }
	        if (lang_1.isPresent(attributeValue)) {
	            if (lang_1.isPresent(attrNs)) {
	                dom_adapter_1.getDOM().setAttributeNS(renderElement, attrNs, attributeName, attributeValue);
	            }
	            else {
	                dom_adapter_1.getDOM().setAttribute(renderElement, attributeName, attributeValue);
	            }
	        }
	        else {
	            if (lang_1.isPresent(attrNs)) {
	                dom_adapter_1.getDOM().removeAttributeNS(renderElement, attrNs, nsAndName[1]);
	            }
	            else {
	                dom_adapter_1.getDOM().removeAttribute(renderElement, attributeName);
	            }
	        }
	    };
	    DomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	        var dashCasedPropertyName = util_1.camelCaseToDashCase(propertyName);
	        if (dom_adapter_1.getDOM().isCommentNode(renderElement)) {
	            var existingBindings = lang_1.RegExpWrapper.firstMatch(TEMPLATE_BINDINGS_EXP, lang_1.StringWrapper.replaceAll(dom_adapter_1.getDOM().getText(renderElement), /\n/g, ''));
	            var parsedBindings = lang_1.Json.parse(existingBindings[1]);
	            parsedBindings[dashCasedPropertyName] = propertyValue;
	            dom_adapter_1.getDOM().setText(renderElement, lang_1.StringWrapper.replace(TEMPLATE_COMMENT_TEXT, '{}', lang_1.Json.stringify(parsedBindings)));
	        }
	        else {
	            this.setElementAttribute(renderElement, propertyName, propertyValue);
	        }
	    };
	    DomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	        if (isAdd) {
	            dom_adapter_1.getDOM().addClass(renderElement, className);
	        }
	        else {
	            dom_adapter_1.getDOM().removeClass(renderElement, className);
	        }
	    };
	    DomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	        if (lang_1.isPresent(styleValue)) {
	            dom_adapter_1.getDOM().setStyle(renderElement, styleName, lang_1.stringify(styleValue));
	        }
	        else {
	            dom_adapter_1.getDOM().removeStyle(renderElement, styleName);
	        }
	    };
	    DomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	        dom_adapter_1.getDOM().invoke(renderElement, methodName, args);
	    };
	    DomRenderer.prototype.setText = function (renderNode, text) { dom_adapter_1.getDOM().setText(renderNode, text); };
	    /**
	     * Performs animations if necessary
	     * @param node
	     */
	    DomRenderer.prototype.animateNodeEnter = function (node) {
	        if (dom_adapter_1.getDOM().isElementNode(node) && dom_adapter_1.getDOM().hasClass(node, 'ng-animate')) {
	            dom_adapter_1.getDOM().addClass(node, 'ng-enter');
	            this._rootRenderer.animate.css()
	                .addAnimationClass('ng-enter-active')
	                .start(node)
	                .onComplete(function () { dom_adapter_1.getDOM().removeClass(node, 'ng-enter'); });
	        }
	    };
	    /**
	     * If animations are necessary, performs animations then removes the element; otherwise, it just
	     * removes the element.
	     * @param node
	     */
	    DomRenderer.prototype.animateNodeLeave = function (node) {
	        if (dom_adapter_1.getDOM().isElementNode(node) && dom_adapter_1.getDOM().hasClass(node, 'ng-animate')) {
	            dom_adapter_1.getDOM().addClass(node, 'ng-leave');
	            this._rootRenderer.animate.css()
	                .addAnimationClass('ng-leave-active')
	                .start(node)
	                .onComplete(function () {
	                dom_adapter_1.getDOM().removeClass(node, 'ng-leave');
	                dom_adapter_1.getDOM().remove(node);
	            });
	        }
	        else {
	            dom_adapter_1.getDOM().remove(node);
	        }
	    };
	    return DomRenderer;
	}());
	exports.DomRenderer = DomRenderer;
	function moveNodesAfterSibling(sibling, nodes) {
	    var parent = dom_adapter_1.getDOM().parentElement(sibling);
	    if (nodes.length > 0 && lang_1.isPresent(parent)) {
	        var nextSibling = dom_adapter_1.getDOM().nextSibling(sibling);
	        if (lang_1.isPresent(nextSibling)) {
	            for (var i = 0; i < nodes.length; i++) {
	                dom_adapter_1.getDOM().insertBefore(nextSibling, nodes[i]);
	            }
	        }
	        else {
	            for (var i = 0; i < nodes.length; i++) {
	                dom_adapter_1.getDOM().appendChild(parent, nodes[i]);
	            }
	        }
	    }
	}
	function appendNodes(parent, nodes) {
	    for (var i = 0; i < nodes.length; i++) {
	        dom_adapter_1.getDOM().appendChild(parent, nodes[i]);
	    }
	}
	function decoratePreventDefault(eventHandler) {
	    return function (event) {
	        var allowDefaultBehavior = eventHandler(event);
	        if (allowDefaultBehavior === false) {
	            // TODO(tbosch): move preventDefault into event plugins...
	            dom_adapter_1.getDOM().preventDefault(event);
	        }
	    };
	}
	var COMPONENT_REGEX = /%COMP%/g;
	exports.COMPONENT_VARIABLE = '%COMP%';
	exports.HOST_ATTR = "_nghost-" + exports.COMPONENT_VARIABLE;
	exports.CONTENT_ATTR = "_ngcontent-" + exports.COMPONENT_VARIABLE;
	function _shimContentAttribute(componentShortId) {
	    return lang_1.StringWrapper.replaceAll(exports.CONTENT_ATTR, COMPONENT_REGEX, componentShortId);
	}
	function _shimHostAttribute(componentShortId) {
	    return lang_1.StringWrapper.replaceAll(exports.HOST_ATTR, COMPONENT_REGEX, componentShortId);
	}
	function _flattenStyles(compId, styles, target) {
	    for (var i = 0; i < styles.length; i++) {
	        var style = styles[i];
	        if (lang_1.isArray(style)) {
	            _flattenStyles(compId, style, target);
	        }
	        else {
	            style = lang_1.StringWrapper.replaceAll(style, COMPONENT_REGEX, compId);
	            target.push(style);
	        }
	    }
	    return target;
	}
	var NS_PREFIX_RE = /^@([^:]+):(.+)/g;
	function splitNamespace(name) {
	    if (name[0] != '@') {
	        return [null, name];
	    }
	    var match = lang_1.RegExpWrapper.firstMatch(NS_PREFIX_RE, name);
	    return [match[1], match[2]];
	}
	//# sourceMappingURL=dom_renderer.js.map

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var css_animation_builder_1 = __webpack_require__(260);
	var browser_details_1 = __webpack_require__(265);
	var AnimationBuilder = (function () {
	    /**
	     * Used for DI
	     * @param browserDetails
	     */
	    function AnimationBuilder(browserDetails) {
	        this.browserDetails = browserDetails;
	    }
	    /**
	     * Creates a new CSS Animation
	     * @returns {CssAnimationBuilder}
	     */
	    AnimationBuilder.prototype.css = function () { return new css_animation_builder_1.CssAnimationBuilder(this.browserDetails); };
	    AnimationBuilder.decorators = [
	        { type: core_1.Injectable },
	    ];
	    AnimationBuilder.ctorParameters = [
	        { type: browser_details_1.BrowserDetails, },
	    ];
	    return AnimationBuilder;
	}());
	exports.AnimationBuilder = AnimationBuilder;
	//# sourceMappingURL=animation_builder.js.map

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var css_animation_options_1 = __webpack_require__(261);
	var animation_1 = __webpack_require__(262);
	var CssAnimationBuilder = (function () {
	    /**
	     * Accepts public properties for CssAnimationBuilder
	     */
	    function CssAnimationBuilder(browserDetails) {
	        this.browserDetails = browserDetails;
	        /** @type {CssAnimationOptions} */
	        this.data = new css_animation_options_1.CssAnimationOptions();
	    }
	    /**
	     * Adds a temporary class that will be removed at the end of the animation
	     * @param className
	     */
	    CssAnimationBuilder.prototype.addAnimationClass = function (className) {
	        this.data.animationClasses.push(className);
	        return this;
	    };
	    /**
	     * Adds a class that will remain on the element after the animation has finished
	     * @param className
	     */
	    CssAnimationBuilder.prototype.addClass = function (className) {
	        this.data.classesToAdd.push(className);
	        return this;
	    };
	    /**
	     * Removes a class from the element
	     * @param className
	     */
	    CssAnimationBuilder.prototype.removeClass = function (className) {
	        this.data.classesToRemove.push(className);
	        return this;
	    };
	    /**
	     * Sets the animation duration (and overrides any defined through CSS)
	     * @param duration
	     */
	    CssAnimationBuilder.prototype.setDuration = function (duration) {
	        this.data.duration = duration;
	        return this;
	    };
	    /**
	     * Sets the animation delay (and overrides any defined through CSS)
	     * @param delay
	     */
	    CssAnimationBuilder.prototype.setDelay = function (delay) {
	        this.data.delay = delay;
	        return this;
	    };
	    /**
	     * Sets styles for both the initial state and the destination state
	     * @param from
	     * @param to
	     */
	    CssAnimationBuilder.prototype.setStyles = function (from, to) {
	        return this.setFromStyles(from).setToStyles(to);
	    };
	    /**
	     * Sets the initial styles for the animation
	     * @param from
	     */
	    CssAnimationBuilder.prototype.setFromStyles = function (from) {
	        this.data.fromStyles = from;
	        return this;
	    };
	    /**
	     * Sets the destination styles for the animation
	     * @param to
	     */
	    CssAnimationBuilder.prototype.setToStyles = function (to) {
	        this.data.toStyles = to;
	        return this;
	    };
	    /**
	     * Starts the animation and returns a promise
	     * @param element
	     */
	    CssAnimationBuilder.prototype.start = function (element) {
	        return new animation_1.Animation(element, this.data, this.browserDetails);
	    };
	    return CssAnimationBuilder;
	}());
	exports.CssAnimationBuilder = CssAnimationBuilder;
	//# sourceMappingURL=css_animation_builder.js.map

/***/ },
/* 261 */
/***/ function(module, exports) {

	"use strict";
	var CssAnimationOptions = (function () {
	    function CssAnimationOptions() {
	        /** classes to be added to the element */
	        this.classesToAdd = [];
	        /** classes to be removed from the element */
	        this.classesToRemove = [];
	        /** classes to be added for the duration of the animation */
	        this.animationClasses = [];
	    }
	    return CssAnimationOptions;
	}());
	exports.CssAnimationOptions = CssAnimationOptions;
	//# sourceMappingURL=css_animation_options.js.map

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(179);
	var math_1 = __webpack_require__(263);
	var collection_1 = __webpack_require__(249);
	var util_1 = __webpack_require__(264);
	var dom_adapter_1 = __webpack_require__(251);
	var Animation = (function () {
	    /**
	     * Stores the start time and starts the animation
	     * @param element
	     * @param data
	     * @param browserDetails
	     */
	    function Animation(element, data, browserDetails) {
	        var _this = this;
	        this.element = element;
	        this.data = data;
	        this.browserDetails = browserDetails;
	        /** functions to be called upon completion */
	        this.callbacks = [];
	        /** functions for removing event listeners */
	        this.eventClearFunctions = [];
	        /** flag used to track whether or not the animation has finished */
	        this.completed = false;
	        this._stringPrefix = '';
	        this.startTime = lang_1.DateWrapper.toMillis(lang_1.DateWrapper.now());
	        this._stringPrefix = dom_adapter_1.getDOM().getAnimationPrefix();
	        this.setup();
	        this.wait(function (timestamp) { return _this.start(); });
	    }
	    Object.defineProperty(Animation.prototype, "totalTime", {
	        /** total amount of time that the animation should take including delay */
	        get: function () {
	            var delay = this.computedDelay != null ? this.computedDelay : 0;
	            var duration = this.computedDuration != null ? this.computedDuration : 0;
	            return delay + duration;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Animation.prototype.wait = function (callback) {
	        // Firefox requires 2 frames for some reason
	        this.browserDetails.raf(callback, 2);
	    };
	    /**
	     * Sets up the initial styles before the animation is started
	     */
	    Animation.prototype.setup = function () {
	        if (this.data.fromStyles != null)
	            this.applyStyles(this.data.fromStyles);
	        if (this.data.duration != null)
	            this.applyStyles({ 'transitionDuration': this.data.duration.toString() + 'ms' });
	        if (this.data.delay != null)
	            this.applyStyles({ 'transitionDelay': this.data.delay.toString() + 'ms' });
	    };
	    /**
	     * After the initial setup has occurred, this method adds the animation styles
	     */
	    Animation.prototype.start = function () {
	        this.addClasses(this.data.classesToAdd);
	        this.addClasses(this.data.animationClasses);
	        this.removeClasses(this.data.classesToRemove);
	        if (this.data.toStyles != null)
	            this.applyStyles(this.data.toStyles);
	        var computedStyles = dom_adapter_1.getDOM().getComputedStyle(this.element);
	        this.computedDelay =
	            math_1.Math.max(this.parseDurationString(computedStyles.getPropertyValue(this._stringPrefix + 'transition-delay')), this.parseDurationString(this.element.style.getPropertyValue(this._stringPrefix + 'transition-delay')));
	        this.computedDuration = math_1.Math.max(this.parseDurationString(computedStyles.getPropertyValue(this._stringPrefix + 'transition-duration')), this.parseDurationString(this.element.style.getPropertyValue(this._stringPrefix + 'transition-duration')));
	        this.addEvents();
	    };
	    /**
	     * Applies the provided styles to the element
	     * @param styles
	     */
	    Animation.prototype.applyStyles = function (styles) {
	        var _this = this;
	        collection_1.StringMapWrapper.forEach(styles, function (value, key) {
	            var dashCaseKey = util_1.camelCaseToDashCase(key);
	            if (lang_1.isPresent(dom_adapter_1.getDOM().getStyle(_this.element, dashCaseKey))) {
	                dom_adapter_1.getDOM().setStyle(_this.element, dashCaseKey, value.toString());
	            }
	            else {
	                dom_adapter_1.getDOM().setStyle(_this.element, _this._stringPrefix + dashCaseKey, value.toString());
	            }
	        });
	    };
	    /**
	     * Adds the provided classes to the element
	     * @param classes
	     */
	    Animation.prototype.addClasses = function (classes) {
	        for (var i = 0, len = classes.length; i < len; i++)
	            dom_adapter_1.getDOM().addClass(this.element, classes[i]);
	    };
	    /**
	     * Removes the provided classes from the element
	     * @param classes
	     */
	    Animation.prototype.removeClasses = function (classes) {
	        for (var i = 0, len = classes.length; i < len; i++)
	            dom_adapter_1.getDOM().removeClass(this.element, classes[i]);
	    };
	    /**
	     * Adds events to track when animations have finished
	     */
	    Animation.prototype.addEvents = function () {
	        var _this = this;
	        if (this.totalTime > 0) {
	            this.eventClearFunctions.push(dom_adapter_1.getDOM().onAndCancel(this.element, dom_adapter_1.getDOM().getTransitionEnd(), function (event) { return _this.handleAnimationEvent(event); }));
	        }
	        else {
	            this.handleAnimationCompleted();
	        }
	    };
	    Animation.prototype.handleAnimationEvent = function (event) {
	        var elapsedTime = math_1.Math.round(event.elapsedTime * 1000);
	        if (!this.browserDetails.elapsedTimeIncludesDelay)
	            elapsedTime += this.computedDelay;
	        event.stopPropagation();
	        if (elapsedTime >= this.totalTime)
	            this.handleAnimationCompleted();
	    };
	    /**
	     * Runs all animation callbacks and removes temporary classes
	     */
	    Animation.prototype.handleAnimationCompleted = function () {
	        this.removeClasses(this.data.animationClasses);
	        this.callbacks.forEach(function (callback) { return callback(); });
	        this.callbacks = [];
	        this.eventClearFunctions.forEach(function (fn) { return fn(); });
	        this.eventClearFunctions = [];
	        this.completed = true;
	    };
	    /**
	     * Adds animation callbacks to be called upon completion
	     * @param callback
	     * @returns {Animation}
	     */
	    Animation.prototype.onComplete = function (callback) {
	        if (this.completed) {
	            callback();
	        }
	        else {
	            this.callbacks.push(callback);
	        }
	        return this;
	    };
	    /**
	     * Converts the duration string to the number of milliseconds
	     * @param duration
	     * @returns {number}
	     */
	    Animation.prototype.parseDurationString = function (duration) {
	        var maxValue = 0;
	        // duration must have at least 2 characters to be valid. (number + type)
	        if (duration == null || duration.length < 2) {
	            return maxValue;
	        }
	        else if (duration.substring(duration.length - 2) == 'ms') {
	            var value = lang_1.NumberWrapper.parseInt(this.stripLetters(duration), 10);
	            if (value > maxValue)
	                maxValue = value;
	        }
	        else if (duration.substring(duration.length - 1) == 's') {
	            var ms = lang_1.NumberWrapper.parseFloat(this.stripLetters(duration)) * 1000;
	            var value = math_1.Math.floor(ms);
	            if (value > maxValue)
	                maxValue = value;
	        }
	        return maxValue;
	    };
	    /**
	     * Strips the letters from the duration string
	     * @param str
	     * @returns {string}
	     */
	    Animation.prototype.stripLetters = function (str) {
	        return lang_1.StringWrapper.replaceAll(str, lang_1.RegExpWrapper.create('[^0-9]+$', ''), '');
	    };
	    return Animation;
	}());
	exports.Animation = Animation;
	//# sourceMappingURL=animation.js.map

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(179);
	exports.Math = lang_1.global.Math;
	exports.NaN = typeof exports.NaN;
	//# sourceMappingURL=math.js.map

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(179);
	var CAMEL_CASE_REGEXP = /([A-Z])/g;
	var DASH_CASE_REGEXP = /-([a-z])/g;
	function camelCaseToDashCase(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m) { return '-' + m[1].toLowerCase(); });
	}
	exports.camelCaseToDashCase = camelCaseToDashCase;
	function dashCaseToCamelCase(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function (m) { return m[1].toUpperCase(); });
	}
	exports.dashCaseToCamelCase = dashCaseToCamelCase;
	//# sourceMappingURL=util.js.map

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var math_1 = __webpack_require__(263);
	var dom_adapter_1 = __webpack_require__(251);
	var BrowserDetails = (function () {
	    function BrowserDetails() {
	        this.elapsedTimeIncludesDelay = false;
	        this.doesElapsedTimeIncludesDelay();
	    }
	    /**
	     * Determines if `event.elapsedTime` includes transition delay in the current browser.  At this
	     * time, Chrome and Opera seem to be the only browsers that include this.
	     */
	    BrowserDetails.prototype.doesElapsedTimeIncludesDelay = function () {
	        var _this = this;
	        var div = dom_adapter_1.getDOM().createElement('div');
	        dom_adapter_1.getDOM().setAttribute(div, 'style', "position: absolute; top: -9999px; left: -9999px; width: 1px;\n      height: 1px; transition: all 1ms linear 1ms;");
	        // Firefox requires that we wait for 2 frames for some reason
	        this.raf(function (timestamp) {
	            dom_adapter_1.getDOM().on(div, 'transitionend', function (event) {
	                var elapsed = math_1.Math.round(event.elapsedTime * 1000);
	                _this.elapsedTimeIncludesDelay = elapsed == 2;
	                dom_adapter_1.getDOM().remove(div);
	            });
	            dom_adapter_1.getDOM().setStyle(div, 'width', '2px');
	        }, 2);
	    };
	    BrowserDetails.prototype.raf = function (callback, frames) {
	        if (frames === void 0) { frames = 1; }
	        var queue = new RafQueue(callback, frames);
	        return function () { return queue.cancel(); };
	    };
	    BrowserDetails.decorators = [
	        { type: core_1.Injectable },
	    ];
	    BrowserDetails.ctorParameters = [];
	    return BrowserDetails;
	}());
	exports.BrowserDetails = BrowserDetails;
	var RafQueue = (function () {
	    function RafQueue(callback, frames) {
	        this.callback = callback;
	        this.frames = frames;
	        this._raf();
	    }
	    RafQueue.prototype._raf = function () {
	        var _this = this;
	        this.currentFrameId =
	            dom_adapter_1.getDOM().requestAnimationFrame(function (timestamp) { return _this._nextFrame(timestamp); });
	    };
	    RafQueue.prototype._nextFrame = function (timestamp) {
	        this.frames--;
	        if (this.frames > 0) {
	            this._raf();
	        }
	        else {
	            this.callback(timestamp);
	        }
	    };
	    RafQueue.prototype.cancel = function () {
	        dom_adapter_1.getDOM().cancelAnimationFrame(this.currentFrameId);
	        this.currentFrameId = null;
	    };
	    return RafQueue;
	}());
	//# sourceMappingURL=browser_details.js.map

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var collection_1 = __webpack_require__(249);
	var dom_adapter_1 = __webpack_require__(251);
	var dom_tokens_1 = __webpack_require__(253);
	var SharedStylesHost = (function () {
	    function SharedStylesHost() {
	        /** @internal */
	        this._styles = [];
	        /** @internal */
	        this._stylesSet = new Set();
	    }
	    SharedStylesHost.prototype.addStyles = function (styles) {
	        var _this = this;
	        var additions = [];
	        styles.forEach(function (style) {
	            if (!collection_1.SetWrapper.has(_this._stylesSet, style)) {
	                _this._stylesSet.add(style);
	                _this._styles.push(style);
	                additions.push(style);
	            }
	        });
	        this.onStylesAdded(additions);
	    };
	    SharedStylesHost.prototype.onStylesAdded = function (additions) { };
	    SharedStylesHost.prototype.getAllStyles = function () { return this._styles; };
	    SharedStylesHost.decorators = [
	        { type: core_1.Injectable },
	    ];
	    SharedStylesHost.ctorParameters = [];
	    return SharedStylesHost;
	}());
	exports.SharedStylesHost = SharedStylesHost;
	var DomSharedStylesHost = (function (_super) {
	    __extends(DomSharedStylesHost, _super);
	    function DomSharedStylesHost(doc) {
	        _super.call(this);
	        this._hostNodes = new Set();
	        this._hostNodes.add(doc.head);
	    }
	    /** @internal */
	    DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
	        for (var i = 0; i < styles.length; i++) {
	            var style = styles[i];
	            dom_adapter_1.getDOM().appendChild(host, dom_adapter_1.getDOM().createStyleElement(style));
	        }
	    };
	    DomSharedStylesHost.prototype.addHost = function (hostNode) {
	        this._addStylesToHost(this._styles, hostNode);
	        this._hostNodes.add(hostNode);
	    };
	    DomSharedStylesHost.prototype.removeHost = function (hostNode) { collection_1.SetWrapper.delete(this._hostNodes, hostNode); };
	    DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
	        var _this = this;
	        this._hostNodes.forEach(function (hostNode) { _this._addStylesToHost(additions, hostNode); });
	    };
	    DomSharedStylesHost.decorators = [
	        { type: core_1.Injectable },
	    ];
	    DomSharedStylesHost.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Inject, args: [dom_tokens_1.DOCUMENT,] },] },
	    ];
	    return DomSharedStylesHost;
	}(SharedStylesHost));
	exports.DomSharedStylesHost = DomSharedStylesHost;
	//# sourceMappingURL=shared_styles_host.js.map

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(179);
	var collection_1 = __webpack_require__(249);
	var dom_adapter_1 = __webpack_require__(251);
	var event_manager_1 = __webpack_require__(254);
	var modifierKeys = ['alt', 'control', 'meta', 'shift'];
	var modifierKeyGetters = {
	    'alt': function (event) { return event.altKey; },
	    'control': function (event) { return event.ctrlKey; },
	    'meta': function (event) { return event.metaKey; },
	    'shift': function (event) { return event.shiftKey; }
	};
	var KeyEventsPlugin = (function (_super) {
	    __extends(KeyEventsPlugin, _super);
	    function KeyEventsPlugin() {
	        _super.call(this);
	    }
	    KeyEventsPlugin.prototype.supports = function (eventName) {
	        return lang_1.isPresent(KeyEventsPlugin.parseEventName(eventName));
	    };
	    KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        var parsedEvent = KeyEventsPlugin.parseEventName(eventName);
	        var outsideHandler = KeyEventsPlugin.eventCallback(element, collection_1.StringMapWrapper.get(parsedEvent, 'fullKey'), handler, this.manager.getZone());
	        return this.manager.getZone().runOutsideAngular(function () {
	            return dom_adapter_1.getDOM().onAndCancel(element, collection_1.StringMapWrapper.get(parsedEvent, 'domEventName'), outsideHandler);
	        });
	    };
	    KeyEventsPlugin.parseEventName = function (eventName) {
	        var parts = eventName.toLowerCase().split('.');
	        var domEventName = parts.shift();
	        if ((parts.length === 0) ||
	            !(lang_1.StringWrapper.equals(domEventName, 'keydown') ||
	                lang_1.StringWrapper.equals(domEventName, 'keyup'))) {
	            return null;
	        }
	        var key = KeyEventsPlugin._normalizeKey(parts.pop());
	        var fullKey = '';
	        modifierKeys.forEach(function (modifierName) {
	            if (collection_1.ListWrapper.contains(parts, modifierName)) {
	                collection_1.ListWrapper.remove(parts, modifierName);
	                fullKey += modifierName + '.';
	            }
	        });
	        fullKey += key;
	        if (parts.length != 0 || key.length === 0) {
	            // returning null instead of throwing to let another plugin process the event
	            return null;
	        }
	        var result = collection_1.StringMapWrapper.create();
	        collection_1.StringMapWrapper.set(result, 'domEventName', domEventName);
	        collection_1.StringMapWrapper.set(result, 'fullKey', fullKey);
	        return result;
	    };
	    KeyEventsPlugin.getEventFullKey = function (event) {
	        var fullKey = '';
	        var key = dom_adapter_1.getDOM().getEventKey(event);
	        key = key.toLowerCase();
	        if (lang_1.StringWrapper.equals(key, ' ')) {
	            key = 'space'; // for readability
	        }
	        else if (lang_1.StringWrapper.equals(key, '.')) {
	            key = 'dot'; // because '.' is used as a separator in event names
	        }
	        modifierKeys.forEach(function (modifierName) {
	            if (modifierName != key) {
	                var modifierGetter = collection_1.StringMapWrapper.get(modifierKeyGetters, modifierName);
	                if (modifierGetter(event)) {
	                    fullKey += modifierName + '.';
	                }
	            }
	        });
	        fullKey += key;
	        return fullKey;
	    };
	    KeyEventsPlugin.eventCallback = function (element, fullKey, handler, zone) {
	        return function (event) {
	            if (lang_1.StringWrapper.equals(KeyEventsPlugin.getEventFullKey(event), fullKey)) {
	                zone.runGuarded(function () { return handler(event); });
	            }
	        };
	    };
	    /** @internal */
	    KeyEventsPlugin._normalizeKey = function (keyName) {
	        // TODO: switch to a StringMap if the mapping grows too much
	        switch (keyName) {
	            case 'esc':
	                return 'escape';
	            default:
	                return keyName;
	        }
	    };
	    KeyEventsPlugin.decorators = [
	        { type: core_1.Injectable },
	    ];
	    KeyEventsPlugin.ctorParameters = [];
	    return KeyEventsPlugin;
	}(event_manager_1.EventManagerPlugin));
	exports.KeyEventsPlugin = KeyEventsPlugin;
	//# sourceMappingURL=key_events.js.map

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var core_private_1 = __webpack_require__(181);
	var lang_1 = __webpack_require__(179);
	var dom_adapter_1 = __webpack_require__(251);
	var dom_renderer_1 = __webpack_require__(258);
	var CORE_TOKENS = { 'ApplicationRef': core_1.ApplicationRef, 'NgZone': core_1.NgZone };
	var INSPECT_GLOBAL_NAME = 'ng.probe';
	var CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
	/**
	 * Returns a {@link DebugElement} for the given native DOM element, or
	 * null if the given native element does not have an Angular view associated
	 * with it.
	 */
	function inspectNativeElement(element) {
	    return core_1.getDebugNode(element);
	}
	exports.inspectNativeElement = inspectNativeElement;
	function _createConditionalRootRenderer(rootRenderer) {
	    if (lang_1.assertionsEnabled()) {
	        return _createRootRenderer(rootRenderer);
	    }
	    return rootRenderer;
	}
	function _createRootRenderer(rootRenderer) {
	    dom_adapter_1.getDOM().setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
	    dom_adapter_1.getDOM().setGlobalVar(CORE_TOKENS_GLOBAL_NAME, CORE_TOKENS);
	    return new core_private_1.DebugDomRootRenderer(rootRenderer);
	}
	/**
	 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
	 */
	exports.ELEMENT_PROBE_PROVIDERS = [
	    /*@ts2dart_Provider*/ {
	        provide: core_1.RootRenderer,
	        useFactory: _createConditionalRootRenderer,
	        deps: [dom_renderer_1.DomRootRenderer]
	    }
	];
	exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = [
	    /*@ts2dart_Provider*/ {
	        provide: core_1.RootRenderer,
	        useFactory: _createRootRenderer,
	        deps: [dom_renderer_1.DomRootRenderer]
	    }
	];
	//# sourceMappingURL=ng_probe.js.map

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var dom_adapter_1 = __webpack_require__(251);
	var event_manager_1 = __webpack_require__(254);
	var DomEventsPlugin = (function (_super) {
	    __extends(DomEventsPlugin, _super);
	    function DomEventsPlugin() {
	        _super.apply(this, arguments);
	    }
	    // This plugin should come last in the list of plugins, because it accepts all
	    // events.
	    DomEventsPlugin.prototype.supports = function (eventName) { return true; };
	    DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        var zone = this.manager.getZone();
	        var outsideHandler = function (event) { return zone.runGuarded(function () { return handler(event); }); };
	        return this.manager.getZone().runOutsideAngular(function () { return dom_adapter_1.getDOM().onAndCancel(element, eventName, outsideHandler); });
	    };
	    DomEventsPlugin.prototype.addGlobalEventListener = function (target, eventName, handler) {
	        var element = dom_adapter_1.getDOM().getGlobalEventTarget(target);
	        var zone = this.manager.getZone();
	        var outsideHandler = function (event) { return zone.runGuarded(function () { return handler(event); }); };
	        return this.manager.getZone().runOutsideAngular(function () { return dom_adapter_1.getDOM().onAndCancel(element, eventName, outsideHandler); });
	    };
	    DomEventsPlugin.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return DomEventsPlugin;
	}(event_manager_1.EventManagerPlugin));
	exports.DomEventsPlugin = DomEventsPlugin;
	//# sourceMappingURL=dom_events.js.map

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(179);
	var exceptions_1 = __webpack_require__(255);
	var hammer_common_1 = __webpack_require__(271);
	exports.HAMMER_GESTURE_CONFIG = 
	/*@ts2dart_const*/ new core_1.OpaqueToken("HammerGestureConfig");
	var HammerGestureConfig = (function () {
	    function HammerGestureConfig() {
	        this.events = [];
	        this.overrides = {};
	    }
	    HammerGestureConfig.prototype.buildHammer = function (element) {
	        var mc = new Hammer(element);
	        mc.get('pinch').set({ enable: true });
	        mc.get('rotate').set({ enable: true });
	        for (var eventName in this.overrides) {
	            mc.get(eventName).set(this.overrides[eventName]);
	        }
	        return mc;
	    };
	    HammerGestureConfig.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return HammerGestureConfig;
	}());
	exports.HammerGestureConfig = HammerGestureConfig;
	var HammerGesturesPlugin = (function (_super) {
	    __extends(HammerGesturesPlugin, _super);
	    function HammerGesturesPlugin(_config) {
	        _super.call(this);
	        this._config = _config;
	    }
	    HammerGesturesPlugin.prototype.supports = function (eventName) {
	        if (!_super.prototype.supports.call(this, eventName) && !this.isCustomEvent(eventName))
	            return false;
	        if (!lang_1.isPresent(window['Hammer'])) {
	            throw new exceptions_1.BaseException("Hammer.js is not loaded, can not bind " + eventName + " event");
	        }
	        return true;
	    };
	    HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        var _this = this;
	        var zone = this.manager.getZone();
	        eventName = eventName.toLowerCase();
	        return zone.runOutsideAngular(function () {
	            // Creating the manager bind events, must be done outside of angular
	            var mc = _this._config.buildHammer(element);
	            var callback = function (eventObj) { zone.runGuarded(function () { handler(eventObj); }); };
	            mc.on(eventName, callback);
	            return function () { mc.off(eventName, callback); };
	        });
	    };
	    HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
	    HammerGesturesPlugin.decorators = [
	        { type: core_1.Injectable },
	    ];
	    HammerGesturesPlugin.ctorParameters = [
	        { type: HammerGestureConfig, decorators: [{ type: core_1.Inject, args: [exports.HAMMER_GESTURE_CONFIG,] },] },
	    ];
	    return HammerGesturesPlugin;
	}(hammer_common_1.HammerGesturesPluginCommon));
	exports.HammerGesturesPlugin = HammerGesturesPlugin;
	//# sourceMappingURL=hammer_gestures.js.map

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var event_manager_1 = __webpack_require__(254);
	var collection_1 = __webpack_require__(249);
	var _eventNames = {
	    // pan
	    'pan': true,
	    'panstart': true,
	    'panmove': true,
	    'panend': true,
	    'pancancel': true,
	    'panleft': true,
	    'panright': true,
	    'panup': true,
	    'pandown': true,
	    // pinch
	    'pinch': true,
	    'pinchstart': true,
	    'pinchmove': true,
	    'pinchend': true,
	    'pinchcancel': true,
	    'pinchin': true,
	    'pinchout': true,
	    // press
	    'press': true,
	    'pressup': true,
	    // rotate
	    'rotate': true,
	    'rotatestart': true,
	    'rotatemove': true,
	    'rotateend': true,
	    'rotatecancel': true,
	    // swipe
	    'swipe': true,
	    'swipeleft': true,
	    'swiperight': true,
	    'swipeup': true,
	    'swipedown': true,
	    // tap
	    'tap': true,
	};
	var HammerGesturesPluginCommon = (function (_super) {
	    __extends(HammerGesturesPluginCommon, _super);
	    function HammerGesturesPluginCommon() {
	        _super.call(this);
	    }
	    HammerGesturesPluginCommon.prototype.supports = function (eventName) {
	        eventName = eventName.toLowerCase();
	        return collection_1.StringMapWrapper.contains(_eventNames, eventName);
	    };
	    return HammerGesturesPluginCommon;
	}(event_manager_1.EventManagerPlugin));
	exports.HammerGesturesPluginCommon = HammerGesturesPluginCommon;
	//# sourceMappingURL=hammer_common.js.map

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var dom_adapter_1 = __webpack_require__(251);
	/**
	 * A service that can be used to get and set the title of a current HTML document.
	 *
	 * Since an Angular 2 application can't be bootstrapped on the entire HTML document (`<html>` tag)
	 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
	 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
	 * title value.
	 */
	var Title = (function () {
	    function Title() {
	    }
	    /**
	     * Get the title of the current HTML document.
	     * @returns {string}
	     */
	    Title.prototype.getTitle = function () { return dom_adapter_1.getDOM().getTitle(); };
	    /**
	     * Set the title of the current HTML document.
	     * @param newTitle
	     */
	    Title.prototype.setTitle = function (newTitle) { dom_adapter_1.getDOM().setTitle(newTitle); };
	    return Title;
	}());
	exports.Title = Title;
	//# sourceMappingURL=title.js.map

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(179);
	var common_tools_1 = __webpack_require__(274);
	var context = lang_1.global;
	/**
	 * Enabled Angular 2 debug tools that are accessible via your browser's
	 * developer console.
	 *
	 * Usage:
	 *
	 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
	 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
	 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
	 *    then hit Enter.
	 */
	function enableDebugTools(ref) {
	    context.ng = new common_tools_1.AngularTools(ref);
	}
	exports.enableDebugTools = enableDebugTools;
	/**
	 * Disables Angular 2 tools.
	 */
	function disableDebugTools() {
	    delete context.ng;
	}
	exports.disableDebugTools = disableDebugTools;
	//# sourceMappingURL=tools.js.map

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(179);
	var browser_1 = __webpack_require__(275);
	var dom_adapter_1 = __webpack_require__(251);
	var ChangeDetectionPerfRecord = (function () {
	    function ChangeDetectionPerfRecord(msPerTick, numTicks) {
	        this.msPerTick = msPerTick;
	        this.numTicks = numTicks;
	    }
	    return ChangeDetectionPerfRecord;
	}());
	exports.ChangeDetectionPerfRecord = ChangeDetectionPerfRecord;
	/**
	 * Entry point for all Angular debug tools. This object corresponds to the `ng`
	 * global variable accessible in the dev console.
	 */
	var AngularTools = (function () {
	    function AngularTools(ref) {
	        this.profiler = new AngularProfiler(ref);
	    }
	    return AngularTools;
	}());
	exports.AngularTools = AngularTools;
	/**
	 * Entry point for all Angular profiling-related debug tools. This object
	 * corresponds to the `ng.profiler` in the dev console.
	 */
	var AngularProfiler = (function () {
	    function AngularProfiler(ref) {
	        this.appRef = ref.injector.get(core_1.ApplicationRef);
	    }
	    /**
	     * Exercises change detection in a loop and then prints the average amount of
	     * time in milliseconds how long a single round of change detection takes for
	     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
	     * of 500 milliseconds.
	     *
	     * Optionally, a user may pass a `config` parameter containing a map of
	     * options. Supported options are:
	     *
	     * `record` (boolean) - causes the profiler to record a CPU profile while
	     * it exercises the change detector. Example:
	     *
	     * ```
	     * ng.profiler.timeChangeDetection({record: true})
	     * ```
	     */
	    AngularProfiler.prototype.timeChangeDetection = function (config) {
	        var record = lang_1.isPresent(config) && config['record'];
	        var profileName = 'Change Detection';
	        // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
	        var isProfilerAvailable = lang_1.isPresent(browser_1.window.console.profile);
	        if (record && isProfilerAvailable) {
	            browser_1.window.console.profile(profileName);
	        }
	        var start = dom_adapter_1.getDOM().performanceNow();
	        var numTicks = 0;
	        while (numTicks < 5 || (dom_adapter_1.getDOM().performanceNow() - start) < 500) {
	            this.appRef.tick();
	            numTicks++;
	        }
	        var end = dom_adapter_1.getDOM().performanceNow();
	        if (record && isProfilerAvailable) {
	            // need to cast to <any> because type checker thinks there's no argument
	            // while in fact there is:
	            //
	            // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
	            browser_1.window.console.profileEnd(profileName);
	        }
	        var msPerTick = (end - start) / numTicks;
	        browser_1.window.console.log("ran " + numTicks + " change detection cycles");
	        browser_1.window.console.log(lang_1.NumberWrapper.toFixed(msPerTick, 2) + " ms per check");
	        return new ChangeDetectionPerfRecord(msPerTick, numTicks);
	    };
	    return AngularProfiler;
	}());
	exports.AngularProfiler = AngularProfiler;
	//# sourceMappingURL=common_tools.js.map

/***/ },
/* 275 */
/***/ function(module, exports) {

	"use strict";
	/**
	* JS version of browser APIs. This library can only run in the browser.
	*/
	var win = typeof window !== 'undefined' && window || {};
	exports.window = win;
	exports.document = win.document;
	exports.location = win.location;
	exports.gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
	exports.performance = win['performance'] ? win['performance'] : null;
	exports.Event = win['Event'];
	exports.MouseEvent = win['MouseEvent'];
	exports.KeyboardEvent = win['KeyboardEvent'];
	exports.EventTarget = win['EventTarget'];
	exports.History = win['History'];
	exports.Location = win['Location'];
	exports.EventListener = win['EventListener'];
	//# sourceMappingURL=browser.js.map

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(179);
	var dom_adapter_1 = __webpack_require__(251);
	/**
	 * Predicates for use with {@link DebugElement}'s query functions.
	 */
	var By = (function () {
	    function By() {
	    }
	    /**
	     * Match all elements.
	     *
	     * ## Example
	     *
	     * {@example platform/dom/debug/ts/by/by.ts region='by_all'}
	     */
	    By.all = function () { return function (debugElement) { return true; }; };
	    /**
	     * Match elements by the given CSS selector.
	     *
	     * ## Example
	     *
	     * {@example platform/dom/debug/ts/by/by.ts region='by_css'}
	     */
	    By.css = function (selector) {
	        return function (debugElement) {
	            return lang_1.isPresent(debugElement.nativeElement) ?
	                dom_adapter_1.getDOM().elementMatches(debugElement.nativeElement, selector) :
	                false;
	        };
	    };
	    /**
	     * Match elements that have the given directive present.
	     *
	     * ## Example
	     *
	     * {@example platform/dom/debug/ts/by/by.ts region='by_directive'}
	     */
	    By.directive = function (type) {
	        return function (debugElement) { return debugElement.providerTokens.indexOf(type) !== -1; };
	    };
	    return By;
	}());
	exports.By = By;
	//# sourceMappingURL=by.js.map

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var animation_builder = __webpack_require__(259);
	var css_animation_builder = __webpack_require__(260);
	var browser_details = __webpack_require__(265);
	var css_animation_options = __webpack_require__(261);
	var animation = __webpack_require__(262);
	var dom_adapter = __webpack_require__(251);
	var browser_adapter = __webpack_require__(248);
	var __platform_browser_private__;
	(function (__platform_browser_private__) {
	    __platform_browser_private__.DomAdapter = dom_adapter.DomAdapter;
	    function getDOM() { return dom_adapter.getDOM(); }
	    __platform_browser_private__.getDOM = getDOM;
	    function setDOM(adapter) { return dom_adapter.setDOM(adapter); }
	    __platform_browser_private__.setDOM = setDOM;
	    __platform_browser_private__.setRootDomAdapter = dom_adapter.setRootDomAdapter;
	    __platform_browser_private__.BrowserDomAdapter = browser_adapter.BrowserDomAdapter;
	    __platform_browser_private__.AnimationBuilder = animation_builder.AnimationBuilder;
	    __platform_browser_private__.CssAnimationBuilder = css_animation_builder.CssAnimationBuilder;
	    __platform_browser_private__.CssAnimationOptions = css_animation_options.CssAnimationOptions;
	    __platform_browser_private__.Animation = animation.Animation;
	    __platform_browser_private__.BrowserDetails = browser_details.BrowserDetails;
	})(__platform_browser_private__ = exports.__platform_browser_private__ || (exports.__platform_browser_private__ = {}));
	//# sourceMappingURL=private_export.js.map

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(179);
	var browser_common_1 = __webpack_require__(180);
	var ng_probe_1 = __webpack_require__(268);
	exports.ELEMENT_PROBE_PROVIDERS = ng_probe_1.ELEMENT_PROBE_PROVIDERS;
	var browser_platform_location_1 = __webpack_require__(279);
	exports.BrowserPlatformLocation = browser_platform_location_1.BrowserPlatformLocation;
	var browser_common_2 = __webpack_require__(180);
	exports.BROWSER_PROVIDERS = browser_common_2.BROWSER_PROVIDERS;
	exports.By = browser_common_2.By;
	exports.Title = browser_common_2.Title;
	exports.enableDebugTools = browser_common_2.enableDebugTools;
	exports.disableDebugTools = browser_common_2.disableDebugTools;
	/**
	 * An array of providers that should be passed into `application()` when bootstrapping a component
	 * when all templates
	 * have been precompiled offline.
	 */
	exports.BROWSER_APP_STATIC_PROVIDERS = 
	/*@ts2dart_const*/ browser_common_1.BROWSER_APP_COMMON_PROVIDERS;
	function browserStaticPlatform() {
	    if (lang_1.isBlank(core_1.getPlatform())) {
	        core_1.createPlatform(core_1.ReflectiveInjector.resolveAndCreate(browser_common_1.BROWSER_PROVIDERS));
	    }
	    return core_1.assertPlatform(browser_common_1.BROWSER_PLATFORM_MARKER);
	}
	exports.browserStaticPlatform = browserStaticPlatform;
	/**
	 * See {@link bootstrap} for more information.
	 */
	function bootstrapStatic(appComponentType, customProviders, initReflector) {
	    if (lang_1.isPresent(initReflector)) {
	        initReflector();
	    }
	    var appProviders = lang_1.isPresent(customProviders) ? [exports.BROWSER_APP_STATIC_PROVIDERS, customProviders] :
	        exports.BROWSER_APP_STATIC_PROVIDERS;
	    var appInjector = core_1.ReflectiveInjector.resolveAndCreate(appProviders, browserStaticPlatform().injector);
	    return core_1.coreLoadAndBootstrap(appInjector, appComponentType);
	}
	exports.bootstrapStatic = bootstrapStatic;
	//# sourceMappingURL=platform_browser_static.js.map

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(8);
	var common_1 = __webpack_require__(182);
	var dom_adapter_1 = __webpack_require__(251);
	var BrowserPlatformLocation = (function (_super) {
	    __extends(BrowserPlatformLocation, _super);
	    function BrowserPlatformLocation() {
	        _super.call(this);
	        this._init();
	    }
	    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
	    /** @internal */
	    BrowserPlatformLocation.prototype._init = function () {
	        this._location = dom_adapter_1.getDOM().getLocation();
	        this._history = dom_adapter_1.getDOM().getHistory();
	    };
	    Object.defineProperty(BrowserPlatformLocation.prototype, "location", {
	        /** @internal */
	        get: function () { return this._location; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return dom_adapter_1.getDOM().getBaseHref(); };
	    BrowserPlatformLocation.prototype.onPopState = function (fn) {
	        dom_adapter_1.getDOM().getGlobalEventTarget('window').addEventListener('popstate', fn, false);
	    };
	    BrowserPlatformLocation.prototype.onHashChange = function (fn) {
	        dom_adapter_1.getDOM().getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
	    };
	    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
	        get: function () { return this._location.pathname; },
	        set: function (newPath) { this._location.pathname = newPath; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
	        get: function () { return this._location.search; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
	        get: function () { return this._location.hash; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
	        this._history.pushState(state, title, url);
	    };
	    BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
	        this._history.replaceState(state, title, url);
	    };
	    BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
	    BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
	    BrowserPlatformLocation.decorators = [
	        { type: core_1.Injectable },
	    ];
	    BrowserPlatformLocation.ctorParameters = [];
	    return BrowserPlatformLocation;
	}(common_1.PlatformLocation));
	exports.BrowserPlatformLocation = BrowserPlatformLocation;
	//# sourceMappingURL=browser_platform_location.js.map

/***/ },
/* 280 */,
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* @module
	* @description
	* Maps application URLs into application states, to support deep-linking and navigation.
	*/
	var router_1 = __webpack_require__(282);
	exports.Router = router_1.Router;
	exports.RouterOutletMap = router_1.RouterOutletMap;
	var segments_1 = __webpack_require__(288);
	exports.RouteSegment = segments_1.RouteSegment;
	exports.UrlSegment = segments_1.UrlSegment;
	exports.Tree = segments_1.Tree;
	exports.UrlTree = segments_1.UrlTree;
	exports.RouteTree = segments_1.RouteTree;
	var decorators_1 = __webpack_require__(296);
	exports.Routes = decorators_1.Routes;
	var metadata_1 = __webpack_require__(289);
	exports.Route = metadata_1.Route;
	var router_url_serializer_1 = __webpack_require__(298);
	exports.RouterUrlSerializer = router_url_serializer_1.RouterUrlSerializer;
	exports.DefaultRouterUrlSerializer = router_url_serializer_1.DefaultRouterUrlSerializer;
	var router_providers_1 = __webpack_require__(299);
	exports.ROUTER_PROVIDERS = router_providers_1.ROUTER_PROVIDERS;
	var router_outlet_1 = __webpack_require__(301);
	var router_link_1 = __webpack_require__(302);
	/**
	 * A list of directives. To use the router directives like {@link RouterOutlet} and
	 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
	 * component.
	 *
	 * ```
	 * import {Component} from '@angular/core';
	 * import {ROUTER_DIRECTIVES, Routes} from '@angular/router-deprecated';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *    // ...
	 * }
	 *
	 * bootstrap(AppCmp);
	 * ```
	 */
	exports.ROUTER_DIRECTIVES = [router_outlet_1.RouterOutlet, router_link_1.RouterLink];
	//# sourceMappingURL=index.js.map

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(283);
	var collection_1 = __webpack_require__(284);
	var async_1 = __webpack_require__(285);
	var collection_2 = __webpack_require__(284);
	var core_2 = __webpack_require__(8);
	var recognize_1 = __webpack_require__(287);
	var link_1 = __webpack_require__(291);
	var segments_1 = __webpack_require__(288);
	var lifecycle_reflector_1 = __webpack_require__(295);
	var constants_1 = __webpack_require__(290);
	/**
	 * @internal
	 */
	var RouterOutletMap = (function () {
	    function RouterOutletMap() {
	        /** @internal */
	        this._outlets = {};
	    }
	    RouterOutletMap.prototype.registerOutlet = function (name, outlet) { this._outlets[name] = outlet; };
	    return RouterOutletMap;
	}());
	exports.RouterOutletMap = RouterOutletMap;
	/**
	 * The `Router` is responsible for mapping URLs to components.
	 *
	 * You can see the state of the router by inspecting the read-only fields `router.urlTree`
	 * and `router.routeTree`.
	 */
	var Router = (function () {
	    /**
	     * @internal
	     */
	    function Router(_rootComponent, _rootComponentType, _componentResolver, _urlSerializer, _routerOutletMap, _location) {
	        this._rootComponent = _rootComponent;
	        this._rootComponentType = _rootComponentType;
	        this._componentResolver = _componentResolver;
	        this._urlSerializer = _urlSerializer;
	        this._routerOutletMap = _routerOutletMap;
	        this._location = _location;
	        this._changes = new async_1.EventEmitter();
	        this._prevTree = this._createInitialTree();
	        this._setUpLocationChangeListener();
	        this.navigateByUrl(this._location.path());
	    }
	    Object.defineProperty(Router.prototype, "urlTree", {
	        /**
	         * Returns the current url tree.
	         */
	        get: function () { return this._urlTree; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Router.prototype, "routeTree", {
	        /**
	         * Returns the current route tree.
	         */
	        get: function () { return this._prevTree; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Router.prototype, "changes", {
	        /**
	         * An observable or url changes from the router.
	         */
	        get: function () { return this._changes; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Navigate based on the provided url. This navigation is always absolute.
	     *
	     * ### Usage
	     *
	     * ```
	     * router.navigateByUrl("/team/33/user/11");
	     * ```
	     */
	    Router.prototype.navigateByUrl = function (url) {
	        return this._navigate(this._urlSerializer.parse(url));
	    };
	    /**
	     * Navigate based on the provided array of commands and a starting point.
	     * If no segment is provided, the navigation is absolute.
	     *
	     * ### Usage
	     *
	     * ```
	     * router.navigate(['team', 33, 'team', '11], segment);
	     * ```
	     */
	    Router.prototype.navigate = function (commands, segment) {
	        return this._navigate(this.createUrlTree(commands, segment));
	    };
	    /**
	     * @internal
	     */
	    Router.prototype.dispose = function () { async_1.ObservableWrapper.dispose(this._locationSubscription); };
	    /**
	     * Applies an array of commands to the current url tree and creates
	     * a new url tree.
	     *
	     * When given a segment, applies the given commands starting from the segment.
	     * When not given a segment, applies the given command starting from the root.
	     *
	     * ### Usage
	     *
	     * ```
	     * // create /team/33/user/11
	     * router.createUrlTree(['/team', 33, 'user', 11]);
	     *
	     * // create /team/33;expand=true/user/11
	     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
	     *
	     * // you can collapse static fragments like this
	     * router.createUrlTree(['/team/33/user', userId]);
	     *
	     * // assuming the current url is `/team/33/user/11` and the segment points to `user/11`
	     *
	     * // navigate to /team/33/user/11/details
	     * router.createUrlTree(['details'], segment);
	     *
	     * // navigate to /team/33/user/22
	     * router.createUrlTree(['../22'], segment);
	     *
	     * // navigate to /team/44/user/22
	     * router.createUrlTree(['../../team/44/user/22'], segment);
	     * ```
	     */
	    Router.prototype.createUrlTree = function (commands, segment) {
	        var s = lang_1.isPresent(segment) ? segment : this._prevTree.root;
	        return link_1.link(s, this._prevTree, this.urlTree, commands);
	    };
	    /**
	     * Serializes a {@link UrlTree} into a string.
	     */
	    Router.prototype.serializeUrl = function (url) { return this._urlSerializer.serialize(url); };
	    Router.prototype._createInitialTree = function () {
	        var root = new segments_1.RouteSegment([new segments_1.UrlSegment("", {}, null)], {}, constants_1.DEFAULT_OUTLET_NAME, this._rootComponentType, null);
	        return new segments_1.RouteTree(new segments_1.TreeNode(root, []));
	    };
	    Router.prototype._setUpLocationChangeListener = function () {
	        var _this = this;
	        this._locationSubscription = this._location.subscribe(function (change) { _this._navigate(_this._urlSerializer.parse(change['url'])); });
	    };
	    Router.prototype._navigate = function (url) {
	        var _this = this;
	        this._urlTree = url;
	        return recognize_1.recognize(this._componentResolver, this._rootComponentType, url)
	            .then(function (currTree) {
	            return new _LoadSegments(currTree, _this._prevTree)
	                .load(_this._routerOutletMap, _this._rootComponent)
	                .then(function (updated) {
	                if (updated) {
	                    _this._prevTree = currTree;
	                    _this._location.go(_this._urlSerializer.serialize(_this._urlTree));
	                    _this._changes.emit(null);
	                }
	            });
	        });
	    };
	    return Router;
	}());
	exports.Router = Router;
	var _LoadSegments = (function () {
	    function _LoadSegments(currTree, prevTree) {
	        this.currTree = currTree;
	        this.prevTree = prevTree;
	        this.deactivations = [];
	        this.performMutation = true;
	    }
	    _LoadSegments.prototype.load = function (parentOutletMap, rootComponent) {
	        var _this = this;
	        var prevRoot = lang_1.isPresent(this.prevTree) ? segments_1.rootNode(this.prevTree) : null;
	        var currRoot = segments_1.rootNode(this.currTree);
	        return this.canDeactivate(currRoot, prevRoot, parentOutletMap, rootComponent)
	            .then(function (res) {
	            _this.performMutation = true;
	            if (res) {
	                _this.loadChildSegments(currRoot, prevRoot, parentOutletMap, [rootComponent]);
	            }
	            return res;
	        });
	    };
	    _LoadSegments.prototype.canDeactivate = function (currRoot, prevRoot, outletMap, rootComponent) {
	        var _this = this;
	        this.performMutation = false;
	        this.loadChildSegments(currRoot, prevRoot, outletMap, [rootComponent]);
	        var allPaths = async_1.PromiseWrapper.all(this.deactivations.map(function (r) { return _this.checkCanDeactivatePath(r); }));
	        return allPaths.then(function (values) { return values.filter(function (v) { return v; }).length === values.length; });
	    };
	    _LoadSegments.prototype.checkCanDeactivatePath = function (path) {
	        var _this = this;
	        var curr = async_1.PromiseWrapper.resolve(true);
	        var _loop_1 = function(p) {
	            curr = curr.then(function (_) {
	                if (lifecycle_reflector_1.hasLifecycleHook("routerCanDeactivate", p)) {
	                    return p.routerCanDeactivate(_this.prevTree, _this.currTree);
	                }
	                else {
	                    return _;
	                }
	            });
	        };
	        for (var _i = 0, _a = collection_1.ListWrapper.reversed(path); _i < _a.length; _i++) {
	            var p = _a[_i];
	            _loop_1(p);
	        }
	        return curr;
	    };
	    _LoadSegments.prototype.loadChildSegments = function (currNode, prevNode, outletMap, components) {
	        var _this = this;
	        var prevChildren = lang_1.isPresent(prevNode) ?
	            prevNode.children.reduce(function (m, c) {
	                m[c.value.outlet] = c;
	                return m;
	            }, {}) :
	            {};
	        currNode.children.forEach(function (c) {
	            _this.loadSegments(c, prevChildren[c.value.outlet], outletMap, components);
	            collection_2.StringMapWrapper.delete(prevChildren, c.value.outlet);
	        });
	        collection_2.StringMapWrapper.forEach(prevChildren, function (v, k) { return _this.unloadOutlet(outletMap._outlets[k], components); });
	    };
	    _LoadSegments.prototype.loadSegments = function (currNode, prevNode, parentOutletMap, components) {
	        var curr = currNode.value;
	        var prev = lang_1.isPresent(prevNode) ? prevNode.value : null;
	        var outlet = this.getOutlet(parentOutletMap, currNode.value);
	        if (segments_1.equalSegments(curr, prev)) {
	            this.loadChildSegments(currNode, prevNode, outlet.outletMap, components.concat([outlet.loadedComponent]));
	        }
	        else {
	            this.unloadOutlet(outlet, components);
	            if (this.performMutation) {
	                var outletMap = new RouterOutletMap();
	                var loadedComponent = this.loadNewSegment(outletMap, curr, prev, outlet);
	                this.loadChildSegments(currNode, prevNode, outletMap, components.concat([loadedComponent]));
	            }
	        }
	    };
	    _LoadSegments.prototype.loadNewSegment = function (outletMap, curr, prev, outlet) {
	        var resolved = core_1.ReflectiveInjector.resolve([core_1.provide(RouterOutletMap, { useValue: outletMap }), core_1.provide(segments_1.RouteSegment, { useValue: curr })]);
	        var ref = outlet.load(segments_1.routeSegmentComponentFactory(curr), resolved, outletMap);
	        if (lifecycle_reflector_1.hasLifecycleHook("routerOnActivate", ref.instance)) {
	            ref.instance.routerOnActivate(curr, prev, this.currTree, this.prevTree);
	        }
	        return ref.instance;
	    };
	    _LoadSegments.prototype.getOutlet = function (outletMap, segment) {
	        var outlet = outletMap._outlets[segment.outlet];
	        if (lang_1.isBlank(outlet)) {
	            if (segment.outlet == constants_1.DEFAULT_OUTLET_NAME) {
	                throw new core_2.BaseException("Cannot find default outlet");
	            }
	            else {
	                throw new core_2.BaseException("Cannot find the outlet " + segment.outlet);
	            }
	        }
	        return outlet;
	    };
	    _LoadSegments.prototype.unloadOutlet = function (outlet, components) {
	        var _this = this;
	        if (lang_1.isPresent(outlet) && outlet.isLoaded) {
	            collection_2.StringMapWrapper.forEach(outlet.outletMap._outlets, function (v, k) { return _this.unloadOutlet(v, components); });
	            if (this.performMutation) {
	                outlet.unload();
	            }
	            else {
	                this.deactivations.push(components.concat([outlet.loadedComponent]));
	            }
	        }
	    };
	    return _LoadSegments;
	}());
	//# sourceMappingURL=router.js.map

/***/ },
/* 283 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	var _devMode = true;
	var _modeLocked = false;
	function lockMode() {
	    _modeLocked = true;
	}
	exports.lockMode = lockMode;
	/**
	 * Disable Angular's development mode, which turns off assertions and other
	 * checks within the framework.
	 *
	 * One important assertion this disables verifies that a change detection pass
	 * does not result in additional changes to any bindings (also known as
	 * unidirectional data flow).
	 */
	function enableProdMode() {
	    if (_modeLocked) {
	        // Cannot use BaseException as that ends up importing from facade/lang.
	        throw 'Cannot enable prod mode after platform setup.';
	    }
	    _devMode = false;
	}
	exports.enableProdMode = enableProdMode;
	function assertionsEnabled() {
	    return _devMode;
	}
	exports.assertionsEnabled = assertionsEnabled;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === "boolean";
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === "number";
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === "string";
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === "function";
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf("\n");
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(""); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError("Invalid integer literal when parsing " + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " +
	            radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    RegExpWrapper.replaceAll = function (regExp, input, replace) {
	        var c = regExp.exec(input);
	        var res = '';
	        regExp.lastIndex = 0;
	        var prev = 0;
	        while (c) {
	            res += input.substring(prev, c.index);
	            res += replace(c);
	            prev = c.index + c[0].length;
	            regExp.lastIndex = prev;
	            c = regExp.exec(input);
	        }
	        res += input.substring(prev);
	        return res;
	    };
	    return RegExpWrapper;
	}());
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	}());
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === "function" || typeof o === "object");
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function bitWiseOr(values) {
	    return values.reduce(function (a, b) { return a | b; });
	}
	exports.bitWiseOr = bitWiseOr;
	function bitWiseAnd(values) {
	    return values.reduce(function (a, b) { return a & b; });
	}
	exports.bitWiseAnd = bitWiseAnd;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(283);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).reduce(function (r, a) {
	            r.push(map[a]);
	            return r;
	        }, []);
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(283);
	var promise_1 = __webpack_require__(286);
	exports.PromiseWrapper = promise_1.PromiseWrapper;
	exports.PromiseCompleter = promise_1.PromiseCompleter;
	var Subject_1 = __webpack_require__(41);
	var PromiseObservable_1 = __webpack_require__(60);
	var toPromise_1 = __webpack_require__(61);
	var Observable_1 = __webpack_require__(42);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(41);
	exports.Subject = Subject_2.Subject;
	var TimerWrapper = (function () {
	    function TimerWrapper() {
	    }
	    TimerWrapper.setTimeout = function (fn, millis) {
	        return lang_1.global.setTimeout(fn, millis);
	    };
	    TimerWrapper.clearTimeout = function (id) { lang_1.global.clearTimeout(id); };
	    TimerWrapper.setInterval = function (fn, millis) {
	        return lang_1.global.setInterval(fn, millis);
	    };
	    TimerWrapper.clearInterval = function (id) { lang_1.global.clearInterval(id); };
	    return TimerWrapper;
	}());
	exports.TimerWrapper = TimerWrapper;
	var ObservableWrapper = (function () {
	    function ObservableWrapper() {
	    }
	    // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
	    ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
	        if (onComplete === void 0) { onComplete = function () { }; }
	        onError = (typeof onError === "function") && onError || lang_1.noop;
	        onComplete = (typeof onComplete === "function") && onComplete || lang_1.noop;
	        return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
	    };
	    ObservableWrapper.isObservable = function (obs) { return !!obs.subscribe; };
	    /**
	     * Returns whether `obs` has any subscribers listening to events.
	     */
	    ObservableWrapper.hasSubscribers = function (obs) { return obs.observers.length > 0; };
	    ObservableWrapper.dispose = function (subscription) { subscription.unsubscribe(); };
	    /**
	     * @deprecated - use callEmit() instead
	     */
	    ObservableWrapper.callNext = function (emitter, value) { emitter.next(value); };
	    ObservableWrapper.callEmit = function (emitter, value) { emitter.emit(value); };
	    ObservableWrapper.callError = function (emitter, error) { emitter.error(error); };
	    ObservableWrapper.callComplete = function (emitter) { emitter.complete(); };
	    ObservableWrapper.fromPromise = function (promise) {
	        return PromiseObservable_1.PromiseObservable.create(promise);
	    };
	    ObservableWrapper.toPromise = function (obj) { return toPromise_1.toPromise.call(obj); };
	    return ObservableWrapper;
	}());
	exports.ObservableWrapper = ObservableWrapper;
	/**
	 * Use by directives and components to emit custom Events.
	 *
	 * ### Examples
	 *
	 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	 * title gets clicked:
	 *
	 * ```
	 * @Component({
	 *   selector: 'zippy',
	 *   template: `
	 *   <div class="zippy">
	 *     <div (click)="toggle()">Toggle</div>
	 *     <div [hidden]="!visible">
	 *       <ng-content></ng-content>
	 *     </div>
	 *  </div>`})
	 * export class Zippy {
	 *   visible: boolean = true;
	 *   @Output() open: EventEmitter<any> = new EventEmitter();
	 *   @Output() close: EventEmitter<any> = new EventEmitter();
	 *
	 *   toggle() {
	 *     this.visible = !this.visible;
	 *     if (this.visible) {
	 *       this.open.emit(null);
	 *     } else {
	 *       this.close.emit(null);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * Use Rx.Observable but provides an adapter to make it work as specified here:
	 * https://github.com/jhusain/observable-spec
	 *
	 * Once a reference implementation of the spec is available, switch to it.
	 */
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    /**
	     * Creates an instance of [EventEmitter], which depending on [isAsync],
	     * delivers events synchronously or asynchronously.
	     */
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = true; }
	        _super.call(this);
	        this._isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext.next(value); }); } :
	                function (value) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this._isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this._isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                function (value) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this._isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this._isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },
/* 286 */
/***/ function(module, exports) {

	"use strict";
	var PromiseCompleter = (function () {
	    function PromiseCompleter() {
	        var _this = this;
	        this.promise = new Promise(function (res, rej) {
	            _this.resolve = res;
	            _this.reject = rej;
	        });
	    }
	    return PromiseCompleter;
	}());
	exports.PromiseCompleter = PromiseCompleter;
	var PromiseWrapper = (function () {
	    function PromiseWrapper() {
	    }
	    PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
	    PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
	    // Note: We can't rename this method into `catch`, as this is not a valid
	    // method name in Dart.
	    PromiseWrapper.catchError = function (promise, onError) {
	        return promise.catch(onError);
	    };
	    PromiseWrapper.all = function (promises) {
	        if (promises.length == 0)
	            return Promise.resolve([]);
	        return Promise.all(promises);
	    };
	    PromiseWrapper.then = function (promise, success, rejection) {
	        return promise.then(success, rejection);
	    };
	    PromiseWrapper.wrap = function (computation) {
	        return new Promise(function (res, rej) {
	            try {
	                res(computation());
	            }
	            catch (e) {
	                rej(e);
	            }
	        });
	    };
	    PromiseWrapper.scheduleMicrotask = function (computation) {
	        PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
	    };
	    PromiseWrapper.isPromise = function (obj) { return obj instanceof Promise; };
	    PromiseWrapper.completer = function () { return new PromiseCompleter(); };
	    return PromiseWrapper;
	}());
	exports.PromiseWrapper = PromiseWrapper;
	//# sourceMappingURL=promise.js.map

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var segments_1 = __webpack_require__(288);
	var metadata_1 = __webpack_require__(289);
	var lang_1 = __webpack_require__(283);
	var collection_1 = __webpack_require__(284);
	var promise_1 = __webpack_require__(286);
	var core_1 = __webpack_require__(8);
	var constants_1 = __webpack_require__(290);
	var core_2 = __webpack_require__(8);
	// TODO: vsavkin: recognize should take the old tree and merge it
	function recognize(componentResolver, type, url) {
	    var matched = new _MatchResult(type, [url.root], {}, segments_1.rootNode(url).children, []);
	    return _constructSegment(componentResolver, matched).then(function (roots) { return new segments_1.RouteTree(roots[0]); });
	}
	exports.recognize = recognize;
	function _recognize(componentResolver, parentType, url) {
	    var metadata = _readMetadata(parentType); // should read from the factory instead
	    if (lang_1.isBlank(metadata)) {
	        throw new core_1.BaseException("Component '" + lang_1.stringify(parentType) + "' does not have route configuration");
	    }
	    var match;
	    try {
	        match = _match(metadata, url);
	    }
	    catch (e) {
	        return promise_1.PromiseWrapper.reject(e, null);
	    }
	    var main = _constructSegment(componentResolver, match);
	    var aux = _recognizeMany(componentResolver, parentType, match.aux).then(_checkOutletNameUniqueness);
	    return promise_1.PromiseWrapper.all([main, aux]).then(collection_1.ListWrapper.flatten);
	}
	function _recognizeMany(componentResolver, parentType, urls) {
	    var recognized = urls.map(function (u) { return _recognize(componentResolver, parentType, u); });
	    return promise_1.PromiseWrapper.all(recognized).then(collection_1.ListWrapper.flatten);
	}
	function _constructSegment(componentResolver, matched) {
	    return componentResolver.resolveComponent(matched.component)
	        .then(function (factory) {
	        var urlOutlet = matched.consumedUrlSegments.length === 0 ||
	            lang_1.isBlank(matched.consumedUrlSegments[0].outlet) ?
	            constants_1.DEFAULT_OUTLET_NAME :
	            matched.consumedUrlSegments[0].outlet;
	        var segment = new segments_1.RouteSegment(matched.consumedUrlSegments, matched.parameters, urlOutlet, matched.component, factory);
	        if (matched.leftOverUrl.length > 0) {
	            return _recognizeMany(componentResolver, matched.component, matched.leftOverUrl)
	                .then(function (children) { return [new segments_1.TreeNode(segment, children)]; });
	        }
	        else {
	            return _recognizeLeftOvers(componentResolver, matched.component)
	                .then(function (children) { return [new segments_1.TreeNode(segment, children)]; });
	        }
	    });
	}
	function _recognizeLeftOvers(componentResolver, parentType) {
	    return componentResolver.resolveComponent(parentType)
	        .then(function (factory) {
	        var metadata = _readMetadata(parentType);
	        if (lang_1.isBlank(metadata)) {
	            return [];
	        }
	        var r = metadata.routes.filter(function (r) { return r.path == "" || r.path == "/"; });
	        if (r.length === 0) {
	            return promise_1.PromiseWrapper.resolve([]);
	        }
	        else {
	            return _recognizeLeftOvers(componentResolver, r[0].component)
	                .then(function (children) {
	                return componentResolver.resolveComponent(r[0].component)
	                    .then(function (factory) {
	                    var segment = new segments_1.RouteSegment([], {}, constants_1.DEFAULT_OUTLET_NAME, r[0].component, factory);
	                    return [new segments_1.TreeNode(segment, children)];
	                });
	            });
	        }
	    });
	}
	function _match(metadata, url) {
	    for (var _i = 0, _a = metadata.routes; _i < _a.length; _i++) {
	        var r = _a[_i];
	        var matchingResult = _matchWithParts(r, url);
	        if (lang_1.isPresent(matchingResult)) {
	            return matchingResult;
	        }
	    }
	    var availableRoutes = metadata.routes.map(function (r) { return ("'" + r.path + "'"); }).join(", ");
	    throw new core_1.BaseException("Cannot match any routes. Current segment: '" + url.value + "'. Available routes: [" + availableRoutes + "].");
	}
	function _matchWithParts(route, url) {
	    var path = route.path.startsWith("/") ? route.path.substring(1) : route.path;
	    if (path == "*") {
	        return new _MatchResult(route.component, [], null, [], []);
	    }
	    var parts = path.split("/");
	    var positionalParams = {};
	    var consumedUrlSegments = [];
	    var lastParent = null;
	    var lastSegment = null;
	    var current = url;
	    for (var i = 0; i < parts.length; ++i) {
	        if (lang_1.isBlank(current))
	            return null;
	        var p_1 = parts[i];
	        var isLastSegment = i === parts.length - 1;
	        var isLastParent = i === parts.length - 2;
	        var isPosParam = p_1.startsWith(":");
	        if (!isPosParam && p_1 != current.value.segment)
	            return null;
	        if (isLastSegment) {
	            lastSegment = current;
	        }
	        if (isLastParent) {
	            lastParent = current;
	        }
	        if (isPosParam) {
	            positionalParams[p_1.substring(1)] = current.value.segment;
	        }
	        consumedUrlSegments.push(current.value);
	        current = collection_1.ListWrapper.first(current.children);
	    }
	    var p = lastSegment.value.parameters;
	    var parameters = collection_1.StringMapWrapper.merge(p, positionalParams);
	    var axuUrlSubtrees = lang_1.isPresent(lastParent) ? lastParent.children.slice(1) : [];
	    return new _MatchResult(route.component, consumedUrlSegments, parameters, lastSegment.children, axuUrlSubtrees);
	}
	function _checkOutletNameUniqueness(nodes) {
	    var names = {};
	    nodes.forEach(function (n) {
	        var segmentWithSameOutletName = names[n.value.outlet];
	        if (lang_1.isPresent(segmentWithSameOutletName)) {
	            var p = segmentWithSameOutletName.stringifiedUrlSegments;
	            var c = n.value.stringifiedUrlSegments;
	            throw new core_1.BaseException("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
	        }
	        names[n.value.outlet] = n.value;
	    });
	    return nodes;
	}
	var _MatchResult = (function () {
	    function _MatchResult(component, consumedUrlSegments, parameters, leftOverUrl, aux) {
	        this.component = component;
	        this.consumedUrlSegments = consumedUrlSegments;
	        this.parameters = parameters;
	        this.leftOverUrl = leftOverUrl;
	        this.aux = aux;
	    }
	    return _MatchResult;
	}());
	function _readMetadata(componentType) {
	    var metadata = core_2.reflector.annotations(componentType).filter(function (f) { return f instanceof metadata_1.RoutesMetadata; });
	    return collection_1.ListWrapper.first(metadata);
	}
	//# sourceMappingURL=recognize.js.map

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(284);
	var lang_1 = __webpack_require__(283);
	var Tree = (function () {
	    function Tree(root) {
	        this._root = root;
	    }
	    Object.defineProperty(Tree.prototype, "root", {
	        get: function () { return this._root.value; },
	        enumerable: true,
	        configurable: true
	    });
	    Tree.prototype.parent = function (t) {
	        var p = this.pathFromRoot(t);
	        return p.length > 1 ? p[p.length - 2] : null;
	    };
	    Tree.prototype.children = function (t) {
	        var n = _findNode(t, this._root);
	        return lang_1.isPresent(n) ? n.children.map(function (t) { return t.value; }) : null;
	    };
	    Tree.prototype.firstChild = function (t) {
	        var n = _findNode(t, this._root);
	        return lang_1.isPresent(n) && n.children.length > 0 ? n.children[0].value : null;
	    };
	    Tree.prototype.pathFromRoot = function (t) { return _findPath(t, this._root, []).map(function (s) { return s.value; }); };
	    Tree.prototype.contains = function (tree) { return _contains(this._root, tree._root); };
	    return Tree;
	}());
	exports.Tree = Tree;
	var UrlTree = (function (_super) {
	    __extends(UrlTree, _super);
	    function UrlTree(root) {
	        _super.call(this, root);
	    }
	    return UrlTree;
	}(Tree));
	exports.UrlTree = UrlTree;
	var RouteTree = (function (_super) {
	    __extends(RouteTree, _super);
	    function RouteTree(root) {
	        _super.call(this, root);
	    }
	    return RouteTree;
	}(Tree));
	exports.RouteTree = RouteTree;
	function rootNode(tree) {
	    return tree._root;
	}
	exports.rootNode = rootNode;
	function _findNode(expected, c) {
	    // TODO: vsavkin remove it once recognize is fixed
	    if (expected instanceof RouteSegment && equalSegments(expected, c.value))
	        return c;
	    if (expected === c.value)
	        return c;
	    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
	        var cc = _a[_i];
	        var r = _findNode(expected, cc);
	        if (lang_1.isPresent(r))
	            return r;
	    }
	    return null;
	}
	function _findPath(expected, c, collected) {
	    collected.push(c);
	    // TODO: vsavkin remove it once recognize is fixed
	    if (_equalValues(expected, c.value))
	        return collected;
	    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
	        var cc = _a[_i];
	        var r = _findPath(expected, cc, collection_1.ListWrapper.clone(collected));
	        if (lang_1.isPresent(r))
	            return r;
	    }
	    return null;
	}
	function _contains(tree, subtree) {
	    if (!_equalValues(tree.value, subtree.value))
	        return false;
	    var _loop_1 = function(subtreeNode) {
	        var s = tree.children.filter(function (child) { return _equalValues(child.value, subtreeNode.value); });
	        if (s.length === 0)
	            return { value: false };
	        if (!_contains(s[0], subtreeNode))
	            return { value: false };
	    };
	    for (var _i = 0, _a = subtree.children; _i < _a.length; _i++) {
	        var subtreeNode = _a[_i];
	        var state_1 = _loop_1(subtreeNode);
	        if (typeof state_1 === "object") return state_1.value;
	    }
	    return true;
	}
	function _equalValues(a, b) {
	    if (a instanceof RouteSegment)
	        return equalSegments(a, b);
	    if (a instanceof UrlSegment)
	        return equalUrlSegments(a, b);
	    return a === b;
	}
	var TreeNode = (function () {
	    function TreeNode(value, children) {
	        this.value = value;
	        this.children = children;
	    }
	    return TreeNode;
	}());
	exports.TreeNode = TreeNode;
	var UrlSegment = (function () {
	    function UrlSegment(segment, parameters, outlet) {
	        this.segment = segment;
	        this.parameters = parameters;
	        this.outlet = outlet;
	    }
	    UrlSegment.prototype.toString = function () {
	        var outletPrefix = lang_1.isBlank(this.outlet) ? "" : this.outlet + ":";
	        return "" + outletPrefix + this.segment + _serializeParams(this.parameters);
	    };
	    return UrlSegment;
	}());
	exports.UrlSegment = UrlSegment;
	function _serializeParams(params) {
	    var res = "";
	    collection_1.StringMapWrapper.forEach(params, function (v, k) { return res += ";" + k + "=" + v; });
	    return res;
	}
	var RouteSegment = (function () {
	    function RouteSegment(urlSegments, parameters, outlet, type, componentFactory) {
	        this.urlSegments = urlSegments;
	        this.parameters = parameters;
	        this.outlet = outlet;
	        this._type = type;
	        this._componentFactory = componentFactory;
	    }
	    RouteSegment.prototype.getParam = function (param) {
	        return lang_1.isPresent(this.parameters) ? this.parameters[param] : null;
	    };
	    Object.defineProperty(RouteSegment.prototype, "type", {
	        get: function () { return this._type; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouteSegment.prototype, "stringifiedUrlSegments", {
	        get: function () { return this.urlSegments.map(function (s) { return s.toString(); }).join("/"); },
	        enumerable: true,
	        configurable: true
	    });
	    return RouteSegment;
	}());
	exports.RouteSegment = RouteSegment;
	function serializeRouteSegmentTree(tree) {
	    return _serializeRouteSegmentTree(tree._root);
	}
	exports.serializeRouteSegmentTree = serializeRouteSegmentTree;
	function _serializeRouteSegmentTree(node) {
	    var v = node.value;
	    var children = node.children.map(function (c) { return _serializeRouteSegmentTree(c); }).join(", ");
	    return v.outlet + ":" + v.stringifiedUrlSegments + "(" + lang_1.stringify(v.type) + ") [" + children + "]";
	}
	function equalSegments(a, b) {
	    if (lang_1.isBlank(a) && !lang_1.isBlank(b))
	        return false;
	    if (!lang_1.isBlank(a) && lang_1.isBlank(b))
	        return false;
	    if (a._type !== b._type)
	        return false;
	    if (a.outlet != b.outlet)
	        return false;
	    return collection_1.StringMapWrapper.equals(a.parameters, b.parameters);
	}
	exports.equalSegments = equalSegments;
	function equalUrlSegments(a, b) {
	    if (lang_1.isBlank(a) && !lang_1.isBlank(b))
	        return false;
	    if (!lang_1.isBlank(a) && lang_1.isBlank(b))
	        return false;
	    if (a.segment != b.segment)
	        return false;
	    if (a.outlet != b.outlet)
	        return false;
	    if (lang_1.isBlank(a.parameters)) {
	        console.log("a", a);
	    }
	    if (lang_1.isBlank(b.parameters)) {
	        console.log("b", b);
	    }
	    return collection_1.StringMapWrapper.equals(a.parameters, b.parameters);
	}
	exports.equalUrlSegments = equalUrlSegments;
	function routeSegmentComponentFactory(a) {
	    return a._componentFactory;
	}
	exports.routeSegmentComponentFactory = routeSegmentComponentFactory;
	//# sourceMappingURL=segments.js.map

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(283);
	/**
	 * Information about a route.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `component` a component type.
	 *
	 * ### Example
	 * ```
	 * import {Routes} from '@angular/router';
	 *
	 * @Routes([
	 *   {path: '/home', component: HomeCmp}
	 * ])
	 * class MyApp {}
	 * ```
	 *
	 * @ts2dart_const
	 */
	var RouteMetadata = (function () {
	    function RouteMetadata() {
	    }
	    Object.defineProperty(RouteMetadata.prototype, "path", {
	        get: function () { },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouteMetadata.prototype, "component", {
	        get: function () { },
	        enumerable: true,
	        configurable: true
	    });
	    return RouteMetadata;
	}());
	exports.RouteMetadata = RouteMetadata;
	/**
	 * See {@link RouteMetadata} for more information.
	 * @ts2dart_const
	 */
	var Route = (function () {
	    function Route(_a) {
	        var _b = _a === void 0 ? {} : _a, path = _b.path, component = _b.component;
	        this.path = path;
	        this.component = component;
	    }
	    Route.prototype.toString = function () { return "@Route(" + this.path + ", " + lang_1.stringify(this.component) + ")"; };
	    return Route;
	}());
	exports.Route = Route;
	/**
	 * Defines routes for a given component.
	 *
	 * It takes an array of {@link RouteMetadata}s.
	 * @ts2dart_const
	 */
	var RoutesMetadata = (function () {
	    function RoutesMetadata(routes) {
	        this.routes = routes;
	    }
	    RoutesMetadata.prototype.toString = function () { return "@Routes(" + this.routes + ")"; };
	    return RoutesMetadata;
	}());
	exports.RoutesMetadata = RoutesMetadata;
	//# sourceMappingURL=metadata.js.map

/***/ },
/* 290 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Name of the default outlet outlet.
	* @type {string}
	*/
	exports.DEFAULT_OUTLET_NAME = "__DEFAULT";
	//# sourceMappingURL=constants.js.map

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var segments_1 = __webpack_require__(288);
	var lang_1 = __webpack_require__(283);
	var exceptions_1 = __webpack_require__(292);
	var collection_1 = __webpack_require__(284);
	// TODO: vsavkin: should reuse segments
	function link(segment, routeTree, urlTree, commands) {
	    if (commands.length === 0)
	        return urlTree;
	    var normalizedCommands = _normalizeCommands(commands);
	    if (_navigateToRoot(normalizedCommands)) {
	        return new segments_1.UrlTree(new segments_1.TreeNode(urlTree.root, []));
	    }
	    var startingNode = _findStartingNode(normalizedCommands, urlTree, segment, routeTree);
	    var updated = normalizedCommands.commands.length > 0 ?
	        _updateMany(collection_1.ListWrapper.clone(startingNode.children), normalizedCommands.commands) : [];
	    var newRoot = _constructNewTree(segments_1.rootNode(urlTree), startingNode, updated);
	    return new segments_1.UrlTree(newRoot);
	}
	exports.link = link;
	function _navigateToRoot(normalizedChange) {
	    return normalizedChange.isAbsolute && normalizedChange.commands.length === 1 && normalizedChange.commands[0] == "/";
	}
	var _NormalizedNavigationCommands = (function () {
	    function _NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, commands) {
	        this.isAbsolute = isAbsolute;
	        this.numberOfDoubleDots = numberOfDoubleDots;
	        this.commands = commands;
	    }
	    return _NormalizedNavigationCommands;
	}());
	function _normalizeCommands(commands) {
	    ;
	    '';
	    if (lang_1.isString(commands[0]) && commands.length === 1 && commands[0] == "/") {
	        return new _NormalizedNavigationCommands(true, 0, commands);
	    }
	    var numberOfDoubleDots = 0;
	    var isAbsolute = false;
	    var res = [];
	    for (var i = 0; i < commands.length; ++i) {
	        var c = commands[i];
	        if (!lang_1.isString(c)) {
	            res.push(c);
	            continue;
	        }
	        var parts = c.split('/');
	        for (var j = 0; j < parts.length; ++j) {
	            var cc = parts[j];
	            // first exp is treated in a special way
	            if (i == 0) {
	                if (j == 0 && cc == ".") {
	                }
	                else if (j == 0 && cc == "") {
	                    isAbsolute = true;
	                }
	                else if (cc == "..") {
	                    numberOfDoubleDots++;
	                }
	                else if (cc != '') {
	                    res.push(cc);
	                }
	            }
	            else {
	                if (cc != '') {
	                    res.push(cc);
	                }
	            }
	        }
	    }
	    return new _NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, res);
	}
	function _findUrlSegment(segment, routeTree, urlTree, numberOfDoubleDots) {
	    var s = segment;
	    while (s.urlSegments.length === 0) {
	        s = routeTree.parent(s);
	    }
	    var urlSegment = collection_1.ListWrapper.last(s.urlSegments);
	    var path = urlTree.pathFromRoot(urlSegment);
	    if (path.length <= numberOfDoubleDots) {
	        throw new exceptions_1.BaseException("Invalid number of '../'");
	    }
	    return path[path.length - 1 - numberOfDoubleDots];
	}
	function _findStartingNode(normalizedChange, urlTree, segment, routeTree) {
	    if (normalizedChange.isAbsolute) {
	        return segments_1.rootNode(urlTree);
	    }
	    else {
	        var urlSegment = _findUrlSegment(segment, routeTree, urlTree, normalizedChange.numberOfDoubleDots);
	        return _findMatchingNode(urlSegment, segments_1.rootNode(urlTree));
	    }
	}
	function _findMatchingNode(segment, node) {
	    if (node.value === segment)
	        return node;
	    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
	        var c = _a[_i];
	        var r = _findMatchingNode(segment, c);
	        if (lang_1.isPresent(r))
	            return r;
	    }
	    return null;
	}
	function _constructNewTree(node, original, updated) {
	    if (node === original) {
	        return new segments_1.TreeNode(node.value, updated);
	    }
	    else {
	        return new segments_1.TreeNode(node.value, node.children.map(function (c) { return _constructNewTree(c, original, updated); }));
	    }
	}
	function _update(node, commands) {
	    var rest = commands.slice(1);
	    var next = rest.length === 0 ? null : rest[0];
	    var outlet = _outlet(commands);
	    var segment = _segment(commands);
	    // reach the end of the tree => create new tree nodes.
	    if (lang_1.isBlank(node) && !lang_1.isStringMap(next)) {
	        var urlSegment = new segments_1.UrlSegment(segment, {}, outlet);
	        var children = rest.length === 0 ? [] : [_update(null, rest)];
	        return new segments_1.TreeNode(urlSegment, children);
	    }
	    else if (lang_1.isBlank(node) && lang_1.isStringMap(next)) {
	        var urlSegment = new segments_1.UrlSegment(segment, next, outlet);
	        return _recurse(urlSegment, node, rest.slice(1));
	    }
	    else if (outlet != node.value.outlet) {
	        return node;
	    }
	    else if (lang_1.isStringMap(segment)) {
	        var newSegment = new segments_1.UrlSegment(node.value.segment, segment, node.value.outlet);
	        return _recurse(newSegment, node, rest);
	    }
	    else if (lang_1.isStringMap(next)) {
	        var urlSegment = new segments_1.UrlSegment(segment, next, outlet);
	        return _recurse(urlSegment, node, rest.slice(1));
	    }
	    else {
	        var urlSegment = new segments_1.UrlSegment(segment, {}, outlet);
	        return _recurse(urlSegment, node, rest);
	    }
	}
	function _recurse(urlSegment, node, rest) {
	    if (rest.length === 0) {
	        return new segments_1.TreeNode(urlSegment, []);
	    }
	    return new segments_1.TreeNode(urlSegment, _updateMany(collection_1.ListWrapper.clone(node.children), rest));
	}
	function _updateMany(nodes, commands) {
	    var outlet = _outlet(commands);
	    var nodesInRightOutlet = nodes.filter(function (c) { return c.value.outlet == outlet; });
	    if (nodesInRightOutlet.length > 0) {
	        var nodeRightOutlet = nodesInRightOutlet[0]; // there can be only one
	        nodes[nodes.indexOf(nodeRightOutlet)] = _update(nodeRightOutlet, commands);
	    }
	    else {
	        nodes.push(_update(null, commands));
	    }
	    return nodes;
	}
	function _segment(commands) {
	    if (!lang_1.isString(commands[0]))
	        return commands[0];
	    var parts = commands[0].toString().split(":");
	    return parts.length > 1 ? parts[1] : commands[0];
	}
	function _outlet(commands) {
	    if (!lang_1.isString(commands[0]))
	        return null;
	    var parts = commands[0].toString().split(":");
	    return parts.length > 1 ? parts[0] : null;
	}
	//# sourceMappingURL=link.js.map

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(293);
	var exception_handler_1 = __webpack_require__(294);
	var exception_handler_2 = __webpack_require__(294);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = "--"; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 293 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	* A base class for the WrappedException that can be used to identify
	* a WrappedException from ExceptionHandler without adding circular
	* dependency.
	*/
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(283);
	var base_wrapped_exception_1 = __webpack_require__(293);
	var collection_1 = __webpack_require__(284);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [provide(ExceptionHandler, {useClass: MyExceptionHandler})])
	 *
	 * ```
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join("\n");
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError("STACKTRACE:");
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError("ORIGINAL STACKTRACE:");
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError("ERROR CONTEXT:");
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(283);
	function hasLifecycleHook(name, obj) {
	    if (lang_1.isBlank(obj))
	        return false;
	    var type = obj.constructor;
	    if (!(type instanceof lang_1.Type))
	        return false;
	    return name in type.prototype;
	}
	exports.hasLifecycleHook = hasLifecycleHook;
	//# sourceMappingURL=lifecycle_reflector.js.map

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(289);
	var core_private_1 = __webpack_require__(297);
	/**
	 * Defines routes for a given component.
	 *
	 * It takes an array of {@link RouteMetadata}s.
	 */
	exports.Routes = core_private_1.makeDecorator(metadata_1.RoutesMetadata);
	//# sourceMappingURL=decorators.js.map

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	exports.makeDecorator = core_1.__core_private__.makeDecorator;
	//# sourceMappingURL=core_private.js.map

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var segments_1 = __webpack_require__(288);
	var core_1 = __webpack_require__(8);
	var lang_1 = __webpack_require__(283);
	/**
	 * Defines a way to serialize/deserialize a url tree.
	 */
	var RouterUrlSerializer = (function () {
	    function RouterUrlSerializer() {
	    }
	    return RouterUrlSerializer;
	}());
	exports.RouterUrlSerializer = RouterUrlSerializer;
	/**
	 * A default implementation of the serialization.
	 */
	var DefaultRouterUrlSerializer = (function (_super) {
	    __extends(DefaultRouterUrlSerializer, _super);
	    function DefaultRouterUrlSerializer() {
	        _super.apply(this, arguments);
	    }
	    DefaultRouterUrlSerializer.prototype.parse = function (url) {
	        var root = new _UrlParser().parse(url);
	        return new segments_1.UrlTree(root);
	    };
	    DefaultRouterUrlSerializer.prototype.serialize = function (tree) { return _serializeUrlTreeNode(segments_1.rootNode(tree)); };
	    return DefaultRouterUrlSerializer;
	}(RouterUrlSerializer));
	exports.DefaultRouterUrlSerializer = DefaultRouterUrlSerializer;
	function _serializeUrlTreeNode(node) {
	    return "" + node.value + _serializeChildren(node);
	}
	function _serializeUrlTreeNodes(nodes) {
	    var main = nodes[0].value.toString();
	    var auxNodes = nodes.slice(1);
	    var aux = auxNodes.length > 0 ? "(" + auxNodes.map(_serializeUrlTreeNode).join("//") + ")" : "";
	    var children = _serializeChildren(nodes[0]);
	    return "" + main + aux + children;
	}
	function _serializeChildren(node) {
	    if (node.children.length > 0) {
	        return "/" + _serializeUrlTreeNodes(node.children);
	    }
	    else {
	        return "";
	    }
	}
	var SEGMENT_RE = lang_1.RegExpWrapper.create('^[^\\/\\(\\)\\?;=&#]+');
	function matchUrlSegment(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(SEGMENT_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var QUERY_PARAM_VALUE_RE = lang_1.RegExpWrapper.create('^[^\\(\\)\\?;&#]+');
	function matchUrlQueryParamValue(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(QUERY_PARAM_VALUE_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var _UrlParser = (function () {
	    function _UrlParser() {
	    }
	    _UrlParser.prototype.peekStartsWith = function (str) { return this._remaining.startsWith(str); };
	    _UrlParser.prototype.capture = function (str) {
	        if (!this._remaining.startsWith(str)) {
	            throw new core_1.BaseException("Expected \"" + str + "\".");
	        }
	        this._remaining = this._remaining.substring(str.length);
	    };
	    _UrlParser.prototype.parse = function (url) {
	        this._remaining = url;
	        if (url == '' || url == '/') {
	            return new segments_1.TreeNode(new segments_1.UrlSegment('', {}, null), []);
	        }
	        else {
	            return this.parseRoot();
	        }
	    };
	    _UrlParser.prototype.parseRoot = function () {
	        var segments = this.parseSegments();
	        return new segments_1.TreeNode(new segments_1.UrlSegment('', {}, null), segments);
	    };
	    _UrlParser.prototype.parseSegments = function (outletName) {
	        if (outletName === void 0) { outletName = null; }
	        if (this._remaining.length == 0) {
	            return [];
	        }
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var path = matchUrlSegment(this._remaining);
	        this.capture(path);
	        if (path.indexOf(":") > -1) {
	            var parts = path.split(":");
	            outletName = parts[0];
	            path = parts[1];
	        }
	        var matrixParams = {};
	        if (this.peekStartsWith(';')) {
	            matrixParams = this.parseMatrixParams();
	        }
	        var aux = [];
	        if (this.peekStartsWith('(')) {
	            aux = this.parseAuxiliaryRoutes();
	        }
	        var children = [];
	        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
	            this.capture('/');
	            children = this.parseSegments();
	        }
	        var segment = new segments_1.UrlSegment(path, matrixParams, outletName);
	        var node = new segments_1.TreeNode(segment, children);
	        return [node].concat(aux);
	    };
	    _UrlParser.prototype.parseQueryParams = function () {
	        var params = {};
	        this.capture('?');
	        this.parseQueryParam(params);
	        while (this._remaining.length > 0 && this.peekStartsWith('&')) {
	            this.capture('&');
	            this.parseQueryParam(params);
	        }
	        return params;
	    };
	    _UrlParser.prototype.parseMatrixParams = function () {
	        var params = {};
	        while (this._remaining.length > 0 && this.peekStartsWith(';')) {
	            this.capture(';');
	            this.parseParam(params);
	        }
	        return params;
	    };
	    _UrlParser.prototype.parseParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = "true";
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlSegment(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    _UrlParser.prototype.parseQueryParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = "true";
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlQueryParamValue(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    _UrlParser.prototype.parseAuxiliaryRoutes = function () {
	        var segments = [];
	        this.capture('(');
	        while (!this.peekStartsWith(')') && this._remaining.length > 0) {
	            segments = segments.concat(this.parseSegments("aux"));
	            if (this.peekStartsWith('//')) {
	                this.capture('//');
	            }
	        }
	        this.capture(')');
	        return segments;
	    };
	    return _UrlParser;
	}());
	//# sourceMappingURL=router_url_serializer.js.map

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_providers_common_1 = __webpack_require__(300);
	var platform_browser_1 = __webpack_require__(177);
	var common_1 = __webpack_require__(182);
	/**
	 * A list of {@link Provider}s. To use the router, you must add this to your application.
	 *
	 * ```
	 * import {Component} from '@angular/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   Routes
	 * } from '@angular/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @Routes([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_PROVIDERS = [
	    router_providers_common_1.ROUTER_PROVIDERS_COMMON,
	    /*@ts2dart_Provider*/ { provide: common_1.PlatformLocation, useClass: platform_browser_1.BrowserPlatformLocation },
	];
	//# sourceMappingURL=router_providers.js.map

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var common_1 = __webpack_require__(182);
	var router_1 = __webpack_require__(282);
	var router_url_serializer_1 = __webpack_require__(298);
	var core_2 = __webpack_require__(8);
	var core_3 = __webpack_require__(8);
	/**
	 * The Platform agnostic ROUTER PROVIDERS
	 */
	exports.ROUTER_PROVIDERS_COMMON = [
	    router_1.RouterOutletMap,
	    /*@ts2dart_Provider*/ { provide: router_url_serializer_1.RouterUrlSerializer, useClass: router_url_serializer_1.DefaultRouterUrlSerializer },
	    /*@ts2dart_Provider*/ { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }, common_1.Location,
	    /*@ts2dart_Provider*/ {
	        provide: router_1.Router,
	        useFactory: routerFactory,
	        deps: /*@ts2dart_const*/ [core_2.ApplicationRef, core_1.ComponentResolver, router_url_serializer_1.RouterUrlSerializer, router_1.RouterOutletMap, common_1.Location],
	    },
	];
	function routerFactory(app, componentResolver, urlSerializer, routerOutletMap, location) {
	    if (app.componentTypes.length == 0) {
	        throw new core_3.BaseException("Bootstrap at least one component before injecting Router.");
	    }
	    // TODO: vsavkin this should not be null
	    var router = new router_1.Router(null, app.componentTypes[0], componentResolver, urlSerializer, routerOutletMap, location);
	    app.registerDisposeListener(function () { return router.dispose(); });
	    return router;
	}
	//# sourceMappingURL=router_providers_common.js.map

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var router_1 = __webpack_require__(282);
	var constants_1 = __webpack_require__(290);
	var lang_1 = __webpack_require__(283);
	var RouterOutlet = (function () {
	    function RouterOutlet(parentOutletMap, _location, name) {
	        this._location = _location;
	        parentOutletMap.registerOutlet(lang_1.isBlank(name) ? constants_1.DEFAULT_OUTLET_NAME : name, this);
	    }
	    RouterOutlet.prototype.unload = function () {
	        this._loaded.destroy();
	        this._loaded = null;
	    };
	    Object.defineProperty(RouterOutlet.prototype, "loadedComponent", {
	        /**
	         * Returns the loaded component.
	         */
	        get: function () { return lang_1.isPresent(this._loaded) ? this._loaded.instance : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouterOutlet.prototype, "isLoaded", {
	        /**
	         * Returns true is the outlet is not empty.
	         */
	        get: function () { return lang_1.isPresent(this._loaded); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Called by the Router to instantiate a new component.
	     */
	    RouterOutlet.prototype.load = function (factory, providers, outletMap) {
	        this.outletMap = outletMap;
	        var inj = core_1.ReflectiveInjector.fromResolvedProviders(providers, this._location.parentInjector);
	        this._loaded = this._location.createComponent(factory, this._location.length, inj, []);
	        return this._loaded;
	    };
	    RouterOutlet.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'router-outlet' },] },
	    ];
	    RouterOutlet.ctorParameters = [
	        { type: router_1.RouterOutletMap, },
	        { type: core_1.ViewContainerRef, },
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['name',] },] },
	    ];
	    return RouterOutlet;
	}());
	exports.RouterOutlet = RouterOutlet;
	//# sourceMappingURL=router_outlet.js.map

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var router_1 = __webpack_require__(282);
	var segments_1 = __webpack_require__(288);
	var lang_1 = __webpack_require__(283);
	var async_1 = __webpack_require__(285);
	var RouterLink = (function () {
	    function RouterLink(_routeSegment, _router) {
	        var _this = this;
	        this._routeSegment = _routeSegment;
	        this._router = _router;
	        this._commands = [];
	        this.isActive = false;
	        // because auxiliary links take existing primary and auxiliary routes into account,
	        // we need to update the link whenever params or other routes change.
	        this._subscription =
	            async_1.ObservableWrapper.subscribe(_router.changes, function (_) { _this._updateTargetUrlAndHref(); });
	    }
	    RouterLink.prototype.ngOnDestroy = function () { async_1.ObservableWrapper.dispose(this._subscription); };
	    Object.defineProperty(RouterLink.prototype, "routerLink", {
	        set: function (data) {
	            if (lang_1.isArray(data)) {
	                this._commands = data;
	            }
	            else {
	                this._commands = [data];
	            }
	            this._updateTargetUrlAndHref();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RouterLink.prototype.onClick = function () {
	        // If no target, or if target is _self, prevent default browser behavior
	        if (!lang_1.isString(this.target) || this.target == '_self') {
	            this._router.navigate(this._commands, this._routeSegment);
	            return false;
	        }
	        return true;
	    };
	    RouterLink.prototype._updateTargetUrlAndHref = function () {
	        var tree = this._router.createUrlTree(this._commands, this._routeSegment);
	        if (lang_1.isPresent(tree)) {
	            this.href = this._router.serializeUrl(tree);
	            this.isActive = this._router.urlTree.contains(tree);
	        }
	        else {
	            this.isActive = false;
	        }
	    };
	    RouterLink.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[routerLink]' },] },
	    ];
	    RouterLink.ctorParameters = [
	        { type: segments_1.RouteSegment, decorators: [{ type: core_1.Optional },] },
	        { type: router_1.Router, },
	    ];
	    RouterLink.propDecorators = {
	        'target': [{ type: core_1.Input },],
	        'href': [{ type: core_1.HostBinding },],
	        'isActive': [{ type: core_1.HostBinding, args: ['class.router-link-active',] },],
	        'routerLink': [{ type: core_1.Input },],
	        'onClick': [{ type: core_1.HostListener, args: ["click",] },],
	    };
	    return RouterLink;
	}());
	exports.RouterLink = RouterLink;
	//# sourceMappingURL=router_link.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map