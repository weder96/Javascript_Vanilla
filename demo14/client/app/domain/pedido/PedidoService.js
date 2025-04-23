class PedidoService {

    constructor() {

        this._http = new HttpService();
    }

    obtemPedidosDaSemana(urlBase) {
    
        return this._http
            .get(urlBase.concat('/atual'))
            .then(
                dados => 
                    dados.map(objeto => 
                        new Pedido(new Date(objeto.data), objeto.quantidade, objeto.valor))
                ,
                err => {

                    throw new Error('Não foi possível obter as Pedidos da semana');
                }
            );
    }

    obtemPedidosDaSemanaAnterior(urlBase) {
        
        return this._http
            .get(urlBase.concat('/anterior'))
            .then(
                dados => dados.map(objeto =>
                    new Pedido(new Date(objeto.data), objeto.quantidade, objeto.valor))
                ,
                err => {
                    
                    throw new Error('Não foi possível obter as Pedidos da semana anterior');
                }
            );
    }

    obtemPedidosDaSemanaRetrasada(urlBase) {
        
        return this._http
            .get(urlBase.concat('/retrasada'))
            .then(
                dados => dados.map(objeto =>
                    new Pedido(new Date(objeto.data), objeto.quantidade, objeto.valor))
                ,
                err => {
                    throw new Error('Não foi possível obter as Pedidos da semana retrasada');
                }
            );
    }  

    obtemPedidosDoPeriodo() {
        let urlBase ='http://localhost:4000';
        return Promise.all([
            this.obtemPedidosDaSemana(urlBase),
            this.obtemPedidosDaSemanaAnterior(urlBase),
            this.obtemPedidosDaSemanaRetrasada(urlBase)
        ])
        .then(periodo => periodo
            .reduce((novoArray, item) => novoArray.concat(item), [])
            .sort((a, b) => b.data.getTime() - a.data.getTime())
        )
        .catch(err => {

            console.log(err);
            throw new Error('Não foi possível obter as Pedidos do período')
        });
    }             
}