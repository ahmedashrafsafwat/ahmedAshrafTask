import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CitiesService  {
  /**
   * This service is responsible for all CRUD requests
   */

    // Simulated backend and endpoint API
    private citiesUrl = 'http://mybackend.com/api/';
    private endpoint = "cities"

    constructor(private http: HttpClient) {}
    
    // Get all cities
    getCities() {
        return this.http.get(`${this.citiesUrl+ this.endpoint}`);
    }

    // Edit a certain city
    editCities(editedCity: Object) {
      console.log(editedCity)
        return this.http.put(`${this.citiesUrl+ this.endpoint}/${editedCity.data.id}`, editedCity.newData)
    }

    // Delete a certain city
    deleteCities(city : Object) {
        return this.http.delete(`${this.citiesUrl+ this.endpoint}/${city.data.id}` )
    }

    // Add a new City
    addCities (newCity : Object) {
        return this.http.post(`${this.citiesUrl+ this.endpoint}` , newCity);
    }
}
