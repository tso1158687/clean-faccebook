const navigationDivs = document.querySelectorAll('div[role="navigation"]');
const complementary = document.querySelectorAll('div[role="complementary"]');
const region = document.querySelectorAll('div[role="region"]');
const banner = document.querySelectorAll('div[role="banner"]');
const links = document.querySelectorAll('a[href*="ads"]');

navigationDivs.forEach((div) => div.remove());
complementary.forEach((div) => div.remove());
region.forEach((div) => div.remove());
banner.forEach((div) => div.remove());
