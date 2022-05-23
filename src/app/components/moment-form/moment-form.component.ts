import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit {
@Input() btnText!: string

/* declarei o moment form, que foi passado como grupo la no html */
/* a ! significa, que os valores ainda vão ser preenchidos */
momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    /* para fazer as validações do formulario, primeiro temos que inicializar ele */
    this.momentForm = new FormGroup({
      /* campos do formulario */
      id: new FormControl(''),
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      data: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      image: new FormControl(''),
    })
  }

  get name(){
    return this.momentForm.get('name')!;
  }

  get email(){
    return this.momentForm.get('email')!;
  }

  get data(){
    return this.momentForm.get('data')!;
  }

  get title(){
    /* a ! significa, que os valores ainda vão ser preenchidos */
    return this.momentForm.get('title')!;
  }

  get description(){
    return this.momentForm.get('description')!;
  }



  submit(){
    if(this.momentForm.invalid){
      alert("Erro ao enviar o formulario");
      return;
    }

    alert("Enviado");
  }

}
