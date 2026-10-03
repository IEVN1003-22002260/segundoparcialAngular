import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Zodiaco } from './Formulario/zodiaco/zodiaco';  
import { FormsModule } from '@angular/forms'; 

@Component({
  imports: [RouterOutlet, Zodiaco, FormsModule],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {

  protected readonly title = signal('segundoparcialAngular');

  ngOnInit(): void {
    initFlowbite();
  }
}
