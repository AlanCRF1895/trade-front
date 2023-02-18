import { Component } from '@angular/core';
import { Apostas } from '../model/apostas';
import { ApostasService } from '../services/apostas.service';

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

  constructor(private apostasService: ApostasService){
    //this.apostas = [];
    //this.apostasService = this.apostasService.list();
  }

  ngOnInit(): void{

  }

}
