interface Propriedades {
    chave: String;
    valor: number|String;
}

interface DetalhesAluguel{
    chave: String;
    valor: number
}




export interface Imovel {
    id: number;
    url_foto: String;
    nome: String;
    cidade: String;
    estado: String;
    tipo: String;
    lat: number;
    lng: number;
    favorito: boolean;
    adicionais: Propriedades[];
    aluguel: DetalhesAluguel[];
}