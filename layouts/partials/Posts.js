import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
  const { blog_folder, summary_length } = config.settings;
  return (
    <div className="section row pb-0">
      {posts.map((post, i) => (
        <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-4">
          <Link
            href={`/${blog_folder}/${post.slug}`}
            className="block hover:text-primary"
          >
            {post.frontmatter.image && (
              <Image
                className="rounded-lg"
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                width={i === 0 ? "925" : "445"}
                height={i === 0 ? "475" : "230"}
                href={`/${blog_folder}/${post.slug}`}
              />
            )}
            <h2 className="h3 mb-2 mt-4">
              {post.frontmatter.title}
            </h2>
          </Link>
          <p className="text-text">{post.frontmatter.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
