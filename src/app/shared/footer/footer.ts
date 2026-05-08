import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  columns: FooterColumn[] = [
    {
      heading: 'Collections',
      links: [
        { label: 'SS 2025', href: '/collections/ss-2025' },
        { label: 'AW 2024', href: '/collections/aw-2024' },
        { label: 'Archive', href: '/collections/archive' },
        { label: 'Lookbook', href: '/lookbook' },
        { label: 'Editorial', href: '/editorial' },
      ],
    },
    {
      heading: 'Studio',
      links: [
        { label: 'About MAISON', href: '/about' },
        { label: 'Our Process', href: '/process' },
        { label: 'Sustainability', href: '/sustainability' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
      ],
    },
    {
      heading: 'Work With Us',
      links: [
        { label: 'Wholesale', href: '/contact?type=wholesale' },
        { label: 'Custom Orders', href: '/contact?type=custom' },
        { label: 'Private Label', href: '/contact?type=private-label' },
        { label: 'Partnerships', href: '/contact?type=partnerships' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  socials = [
    { name: 'IG', label: 'Instagram', href: 'https://instagram.com' },
    { name: 'LI', label: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'PI', label: 'Pinterest', href: 'https://pinterest.com' },
  ];

  legalLinks: FooterLink[] = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Settings', href: '/cookies' },
  ];
}
