import { Component, OnInit } from "@angular/core";
import { faCoffee, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-alunos",
  templateUrl: "./alunos.component.html",
  styleUrls: ["./alunos.component.css"]
})
export class AlunosComponent implements OnInit {
  faCoffee = faCoffee;
  faEdit = faEdit;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  editarAluno() {
    this.router.navigate(["../aluno/"], { relativeTo: this.activatedRoute });
  }
}
