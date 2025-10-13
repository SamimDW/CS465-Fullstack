import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common'; // <-- add formatDate
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrls: ['./edit-trip.css'], // <-- plural
})
export class EditTrip implements OnInit {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripData
  ) {}

  ngOnInit(): void {
    const tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],         // expects "YYYY-MM-DD"
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (value: any) => {
        // Handle array vs object
        const trip: Trip = Array.isArray(value) ? value[0] : value;

        if (!trip) {
          this.message = 'No Trip Retrieved!';
          return;
        }

        // Convert ISO/Date -> "yyyy-MM-dd" for <input type="date">
        const startForDateInput = trip.start
          ? formatDate(trip.start, 'yyyy-MM-dd', 'en-US')
          : '';

        this.trip = trip;
        this.editForm.patchValue({
          ...trip,
          start: startForDateInput
        });

        this.message = `Trip: ${tripCode} retrieved`;
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      },
    });
  }

  public onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) return;

    // If your backend expects Date, you can convert here (optional):
    const payload = { ...this.editForm.value, start: new Date(this.editForm.value.start).toISOString() };

    this.tripDataService.updateTrip(this.editForm.value).subscribe({
      next: () => this.router.navigate(['']),
      error: (error: any) => console.log('Error: ' + error),
    });
  }

  get f() { return this.editForm.controls; }
}
