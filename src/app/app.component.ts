import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AgGridAngular } from "ag-grid-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("agGrid", { static: false }) agGrid: AgGridAngular;

  name = "Angular Google";

  /*columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];*/
  columnDefs = [
    {
      headerName: "Author",
      field: "commit.author.name",
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    {
      headerName: "Email",
      field: "commit.author.email",
      sortable: true,
      filter: true
    },
    { headerName: "login", field: "author.login", sortable: true, filter: true }
  ];

  rowData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get(
      "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
    );
    //https://api.myjson.com/bins/15psn9
    //https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => node.auther.login + " " + node.commit.auther.name)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
