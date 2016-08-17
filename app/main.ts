/**
 * Created by apple on 15/9/14.
 */
import 'nm/reflect-metadata/Reflect.js';
import 'nm/zone.js/lib/zone.js';
import 'nm/es6-shim';
//import { Component, View, bootstrap } from '';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser' ;

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App {{ name }}</h1>'
})
class MyAppComponent {
    constructor() {
        this.name = 'World';
    }
}

bootstrap(MyAppComponent);