import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-responsive-layout',
  templateUrl: './responsive-layout.component.html',
  styleUrls: ['./responsive-layout.component.scss']
})
export class ResponsiveLayoutComponent implements OnInit {

  mobileQuery: MediaQueryList;


  private _mobileQueryListener: () => void;
  isSmallScreen = false;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    // this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    // console.log(this.mobileQuery);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    if (this.mobileQuery.matches) {
      this.isSmallScreen = this.mobileQuery.matches;
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
