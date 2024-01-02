import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  
  lastThreeLetters: string = "";

  constructor() {
    const titleText = 'Welcome to dezemba.io'; // Replace with your actual title
    if (titleText.length > 3) {
      this.lastThreeLetters = titleText.slice(-3);
    }
  }
}
