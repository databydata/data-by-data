import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // npm install gray-matter
import { MDXRemote } from 'next-mdx-remote/rsc'; // npm install next-mdx-remote

interface PageProps {
  params: Promise<{ slug: string }>
}


export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    return <div>Slug not found</div>;
  }
  console.log(slug)
  try {
    const filePath = path.join(process.cwd(), 'content/foundation', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    console.log(content);
    return (
      <article className="prose prose-invert max-w-none">
        {/* Header Info */}
        <header className="mb-8 border-b border-border pb-8">
          <p className="text-brand-start font-mono text-sm mb-2">{data.category}</p>
          <h1 className="text-4xl font-black tracking-tighter">{data.title}</h1>
          <p className="text-muted-foreground mt-4">{data.description}</p>
        </header>

        {/* Main Blog Content */}
        <div className="prose max-w-none">
          <MDXRemote source={content} />
        </div>
      </article>
    );
  } catch (error) {
    return <div>You've reached the 0/0 zone. Technically, this page is indeterminate. It exists in my head, but not in this directory. If you're lost, blame the developer (that’s me).</div>;
  }




}