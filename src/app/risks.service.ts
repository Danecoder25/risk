import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RisksService {

  constructor() { }
  getRisks() {
    return [
      {id: 1, name: 'Dane'},
      {id: 2, name: 'carrie'}
    ];
  }
}
