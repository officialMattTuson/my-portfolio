import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.initializeObserver();
  }

  handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }

  initializeObserver() {

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-100px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    const sectionsToObserve: NodeListOf<Element> = this.elementRef.nativeElement.querySelectorAll('.hidden');
    sectionsToObserve.forEach(section => observer.observe(section));
  }
  
}