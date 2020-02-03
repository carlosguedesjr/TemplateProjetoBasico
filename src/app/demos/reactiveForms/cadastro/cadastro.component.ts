import { Observable, fromEvent, merge } from 'rxjs';
import { GenericValidator, DisplayMessage, ValidationMessages } from './generic-form-validation';
import { Usuario } from './models/usuario';
import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';
import { utilsBr } from 'js-brasil';
import { NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit, AfterViewInit{

  @ViewChildren(FormControlName,{read: ElementRef}) formInputElements:ElementRef[];
  
  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  MASKS = utilsBr.MASKS;
  
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};
  
  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: 'O nome é requirido!',
        minlength: 'O nome precisa ter no mínimo 2 caracteres',
        maxlength: 'o nome pode ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o Cpf',
        cpf: 'Cpf em formato inválido'
      },
      email: {
        required: 'Informe o email',
        email: 'Email em formato inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        equalTo: 'As senhas não conferem'
      }
    };
    
    this.genericValidator = new GenericValidator(this.validationMessages);
  }
  
  ngOnInit() {
    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirm
    });
  }

    ngAfterViewInit(): void {
     let controlBlurs: Observable<any>[]= this.formInputElements
     .map((FormControl: ElementRef) => fromEvent(FormControl.nativeElement, 'blur'));
     
     merge(...controlBlurs).subscribe(() => {
       this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
     });
    }
    
  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
      debugger;
    }
  }
}