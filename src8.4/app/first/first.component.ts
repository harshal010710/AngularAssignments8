import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent 
{
  public str : string = "Marvellous Infosystems";
  public trv : any;

  funUpper()
  {
    this.str = this.str.toUpperCase();
    this.trv = 1;
  }

  funLower()
  {
    this.str = this.str.toLowerCase();
    this.trv = 0;
  }
}
