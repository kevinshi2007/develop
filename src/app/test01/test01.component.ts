import { Component, OnInit } from '@angular/core';
import { ButtonListService} from '../services/button-list.service';
import {Button} from '../models/button.model';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {
  buttons: Button[];
  constructor(private buttonService: ButtonListService) { }

  ngOnInit() {
    this.buttonService.getButtonList().subscribe(items => this.buttons = items, error => console.log(error));
  }

}
