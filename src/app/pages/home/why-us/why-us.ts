import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit, signal } from '@angular/core';
import { NgxNumberTickerComponent } from '@omnedia/ngx-number-ticker';
import { createCounter } from '../../../utils/app.utils';

interface ValueProp {
  number: string;
  title: string;
  body: string;
  icon: string; // SVG path data
}

interface Stat {
  number: {
    value: number;
    prefix: string;
  };
  label: string;
  sub: string;
  animation: boolean;
}

@Component({
  selector: 'app-why-us',
  imports: [NgxNumberTickerComponent, CommonModule],
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss',
})
export class WhyUs implements AfterViewInit {
  @ViewChild('statsBar') statsBar!: ElementRef;
  hasAnimated = signal(false);
  valueProps: ValueProp[] = [
    {
      number: '01',
      title: 'Custom & Wholesale Orders',
      body: 'Whether you need 10 pieces or 10,000 — we accommodate bespoke requests, private label production, and wholesale partnerships with flexible minimum order quantities.',
      icon: 'M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-9 5H5m14 0h-5',
    },
    {
      number: '02',
      title: 'End-to-End Production',
      body: 'From concept sketches to finished garment — we manage design, sampling, grading, fabric sourcing, and delivery under one roof. No coordination headaches.',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    },
    {
      number: '03',
      title: 'Fast Turnaround',
      body: 'Standard production in 3–5 weeks. Rush orders available. We understand retail calendars and seasonal deadlines — and we honour them.',
      icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14v4l3 3',
    },
    {
      number: '04',
      title: 'Transparent Pricing',
      body: 'No hidden costs, no surprise invoices. Every quote is itemised — fabric, trim, labour, shipping. You know exactly what you are paying for, and why.',
      icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z',
    },
    {
      number: '05',
      title: 'Sustainable by Default',
      body: 'Deadstock fabrics, low-waste pattern cutting, certified dye houses. Sustainability is not an add-on — it is how we operate at every stage.',
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    },
    {
      number: '06',
      title: 'Dedicated Account Manager',
      body: 'One point of contact from first call to final delivery. Your account manager knows your brand, your standards, and your timeline — no passing you around.',
      icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    },
  ];

  stats: Stat[] = [
    {
      number: {
        value: 98,
        prefix: '%',
      },
      label: 'On-time delivery',
      sub: 'across all orders 2023–24',
      animation: true,
    },
    {
      number: {
        value: 3,
        prefix: 'wks',
      },
      label: 'Average turnaround',
      sub: 'from approved sample',
      animation: false,
    },
    {
      number: { value: 6, prefix: '+' },
      label: 'Years in production',
      sub: 'established 2018',
      animation: false,
    },
    {
      number: {
        value: 60,
        prefix: '+',
      },
      label: 'Brand partners',
      sub: 'across 12 countries',
      animation: true,
    },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated()) {
            this.hasAnimated.set(true);
            this.stats.forEach((stat) => {
              if (stat.animation) {
                const counter = createCounter({ to: stat.number.value });
                const interval = setInterval(() => {
                  const current = counter();
                  if (current >= stat.number.value) {
                    clearInterval(interval);
                  }
                }, 16);
              }
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    if (this.statsBar?.nativeElement) {
      observer.observe(this.statsBar.nativeElement);
    }
  }
}
