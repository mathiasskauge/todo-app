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
        // Replace 'YOUR_API_URL_HERE' with the actual URL of your Spring Boot API
        this.http.get<any[]>('http://localhost:8080/todos').subscribe((response) => {
            this.todos = response;
        });
    }

    addTodo() {
        // Replace 'YOUR_API_URL_HERE' with the actual URL of your Spring Boot API
        this.http.post('http://localhost:8080/todos', this.newTodo).subscribe(() => {
            // Refresh the todos list after adding a new todo
            this.refreshTodos();

            // Optionally, you can reset the form
            this.newTodo = {};
        });
    }

    deleteTodo(id: number) {
        // Replace 'YOUR_API_URL_HERE' with the actual URL of your Spring Boot API
        this.http.delete(`http://localhost:8080/todos/${id}`).subscribe(() => {
            // Refresh the todos list after deleting a todo
            this.refreshTodos();
        });
    }
}
