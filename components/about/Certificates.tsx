import Link from 'next/link';
import Section from '@/components/shared/Section';
import { BsArrowUpRight } from '@/components/shared/Icons';

const Certificates = () => {
  return (
    <Section key="certificates" heading="Certificates">
      <ul className="animated-list flex flex-col gap-8">
        <li className="text-primary transition-opacity">
          <Link
            href="https://www.credly.com/badges/cde3c42c-133b-4553-9432-5a0e2e220e8c/public_url"
            target="_blank"
            className="flex items-center gap-x-2"
          >
            <p className="mb-0.5 font-medium">
              Microsoft Certified: AZ-900 Azure Fundamentals
            </p>
            <div className="ml-auto sm:ml-0">
              <BsArrowUpRight />
            </div>
          </Link>
          <p className="text-sm text-secondary">Microsoft, February 2023</p>
        </li>
        <li className="text-primary transition-opacity">
          <Link
            href="https://certificates.cs50.io/b945009b-a005-4842-a4a6-7780a6bf5b17.pdf?size=letter"
            target="_blank"
            className="flex items-center gap-x-2"
          >
            <p className="mb-0.5 font-medium">
              Introduction to Computer Science
            </p>
            <div className="ml-auto sm:ml-0">
              <BsArrowUpRight />
            </div>
          </Link>
          <p className="text-sm text-secondary">CS50, December 2019</p>
        </li>
      </ul>
    </Section>
  );
};

export default Certificates;
