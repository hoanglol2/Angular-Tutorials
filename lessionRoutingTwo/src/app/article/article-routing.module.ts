import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleLayoutComponent } from '../layouts/article-layout/article-layout.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  {
    path: 'article',
    component: ArticleLayoutComponent, // layer
    children: [
      {
        path: '',
        component: ArticleListComponent
      },
      {
        path: ':slug',
        component: ArticleDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
