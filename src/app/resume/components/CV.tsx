function Section({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section className="px-8 py-4 bg-gray-100 dark:bg-gray-800 flex flex-row border-t border-gray-200 dark:border-gray-700">
      <h1 className="w-32">{title}</h1>
      <div className="w-full">{children}</div>
    </section>
  )
}

function Experience({
  location,
  title,
  date,
  subtitle,
  jobtitle,
  children,
  last = false,
}: {
  location: string
  title: string
  date: string
  subtitle: string
  jobtitle: string
  children?: React.ReactNode
  last?: boolean
}) {
  return (
    <article className={`${last ? '' : 'pb-4 border-b border-gray-200 dark:border-gray-700 mb-4'}`}>
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="inline text-black dark:text-white">{title}</h2>
          {subtitle ? (
            <h3 className="inline text-xs text-black dark:text-white pl-2">{subtitle}</h3>
          ) : null}
        </div>
        <p>
          {location}, {date}
        </p>
      </div>
      <h4 className="font-medium text-black dark:text-white">{jobtitle}</h4>
      <p className="text-sm text-gray-700 dark:text-gray-200">{children}</p>
    </article>
  )
}

function SmallItem({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div>
      <div>{title}</div>
      {children && <div className="text-sm text-gray-700 dark:text-gray-200">{children}</div>}
    </div>
  )
}

export default function CV() {
  return (
    <div
      className="overflow-hidden flex flex-1 flex-col bg-white dark:bg-black box-border mx-auto"
      style={{
        height: '297mm',
        width: '210mm',
      }}>
      <div className="flex flex-1 justify-between px-8 py-4">
        <div>
          <h1>Léandre Daumont</h1>
          <h2>Senior Staff Software Engineer</h2>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/l%C3%A9andre-daumont/">Contact me</a>
        </div>
      </div>
      <Section title="Profile">
        <p>
          I specialize into creating systems that are simple to understand, easy to iterate on and,
          ultimately, delightful for users at scale.
        </p>
      </Section>
      <Section title="Experience">
        <Experience
          title="Voggt / Fanatics Live"
          location="Paris"
          date="2022 - now"
          subtitle="Live shopping platform"
          jobtitle="Senior Staff Software Engineer">
          Led backend development for Voggt&apos;s main app and seller studio. Collaborated closely
          with frontend teams and product design to deliver features to production. Drove technical
          initiatives and architectural decisions for platform scalability and team efficiency.
        </Experience>
        <Experience
          title="Yubo"
          location="Paris"
          date="2019 - 2022"
          subtitle="The generation Z social network"
          jobtitle="Software Engineer - Safety">
          Built moderation tools with <b>React</b>, <b>SCSS</b>, <b>Redux</b> for global
          specialists. Backend: <b>Express</b>, <b>TypeScript</b>. Data: <b>Postgres</b>,{' '}
          <b>MongoDB</b>, <b>ElasticSearch</b>, <b>Redis</b>, <b>S3</b>. Deployed on <b>GCP</b> with{' '}
          <b>Kubernetes</b>. UI design with <b>Figma</b>.
        </Experience>
        <Experience
          location="Paris"
          title="Sharedress"
          date="2018 - 2020"
          subtitle="B2B2C app"
          jobtitle="CTO">
          Created a B2B2C app using <b>Cloud functions</b> for <b>Firebase</b>, <b>React Native</b>{' '}
          and <b>Redux</b> to suggest the best personalized products to the business&apos;
          customers. We stopped working on it due to other opportunities.
        </Experience>
        <Experience
          location="Paris"
          title="Allianz"
          date="2016 - 2019"
          subtitle="Multinational financial services"
          jobtitle="Software Developer - Social protection department"
          last>
          Created tools to track contracts anomalies and automate parts of communications with
          allowed service providers. Used <b>SAS</b>, <b>SQL</b> and <b>VBA</b> for Excel and
          Access.
        </Experience>
      </Section>
      <Section title="Education">
        <Experience
          location="Paris"
          title="Ingésup/YNOV"
          subtitle="Web developement, mobile &amp; IoT"
          jobtitle="Master's Degree"
          date="2017 - 2019"
        />
        <Experience
          location="Paris"
          title="CNAM"
          subtitle="Analysis and Design of Decision-Making Information Systems"
          jobtitle="License"
          date="2016 - 2017"
          last
        />
      </Section>
      <Section title="Skills">
        <div className="grid grid-cols-3 gap-y-4">
          <SmallItem title="Front">
            React
            <br />
            Redux/Jotai/Zustand
          </SmallItem>
          <SmallItem title="Back">
            Go
            <br />
            TypeScript
          </SmallItem>
          <SmallItem title="DevOps">
            Kubernetes
            <br />
            GCP
          </SmallItem>
        </div>
      </Section>
      <Section title="Languages">
        <div className="grid grid-cols-2">
          <SmallItem title="French">Native</SmallItem>
          <SmallItem title="English">Professional use</SmallItem>
        </div>
      </Section>
      <Section title="Hobbies">
        <div className="grid grid-cols-3">
          <SmallItem title="Mobile app dev" />
          <SmallItem title="Game dev" />
          <SmallItem title="3D modeling" />
        </div>
      </Section>
    </div>
  )
}
