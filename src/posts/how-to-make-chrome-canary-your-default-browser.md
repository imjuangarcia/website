---
title: 'How to make Chrome Canary your default browser'
date: '2018-02-20'
publishedOn: 'Medium'
metaDesc: 'A post showing how to make a secondary installation of Google Chrome your default browser.'
tags: ['browsers', 'tips', 'web development']
url: 'https://medium.com/@imjuangarcia/how-to-make-chrome-canary-your-default-browser-cd8b4c9b882a'
---

As developers, we always try to keep up to date with the latest technologies and features of the tools we use. If you’re a web developer, chances are you already use the nightly versions of the most popular browsers, like Firefox or Chrome.

I’ve personally leaned over Firefox Developer Edition over the last few months but was a chrome-heavy user until then. I used Chrome Canary for a long time, and I remember my first struggle when I tried to set it as my default browser:

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_F_5-3GDXduZpMojfD6xNbA.png"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/w_256,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_F_5-3GDXduZpMojfD6xNbA.png 256w, https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_F_5-3GDXduZpMojfD6xNbA.png 512w, https://res.cloudinary.com/jmg-cursos/image/upload/w_650,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_F_5-3GDXduZpMojfD6xNbA.png 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    loading="lazy"
    alt="An error message preventing us to set Chrome Canary as our default browser."
  />
  <figcaption>
    An error message preventing us to set Chrome Canary as our default browser.
  </figcaption>
</figure>

<h3 id="the-solution">
  The Solution

  <a href="#the-solution" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

If you are using a Mac, don’t panic! There’s a simple solution to this. First of all, we need to head up to our system preferences folder:

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_7ybymKKG3xw0d95-MvhxAw.png"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/w_256,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_7ybymKKG3xw0d95-MvhxAw.png 256w, https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_7ybymKKG3xw0d95-MvhxAw.png 512w, https://res.cloudinary.com/jmg-cursos/image/upload/w_650,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_7ybymKKG3xw0d95-MvhxAw.png 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    loading="lazy"
    alt="A screenshot of the System Preferences panel."
  />
  <figcaption>
    A screenshot of the System Preferences panel.
  </figcaption>
</figure>

And in the “General” tab, change your default browser from here:

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_MK_HSTmVd4ebMejWo32-ZA.jpg"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/w_256,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_MK_HSTmVd4ebMejWo32-ZA.jpg 256w, https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_MK_HSTmVd4ebMejWo32-ZA.jpg 512w, https://res.cloudinary.com/jmg-cursos/image/upload/w_650,f_auto,q_auto:good/blog/how-to-make-chrome-canary-your-default-browser/1_MK_HSTmVd4ebMejWo32-ZA.jpg 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    loading="lazy"
    alt="A screenshot of the General tab on the System Preferences panel, showing a 'Default' Web Browser option."
  />
  <figcaption>
    A screenshot of the General tab on the System Preferences panel, showing a 'Default' Web Browser option.
  </figcaption>
</figure>

<h4 id="wrapping-up">
  Wrapping up

  <a href="#wrapping-up" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h4>

That’s all you need to get Chrome Canary up and running as your default browser in OS X. Hope this little piece of advice saves you a headache, as it saved mine when I discovered it! And if you like it, feel free to share it with your fellow developers!