import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-popover',
  templateUrl: './options-popover.component.html',
  styleUrls: ['./options-popover.component.scss'],
})
export class OptionsPopoverComponent implements OnInit {

  public isChecked: boolean;

  public darkModeToggle(value: boolean) {
    this.isChecked = value;
    document.body.classList.toggle('dark', value);
  }

  constructor() {
  }

  ngOnInit() {

  }



}
