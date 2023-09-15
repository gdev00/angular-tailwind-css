import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardLayoutComponent } from 'src/components/card-layout/card-layout.component';
import { CardProfileComponent } from 'src/components/card-profile/card-profile.component';
import { FlyoutMenusV2Component } from 'src/components/flyout-menus-v2/flyout-menus-v2.component';
import { FlyoutMenusComponent } from 'src/components/flyout-menus/flyout-menus.component';
import { GridAnimationComponent } from 'src/components/grid-animation/grid-animation.component';
import { LayoutDesignV1Component } from 'src/components/layout-design-v1/layout-design-v1.component';
import { MagazineLayoutComponent } from 'src/components/magazine-layout/magazine-layout.component';
import { MostOrderedComponent } from 'src/components/most-ordered/most-ordered.component';
import { MostTypeOrderComponent } from 'src/components/most-type-order/most-type-order.component';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar.component';
import { OrderReportComponent } from 'src/components/order-report/order-report.component';
import { ResponsiveGridComponent } from 'src/components/responsive-grid/responsive-grid.component';
import { SideBarComponent } from 'src/components/side-bar/side-bar.component';
import { StatsCardComponent } from 'src/components/stats-card/stats-card.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TaskboardPageComponent } from './taskboard-page/taskboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveGridComponent,
    GridAnimationComponent,
    MagazineLayoutComponent,
    CardLayoutComponent,
    SideBarComponent,
    StatsCardComponent,
    OrderReportComponent,
    MostOrderedComponent,
    MostTypeOrderComponent,
    DashboardPageComponent,
    TaskboardPageComponent,
    NavBarComponent,
    FlyoutMenusComponent,
    FlyoutMenusV2Component,
    CardProfileComponent,
    LayoutDesignV1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
