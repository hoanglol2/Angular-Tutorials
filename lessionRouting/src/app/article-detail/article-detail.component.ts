import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleServiceService} from '../article-service.service';
import {Observable} from 'rxjs';
import {Article} from '../../models/articles';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit {
  article$: Observable<Article> | undefined;

  // tslint:disable-next-line:variable-name
  constructor(private _route: ActivatedRoute, private _api: ArticleServiceService) { }

  ngOnInit(): void {
    const slug = this._route.snapshot.paramMap.get('slug');
    this.article$ = this._api.getArticleBySlug(slug);
  }

}
