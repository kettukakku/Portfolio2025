import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import client from "../../../tina/__generated__/client";

interface BookLinkProps {
  href: string;
  icon: string;
  name: string;
}

interface ReviewPostProps {
  title: string;
  author: string;
  cover: string;
  rating: number;
  ratingdesc: string;
  body: string;
  links: string[];
  tags: string[];
  date: string;
}

function BookLink({ href, icon, name }: BookLinkProps) {
  return (
    <a
      href={href}
      className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={icon} alt={name} width={16} height={16} className="w-4 h-4" />
      {name}
    </a>
  );
}

export default function BookPost(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return <div>{data.reviews.title}</div>;
}

export const getStaticProps = async ({ params }: any) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.md` };
  try {
    const res = await client.queries.post(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables,
      data,
      query,
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();

  return {
    paths: postsListData.data.postConnection.edges?.map((post) => ({
      params: { filename: post?.node?._sys.filename },
    })),
    fallback: false,
  };
};
