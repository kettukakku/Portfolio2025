import Sidebar from "@/components/Sidebar";

export default function Resume() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-[var(--color-background)]">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-6xl font-bold tracking-[0.1em] leading-[0.6em]">
            <span className="font-['Cinzel_Decorative']">D</span>
            <span className="font-['Cinzel']">ARIEN</span>
          </h1>
          <h2 className="text-4xl mt-1 tracking-[0.2em] font-['Cinzel']">ARIS KIRST</h2>
          <hr className="w-1/2 border-2 border-[var(--color-primary)] my-1" />
          <p className="text-[var(--color-primary)] font-medium mt-1 tracking-[0.4em]">EDITOR & WRITER</p>
        </div>

        {/* Work Experience Section */}
        <section className="mb-8 w-2/3 mx-auto py-4">
          <h2 className="bg-[var(--color-primary)] text-[var(--color-background-alt)] text-xl px-4 font-bold">WORK EXPERIENCE</h2>
          
          <div className="mb-6">
            <h3 className="job-title">MOONQUILL PUBLISHING</h3>
            <div className="-mt-3 job-details">
              <p>Freelance Editor</p>
              <p>2024 - Present</p>
            </div>
            <p className="mt-2">
              My philosophy as an editor is to build a bridge between the author, 
              publisher, and readers. It&apos;s through strong and open communication 
              and an ability to adapt to changes that I can connect words.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="job-title">ICEPETS</h3>
            <div className="-mt-3 job-details">
              <p>Content Writer</p>
              <p>2024 - Present</p>
            </div>
            <p className="mt-2">
              As a new team member on a game that&apos;s been around since 2009, 
              I&apos;ve learned to balance preserving brand integrity and bringing 
              new ideas to the table.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="job-title">GAME RANT (VALNET)</h3>
            <div className="-mt-3 job-details">
              <p>Content Writer</p>
              <p>2022 - 2024</p>
            </div>
            <p className="mt-2">
              In a fast-paced environment with quick turnaround times, I developed 
              a keen eye for time management. What&apos;s more important to me than speed, 
              however, is crafting well-sourced and engaging articles.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="job-title">ANIME GEEK (MONSTERS & CRITICS)</h3>
            <div className="-mt-3 job-details">
              <p>Content Writer</p>
              <p>2022 - 2024</p>
            </div>
            <p className="mt-2">
              My love of video games and animated media always seeps into my work. 
              Keeping up with pop culture trends by tracking social media or 
              participating in online communities has helped me broaden my writing career.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 w-2/3 mx-auto">
          <h2 className="bg-[var(--color-primary)] text-[var(--color-background-alt)] text-xl px-4 font-bold">EDUCATION</h2>
          
          <div className="mb-4">
            <h3 className="job-title">SUNDEBY FOLKHÖGSKOLA</h3>
            <div className="-mt-3 job-details">
              <p>Fine Art</p>
              <p>2018 - 2019</p>
            </div>
          </div>

          <div>
            <h3 className="job-title">CAMDEN COUNTY TECHNICAL SCHOOL</h3>
            <div className="-mt-3 job-details">
              <p>Video Production</p>
              <p>2007 - 2011</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}