import Section from '@/components/shared/Section';

const Education = () => {
  return (
    <Section key="education" heading="Education">
      <div>
        <p className="mb-0.5 font-medium">
          B.A. in Computer Animation/VFX at Netherlands Film Academy
        </p>
        <p className="text-sm text-secondary">2015 - 2019</p>
        <ul className="text-secondary list-disc pl-5 md:pl-4 mt-3 flex flex-col gap-y-2">
          <li>
            Specialized in creating high-end 3D models for realtime applications
            such as games and virtual reality
          </li>
          <li>
            For my graduation project, a 3D VR experience set in the trenches of
            WW1, I was responsible for creating the digital world. Tasks: level
            design (Unity - HTC Vive), 3D modeling, texturing, animation,
            lighting
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Education;
