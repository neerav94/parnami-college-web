import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss', '../../css/universal.css', '../../css/transition.css', '../../css/fonts.css', '../../css/clear.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var observer1 = new IntersectionObserver(function (entries) {
      
      if (entries[0].isIntersecting === true) {
        var element = document.querySelector("#auLaptopFirstContent");
        element.className += ' animate-reveal animate-first';
      }
    }, {
      threshold: [0.2]
    });

    var observer2 = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        var element = document.querySelector("#auLaptopSecondContent");
        element.className += ' animate-reveal animate-second';
      }
    }, {
      threshold: [0.2]
    });

    var observer3 = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        var element = document.querySelector("#auLaptopThirdContent");
        element.className += ' animate-reveal animate-third';
      }
    }, {
      threshold: [0.2]
    });

    var observer4 = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        var element = document.querySelector("#auLaptopFourthContent");
        element.className += ' animate-reveal animate-fourth';
      }
    }, {
      threshold: [0.2]
    });

    var observer5 = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        var element = document.querySelector("#auMobileFirstContent");
        element.className += ' animate-reveal animate-first';
        $("#auMobileFirstContent").classList.remove("temp-class")
      } else {
        $("#auMobileFirstContent").classList.add("temp-class")
      }
    }, {
      threshold: [0.2]
    });

    var observer6 = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        var element = document.querySelector("#auMobileSecondContent");
        element.className += ' animate-reveal animate-second';
        $("#auMobileSecondContent").classList.remove("temp-class")
      } else {
        $("#auMobileSecondContent").classList.add("temp-class")
      }
    }, {
      threshold: [0.2]
    });

    var observer7 = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        var element = document.querySelector("#auMobileThirdContent");
        element.className += ' animate-reveal animate-third';
        $("#auMobileThirdContent").classList.remove("temp-class")
      } else {
        $("#auMobileThirdContent").classList.add("temp-class")
      }
    }, {
      threshold: [0.2]
    });

    var observer8 = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        var element = document.querySelector("#auMobileFourthContent");
        element.className += ' animate-reveal animate-fourth';
        $("#auMobileFourthContent").classList.remove("temp-class")
      } else {
        $("#auMobileFourthContent").classList.add("temp-class")
      } 
    }, {
      threshold: [0.2]
    });

    observer1.observe(document.querySelector("#auLaptopFirstContent"));
    observer2.observe(document.querySelector("#auLaptopSecondContent"));
    observer3.observe(document.querySelector("#auLaptopThirdContent"));
    observer4.observe(document.querySelector("#auLaptopFourthContent"));    

    observer5.observe(document.querySelector("#auMobileFirstContent"));
    observer6.observe(document.querySelector("#auMobileSecondContent"));
    observer7.observe(document.querySelector("#auMobileThirdContent"));
    observer8.observe(document.querySelector("#auMobileFourthContent"));
  }

}
