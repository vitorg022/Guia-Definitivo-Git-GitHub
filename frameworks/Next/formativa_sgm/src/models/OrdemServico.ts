import mongoose, { Document, Model, Schema } from "mongoose";
import { IEquipamento } from "./equipamento"; // Importando o modelo de Equipamento, caso seja necessário vincular

export interface IOrdemServico extends Document {
  titulo: ReactNode;
  descricao: ReactNode;
  tipoManutencao: ReactNode;
  dataSolictada: any;
  dataFinalizacao: any;
  _id: string;
  equipamento: IEquipamento["_id"]; // Referência ao equipamento
  descricaoProblema: string;
  status: string; // Exemplos de status: "aberta", "em andamento", "concluída"
  dataAbertura: Date;
  dataConclusao?: Date;
  tecnicoResponsavel: string; // Nome do técnico responsável
  comentarios?: string; // Comentários adicionais
}

// Criação do Schema
const OrdemServicoSchema: Schema<IOrdemServico> = new Schema({
  equipamento: { type: mongoose.Schema.Types.ObjectId, ref: "Equipamento", required: true },
  descricaoProblema: { type: String, required: true },
  status: { type: String, required: true, enum: ["aberta", "em andamento", "concluída"] },
  dataAbertura: { type: Date, required: true },
  dataConclusao: { type: Date },
  tecnicoResponsavel: { type: String, required: true },
  comentarios: { type: String }
});

// to e from
const OrdemServico: Model<IOrdemServico> = mongoose.models.OrdemServico || mongoose.model<IOrdemServico>("OrdemServico", OrdemServicoSchema);

export default OrdemServico;
