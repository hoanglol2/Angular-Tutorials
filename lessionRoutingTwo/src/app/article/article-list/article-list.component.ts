import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../../models/article';
import { ArticleService } from '../article.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<ArticleModel[]> | undefined;
  // tslint:disable-next-line:variable-name
  constructor(private _api: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }
}
