import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular Google';

  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true },
    { headerName: 'Model', field: 'model', sortable: true },
    { headerName: 'Price', field: 'price', sortable: true }];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
}
