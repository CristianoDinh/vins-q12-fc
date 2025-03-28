import {Component} from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  constructor(private router: Router) { }

  @ViewChild('logo') logoElement!: ElementRef<HTMLImageElement>;

  // Khi component đã hiển thị, áp dụng hiệu ứng
  ngAfterViewInit(): void {
    const logo = this.logoElement.nativeElement;
    logo.style.transform = 'translateY(0)';
    logo.style.opacity = '1';

    const headerEl = document.getElementById('head-scroll');

    // Lấy đường dẫn hiện tại
    const isSubPage = window.location.pathname !== '/' && window.location.pathname !== '/en';
    if (isSubPage) {
      headerEl?.classList.remove('absolute', 'bg-transparent');
      headerEl?.classList.add('sticky', 'bg-blue-900');
    } else {
      // Hiệu ứng header scroll trong home page
      window.addEventListener('scroll', () => {
        if (headerEl) {
          if (window.scrollY > 10) {
            headerEl.classList.remove('absolute', 'bg-transparent');
            headerEl.classList.add('sticky', 'bg-blue-900');
          } else {
            headerEl.classList.remove('sticky', 'bg-blue-900');
            headerEl.classList.add('absolute', 'bg-transparent');
          }
        }
      });
    }

  }
}
