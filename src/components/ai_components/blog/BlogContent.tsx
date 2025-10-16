import { ReactNode } from "react";

const BlogContent = ({children}:{children:ReactNode}) => {
  return (
    <article className="lg:col-span-9 prose prose-lg max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-screen-xl px-4 sm:px-6 mx-auto scroll-mt-20">
		{children}
    </article>
  );
};

export default BlogContent;
