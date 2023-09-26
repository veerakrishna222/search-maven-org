/*
 Copyright 2018-present Sonatype, Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AdvancedSearchExampleDialogComponent } from "./advanced-search-example-dialog.component";

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html'
})
export class AdvancedSearchComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openAdvancedExamplesDialog(): void {
    this.dialog.open(AdvancedSearchExampleDialogComponent, {
      width: '450px'
    });
  }
}
