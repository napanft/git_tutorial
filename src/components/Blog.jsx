import React from 'react';
import { motion } from 'framer-motion';
import BlackBoxTransition from '../utils/BlackBoxTransition.tsx';

const Blog = () => {
  return (
    <BlackBoxTransition>
      <motion.div 
      className='container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.6,
        delay: 0.5 
      }}
      >
        <h1>ブログ</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, in. Sit deleniti numquam minus vitae hic amet recusandae beatae esse ut consequatur cupiditate deserunt voluptates voluptatem veniam, maxime modi quis quibusdam! Quae esse eos consectetur totam, praesentium animi soluta cum obcaecati illum corporis voluptate dolore omnis accusantium a labore ipsam perspiciatis assumenda dolor magni? Dignissimos deserunt laboriosam vero doloremque accusamus? Nemo soluta earum id eius ex perferendis accusantium in delectus, quia veniam unde vero praesentium dolorum odit asperiores dolorem qui optio excepturi tempore. Ad, ab voluptates? Recusandae, ipsum voluptates aliquam voluptatum numquam, at rerum amet deleniti aspernatur rem praesentium exercitationem.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, in. Sit deleniti numquam minus vitae hic amet recusandae beatae esse ut consequatur cupiditate deserunt voluptates voluptatem veniam, maxime modi quis quibusdam! Quae esse eos consectetur totam, praesentium animi soluta cum obcaecati illum corporis voluptate dolore omnis accusantium a labore ipsam perspiciatis assumenda dolor magni? Dignissimos deserunt laboriosam vero doloremque accusamus? Nemo soluta earum id eius ex perferendis accusantium in delectus, quia veniam unde vero praesentium dolorum odit asperiores dolorem qui optio excepturi tempore. Ad, ab voluptates? Recusandae, ipsum voluptates aliquam voluptatum numquam, at rerum amet deleniti aspernatur rem praesentium exercitationem.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, in. Sit deleniti numquam minus vitae hic amet recusandae beatae esse ut consequatur cupiditate deserunt voluptates voluptatem veniam, maxime modi quis quibusdam! Quae esse eos consectetur totam, praesentium animi soluta cum obcaecati illum corporis voluptate dolore omnis accusantium a labore ipsam perspiciatis assumenda dolor magni? Dignissimos deserunt laboriosam vero doloremque accusamus? Nemo soluta earum id eius ex perferendis accusantium in delectus, quia veniam unde vero praesentium dolorum odit asperiores dolorem qui optio excepturi tempore. Ad, ab voluptates? Recusandae, ipsum voluptates aliquam voluptatum numquam, at rerum amet deleniti aspernatur rem praesentium exercitationem.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, in. Sit deleniti numquam minus vitae hic amet recusandae beatae esse ut consequatur cupiditate deserunt voluptates voluptatem veniam, maxime modi quis quibusdam! Quae esse eos consectetur totam, praesentium animi soluta cum obcaecati illum corporis voluptate dolore omnis accusantium a labore ipsam perspiciatis assumenda dolor magni? Dignissimos deserunt laboriosam vero doloremque accusamus? Nemo soluta earum id eius ex perferendis accusantium in delectus, quia veniam unde vero praesentium dolorum odit asperiores dolorem qui optio excepturi tempore. Ad, ab voluptates? Recusandae, ipsum voluptates aliquam voluptatum numquam, at rerum amet deleniti aspernatur rem praesentium exercitationem.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, in. Sit deleniti numquam minus vitae hic amet recusandae beatae esse ut consequatur cupiditate deserunt voluptates voluptatem veniam, maxime modi quis quibusdam! Quae esse eos consectetur totam, praesentium animi soluta cum obcaecati illum corporis voluptate dolore omnis accusantium a labore ipsam perspiciatis assumenda dolor magni? Dignissimos deserunt laboriosam vero doloremque accusamus? Nemo soluta earum id eius ex perferendis accusantium in delectus, quia veniam unde vero praesentium dolorum odit asperiores dolorem qui optio excepturi tempore. Ad, ab voluptates? Recusandae, ipsum voluptates aliquam voluptatum numquam, at rerum amet deleniti aspernatur rem praesentium exercitationem.</p>
      </motion.div>
    </BlackBoxTransition>
  )
}

export default Blog;