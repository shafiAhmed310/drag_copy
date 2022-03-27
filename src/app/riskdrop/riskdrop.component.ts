import { CdkDrag, CdkDragDrop, CdkDragEnd, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { CheckserviceService } from '../checkservice.service';

@Component({
  selector: 'app-riskdrop',
  templateUrl: './riskdrop.component.html',
  styleUrls: ['./riskdrop.component.scss']
})
export class RiskdropComponent implements OnInit, AfterViewChecked {
  bmibtnvalues = [];

  @Input() bmibtnval: any;
  @Input() allDropLists: any;
  @Input() bmicir: any;
  @Input() fatcir: any;
  @Input() viscir: any;
  @Input() skmicir: any;
  @Input() tbwcir: any;
  @Input() whrcir: any;
  @Output() bmibtnvals: EventEmitter<never[]> = new EventEmitter<never[]>()
  constructor(private chek: CheckserviceService, private renderer: Renderer2) {}
  ngAfterViewChecked(): void {

  }
  ngOnInit(): void {

  }
  graphvalues = [22, 37, 40, 30, 52, 1.1]
  arr: string[] = []

  drag(event: CdkDragDrop < string[] > ) {
    if (event.previousContainer.data === event.container.data) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.moveBtn(event)
      let b=[...new Set(event.container.data)]
      for (let i = 0; i < event.container.data.length; i++) {
        event.container.data[i]=b[i];
        if(event.container.data[i]==null){
          event.container.data.splice(i,1)
        }
      }
      this.bmibtnvals.emit(this.bmibtnval.riskvalue);
     copyArrayItem(event.previousContainer.data,b , event.previousIndex, event.currentIndex)
    }

    if(event.container.data.length==0){
      event.container.data.push(...event.previousContainer.data)

      for (let i = 0; i < event.previousContainer.data.length; i++) {
        event.previousContainer.data.pop();
      }
     this.moveBtn(event)
    }
    // else if(event.container.data.length>0){

    //   for (let i = 0; i < event.previousContainer.data.length; i++) {
    //     event.previousContainer.data.pop();
    //   }
    //   event.container.data.push(...event.previousContainer.data)
    //  this.moveBtn(event)
    // }
    else if(event.container.data.length >1){
      event.container.data.splice(event.container.data.length, event.container.data.length)
      event.container.data.push(...event.previousContainer.data)
      for (let i = 0; i < event.previousContainer.data.length; i++) {
        event.previousContainer.data.pop();
      }
    }
    console.log( event.container.data," event.container.data");
    console.log( event.previousContainer.data," event.previousContainer.data");

  }

  moveBtn(event: CdkDragDrop < string[] > ){
    if (this.bmicir) {
      if (this.graphvalues[0] <= 18.5) {
        event.container.data.push('#922ABEbmiunderweight');
      } else if (this.graphvalues[0] > 18.5 && this.graphvalues[0] <= 23) {
        event.container.data.push('#35015BbmiNormal')
      } else if (this.graphvalues[0] > 23 && this.graphvalues[0] <= 25) {
        event.container.data.push('#7A7AF4bmiOverweight')

      } else if (this.graphvalues[0] > 25 && this.graphvalues[0] <= 30) {
        event.container.data.push('#00B900bmiPre Obese')
      } else if (this.graphvalues[0] > 30 && this.graphvalues[0] <= 40) {
        event.container.data.push('#DBE300bmiObese')

      } else if (this.graphvalues[0] > 40 && this.graphvalues[0] <= 50) {
        event.container.data.push('#E5A000bmiMorbid Obese')

      } else if (this.graphvalues[0] > 50) {
        event.container.data.push('#D10000bmiSuper Obese')
      }
      this.bmicir = false
      this.fatcir = false
      this.viscir = false
      this.skmicir = false
      this.tbwcir = false
      this.whrcir = false
    } else if (this.fatcir) {
      if (this.graphvalues[1] <= 10) {
        event.container.data.push("#35015BfatUnderfat")
      } else if (this.graphvalues[1] > 10 && this.graphvalues[1] <= 20) {
        event.container.data.push("#00B900fatHealthy")
      } else if (this.graphvalues[1] > 20 && this.graphvalues[1] <= 30) {
        event.container.data.push("#E5A000fatOverfat")
      } else if (this.graphvalues[1] > 30 && this.graphvalues[1] <= 40) {
        event.container.data.push("#E5A000fatOverfat")
      } else if (this.graphvalues[1] > 40 && this.graphvalues[1] <= 50) {
        event.container.data.push("#E5A000fatOverfat")
      } else if (this.graphvalues[1] > 50 && this.graphvalues[1] <= 60) {
        event.container.data.push("#D10000fatObese")
      }
      this.bmicir = false
      this.fatcir = false
      this.viscir = false
      this.skmicir = false
      this.tbwcir = false
      this.whrcir = false
    } else if (this.viscir) {
      if (this.graphvalues[2] <= 10) {
        event.container.data.push("#00B900visHealthy")
      } else if (this.graphvalues[2] > 10 && this.graphvalues[2] <= 20) {
        event.container.data.push("#00B900visHealthy")
      } else if (this.graphvalues[2] > 20 && this.graphvalues[2] <= 30) {
        event.container.data.push("#D10000visExcessive")
      } else if (this.graphvalues[2] > 30 && this.graphvalues[2] <= 40) {
        event.container.data.push("#D10000visExcessive")
      } else if (this.graphvalues[2] > 40 && this.graphvalues[2] <= 50) {
        event.container.data.push("#D10000visExcessive")
      } else if (this.graphvalues[2] > 50 && this.graphvalues[2] <= 60) {
        event.container.data.push("#D10000visExcessive")
      }
      this.bmicir = false
      this.fatcir = false
      this.viscir = false
      this.skmicir = false
      this.tbwcir = false
      this.whrcir = false
    } else if (this.skmicir) {
      if (this.graphvalues[3] <= 10) {
        event.container.data.push("#35015BskmLow")
      } else if (this.graphvalues[3] > 10 && this.graphvalues[3] <= 20) {
        event.container.data.push("#00B900skmNormal")
      } else if (this.graphvalues[3] > 20 && this.graphvalues[3] <= 30) {
        event.container.data.push("#00B900skmNormal")
      } else if (this.graphvalues[3] > 30 && this.graphvalues[3] <= 40) {
        event.container.data.push("#E5A000skmHigh")
      } else if (this.graphvalues[3] > 40 && this.graphvalues[3] <= 50) {
        event.container.data.push("#E5A000skmHigh")
      } else if (this.graphvalues[3] > 50 && this.graphvalues[3] <= 60) {
        event.container.data.push("#D10000skmVery High")
      }
      this.bmicir = false
      this.fatcir = false
      this.viscir = false
      this.skmicir = false
      this.tbwcir = false
      this.whrcir = false
    } else if (this.tbwcir) {
      if (this.graphvalues[4] > 40 && this.graphvalues[4] <= 50) {
        event.container.data.push("#35015BtbwLow")
      } else if (this.graphvalues[4] > 50 && this.graphvalues[4] <= 60) {
        event.container.data.push("#00B900tbwNormal")
      } else if (this.graphvalues[4] > 60 && this.graphvalues[4] <= 70) {
        event.container.data.push("#D10000tbwHigh")
      }
      this.bmicir = false
      this.fatcir = false
      this.viscir = false
      this.skmicir = false
      this.tbwcir = false
      this.whrcir = false
    } else if (this.whrcir) {
      if (this.graphvalues[5] > 0.5 && this.graphvalues[5] <= 0.9) {
        event.container.data.push("#35015whrLow Risk")
      } else if (this.graphvalues[5] > 0.9 && this.graphvalues[5] <= 1.3) {
        event.container.data.push("#00B900whrModerate Risk")
      } else if (this.graphvalues[5] > 1.3 && this.graphvalues[5] <= 1.5) {
        event.container.data.push("#D10000whrHigh Risk")
      }
      this.bmicir = false
      this.fatcir = false
      this.viscir = false
      this.skmicir = false
      this.tbwcir = false
      this.whrcir = false
    }
  }



}
