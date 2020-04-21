import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarComponent } from './../../shared/components/sidebar/sidebar.component';
import { FooterComponent } from './../../shared/components/footer/footer.component';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { SharedModule } from './../../shared/shared.module';
import { PostsComponent } from './../../modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { from } from 'rxjs';
import { DashboardService } from 'src/app/modules/dashboard.service';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
