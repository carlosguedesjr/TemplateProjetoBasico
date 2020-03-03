import { Component, OnInit } from "@angular/core";
import { faCoffee, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-responsaveis",
  templateUrl: "./responsaveis.component.html",
  styles: []
})
export class ResponsaveisComponent implements OnInit {
  faCoffee = faCoffee;
  faEdit = faEdit;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
  editarResponsavel() {
    this.router.navigate(["../pessoa/"], { relativeTo: this.activatedRoute });
  }
}
