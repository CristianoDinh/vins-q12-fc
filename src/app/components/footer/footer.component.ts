import { Component, HostListener } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // Biến để kiểm soát trạng thái hiển thị của nút
  isButtonVisible: boolean = false;

  // Lắng nghe sự kiện cuộn
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    // Hiển thị nút khi cuộn xuống hơn 200px
    this.isButtonVisible = scrollPosition > 200;
  }

  // Cuộn lên đầu trang khi nhấn nút
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Hiệu ứng cuộn mượt
    });
  }
}
