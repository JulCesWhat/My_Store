import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
    options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    @Input() form: FormGroup = new FormGroup({});

    constructor() { }

    ngOnInit(): void {
    }

}
