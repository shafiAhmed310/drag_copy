import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit, AfterViewChecked {
  @ViewChild('bmicircle') bmicircle: ElementRef | any;
  @ViewChild('fatcircle') fatcircle: ElementRef | any;
  @ViewChild('visceralfatcircle') visceralfatcircle: ElementRef | any;
  @ViewChild('skeletalmusclecircle') skeletalmusclecircle: ElementRef | any;
  @ViewChild('totalbodywatercircle') totalbodywatercircle: ElementRef | any;
  @ViewChild('waisttohipcircle') waisttohipcircle: ElementRef | any;


  constructor(private renderer: Renderer2) {

  }
  graphvalues = [22, 37, 40, 30, 52, 1.1]
  bmicir: boolean | undefined
  fatcir: boolean | undefined
  viscir: boolean | undefined
  skmicir: boolean | undefined
  tbwcir: boolean | undefined
  whrcir: boolean | undefined

  ngOnInit(): void {}
  BMI1: string[] = ['Underweight', 'Normal', 'Overweight', 'Pre Obese', 'Obese', 'Morbid Obese', 'Super Obese'];
  FAT: string[] = ['Underfat', 'Healthy', 'Overfat', 'Obese'];
  Visceral: string[] = ['Healthy', 'Excessive'];
  Skeletal: string[] = ['Low', 'Normal', 'High', 'Very High'];
  Total: string[] = ['Low', 'Normal', 'High'];
  Waist: string[] = ['Low Risk', 'Moderate Risk', 'High Risk']

  ListData: string[] = []

  bmibtnvalues = [{
    name: "Risk Board",
    riskvalue: []
  }];

  allDropLists = ["BMI1List", "FATList", "VisceralList", "SkeletalList", "TotalList", "WaistList", ...this.bmibtnvalues.map(_ => _.name)];

  eventHandler(event:never[]){
     this.bmibtnvalues[0].riskvalue = event;

     console.log(event,'child event ss');
     
   }
  drop(event: CdkDragDrop < string[] > ) {
    if (event.previousContainer.data === event.container.data) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,event.container.data, event.previousIndex, event.currentIndex);
    }
    console.log( event.container.data,"container parent");
    console.log( event.previousContainer.data,"previousContainer parent");
  }

  ngAfterViewInit(): void {

  }
  ngAfterViewChecked() {
    this.bmiCirclePosition()
    this.fatCirclePosition()
    this.visceralfatcirclePosition()
    this.skeletalmusclecirclePosition()
    this.totalbodywatercirclePosition()
    this.waisttohipcirclePosition()
  }

  bmirangeValue = 27
  bmiboxWidth = 140
  fatrangeValue = 7
  fatboxWidth = 140
  visceralfatrangeValue = 10
  visceralfatboxWidth = 145
  skeletalmusclerangeValue = 20
  skeletalmuscleboxWidth = 145
  totalbodywaterrangeValue = 42
  totalbodywaterboxWidth = 326.3
  waisttohiprangeValue = 1.3
  waisttohipboxWidth = 326.3

  bmiCirclePosition() {
    if (this.graphvalues[0] <= 18.5) {
      var positionvalue = this.bmiboxWidth / 18.5 * this.graphvalues[0]
      this.renderer.setStyle(this.bmicircle.nativeElement, 'background', `#922ABE`)
      this.renderer.setStyle(this.bmicircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[0] > 18.5 && this.graphvalues[0] <= 23) {
      var positionvalue = this.bmiboxWidth / 4.5
      var y = (this.graphvalues[0] - 18.5) * positionvalue
      positionvalue = this.bmiboxWidth + y
      this.renderer.setStyle(this.bmicircle.nativeElement, 'background', `#35015B`)
      this.renderer.setStyle(this.bmicircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[0] > 23 && this.graphvalues[0] <= 25) {
      var positionvalue = this.bmiboxWidth / 2
      var y = (this.graphvalues[0] - 23) * positionvalue
      var previousbmiboxwidth = this.bmiboxWidth * 2
      positionvalue = previousbmiboxwidth + y
      this.renderer.setStyle(this.bmicircle.nativeElement, 'background', `#7A7AF4`)
      this.renderer.setStyle(this.bmicircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[0] > 25 && this.graphvalues[0] <= 30) {
      var positionvalue = this.bmiboxWidth / 5
      var y = (this.graphvalues[0] - 25) * positionvalue
      var previousbmiboxwidth = this.bmiboxWidth * 3
      positionvalue = previousbmiboxwidth + y
      this.renderer.setStyle(this.bmicircle.nativeElement, 'background', `#00B900`)
      this.renderer.setStyle(this.bmicircle.nativeElement, 'left', `${positionvalue}px`)

    } else if (this.graphvalues[0] > 30 && this.graphvalues[0] <= 40) {
      var positionvalue = this.bmiboxWidth / 10
      var y = (this.graphvalues[0] - 30) * positionvalue
      var previousbmiboxwidth = this.bmiboxWidth * 4
      positionvalue = previousbmiboxwidth + y
      this.renderer.setStyle(this.bmicircle.nativeElement, 'background', `#DBE300`)
      this.renderer.setStyle(this.bmicircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[0] > 40 && this.graphvalues[0] <= 50) {
      var positionvalue = this.bmiboxWidth / 10
      var y = (this.graphvalues[0] - 40) * positionvalue
      var previousbmiboxwidth = this.bmiboxWidth * 5
      positionvalue = previousbmiboxwidth + y
      this.renderer.setStyle(this.bmicircle.nativeElement, 'background', `#E5A000`)
      this.renderer.setStyle(this.bmicircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[0] > 50) {
      var positionvalue = this.bmiboxWidth / 10
      var y = (this.graphvalues[0] - 50) * positionvalue
      var previousbmiboxwidth = this.bmiboxWidth * 6
      positionvalue = previousbmiboxwidth + y
      this.renderer.setStyle(this.bmicircle.nativeElement, 'background', `#D10000`)
      this.renderer.setStyle(this.bmicircle.nativeElement, 'left', `${positionvalue}px`)
    }
  }

  fatCirclePosition() {
    if (this.graphvalues[1] <= 10) {
      var fatcircleposvalue = this.fatboxWidth / 10 * this.graphvalues[1]
      this.renderer.setStyle(this.fatcircle.nativeElement, 'background', `#922ABE`)
      this.renderer.setStyle(this.fatcircle.nativeElement, 'left', `${fatcircleposvalue}px`)
    } else if (this.graphvalues[1] > 10 && this.graphvalues[1] <= 20) {
      var fatcircleposvalue = this.fatboxWidth / 10
      var y = (this.graphvalues[1] - 10) * fatcircleposvalue
      fatcircleposvalue = this.fatboxWidth + y
      console.log(fatcircleposvalue);
      this.renderer.setStyle(this.fatcircle.nativeElement, 'background', `#35015B`)
      this.renderer.setStyle(this.fatcircle.nativeElement, 'left', `${fatcircleposvalue}px`)
      console.log(fatcircleposvalue);

    } else if (this.graphvalues[1] > 20 && this.graphvalues[1] <= 30) {
      var fatcircleposvalue = this.fatboxWidth / 10
      var y = (this.graphvalues[1] - 20) * fatcircleposvalue
      var previousfatboxWidth = this.fatboxWidth * 2
      fatcircleposvalue = previousfatboxWidth + y
      this.renderer.setStyle(this.fatcircle.nativeElement, 'background', `#7A7AF4`)
      this.renderer.setStyle(this.fatcircle.nativeElement, 'left', `${fatcircleposvalue}px`)
    } else if (this.graphvalues[1] > 30 && this.graphvalues[1] <= 40) {
      var fatcircleposvalue = this.fatboxWidth / 10
      var y = (this.graphvalues[1] - 30) * fatcircleposvalue
      var previousfatboxWidth = this.fatboxWidth * 3
      fatcircleposvalue = previousfatboxWidth + y
      this.renderer.setStyle(this.fatcircle.nativeElement, 'background', `#00B900`)
      this.renderer.setStyle(this.fatcircle.nativeElement, 'left', `${fatcircleposvalue}px`)
    }
  }

  visceralfatcirclePosition() {

    if (this.graphvalues[2] <= 10) {
      var positionvalue = this.visceralfatboxWidth / 10 * this.graphvalues[1]
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'background', `#00B900`)
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[2] > 10 && this.graphvalues[2] <= 20) {
      var positionvalue = this.visceralfatboxWidth / 10
      var y = (this.graphvalues[2] - 10) * positionvalue
      positionvalue = this.visceralfatboxWidth + y
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'background', `#00B900`)
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[2] > 20 && this.graphvalues[2] <= 30) {
      var positionvalue = this.visceralfatboxWidth / 10
      var y = (this.graphvalues[2] - 20) * positionvalue
      var previousvisceralfatboxWidth = this.visceralfatboxWidth * 2
      positionvalue = previousvisceralfatboxWidth + y
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'background', `#D10000`)
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[2] > 30 && this.graphvalues[2] <= 40) {
      var positionvalue = this.visceralfatboxWidth / 10
      var y = (this.graphvalues[2] - 30) * positionvalue
      var previousvisceralfatboxWidth = this.visceralfatboxWidth * 3
      positionvalue = previousvisceralfatboxWidth + y
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'background', `#D10000`)
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[2] > 40 && this.graphvalues[2] <= 50) {
      var positionvalue = this.visceralfatboxWidth / 10
      var y = (this.graphvalues[2] - 40) * positionvalue
      var previousvisceralfatboxWidth = this.visceralfatboxWidth * 4
      positionvalue = previousvisceralfatboxWidth + y
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'background', `#D10000`)
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[2] > 50 && this.graphvalues[2] <= 60) {
      var positionvalue = this.visceralfatboxWidth / 10
      var y = (this.graphvalues[2] - 50) * positionvalue
      var previousvisceralfatboxWidth = this.visceralfatboxWidth * 5
      positionvalue = previousvisceralfatboxWidth + y
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'background', `#D10000`)
      this.renderer.setStyle(this.visceralfatcircle.nativeElement, 'left', `${positionvalue}px`)
    }

  }

  skeletalmusclecirclePosition() {
    if (this.graphvalues[3] <= 10) {
      var positionvalue = this.skeletalmuscleboxWidth / 10 * this.graphvalues[3]
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'background', `#35015B`)
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[3] > 10 && this.graphvalues[3] <= 20) {
      var positionvalue = this.skeletalmuscleboxWidth / 10
      var y = (this.graphvalues[3] - 10) * positionvalue
      positionvalue = this.skeletalmuscleboxWidth + y
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'background', `#35015B`)
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[3] > 20 && this.graphvalues[3] <= 30) {
      var positionvalue = this.skeletalmuscleboxWidth / 10
      var y = (this.graphvalues[3] - 20) * positionvalue
      var previousskeletalmuscleboxWidth = this.skeletalmuscleboxWidth * 2
      positionvalue = previousskeletalmuscleboxWidth + y
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'background', `#00B900`)
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[3] > 30 && this.graphvalues[3] <= 40) {
      var positionvalue = this.skeletalmuscleboxWidth / 10
      var y = (this.graphvalues[3] - 30) * positionvalue
      var previousskeletalmuscleboxWidth = this.skeletalmuscleboxWidth * 3
      positionvalue = previousskeletalmuscleboxWidth + y
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'background', `#00B900`)
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[3] > 40 && this.graphvalues[3] <= 50) {
      var positionvalue = this.skeletalmuscleboxWidth / 10
      var y = (this.graphvalues[3] - 40) * positionvalue
      var previousskeletalmuscleboxWidth = this.skeletalmuscleboxWidth * 4
      positionvalue = previousskeletalmuscleboxWidth + y
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'background', `#E5A000`)
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'left', `${positionvalue}px`)
    } else if (this.graphvalues[3] > 50 && this.graphvalues[3] <= 60) {
      var positionvalue = this.skeletalmuscleboxWidth / 10
      var y = (this.graphvalues[3] - 50) * positionvalue
      var previousskeletalmuscleboxWidth = this.skeletalmuscleboxWidth * 5
      positionvalue = previousskeletalmuscleboxWidth + y
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'background', `#D10000`)
      this.renderer.setStyle(this.skeletalmusclecircle.nativeElement, 'left', `${positionvalue}px`)
    }

  }

  totalbodywatercirclePosition() {
    if (this.graphvalues[4] > 40 && this.graphvalues[4] <= 50) {
      var totalbodywatercircleposvalue = this.totalbodywaterboxWidth / 10
      var y = (this.graphvalues[4] - 50) * totalbodywatercircleposvalue
      totalbodywatercircleposvalue = this.totalbodywaterboxWidth + y
      this.renderer.setStyle(this.totalbodywatercircle.nativeElement, 'background', `#35015B`)
      this.renderer.setStyle(this.totalbodywatercircle.nativeElement, 'left', `${totalbodywatercircleposvalue}px`)
    } else if (this.graphvalues[4] > 50 && this.graphvalues[4] <= 60) {
      var totalbodywatercircleposvalue = this.totalbodywaterboxWidth / 10
      var y = (this.graphvalues[4] - 50) * totalbodywatercircleposvalue
      totalbodywatercircleposvalue = this.totalbodywaterboxWidth + y
      this.renderer.setStyle(this.totalbodywatercircle.nativeElement, 'background', `#00B900`)
      this.renderer.setStyle(this.totalbodywatercircle.nativeElement, 'left', `${totalbodywatercircleposvalue}px`)
    } else if (this.graphvalues[4] > 60 && this.graphvalues[4] <= 70) {
      var totalbodywatercircleposvalue = this.totalbodywaterboxWidth / 10
      var y = (this.graphvalues[4] - 60) * totalbodywatercircleposvalue
      var previoustotalbodywaterboxWidth = this.totalbodywaterboxWidth * 2
      totalbodywatercircleposvalue = previoustotalbodywaterboxWidth + y
      this.renderer.setStyle(this.totalbodywatercircle.nativeElement, 'background', `#D10000`)
      this.renderer.setStyle(this.totalbodywatercircle.nativeElement, 'left', `${totalbodywatercircleposvalue}px`)
    }
  }

  waisttohipcirclePosition() {
    if (this.graphvalues[5] > 0.5 && this.graphvalues[5] <= 0.9) {
      var waisttohipcircleposvalue = this.waisttohipboxWidth / 0.4
      var y = (this.graphvalues[5] - 0.5) * waisttohipcircleposvalue
      waisttohipcircleposvalue = this.waisttohipboxWidth + y
      this.renderer.setStyle(this.waisttohipcircle.nativeElement, 'background', `#35015B`)
      this.renderer.setStyle(this.waisttohipcircle.nativeElement, 'left', `${waisttohipcircleposvalue}px`)
    } else if (this.graphvalues[5] > 0.9 && this.graphvalues[5] <= 1.3) {
      var waisttohipcircleposvalue = this.waisttohipboxWidth / 0.4
      var y = (this.graphvalues[5] - 0.9) * waisttohipcircleposvalue
      waisttohipcircleposvalue = this.waisttohipboxWidth + y
      this.renderer.setStyle(this.waisttohipcircle.nativeElement, 'background', `#00B900`)
      this.renderer.setStyle(this.waisttohipcircle.nativeElement, 'left', `${waisttohipcircleposvalue}px`)

    } else if (this.graphvalues[5] > 1.3 && this.graphvalues[5] <= 1.5) {
      var waisttohipcircleposvalue = this.waisttohipboxWidth / 0.2
      var y = (this.graphvalues[5] - 1.3) * waisttohipcircleposvalue
      var previouswaisttohipboxWidth = this.waisttohipboxWidth * 2
      waisttohipcircleposvalue = previouswaisttohipboxWidth + y
      this.renderer.setStyle(this.waisttohipcircle.nativeElement, 'background', `#D10000`)
      this.renderer.setStyle(this.waisttohipcircle.nativeElement, 'left', `${waisttohipcircleposvalue}px`)
    }
  }
  onbmimove() {
    this.bmicir = true
    this.fatcir = false
    this.viscir = false
    this.skmicir = false
    this.tbwcir = false
    this.whrcir = false
  }
  onfatmove() {
    this.bmicir = false
    this.fatcir = true
    this.viscir = false
    this.skmicir = false
    this.tbwcir = false
    this.whrcir = false
  }
  onvismove() {
    this.bmicir = false
    this.fatcir = false
    this.viscir = true
    this.skmicir = false
    this.tbwcir = false
    this.whrcir = false
  }
  onskmmove() {
    this.bmicir = false
    this.fatcir = false
    this.viscir = false
    this.skmicir = true
    this.tbwcir = false
    this.whrcir = false
  }
  ontbwmove() {
    this.bmicir = false
    this.fatcir = false
    this.viscir = false
    this.skmicir = false
    this.tbwcir = true
    this.whrcir = false
  }
  onwhrmove() {
    this.bmicir = false
    this.fatcir = false
    this.viscir = false
    this.skmicir = false
    this.tbwcir = false
    this.whrcir = true
  }

}
