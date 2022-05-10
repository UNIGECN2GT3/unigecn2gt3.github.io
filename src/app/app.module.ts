import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './content/common-ui/header/header.component';
import { MainBodyComponent } from './content/common-ui/main-body/main-body.component';

import { HomeComponent } from './content/home/home.component';
import { ServiceLocator } from './utils/service.locator';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { QuizBodyComponent } from './content/common-ui/quiz-body/quiz-body.component';
import { QuizMainComponent } from './content/quiz-main/quiz-main.component';
import { NumberToArrayPipe } from './pipes/number-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    HomeComponent,
    QuizBodyComponent,
    QuizMainComponent,
    NumberToArrayPipe,
  ],
  imports: [
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'unigecn2-2022-gt3' }),
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(private injector: Injector) {    // Create global Service Injector.
      ServiceLocator.injector = this.injector;
  }
}
