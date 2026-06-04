import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar} from './components/navbar/navbar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  
  imports: [CommonModule, Navbar, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title: string = 'Interactive Angular Webpage';
  

}