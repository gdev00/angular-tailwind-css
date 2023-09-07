import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardLayoutComponent } from 'src/components/card-layout/card-layout.component';
import { GridAnimationComponent } from 'src/components/grid-animation/grid-animation.component';
import { MagazineLayoutComponent } from 'src/components/magazine-layout/magazine-layout.component';
import { ResponsiveGridComponent } from 'src/components/responsive-grid/responsive-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveGridComponent,
    GridAnimationComponent,
    MagazineLayoutComponent,
    CardLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
