import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'connect_django';
  apiGetAllStds(): void {
    fetch("/api/get_all_student/")
      .then(data => data.json())
      .then(res => console.log(res))
  }
  apiAddStd(){
    const data = {
      "name": "Jack",
      "gender": "man",
      "age": 20,
      "school": "師大",
      "hobby": "玩遊戲"
    }
    fetch(
      "/api/get_all_student/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      }
      ).then()
  }
}
