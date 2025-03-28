import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
  }

  @HostListener('click')
  nextFunc(){
    var elm = this.el.nativeElement.parentElement.parentElement.parentElement.children[1];
    var item = elm.getElementsByClassName('lineup-item');

    // elm.append(item[0]);

    // Lấy 3 phần tử đầu tiên
    const elementsToMove = Array.from(item).slice(0, 4);

    // Di chuyển 3 phần tử đầu tiên xuống cuối
    elementsToMove.forEach(element => {
      elm.append(element); // Gắn từng phần tử vào cuối container
    });

  }

}
