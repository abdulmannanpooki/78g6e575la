'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, X } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      description: 'Essential features for personal use',
      features: [
        '1 Project',
        'Basic Support',
        'All Core Features',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Advanced features for professionals',
      features: [
        '10 Projects',
        'Priority Support',
        'Team Collaboration',
        'Advanced Analytics',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      description: 'Custom solutions for large organizations',
      features: [
        'Unlimited Projects',
        'Dedicated Support',
        'Custom Integrations',
        'Service Level Agreement',
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time from your account settings.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'We offer a 14-day free trial for the Pro plan. No credit card required.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.',
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer:
        'Yes, we offer special pricing for nonprofit organizations. Please contact sales for more information.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-16 px-6 sm:px-12 lg:px-24">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Pricing Plans
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col border-2 ${
              plan.popular
                ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900'
                : 'border-border bg-card'
            } shadow-lg`}
          >
            <CardHeader className="p-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {plan.name}
                </CardTitle>
                {plan.popular && (
                  <Badge variant="destructive" className="uppercase text-xs font-semibold">
                    Popular
                  </Badge>
                )}
              </div>
              <CardDescription className="mt-2 text-gray-700 dark:text-gray-300">
                {plan.description}
              </CardDescription>
              <p className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                {plan.price}
                {plan.price !== 'Contact Us' && (
                  <span className="text-lg font-normal text-gray-600 dark:text-gray-400">/mo</span>
                )}
              </p>
            </CardHeader>

            <CardContent className="flex-1 p-6">
              <ul role="list" className="space-y-4 text-gray-700 dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="p-6">
              <Button
                variant={plan.popular ? 'default' : 'outline'}
                className="w-full"
                aria-label={`Select the ${plan.name} plan`}
              >
                {plan.price === 'Contact Us' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
