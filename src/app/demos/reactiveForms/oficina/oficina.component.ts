import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styles: []
})
export class OficinaComponent implements OnInit {
  oficinaForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.oficinaForm = this.fb.group({
      nome: [''],
      telefone: [''],
      cpf: [''],
      email: [''],
      endereco: [''],
      celular: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      uf: [''],
      cep: [''],
      ponto_referencia: [''],
      ativo: [''],
      observacao: ['']
    });
  }

  salvarOficina() {
    console.log('formulario: ', this.oficinaForm.value);
    

  }

}
