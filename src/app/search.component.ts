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
  placeholder_toggle: boolean;
  loading: boolean

  constructor(private searchService: SearchService) {
    this.placeholder_toggle = true;
    this.loading = false
  }

  getArticles(url: string): void {
    this.placeholder_toggle = false;
    this.loading = true;
    this.searchService.getArticles(url)
      .then(result => {
        this.articles = result
        this.loading = false;
      });
  }
}
