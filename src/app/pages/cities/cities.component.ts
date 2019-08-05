import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { CitiesData } from '../../@core/data/cities';
import { CitiesService } from '../../@core/mock/cities.service'
import {  Observable ,Subscriber } from 'rxjs';

@Component({
  selector: 'ngx-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  private citiesData: any[];

  settings = {
    add: {
      confirmCreate: true,
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      country: {
        title: 'Country',
        type: 'string',
      },
      name: {
        title: 'City Name',
        type: 'string',
      },
      lat: {
        title: 'Latitude',
        type: 'number',
      },
      lng: {
        title: 'Longitude',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  
  // Get data from the service and then from the in-memory-data service
  constructor(private service: CitiesService) {
    this.service.getCities().subscribe(
      (data: any[]) => { 
        console.log(data)
        // save the data locally
        this.citiesData = data;
        // save into current memory data service
        // this.mermoryService.sendCities(this.citiesData);
        // create the memory data service database
        // this.mermoryService.createDb();
        // load the data into ng2-smart-table
        this.source.load(this.citiesData);

      })
  }

  
  ngOnInit() {
  }
  
  // Delete the data from the service
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event)
       this.service.deleteCities(event)
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  editConfirm(event): void {  
    console.log(event)
    this.service.editCities(event)
    event.confirm.resolve();
  }

  createConfirm(event): void {
    console.log(event)
    this.service.addCities(event.data)
    event.confirm.resolve();
  }
}
