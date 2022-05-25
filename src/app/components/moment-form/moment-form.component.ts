import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/interfaces/Moments';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>();
   /* quando o dado chega de fora, o declaramos como input */
   @Input() momentData: Moment | null = null;
   @Input() btnText!: string;

  /* declarei o moment form, que foi passado como grupo la no html */
  /* a ! significa, que os valores ainda vão ser preenchidos */
  momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    /* para fazer as validações do formulario, primeiro temos que inicializar ele */
    this.momentForm = new FormGroup({
      /* campos do formulario */
      id: new FormControl(this.momentData ? this.momentData.id : ''),
      name: new FormControl(this.momentData ? this.momentData.name : '', [Validators.required]),
      email: new FormControl(this.momentData ? this.momentData.email : '', [Validators.required]),
      data: new FormControl(this.momentData ? this.momentData.data : '', [Validators.required]),
      title: new FormControl(this.momentData ? this.momentData.title : '', [Validators.required]),
      description: new FormControl(this.momentData ? this.momentData.description : '', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    })
  }

  get name() {
    /* a ! significa, que os valores ainda vão ser preenchidos */
    return this.momentForm.get('name')!;
  }

  get email() {
    return this.momentForm.get('email')!;
  }

  get data() {
    return this.momentForm.get('data')!;
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  fileChangeEvent(event: any){
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file });
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }

    console.log(this.momentForm.value);
    this.onSubmit.emit(this.momentForm.value);
  }
}
