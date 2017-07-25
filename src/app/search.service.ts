import {Injectable} from '@angular/core';
import {URLSearchParams, Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Article} from './article';

@Injectable()
export class SearchService {
  private articleApi = 'http://ec2-13-56-49-78.us-west-1.compute.amazonaws.com/api/';

  constructor(private http: Http) {
  }

  getArticles(url: string): Promise<Article[]> {
    const searchTerm = this.articleApi + '?inputUrl=' + url;
    return this.http.get(searchTerm)
      .toPromise()
      .then(response => response.json().articles as Article[])
      .catch(err => console.log('ERROR FETCHING ARTICLES'));
  }
}
