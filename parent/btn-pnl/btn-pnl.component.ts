import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-pnl',
  templateUrl: './btn-pnl.component.html',
  styleUrls: ['./btn-pnl.component.css']
})
export class BtnPnlComponent implements OnInit {
  public express:string=""

  n=[]

  public num11:string

  @ Output()
  notify: EventEmitter<string> = new EventEmitter()

  
  constructor() { }

  ngOnInit() {
  }

  onClick(btn:number){
    
    this.express +=  btn.toString();
    this.notify.emit(this.express);
    

  }

  fncalc(){
    this.num11=eval(this.express);
    
    this.notify.emit(this.num11);
  }

}
