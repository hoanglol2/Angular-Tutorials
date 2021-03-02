import {Injectable} from '@angular/core';
import { Article } from '../models/articles';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

const Articles: Article[] = [
  {
    id: '1',
    slug: 'bai-viet-1',
    title: 'Bai viet 1',
    content: 'Day la noi dung 1',
    updateAt: '2020-07-06T13:26:31.785Z',
  },
  {
    id: '2',
    slug: 'bai-viet-2',
    title: 'Bai viet 2',
    content: 'Day la noi dung 2',
    updateAt: '2020-07-15T13:26:31.785Z',
  },
];

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  constructor() {}

  getArticles(): Observable<Article[]> {
    // @ts-ignore
    return of(Articles).pipe(delay(500));
  }

  getArticleBySlug(slug: string | null): Observable<Article> {
    const article = Articles.find(e => e.slug === slug);
    // @ts-ignore
    return of(article).pipe(delay(500));
  }
}
