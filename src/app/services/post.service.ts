import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';

const URL = 'https://jsonplaceholder.typicode.com';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${URL}/posts`, httpOptions);
  }

  createPost(post: Post): Observable<any> {
    return this.http.post(`${URL}/posts`, post, httpOptions);
  }
}
