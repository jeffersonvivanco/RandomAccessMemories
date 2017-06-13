import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Photo } from './photo';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotosService {
  constructor(private http: Http) { }
  // Get photo objects from mongodb
  getPhotos(): Promise<Photo[]> {
    return this.http.get('/api/photos')
      .toPromise().then(response => response.json() as Photo[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }
}


