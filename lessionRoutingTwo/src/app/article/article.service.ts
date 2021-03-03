import { Injectable } from '@angular/core';
import { ArticleModel } from '../models/article';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

const articleData: ArticleModel[] = [
  {
    id: '1',
    slug: 'bai-viet-1',
    title: 'bai viet 1',
    content: 'Noi dung bai viet 1',
    updateAt: '2020-07-06T13:26:31.785Z',
  },
  {
    id: '2',
    slug: 'bai-viet-2',
    title: 'bai viet 2',
    content: 'Noi dung bai viet 2',
    updateAt: '2020-07-15T13:26:31.785Z',
  },
];


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }
  getArticles(): Observable<ArticleModel[]> {
    return of(articleData).pipe(delay(500));
  }
  getArticleBySlug(slug: string | null): Observable<ArticleModel> {
    const article = articleData.find( e => e.slug === slug );
    // @ts-ignore
    return of(article).pipe(delay(500));
  }
}
