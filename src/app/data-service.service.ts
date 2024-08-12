import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Tarefa } from './Tarefa';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private tarefasUrl = 'api/tarefas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<Tarefa[]> {
    return this.http
      .get<Tarefa[]>(this.tarefasUrl)
      .pipe(catchError(this.handleError<Tarefa[]>('getTarefas', [])));
  }

  getTarefa(id: number): Observable<Tarefa> {
    const url = `${this.tarefasUrl}/${id}`;
    return this.http
      .get<Tarefa>(url)
      .pipe(catchError(this.handleError<Tarefa>(`getTarefa id=${id}`)));
  }

  addTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http
      .post<Tarefa>(this.tarefasUrl, tarefa, this.httpOptions)
      .pipe(catchError(this.handleError<Tarefa>('addTarefa')));
  }

  deleteTarefa(id: number): Observable<Tarefa> {
    const url = `${this.tarefasUrl}/${id}`;

    return this.http
      .delete<Tarefa>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Tarefa>('deleteTarefa')));
  }

  updateTarefa(tarefa: Tarefa): Observable<any> {
    return this.http
      .put(this.tarefasUrl, tarefa, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateTarefa')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
