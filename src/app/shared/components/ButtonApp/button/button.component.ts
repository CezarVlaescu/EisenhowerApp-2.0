import { Component, Input } from '@angular/core';

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
  @Input() button!: ButtonObject;

}
