module.exports = (req, res) => {
  res.status(200).json({
    contratos: [
      {
        cpf: "123.456.789-01",
        nome: "João da Silva",
        numero_contrato: "CDT-2025-0001",
        data_inicio_contrato: "2025-01-15",
        valor_financiado: 12000.0,
        valor_parcela: 2500.00,
        quantidade_parcelas: 24,
        data_vencimento_proxima_parcela: "2025-10-15",
        data_pagamento_ultima_parcela: "2025-09-15",
        status: "Ativo",
        ticket: 123
      },
      {
        cpf: "987.654.321-00",
        nome: "Maria Oliveira",
        numero_contrato: "CDT-2025-0002",
        data_inicio_contrato: "2025-08-01",
        valor_financiado: 5000.0,
        valor_parcela: 1500.00,
        quantidade_parcelas: 12,
        data_vencimento_proxima_parcela: "2025-09-10",
        data_pagamento_ultima_parcela: null,
        status: "Atrasado",
        ticket: 456
      },
      {
        cpf: "321.654.987-22",
        nome: "Carlos Pereira",
        numero_contrato: "CDT-2025-0003",
        data_inicio_contrato: "2024-10-01",
        valor_financiado: 8000.0,
        valor_parcela: 2000.00,
        quantidade_parcelas: 18,
        data_vencimento_proxima_parcela: "2025-10-01",
        data_pagamento_ultima_parcela: "2025-09-01",
        status: "Última Parcela",
        ticket: 789

      }
    ]
  });
};
