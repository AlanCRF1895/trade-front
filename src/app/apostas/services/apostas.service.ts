import { Injectable } from '@angular/core';
import { Apostas } from '../model/apostas';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApostasService {

  constructor(private httpClient: HttpClient) { }

  /*list(): Apostas{

    
  }*/
}
