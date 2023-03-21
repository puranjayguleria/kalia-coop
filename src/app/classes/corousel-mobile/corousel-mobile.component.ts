import { Component, OnInit, HostListener, Input } from '@angular/core';
import { transition, animate, style, trigger } from '@angular/animations';
import { interval } from 'rxjs';

@Component({
  selector: 'app-corousel-mobile',
  templateUrl: './corousel-mobile.component.html',
  styleUrls: ['./corousel-mobile.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class CorouselMobileComponent implements OnInit {

  @Input() slides;
  currentSlide = 0;
  public sub:any
  isMobileResolution:boolean
  constructor() { 
    this.sub = interval(8000)
    .subscribe((val) => { this.onNextClick() });
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
     
  }

  ngOnInit() {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
