# Macondo

My personal website and developer portfolio (idk if i should call this a portfolio, maybe not).

I built this because I wanted a personal website that actually felt personal, and the previous one was cringe, if you know you know.

A lot of portfolios look the same after a while. Since this was supposed to 
represent me, I wanted every feature to exist because I liked it. Not because 
it was trendy, not because it looked professional, just because I thought it 
was cool.

---

## The Idea

Build something that connects back to me somehow.

I spent a lot of time going through portfolio websites, hero sections, layouts, 
random ideas I found online. I wanted something memorable, catchy, colourful, 
and fun. I don't remember the fourth thing I wrote in my journal btw.

After looking around and taking inspiration from different places, I slowly 
started building my own version. This website is basically a collection of 
things I thought were cool, combined into one place.

---

## The Dock

I don't own a MacBook. I have been using Windows for upto 9 years.

But I use MyDockFinder every single day as a replacement for the Windows 
taskbar because I love how docks work. They do the same job as navbars but 
feel way more interactive. So I didn't build a navbar. I built a dock.

Every icon opens a modal inspired by the Preferences window from MyDockFinder.

CSS had other plans though. The modal was one of the most annoying parts of 
the project because everything kept stacking vertically no matter what I did. 
I spent way too long fighting layouts before things finally went where they 
were supposed to go.

I don't remember the exact bug anymore. I only remember hitting my head on the wall, lol.

---

## The Avatar Menu

I wanted my social links to feel more fun than just a boring row of icons so 
I hid them behind my avatar. Click it and they burst out in four directions.

Originally I wanted uneven positions. I failed at that, sadly. I accidentally 
built a perfectly symmetrical radial menu instead and at some point decided 
it looked cool enough to leave alone.

Sometimes bugs become features.

---

## The Arrow

I wanted a doodle arrow pointing toward the avatar. I found a reference on 
Freepik but I'm not great at illustrations so after trying a few things I 
ended up generating one.

It accidentally ended up looking a lot like something from Excalidraw, which 
is one of my favourite tools. So it matched something I already liked without 
me even planning it.

I also added the text "clik me" next to it.

Yes it's missing a letter. No I'm not fixing it. I think it looks better 
this way.

I then also went forward to give it that red line, which Microsoft Word gives under incorrect words. Looked so COOLl.  Then I put a tool tip to let people know that error was intentional,
TOO COOL!

---

## The Cat

My favourite feature. Also the feature that caused me the most pain.

I watched a Fireship video where he talked about how developers love flexing 
on top of other people's work. That idea got permanently stuck in my brain.

So I went looking for ways to add a cat to my website and found three options:

- oneko.js — lightweight and polished
- cat.js — cute
- Catify — broken

Naturally I picked Catify.

Catify was a side project with the most potential but also the most problems. 
I thought about redesigning the sprites entirely, then I thought about how 
long that would actually take and immediately dropped the idea.

So I started fixing Catify instead.

Then I kept fixing Catify.

Then I kept fixing Catify some more.

I changed the colour to orange and it stopped feeling like Catify's cat. 
It started feeling like my cat.

I probably fixed somewhere between 15 and 30 bugs over the course of the 
project. The jumping was weird, the movement was weird, the animation system 
was weird. Everything about Catify was painful.

Then the cat started walking backwards.

I called this the moonwalking bug, i haven’t watched michael 😥 (but i will). 

I tried using Claude to debug it. Claude suggested changes in completely 
different parts of the code and somehow made things worse. I was done with AI 
at that point. I sat down and just read the source code slowly myself.

After 1-2 hours I found it.

The `dir` variable had 1 and 0 swapped. That's it. One variable. I wanted 
to throw my laptop across the room.

1 = right
0 = left

I had them flipped. Fixed that and the moonwalking stopped.

Then the animation frames started switching too fast because `astep++` was 
being called every time the update function ran. Since update ran constantly, 
the cat looked absolutely possessed. Moved the increment so it only happened 
while the cat was actually walking and that fixed it.

The commit after all of this was:

> dude just fixed the cat

I posted about it on Instagram.

But I wasn't done. After fixing the walking I still had to build the speaking 
and the click-to-idle on top of that, which was a whole other thing.

The cat now roams around using `Math.random()` to decide when to walk and 
when to go idle. If you click it, it stops and throws up a speech bubble with 
one of these:

- meow
- meow meow
- meow meow meow
- purrrrrrrr

There's also one last message. It's for my friends. If you know what 
Space Monkey means, you're probably one of them.

---

## The Catify Situation

The Catify codebase got a little messy while I was working on it. Some of 
that was experimentation, some of it was debugging, and some of it was GitHub 
Desktop doing GitHub Desktop things. Some code ended up duplicated along the 
way.

I cleaned the code bcz stupid cat was not working for another hour and I was thinking, like wtf is going on. It fixed the stupid bug

---

## Fonts, Tooltips and Other Things

I spent a lot of time on small details. Tooltips, fonts from Google Fonts, 
colours, spacing. Most people won't notice. I notice. That's enough for me. khikhi or hehe

---

## Built With

- HTML
- CSS
- JavaScript

No frameworks. Just me, a text editor, a cat, and way too many hours of 
debugging.

---

## Inspirations

- Fireship
- Catify
- MyDockFinder
- Excalidraw
- Freepik
- CodePen
- Google Fonts

---

## Writing This README

Writing this was also painful. Not Catify painful, but still painful.

I thought it would take a few minutes. Then I realised I had forgotten half 
the bugs and half the decisions. I ended up digging through journal entries, 
commit messages, and screenshots of me slowly losing my mind over a cat.

---

## Final Thoughts

This website isn't trying to be the most professional portfolio out there.

It's supposed to feel like me.

The dock exists because I use MyDockFinder every day. The arrow exists because 
I thought it looked cool. The radial menu exists because a boring row of icons 
felt wrong. The cat exists because I watched a Fireship video and accidentally 
spent 50+ hours (wait, i think that is a giveaway) getting emotionally attached to a broken open source cat.

If you leave this website remembering two things, I hope it's my username and 
the orange cat.

From somebodyouknow!


## Resources
- https://codepen.io/tahazsh/pen/YzbaEJq
- https://codepen.io/sarazond/pen/LYGbwj
- https://fonts.google.com/specimen/Coming+Soon
- https://github.com/yobert/catify
- https://www.youtube.com/watch?v=r6tH55syq0o 


