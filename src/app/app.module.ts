import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'
import { MarkdownModule } from 'ngx-markdown'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { SharedModule } from './shared/shared.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    SharedModule,
    IonicModule.forRoot({
      mode: 'md', //uniform ui of ios and android (// ios or md)
    }),
    MarkdownModule.forRoot(),
    AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
