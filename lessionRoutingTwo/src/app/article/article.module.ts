import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import { ArticleLayoutComponent } from '../layouts/article-layout/article-layout.component';

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent, ArticleLayoutComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
