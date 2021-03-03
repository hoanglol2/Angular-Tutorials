import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../../models/article';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit {
  article$: Observable<ArticleModel> | undefined;
  // tslint:disable-next-line:variable-name
  constructor(private _route: ActivatedRoute, private _api: ArticleService, private router: Router) { }

  ngOnInit(): void {
    /* cach 1 */
    // const slug = this._route.snapshot.paramMap.get('slug');
    // this.article$ = this._api.getArticleBySlug(slug);

    /* cach 2 */
    this.article$ = this._route.paramMap.pipe(
      map(params => params.get('slug')),
      switchMap(slug => this._api.getArticleBySlug(slug))
    );
  }

  handleClick(e: any): void {
    e.preventDefault();
    const slug = this._route.snapshot.paramMap.get('slug');
  }
}
