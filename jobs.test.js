const { agendarJobs, ordenarJobsPorData, verificacaoDoTempoMaximo, horasParaMilissegundos } = require('./jobs'); // Importe as funções que deseja testar

const jobs = [
    { 
        "ID": 1,
        "Descrição": "Importação de arquivos de fundos", 
        "Data Máxima de conclusão": '2021-02-04 12:00:00', 
        "Tempo estimado": '8 horas'
    },
    { 
        "ID": 2,
        "Descrição": 'Importação de dados da Base Legada', 
        "Data Máxima de conclusão": '2021-02-04 12:00:00', 
        "Tempo estimado": '4 horas'
    },
    { 
        "ID": 3,
        "Descrição": 'Importação de dados', 
        "Data Máxima de conclusão": '2021-02-02 12:00:00', 
        "Tempo estimado": '6 horas'
    },
    { 
        "ID": 4,
        "Descrição": 'Desenvolver historia 745', 
        "Data Máxima de conclusão": '2021-02-02 12:00:00', 
        "Tempo estimado": '2 horas'
    },
    { 
        "ID": 5,
        "Descrição": 'Gerar QRCode', 
        "Data Máxima de conclusão": '2020-02-15 12:00:00', 
        "Tempo estimado": '6 horas'
    },
    {
        "ID": 6,
        "Descrição": 'Importação de dados de integração', 
        "Data Máxima de conclusão": '2020-02-15 12:00:00', 
        "Tempo estimado": '8 horas'
    },
];

describe('Testes para agendarJobs', () => {
  test('Deve agendar os jobs corretamente', () => {
    
    const resultado = agendarJobs(jobs);
    expect(resultado).toEqual(
        jobsAgendados = [
            [
               {
                  "ID":5,
                  "Descrição":"Gerar QRCode",
                  "Data Máxima de conclusão":"2020-02-15 12:00:00",
                  "Tempo estimado":"6 horas"
               }
            ],
            [
               {
                  "ID":6,
                  "Descrição":"Importação de dados de integração",
                  "Data Máxima de conclusão":"2020-02-15 12:00:00",
                  "Tempo estimado":"8 horas"
               }
            ],
            [
               {
                  "ID":3,
                  "Descrição":"Importação de dados",
                  "Data Máxima de conclusão":"2021-02-02 12:00:00",
                  "Tempo estimado":"6 horas"
               },
               {
                  "ID":4,
                  "Descrição":"Desenvolver historia 745",
                  "Data Máxima de conclusão":"2021-02-02 12:00:00",
                  "Tempo estimado":"2 horas"
               }
            ],
            [
               {
                  "ID":1,
                  "Descrição":"Importação de arquivos de fundos",
                  "Data Máxima de conclusão":"2021-02-04 12:00:00",
                  "Tempo estimado":"8 horas"
               }
            ],
            [
               {
                  "ID":2,
                  "Descrição":"Importação de dados da Base Legada",
                  "Data Máxima de conclusão":"2021-02-04 12:00:00",
                  "Tempo estimado":"4 horas"
               }
            ]
         ]
    );
  });
});

describe('Testes para ordenarJobsPorData', () => {
    test('Deve ordenar os jobs por data', () => {
      
      const resultado = ordenarJobsPorData(jobs);
  
      // Realize as asserções de acordo com o resultado esperado
      expect(resultado).toEqual(
        jobsOrdenados = [
            {
              ID: 5,
              'Descrição': 'Gerar QRCode',
              'Data Máxima de conclusão': '2020-02-15 12:00:00',
              'Tempo estimado': '6 horas'
            },
            {
              ID: 6,
              'Descrição': 'Importação de dados de integração',
              'Data Máxima de conclusão': '2020-02-15 12:00:00',
              'Tempo estimado': '8 horas'
            },
            {
              ID: 3,
              'Descrição': 'Importação de dados',
              'Data Máxima de conclusão': '2021-02-02 12:00:00',
              'Tempo estimado': '6 horas'
            },
            {
              ID: 4,
              'Descrição': 'Desenvolver historia 745',
              'Data Máxima de conclusão': '2021-02-02 12:00:00',
              'Tempo estimado': '2 horas'
            },
            {
              ID: 1,
              'Descrição': 'Importação de arquivos de fundos',
              'Data Máxima de conclusão': '2021-02-04 12:00:00',
              'Tempo estimado': '8 horas'
            },
            {
              ID: 2,
              'Descrição': 'Importação de dados da Base Legada',
              'Data Máxima de conclusão': '2021-02-04 12:00:00',
              'Tempo estimado': '4 horas'
            }
          ] 
      );
    });
  
    // Adicione mais testes conforme necessário
  });