import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Moment } from 'src/app/interfaces/Moments';
import { MomentService } from 'src/app/services/moment.service';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.scss']
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;

  btnText: string = 'Editar';

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    });
  }
  async editHandler(momentData: Moment) {
    const id = this.moment.id
    const formData = new FormData()
    formData.append('name', momentData.name);
    formData.append('email', momentData.email);
    formData.append('data', momentData.data);
    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (momentData.image) {
      formData.append('image', momentData.image)
    }
    await this.momentService.updateMoment(id!, formData).subscribe();
    this.alertService.success('Sucesso', `Momento '${momentData.title}' atualizado com sucesso!`);
    this.router.navigate(['/'])
  }
}
