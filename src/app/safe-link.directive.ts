
import { Directive, ElementRef, Input, inject } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
  @Input({alias: 'appSafeLink'}) queryParam = 'myapp'
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)
  constructor() {
    console.log(' new DDIIRREECCTTIIVVEE');
  }

  onConfirmLeavePage(event: MouseEvent)
  {
    const wantsToLeave = confirm('Are you sure you want to leave this page?');

    if (wantsToLeave)
    {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam;
      return;
    }

    event.preventDefault();
  }
}
