---
title: 'Ditching the mailto link: Click to Copy Email pattern'
metaDesc: 'According to the statistics, less than 15% of desktop users configure their native apps for email sending. If this is so infrequent, then why we all slam mailto: links in our websites? In this post, we’ll explore some alternate techniques, along with some use cases where it’s worth using it.'
date: '2021-03-29'
publishedOn: ''
tags: ['css', 'javascript', 'tips', 'user experience']
url: ''
---

<h3 id="introduction">
  Introduction

  <a href="#introduction" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

Many of us have been there: You click on an email link, and the Mail app buried deep in your computer’s hard drive is back to haunt you. According to the statistics, [less than 15% of desktop users](https://emailclientmarketshare.com/) configure their native apps for email sending.

If this is so infrequent, then why we all slam `mailto:` links in our websites? In this post, we’ll explore some alternate techniques, along with some use cases where it’s worth using it.

<h3 id="the-problem">
  The Problem

  <a href="#the-problem" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

We’ve all been there: We click in one of those `Let’s get in touch` button, and all of a sudden...

<figure>
  <img
    src="https://res.cloudinary.com/juanmartingarcia/image/upload/w_512,f_auto,q_auto:good/blog/ditching-the-mailto-link/7CCD4B04-5199-48FD-AD8E-ECF48F8D67F5.jpg"
    srcset="https://res.cloudinary.com/juanmartingarcia/image/upload/w_256,f_auto,q_auto:good/blog/ditching-the-mailto-link/7CCD4B04-5199-48FD-AD8E-ECF48F8D67F5.jpg 256w, https://res.cloudinary.com/juanmartingarcia/image/upload/w_512,f_auto,q_auto:good/blog/ditching-the-mailto-link/7CCD4B04-5199-48FD-AD8E-ECF48F8D67F5.jpg 512w, https://res.cloudinary.com/juanmartingarcia/image/upload/w_650,f_auto,q_auto:good/blog/ditching-the-mailto-link/7CCD4B04-5199-48FD-AD8E-ECF48F8D67F5.jpg 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    loading="lazy"
    alt="A screenshot of the default Apple Mail app, with a pop up that says Choose a Mail account provider, with multiple options to choose from. There’s no way to get the user’s email unless you set up the app."
  />
  <figcaption>
    A screenshot of the default Apple Mail app, with a pop up that says “Choose a Mail account provider...” with multiple options to choose from. There’s no way to get the user’s email unless you set up the app.
  </figcaption>
</figure>

Probably not a good user experience to trigger a forgotten app in our computers, which isn’t likely configured yet, just to get someone’s email, copy it, and take it to our real email client of choice.

The reality is that less than 15% of users on desktop resolutions use the native Mail app, according to [Email Market Share](https://emailclientmarketshare.com/). Thus, it might be worth exploring some alternatives to this, at least for our desktop users.

<h3 id="the-solution">
  The Solution

  <a href="#the-solution" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

Let’s explore a few of the alternatives we have to solve this problem:

<h4 id="use-email-address-as-text">
  Use the email address as the text of the link

  <a href="#use-email-address-as-text" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h4>

<figure>
  <img
    src="https://res.cloudinary.com/juanmartingarcia/image/upload/w_512,f_auto,q_auto:good/blog/ditching-the-mailto-link/CAA9DD27-2400-4AAF-8658-A708B9389C49.jpg"
    srcset="https://res.cloudinary.com/juanmartingarcia/image/upload/w_256,f_auto,q_auto:good/blog/ditching-the-mailto-link/CAA9DD27-2400-4AAF-8658-A708B9389C49.jpg 256w, https://res.cloudinary.com/juanmartingarcia/image/upload/w_512,f_auto,q_auto:good/blog/ditching-the-mailto-link/CAA9DD27-2400-4AAF-8658-A708B9389C49.jpg 512w, https://res.cloudinary.com/juanmartingarcia/image/upload/w_650,f_auto,q_auto:good/blog/ditching-the-mailto-link/CAA9DD27-2400-4AAF-8658-A708B9389C49.jpg 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    loading="lazy"
    alt="A screenshot of the footer on my website, where you can find a subtitle that says Get in touch and below, my personal email address, which is being highlighted with the cursor."
  />
  <figcaption>
    A screenshot of the footer on my website, where you can find a subtitle that says “Get in touch” and below, my personal email address, which is being highlighted with the cursor.
  </figcaption>
</figure>

This way, the user can easily copy it, without having to open the Mail app or Inspect Element in their browsers if they are savvy enough, to get the email URL.

<h4 id="use-a-form">
  Use a form

  <a href="#use-a-form" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h4>

<figure>
  <img
    src="https://res.cloudinary.com/juanmartingarcia/image/upload/w_512,f_auto,q_auto:good/blog/ditching-the-mailto-link/E061E42F-88DA-48C9-8959-B902A2210618.jpg"
    srcset="https://res.cloudinary.com/juanmartingarcia/image/upload/w_256,f_auto,q_auto:good/blog/ditching-the-mailto-link/E061E42F-88DA-48C9-8959-B902A2210618.jpg 256w, https://res.cloudinary.com/juanmartingarcia/image/upload/w_512,f_auto,q_auto:good/blog/ditching-the-mailto-link/E061E42F-88DA-48C9-8959-B902A2210618.jpg 512w, https://res.cloudinary.com/juanmartingarcia/image/upload/w_650,f_auto,q_auto:good/blog/ditching-the-mailto-link/E061E42F-88DA-48C9-8959-B902A2210618.jpg 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    loading="lazy"
    alt="A screenshot of a Contact Form, taken from one of my CodePen links"
  />
  <figcaption>
    A screenshot of a Contact Form, taken from one of my CodePen links: https://codepen.io/imjuangarcia/pen/LeoeGw
  </figcaption>
</figure>

This alternative allow us to connect with the person directly, without the need to use our Email clients. However, it’s a more complex solution, prone to spam and abuse, and which doesn’t fully replace the email experience. So what else is there left?

<h4 id="the-click-to-copy-pattern">
  The Click to Copy pattern

  <a href="#the-click-to-copy-pattern" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h4>

We’ve seen the `Click to Copy` button in many web interactions: Code Blocks, Translations, amongst many others. Heck, I even use this pretty heavily throughout my site:

```markdown
Hi there! Try to copy me using the 
Copy to Clipboard button at the right-hand-side
of this code block 👉🏻👉🏻👉🏻
```

Then why not use it for our contact email as well? It’s simpler, frictionless for the 85% which doesn’t use the default Mail app, and still provides a comparable experience for the remaining 15%. Let’s take a look a the solution:

```html
<main>
  <h1>Copy me!</h1>
  <div class="click-to-copy-container">
    <button 
      class="click-to-copy"
      title="Click to Copy Email Address"
    >
      hello@juangarcia.com.ar
    </button>
    <span>Copied!</span>
  </div>
</main>
```

```css
/* Styling and layout purposes only */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

main {
  background: #F9F5FF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}

main h1 {
  font-weight: 600;
  font-size: 34px;
  letter-spacing: -0.4px;
  color: #07070A;
}

.click-to-copy-container {
  position: relative;
}

button.click-to-copy {
  background: #21FA90;
  border: none;
  box-shadow: none;
  padding: 1rem;
  border-radius: .25rem;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: #07070A;
  transition: all .2s ease-in-out;
}

button.click-to-copy:hover {
  opacity: .8;
}

button.click-to-copy + span {
  /* We make the span hidden by default. In this case, using display: none; isn't an issue from an accessibility standpoint, since we don't want screen readers to pick this up unless the user clicks on the button */
  display: none;
  /* From here on, just styling purposes 👇🏻 */
  margin-left: 1rem;
  background: #DADADA;
  padding: .5rem;
  border-radius: .2rem;
  position: absolute;
  top: .75rem;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .4px;
  font-weight: 600;
  color: #666;
}

/* Styles for the tooltip arrow */
button.click-to-copy + span:after {
	right: 100%;
	top: 50%;
	border: solid transparent;
	content: "";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(218, 218, 218, 0);
	border-right-color: #DADADA;
	border-width: 6px;
	margin-top: -6px;
}

/* When the click event is fired, and the .is-copied class is added to the button, show the tooltip */
button.click-to-copy.is-copied + span {
  display: initial;
}
```

```javascript
// Select the button from the markup
const button = document.querySelector('.click-to-copy');


// Function that runs on click. It: 
// 1) Prevents the default behavior of the button (refresh the page);
// 2) Runs the copyToClipboard function;
// 3) Adds and removes some CSS classes, used for styling and notifying the user about the copy event
const clickToCopy = (e) => {
  e.preventDefault();
  copyToClipboard(e.currentTarget.textContent);
  e.target.classList.add('is-copied');
  setTimeout(() => { e.target.classList.remove('is-copied') }, 1200);
}

// Copy to clipboard function, taken from https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript/
const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

// Fire the event on click
button.addEventListener('click', clickToCopy);
```

Check out this in action on the CodePen link below:

<iframe height="300" style="width: 100%;" scrolling="no" title="Click to Copy email" src="https://codepen.io/imjuangarcia/embed/preview/xxRaqMZ?height=300&theme-id=39186&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/xxRaqMZ'>Click to Copy email</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<h3 id="mailto-links-in-mobile-resolutions">
  Mailto: links in mobile resolutions

  <a href="#mailto-links-in-mobile-resolutions" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

In mobile resolutions the situation changes dramatically, since more than 40% of users have their email client apps configured on their phones. This is where `mailto:` links become relevant again, and we need to accommodate for a fallback to our previous solution.

There are multiple ways to achieve this. For this particular example, I decided to add an `<a>` tag on the HTML:

```html
<main>
  <h1>Copy me!</h1>
  <div class="click-to-copy-container">
    <button 
      class="click-to-copy"
      title="Click to Copy Email Address"
    >
      hello@juangarcia.com.ar
    </button>
    <span>Copied!</span>
  </div>
  <!-- fallback link for mobile resolution -->
  <a href="mailto:hello@juangarcia.com.ar" class="click-to-copy-fallback">
    hello@juangarcia.com.ar
  </a>
</main>
```

Which will be hidden by default on desktop:

```css
/* Hide the fallback version on desktop resolutions */
a.click-to-copy-fallback {
  display: none;
}
```

And toggled using media queries in the CSS:

```css
/* Toggle fallback version for mobile, where the native email apps are way more used and mailto link become way more relevant. I'm using an iPad portrait resolution as the breakpoint, but feel free to play with it! */
@media screen and (max-width: 768px) {
  /* Hide the desktop click to copy button */
  button.click-to-copy {
    display: none;
  }
  
  /* And show its replacement, the default mailto link */
  a.click-to-copy-fallback {
    display: block;
  }
}
```

This way, we can have the best of both worlds, while providing top-notch experiences to our users, regardless of the device they’re using to access our sites 💯

<h4 id="conslusion">
  Conclusion

  <a href="#conslusion" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h4>

That’s it for this one! Hope you learned a few things about `mailto:` links, when they are useful and when to avoid them. Feel free to start using this technique to provide a better UX for your users!