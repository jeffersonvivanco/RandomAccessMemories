import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Photo } from './photo';

@Injectable()
export class PhotoSearchService {
  // private photosUrl = 'http://localhost:3000/api/photos';
  private photosUrl = '/api/photos';
  constructor(private http: Http) {}
  search(term: string): Observable<Photo[]> {
    return this.http.get(`${this.photosUrl}/?name=${term}`).map(response => response.json() as Photo[]);
  }
}
