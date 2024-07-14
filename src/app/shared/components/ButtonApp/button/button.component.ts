import { Component } from '@angular/core';

type ButtonObject = {
  name: string;
  link: string;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor() {
  }

  public namePage : string | undefined;
  public linkPage : string | undefined;
  
  public generateButton({name, link}: ButtonObject) : void {
    this.namePage = name;
    this.linkPage = link;
  }
}
