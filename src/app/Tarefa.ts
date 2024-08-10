export interface Tarefa {
  id: number;
  title: string;
  prioridade: string;
  projeto: string;
  status?: string;
  responsavel: string;
  deadline: string;
  detalhes?: string;
}
