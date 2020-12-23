import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  @Input() public parentData: string;
  public transport = ['Truckförare', 'Lastkopplare'];
  public commissioning = ['Elinstallatör', 'Mekaniker', 'Programmerare'];
  public originalsettings = ['Elinstallatör', 'Mekaniker', 'Programmerare'];
  // tslint:disable-next-line: max-line-length
  public operation = ['Operatör', 'Trainee', 'Praktikant', 'Lärling', 'Operatör av intilliggande maskin', 'Administrativ personal', 'Besökare', 'Allmänheten', 'Barn'];
  public maintenance = ['Underhållspersonal', 'Servicepersonal'];
  public faultfinding = ['Tekniker', 'Servicepersonal', 'Mekaniker', 'Elektriker'];
  public scrapping = ['Elinstallatör', 'Mekaniker', 'Truckförare', 'Lastkopplare'];

  constructor() { }

  ngOnInit() {
  }
  myFunction(value: string)  {
    this.parentData = value;
  }

}
