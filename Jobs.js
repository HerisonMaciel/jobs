function agendarJobs(jobs){
	
	const jobsAgendados = ordenarJobsPorData(jobs);

	const conjuntosDeJobs = [];
    let conjuntoAtual = [];
    let tempoAtual = 0;

	for (i=0; i<jobs.length; i++) {
        
		const tempoEstimado = horasParaMilissegundos(jobs[i]["Tempo estimado"]);
		const dataMaxima = new Date(jobs[i]["Data Máxima de conclusão"]).getTime();
		let dataMaximaProx;

		if(i==jobs.length-1){
		  dataMaximaProx = dataMaxima;
		}else{
		  dataMaximaProx = new Date(jobs[i]["Data Máxima de conclusão"]).getTime();
		}
  
		if (verificacaoDoTempoMaximo(tempoAtual,tempoEstimado,dataMaxima,dataMaximaProx)) {
		  conjuntoAtual.push(jobs[i]);
		  tempoAtual += tempoEstimado;
		} else {
		  conjuntosDeJobs.push(conjuntoAtual);
		  conjuntoAtual = [jobs[i]];
		  tempoAtual = tempoEstimado;
		}
	  }
	
	  if (conjuntoAtual.length > 0) {
		conjuntosDeJobs.push(conjuntoAtual);
	  }
	
	  return conjuntosDeJobs;

}

function ordenarJobsPorData(jobs) {
	// Use a função de ordenação "sort" para classificar os Jobs por data máxima de conclusão
	jobs.sort((a, b) => {
	  const dataA = new Date(a["Data Máxima de conclusão"]);
	  const dataB = new Date(b["Data Máxima de conclusão"]);
  
	  // Compare as datas máximas de conclusão
	  return dataA - dataB;
	});
  
	return jobs;
  }

function verificacaoDoTempoMaximo(tempoAtual,tempoEstimado,dataMaxima,dataMaximaProx){
	if(tempoAtual + tempoEstimado <= 8 * 60 * 60 * 1000 && dataMaxima >= dataMaximaProx){
		return true;
	}
	return false;
}

function horasParaMilissegundos(tempo) {
    const partes = tempo.split(" ");
    const horas = parseFloat(partes[0]);
    return horas * 60 * 60 * 1000;
}


// array de jobs
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

const jobsOrdenados = ordenarJobsPorData(jobs);
console.log(jobsOrdenados);

module.exports = {agendarJobs, ordenarJobsPorData, verificacaoDoTempoMaximo};