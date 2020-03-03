import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-pessoa",
  templateUrl: "./pessoa.component.html",
  styleUrls: ["./pessoa.component.css"]
})
export class PessoaComponent implements OnInit {
  cadastroResponsavelForm: FormGroup;
  profissoes: any;
  tipoResp: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.profissoes = [
      {
        id: 1,
        descricao: "Ti/Tecnologia"
      },
      {
        id: 2,
        descricao: "Outros"
      },
      {
        id: 3,
        descricao: "Empresário"
      },
      {
        id: 4,
        descricao: "Marketing/Vendas"
      },
      {
        id: 5,
        descricao: "Banco/Financiera"
      }
    ];

    this.tipoResp = [
      {
        tipo: "F",
        descricao: "Financeiro"
      },
      {
        tipo: "A",
        descricao: "Academico"
      }
    ];

    console.log(this.tipoResp);

    this.cadastroResponsavelForm = this.fb.group({
      nome: ["", Validators.required],
      nascimento: [""],
      rg: ["", Validators.required],
      cpf: ["", Validators.required],
      email: ["", Validators.required],
      tipoResponsavel: [""],
      profissao: [""],
      telefoneEmergencia: [""]
    });
  }

  listarPessoa() {
    if (
      this.cadastroResponsavelForm.dirty &&
      this.cadastroResponsavelForm.valid
    ) {
      console.log("opaa..:");
    }
  }

  retornar() {
    this.router.navigate(["../aluno/"], { relativeTo: this.activatedRoute });
  }
}
