import Section from '@/components/shared/Section';
import Link from 'next/link';

const Certificates = () => {
  return (
    <Section key="certificates" heading="Certificates">
      <ul className="animated-list flex flex-col gap-8">
        <li className="transition-opacity">
          <Link
            href="https://www.credly.com/badges/cde3c42c-133b-4553-9432-5a0e2e220e8c/public_url"
            target="_blank"
          >
            <p className="mb-0.5 font-medium">
              Microsoft Certified: AZ-900 Azure Fundamentals
            </p>
            <p className="text-sm text-secondary">Microsoft, February 2023</p>
          </Link>
        </li>
        <li className="transition-opacity">
          <Link
            href="https://certificates.cs50.io/b945009b-a005-4842-a4a6-7780a6bf5b17.pdf?size=letter"
            target="_blank"
          >
            <p className="mb-0.5 font-medium">
              Introduction to Computer Science
            </p>
            <p className="text-sm text-secondary">CS50, December 2019</p>
          </Link>
        </li>
      </ul>
    </Section>
  );
};

export default Certificates;
