import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'custom-dropdown';
  isExpanded: boolean = false;
  selectedOption: string = 'Select an option';
  optionArr: { id: number; option: string }[] = [
    { id: 0, option: 'Option 1' },
    { id: 1, option: 'Option 2' },
    { id: 2, option: 'Option 3' },
    { id: 3, option: 'Option 4' },
    { id: 4, option: 'Option 5' },
    { id: 5, option: 'Option 6' },
    { id: 6, option: 'Option 7' },
    { id: 7, option: 'Option 8' },
  ];

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const dropdown = document.querySelector('.dropdown');
    const select = dropdown?.querySelector('.select');
    const menu = dropdown?.querySelector('.menu');
    const selected: any = dropdown?.querySelector('.selected');

    selected?.addEventListener('click', () => {
      this.isExpanded = !this.isExpanded;
      select?.classList.toggle('select-clicked');
      menu?.classList.toggle('menu-open');
    });

    select?.addEventListener('click', () => {
      this.isExpanded = !this.isExpanded;
      select.classList.toggle('select-clicked');
      menu?.classList.toggle('menu-open');
    });

    
  }

  onSelection(idx: number): void {
    const dropdown = document.querySelector('.dropdown');
    const select = dropdown?.querySelector('.select');
    const menu = dropdown?.querySelector('.menu');
    this.isExpanded = !this.isExpanded;
    this.selectedOption = this.optionArr[idx].option;
    select?.classList.remove('select-clicked');
    menu?.classList.remove('menu-open');
  }
}
