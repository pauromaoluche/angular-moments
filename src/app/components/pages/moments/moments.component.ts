import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/interfaces/Moments';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.scss']
})
export class MomentsComponent implements OnInit {

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  /* mecanismo de busca */
  searchTerm: string = "";

  constructor(public router: Router, private momentService: MomentService) { }

  ngOnInit(): void {
    /* o getMoments pega a função do moment.service, e manda um subscribe pra executar a função, e armazena os resultados em items */
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item)=>{
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });
      this.allMoments = data;
      this.moments = data;
    });
  }

  search(e: Event):void{
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.moments = this.allMoments.filter(moment =>{
     return moment.title.toLocaleLowerCase().includes(value);
    })
  }

}
