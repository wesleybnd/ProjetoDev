import { EmailService } from './../email.service';
import { Email } from './../email.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-update',
  templateUrl: './email-update.component.html',
  styleUrls: ['./email-update.component.css']
})
export class EmailUpdateComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);
  emails: Email= {
    email : ''
  }
  constructor(private emailService : EmailService, private router : Router, private route : ActivatedRoute ) {}

  /**
   * Metodo obtem o id passando pelo routerlink, desse modo é inserido no objeto email o dado
   * colhido.
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.emailService.readById(id).subscribe(email => {
      this.emails = email 
    });
  }


  /**
   * Este método verifica pelo regExp se o parametro esta correto conforme padrão de emails
   * Após verificação, o dado e enviado ao serviço de email para responsabilidade de atualzação na base
   * de dados
   */
  updateEmail(): void{
    var expressao = new RegExp("[a-z0-9._%+-]{7,20}@[a-z0-9.-]+\.[a-z]{2,}$");
    if(expressao.test(this.emails.email)){
        this.emailService.update(this.emails).subscribe(() => {
        this.emailService.showMessage('Email atualizado com sucesso!');
        this.router.navigate(['/']);
      })
    }
  }
  
  /**
   * Este método verifica se o dado inserido esta no padrão de email, caso esta incorreto
   * será retornado uma mensagem para verificação
   */
  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'Email inválido, digite seu email corretamente.'; 
    }else{
      return '';
    }
  }


  /**
   * Retorna a pagina inicial utilizando o parametro route.navigate
   */
  cancel(): void{
    this.router.navigate(['/']);

  }

}
