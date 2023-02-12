import { Component } from '@angular/core';
import { Apostas } from '../model/apostas';

@Component({
  selector: 'app-apostas',
  templateUrl: './apostas.component.html',
  styleUrls: ['./apostas.component.css']
})
export class ApostasComponent {

  apostas: Apostas [] = [
    { _id: "1", name: "Alan", category: "Apostador" },
    { _id: "2", name: "Flamengo", category: "Mundial" },
    { _id: "3", name: "Vasco", category: "Lixo" }
    
  ];
  displayedColumns = ['name','category']

  constructor(){
    //this.apostas = [];
  }

  ngOnInit(): void{

  }

}
