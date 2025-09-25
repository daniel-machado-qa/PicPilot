// /api/producao-convenio.js  (CommonJS, GET-only)
module.exports = (req, res) => {
  // CORS + preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET, OPTIONS');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=30, stale-while-revalidate=60');

  const payload = {
    convenios: [
      {
        nome: "INSS",
        empresas: [
          {
            nome: "CARNEIRO SERVIÇOS ESCRITURAIS LTDA",
            produtos: [
              {
                produto: "Novo empréstimo",
                mes_ref_07_2025: 466533.25,
                mes_ref_08_2025: 472129.01,
                total_geral: 938662.26
              },
              {
                produto: "Portabilidade",
                mes_ref_07_2025: 2846996.77,
                mes_ref_08_2025: 4518417.88,
                total_geral: 7365414.65
              },
              {
                produto: "Refinanciamento",
                mes_ref_07_2025: 518631.26,
                mes_ref_08_2025: 643776.36,
                total_geral: 1162407.62
              }
            ],
            totals: undefined, // legado: manter campo "totais" original abaixo
            totais: {
              mes_ref_07_2025: 3832161.28,
              mes_ref_08_2025: 5634323.25,
              total_geral: 9466484.53
            }
          },
          {
            nome: "G. M. C. NETO CORRESPONDENTE LTDA",
            produtos: [
              {
                produto: "Novo empréstimo",
                mes_ref_07_2025: 1979746.80,
                mes_ref_08_2025: 2113332.43,
                total_geral: 4093079.23
              },
              {
                produto: "Portabilidade",
                mes_ref_07_2025: 1610042.78,
                mes_ref_08_2025: 1968038.60,
                total_geral: 3578081.38
              },
              {
                produto: "Refinanciamento",
                mes_ref_07_2025: 272178.25,
                mes_ref_08_2025: 288158.61,
                total_geral: 560336.86
              }
            ],
            totais: {
              mes_ref_07_2025: 3861967.83,
              mes_ref_08_2025: 4369529.64,
              total_geral: 8231497.47
            }
          }
        ],
        totais: {
          mes_ref_07_2025: 7694129.11,
          mes_ref_08_2025: 10003852.89,
          total_geral: 17697982.00
        }
      },
      {
        nome: "SIAPE",
        totais: {
          mes_ref_07_2025: 81300.06,
          mes_ref_08_2025: 259882.25,
          total_geral: 341182.31
        }
      }
    ]
  };

  return res.status(200).json(payload);
};
