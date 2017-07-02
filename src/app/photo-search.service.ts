import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Photo } from './photo';
import { Searchresult} from './searchresult';

@Injectable()
export class PhotoSearchService {
  private photosUrl = 'http://localhost:3000/api/photos/search';
  // private photosUrl = '/api/photos';
  constructor(private http: Http) {}
  search(term: string): Observable<Photo[]> {
    const result = this.http.get(`${this.photosUrl}/?country=${term}`).map(response => response.json() as Searchresult[]);
    console.log('RESULT BELOW\n', result);
    return this.http.get(`${this.photosUrl}?search_q=${term}`).map(response => response.json() as Photo[]);
  }
}
