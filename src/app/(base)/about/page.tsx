import MaxWidthWrapper from "@/components/max-width-wrapper";
import PageHero from "@/components/page-hero";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <PageHero
        title="About Our Community"
        sub1="Preserving the"
        sub2="Ogba"
        sub3="Heritage"
        description="For centuries, the Ogba people have cultivated a     rich tapestry of
              culture, tradition, and community. We are custodians of a legacy
              that speaks through our language, dances, crafts, and the wisdom
              of our ancestors."
      />

      {/* Our Story Section */}
      <section className="py-20">
        <MaxWidthWrapper>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Our <span className="text-green-700">Story</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="about-p">
                Ogba is the ancestral homeland of the Ogba people, a vibrant
                ethnic group known for their rich culture, deep traditions, and
                strong community values. Across towns and villages, the people
                share a common identity expressed through language, customs,
                festivals, and daily life. From traditional ceremonies and
                praise songs to age-grade systems and ancestral worship, every
                aspect of Ogba life reflects a people deeply connected to their
                roots. Their land—filled with shrines, forests, and historic
                sites—tells a living story of origin, unity, and cultural pride.
                Origins and Identity
              </p>
              <p className="about-p">
                The Ogba people are traditionally organized into extended family
                groups known as Onuobodo (meaning “mouths of the town”). Each
                group traces its lineage to a founding ancestor and maintains
                its own identity, traditions, and leadership structure.
              </p>
              <p className="about-p">
                Over time, these groups spread across different areas, forming
                communities while still maintaining strong ancestral ties. This
                movement and interaction helped shape the diverse but unified
                identity of the Ogba people today.
              </p>
              <p className="about-p">
                The Three Major Ogba Groups Ogba society is broadly divided into
                three main groups: Usomini, Igburu and Egi
              </p>
              <p className="about-p">
                Although these groups share common origins, they differ slightly
                in dialect, customs, and traditions. Despite these differences,
                they remain united by history and culture. Usomini, for example,
                is closely associated with riverine life, while Igburu reflects
                swampy terrain, and Egi represents farming communities. These
                identities are tied not just to people, but to the land they
                inhabit.
              </p>
              {/* Heading */}
              <p className="about-p">
                Usomini: A People of Strength and Unity The Usomini group
                consists of several communities, including Obrikom, Obie,
                Kreigani, Obor, and others. These towns are bound together by
                shared traditions, cultural festivals, and a collective vision
                of progress.
              </p>
              <p className="about-p">
                Historically, Usomini has been known for its vibrant
                celebrations, including wrestling competitions, cultural dances,
                and festivals that bring people together in unity and pride.
              </p>
            </div>

            <div>
              <p className="about-p">
                Culture and Way of Life: Culture is at the heart of Ogba
                identity. Festivals, dances, and traditional performances are
                not just entertainment—they are expressions of history, beliefs,
                and social values. From colorful masquerades to energetic
                dances, these cultural practices reflect both the beauty and the
                spiritual depth of the people. They also serve as a way of
                passing knowledge from one generation to the next.
              </p>
              <h1></h1>
              <p className="about-p">
                Omoku: The Cultural and Administrative Center stands as the
                central hub of Ogba land. Located in the northern part of the
                region, it serves as a key center for administration, commerce,
                and cultural interaction. Today, Omoku represents both tradition
                and modern development, connecting the past with the future.
                Beliefs and Worldview (Cosmology)
              </p>
              <p className="about-p">
                The Ogba worldview is deeply rooted in spirituality and balance.
                Traditionally, the world is seen as divided into two realms:
                Orun – the spiritual realm Igmo – the physical world Life is
                believed to exist between these two realms, shaping how people
                understand existence, morality, and destiny.
              </p>
              <p className="about-p">
                Cultural expressions such as masquerades often symbolize this
                connection between the physical and spiritual worlds, making
                Ogba traditions both meaningful and mysterious.
              </p>

              <p className="about-p">
                A Living Heritage: Today, the people of Usomini and the wider
                Ogba community continue to embrace their heritage while adapting
                to modern life. Their story is one of resilience, unity, and
                cultural pride. Through festivals, community development, and
                organizations like Usomini Beauty and Culture, the legacy of the
                past is preserved while building a stronger future.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default AboutPage;
