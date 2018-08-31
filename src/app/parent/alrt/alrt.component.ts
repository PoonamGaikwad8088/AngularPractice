import { Component, OnInit ,EventEmitter ,Input} from '@angular/core';

@Component({
  selector: 'app-alrt',
  templateUrl: './alrt.component.html',
  styleUrls: ['./alrt.component.css']
})
export class AlrtComponent implements OnInit {

  @Input()
  alCls : string

  constructor() { }

  ngOnInit() {
  }

}
