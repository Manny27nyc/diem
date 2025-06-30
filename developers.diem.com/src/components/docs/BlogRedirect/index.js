// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';

export default () => {
  if (typeof window !== 'undefined') {
    const slug = location.pathname.slice(location.pathname.lastIndexOf('/')+1);
    window.location = 'https://diem.com/en-US/blog/' + slug;
  }

  return null;
};
