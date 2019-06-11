import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = ""
  address: string = ""
  phone: string = ""
  city: string = ""
  age: number = 0

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Porto Alegre", state: "RS" },
    { name: "Curitiba", state: "PR" },
    { name: "Rio de Janeiro", state: "RJ" }
  ]

  clients = [
    {name: "João", address: "Rua dos feijões", phone: "976876341", age: 25, city: "São Paulo"},
    {name: "Maria", address: "Rua das couves", phone: "908763423", age: 4, city: "Porto Alegre"},
    {name: "Julia", address: "Rua das cenouras ", phone: "986234585", age: 30, city: "Curitiba"},
    {name: "Ana", address: "Rua dos fazeres", phone: "956853212", age: 15, city: "Rio de Janeiro"},

  ]

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        age: this.age,
        city: this.city
      }
    )
    this.cancel()
    console.log(this.clients)
  }

  cancel(){
    this.name = ''
    this.address = ''
    this.phone = ''
    this.city = ''
    this.age = 0
  }


  delete(i: number){
    this.clients.splice(i, 1);
  }
}
