import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {


  users = [
    {login: "Monica", role: "user", lastlogin: new Date('2/1/2019')},
    {login: "Rachel", role: "admin", lastlogin: new Date('11/16/2018')},
    {login: "Phoebe", role: "admin", lastlogin: new Date('2/10/2019')},
    {login: "Joey", role: "user", lastlogin: new Date('5/30/2018')},
    {login: "Chandler", role: "user", lastlogin: new Date('10/1/2019')},
    {login: "Ross", role: "admin", lastlogin: new Date('6/3/2019')}
  ]

  constructor() { }

  ngOnInit() {
  }

}
