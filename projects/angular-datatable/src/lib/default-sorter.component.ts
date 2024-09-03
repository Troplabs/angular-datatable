import { Component, Input, OnInit } from '@angular/core';
import { AngularDatatableDirective, SortEvent } from './angular-datatable.directive';

@Component({
  selector: 'mf-default-sorter',
  template: `
  <a style="cursor: pointer" (click)="sort()" class="text-nowrap">
      <ng-content></ng-content>
      <span *ngIf="isSortedByMeAsc" class="glyphicon glyphicon-triangle-top fa fa-sort-up" aria-hidden="true"></span>
      <span *ngIf="isSortedByMeDesc" class="glyphicon glyphicon-triangle-bottom fa fa-sort-down" aria-hidden="true"></span>
  </a>`
})
export class DefaultSorterComponent implements OnInit {
  @Input("by") sortBy: string;

  isSortedByMeAsc: boolean = false;
  isSortedByMeDesc: boolean = false;

  public constructor(private mfTable: AngularDatatableDirective) {
  }

  public ngOnInit(): void {
    this.mfTable.onSortChange.subscribe((event: SortEvent) => {
      this.isSortedByMeAsc = (event.sortBy == this.sortBy && event.sortOrder == "asc");
      this.isSortedByMeDesc = (event.sortBy == this.sortBy && event.sortOrder == "desc");
    });
  }

  sort() {
    if (this.isSortedByMeAsc) {
      this.mfTable.setSort(this.sortBy, "desc");
    } else {
      this.mfTable.setSort(this.sortBy, "asc");
    }
  }
}
