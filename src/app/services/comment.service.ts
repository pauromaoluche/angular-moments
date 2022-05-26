import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Comment } from '../interfaces/Comment';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl
  /* criando apiUrl para fazer comentario */
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(
    private http: HttpClient
  ) { }

  /* esta esperando dados "data:" que vem como interface de "Comment" */
  createComment(data: Comment): Observable<Response<Comment>>{
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Response<Comment>>(url, data)
  }
}
