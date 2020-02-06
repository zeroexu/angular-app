import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adquisitions',
  templateUrl: './adquisitions.component.html',
  styleUrls: ['./adquisitions.component.scss']
})
export class AdquisitionsComponent implements OnInit {
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16')
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16')
    },
    {
      name: 'Work',
      updated: new Date('1/28/16')
    }
  ];
  constructor() {}

  ngOnInit() {}
}
