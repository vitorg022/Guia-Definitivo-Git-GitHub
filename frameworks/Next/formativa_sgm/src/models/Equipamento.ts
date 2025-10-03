import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEquipamento extends Document {
  _id: string; // Necessário para o View
  nome: string;
  tipo: string;
  status: string; // Exemplo de status: "ativo", "inativo", "em manutenção"
  dataAquisicao: Date;
  descricao?: string; // Descrição do equipamento, opcional
}

// Criação do Schema
const EquipamentoSchema: Schema<IEquipamento> = new Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  status: { type: String, required: true, enum: ["ativo", "inativo", "em manutenção"] },
  dataAquisicao: { type: Date, required: true },
  descricao: { type: String }
});

// to e from
const Equipamento: Model<IEquipamento> = mongoose.models.Equipamento || mongoose.model<IEquipamento>("Equipamento", EquipamentoSchema);

export default Equipamento;
