import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.page.html',
  styleUrls: ['./person-detail.page.scss'],
})
export class PersonDetailPage implements OnInit {

  person = {};
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.carrega(this.personService.id);
  }

  carrega(id) {
    this.personService.getPersonById(id).subscribe(obj => {
      this.person = obj;
    })
  }

}
