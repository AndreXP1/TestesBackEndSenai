const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

const dataJson = path.join(__dirname, "..", "data.json");

app.use(express.json());

async function readData() {
  const rawData = await fs.promises.readFile(dataJson, "utf-8");
  return JSON.parse(rawData);
}

async function writeData(data) {
  await fs.promises.writeFile(dataJson, JSON.stringify(data, null, 2), "utf-8");
}

app.get("/INFO", async (req, res) => {
  try {
    const data = await readData();
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ erro: "Nao foi possivel carregar as informacoes." });
  }
});

app.get("/INFO/:id", async (req, res) => {
  try {
    const data = await readData();
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ erro: "Id invalido." });
    }

    const item = data.find((registro) => registro.id === id);

    if (!item) {
      return res.status(404).json({ erro: "Id nao encontrado." });
    }

    return res.json(item);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ erro: "Nao foi possivel carregar o id escolhido." });
  }
});

app.post("/INFO", async (req, res) => {
  try {
    const data = await readData();
    const {
      codigo,
      titulo,
      categoria,
      subCategoria,
      descricao,
      descricaoCurta,
      palavrasChave,
      exemplos,
      relacionados,
    } = req.body;

    if (!titulo || !categoria || !descricao) {
      return res
        .status(400)
        .json({ erro: "Campos obrigatorios: titulo, categoria e descricao." });
    }

    const nextId = data.length
      ? Math.max(...data.map((item) => item.id || 0)) + 1
      : 1;

    const novoRegistro = {
      id: nextId,
      codigo: Number(codigo) || null,
      titulo,
      categoria,
      subCategoria: subCategoria || null,
      descricao,
      descricaoCurta: descricaoCurta || "",
      palavrasChave: Array.isArray(palavrasChave) ? palavrasChave : [],
      exemplos: Array.isArray(exemplos) ? exemplos : [],
      relacionados: Array.isArray(relacionados) ? relacionados : [],
    };

    data.push(novoRegistro);
    await writeData(data);

    return res.status(201).json(novoRegistro);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Nao foi possivel criar o registro." });
  }
});

app.put("/INFO/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ erro: "Id invalido." });
    }

    const data = await readData();
    const index = data.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({ erro: "Id nao encontrado." });
    }

    const registroAtual = data[index];
    const atualizado = {
      ...registroAtual,
      ...req.body,
      id,
    };

    data[index] = atualizado;
    await writeData(data);

    return res.json(atualizado);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ erro: "Nao foi possivel atualizar o registro." });
  }
});

app.delete("/INFO/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ erro: "Id invalido." });
    }

    const data = await readData();
    const index = data.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({ erro: "Id nao encontrado." });
    }

    const removido = data[index];
    data.splice(index, 1);
    await writeData(data);

    return res.json({
      mensagem: "Registro removido com sucesso.",
      item: removido,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ erro: "Nao foi possivel remover o registro." });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
