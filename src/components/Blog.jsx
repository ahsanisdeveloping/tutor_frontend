import React from 'react';
import RelatedBlogCard from './RelatedBlogCard';
const Blog = () => {
    const blogs = [
        {
          title: "Mastering Study Techniques: Your Path to Academic Success",
          time: "45 Minutes",
        },
        {
          title: "Study Smarter, Not Harder: A Student’s Guide to Success",
          time: "20 Minutes",
        },
        {
          title: "From Average to A+: Transform Your Study Routine",
          time: "26 Minutes",
        },
        {
          title: "Ace Your Exams: The Ultimate Study Strategy Guide",
          time: "50 Minutes",
        },
      ];
  return (
    <div className="bg-gray-100 p-6 min-h-screen py-10">
      <div className="container mx-auto">
        
        {/* Blog Header */}
        <div className="bg-white shadow rounded-lg p-6">
        <h1 className='text-[84px] text-[#074226] font-montserrat'>
            Blog
        </h1>
          <div className="bg-gray-200 h-[751px] rounded-3xl"></div>
          <h1 className="text-[54px] font-bold mt-4 font-montserrat">
            How to Study efficiently? A complete Guide to get good grades
          </h1>
          <p className='text-[33px] my-5 font-montserrat'>
          Studying efficiently means using your time wisely to achieve great results. Here’s a short guide to help you study better and score higher:
          </p>
          <div className="bg-white p-6">
            <h2 className="text-[33px] font-bold font-montserrat">1. Set Goals and Plan</h2>
            <p className='text-[33px] font-montserrat'>
              Define clear, realistic goals and create a study schedule. Break sessions into smaller chunks to avoid burnout and maintain focus.
            </p>
          </div>
          <div className="bg-white p-6 ">
            <h2 className="text-[33px] font-bold font-montserrat">2. Find Your Learning Style</h2>
            <p className='text-[33px] font-montserrat'>
              Discover what fits you best: auditory, reading/writing, or kinesthetic learners, and use tools and techniques suited to your preferences.
            </p>
          </div>
          <div className="bg-white  p-6">
            <h2 className="text-[33px] font-bold font-montserrat">3. Organize Your Space</h2>
            <p className='text-[33px] font-montserrat'>
              Study in a clean, quiet, and distraction-free area. Keep essential supplies and resources handy.
            </p>
          </div>
          <div className="bg-white  p-6">
            <h2 className="text-[33px] font-bold font-montserrat">4. Prioritize and Focus</h2>
            <p className='text-[33px] font-montserrat'>
              Use to-do lists and tackle important tasks first. Avoid multitasking and stay focused on one thing at a time.
            </p>
          </div>
          <div className="bg-white p-6">
            <h2 className="text-[33px] font-bold font-montserrat">5. Take Smart Notes</h2>
            <p className='text-[33px] font-montserrat'>
              Use methods like the Cornell system, mind maps, or highlight key points. It helps reinforce learning.
            </p>
          </div>
          <div className="bg-white p-6">
            <h2 className="text-[33px] font-bold font-montserrat">6. Engage Actively</h2>
            <p className='text-[33px] font-montserrat'>
              Practice quizzes, group discussions, or use Flashcards to reinforce learning.
            </p>
          </div>
          <div className="bg-white p-6">
            <h2 className="text-[33px] font-bold font-montserrat">7. Rest and Recharge</h2>
            <p className='text-[33px] font-montserrat' >
              Take breaks regularly (every 25-50 minutes), stay hydrated, and sleep well to keep your mind fresh.
            </p>
          </div>
        </div>


        {/* Related Blogs */}
        <div className="mt-10">
          <h2 className="text-[54px] text-[#074226] font-bold mb-4 font-montserrat">Related Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {blogs.map((blog, index) => (
            <RelatedBlogCard key={index} title={blog.title} time={blog.time} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
