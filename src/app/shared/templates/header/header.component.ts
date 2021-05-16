import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    // const data = JSON.parse(sessionStorage.getItem('UserData') || '');
    // console.log(data);
  }

  logout() {
    // sessionStorage.removeItem('isUserLoggedin');
    // sessionStorage.removeItem('UserData');
    // sessionStorage.removeItem('userType');
    // this.router.navigate(['/auth/login']);
  }


}
