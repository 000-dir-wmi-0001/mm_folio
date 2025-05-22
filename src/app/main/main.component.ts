import { Component, OnInit, } from '@angular/core';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";

gsap.registerPlugin(SplitText);

@Component({
  selector: 'app-main',
  imports: [ProjectsComponent, SkillsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    this.setup();
    this.animate();


    gsap.from(".image", {
      scrollTrigger: {
        trigger: ".image",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      scale: 0,         // 👈 Starts smaller
      duration: 1.5,
      ease: "power2.out"  // 👈 Smooth easing
    });



  }





  split: any;
  animation: any;



  animate() {
    this.animation && this.animation.revert();
    this.animation = gsap.from(this.split.lines, {
      rotationY: -100,
      transformOrigin: "50% 50% -160px",
      opacity: 0,
      duration: 1,
      ease: "power3",
      stagger: 0.25
    })
  }

  setup() {
    this.split && this.split.revert();
    this.animation && this.animation.revert();
    this.split = SplitText.create(".text", { type: "chars,words,lines" });
  }


}
