import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// observable class extensions
import 'rxjs/add/observable/of';

// observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { PhotoSearchService } from './photo-search.service';
import { Photo } from './photo';


@Component({
  selector: 'app-photo-search',
  templateUrl: './photo-search.component.html',
  styleUrls: ['./photo-search.component.css'],
  providers: [PhotoSearchService]
})

export class PhotoSearchComponent implements OnInit {
  photos: Observable<Photo[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private photoSearchService: PhotoSearchService,
    private router: Router
  ) {}
  // Push a search term in the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.photos = this.searchTerms.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.photoSearchService.search(term)
        : Observable.of<Photo[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Photo[]>([]);
      });
  }
}
