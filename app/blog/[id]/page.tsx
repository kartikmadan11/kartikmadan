import { blogData } from "@/lib/data";
import BlogPost from "@/components/blog-post";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    id: post.id.toString(),
  }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogData.find((post) => post.id.toString() === params.id);
  
  if (!post) {
    return {
      title: "Post Not Found | Kartik Madan",
    };
  }

  return {
    title: `${post.title} | Kartik Madan`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogData.find((post) => post.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center px-4">
      <BlogPost post={post} />
    </main>
  );
}
