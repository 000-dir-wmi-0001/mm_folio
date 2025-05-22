import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {
  skills = [
    // Frontend
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",

    // Backend
    "Node.js",
    "Django",
    "Python",
    "Java",

    // Database
    "MongoDB",
    "SQL",
    "Firebase",

    // Tools & Platforms
    "Git",
    "Linux",

    // Mobile
    "Android"
  ];


  ngAfterViewInit(): void {
    gsap.utils.toArray<HTMLElement>('.zoom-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'power2.out',
      });
    });
  }
}
