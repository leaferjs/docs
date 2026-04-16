import { defineAdditionalConfig } from "en";
import { apiSidebar } from './config/sidebar/api';
import { docSidebar } from './config/sidebar/doc';
import { nav } from './config/nav';
//import { search } from './config/search'

export default defineAdditionalConfig({
  description: "LeaferJS Docs",
  lang: "en-US",
  themeConfig: {
    nav,
    sidebar: {
      '/': docSidebar,
      '/api/': apiSidebar
    },
    //search,

    outlineTitle: "On this page",
    lastUpdatedText: "Last updated",
    docFooter: {
      prev: "Previous",
      next: "Next"
    },
    editLink: {
      pattern: 'https://github.com/leaferjs/docs/edit/main/:path',
      text: "Edit this page on GitHub"
    }
  }
});