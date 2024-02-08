import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {provideNativeDateAdapter} from '@angular/material/core';

export interface Todos {
  title: string;
  position: number;
  desc: string;
  date: string;
}

const todosData: Todos[] = [
  {position: 1, title: 'Hydrogen', desc: 'H', date: 'October 20, 2002'},
  {position: 2, title: 'Helium',  desc: 'He', date: 'October 20, 2002'},
  {position: 3, title: 'Lithium',  desc: 'Li', date: 'October 20, 2002'},
  {position: 4, title: 'Beryllium', desc: 'Be', date: 'October 20, 2002'},
  {position: 5, title: 'Boron',  desc: 'B', date: 'October 20, 2002'},
  {position: 6, title: 'Carbon', desc: 'C', date: 'October 20, 2002'},
  {position: 7, title: 'Nitrogen', desc: 'N', date: 'October 20, 2002'},
  {position: 8, title: 'Oxygen',  desc: 'O', date: 'October 20, 2002'},
  {position: 9, title: 'Fluorine', desc: 'F', date: 'October 20, 2002'},
  {position: 10, title: 'Neon', desc: 'Ne', date: 'October 20, 2002'},
];


@Component({
  selector: 'app-todos',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDatepickerModule, MatIconModule, MatFormFieldModule, MatTableModule, RouterOutlet, RouterLink, RouterLinkActive, MatInputModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})


export class TodosComponent {
  displayedColumns: string[] = ['position', 'title', 'description', 'date'];
  dataSource = todosData;
  clickedRows = new Set<Todos>();
}
