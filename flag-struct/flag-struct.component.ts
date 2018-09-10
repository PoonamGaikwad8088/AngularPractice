import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag-struct',
  templateUrl: './flag-struct.component.html',
  styleUrls: ['./flag-struct.component.css']
})
export class FlagStructComponent implements OnInit {

  cname:string;
  countries=[
    {country : 'India', flag : '../../assets/India.png'},
    {country : 'Japan', flag : '../../assets/Japan.png'},
    {country : 'US', flag : '../../assets/US.jpg'},
    {country : 'China', flag : '../../assets/china.png'},
    {country : 'Germany', flag : '../../assets/Germany.png'},
    
  ]
  constructor() { }

  ngOnInit() {
  }

  fun(Cname:string){
    this.cname=Cname;

  }
}
