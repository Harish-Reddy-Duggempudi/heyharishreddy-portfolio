/* ===== LINKS DATA: edit ONLY this file =====
   New link: add at the TOP of LINKS.  New social account: add to SOCIALS.  Both pages update automatically.
   icon:      linkedin | github | instagram | youtube | topmate | mail | globe | article | link
   featured:  true -> big red button (use for 1-2 links)
   isNew:     true -> pulsing "New" badge (stays until you remove it)
   added:     'YYYY-MM-DD' -> "New" badge shows automatically for NEW_DAYS days, then disappears by itself
   cta:       optional button text for a featured link (default "Open")
   hidden:    true -> keeps the link in the file but hides it from the page
   Photo and og-image paths are relative to the site root. */
window.SITE = {
  url: 'https://heyharishreddy.in/',            // CHANGE to your real domain (used for canonical, share cards, SEO)
  ogImage: 'assets/og-image.jpg'
};

window.NEW_DAYS = 14;

window.PROFILE = {
  name: 'Harish Reddy Duggempudi',
  handle: '@hey.harish_reddy',
  bio: 'Developer · Community builder · Content creator from Hyderabad',
  photo: 'assets/portrait-hero.webp'
};

window.SOCIALS = [
  { name: 'Instagram', handle: '@hey.harish_reddy', url: 'https://www.instagram.com/hey.harish_reddy/', icon: 'instagram', desc: 'Short tech content, creator updates and moments from my journey.', cta: 'Follow on Instagram' },
  { name: 'YouTube', handle: '@hey.harish_reddy', url: 'https://youtube.com/@hey.harish_reddy', icon: 'youtube', desc: 'Longer videos on what I am building and learning in tech.', cta: 'Watch on YouTube' },
  { name: 'LinkedIn', handle: 'Harish Reddy Duggempudi', url: 'https://www.linkedin.com/in/harish-reddy-duggempudi/', icon: 'linkedin', desc: 'Professional updates, events and opportunities.', cta: 'Connect on LinkedIn' },
  { name: 'GitHub', handle: 'heyharishreddy', url: 'https://github.com/heyharishreddy', icon: 'github', desc: 'Code, projects and open source work.', cta: 'View on GitHub' }
  // Add: { name:'Telegram', handle:'@you', url:'https://...', icon:'link', desc:'...', cta:'Join on Telegram' }
];

window.LINKS = [
  // ADD NEW LINKS HERE (at the top), example:
  // { title: 'My new video', desc: 'Watch now', url: 'https://youtube.com/...', icon: 'youtube', added: '2026-11-01' },
  { title: 'Book a 1:1 on Topmate', desc: 'Career, student and community guidance', url: 'https://topmate.io/harish_reddy_duggempudi', icon: 'topmate', featured: true, cta: 'Book now' },
  { title: 'How to Join Microsoft Student Ambassadors', desc: 'My latest step-by-step guide', url: 'https://heyharishreddy.blogspot.com/2026/10/how-to-join-microsoft-student.html', icon: 'article', added: '2026-10-19' },
  { title: 'Nexoverse', desc: 'Tech communities and events in one place', url: 'https://nexoverse.in/', icon: 'globe' },
  { title: 'Portfolio website', desc: 'Projects, journey and events', url: './', icon: 'globe' },
  { title: 'Email me', desc: 'Talks, collaborations, roles', url: 'mailto:harishreddyduggempudi@gmail.com?subject=Hello%20Harish', icon: 'mail' }
];

window.LINK_ICONS = {
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  topmate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
  article: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M8 7h7M8 10h5"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'
};
