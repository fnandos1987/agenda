import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;
  constructor(private personService: PersonService, private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.personService
    .getPersons()    
    .subscribe(data => {
      this.data = data;
    });
  }

  showPersonDetail(id) {    
    this.personService.id = id;
    this.router.navigate(['/person-detail']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
