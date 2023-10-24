import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'todo-app';
    todos: any[] = [];
    newTodo: any = {};

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.refreshTodos();
    }

    refreshTodos() {
        this.http.get<any[]>('http://localhost:8080/todos').subscribe((response) => {
            this.todos = response;
        });
    }

    addTodo() {
        this.http.post('http://localhost:8080/todos', this.newTodo).subscribe(() => {
            this.refreshTodos();
            this.newTodo = {};
        });
    }

    deleteTodo(id: number) {
        this.http.delete(`http://localhost:8080/todos/${id}`).subscribe(() => {
            this.refreshTodos();
        });
    }
}
