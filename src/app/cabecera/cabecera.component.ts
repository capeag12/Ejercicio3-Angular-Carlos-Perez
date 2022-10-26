import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  tipoImagen:number=1
  enlaceImagen:string="../../assets/img1.png";
  @ViewChild('imagen') imagen!:ElementRef ;  

  aparece:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarImagenEstiloAngular(){
    if (this.tipoImagen==1) {
      this.tipoImagen=2;
      this.enlaceImagen = "../../assets/img2.png"
    } else if(this.tipoImagen==2){
      this.tipoImagen=1;
      this.enlaceImagen="../../assets/img1.png";
    }

  }

  cambiarImagenEstiloJS(){
    console.log(this.imagen.nativeElement);
    
    if (this.tipoImagen==1) {
      this.tipoImagen=2;
      this.imagen.nativeElement.src = "../../assets/img2.png"
    } else if(this.tipoImagen==2){
      this.tipoImagen=1;
      this.imagen.nativeElement.src="../../assets/img1.png";
    }
     
  }

  cambiarAparecer(){
    if (this.aparece==true) {
      this.aparece=false
    } else{
      this.aparece=true;
    }
  }

}
