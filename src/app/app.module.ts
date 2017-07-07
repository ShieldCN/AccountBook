import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import {HttpModule} from "@angular/http";

import { Camera } from '@ionic-native/camera';
import { AppVersion } from '@ionic-native/app-version';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ImagePicker } from '@ionic-native/image-picker';
import { Network } from '@ionic-native/network';
import { AppMinimize } from '@ionic-native/app-minimize';
// import { JPush } from "../../typings/modules/jpush/index";
import { NativeService } from "../providers/NativeService";
// import { HttpService } from "../providers/HttpService";
// import { FileService } from "../providers/FileService";
// import { Helper } from "../providers/Helper";
// import { Utils } from "../providers/Utils";
// import { GlobalData } from "../providers/GlobalData";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TestPage } from '../pages/test/test';
import { TestItemPage } from '../pages/test-item/test-item';
import {TabsPage} from "../pages/tabs/tabs";
import {ItemPage} from "../pages/item/item";
import {CategoryPage} from "../pages/category/category";
import {CategoryItemPage} from "../pages/category/category-item";


@NgModule({
	declarations: [
		MyApp,
		HomePage,
		TestPage,
		TestItemPage,
		LoginPage,
		TabsPage,
		ItemPage,
		CategoryPage,
		CategoryItemPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot(),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		TestPage,
		TestItemPage,
		LoginPage,
		TabsPage,
		ItemPage,
		CategoryPage,
		CategoryItemPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		Toast,
		File,
		Transfer,
		InAppBrowser,
		ImagePicker,
		Network,
		AppMinimize,
		Camera,
		AppVersion,
		// JPush,
		NativeService,
		// HttpService,
		// FileService,
		// Helper,
		// Utils,
		// GlobalData
	]
})
export class AppModule { }
