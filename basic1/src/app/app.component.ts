import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public name:String= 'Thamizh';
  public location:String ='Puducherry';
  public college:String='MVIT';
  public year:number=2025;
}
