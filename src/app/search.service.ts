import {Injectable} from '@angular/core';
import {URLSearchParams, Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Article} from './article';

@Injectable()
export class SearchService {
  private articleApi: string;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getArticles(url: string): Promise<Article[]> {
    const params = new URLSearchParams();
    params.set('inputUrl', url);
    return this.http.get(this.articleApi, {headers: this.headers, params: params})
      .toPromise()
      .then(response => response.json().data as Article[])
      .catch(err => console.log('ERROR FETCHING ARTICLES'));
  }
}
