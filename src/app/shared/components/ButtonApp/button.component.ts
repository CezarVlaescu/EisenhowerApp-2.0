import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonObject } from 'src/types/SharedTypes';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() button!: ButtonObject;
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit();
  }
}
