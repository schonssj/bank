import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService
{
    obterNegociacoes(handler: ResponseHandler): Promise<Negociacao[]>
    {
        return fetch('http://localhost:8080/data')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => {throw new Error(err)});
    }
}

export interface ResponseHandler {
    (res: Response): Response
}