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
  }

}
