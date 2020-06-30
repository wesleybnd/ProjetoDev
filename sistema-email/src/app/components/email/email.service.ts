import { Injectable } from '@angular/core';
import { Email } from './email.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Esta classe tem a responsabilidade de realizar a persistência dda base de dados
 * realizando os metodos GET, POST, PUT e DELETE, utilizando o módulo HTTPClientModule
 * 
 */
export class EmailService {

  baseUrl = "http://localhost:3000/emails";
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  /**
   * Metodo responsável por emitir uma snackBar para notificação das ações do usuário
   * @param msg 
   */
  showMessage(msg: string):void{
    this.snackBar.open(msg,'',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    });
  }
  
  /**
   * Método responsável por criar uma nova instância na base de dados 
   * Com a utilização do método post, pode ser realizada esta inclusão passando como parametro
   * a url padrão e o dado do objeto instanciado.
   * @param email 
   */
  create(email: Email) : Observable<Email>{
    return this.http.post<Email>(this.baseUrl,email);
  }


  /**
   * Método responsável por obter os dados oriundos da base de dados.
   * Ele realiza uma varredura de todos os componentes que são oriundos da url passada por parametro.
   * Este processo faz-se uso do metodo GET para obtenção dos dados
   */
  read() : Observable<Email[]>{
    return this.http.get<Email[]>(this.baseUrl); 
  }


  /**
   * Método responsável por coletar uma instância do banco de dados cujo dado é oriundo do ID passado por parametro.
   * Neste caso será utilizado a url identada com o ID para coletar o dado especifico.
   * @param id 
   */
  readById(id: string) : Observable<Email>{
    id = id.replace(/'/g, '');
    const url= `${this.baseUrl}/${id}`;
    return this.http.get<Email>(url); 
  }

  /**
   * Método atualiza a instância na base de dados, cujo parametro é o iD do usuário.
   * Deste modo, é utilizado o método PUT para tal alteração, passando a url completa por parametro.
   * @param email 
   */
  update(email :  Email) : Observable<Email>{
    const url= `${this.baseUrl}/${email.id}`;
    return this.http.put<Email>(url ,email);
  }

  /**
   * Método remove a instância na base de dados baseado no ID do item da lista.
   * @param id 
   */
  delete(id: number) : Observable<Email>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Email>(url);
  }
}
