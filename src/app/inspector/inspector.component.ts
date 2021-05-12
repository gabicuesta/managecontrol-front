

import { Component, OnInit,ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements OnInit {

  displayedColumns: string[] = ['check','vin', 'ope', 'ini', 'dest', 'in', 'out','editar', ];
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
  ope:string;
  ini:string;
  dest:string;
  in:string;
  out:string;
  editar:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {check: 'false', vin:'WKCOHES405W491230', ope: 'ACA-BAR2020520',  ini: 'Acapulco', dest:'Barcelona', in:'11-01-2021', out:'20-01-2021', editar: 'search', },
  {check: 'false',vin:'JIOEEES405W491230', ope: 'VAL-BIL2020420',  ini: 'Valencia',dest:'Bilbao', in:'11-01-2021', out:'20-01-2021', editar: 'search', },
  {check: 'true', vin:'TYREFHES405W491230',ope: 'NEY-BAR2020120',  ini: 'Nueva York',dest:'Barcelona', in:'11-01-2021', out:'20-01-2021', editar: 'search', },
  {check: 'true', vin:'WPORITU405W491230', ope: 'BIL-LIS2020220',  ini: 'Bilbao',dest:'Lisboa', in:'11-01-2021', out:'20-01-2021', editar: 'search', },
  {check: 'false', vin:'PORIUYS405W491230', ope: 'ALC-CAD20201020', ini: 'Alicante', dest:'Cadiz', in:'11-01-2021', out:'20-01-2021', editar: 'search', },
  {check: 'false', vin:'ERFRERT405W491230', ope: 'AMS-MIL20201120', ini: 'Amsterdam', dest:'Milan', in:'11-01-2021', out:'20-01-2021', editar: 'search', },
];



export class DatepickerValueExample {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}

export class TooltipOverviewExample {}

export class ButtonTypesExample {}

export class TabGroupBasicExample {}
