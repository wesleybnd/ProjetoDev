import { EmailService } from './../email.service';
import { Email } from './../email.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, PatternValidator } from '@angular/forms';


@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);

  emails: Email = {
    email: ''
  }
  constructor(private emailService : EmailService, private router : Router) { }

  ngOnInit(): void {}

  /**
   * Antes de enviar para o serviço que executa a tarefa de criação, o metodo analiza se o dado está 
   * conforme padrão de email seguindo a regra do regExp.
   */
  createEmail(){
    var expressao = new RegExp("[a-z0-9._%+-]{7,20}@[a-z0-9.-]+\.[a-z]{2,}$");
    if(expressao.test(this.emails.email)){
      this.emailService.create(this.emails).subscribe(() => {
        this.emailService.showMessage('Email cadastrado!');
        this.router.navigate(['/']);
      });
    }  
  }

  /**
   * Analisa se o dado inserido foi digitado corretamente seguindo os padrões de email
   */
  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'Email inválido, digite seu email corretamente.'; 
    }else{
      return '';
    }
  }

  /**
   * Retorna a padgina inicial
   */
  cancel():void{
    this.router.navigate(['/']);
  }

}
