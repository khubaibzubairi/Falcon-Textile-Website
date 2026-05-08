import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  // ── Form ────────────────────────────────────────────────────────────────
  form: FormGroup;
  submitted = false;
  submitting = false;
  showSuccess = false;

  inquiryTypes = [
    'Wholesale Partnership',
    'Custom / Private Label',
    'Seasonal Collection',
    'Rush Order',
    'General Inquiry',
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      company: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      inquiryType: ['', [Validators.required]],
      budget: [''],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  isInvalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched || this.submitted));
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    this.submitting = true;
    // Replace with real HttpClient.post() call
    setTimeout(() => {
      this.submitting = false;
      this.submitted = false;
      this.showSuccess = true;
      this.form.reset();
      setTimeout(() => (this.showSuccess = false), 6000);
    }, 1600);
  }

  // ── Contact info ─────────────────────────────────────────────────────────
  contactInfo: ContactInfo[] = [
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      label: 'Email',
      value: 'studio@maisonlabel.com',
      href: 'mailto:studio@maisonlabel.com',
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      label: 'Phone',
      value: '+44 20 7946 0321',
      href: 'tel:+442079460321',
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
      label: 'Atelier',
      value: '14 Savile Row, London W1S 3JN',
      href: 'https://maps.google.com/?q=14+Savile+Row+London',
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      label: 'Studio Hours',
      value: 'Mon – Fri, 9am – 6pm GMT',
      href: '',
    },
  ];

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faqs: FaqItem[] = [
    {
      question: 'What is your minimum order quantity (MOQ)?',
      answer:
        'Our standard MOQ is 50 units per style. For bespoke or private label commissions, we can accommodate smaller runs from 10 units depending on the complexity of the piece. Get in touch to discuss your specific requirements.',
      open: false,
    },
    {
      question: 'How long does production typically take?',
      answer:
        'Standard production runs take 3–5 weeks from approved sample. Rush orders can be accommodated in as little as 2 weeks depending on fabric availability and current capacity. We always confirm lead times in writing before production begins.',
      open: false,
    },
    {
      question: 'Do you offer sampling before full production?',
      answer:
        'Yes — always. We never proceed to full production without a signed-off sample. Our sampling process typically takes 1–2 weeks and the cost is credited against your full production order.',
      open: false,
    },
    {
      question: 'Can you source fabrics on our behalf?',
      answer:
        'Absolutely. We have established relationships with mills across Italy, Portugal, and Japan. We can source deadstock, certified organic, or custom-developed fabrics depending on your brief and budget.',
      open: false,
    },
    {
      question: 'Do you offer private label or white-label production?',
      answer:
        'Yes. We offer full private label services — from blank label through to custom woven labels, hang tags, and branded packaging. Your brand, your identity, our craft.',
      open: false,
    },
    {
      question: 'What information should I include in my first inquiry?',
      answer:
        'The more detail the better. Ideally: your brand overview, the type of garment or collection, approximate quantities, your target timeline, and any fabric or sustainability requirements. You can attach reference images too — we read everything.',
      open: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

  budgetRanges = [
    'Under £5,000',
    '£5,000 – £15,000',
    '£15,000 – £50,000',
    '£50,000 – £100,000',
    '£100,000+',
    'Prefer not to say',
  ];
}
