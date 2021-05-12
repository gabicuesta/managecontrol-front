

import { Component, OnInit,ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  displayedColumns: string[] = ['check','tarea', 'matricula', 'marca', 'modelo', 'campa', 'fecha','coste','editar', ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumnsdos: string[] = ['check','tarea', 'matricula', 'marca', 'modelo',  'fecha','coste','editar', ];
  dataSourcedos = new MatTableDataSource<PeriodicElementdos>(ELEMENT_DATADOS);

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Mostrando';

    this.dataSourcedos.paginator = this.paginator;
    this.dataSourcedos.sort = this.sort;
  }

  ngOnInit() {
    
  }
}


export interface PeriodicElement {  
  check:string;
  tarea:string;
  matricula:string;
  marca:string;
  modelo:string;
  campa:string;
  fecha:string;
  coste:string;
  editar:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {check: 'false', tarea:'Limpieza', matricula: '1245 FRR', marca: 'Seat', modelo: 'León',  campa:'Pozuelo, 32', fecha:'11-01-2021', coste:'20', editar: 'search', },
  {check: 'false',tarea:'ITV', matricula: '9771 GTT', marca: 'Dacia', modelo: 'Duster', campa:'Pozuelo, 32', fecha:'20-01-2021', coste:'100', editar: 'search', },
  {check: 'true', tarea:'Rotulación',matricula: '2254 JUL', marca: 'Renault', modelo: 'C3', campa:'Zona Franca,111', fecha:'21-01-2021', coste:'40', editar: 'search', },
  {check: 'true', tarea:'Instalación baca', matricula: '8857 FTT', marca: 'Audi', modelo: 'A3', campa:'Pozuelo, 32', fecha:'15801-2021', coste:'60', editar: 'search', },
  {check: 'false', tarea:'ITV', matricula: '1122 HTU', marca: 'BMW', modelo: 'X5',  campa:'Pozuelo, 32', fecha:'19-01-2021', coste:'120', editar: 'search', },
  {check: 'false', tarea:'Limpieza', matricula: '5678 BVF', marca: 'Toyota', modelo: 'Auris', campa:'Zona Franca,111', fecha:'22-01-2021', coste:'80', editar: 'search', },
];

export interface PeriodicElementdos {  
  check:string;
  tarea:string;
  matricula:string;
  marca:string;
  modelo:string;
  
  fecha:string;
  coste:string;
  editar:string;
}

const ELEMENT_DATADOS: PeriodicElementdos[] = [
  {check: 'false', tarea:'Limpieza', matricula: '1245 FRR', marca: 'Seat', modelo: 'León',   fecha:'11-01-2021', coste:'20', editar: 'search', },
  {check: 'false',tarea:'ITV', matricula: '9771 GTT', marca: 'Dacia', modelo: 'Duster',  fecha:'20-01-2021', coste:'100', editar: 'search', },
  {check: 'true', tarea:'Rotulación',matricula: '2254 JUL', marca: 'Renault', modelo: 'C3', fecha:'21-01-2021', coste:'40', editar: 'search', },
  {check: 'true', tarea:'Instalación baca', matricula: '8857 FTT', marca: 'Audi', modelo: 'A3',  fecha:'15801-2021', coste:'60', editar: 'search', },
  {check: 'false', tarea:'ITV', matricula: '1122 HTU', marca: 'BMW', modelo: 'X5',   fecha:'19-01-2021', coste:'120', editar: 'search', },
  {check: 'false', tarea:'Limpieza', matricula: '5678 BVF', marca: 'Toyota', modelo: 'Auris', fecha:'22-01-2021', coste:'80', editar: 'search', },
];



export class DatepickerValueExample {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}

export class TooltipOverviewExample {}

export class ButtonTypesExample {}

export class TabGroupBasicExample {}

