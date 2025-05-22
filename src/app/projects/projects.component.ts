import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.utils.toArray<HTMLElement>('.zoomCard').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: 'power2.out',
      });
    });
  }
}


// import { CommonModule } from '@angular/common';
// import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
// import { gsap } from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// @Component({
//   selector: 'app-projects',
//   imports: [CommonModule],
//   templateUrl: './projects.component.html',
//   styleUrl: './projects.component.css'
// })
// export class ProjectsComponent implements AfterViewInit {
//   @ViewChild('zoomBox', { static: true }) zoomBox!: ElementRef<HTMLDivElement>;

//   ngAfterViewInit(): void {
//     gsap.from(this.zoomBox.nativeElement, {
//       scrollTrigger: {
//         trigger: this.zoomBox.nativeElement,
//         start: 'top 80%',
//       },
//       scale: 0,
//       opacity: 0,
//       duration: 1.2,
//       ease: 'power2.out',
//     });
//   }

// }




