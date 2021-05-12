
import { Component, OnInit,ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'opedetail-car',
  templateUrl: './opedetail.component.html',
  styleUrls: ['./opedetail.component.css']
})
export class OpedetailComponent implements OnInit {

  displayedColumns: string[] = ['check','vin', 'marca', 'modelo', 'tipo', 'damage', 'editar', ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Mostrando';
  }

  ngOnInit() {
    
  }
}


export interface PeriodicElement {  
  check:string;
  vin:string;
  marca:string;
  modelo:string;
  tipo:string;
  damage:string;
  editar:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {check: 'false', vin:'WKCOHES405W491230', marca: 'Seat', modelo: 'León',  tipo:'Inspección de entrada',  damage:'warning', editar: 'search', },
  {check: 'false',vin:'JIOEEES405W491230',  marca: 'Dacia', modelo: 'Duster', tipo:'Inspección de entrada', damage:'warning', editar: 'search', },
  {check: 'true', vin:'TYREFHES405W49123', marca: 'Renault', modelo: 'C3', tipo:'Inspección de salida', damage:'warning', editar: 'search', },
  {check: 'true', vin:'WPORITU405W491230',  marca: 'Audi', modelo: 'A3', tipo:'Inspección de entrada',  damage:'warning', editar: 'search', },
  {check: 'false', vin:'PORIUYS405W491230',  marca: 'BMW', modelo: 'X5',  tipo:'Inspección de salida', damage:'warning', editar: 'search', },
  {check: 'false', vin:'ERFRERT405W491230', marca: 'Toyota', modelo: 'Auris', tipo:'Inspección de entrada', damage:'warning', editar: 'search', },
];



export class DatepickerValueExample {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}

export class TooltipOverviewExample {}

export class ButtonTypesExample {}

export class TabGroupBasicExample {}
