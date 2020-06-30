import { MatSort } from '@angular/material/sort';
import { DialogService } from './../dialog.service';
import { EmailService } from '../email.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from './../email.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-email-read',
  templateUrl: './email-read.component.html',
  styleUrls: ['./email-read.component.css']
})

/**
 * Classe responsável por carrgar e controlar todos os dados que estão na base 
 * e renderizar na tela para o usuário, assim como manter os controles de ações
 * para as devidar alterações do usuário
 */

export class EmailReadComponent implements OnInit {

  emails : Email[];
  displayedColumns = ['id','email','acao'];
  dataSource = new MatTableDataSource<Email>(this.emails);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  msg : string;

  constructor(private emailService : EmailService, private router : Router, 
    private dialogService : DialogService, private route : ActivatedRoute) { }

  /**
   * Inicializa os dados na table, preenchendo os dados no array Emails
   */
  ngOnInit(): void {
      this.emailService.read().subscribe(emails => {
      this.emails = emails;
    });
  }

  /**
   * Função responsável por coletar confirmação de exclusão e solicitar ao service a exclusão do dado 
   * passando por parametro o objeto Email
   * @param email 
   */
  removerEmail(email : Email) : void{ 
    this.msg = "Deseja realmente remover o email:\n"+email.email+"?";
    this.dialogService.openConfirmDialog(this.msg)
    .afterClosed().subscribe(res  => {
      if (res == true){
        this.emailService.delete(email.id).subscribe(() => {
          this.router.navigate(['/']);
          this.ngOnInit();
        });
      }
    });
  }



  
}
