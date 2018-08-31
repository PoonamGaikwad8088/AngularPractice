import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-pnl',
  templateUrl: './btn-pnl.component.html',
  styleUrls: ['./btn-pnl.component.css']
})
export class BtnPnlComponent implements OnInit {

  @ Output()
  notify: EventEmitter<string> = new EventEmitter()

  
  constructor() { }

  ngOnInit() {
  }

  onClick(btn:number){
    switch (btn) {
      case 1:
        this.notify.emit('alert alert-primary')
        break;
      case 2:
        this.notify.emit('alert alert-secondry')
        break;
      case 3:
        this.notify.emit('alert alert-success')
        break;
      case 4:
        this.notify.emit('alert alert-danger')
        break;
      case 5:
        this.notify.emit('alert alert-warning')
        break;
      case 6:
        this.notify.emit('alert alert-info')
        break;
      default:
        break;
    }
  }


}
