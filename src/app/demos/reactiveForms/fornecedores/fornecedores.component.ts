import { Component, OnInit } from "@angular/core";
import { faCoffee, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: "app-fornecedores",
  templateUrl: "./fornecedores.component.html",
  styles: []
})
export class FornecedoresComponent implements OnInit {
  faEdit=faEdit;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
  editar() {
    this.router.navigate(["../fornecedor"], { relativeTo: this.activatedRoute });
  }
}
