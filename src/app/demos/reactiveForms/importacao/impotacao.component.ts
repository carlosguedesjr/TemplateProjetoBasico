import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../cadastro/models/usuario';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-importacao',
    templateUrl: './importacao.component.html'
})
export class ImportacaoComponent implements OnInit {
    jsonData: any;
    importacaoForm: FormGroup;
    usuario: Usuario;
    formResult: string = '';

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.importacaoForm = this.fb.group({
            nome: ['', Validators.required],
            cpf: [''],
            email: ['', [Validators.required
                , Validators.email]],
            senha: [''],
            senhaConfirmacao: ['']
        })
    }

    importar() {

        this.usuario = Object.assign({}, this.usuario, this.importacaoForm.value);
        this.formResult = JSON.stringify(this.importacaoForm.value);
        debugger;

    }
    fileChange(ev) {
        let workBook = null;
       // let jsonData = null;
        const reader = new FileReader();
        const file = ev.target.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = XLSX.read(data, { type: 'binary' });
          this.jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = XLSX.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          const dataString = JSON.stringify(this.jsonData);
          document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
          //this.setDownload(dataString);
        }
        reader.readAsBinaryString(file);   
    }
}
