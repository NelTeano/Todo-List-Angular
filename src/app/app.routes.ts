import { Routes } from '@angular/router';

// PAGES
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'todo',
        component: TodosComponent
    },
];
