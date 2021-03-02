import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';

const routes: Routes = [
  {
    path: ':slug',
    component: ArticleDetailComponent
  },
  {
    path: '',
    component: ArticleListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
