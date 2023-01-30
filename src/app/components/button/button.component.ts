import { Component, Input, ElementRef } from '@angular/core';
enum Size {
  small = "small",
  medium = "medium",
  large = "large"
}
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor(private elRef:ElementRef){}

  @Input() buttonText: string = "hello"
  @Input() size: string = Size.small
  
  ngAfterContentInit(){
    console.log()
    if (this.size == Size.small){
    }else if(this.size == Size.medium){
      this.elRef.nativeElement.children[0].style.setProperty("padding","10px")
      this.elRef.nativeElement.children[0].style.setProperty("padding","20px")
      this.elRef.nativeElement.children[0].style.setProperty("font-size","30px")
    }else if(this.size == Size.large){
      this.elRef.nativeElement.children[0].style.setProperty("padding","20px")
      this.elRef.nativeElement.children[0].style.setProperty("padding","40px")
      this.elRef.nativeElement.children[0].style.setProperty("font-size","50px")
    }
  }
}

