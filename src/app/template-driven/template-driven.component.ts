import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myForm?: NgForm;

  onSubmit() {
    alert('Form was succesfully submitted!');
    this.myForm?.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
