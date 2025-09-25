// /api/producao-correspondente.js  (CommonJS, GET-only)
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

  const data = [
    {"empresa":"VAZ DE LIMA, OLIVEIRA & CIA LTDA","quantidade_propostas":28,"valor":447666.0},
    {"empresa":"CARNEIRO SERVIÇOS ESCRITURAIS LTDA","quantidade_propostas":20,"valor":441881.0},
    {"empresa":"PORT PROMOTORA E CONSULTORIA DE VENDAS LTDA","quantidade_propostas":26,"valor":346293.0},
    {"empresa":"AR TELECONTATO LTDA (AMF)","quantidade_propostas":18,"valor":301715.0},
    {"empresa":"GFT PROMOTORA DE EVENTOS LTDA","quantidade_propostas":24,"valor":275863.0},
    {"empresa":"ÚNICA PROMOTORA LTDA","quantidade_propostas":20,"valor":233718.0},
    {"empresa":"G. M. C. NETO CORRESPONDENTE LTDA","quantidade_propostas":17,"valor":219434.0},
    {"empresa":"TOK REAL PROMOTORA N C","quantidade_propostas":16,"valor":197101.0},
    {"empresa":"N. DE SOUSA LIMA LTDA","quantidade_propostas":10,"valor":186058.0},
    {"empresa":"NOVA PROMOTORA LTDA","quantidade_propostas":14,"valor":169303.0},
    {"empresa":"RF PROMOTORA DE VENDAS E INTERMEDIACAO DE NEGOCIOS LTDA","quantidade_propostas":6,"valor":105066.0},
    {"empresa":"FLEX SERVIÇOS ADMINISTRATIVOS","quantidade_propostas":6,"valor":93593.0},
    {"empresa":"WN SERVIÇOS ADMINISTRATIVOS SOCIEDADE UNIPESSOAL LTDA","quantidade_propostas":8,"valor":87385.0},
    {"empresa":"PSM NEGOCIOS ADMINISTRATIVOS","quantidade_propostas":6,"valor":87376.0},
    {"empresa":"IC DA SILVA LTDA","quantidade_propostas":6,"valor":80902.0}
  ];

  return res.status(200).json({ data });
};
