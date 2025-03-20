export default function Resume() {
  interface JobEntryProps {
    company: string;
    parentCompany?: string;
    position: string;
    period: string;
    description?: string;
  }

  function CVElement({
    company,
    parentCompany,
    position,
    period,
    description,
  }: JobEntryProps) {
    return (
      <>
        <h3 className="job-title">
          {company} {parentCompany && `(${parentCompany})`}
        </h3>
        <div className="-mt-3 job-details">
          <p>{position}</p>
          <p>{period}</p>
        </div>
        {description && <p className="mt-2">{description}</p>}
      </>
    );
  }

  return (
    <main className="p-8 mx-auto">
      {/* Header */}
      <div className="mb-8 flex flex-col items-center">
        <h1 className="text-6xl font-bold tracking-[0.1em] leading-[0.6em]">
          <span className="font-['Cinzel_Decorative']">D</span>
          <span className="font-['Cinzel']">ARIEN</span>
        </h1>
        <h2 className="text-4xl mt-1 tracking-[0.2em] font-['Cinzel']">
          ARIS KIRST
        </h2>
        <hr className="w-1/2 border-2 border-[var(--color-primary)] my-1" />
        <p className="text-[var(--color-primary)] font-medium mt-1 tracking-[0.4em]">
          EDITOR & WRITER
        </p>
      </div>

      {/* Work Experience Section */}
      <section className="w-2/3 mx-auto py-4">
        <h2 className="bg-[var(--color-primary)] text-[var(--color-background-alt)] text-xl px-4 font-bold">
          WORK EXPERIENCE
        </h2>

        <CVElement
          company="MOONQUILL PUBLISHING"
          position="Freelance Editor"
          period="2024 - Present"
          description="My philosophy as an editor is to build a bridge between the author, 
          publisher, and readers. It's through strong and open communication and an ability 
          to adapt to changes that I can connect worlds."
        />
        <CVElement
          company="ICEPETS"
          position="Content Writer"
          period="2024 - Present"
          description="As a new team member on a game that's been around since 2009, I've 
          learned to balance preserving brand integrity and bringing new ideas to the table."
        />
        <CVElement
          company="GAME RANT"
          parentCompany="VALNET"
          position="Content Writer"
          period="2023 - 2023"
          description="In a fast-paced environment with quick turnaround times, I developed 
          a keen eye for time management. What's more important to me than speed, however, 
          is crafting well-sourced and engaging articles."
        />
        <CVElement
          company="ANIME GEEK"
          parentCompany="MONSTERS & CRITICS"
          position="Content Writer"
          period="2022 - 2023"
          description="My love of video games and animated media always seeps into my work. 
          Keeping up with pop culture trends by tracking social media or participating in 
          online communities has helped me broaden my writing career."
        />
      </section>

      {/* Education Section */}
      <section className="w-2/3 mx-auto py-6">
        <h2 className="bg-[var(--color-primary)] text-[var(--color-background-alt)] text-xl px-4 font-bold">
          EDUCATION
        </h2>
        <CVElement
          company="SUNDEBY FOLKHÖGSKOLA"
          position="Fine Art"
          period="2018 - 2019"
        />
        <CVElement
          company="CAMDEN COUNTY TECHNICAL SCHOOL"
          position="Video Production"
          period="2007 - 2011"
        />
      </section>
    </main>
  );
}
