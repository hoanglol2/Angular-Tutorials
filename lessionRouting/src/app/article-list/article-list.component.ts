import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../article-service.service';
import {Observable} from 'rxjs';
import {Article} from '../../models/articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]> | undefined;
  // tslint:disable-next-line:variable-name
  constructor(private  _api: ArticleServiceService) { }

  ngOnInit(): void {
   this.articles$ = this._api.getArticles();
  }
}
