import React from 'react';
import './styles33.css';
import Foot from './components/Foot';
import BurgerMenu from './BurgerMenu';
const App = () => {
  return (
    <div className="father">
      <BurgerMenu />
      <div className="left-part">
        <nav id="navbar">
          <header className="first-nav">Introduction</header>
          <a className="nav-link" href="#Introduction">Introduction</a>
          <a className="nav-link" href="#History">History</a>
          <a className="nav-link" href="#Synopsis">Synopsis</a>
          <a className="nav-link" href="#Appearance">Appearance</a>
          <a className="nav-link" href="#Name_Origin">Name Origin</a>
          <a className="nav-link" href="#Personality_and_Characteristics">Personality and Characteristics</a>
          <a className="nav-link" href="#Gadgets">Gadgets</a>
          <a className="nav-link" href="#Relationship_with_Nobita">Relationship with Nobita</a>
          <a className="nav-link" href="#Dark_Side_of_Doraemon">Dark Side of Doraemon</a>
          <a className="nav-link" href="#Conclusion">Conclusion</a>
        </nav>
      </div>
      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>Introduction</header>
          <img className="intro-img" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2015%2F08%2Fthis-doraemon-x-grand-theft-auto-visualization-will-ruin-your-childhood-1.jpg?cbr=1&q=90" alt="Doraemon Introduction" />
          <p className="font-bold">
          MS-903 <code>"Doraemon"</code> or simply Doraemon (ドラえもん Doraemon) is the titular protagonist and main character of the Doraemon franchise. After being manufactured in a Factory in the 22nd century, he is sent back in time by his owner, Sewashi Nobi, to help out his great-great-great-great-great-great-great-grandfather, Nobita Nobi, in becoming a successful person with a bright future.

Doraemon was voiced by Kosei Tomita in the early 1973 episodes and Masako Nozawa in the later 1973 episodes. In the 1979 anime, he is voiced by Nobuyo Oyama which in turn, was voiced by Wasabi Mizuta in the 2005 anime.
          </p> <br/>
          <p className="font-bold">Here's a <code>code</code> for a dancing Doraemon:</p> <br/>
          <pre className="dora-code">
            {`
import pygame, sys
pygame.init()
screen = pygame.display.set_mode((800, 600))
doraemon = pygame.image.load("doraemon.png")
doraemon_rect = doraemon.get_rect(center=(400, 300))

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    screen.fill((255, 255, 255))
    screen.blit(doraemon, doraemon_rect)
    pygame.display.flip()
            `}
          </pre>
        </section>
        <hr />
        <section className="main-section" id="History">
          <header>History</header>
          <img className="intro-img" src="https://i.pinimg.com/originals/4c/6f/1b/4c6f1ba7921aa7e7fe86962a36186cef.jpg" alt="Doraemon History" />
          <p className="font-bold">Doraemon's history was constantly retconned and has differed in various iterations, but several aspects remained consistent.

Doraemon was manufactured in the Matsushiba Robot Factory in the year, 2112, bearing the code, MS-903. He was damaged by an electrical bolt during production which detached a critical screw from him, degrading his abilities in general while crippling a variety of external attachments. As with his peers purposed as mechanical child caretakers resembling cats, he also underwent training, though his performance is generally subpar and he is often regarded as an outmode. Sometime before he entered service, he was infatuated with another mechanical cat named <code>Noramyako</code>.</p> <br/>
<p className="font-bold">
After he left production, Doraemon was adopted by an infant Sewashi Nobi, who he quickly bonds with. Being designed after a cat, he was not musophobic (afraid of mice). However, his ears were later damaged by rats, causing his phobia of rats, and to his terror, eventually a failed surgery left him bald. Noramyako, who happened to visit him, laughs uncontrollably at his bald head, and their relationship sours. He is unable to obtain any replacements due to Sewashi's low income. Soon, he loses his bodywork in his depression and is left with the blue base paint, resulting in the manufacture of his sister model Dorami.
</p> <br/><p className="font-bold">
As per the request of Sewashi, Doraemon is later dispatched into the past and stays to help Sewashi's great-great grandfather Nobita in an attempt to alter the horrendous future of the Nobi family, setting the entire series' events into action.Doraemon, Nobita, and their friends embark on time-traveling adventures(which mostly break laws of time). Doraemon saves not only Nobita's life but also the lives of Shizuka, Suneo, Jaian, and other characters.</p> <br/>
        </section>
        <hr />
        <section className="main-section" id="Synopsis">
          <header>Synopsis</header>
          <img className="intro-img" src="https://mir-s3-cdn-cf.behance.net/projects/404/a59fb8106246611.Y3JvcCwyMTYwLDE2ODksMCw1MDI.jpg" alt="Doraemon Synopsis" />
          <p className="font-bold">Nobita Nobi is a ten-year-old Japanese school boy, who is kind-hearted and honest, but also lazy, unlucky, weak, gets bad grades and is bad at sports. One day, a blue robot cat from the 22nd century named Doraemon is sent back to the past by Nobita's future grandchild, Sewashi Nobi, to take care of Nobita so that his descendants can have a better life. Doraemon has a four-dimensional pouch in which he stores tools, inventions, and gadgets from the future to aid Nobita whenever he is faced with a problem. Although Doraemon is a cat robot, he has a fear of mice because of an incident where robotic mice chewed off his ears. This is why Doraemon lost his original yellow color and turned blue, from sadness.</p> <br/>

<p className="font-bold">Nobita has three main friends: <code>Takeshi Goda (nicknamed Gian), Suneo Honekawa (Gian's sidekick), and Shizuka Minamoto</code>, Nobita's best friend and love-interest. Gian is a strong, leading and domineering boy, but also loyal to his friends. Suneo is a wealthy and spoiled boy who uses his friendship with Gian to win the respect of other schoolmates. Shizuka is a gentle and kind girl who frequently plays with Nobita. Nobita has a crush on Shizuka; she is his prospective future wife (Nobita's future wife is initially Gian's younger sister). Although Gian and Suneo are Nobita's friends, they also typically bully and abuse him. Nobita normally responds by using Doraemon's gadgets to fight back against them, but Nobita has a tendency to get carried away with using the gadgets (or Gian and Suneo, if they steal it away), which typically results in unintended consequences for him and others.</p> <br/>

<p className="font-bold">In addition to Gian, Suneo, and Shizuka, Dorami and Hidetoshi Dekisugi are also recurring characters. Dorami is Doraemon's younger sister, and Dekisugi is a gifted student boy who as Shizuka's close friend, frequently attracts the jealousy of Nobita.</p> <br/>
        </section>
        <hr />
        <section className="main-section" id="Appearance">
          <header>Appearance</header>
          <img className="intro-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36ed72aa-2ae7-4ce3-8061-7d1dec90061d/d6fov1y-fc9b8fb3-05df-4b79-9b51-9361d87ae22a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2ZWQ3MmFhLTJhZTctNGNlMy04MDYxLTdkMWRlYzkwMDYxZFwvZDZmb3YxeS1mYzliOGZiMy0wNWRmLTRiNzktOWI1MS05MzYxZDg3YWUyMmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u9Dj32VR5g0Wns0i6WGkM_wbVrDO449jvf_AdndCKns" alt="Doraemon Appearance" />
          <p className="font-bold">Doraemon is a blue cat robot corresponding (tints of pink-orange in earlier comic chapters and media) from the 22nd century.However, Nobita didn't improve much even after Doraemon arrived, as he would often take gadgets from Doraemon and use them to seek revenge against his friends Suneo and Jaian. Some people mistakenly refer to Doraemon as a raccoon dog, but he always corrects them by firmly stating, "I'm not a raccoon dog, I'm a cat robot, Doraemon!" Sadly, Suneo(Sneech), Jaian(Big G), and Nobita(Noby) often make fun of him for this. Doraemon's favorite gadget is the Bamboo Copter, which he uses frequently. Additionally, Doraemon loves to eat Doracakes (Bean Jam Cakes) and eats them often.</p> <br/>

<p className="font-bold">Despite being based on a cat, hence his title as the "Gadget Cat from the Future" in the Americanized Doraemon dub, Doraemon resembles a racoon dog (referred to as a seal in the American dub), albeit it being a running joke. He is blue in color while his face and front middle portion of the body being white in color. He has got circular palms and feet. He has 6 whiskers like cats. Although being made up of metal, he can get squeezed and can be stretched. He has big eyes, a red circular nose and a big mouth consisting of huge teeth. He had ears which were eaten by a mouse (a robot mouse that misunderstood an order in the OVA), hence why he more resembles a racoon dog. He has a red tail which acts like a power lever.</p> <br/>

<p className="font-bold">He's got a 4D Pocket and a red collar around his neck, featuring a bell.</p> <br/>
        </section>
        <hr />
        <section className="main-section" id="Name_Origin">
          <header>Name Origin</header>
          <img className="intro-img" src="https://wallpapercave.com/wp/wp7251262.jpg" alt="Doraemon Name Origin" />
          <p className="font-bold">The name "Doraemon" can be translated roughly to "stray." Unusually, the name "Doraemon" (ドラえもん) is written in a mixture of two Japanese scripts: Katakana (ドラ) and Hiragana (えもん). "Dora" derives from "dora neko" (brazen or stray cat), and is a corruption of nora (stray). "emon" is a component of male given names like Goemon, though no longer as popular as in the past. "Dora" is not derived from dora, meaning gong, but due to the homophony, the series puns on this, with Doraemon loving grilled Dorayaki.</p> <br/>

<p className="font-bold">In India, the name Doraemon is pronounced as "Do-r(a)e-mon", rather than "Do-ra-emon".</p> <br/>
<hr/>
        </section>
        <hr />
        <section className="main-section" id="Personality_and_Characteristics">
          <header>Personality and Characteristics</header>
          <img className="intro-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfQItZlqMF3r4Fk8RvbQYURjXpwKqiFJ9iG-XSniOag&s" alt="Doraemon Personality" />
          <p className="font-bold">Being a machine, he does not have some average needs of a regular person, whatever he consumes is automatically converted to energy within his nuclear furnace, although he does need the energy to keep him on the move. His mouth can expand to an increasable size, allowing him to devour larger chunks of food easily. While he has sensors which work similar to their organic, living counterparts on most creatures, his hide and fuselage are incredibly tough, not deforming even while under attack most of the time, although the sensors often end up paralyzing him (such as against biological agents and temperature). While his outer skin can be stained, it is not difficult to clean.</p> <br/>

<p className="font-bold">His favorite food is Dorayaki (Yummy Buns in the USA dub). It was never specified as to how he developed this interest, as versions of the shows contradict each other slightly, although some iterations have attributed it to Noramyako, while others claim that he simply finds it tasty after eating one while he is in the past. Doraemon's love of dorayaki often leads him to getting exploited out of one, which leads into a fit of anger like in The Mecha Maker. He also likes to eat watermelon, pudding, tea, juice and various cakes.</p> <br/>

<p className="font-bold">Being also a cat automaton, he is easily infatuated by other cats, living or mechanical. He often acts as a peacekeeper to stop their arguments and gifts many items to them, ignoring his usual hobbies in the process. He would stop pursuing them if he is aware that they are better without him. However, he often gets extremely jealous if his love interests are occupied by others.</p> <br/>

<p className="font-bold">Doraemon often gets annoyed easily over anyone when criticize him for his performance or anyone who assumes he is a raccoon dog. His musophobia and iatrophobia often causes him to overreact, even threatening to detonate a nuclear weapon on the spot to kill a rat or refusing to attend to government-mandated robot check-ups. In a panic, Doraemon proves to be troublesome as he often messes up his current task carelessly and can produce hordes of irrelevant items from his 4D pocket, much to the annoyance of others.</p> <br/>

<p className="font-bold">Having no ears, Doraemon is quite shy around mechanical cats that have any, unless he is already acquainted with them.</p> <br/>
        </section>
        <hr />
        <section className="main-section" id="Gadgets">
          <header>Gadgets</header>
          <img className="intro-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6892cc05-309c-4c6a-8ccb-ed5eae47b95b/d1l9179-cdc1c82b-5c8f-4558-8a37-9359108a96aa.jpg/v1/fit/w_375,h_359,q_70,strp/gangster_doraemon_by_kamenridermoik_d1l9179-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc1IiwicGF0aCI6IlwvZlwvNjg5MmNjMDUtMzA5Yy00YzZhLThjY2ItZWQ1ZWFlNDdiOTViXC9kMWw5MTc5LWNkYzFjODJiLTVjOGYtNDU1OC04YTM3LTkzNTkxMDhhOTZhYS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mbrExAjL_btv-XI8tqsOGEPFXB7Mn78UB18omQrExqU" alt="Doraemon Gadgets" />
          <p className="font-bold">Gadgets, or "himitsu dōgu" (ひみつ道具), are Doraemon's tools from the future, usually used to help the characters. Fujio said that Doraemon has a total of 1,293 gadgets; according to a 2004 analysis by Yasuyuki Yokoyama of Toyama University, there are 1,963 gadgets found in 1,344 sketches. The most important gadgets include "Take-Copter", a small piece of headgear made out of bamboo that can allow its users to fly; "Time Machine", a machine used for time travel; "Anywhere Door", a pink-colored door that allows people to travel according to the thoughts of the person who turns the knob; "Time Kerchief", a handkerchief which can turn an object new or old or a person young or old; "Translator Tool", a cuboid jelly that allow one to converse in any language; and "Designer", a camera used to instantly dress-up the user.</p> <br/>

<p className="font-bold">Saya S. Shiraishi wrote that most of the gadgets were "an impressive testimony to the standards of quality control and innovation that exist in the twenty-second century". The gadgets were an essential part of the series so as to reflect a positive point of view about the association of technology in children, and to express the wishes of modern society.</p> <br/>
        </section>
        <hr />
        <section className="main-section" id="Relationship_with_Nobita">
          <header>Relationship with Nobita</header>
          <img className="intro-img" src="https://wallpapercave.com/wp/wp7250884.png" alt="Doraemon Relationship with Nobita" />
          <p className="font-bold">Nobita and Doraemon are best friends. They both have a strong bond and will never leave each other's side. As seen in many episodes.</p> <br/>
<p className="font-bold">Most of the time, whenever Nobita comes home crying and whining about his bad day, Nobita would pounce on and/or wrap his arms around Doraemon begging for something to make him feel better.Nobita once insulted Doraemon by calling him "useless" because Doraemon had failed to help him on numerous occasions. For example, when Nobita was being chased by Gian and Suneo, or when he needed help with his homework. These instances made Doraemon angry and he felt the need to prove Nobita wrong by using his gadgets to help him out.</p> <br/>
<p className="font-bold">One of their best moments was after the events of All the Way From the Country of the Future, Doraemon and Nobita play baseball in the open lot. Nobita fails to catch an easy ball from Doraemon making Doraemon furious. Nobita wants to go home and said that he can't do anything but it was stopped by Doraemon. Doraemon said that he doesn't want to study, doesn't want to play, he never tries harder and that's the reason why he was useless. Nobita answered that just because he can't do anything, doesn't mean he's useless. Both of them argued. Nobita accidentally removes Doraemon's bells and he went to drainage. Nobita and Doraemon try their best to find it until it was sunset. </p> <br/>
<p className="font-bold">Doraemon suggests Nobita go home and the bell is impossible to find in the dark and Nobita apologizes. As Nobita wears his shoes he finds Doraemon's bell in one of them and the two of them laugh. Doraemon thanks Nobita and says that he will remember it forever. Doraemon says that he realizes that even though Nobita cannot study harder, cannot play harder, but he is a kind and good person. This makes Nobita smile and the two go home. Doraemon had this memory stuck with him ever since, and in the events of the movie, is the reason he refuses to use a replacement bell when his original bell goes missing. Nobita doesn't remember that event until later in the movie.</p> <br/>
<p className="font-bold">Despite the various complications that impeded his efforts to assist Nobita, Doraemon was undeterred and emerged victorious, managing to interfere with the past enough for Nobita to marry Shizuka and get him a better future.</p> <br/>
        </section>
        <hr />
        <section className="main-section" id="Dark_Side_of_Doraemon">
          <header>Dark Side of Doraemon</header>
          <img className="intro-img" src="https://wallpapercave.com/wp/wp7250880.jpg" alt="Dark Side of Doraemon" />
          <p className="font-bold">Some say that Doraemon has some dark and depressing one-shots by Fujiko F. Fujio, including <code>Ultra Super Deluxe Man and Cambyses no Kuji, Jibun Kaigi, or ``Self Meeting'', and The Great Prophecy</code>. These one-shots cover themes like society, morality, mankind, multiverse theory, time travel, and the afterlife. 
Some people also dislike Doraemon because of Nobita's character, finding him irritating and dumb. Others say that the show might give children the wrong idea about needing external help. For example, some say that if a kid under 12 watches Doraemon repeatedly throughout the day, they might grow up with a mentality that if anything goes wrong, they should cry and yell for help. This could prevent them from developing problem solving skills, which are important in the modern era. 
However, others say that Doraemon can teach kids about logic, imagination, selflessness, honesty, compassion, and love. 
Anyways, If you want to talk about Doraemon being dark, it starts with a robot from the future coming into his room and telling him his future sucks because he married the person that he didn't like, his company got burned to the ground and lived with debt for most of his life.
</p> <br/>
        </section>
        <hr />
        <section className="main-section" id="Conclusion">
          <header>Conclusion</header>
          <p className="font-bold">"Doraemon," the beloved Japanese manga and anime series, has captured the hearts of audiences worldwide with its endearing characters, imaginative storytelling, and timeless messages. Through the adventures of the robotic cat Doraemon and his young friend Nobita, the series explores themes of friendship, perseverance, and the importance of kindness and empathy.

With its blend of humor, fantasy, and heartfelt moments, Doraemon has left a lasting impact on multiple generations, inspiring creativity, fostering a sense of wonder, and teaching valuable life lessons along the way. Its enduring popularity continues to resonate with audiences of all ages, making it a cultural icon and a cherished part of Japanese pop culture.</p> <br/>
        </section>
        <hr/>
        <h2 className="last-heading">Why Should You Watch Doraemon?</h2>
<ul>
      <li className="last-heading-text">He Comes Out At Night</li>
      <li className="last-heading-text">He Likes DoraCake</li>
      <li className="last-heading-text">He Likes Little Children</li>
      <li className="last-heading-text">He Uses A Portable Flying Helicopter To Spook On People</li>
      <li className="last-heading-text">He Has An Anywhere Door Which Can Open Up In Your Bathroom As Well</li>
</ul>
<Foot/>
      </main>
  
    </div>
  );
};

export default App;
