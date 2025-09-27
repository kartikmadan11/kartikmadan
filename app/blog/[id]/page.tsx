import { blogData } from "@/lib/data";
import BlogPost from "@/components/blog-post";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogData.find((post) => post.id.toString() === resolvedParams.id);

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogData.find((post) => post.id.toString() === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center px-4">
      <BlogPost post={post} />
    </main>
  );
}
