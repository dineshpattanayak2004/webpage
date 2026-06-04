import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../services/api';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  companyName = 'ABC Solutions';

    users: any[] = [];

  private apiService = inject(Api);

  ngOnInit() {
    this.apiService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  services = [
    {
      title: 'Web Development',
      description: 'Build dynamic and scalable web applications using modern technologies.'
    },
    {
      title: 'Cloud Services',
      description: 'Deploy, manage, and scale applications securely in the cloud.'
    },
    {
      title: 'Data Analytics',
      description: 'Convert business data into actionable insights for decision-making.'
    }
  ];

}