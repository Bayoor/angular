import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Project';

  myList: string[] = [];
  nameList: string = '';

  onEnter() {
    if (this.nameList.trim() !== '') {
      this.myList.push(this.nameList);
      this.nameList = ''; // Clear the input field
    }
  }

  clearList() {
    this.myList = [];
  }
}
