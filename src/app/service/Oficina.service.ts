import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OficinaService {

    public generateDynamicFG = new EventEmitter();

    //constructor(private http: HttpClient) { }
    constructor() { }

    public getOficinas() {
        // return this.http.get(`${TICKET_API_INGRESSOS}/IngressosEventos/GetInternEvent?url=${url}`, this.jwtService.getOptions())
        //     .toPromise()
        //     .then((res: Response) => res)
        //     .catch((error: Response) => error);
        return [{
            'ativo': true,
            'id':'1',
            'razao': 'Razao 111',
            'telefone': '(19)1231-3123',
            'cidade': 'Mogi das Cruzes'
        }, {
            'ativo': true,
            'id':'2',
            'razao': 'Razao 222',
            'telefone': '(19)1231-3123',
            'cidade': 'Poa'
        }, {
            'ativo': false,
            'id':'3',
            'razao': 'Razao 333',
            'telefone': '(19)1231-3123',
            'cidade': 'Mogi das Cruzes'
        }, {
            'ativo': true,
            'id':'4',
            'razao': 'Razao 444',
            'telefone': '(19)1231-3123',
            'cidade': 'Suzano'
        },]
    }
}
