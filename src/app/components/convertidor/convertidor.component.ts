import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {

  public cantidad = 0;
  public tengo = 'USD';
  public quiero = 'EUR';
  public total =0;

  public monedas:string[] =['USD','EUR','LIBRA','GUARANI'];

  convertir(){

    switch(this.tengo){

      case 'USD':
      
      if(this.quiero == 'USD'){
        this.total = this.cantidad;
      }
            
      if(this.quiero == 'EUR'){
        this.total = this.cantidad * 0.84;
      }

      if(this.quiero == 'LIBRA'){
        this.total = this.cantidad * 0.75;
      }

      if(this.quiero == 'GUARANI'){
        this.total = this.cantidad * 6749,41;
      }
      
      
      break;

      case 'EUR':

        if(this.quiero == 'USD'){
          this.total = this.cantidad * 1.20;
        }
              
        if(this.quiero == 'EUR'){
          this.total = this.cantidad;
        }
  
        if(this.quiero == 'LIBRA'){
          this.total = this.cantidad * 0.9;
        }

        if(this.quiero == 'GUARANI'){
          this.total = this.cantidad * 8255,34;
        }
        

      break;

      case 'LIBRA':

      
        if(this.quiero == 'USD'){
          this.total = this.cantidad * 1.33;
        }
              
        if(this.quiero == 'EUR'){
          this.total = this.cantidad * 1.11;
        }
  
        if(this.quiero == 'LIBRA'){
          this.total = this.cantidad;
        }

        if(this.quiero == 'GUARANI'){
          this.total = this.cantidad * 9.6;
        }

      break;

      case 'GUARANI':

      
        if(this.quiero == 'USD'){
          this.total = this.cantidad * 0.00015;
        }
              
        if(this.quiero == 'EUR'){
          this.total = this.cantidad * 0.00012;
        }
  
        if(this.quiero == 'LIBRA'){
          this.total = this.cantidad * 0.00015;
        }

        if(this.quiero == 'GUARANI'){
          this.total = this.cantidad
        }

      break;

    }

  }


}
