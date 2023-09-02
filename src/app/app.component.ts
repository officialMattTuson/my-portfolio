import { Component, ElementRef } from '@angular/core';
import {
  projectOneBlurb,
  projectThreeBlurb,
  projectTwoBlurb,
} from './long-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  projectOneBlurb = projectOneBlurb;
  projectTwoBlurb = projectTwoBlurb;
  projectThreeBlurb = projectThreeBlurb;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.initializeObserver();
  }

  handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) =>
      entry.target.classList.toggle('in-view', entry.isIntersecting)
    );
  }

  initializeObserver() {
    const options: IntersectionObserverInit = {
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    const sectionsToObserve: NodeListOf<Element> =
      this.elementRef.nativeElement.querySelectorAll('.hidden');
    sectionsToObserve.forEach((section) => observer.observe(section));
  }
}
