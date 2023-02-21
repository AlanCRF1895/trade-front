import { Injectable } from '@angular/core';
import { Apostas } from '../model/apostas';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApostasService {

  private readonly API = 'http://localhost:8000/listar-apostas';
  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Apostas[]>(this.API);
  }

}
