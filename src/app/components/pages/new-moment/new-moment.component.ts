import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moments';
import { MomentService } from 'src/app/services/moment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss']
})
export class NewMomentComponent implements OnInit {
  btnText = "Salvar Momento";
  constructor(
    private momentService: MomentService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment){
    const formData = new FormData()

    formData.append('name', moment.name);
    formData.append('email', moment.email);
    formData.append('data', moment.data);
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if(moment.image){
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

  }
}
