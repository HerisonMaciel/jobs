Dado um array de "jobs" para execução, no qual cada posição possui um objeto com os seguintes atributos:
ID: Identificação do Job;
Descrição: Descrição do Job;
Data Máxima de conclusão do Job: Data máxima em que o Job deve ser concluído;
Tempo estimado: Tempo estimado de execução do Job.
Criar algoritmo que retorne um conjunto de arrays com as seguintes características:
Cada array do conjunto representa uma lista de Jobs a serem executados em sequência;
Cada array deve conter jobs que sejam executados em, no máximo, 8h;
Deve ser respeitada a data máxima de conclusão do Job;
Todos os Jobs devem ser executados dentro da janela de execução (data início e fim).
Orientações:
Disponibilizar o código final no github e compartilhar o link;
Realizar small commits (evitar um commit único com toda a solução);
Pode ser usada a linguagem JavaScript ou TypeScript;
Desenvolver testes automatizados para a solução.


Ex: array de jobs
[
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
]

