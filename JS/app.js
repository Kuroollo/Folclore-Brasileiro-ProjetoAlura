function pesquisar() {
  // Obtém o elemento HTML onde os resultados serão exibidos
  let resultado = document.getElementById("resultado");
  // Obtém o valor do campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
      // Exibe uma mensagem solicitando que o usuário digite algo
      resultado.innerHTML = `
          <div>
              <h2>Pesquise Algo :)</h2>
          </div>
      `;
      return;
  }

  // Normaliza a pesquisa para letras minúsculas
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";

  // Itera sobre cada item nos dados
  for (let dado of dados) {
      // Normaliza as propriedades do item para letras minúsculas
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      // Verifica se o termo de pesquisa existe no título, descrição ou tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // Adiciona o resultado formatado à string de resultados
          resultados += `
              <div>
                  <h2>${dado.titulo}</h2>
                  <p>${dado.descricao}</p>
                  <a target="_blank" href=${dado.link}>Mais informações</a>
              </div>
          `;
      }
  }

  // Verifica se foram encontrados resultados
  if (!resultados) {
      // Exibe uma mensagem indicando que nada foi encontrado
      resultados = `
          <div>
              <h2>Nada foi encontrado :/</h2>
          </div>
      `;
  }

  // Atualiza o HTML do elemento "resultado" com os resultados da pesquisa
  resultado.innerHTML = resultados;
}