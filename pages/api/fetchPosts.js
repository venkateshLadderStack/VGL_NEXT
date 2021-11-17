export const fetchAllPosts1 = async () => {
  const page1res = await fetch(
    "https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=1"
  );
  const page1posts = await page1res.json();

  const page2res = await fetch(
    "https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=2"
  );
  const page2posts = await page2res.json();

  const page3res = await fetch(
    "https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=3"
  );
  const page3posts = await page3res.json();

  return [...page1posts, ...page2posts, ...page3posts];
};

export const fetchAllPosts2 = async () => {
  const page4res = await fetch(
    "https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=4"
  );
  const page4posts = await page4res.json();

  const page5res = await fetch(
    "https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=5"
  );
  const page5posts = await page5res.json();

  return [...page4posts, ...page5posts];
};

export const fetchAllPosts3 = async () => {
  const page6res = await fetch(
    "https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=6"
  );
  const page6posts = await page6res.json();

  const page7res = await fetch(
    "https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=7"
  );
  const page7posts = await page7res.json();

  return [...page6posts, ...page7posts];
};

export const fetchAllPosts4 = async () => {
  const page8res = await fetch(
    "https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=8"
  );
  const page8posts = await page8res.json();

  const page9res = await fetch(
    "https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=9"
  );
  const page9posts = await page9res.json();

  return [...page8posts, ...page9posts];
};

export const fetchAllPosts5 = async () => {
  const page10res = await fetch(
    "https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=10"
  );
  const page10posts = await page10res.json();

  return [...page10posts];
};
