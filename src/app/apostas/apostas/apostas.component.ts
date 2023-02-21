import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apostas } from '../model/apostas';
import { ApostasService } from '../services/apostas.service';

@Component({
  selector: 'app-apostas',
  templateUrl: './apostas.component.html',
  styleUrls: ['./apostas.component.css']
})
export class ApostasComponent implements OnInit {

  apostas: Observable<Apostas[]>;  
  displayedColumns = ['idAposta','competicao','timeMandante','timeVisitante','estrategia','mercado','stake','profitLoss','golFavor','golContra','esporte']

  constructor(private apostasService: ApostasService){
    
    this.apostas = this.apostasService.list();

  }

  ngOnInit(): void{

  }

}
