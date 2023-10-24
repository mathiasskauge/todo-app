import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(`${this.url}/todos`);
  }

  addTodo(newTodo: any): Observable<any> {
    return this.http.post(`${this.url}/todos`, newTodo);
  }

  deleteTodo(todoId: number): Observable<any> {
    return this.http.delete(`${this.url}/todos/${todoId}`);
  }
}
