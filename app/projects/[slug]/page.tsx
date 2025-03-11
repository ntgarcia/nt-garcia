"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  slug: string;
  content?: React.ReactNode;
  liveUrl?: string;
  githubUrl?: string;
};

// Helper component for optimized images
const ProjectImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`relative w-full my-8 flex justify-center ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={675}
      priority={true}
      className="object-contain w-3/4 h-auto"
    />
  </div>
);

// Helper component for image grid
const ImageGrid = ({ images }: { images: { src: string; alt: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    {images.map((image, index) => (
      <div key={index} className="relative aspect-3/4">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover rounded-sm"
        />
      </div>
    ))}
  </div>
);

const projects: Project[] = [
  {
    id: 1,
    title: "NewYYC",
    description:
      "World Usability Day 2024 Winner — Empowering the underrepresented.",
    tags: ["UX", "Web Dev", "Design"],
    imageUrl: "/NewYYC/cover.png",
    slug: "newyyc",
    liveUrl: "https://new-yyc.vercel.app/",
    githubUrl: "https://github.com/ntgarcia/new-yyc",
    content: (
      <>
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">01 </span>Intro</h2>
        <p className="mb-6">
          On Nov. 14 2024 I attended the World Usability Day Design Jam hosted by Calgary UX at Mount Royal University. 
          It was an awesome night where we had an hour to quickly devise and wireframe a product that fits the theme of World Usability Day 2024!
        </p>
        <p className="mb-8">
          My group ended up winning first place based on our wireframes, ending the event with some prizes and a great experience!
        </p>
        
        <ProjectImage 
          src="/newyyc/winners.png" 
          alt="Winners of the World Usability Day Design Jam" 
        />
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">02 </span>Concept</h2>
        <p className="mb-6">
          The theme of World Usability Day 2024 was ensuring that all voices, especially those from underrepresented groups, 
          are included in and can meaningfully participate in civic discussions.
        </p>
        
        <ProjectImage 
          src="/newyyc/wireframes.png" 
          alt="Wireframes for NewYYC" 
        />
        
        <p className="mb-8">
          Our group decided to wireframe an easy to use website that allows newcomers in Calgary to streamline their experience 
          in finding events and resources near them to better integrate them into what's happening in the city.
          <br /><br />
          I honestly ended up feeling really confident about our product, even moreso after winning that I decided to use my 
          weekend after to actually build the project into fruition.
        </p>
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">03 </span>Designing</h2>
        <p className="mb-6">
          Using our already fantastic wireframes, I had a super easy time designing it in Figma.
        </p>
        
        <ProjectImage 
          src="/newyyc/figma.png" 
          alt="Figma design for NewYYC" 
        />
        
        <p className="mb-6">
          I decided to name the project NewYYC, one because it's clear and concise about what the website entails, 
          and another is because I had a really neat idea for the logo, wrapping YYC around itself.
        </p>
        
        <ProjectImage 
          src="/newyyc/cover.png" 
          alt="NewYYC Logo"
        />
        
        <p className="mb-8">
          A disproportionate amount of my time was spent designing a map of Calgary dividing its quadrants, 
          it felt like a great experience for me trying different approaches on the design and implementing it in code.
        </p>
        
        <ProjectImage 
          src="/newyyc/map.png" 
          alt="Map of Calgary" 
        />
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">04 </span>Coding</h2>
        <p className="mb-6">
          With everything designed in Figma, the final step was building the actual app. I ended up using Vercel to build 
          and deploy the project, using the standard React Framework.
          <br /><br />
          Since I was pressed on time as I constrained myself for the project's start and finish to be within the weekend, 
          I ended up trying and using Cursor for the first time to get the project built as fast as I can.
          <br /><br />
          It ended up being really intuitive to use and gave me a strong foundation to work off of in order to get the look 
          and feel of the website just how I wanted it.
        </p>
        
        <ProjectImage 
          src="/newyyc/cursor.png" 
          alt="Cursor IDE" 
        />
        
        <p className="mb-8">
          For the website's results, I ended up using <Link
          href="https://data.calgary.ca/Recreation-and-Culture/Recreation-Program-Listings/q9hh-gfbx/about_data" className="text-primary hover:underline">the City of Calgary's official data and API </Link> to obtain their recreational events.
        </p>
        
        <ProjectImage 
          src="/newyyc/api.png" 
          alt="City of Calgary API" 
        />
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">05 </span>Final Outcome</h2>
        <p className="mb-8">
          The final build of the project ended up looking amazing, and worked seamlessly. I ended up learning a lot about working 
          on a time constraint, both from the design jam and the weekend project!
        </p>
        
        <ImageGrid 
          images={[
            { src: "/newyyc/01.png", alt: "NewYYC Screenshot 1" },
            { src: "/newyyc/02.png", alt: "NewYYC Screenshot 2" },
            { src: "/newyyc/03.png", alt: "NewYYC Screenshot 3" },
            { src: "/newyyc/04.png", alt: "NewYYC Screenshot 4" }
          ]}
        />
      </>
    ),
  },
  {
    id: 2,
    title: "MRUHacks 2025",
    description:
      "Leading marketing and design for Mount Royal University's annual hackathon.",
    tags: ["Marketing", "Design"],
    imageUrl: "/MRUHacks/cover.jpg",
    slug: "mruhacks-2025",
    content: (<p>Coming soon!</p>)
  },
  {
    id: 3,
    title: "Do I Care About Lyrics?",
    description:
      "Utilizing Spotify & Genius API's to analyze personal listening habits.",
    tags: ["Python", "Data", "API"],
    imageUrl: "/lyrics/cover.png",
    slug: "lyrics-analysis",
    content: (
      <>
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">01 </span>Background</h2>
        <p className="mb-6">
          I love listening to music. I enjoy hearing beautiful melodies, exquisite sound design, and out-of-the-box 
          production techniques that make music interesting.
        </p>
        <p className="mb-6">
          However, I find that I don't always pay attention to the lyrics. Whenever I listen to music with friends, 
          I often find that they would be quick to point out a lyric in a song that may stand out, whether it be good or bad.
        </p>
        <p className="mb-8">
          My response to this would usually be me not even realizing it was in the song in the first place! 🤷‍♂️ 
          Because of this, I decided to analyze my Spotify stats to see if it actually reflects my tendency to not care about lyrics.
        </p>
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">02 </span>Fetching Top Tracks from Spotify</h2>
        <p className="mb-6">
          I used the Spotify API to access my listening history. After signing up for an API key at the <Link href="https://beta.developer.spotify.com/" className="text-primary hover:underline" target="_blank">Spotify for Developers</Link> page, I was able to use <Link href="https://github.com/plamere/spotipy" className="text-primary hover:underline" target="_blank">Spotipy</Link> to access my top artists, top tracks, and metadata for each song.
        </p>
        
        <ProjectImage 
          src="/lyrics/spotipy.png" 
          alt="Spotipy code" 
        />
        
        <p className="mb-6">
          Top tracks are stored in three separate ranges, short-term (4 weeks), medium-term (6 months), and long-term (all-time).
        </p>
        
        <ProjectImage 
          src="/lyrics/csv.png" 
          alt="CSV data" 
        />
        
        <p className="mb-8">
          I decided to store all of this data in a .csv file so that my main comparison for data analysis would be between the time ranges.
        </p>
        
        <ProjectImage 
          src="/lyrics/toptracks.png" 
          alt="Top tracks" 
        />
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">03 </span>Fetching Lyrics from Genius</h2>
        <p className="mb-6">
          Now that I have all of my top tracks, I need to fetch the lyrics of each song. I decided to use <Link href="https://lyricsgenius.readthedocs.io/en/master/" className="text-primary hover:underline" target="_blank">LyricsGenius</Link> for this, as I can easily match the metadata from the .csv file to quickly obtain all of the lyrics.
        </p>
        
        <ProjectImage 
          src="/lyrics/json.png" 
          alt="JSON data" 
        />
        
        <p className="mb-8">
          Just like Spotipy, all I needed to do was sign up for an API key. From there, I was able to save all of the lyrics in a .json file.
        </p>
        
        <ProjectImage 
          src="/lyrics/metadata.png" 
          alt="Metadata" 
        />
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">04 </span>Lyrical Analysis</h2>
        <p className="mb-6">
          Scraping Spotify and Genius was the easy part; now comes the lyric analysis. My main three metrics to decipher 
          if I care about lyrics or not were:
        </p>
        <p className="mb-8">
          <span className="text-primary">Q01:</span> How much of what I listen to is just repeated / barebones lyrics? (Line Repetition)
          <br />
          <span className="text-primary">Q02:</span> How much of what I listen to contains complex verses? (Verse complexity)
          <br />
          <span className="text-primary">Q03:</span> How much of what I listen to contains unique words? (Word diversity)
        </p>
        
        <ProjectImage 
          src="/lyrics/metrics.png" 
          alt="Metrics" 
        />
        
        <p className="mb-8">
          <span className="text-primary">A01:</span> Lyric repetition was calculated by splitting the lyrics into lines and simply counting if the lines were repeating.
          <br />
          <span className="text-primary">A02:</span> Complex verses were analyzed in each song by counting how many unique verses exist.
          <br />
          <span className="text-primary">A03:</span> Unique words were calculated by finding the ratio of how many times a word appears and comparing it to the all of the words.
        </p>
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">05 </span>Data Visualisation</h2>
        <p className="mb-8">
          Now that the lyrics were analyzed, it's time to visualise the data. I mainly used Matplotlib to visualise the data, 
          opting to maximise readability by creating bar charts for each listening range. I even decided to display metric 
          interpretations depending on how each range compares to each other.
        </p>
        
        <ProjectImage 
          src="/lyrics/interpret.png" 
          alt="Interpretation" 
        />
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">06 </span>Analysis Results</h2>
        <p className="mb-6">
          With everything setup, it was finally time to display the data! All I had to do was run my python program to analyze the lyrics. 
          The output was three graphs generated by Matplotlib, and the results ended up surprising me...
        </p>
        
        <ProjectImage 
          src="/lyrics/results.png" 
          alt="Results" 
        />
        
        <p className="mb-8">
          Comparing my overall top tracks with my recent top tracks, I can see that my overall listening habits have gravitated 
          towards my subconscious caring for lyrics. I've been listening to less repetitive and more complex songs, albeit with 
          a lot less vocabulary diversity, which is what surprised me most.
        </p>
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">07 </span>Experience & Findings</h2>
        <p className="mb-8">
          This project was a fun way for me to combine my passion of music along with coding and data visualisation in order to 
          try and find introspective answers to how my listening to music has changed over time. I learned a lot about using 
          different API's in conjunction with each other along with file creation between them. Furthermore, I learned even more 
          about how to analyse and visualise data to align it with my own criteria and present it in a way that is easy to understand. 
          Moving forward, I'd like to try and refine my methods of analysing data in comparison with a set criteria. I'd also like 
          to explore more ways in improving how I can visualise data, specifically with more eye-catching models and interactivity.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Canadian Alliance for Intergenerational Living",
    description:
      "SAIT Capstone Project 2023",
    tags: ["Full Stack", "Web Dev", "UX"],
    imageUrl: "/cail/cail-preview.png",
    slug: "cail",
    content: (
      <>
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">01 </span>Intro</h2>
        <p className="mb-8">
          For my 2023 Capstone Project, my group worked closely with the Canadian Alliance for Intergenerational Living 
          to create an essential task tracker web app so that the organization can monitor student progress.
        </p>
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">02 </span>Problem</h2>
        <p className="mb-8">
          The organization allows affordable housing to students in exchange for spending time with seniors. 
          In order to accurately log these tasks, they needed an app that can be used by both the organization and students.
        </p>
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">03 </span>Solution</h2>
        <p className="mb-8">
          A lightweight, flexible web app that enables students to easily create tasks and log their monthly progress, 
          in addition to allowing admins to easily manage and track student data at a glance.
        </p>
        
        <ProjectImage 
          src="/cail/cail-preview.png" 
          alt="CAIL Preview" 
        />
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">04 </span>Research Methods</h2>
        <p className="mb-8">
          We met with Silvera, the company working with CAIL to house and work directly with the students, in order to acquire 
          all of their requirements for what our web app should provide. In general, Silvera wanted the app to be as hands off 
          as possible with an emphasis on ease of use and accessibility. Students should be using the app solely to mark what 
          tasks they have done and to track what they need to do, and both CAIL and Silvera will only use the app to collect 
          the task data and lightly manage users.
        </p>
        
        <ProjectImage 
          src="/cail/research.png" 
          alt="Research" 
        />
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">05 </span>High Level Requirements</h2>
        <p className="mb-6">
          We divided our requirements based on use case and view, with the app being split on Student Use Case and Admin Use Case:
        </p>
        <p className="mb-8">
          <span className="text-primary">Student:</span> <br />
          <span className="text-primary">01.</span> Task Creation, Management and Tracking <br />
          <span className="text-primary">02.</span> Calendar Functionality <br />
          <span className="text-primary">03.</span> Hour tracking <br />
          <br />
          <span className="text-primary">Admin:</span> <br />
          <span className="text-primary">01.</span> Creation and Management of Student Information <br />
          <span className="text-primary">02.</span> Data Retrieval for Reporting <br />
          <span className="text-primary">03.</span> Banked Hours Tracking <br />
        </p>
        
        <ProjectImage 
          src="/cail/req.png" 
          alt="Requirements" 
        />
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">06 </span>Evaluation & Testing</h2>
        <p className="mb-8">
          Upon contact with CAIL we established client check-ins every 2 weeks, with most of testing done internally until March 
          where we had our clients test the app as both student and admin. The continuous client check-ins helped us stay focused 
          on what needs to be done on a bi-weekly basis. Client testing was integral in allowing us to add in additional tweaks 
          and changes that greatly improved the app for student and admin use.
        </p>
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">07 </span>Final Outcome</h2>
        <p className="mb-8">
          By the end of the semester we were able to successfully integrate all requirements and evaluations to create the desired 
          webapp for the client. The tools used to create the webapp included Figma for the UI/UX and wireframing, MongoDB to handle 
          the backend, and a frontend tech stack including Vercel, React, NextJS, and TailwindCSS.
        </p>
        
        <ImageGrid 
          images={[
            { src: "/cail/login.png", alt: "Login" },
            { src: "/cail/user_task.png", alt: "User Task" },
            { src: "/cail/admin_home.png", alt: "Admin Home" },
            { src: "/cail/admin_user.png", alt: "Admin User" }
          ]}
        />
        
        <h2 className="text-2xl font-mono text-primary mt-12 mb-4"><span className="text-muted">08 </span>Future Work</h2>
        <p className="mb-6">
          Upon the completion and presentation of this Capstone Project, CAIL notified us that they would be integrating the app 
          within the organization by the end of the summer. It would be launched as the students start their Fall Semester, with 
          additional student testing done beforehand. Short term goals for the webapp that would be completed before full launch will include:
        </p>
        <p className="mb-8">
          <span className="text-primary">01.</span> Transfer of deployment and build of app across platforms if needed <br />
          <span className="text-primary">02.</span> Accessibility improvements such as localization and screen reader optimization <br />
          <span className="text-primary">03.</span> Outlook integration, allowing for email notifications
        </p>
      </>
    ),
  },
];

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/#works" 
            className="font-mono text-muted hover:underline mb-8 inline-block clickable"
          >
            ← Back to projects
          </Link>
          
          <div className="aspect-video relative w-full my-8 overflow-hidden rounded-sm">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl sm:text-4xl font-mono text-primary">
              {project.title}
            </h1>
            
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-background font-mono text-sm rounded-sm hover:opacity-90 transition-opacity clickable"
                  >
                    Visit Site
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-primary font-mono text-sm rounded-sm hover:bg-primary/10 transition-colors clickable"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-mono border border-muted text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="font-mono space-y-4">
            <p className="text-lg">{project.description}</p>
            {project.content}
          </div>
        </div>
      </main>
    </div>
  );
} 