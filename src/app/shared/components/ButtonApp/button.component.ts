import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TButtonObject } from '../../types/SharedTypes';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() button!: TButtonObject;
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit();
  }
}
