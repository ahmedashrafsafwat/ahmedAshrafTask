import { HttpClient } from '@angular/common/http';

export abstract class CitiesData {

    abstract getCities();

    abstract editCities();

    abstract deleteCities();

    abstract addCities();
  }
  