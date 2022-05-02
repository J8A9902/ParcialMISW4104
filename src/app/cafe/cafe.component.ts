import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {
  cafes: Array<Cafe> = [];
  contBlend: number = 0;
  contOrigen: number = 0;

  constructor(private cafeService: CafeService) { }

  getCafes(){
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
      console.log(cafes)
      for (let c of this.cafes){
        console.log(c.nombre);
        console.log(c.tipo);
        if (c.tipo = "Café de Origen") {
          this.contBlend += 1;
        }else{
          this.contOrigen += 1;
        }
      }
      })
  }
  ngOnInit() {
    this.getCafes();
  }

}
