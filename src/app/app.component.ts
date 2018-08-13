import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phase1';

  openNav() {
    const element = document.getElementById('NavBar');
    element.style.display = 'block';
  }

}