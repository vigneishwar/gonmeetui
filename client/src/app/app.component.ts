import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'Go n Meet';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:7000/api/users').subscribe({
      next: res => {this.users = res},
      error: err => console.error(err),
      complete: () => console.log('Request complete')
    });
  }
}
