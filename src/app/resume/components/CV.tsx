function Section({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section className="px-8 py-4 bg-gray-100 dark:bg-gray-800 flex flex-row border-t">
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
    <article className={`${last ? '' : 'pb-4 border-b mb-4'}`}>
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
          <h2>Software Engineer</h2>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/l%C3%A9andre-daumont/">Contact me</a>
        </div>
      </div>
      <Section title="Profile">
        <p>
          Specialized in <b>Fullstack JS/TS</b> with 5 years of experience using <b>Node</b> and{' '}
          <b>React</b>.
        </p>
      </Section>
      <Section title="Experience">
        <Experience
          title="Voggt"
          location="Paris"
          date="2022 - now"
          subtitle="Live shopping platform"
          jobtitle="Lead Software Engineer">
          Migrated the backend from <b>REST</b> to <b>GraphQL</b> with strong product and new
          features focus. Initiated the microservices development and internal tooling.
        </Experience>
        <Experience
          title="Yubo"
          location="Paris"
          date="2019 - 2022"
          subtitle="The generation Z social network"
          jobtitle="Software Engineer - Safety">
          Created moderation tools using <b>React</b> with <b>SCSS</b> and <b>Redux</b> for our
          specialists worldwide to keep our platform safe for the users. Backend using{' '}
          <b>Express</b>, <b>Typescript</b> and <b>SocketCluster</b>. Data engineering using{' '}
          <b>Postgres</b>, <b>MongoDB</b>, <b>ElasticSearch</b>, <b>BigQuery</b>, <b>Redis</b> and{' '}
          <b>AWS S3</b>. Deployed on <b>GCP</b> using <b>Kubernetes</b>. Designed views using{' '}
          <b>Figma</b>.
        </Experience>
        <Experience
          location="Paris"
          title="Sharedress"
          date="2018 - 2020"
          subtitle="B2B app"
          jobtitle="CTO">
          Created a B2B app using <b>Cloud functions</b> for <b>Firebase</b>, <b>React Native</b>{' '}
          and <b>Redux</b> to suggest the best personalized products to the business&apos;
          customers.
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
            Redux
            <br />
            React-native
          </SmallItem>
          <SmallItem title="Back">
            Node.js (or Bun)
            <br />
            GraphQL
            <br />
            PHP <span className="text-xs">(made several commercial websites during studies)</span>
          </SmallItem>
          <SmallItem title="DevOps">
            Kubernetes
            <br />
            Docker
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
