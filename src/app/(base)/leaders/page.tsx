import MaxWidthWrapper from "@/components/max-width-wrapper";
import PageHero from "@/components/page-hero";
import SectionTitle from "@/components/section-title";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const kings = [
  {
    name: "Dr. Mela Wilson",
    title: "Eze Ajie 1 of Usomini",
    imgUrl: "/assets/images/bg.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et atque aut reiciendis eos aliquam minima nemo porro ipsam velit! Repudiandae laboriosam odit ab et modi eos libero architecto numquam optio id dolor in autem debitis error ducimus sit harum, suscipit, aliquam perspiciatis quia nobis recusandae quibusdam! Eveniet, incidunt possimus, perspiciatis soluta et ipsum aspernatur voluptas expedita vel in dolorem quod assumenda doloribus aut veritatis nostrum recusandae libero officia pariatur culpa inventore nihil, consequatur adipisci. Cupiditate odio itaque, dolorem reprehenderit voluptatem rerum consequuntur voluptatum nesciunt maiores. Veritatis, corrupti nostrum est repudiandae officia mollitia doloribus, facere harum eos enim minus incidunt molestiae?Cupiditate odio itaque, dolorem reprehenderit voluptatem rerum consequuntur voluptatum nesciunt maiores. Veritatis, corrupti nostrum est repudiandae officia mollitia doloribus, facere harum eos enim minus incidunt molestiae?",
    reverse: false,
  },
  {
    name: "Dr. Adiela Law",
    title: "Eze Ajie 2 of Usomini",
    imgUrl: "/assets/images/bg.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et atque aut reiciendis eos aliquam minima nemo porro ipsam velit! Repudiandae laboriosam odit ab et modi eos libero architecto numquam optio id dolor in autem debitis error ducimus sit harum, suscipit, aliquam perspiciatis quia nobis recusandae quibusdam! Eveniet, incidunt possimus, perspiciatis soluta et ipsum aspernatur voluptas expedita vel in dolorem quod assumenda doloribus aut veritatis nostrum recusandae libero officia pariatur culpa inventore nihil, consequatur adipisci. Cupiditate odio itaque, dolorem reprehenderit voluptatem rerum consequuntur voluptatum nesciunt maiores. Veritatis, corrupti nostrum est repudiandae officia mollitia doloribus, facere harum eos enim minus incidunt molestiae? Cupiditate odio itaque, dolorem reprehenderit voluptatem rerum consequuntur voluptatum nesciunt maiores. Veritatis, corrupti nostrum est repudiandae officia mollitia doloribus, facere harum eos enim minus incidunt molestiae?",
    reverse: false,
  },
];
const leaders = [
  {
    name: "Dr. Go round",
    title: "Mbanabaragwu 1 or Orashi",
    imgUrl: "/assets/images/bg.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et atque aut reiciendis eos aliquam minima nemo porro ipsam velit! Repudiandae laboriosam odit ab et modi eos libero architecto ",
  },
  {
    name: "Dr. Lawson Law",
    title: "Eze Ajie 2 of Usomini",
    imgUrl: "/assets/images/bg.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et atque aut reiciendis eos aliquam minima nemo porro ipsam velit! Repudiandae laboriosam odit ab et modi eos libero architecto ",
  },
  {
    name: "Dr. Ladi Chuku",
    title: "Eze Ajie 2 of Usomini",
    imgUrl: "/assets/images/bg.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et atque aut reiciendis eos aliquam minima nemo porro ipsam velit! Repudiandae laboriosam odit ab et modi eos libero architecto ",
  },
];
const youths = [
  {
    name: "Justice Ajie",
    title: "Mbanabaragwu 1 or Orashi",
    imgUrl: "/assets/images/bg.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et atque aut reiciendis eos aliquam minima nemo porro ipsam velit! Repudiandae laboriosam odit ab et modi eos libero architecto ",
  },
  {
    name: "Okechuku Uka",
    title: "Eze Ajie 2 of Usomini",
    imgUrl: "/assets/images/bg.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et atque aut reiciendis eos aliquam minima nemo porro ipsam velit! Repudiandae laboriosam odit ab et modi eos libero architecto ",
  },
  {
    name: "Nhweoma Ezikiel",
    title: "Eze Ajie 2 of Usomini",
    imgUrl: "/assets/images/bg.jpg",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et atque aut reiciendis eos aliquam minima nemo porro ipsam velit! Repudiandae laboriosam odit ab et modi eos libero architecto ",
  },
];
const LeadersPage = () => {
  return (
    <section>
      <PageHero
        title="About Usomini Leadership"
        sub1="Our"
        sub2="Distinguished"
        sub3="Leaders"
        description="For centuries, the Ogba people have cultivated a     rich tapestry of
                      culture, tradition, and community. We are custodians of a legacy
                      that speaks through our language, dances, crafts, and the wisdom
                      of our ancestors."
      />
      <MaxWidthWrapper>
       

        <section>
          <SectionTitle
            title="Revered Kings"
            descritpion="Outstanding kings of the Usomini people"
          />

          <div className="space-y-8 md:space-y-16">
            {kings.map((king, i: number) => {
              return (
                <KingCard
                  key={king.name}
                  about={king.about}
                  title={king.title}
                  name={king.name}
                  imgUrl={king.imgUrl}
                  reverse={i % 2 !== 0 && true}
                />
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <SectionTitle
            title="Other Leaders"
            descritpion="Outstanding leaders of the Usomini people"
          />

          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <OtherLeaderCard
                about={leader.about}
                name={leader.name}
                imgUrl={leader.imgUrl}
                title={leader.title}
                key={leader.name}
              />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionTitle
            title="Youth Leaders"
            descritpion="Outstanding youth leaders of the Usomini people"
          />

          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youths.map((youth) => (
              <YouthLeaderCard
                about={youth.about}
                name={youth.name}
                imgUrl={youth.imgUrl}
                title={youth.title}
                key={youth.name}
              />
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
    </section>
  );
};

export default LeadersPage;

function KingCard({
  name,
  title,
  imgUrl,
  about,
  reverse,
  className,
}: {
  name: string;
  title: string;
  imgUrl: string;
  about: string;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col md:flex-row gap-4",
        reverse && "md:flex-row-reverse",
        className,
      )}
    >
      <div className="rounded-2xl flex-1">
        <div className="flex-[0.5] relative w-full h-50 md:w-125 md:h-87.5">
          <Image
            src={imgUrl}
            alt={`${name}-photo`}
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-green-600 text-white p-6">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-lg font-light">{title}</p>
        </div>
      </div>

      <div className="spacey-4 md:space-y-6">
        <h3 className="text-xl md:text-2xl font-bold">About</h3>
        <p className="p-text">{about}</p>
      </div>
    </div>
  );
}

function OtherLeaderCard({
  name,
  title,
  imgUrl,
  about,
  className,
}: {
  name: string;
  title: string;
  imgUrl: string;
  about: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 relative bg-green-50", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-4">
        <div className="flex-[0.5] relative size-37.5 rounded-full overflow-hidden">
          <Image
            src={imgUrl}
            alt={`${name}-photo`}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>

      <div>
        <h3>About</h3>
        <p>{about}</p>
      </div>

      <div className="absolute size-full -top-3 -right-3 bg-green-700 -z-10" />
    </div>
  );
}

function YouthLeaderCard({
  name,
  title,
  imgUrl,
  about,
  className,
}: {
  name: string;
  title: string;
  imgUrl: string;
  about: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 relative bg-green-50", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-4">
        <div className="flex-[0.5] relative size-37.5 rounded-full overflow-hidden">
          <Image
            src={imgUrl}
            alt={`${name}-photo`}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>

      <div>
        <h3>About</h3>
        <p>{about}</p>
      </div>

      <div className="absolute size-full -top-3 -left-3 bg-green-700 -z-10" />
    </div>
  );
}
