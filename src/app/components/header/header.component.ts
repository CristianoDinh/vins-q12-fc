import {Component} from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef} from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('logo') logoElement!: ElementRef<HTMLImageElement>;

  // Khi component đã hiển thị, áp dụng hiệu ứng
  ngAfterViewInit(): void {
    const logo = this.logoElement.nativeElement;
    logo.style.transform = 'translateY(0)';
    logo.style.opacity = '1';

    const headerEl  = document.getElementById('head-scroll');
    window.addEventListener('scroll', () => {
      if(headerEl) {
        if(window.scrollY > 10) {
          headerEl.classList.remove('absolute')
          headerEl.classList.add('sticky');
          headerEl.classList.remove('bg-transparent');
          headerEl.classList.add('bg-blue-900');
        } else {
          headerEl.classList.remove('sticky')
          headerEl.classList.add('absolute');
          headerEl.classList.remove('bg-blue-900');
          headerEl.classList.add('bg-transparent');
        }
      }
    });
  }



}
