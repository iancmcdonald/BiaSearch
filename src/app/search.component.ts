import {Component} from '@angular/core';

import {SearchService} from './search.service';

import {Article} from './article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  articles: Article[];
  url: string;

  constructor(private searchService: SearchService) {
  }

  getArticles(url: string): void {
    this.searchService.getArticles(url)
      .then(result => this.articles = result);
  }
}
