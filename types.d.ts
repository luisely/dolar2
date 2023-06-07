type Dolar = {
  "USDBRL": {
    "code": string,
    "codein": string,
    "name": string,
    "high": string,
    "low": string,
    "varBid": string,
    "pctChange": string,
    "bid": string,
    "ask": string,
    "timestamp": string,
    "create_date": string
  }
}

type Ptax = {
  "@odata.context": string,
  "value": [
    {
      "cotacaoCompra": number,
      "cotacaoVenda": number,
      "dataHoraCotacao": string
    },
    {
      "cotacaoCompra": number,
      "cotacaoVenda": number,
      "dataHoraCotacao": string
    }
  ]
}
