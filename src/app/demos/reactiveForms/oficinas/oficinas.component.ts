import { Component, OnInit } from '@angular/core';
import { OficinaService } from 'src/app/service/Oficina.service';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styles: []
})
export class OficinasComponent implements OnInit {
  oficinas: any;
  faEdit = faEdit;

  constructor(private oficinaService: OficinaService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.oficinas = this.oficinaService.getOficinas();
  }

  editar(oficina) {
    this.router.navigate(["../oficina"], { relativeTo: this.activatedRoute });
  }

}
