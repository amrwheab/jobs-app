import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { filterJops, getJops } from '../store/jops/jops.actions';
import { selectJopsState } from '../store/jops/jops.select';
import { Jop } from '../interfaces/Jop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ShowJopComponent } from './show-jop/show-jop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  page = 1;
  error = false;
  jops: Jop[] = [];
  loading = true;
  lastPage = 0;
  searchForm!: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      title: [''],
      location: ['']
    });
    this.route.queryParams.subscribe(({page}) => {
      this.page = page || 1;
      this.store.dispatch(getJops({page: this.page}));
    })
    this.store.select(selectJopsState).subscribe(data => {
      if (data.error) {
        this.error = true;
      }

      if (data.jops) {
        this.jops = data.filteredJops;
      }

      this.loading = data.loading;
      this.lastPage = data.lastPage;
    })
  }

  trackById(_: number, job: Jop): string {
    return job.id;
  }

  changePage(page: PageEvent): void {
    this.router.navigate([], {queryParams: { page: page.pageIndex + 1 }})
  }

  search(): void {
    this.store.dispatch(filterJops(this.searchForm.value));
  }

  openDialog(jop: Jop): void {
    const dialogRef = this.dialog.open(ShowJopComponent, {
      width: '750px',
      data: jop
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
