import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowMore]',
  standalone: true
})
export class ShowMoreDirective implements AfterViewInit {

  innerText = '';

  constructor(private el: ElementRef<HTMLParagraphElement>) { }

  ngAfterViewInit() {
    this.innerText = this.el.nativeElement.innerText;

    if (this.innerText.length > 50) {

      this.showMoreInit();

    }
  }

  showMore(): void {
    this.el.nativeElement.innerText = this.innerText;

    const anchor = document.createElement("a");

    anchor.textContent = "Show Less!";
    anchor.style.color = "blue";
    anchor.style.textDecoration = "underline";

    anchor.addEventListener('click', () => this.showMoreInit());
    this.el.nativeElement.appendChild(anchor);
  }

  showMoreInit(): void {
    this.el.nativeElement.innerText = this.innerText.slice(0, 50) + '...';

    const anchor = document.createElement("a");

      anchor.textContent = "Show More!";
      anchor.style.color = "blue";
      anchor.style.textDecoration = "underline";

      anchor.addEventListener('click', () => this.showMore())

      this.el.nativeElement.appendChild(anchor);
  }

}
