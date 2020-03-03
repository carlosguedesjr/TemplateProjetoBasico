import { Produto } from './../produto-dashboard/models/produto';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html'
})
export class ProdutoDetalheComponent { 
    @Input()
    produto: Produto;

    @Output()
    status: EventEmitter<any> = new EventEmitter();

    emitirEvento(){
        this.status.emit(this.produto);
    }
}